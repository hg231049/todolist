import { useState,useEffect,useRef } from "react";
import Viewer from "../components/Viewer";
import Controller from "../components/Controller";


const CounterApp = () => {
    
    const [count,setCount] = useState(0);
    const [input,setInput] = useState("");
    const isMount = useRef(false);

    const onClickButton = (value) => {
        setCount(count + value);
    }

    useEffect(()=>{
        console.log(`${count}${input}`);
    },[count,input]) // deps. 의존성 배열. 해당 값이 바뀔때마다 콜백함수가 실행됨.

    // 1. 마운트 : 탄생
    // -> deps를 빈배열로 전달
    useEffect(()=>{
        console.log("mount");
    },[])
    // 2. 업데이트 : 변화, 리렌더링
    // -> deps를 생략
     useEffect(()=>{
        if(!isMount.current){ // isMount.current의 값이 false라면
            isMount.current = true;
            return;
        }
        console.log("update");
    })
    // 3. 언마운트 : 죽음

    return (
        <div className="inline-flex flex-col gap-10 [&_section]:p-10 [&_section]:bg-gray-100">
            <h2 className="font-bold text-7xl">CounterApp</h2>
            <section>
                <input value={input} onChange={(e)=>{setInput(e.target.value)}} type="text" className="bg-white"/>
            </section>
            <section>
                <Viewer count={count}/>
            </section>
            <section>
                <Controller onClickButton={onClickButton}/>
            </section>
        </div>
    )
}

export default CounterApp;