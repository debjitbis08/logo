import ActionButton from "./ActionButton";
import { HiSolidPlay, HiSolidStop, HiSolidWrench } from "solid-icons/hi";

export default function Actions() {
    return (
        <div class="flex items-center gap-2">
            <ActionButton title="Run" icon={<HiSolidPlay class="text-terminal" />} onClick={() => {}} />
        </div>
    );
}
