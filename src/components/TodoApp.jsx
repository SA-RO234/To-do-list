import React from "react";
import InputComponent from "./inputComponent";
import TotalTask from "./totalTask";
import TableComponent from "./tableComponent";
const TodoApp = () => {
  return (
    <div className="container-fluid m-auto select-none flex justify-center items-center h-full pt-[100px] ">
      <div className="w-[50%] border-b-2 pb-10 border-white text-white h-full flex justify-center items-center flex-col m-auto ">
        <TotalTask />
        <InputComponent />
        <TableComponent />
      </div>
    </div>
  );
};

export default TodoApp;
