import React from "react";
const TableComponent = ({ tasks, setTasks }) => {
  const removeTask = (taskName) => {
    const filtered = tasks.filter((item) => item.Task !== taskName);
    setTasks(filtered);
  };
  return (
    <div className="w-full bg-white text-black">
      <table className="table w-full border p-5">
        {/* head */}
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
                <button className="p-3 bg-green-700 text-white  text-md font-medium fon">
                  Edit
                </button>
                <button
                  onClick={() => removeTask(item.Task)}
                  className="bg-red-800 text-white text-md font-medium p-3"
                >
                  Delete
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
