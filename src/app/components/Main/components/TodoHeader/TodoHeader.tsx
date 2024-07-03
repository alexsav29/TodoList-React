import { useRef } from "react";
import './TodoHeader.css';
import { Button } from "antd";

type TodoHeaderProps = {
    onAddTodo: (value: string) => void
}

export const TodoHeader = ({onAddTodo}: TodoHeaderProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleAddTodo = () => {
        const input = inputRef.current;

        onAddTodo(input?.value ?? '');

        input!.value = '';
    }

    return <div className="input__wrapper">
                <input className="input" ref={inputRef} type="text" name="todo" />
                <Button type="primary" className="add__todo__btn btn" onClick={handleAddTodo}>add todo</Button>
           </div>
}