import ActionButton from "./ActionButton";
import { FaSolidPlay, FaSolidEraser } from "solid-icons/fa";

export default function Actions(props: { onRun: () => void; onClear: () => void }) {
    return (
        <div class="flex items-center gap-2">
            <ActionButton
                text="Run"
                title="Run the program"
                icon={<FaSolidPlay class="text-terminal" />}
                onClick={props.onRun}
            />
            <ActionButton
                text="Clear"
                title="Clear the canvas"
                icon={<FaSolidEraser class="text-red-foreground" />}
                onClick={props.onClear}
            />
        </div>
    );
}
