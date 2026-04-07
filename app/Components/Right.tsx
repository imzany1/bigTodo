import { useState } from "react"

type rightProps = {
    taskList: Task[]
    selectedTaskid: string
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>
}

export default function Right({ taskList, selectedTaskid, setTaskList }: rightProps) {
    const selectedTask = taskList.find((task) => task.id === selectedTaskid)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [editedTitle, setEditedTitle] = useState<string>("")
    const [editedDescription, setEditedDescription] = useState<string>("")

    function handleEdit() {
        setEditedTitle(selectedTask?.title || "")
        setEditedDescription(selectedTask?.description || "")
        setEditMode(true)
    }

    function handleSave() {
        setTaskList(prev => prev.map(task =>
            task.id === selectedTaskid
                ? { ...task, title: editedTitle, description: editedDescription }
                : task
        ))
        setEditMode(false)
    }

    return (
        <div className="border text-zinc-200 bg-zinc-800 p-2 w-[70%] rounded-lg overflow-y-auto [scrollbar-width:none]">
            <div className="bg-zinc-900 p-2 rounded-md flex flex-col gap-2">
                {editMode ? (
                    <>
                        <input
                            className="text-2xl font-bold bg-transparent border rounded-md px-1 border-zinc-600 outline-none"
                            value={editedTitle}
                            onChange={(e) => setEditedTitle(e.target.value)}
                        />
                        <textarea
                            className="bg-transparent border border-zinc-600 outline-none rounded-md p-1 [scrollbar-width:none] field-sizing-content resize-y min-h-20 max-h-77 overflow-y-auto "
                            value={editedDescription}
                            onChange={(e) => setEditedDescription(e.target.value)}
                        />
                    </>
                ) : (
                    <>
                        <h1 className="text-2xl font-bold">{selectedTask?.title}</h1>
                        <p>{selectedTask?.description}</p>
                    </>
                )}
            </div>
            {selectedTask?.id && (
                <div
                    onClick={editMode ? handleSave : handleEdit}
                    className="select-none absolute right-8 bottom-8 bg-zinc-700 hover:bg-zinc-900 transition-all cursor-pointer px-5 py-2 rounded-md border"
                >
                    {editMode ? "Save" : "Edit"}
                </div>
            )}
        </div>
    )
}