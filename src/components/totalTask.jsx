const TotalTask = ({ tasks = [] }) => {
  const total = tasks.length;
  // Count completed tasks (assume a property 'completed' is true/false)
  const completed = tasks.filter((t) => t.completed).length;
  return (
    <div className=" flex w-full border border-white mb-[50px] rounded-3xl justify-center gap-[100px] items-center p-[50px]">
      <h1 className="flex  items-center text-5xl font-bold flex-col">
        Task Done <span className="text-2xl">Keep it up !</span>
      </h1>
      <div className="bg-green-700 flex text-5xl font-bold items-center justify-center rounded-full h-[200px] w-[200px]">
        <span id="completeTask" className="">
          {completed}
        </span>
        /<span id="totalTask">{total}</span>
      </div>
    </div>
  );
};

export default TotalTask;
