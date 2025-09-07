// SubmitButton.tsx
import { useFormikContext } from "formik";

export function SubmitButton() {
    const { isSubmitting, dirty } = useFormikContext<any>();
    return (
        <button type="submit" disabled={isSubmitting || !dirty} className="text-white cursor-pointer bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
            {isSubmitting ? "กำลังบันทึก..." : "บันทึก"}
        </button>
    );
}