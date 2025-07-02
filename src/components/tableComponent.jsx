import React, { useState } from "react";
const TableComponent = ({ tasks = [], setTasks, setEditValue, onComplete }) => {
  const completeTask = (taskName) => {
    if (onComplete) {
      onComplete(taskName);
    } else {
      if (!Array.isArray(tasks)) return;
      const filtered = tasks.filter((item) => item.Task !== taskName);
      setTasks(filtered);
    }
  };
  const EditTask = (taskName) => {
    if (setEditValue) setEditValue(taskName);
  };
  return (
    <div className="w-full bg-white text-black">
      <table className="table w-full border p-5">
        <thead className="text-white bg-black">
          <tr className="h-[50px]">
            <th>No</th>
            <th>Task Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {tasks.map((item, idx) => (
            <tr className="bg-base-200 h-[50px]" key={idx}>
              <th>{idx + 1}</th>
              <td>{item.Task}</td>
              <td className="flex gap-5 justify-center">
                <button
                  onClick={() => EditTask(item.Task)}
                  className="p-3 bg-green-700 text-white  text-md font-medium fon"
                >
                  Edit
                </button>
                <button
                  onClick={() => completeTask(item.Task)}
                  className="bg-red-800 text-white text-md font-medium p-3"
                >
                  Complete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
