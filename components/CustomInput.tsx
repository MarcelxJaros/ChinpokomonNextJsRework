import { IInputProps } from "@/models/IInputProps";
import { useField } from "formik";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const CustomInput = (props: IInputProps) => {
  const { placeholder, label, required, ...inputProps } = props;
  // useField is a custom React hook that will automagically help you hook up inputs to Formik.
  const [field, meta, helpers] = useField(props);

  return (
    <>
    <Label htmlFor="input">Name</Label>
    <Input id="input" placeholder={placeholder} />
    </>
  )
};

// most input boxes are type text, so in IInputProps are these parameters defined as optional and default values are initialized here
// if you need other values, specify while passing props to component e.g. ... as="textarea" rows={7} or type="number"
CustomInput.defaultProps = { as: 'input', type: 'text', required: true};

export default CustomInput;