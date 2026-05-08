import { useState,useRef } from "react";

const Editor = ({onCreate}) => {

    const [content,setContent] = useState("");
    const inputRef = useRef();
    const [cate,setCate] = useState("ETC");

    const onChangeContent = (e) => {
       setContent(e.target.value);
    }

    const onChangeCate = (e) => {
       setCate(e.target.value);
    }

    // 엔터를 쳤을 때 추가되도록
    const onKeyDown = (e) => {
        if(e.keyCode === 13){
             onSubmit();
         }
    }

    const onSubmit = () => {
        if(content === "") { // 빈 값이면 종료되도록. 추가 되지 않도록
            inputRef.current.focus();
            return;
        }
        onCreate(content,cate);
        setContent(""); // 추가 완료 후 빈 입력칸으로 만듦
    }

    return (
        <div className="flex gap-3 ">
            <select value={cate} onChange={onChangeCate}>   
                <option value="ETC">ETC</option>
                <option value="WORK">WORK</option>
                <option value="LIFE">LIFE</option>
            </select>
            <input ref={inputRef} value={content} onChange={onChangeContent} onKeyDown={onKeyDown} type="text" placeholder="새로운 할 일을 입력하세요" className="flex-1 p-3 border border-gray-300 rounded-sm" />
            <button onClick={onSubmit} className="w-[40px] font-bold text-white rounded-sm bg-black cursor-pointer [.darkMode_&]:bg-white [.darkMode_&]:text-black">+</button>
        </div>
    )
}

export default Editor;