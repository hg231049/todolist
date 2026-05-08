
const Controller = ({onClickButton,count}) => {
    return (
        <div className="flex gap-2 [&_button]:px-4 [&_button]:border [&_button]:border-gray-300 [&_button]:bg-white">
            <button onClick={() => { onClickButton(-1) }}>-1</button>
            <button onClick={() => { onClickButton(-10) }}>-10</button>
            <button onClick={() => { onClickButton(-100) }}>-100</button>
            <button onClick={() => { onClickButton(+100) }}>+100</button>
            <button onClick={() => { onClickButton(+10) }}>+10</button>
            <button onClick={() => { onClickButton(+1) }}>+1</button>
        </div>
    )
}

export default Controller;