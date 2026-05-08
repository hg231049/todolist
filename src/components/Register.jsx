import { useState,useRef } from "react";
//  간단한 회원가입 폼
//  1. 이름
//  2. 생년월일
//  3. 국적
//  4. 자기소개

const Register = () => {
    const countRef = useRef(0);
    //console.log(countRef.current);
    const inputRef = useRef();

    const [input,setInput] = useState({
        name:"",
        birth:"",
        country:"",
        bio:""
    });

    const onChange = (e) => {
        countRef.current ++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name] : e.target.value,
        })
    }

    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소에 포커스
            inputRef.current.focus();
        }
    }


    return (
        <>
            <h2 className="">회원가입</h2>
            <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                    <input ref={inputRef} value={input.name} onChange={onChange} name="name" type="text" placeholder="이름을 입력하세요" className="border border-gray-300"/>
                    {input.name}
                </div>
                <div className="flex gap-4">
                    <input value={input.birth} onChange={onChange} name="birth" type="date" className="border border-gray-300"/>
                    {input.birth}
                </div>
                <div className="flex gap-4">
                    <select value={input.country} onChange={onChange} name="country" className="border border-gray-300">
                        <option></option>
                        <option value="kr">한국</option>
                        <option value="us">미국</option>
                        <option value="uk">영국</option>
                    </select>
                    {input.country}
                </div>
                <div className="flex gap-4">
                    <textarea value={input.bio} onChange={onChange} name="bio" className="border border-gray-300"></textarea>
                    {input.bio}
                </div>

                <button onClick={onSubmit}>제출하기</button>
            </div>
        </>
        
    )
}

export default Register;