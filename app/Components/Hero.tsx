import { useState } from "react";
import Left from "./Left";
import Right from "./Right";


type HeroProps = {
  taskList: Task[];
};

export default function Hero({ taskList }: HeroProps){
    const [selectedTaskid, setSelectedTaskid] = useState("")
    return(
        <div className="bg-zinc-800 absolute top-[57%] left-[50%] translate-[-50%] h-120 w-200 rounded-md p-4 flex gap-4">
            <Left taskList={taskList} selectedTaskid = {selectedTaskid} setSelectedTaskid={setSelectedTaskid} />
            <Right taskList={taskList} selectedTaskid = {selectedTaskid} />
        </div>
    )
}