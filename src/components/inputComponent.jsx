import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "@heroui/react";

export default function InputComponent({
  tasks = [],
  setTasks,
  editValue,
  setEditValue,
}) {
  const [submitted, setSubmitted] = useState(null);
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editValue) {
      setInput(editValue);
    }
  }, [editValue]);

  const onSubmit = (e) => {
    e.preventDefault();
    const data = { Task: input };
    setSubmitted(data);
    if (setTasks) {
      if (editValue && tasks.some((t) => t.Task === editValue)) {
        const updatedTasks = tasks.map((t) =>
          t.Task === editValue ? { ...t, Task: input } : t
        );
        setTasks(updatedTasks);
      } else {
        setTasks([...tasks, data]);
      }
    }
    setInput("");
    if (setEditValue) setEditValue("");
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
          className="w-[70%]"
          labelPlacement="outside"
          name="Task"
          placeholder="Please Add your Task "
          value={input}
          onChange={(e) => setInput(e.target.value)}
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
            {editValue ? "Update Task" : "Add Task"}
          </Button>
        </div>
      </div>
    </Form>
  );
}
