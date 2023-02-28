import React from "react";
import AsyncSelect from "react-select";
import Form from "react-bootstrap/Form";

export default function MySelect(props) {
  return (
    <>
      <AsyncSelect
        classNamePrefix={
          props.validated ? "react-select-validated" : "react-select"
        }
        {...props}
        placeholder
        onChange={(e) =>
          props.onChange({ target: { name: props.name, value: e } })
        }
      />
      {props.validated && (
        <>
          <Form.Control style={{ display: "none" }} required />
          <Form.Control.Feedback type="invalid">
            Кастом селект инвалид
          </Form.Control.Feedback>
        </>
      )}
    </>
  );
}
