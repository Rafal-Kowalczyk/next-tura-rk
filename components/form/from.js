import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Link from "next/link";

import { Button } from "../layout/layout.style";
import {
  FormWrap,
  FormContent,
  FormTitle,
  InputGroup,
  Label,
  Input,
  InputTextarea,
  ErrorText,
} from "./form.style";

function From() {
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    clearErrors,
  } = useForm();

  // useEffect(() => {
  //   const messageTimer = setTimeout(() => {
  //     setMessage("");
  //   }, 4000);
  //   return () => clearTimeout(messageTimer);
  // });

  const handlerFormSubmit = (data, e) => {
    emailjs
      .sendForm(
        `${process.env.EMJS_SERVICE_ID}`,
        `${process.env.EMJS_TEMPLATE_ID}`,
        e.target,
        `${process.env.EMJS_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("Message sent");
          reset();
          clearErrors();
        },
        (error) => {
          console.log(error.text);
          setMessage("Something went wrong.. Please try again!");
        }
      );
    // console.log("wysłane");
  };

  return (
    <FormWrap>
      <FormContent onSubmit={handleSubmit(handlerFormSubmit)}>
        <FormTitle>Contact form</FormTitle>
        <InputGroup>
          <Label htmlFor="name">Your name</Label>
          <Input
            type="text"
            id="name"
            name="form_name"
            placeholder="Your name"
            errors={errors.form_name}
            aria-invalid={errors.form_name ? "true" : "false"}
            {...register("form_name", {
              required: true,
              pattern:
                /^[A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\s A-Za-zżźćńółęąśŻŹĆĄŚĘŁÓŃ]+$/,
            })}
          />
          {errors.form_name && errors.form_name.type === "required" && (
            <ErrorText role="alert">Required field</ErrorText>
          )}
          {errors.form_name && errors.form_name.type === "pattern" && (
            <ErrorText role="alert">Enter name correctly</ErrorText>
          )}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="phone">Your phone</Label>
          <Input
            type="tel"
            id="phone"
            name="phone_number"
            placeholder="Your phone"
            errors={errors.phone_number}
            aria-invalid={errors.phone_number ? "true" : "false"}
            {...register("phone_number", {
              required: true,
              maxLength: 9,
            })}
          />
          {errors.phone_number && errors.phone_number.type === "required" && (
            <ErrorText role="alert">Required field</ErrorText>
          )}
          {errors.phone_number && errors.phone_number.type === "maxLength" && (
            <ErrorText role="alert">The number must contain 9 digits</ErrorText>
          )}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="email">E-mail</Label>
          <Input
            type="email"
            id="emial"
            name="email_address"
            placeholder="Your e-mail"
            error={errors.email_address}
            aria-invalid={errors.email_address ? "true" : "false"}
            {...register("email_address", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
          {errors.email_address && errors.email_address.type === "required" && (
            <ErrorText role="alert">Required field</ErrorText>
          )}
          {errors.email_address && errors.email_address.type === "pattern" && (
            <ErrorText role="alert">Enter your email correctly</ErrorText>
          )}
        </InputGroup>
        <InputGroup>
          <Label htmlFor="message">Message content</Label>
          <InputTextarea
            type="textarea"
            rows="3"
            id="message"
            name="text_message"
            placeholder="Your message"
          />
        </InputGroup>

        <h2>{message}</h2>
        <Button type="submit">
          {!message ? (
            "Send"
          ) : (
            <Link href={"/"}>
              <a>Back to home page</a>
            </Link>
          )}
        </Button>
      </FormContent>
    </FormWrap>
  );
}

export default From;
