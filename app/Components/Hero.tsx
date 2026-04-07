import React, { useState } from "react";
import Left from "./Left";
import Right from "./Right";


type HeroProps = {
  taskList: Task[];
  setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
  updateProgress: Function
};

export default function Hero({ taskList, setTaskList,updateProgress }: HeroProps){
    const [selectedTaskid, setSelectedTaskid] = useState("")
    return(
        <div className="bg-zinc-800 absolute top-[57%] left-[50%] translate-[-50%] h-120 w-240 rounded-md p-4 flex gap-4">
            <Left taskList={taskList} selectedTaskid = {selectedTaskid} setSelectedTaskid={setSelectedTaskid} updateProgress={updateProgress} />
            <Right setTaskList={setTaskList} taskList={taskList} selectedTaskid = {selectedTaskid} />
        </div>
    )
}