import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { TodoCountContext } from './context/TodoCountContext'
import { TodoBody } from './components/TodoBody'

export const App = () => {
    const [countTodo, setCountTodo] = useState<number>(0);
    
    const onChangeCountTodo = (newCount: number) => {
        setCountTodo(newCount);
    };

    return (
            <TodoCountContext.Provider value={{countTodo, onChangeCountTodo}}>
                <TodoBody>
                    <Header />
                    <Main />
                </TodoBody>
            </TodoCountContext.Provider>
    )
}