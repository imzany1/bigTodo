import json
import uuid
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import Optional


class CreateTask(BaseModel):
    title:str
    description : str

class UpdateTask(BaseModel):
    title: Optional[str] = None
    description : Optional[str] = None
    progress : Optional[int] = None

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"]
)

with open("data/tasks.json", "r") as f:
    tasks = json.load(f)

@app.get("/tasks")
def get_Tasks():
    print(tasks)
    return tasks

@app.post("/tasks")
def add_task(new:CreateTask):
    taskId = str(uuid.uuid4())
    taskProgress = 0
    task = {
        "id" : taskId,
        "title": new.title,
        "description": new.description,
        "progress" : taskProgress
    }
    tasks.append(task)
    with open("data/tasks.json", "w") as f:
        json.dump(tasks, f)
    return task

@app.delete("/tasks/{id}")
def deleteTask(id):
    global tasks
    tasks = [task for task in tasks if task["id"] != id]
    with open("data/tasks.json", "w") as f:
        json.dump(tasks, f)
    return {"message" : "Task DELETED"}


@app.put("/tasks/{id}")
def update_task(id: str, updated: UpdateTask):
    task = next((task for task in tasks if task["id"] == id), None)
    
    if task is None:
        return {"error": "Task not found"}
    
    if updated.title is not None:
        task["title"] = updated.title
    if updated.description is not None:
        task["description"] = updated.description
    if updated.progress is not None:
        task["progress"] = updated.progress
    
    with open("data/tasks.json", "w") as f:
        json.dump(tasks, f)
    
    return task