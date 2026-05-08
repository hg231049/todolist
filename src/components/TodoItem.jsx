import { useState } from "react";

const TodoItem = ({id,isDone,cate,content,date,onUpdate,onDelete}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onSubmitDelete = () => {
        onDelete(id);
    }

    return (
        <div  className="flex gap-5 pb-5 border-b border-dotted border-gray-300 ">
            <input type="checkbox" checked={isDone} onChange={onChangeCheckbox}/>
            <div className="min-w-[50px]">{cate}</div>
            <div className="flex-1">{content}</div>
            <div className="text-gray-500 text-sm">{new Date(date).toLocaleDateString()}</div>
            <button onClick={onSubmitDelete} className="cursor-pointer">X</button>
        </div>
    )
}

export default TodoItem;