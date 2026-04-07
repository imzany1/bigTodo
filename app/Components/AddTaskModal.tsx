type AddTaskModalProp = {
  setAddTaskModalOpen: setAddTaskModalOpen;
  addTaskModalOpen: boolean;
  newTitle: string;
  newDescription: string;
  setNewDescription: React.Dispatch<React.SetStateAction<string>>;
  setNewTitle: React.Dispatch<React.SetStateAction<string>>;
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
};

export default function AddTaskModalOpen({
  setAddTaskModalOpen,
  addTaskModalOpen,
  newDescription,
  newTitle,
  setNewTitle,
  setNewDescription,
  taskList,
  setTaskList,
}: AddTaskModalProp) {
  function handleSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      title: newTitle,
      description: newDescription,
      progress: 0,
    };
    setTaskList((prev) => [...prev, newTask]);
    setNewTitle("");
    setNewDescription("");
    setAddTaskModalOpen(false);
  }
  return (
    <div className={` ${addTaskModalOpen === true ? "" : "hidden"}`}>
      <div
        className={`OverLay absolute w-screen h-screen bg-black/50 `}
        onClick={() => setAddTaskModalOpen(false)}
      ></div>
      <div className=" absolute top-[50%] left-[50%] translate-[-50%] px-5 py-3 rounded-md h-120 w-200 bg-zinc-800  ">
        <form action="" className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <input
            type="text"
            className="bg-zinc-900 rounded-md border-zinc-200 border px-2 py-1 w-full outline-none text-zinc-200"
            value={newTitle}
            onChange={(e) => {
              setNewTitle(e.target.value);
            }}
            required
            placeholder="Enter Title"
          />
          <textarea
            name=""
            id=""
            className="bg-zinc-900 px-2 py-1 w-full outline-none border border-white text-zinc-200 rounded-md h-90 resize-none"
            value={newDescription}
            onChange={(e) => {
              setNewDescription(e.target.value);
            }}
            placeholder="Enter Description"
          ></textarea>
          <button
            type="submit"
            className="flex self-end bg-zinc-900 hover:bg-zinc-700 transition-all px-5 py-1 rounded-md border"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
