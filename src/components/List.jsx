import { useState } from "react";
import TodoItem from "./TodoItem";

const List = ({todos,onUpdate,onDelete}) => {

    const [search,setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if(search === ""){ // search의 값이 빈 배열일 땐 todos를 반환
            return todos;
        }

        return todos.filter((item)=>item.content.toLowerCase().includes(search.toLowerCase()));
    }

    const filteredTodos = getFilteredData();

    return (
        <div className="flex flex-col gap-5">
            <h3 className="font-bold">Todo List</h3>
            <input 
                value={search} 
                onChange={onChangeSearch} 
                placeholder="검색어를 입력하세요" 
                className="w-full py-4 border-b border-gray-300 focus:outline-0 "
            />
            <div className="flex flex-col gap-5">
                {filteredTodos.map((todo)=>{
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate}  onDelete={onDelete}/>
                })}
            </div>
        </div>
    )
}

export default List;