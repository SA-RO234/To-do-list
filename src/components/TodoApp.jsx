import React, { useState, useEffect } from "react";
import InputComponent from "./inputComponent";
import TotalTask from "./totalTask";
import TableComponent from "./tableComponent";
const TodoApp = () => {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem("Task");
      if (raw) {
        const data = JSON.parse(raw);
        return Array.isArray(data) ? data : [data];
      }
    } catch {
      // ignore
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("Task", JSON.stringify(tasks));
  }, [tasks]);

  const [editValue, setEditValue] = useState("");
  return (
    <div className="container-fluid m-auto select-none flex justify-center items-center h-full pt-[100px] ">
      <div className="w-[50%] border-b-2 pb-10 border-white text-white h-full flex justify-center items-center flex-col m-auto ">
        <TotalTask tasks={tasks} />
        <InputComponent
          tasks={tasks}
          setTasks={setTasks}
          editValue={editValue}
          setEditValue={setEditValue}
        />
        <TableComponent
          tasks={tasks}
          setTasks={setTasks}
          setEditValue={setEditValue}
        />
      </div>
    </div>
  );
};

export default TodoApp;
