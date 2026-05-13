"use client";

import { useEffect, useState } from "react";
import Hero from "./Components/Hero";
import AddTaskModalOpen from "./Components/AddTaskModal";
import { getTasks } from "./services/taskService";

export default function Home() {
  const [taskList, setTaskList] = useState<Task[]>([])
  useEffect(()=>{
    getTasks().then(data => setTaskList(data))
  }, [])

  const [addTaskModalOpen, setAddTaskModalOpen] = useState(false)
  const [newTitle, setNewTitle] = useState("")
  const [newDescription, setNewDescription] = useState("")
  return (
    <div>
      <Hero taskList={taskList} setTaskList={setTaskList} />
      <button className="absolute bottom-7 right-10 rounded-md px-3 py-2 bg-zinc-800 border active:bg-zinc-700 transition-colors cursor-pointer" onClick={() => setAddTaskModalOpen(true)} >Add Task</button>
      <AddTaskModalOpen taskList={taskList} setTaskList={setTaskList} setNewTitle={setNewTitle} setNewDescription={setNewDescription} setAddTaskModalOpen = {setAddTaskModalOpen} addTaskModalOpen={addTaskModalOpen} newDescription={newDescription} newTitle={newTitle} />
    </div>
  );
}
