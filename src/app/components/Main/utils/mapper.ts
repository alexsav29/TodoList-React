import { Task, TaskDto } from "../models/Task"

export const todoDataMapper = (serverData: TaskDto[]): Task[] => 
    serverData.map(({userId, id, ...param}) => 
        ({
            userId: userId.toString(),
            id: id.toString(),
            ...param
        })
    )
