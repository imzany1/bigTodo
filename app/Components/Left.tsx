import Card from "./Card"

type LeftProps = {
    taskList : Task[],
    setSelectedTaskid : any,
    selectedTaskid: any
    updateProgress: Function
}

export default function Left({taskList, setSelectedTaskid, selectedTaskid, updateProgress}: LeftProps){
    return(
        <div className=" border w-[30%] rounded-lg overflow-y-auto p-3 flex flex-col gap-2 [scrollbar-width:none] ">
            {taskList.map((task)=>(<Card task={(task)} setSelectedTaskid={setSelectedTaskid} selectedTaskid={selectedTaskid} key={task.id} updateProgress={updateProgress} />))}
        </div>
    )
}