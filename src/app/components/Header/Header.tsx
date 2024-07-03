import { useContext } from "react"
import { TodoCountContext } from "../../context/TodoCountContext"
import './Header.css';

export const Header = () => {
    const context = useContext(TodoCountContext);
    const count = context?.countTodo;

    return <header className="header">
            <h1 className="header__title">TodoList App</h1>
            <h2 className="task__in__progress">Task in progress: {count}</h2>
        </header>
}

// Контекст - объект, внутрь которого мы передали свойства и методы.
// useContext - хук, который позволяет из созданного контекста забрать данные.