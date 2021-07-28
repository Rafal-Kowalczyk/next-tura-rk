import { useForm } from "react-hook-form";

import {
  FormWrap,
  FormContent,
  FormTitle,
  InputGroup,
  Label,
  Input,
} from "./form.style";

function From() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm();

  const handlerFormSubmit = () => {
    // emailjs
    console.log("wysłane");
  };

  return (
    <FormWrap>
      <FormContent onSubmit={handleSubmit(handlerFormSubmit)}>
        <FormTitle>Contact form</FormTitle>
        <InputGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            errors={errors.form_name}
            aria-invalid={errors.form_name ? "true" : "false"}
            {...register("form_name", {
              required: true,
              pattern:
                /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/,
            })}
          />
          {errors.form_name && errors.form_name.type === "required" && (
            <div role="alert">Pole wymagane</div>
          )}
          {errors.form_name && errors.form_name.type === "pattern" && (
            <div role="alert">Wpisz poprawnie name</div>
          )}
        </InputGroup>

        <button type="submit">Wyślij</button>
      </FormContent>
    </FormWrap>
  );
}

export default From;
