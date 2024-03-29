import React from "react";
import { Field, reduxForm } from "redux-form";
import { Form, Button, FormGroup, Label } from "reactstrap";
import validate from "./validate";
import renderField from "./renderField";

const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

/*
<Form onSubmit={handleSubmit}>
  <Field
    name="Alcohol"
    type="text"
    component={renderField}
    label="Do you drink alchol?"
  />
  <Field
    name="Energy"
    type="text"
    component={renderField}
    label="Do you feel more tired and have less energy?"
  />
  <Field
    name="Concentration"
    type="text"
    component={renderField}
    label="Do you have problem concentrating?"
  />
  <Field
    name="Appetite"
    type="text"
    component={renderField}
    label="Do you have poor appetite?"
  />
 */

const WizardFormSecondPage = props => {
  const { handleSubmit, previousPage } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <FormGroup>
          <Label>Do you drink alcohol?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field name="Alcohol" component="input" type="radio" value="Yes" />
          </Label>{" "}
          Yes
        </FormGroup>
        <FormGroup>
          <Label>
            <Field name="Alcohol" component="input" type="radio" value="No" />
          </Label>{" "}
          No
        </FormGroup>
      </FormGroup>

      <FormGroup>
        <FormGroup>
          <Label>Do you feel tired and have less energy?</Label>
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Energy"
              component="input"
              type="radio"
              value="Yes"
            ></Field>
          </Label>{" "}
          Yes
        </FormGroup>
        <FormGroup>
          <Label>
            <Field
              name="Energy"
              component="input"
              type="radio"
              value="No"
            ></Field>
          </Label>{" "}
          No
        </FormGroup>
      </FormGroup>
      <FormGroup>
        <FormGroup>
          <Label>Do you have trouble concentrating?</Label>
        </FormGroup>
        <FormGroup>
          <Field
            name="Concentration"
            component="input"
            type="radio"
            value="Yes"
          ></Field>{" "}
          Yes
        </FormGroup>
        <FormGroup>
          <Field
            name="Concentration"
            component="input"
            type="radio"
            value="No"
          ></Field>{" "}
          No
        </FormGroup>
        <FormGroup>
          <FormGroup>
            <Label>
              Do you have puffiness around your eyes especially in the morning?
            </Label>
          </FormGroup>
          <FormGroup>
            <Label>
              <Field
                name="EyePuff"
                component="input"
                type="radio"
                value="Yes"
              ></Field>
            </Label>{" "}
            Yes
          </FormGroup>
          <FormGroup>
            <Label>
              <Field
                name="EyePuff"
                component="input"
                type="radio"
                value="No"
              ></Field>
            </Label>{" "}
            No
          </FormGroup>
        </FormGroup>
      </FormGroup>
      <div className="button_style">
        <Button type="button" className="previous" onClick={previousPage}>
          Previous
        </Button>
        <Button type="submit" className="next">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate
})(WizardFormSecondPage);
