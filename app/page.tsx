"use client";

import { useState } from "react";
import Hero from "./Components/Hero";
import AddTaskModalOpen from "./Components/AddTaskModal";

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([
    {
      id: crypto.randomUUID(),
      title: "Task 1 Title 11 11 11 11 11",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus perspiciatis nam perferendis autem aperiam. Nobis eum laudantium ut vitae! Debitis dignissimos veritatis officia. Necessitatibus iste fugiat explicabo quo nisi deleniti.",
      progress: 0,
    },
    {
      id: crypto.randomUUID(),
      title: "This Goes in Left hero Div, in Cards",
      description:
        "This goes in the Right Hero div, as description - That conditionally renders!",
      progress: 0,
    },
  ]);


  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  return (
    <div>
      <Hero taskList={taskList} />
      <button className="absolute bottom-7 right-10 rounded-md px-3 py-2 bg-zinc-800 border active:bg-zinc-700 transition-colors cursor-pointer" onClick={() => setAddTaskModalOpen(true)} >Add Task</button>
      <AddTaskModalOpen taskList={taskList} setTaskList={setTaskList} setNewTitle={setNewTitle} setNewDescription={setNewDescription} setAddTaskModalOpen = {setAddTaskModalOpen} addTaskModalOpen={addTaskModalOpen} newDescription={newDescription} newTitle={newTitle} />
    </div>
  );
}
