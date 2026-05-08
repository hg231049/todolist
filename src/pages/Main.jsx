import { useState,useRef } from "react";
import List from "../components/List";
import Editor from "../components/Editor";

/*
    1. 컴포넌트 분리(헤더, 에디터,리스트,투두아이템)
    2. 각 컴포넌트 별로 ui잡기
    3. 목업 데이터 생성
    4. 할 일 추가하는 기능
        - 기존데이터(목업)에 새로운 할 일이 추가 되도록, props로 자식에 넘기기,  
        - onChange,onClick 함수 만들기
        - 세부 기능 설정 : 엔터, 포커스, 빈값
    5. map을 이용해서 데이터 list컴포넌트에 렌더링하기, key값 넣어주기
    6. 검색기능 
        - search값이 빈 배열 일때는 리스트를 반환.
        - 리스트에서 search값이 포함된 리스트를 반환
        - 대소문자 구분
    7. 수정하기(체크박스)
        - todo state 값들 중에 targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경(map)
    8. 삭제하기
        - 아이템의 id와 targetId가 같지 않은 요소들만 필터링. 삭제버튼을 누르지 않은 아이템들만 반환
*/
const mockData = [
    {
        id:0,
        isDone:false,
        cate:"WORK",
        content:"react 공부하기",
        date : new Date().getTime(),
    },
    {
        id:1,
        isDone:true,
        cate:"LIFE",
        content:"typescript 공부하기",
        date : new Date().getTime(),
    },
    {
        id:2,
        isDone:false,
        cate:"ETC",
        content:"퇴근하기",
        date : new Date().getTime(),
    },
];

const Main = () => {

    const [todos,setTodos] = useState(mockData);
    const idRef = useRef(3); 

    // 1. 생성하기
    const onCreate = (content,cate) => {
        const newTodo = {
            id:idRef.current ++,
            isDone:true,
            cate:cate,
            content:content,
            date : new Date().getTime(),
        }

        setTodos([newTodo,...todos]);
    }

    // 2. 수정하기(체크박스)
    const onUpdate = (targetId) => {
        // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열
        setTodos(todos.map((i)=> i.id === targetId ? {...i, isDone: !i.isDone} : i ))
    }

    // 3. 삭제하기
    const onDelete = (targetId) => {
         // 인수 : todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 삭제한 새로운 배열
        setTodos(todos.filter((item)=> item.id !== targetId)); 
    }

    return (
        <main className="flex flex-col gap-10">
            <Editor onCreate={onCreate}/>
            <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
        </main>
    )
}

export default Main;