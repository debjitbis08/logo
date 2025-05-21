import { createEffect, createSignal, onCleanup, onMount, useContext } from "solid-js";
import { EditorState, StateField, StateEffect, RangeSet, Compartment } from "@codemirror/state";
import { EditorView, GutterMarker, Decoration, keymap, gutter } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { basicSetup } from "codemirror";
import "./CodeMirror.css";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipPortal, TooltipArrow } from "./generic/Tooltip";
import { FiHelpCircle } from "solid-icons/fi";
import { store, setStore } from "../store/store";

export function CodeMirror(props) {
    let editorRef; // Reference to the DOM element where CodeMirror will be mounted
    const [isEditorLoading, setIsEditorLoading] = createSignal(true);

    const addLineHighlight = StateEffect.define();
    const removeLineHighlight = StateEffect.define();

    const lineHighlightField = StateField.define({
        create() {
            return Decoration.none;
        },
        update(lines, tr) {
            lines = lines.map(tr.changes);
            for (let e of tr.effects) {
                if (e.is(addLineHighlight)) {
                    lines = Decoration.none;
                    lines = lines.update({ add: [lineHighlightMark.range(e.value)] });
                } else if (e.is(removeLineHighlight)) {
                    lines = Decoration.none;
                }
            }
            return lines;
        },
        provide: (f) => EditorView.decorations.from(f),
    });

    const lineHighlightMark = Decoration.line({
        attributes: { class: "cm-debug-line-highlight" },
    });

    const readOnly = new Compartment();

    let view = null;
    // Initialize the CodeMirror editor
    onMount(() => {
        const onChangeListener = EditorView.updateListener.of((update) => {
            if (update.docChanged) {
                const newDoc = update.state.doc.toString(); // Get the new document content
                /*
        if (store.assembled.length) {
          setStore("assembled", []);
        }
        */
                props.onChange(newDoc);
            }
        });

        // Create the initial state for the editor
        const startState = EditorState.create({
            doc: props.value, // Load from store or default content
            extensions: [
                // breakpointGutter,
                lineHighlightField,
                basicSetup,
                keymap.of([defaultKeymap, indentWithTab]),
                onChangeListener,
                // TODO Add syntax highlight package
                readOnly.of(EditorState.readOnly.of(false)),
            ],
        });

        // Create the editor view
        view = new EditorView({
            state: startState,
            parent: editorRef, // Mount the editor inside the editorRef div
        });
        setIsEditorLoading(false);

        // Cleanup when the component is destroyed
        onCleanup(() => {
            view.destroy(); // Destroy the editor instance
        });
    });

    createEffect(() => {
        if (!view) return;

        const currentContent = view.state.doc.toString(); // Get the current editor content

        if (currentContent !== props.value) {
            // If content differs, update the editor
            view.dispatch({
                changes: {
                    from: 0,
                    to: currentContent.length,
                    insert: props.value, // Insert the new content
                },
            });
        }
    });

    return (
        <div class={`relative h-full`}>
            <div ref={editorRef} class="editor-container border-l-0 border-b-0 bg-main-background h-full">
                <div class={`${isEditorLoading() ? "" : "hidden"} p-4 text-center`}>Editor is loading...</div>
            </div>
            <span
                class={`hidden absolute text-xs text-gray-100 px-3 py-2 top-2 right-2 rounded-sm bg-red-foreground flex items-center gap-1 opacity-80`}
            >
                <span>Editor is Read Only</span>
                <Tooltip>
                    <TooltipTrigger class="tooltip__trigger">
                        <span class="cursor-help text-lg">
                            <FiHelpCircle />
                        </span>
                    </TooltipTrigger>
                    <TooltipPortal>
                        <TooltipContent>
                            <TooltipArrow />
                            <p>
                                Editing is not allowed while program is loaded into memory to avoid mismatch between
                                code and loaded program. Unload the program from memory to edit again.
                            </p>
                        </TooltipContent>
                    </TooltipPortal>
                </Tooltip>
            </span>
        </div>
    );
}
