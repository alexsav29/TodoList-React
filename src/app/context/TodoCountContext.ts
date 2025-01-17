import { createContext } from "react";

type TodoCountContextType = {
    countTodo: number;
    onChangeCountTodo: (newCount: number) => void
}

export const TodoCountContext = createContext<TodoCountContextType | null>(null);