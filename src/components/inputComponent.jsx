import React from "react";
import {
  Form,
  Input,
  Button,
} from "@heroui/react";

export default function App() {
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Clear errors and submit
    setErrors({});
    setSubmitted(data);
  };

  return (
    <Form
      className="w-full justify-center pb-[50px]  items-center space-y-4"
      validationErrors={errors}
      onReset={() => setSubmitted(null)}
      onSubmit={onSubmit}
    >
      <div className="flex w-full gap-5 flex-wrap">
        <Input
          isRequired
          errorMessage={({ validationDetails }) => {
            if (validationDetails.valueMissing) {
              return "Please Add your Task ";
            }

            return errors.name;
          }}
          className="w-[80%]"
          labelPlacement="outside"
          name="name"
          placeholder="Please Add your Task "
        />

        {errors.terms && (
          <span className="text-danger text-small">{errors.terms}</span>
        )}

        <div className="flex gap-4">
          <Button
            className="w-full text-xl font-bold"
            color="primary"
            type="submit"
          >
            Add Task
          </Button>
        </div>
      </div>

      {submitted && (
        <div className="text-small text-default-500 mt-4">
          Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
        </div>
      )}
    </Form>
  );
}
