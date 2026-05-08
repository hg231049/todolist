
const Header = ({themMode}) => {
    const date = new Date().toLocaleDateString();
    
    return (
        <header className="">
            <div className="flex flex items-baseline justify-between py-10">
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl">Today Is..</h2>
                    <h1 className="font-black text-5xl">{date}</h1>
                </div>
                <button onClick={themMode} className="px-4 border border-gray-400 rounded-2xl cursor-pointer hover:bg-black hover:text-white [.darkMode_&]:hover:bg-white [.darkMode_&]:hover:text-black">버튼</button>
            </div>
        </header>
    )
}

export default Header;