
const Header = ({themMode,isDark}) => {
    const date = new Date().toLocaleDateString();
    
    return (
        <header className="">
            <div className="flex flex items-baseline justify-between py-10">
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl">Today Is..</h2>
                    <h1 className="font-black text-5xl">{date}</h1>
                </div>
                <div className="[&_button]:px-4 [&_button]:border [&_button]:border-gray-400  [&_button]:rounded-2xl [&_button]:cursor-pointer">
                   {isDark === true ? 
                        <button onClick={themMode} className="hover:bg-white hover:text-black">
                            ON
                        </button>
                         :
                         <button onClick={themMode} className="hover:bg-black hover:text-white ">
                            OFF
                        </button>
                    } 
                </div>
            </div>
        </header>
    )
}

export default Header;