import { Task } from "../../models/Task";
import { Button, Checkbox, ConfigProvider } from 'antd';
import './TodoItem.css';

type TodoItemProps = {
    todo: Task;
    onDelete: (id: string) => void;
    onChange: (id: string, isDone: boolean) => void;
}

export const TodoItem = ({ todo, onDelete, onChange }: TodoItemProps) => {
    const { id, title, completed } = todo;

    const handleDeleteClick = () => {
        onDelete(id);
    };

    const handleChange = (event: any) => {
        onChange(id, event.target.checked);
    };

    

    return  <li className="todo__item" key={id}>
                <Checkbox className="todo__checkbox" onChange={(event) => {handleChange(event)}} defaultChecked={completed}>
                    <span className="todo__text">{title}</span>
                </Checkbox>
                <ConfigProvider
                    theme={{
                        components: {
                        Button: {
                            colorError: '#885566'
                        },
                        },
                    }}
                >
                    <Button className="delete__btn btn" type="primary" danger onClick={handleDeleteClick}>delete</Button>
                </ConfigProvider>
            </li>
    // return  <li className="todo__item" key={id}>
    //             <input className="todo__checkbox" onChange={(event) => {handleChange(event)}} type="checkbox" defaultChecked={completed} />
    //             <span>{title}</span>
    //             <button className="delete__btn btn" onClick={handleDeleteClick}>delete</button>
    //         </li>
}