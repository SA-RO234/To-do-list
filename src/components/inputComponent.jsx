import React from "react";
import { Form, Input, Button } from "@heroui/react";

// ...existing code...
export default function InputComponent({ tasks = [], setTasks }) {
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setSubmitted(data);
    if (setTasks) {
      setTasks([...tasks, data]);
    }
    e.target.reset();
  };

  return (
    <Form
      className="w-full justify-center pb-[50px] items-center space-y-4"
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
            return errors.Task;
          }}
          className="w-[80%]"
          labelPlacement="outside"
          name="Task"
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
    </Form>
  );
}
