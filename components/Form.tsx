import { Button } from "@/components/ui/button";
import { GetJoke } from "@/services/GetJoke";
import CustomInput from "./CustomInput";
import { Formik, FormikHelpers, Form } from "formik";

const MyForm = async () => {
  const joke = await GetJoke();
  console.log(joke)

  const onSubmit = async (values: any, formikHelpers: FormikHelpers<any>): Promise<any> => {
    console.log("submiting!")
    console.log(values)
    // // setIsLoading(true)
    // formikHelpers.resetForm();
    // let values1 = { ...values, myKey: uuidv4(), text: (values.joke ? values.joke : joke) }
    // // setCardVals((currItems) => {
    // //   return [...currItems, values1];
    // // });
    // // setJoke("")
    // await getJoke().then((joke) => { setJoke(joke); setIsLoading(false) });
  }
  return (
    // <Formik initialValues={{
    //   name: "",
    //   power: "",
    //   image: "",
    //   joke: ""
    // }} onSubmit={onSubmit}>
    //   {(props) => (
        // <Form className="form">
        <form>
          {/* <Field /> will automagically hook up inputs to Formik. It uses the name attribute to match up with Formik state. */}
          <CustomInput
            label="Name"
            name="name"
            placeholder="name of your battle monster"
            />
          <CustomInput
            label="Power"
            name="power"
            type="number"
            placeholder="monster power level"
            />
          <CustomInput
            label="Favourite joke"
            name="joke"
            placeholder={joke ? (`(Optional, leave blank to use this text): \n${joke}`) : "Loading..."}
            required={false}
            as="textarea"
            rows={4}
            />
          <CustomInput
            label="Image"
            name="image"
            placeholder="paste image url"
            />
          <Button className="myButton" type="submit" size="lg" >Submit</Button>
          {/* <Button className="myButton" type="reset" variant="secondary" size="lg" onClick={() => props.resetForm()}>Clear</Button> */}
        {/* </Form> */}

      </form>
      // )}

    // </Formik>
  )
  // return (
    //   <Formik onSubmit={onSubmit} >
    //   {(props) => (
      //       <Form className="form"></Form>
      //   {/* <form className="flex flex-col items-stretch p-4 gap-2 max-w-[30%]"> */}
  //     <CustomInput
  //           label="Name"
  //           name="name"
  //           placeholder="name of your battle monster"
  //         />
  //         <CustomInput
  //           label="Power"
  //           name="power"
  //           type="number"
  //           placeholder="monster power level"
  //         />
  //         <CustomInput
  //           label="Favourite joke"
  //           name="joke"
  //           placeholder={joke ? (`(Optional, leave blank to use this text): \n${joke}`) : "Loading..."}
  //           required={false}
  //           as="textarea"
  //           rows={4}
  //         />
  //         <CustomInput
  //           label="Image"
  //           name="image"
  //           placeholder="paste image url"
  //         />
  //     <Button>Click me</Button>
  //   {/* </form> */}
  //   </Form>
  //   )}
  //   <Formik>
  // );
};


export default MyForm;
