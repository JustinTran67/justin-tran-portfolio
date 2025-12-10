// assets
import Portrait from "../assets/portrait.jpg";
import Github from "../assets/Github.jsx";
import LinkedIn from "../assets/LinkedIn.jsx";
import Instagram from "../assets/Instagram.jsx";

export default function Base() {
    return (
        <div className="w-full">
            <div className="flex flex-col">
                <div className="flex flex-row w-full justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-left font-medium text-4xl font-heading">Justin Tran</h1>
                        <h2 className="text-left text-xl mt-2">Fullstack developer.</h2>
                        <div className="flex flex-row gap-4 text-lg fill-gray-500 text-gray-500">
                            <a className="flex flex-row gap-2  hover:fill-black hover:text-black transition duration-200 ease-in-out" href="https://www.linkedin.com/in/justin-tran-902938355/" target="_blank"><LinkedIn className="w-4"></LinkedIn>LinkedIn</a>
                            <p>/</p>
                            <a className="flex flex-row gap-2  hover:fill-black hover:text-black transition duration-200 ease-in-out" href="https://github.com/JustinTran67" target="_blank"><Github className="w-4"></Github>GitHub</a>
                            <p>/</p>
                            <a className="flex flex-row gap-2  hover:fill-black hover:text-black transition duration-200 ease-in-out" href="https://www.instagram.com/justin.t.tran/" target="_blank"><Instagram className="w-4"></Instagram>Instagram</a>
                        </div>
                    </div>
                    <div className="w-[130px] h-[130px] overflow-hidden rounded-full shadow-xl">
                        <img className="w-full h-full object-cover" src={Portrait} alt="Justin Tran's portrait"></img>
                    </div>
                </div>
                <div className="h-12"></div>
                <div>
                    <h1 className="text-xl">BACKGROUND</h1>
                </div>
                <div className="h-12"></div>
                <div>
                    <h1 className="text-xl">PROJECTS</h1>
                </div>
            </div>
        </div>
    )
}