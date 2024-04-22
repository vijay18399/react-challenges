import React, { useState } from "react";
import styled from "styled-components";

const FormWrapper = styled.div`
  background-color: var(--toastify-color-info);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  flex-direction: column;
`;

const Form = styled.form`
  margin-top: 40px;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  width: 90%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  padding: 10px 16px;
  font-size: 1rem;
  background-color: #f7f7f7;
  border: 2px solid #ececec;
  border-radius: 5px;
  width: 100%;
  &::placeholder {
    color: #949494;
  }
`;

const TextArea = styled.textarea`
  padding: 10px 16px;
  font-size: 1rem;
  background-color: #f7f7f7;
  border: 2px solid #ececec;
  border-radius: 5px;
  width: 100%;
  resize: vertical;
  &::placeholder {
    color: #949494;
  }
`;

const Button = styled.button`
  background-color: #39ba12;
  color: white;
  font-size: 1rem;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #39ba12;
  }
  &:disabled {
    background-color: #e4e4e4;
    color: #959595;
    cursor: not-allowed;
  }
`;

const DisplayData = styled.div`
  background-color: #ffffff;
  width: 90%;
  max-width: 400px;
  margin: 18px;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  gap: 10px;
  align-items: center;
  border-bottom: 4px solid #cbcdd4;
  flex-wrap: wrap;
  span {
    background-color: #021039;
    color: #ffffff;
    padding: 4px 8px;
    border-radius: 10px;
  }
`;

export default function ContactForm({ onSubmit }) {
  const [form, setValues] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [display, setDisplay] = useState(false);

  const printValues = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(form);
    } else {
      setDisplay(true);
    }
  };

  function validateForm() {
    return !(form.fullName && form.email && form.message);
  }

  const updateField = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <FormWrapper>
      {display && (
        <DisplayData>
          <span>Name: {form.fullName}</span>
          <span>Email: {form.email}</span>
          <span>Message: {form.message}</span>
        </DisplayData>
      )}
      <Form onSubmit={printValues}>
        <FormField>
          <Input
            value={form.fullName || ""}
            name="fullName"
            placeholder="Full Name*"
            onChange={updateField}
          />
        </FormField>
        <FormField>
          <Input
            value={form.email || ""}
            name="email"
            placeholder="Email*"
            type="email"
            onChange={updateField}
          />
        </FormField>
        <FormField>
          <TextArea
            value={form.message || ""}
            placeholder="Your Message*"
            name="message"
            onChange={updateField}
            rows="5"
          />
        </FormField>
        <Button disabled={validateForm()} type="submit">
          Submit
        </Button>
      </Form>
    </FormWrapper>
  );
}
