import { useFormik } from "formik"

export function UseFormikExample() {


     const formik =   useFormik({
            initialValues: {
                email: ""
            },
            onSubmit:(values) => {
                    console.log("values:::", values)
            }
    
        })





    return (
        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-y-5' >
            <input type="text" name="email"  value={formik.values.email}    onChange={formik.handleChange}  className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5 cursor-not-allowed "  />
            <button type="submit" className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Submit</button>
        </form>
    )
}