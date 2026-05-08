// 3가지 Hook관련된 팁
// 1. 함수컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문/반복문 안에 호출 될 수 없다.
// 3. custum hook을 직접 만들 수 있다.
import { useState } from "react";

function useInput(){
    const [input,setInput] = useState();
    const onChange = (e) => {
        setInput(e.target.value);
    }

    return [input,onChange];
}


const HookExam = () => {
    
    const [input,onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} type="text" name="" id="" />
        </div>
    )
}

export default HookExam;