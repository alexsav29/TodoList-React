import { ReactNode } from "react";
import './TodoBody.css';

type TodoBodyType = {
    children: ReactNode;
};

export const TodoBody = ({children}: TodoBodyType) => {
    return <div className="todo__wrapper">
        <div className="todo__content">
            {children}
        </div>
    </div>
}