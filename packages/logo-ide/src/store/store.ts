import { createStore } from "solid-js/store";

export const INITIAL_CODE = `REPEAT 4 [FORWARD 50 RIGHT 90]`;

export const [store, setStore] = createStore({
    activeFile: {
        name: "untitled-1.logo",
        content: INITIAL_CODE,
    },
});
