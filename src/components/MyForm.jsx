import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import MySelect from "./MySelect";

import { handleValidatedAndSubmit } from "../helpers";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function MyForm() {
  const [data, setData] = useState({});
  const [validated, setValidated] = useState(false);

  function handleChangeData(event) {
    console.log(data);
    setData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  }

  const onSubmit = () => {
    console.log("fetch");
  };

  return (
    <Form
      noValidate
      validated={validated}
      onSubmit={(event) => {
        setValidated(true);
        handleValidatedAndSubmit(event, onSubmit);
      }}
    >
      <Row className="mb-5">
        <Form.Group className="mb-5">
          <Form.Label>Имя</Form.Label>
          <Form.Control required name="name" onChange={handleChangeData} />
          <Form.Control.Feedback type="invalid">
            Кастом селект инвалид
          </Form.Control.Feedback>
        </Form.Group>
      </Row>

      <Row className="mb-5">
        <Form.Group className="mb-5">
          <Form.Label>Селект</Form.Label>
          <MySelect
            options={options}
            placeholder="123"
            validated={validated && (!data.select || data.select?.length === 0)}
            isMulti
            name="select"
            onChange={handleChangeData}
          />
        </Form.Group>
      </Row>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <div className="mb-5">1</div>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}
