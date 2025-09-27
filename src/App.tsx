import "./App.css";
import { UseFormikExample } from "./components/UseFormikExample/UseFormikExample";
import { FormikDeclarative } from "./components/FormikDeclarative/FormikDeclarative";
import { NestedObject } from "./components/NestedObject/NestedObject";
import { UseField3rdPartyLibrary } from "./components/UseField3rdPartyLibrary/UseField3rdPartyLibrary";
import { UseFieldWithFormContext } from "./components/UseFieldWithFormContext/UseFieldWithFormContext";
import NestedFieldArray from "./components/NestedFieldArray/NestedFieldArray";

function App() {
  return (
    <>
      <section className="max-w-xl mx-auto border-2 rounded-sm p-5 border-gray-100 mb-10">
        <h3 className="text-left mb-10">title: useFormik</h3>
        <UseFormikExample />
      </section>

      <section className="max-w-xl mx-auto border-2 rounded-sm p-5 border-gray-100 mb-10">
        <h3 className="text-left mb-10">title: declarative</h3>
        <FormikDeclarative />
      </section>

      <section className="max-w-xl mx-auto border-2 rounded-sm p-5 border-gray-100 mb-10">
        <h3 className="text-left mb-10">title: Nested object</h3>
        <NestedObject />
      </section>

      <section className="max-w-xl mx-auto border-2 rounded-sm p-5 border-gray-100 mb-10">
        <h3 className="text-left mb-10">title: useField</h3>
        <p className="text-left text-sm">
          - useField เหมาะสุด ๆ สำหรับ input ของ 3rd party เพราะมันคืน value +
          onChange + onBlur ที่เรานำไป map ต่อได้
        </p>
        <p className="text-left text-sm mb-5">
          - ถ้า input นั้นมี custom event (เช่น React-Select ที่ไม่ได้ส่ง event
          ปกติ) → ใช้ setFieldValue จาก useFormikContext ช่วย
        </p>
        <UseField3rdPartyLibrary />
      </section>

      <section className="max-w-xl mx-auto border-2 rounded-sm p-5 border-gray-100 mb-10">
        <h3 className="text-left mb-10">title: useField with useContext</h3>
        <p className="text-left text-sm">
          - useField → จัดการ input ได้สวยๆ โดยไม่ต้องเขียน onChange เอง
        </p>
        <p className="text-left text-sm ">
          - useFormikContext → ให้ component อื่น (ปุ่ม, preview, summary)
          เข้าถึงสถานะฟอร์ม
        </p>
        <p className="text-left text-sm mb-5">
          - ใช้คู่กัน → ฟอร์มที่ custom ได้ 100% และยังคุม logic ส่วนกลางได้
        </p>

        <UseFieldWithFormContext />
      </section>

      <section className="max-w-4xl mx-auto border-2 rounded-sm p-5 border-gray-100 mb-10">
        <NestedFieldArray />
      </section>
    </>
  );
}

export default App;
