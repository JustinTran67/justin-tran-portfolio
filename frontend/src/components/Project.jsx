// assets
import macbook from "../assets/macbook.png";
import Github from "../assets/Github.jsx";
// logos
import nextplaylogo from "../assets/nextplay.png";
import resuraylogo from "../assets/resuray.png";
import tictactoelogo from "../assets/tictactoe.png";
// videos
import nextplaydisplay from "../assets/nextplay.mp4";
import resuraydisplay from "../assets/resuray.mp4";
import tictactoe from "../assets/tictactoe.mp4";

export default function Project() {

    return (
        <div>
            <h1 className="text-lg text-gray-400 font-light mb-24">PROJECTS</h1>
            <div>
                <Card display={nextplaydisplay} title="NextPlay" logo={nextplaylogo}
                description= "Fullstack ML app that uses trained regression model to serve NBA player projections."
                github="https://github.com/JustinTran67/NextPlay-AI" demo="https://nextplay-ai.vercel.app/"
                />
                <Card display={resuraydisplay} title="ResuRAY" logo={resuraylogo}
                description="AI resume scoring and job description matching platform made with OpenAI"
                github="https://github.com/JustinTran67/ResuRAY" demo="https://resuray.vercel.app/"
                />
                <Card display={tictactoe} title="Tic-Tac-Toe" logo={tictactoelogo}
                description="Full-stack multiplayer web game that saves tictactoe game scores in SQL database"
                github="https://github.com/JustinTran67/TicTacToe" demo="https://github.com/JustinTran67/TicTacToe"
                />
            </div>
        </div>
    )
}

function Card({ display, title, logo, description, github, demo }) {

    return (
        <div className="w-full">
            <div className="flex flex-row gap-2">
                <a className="relative w-[500px]" href={demo} target="_blank">
                <div className=" absolute top-[1%] left-[10%] w-[80%] h-[90%] overflow-hidden rounded-lg z-0">
                        <video  src={display} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                    </div>
                    <img className="w-full relative z-10" src={macbook} alt="project-border"
                    />
                </a>
                <div className="flex flex-col w-[400px] gap-2 text-xl font-light text-gray-700">
                    <div className="flex flex-row justify-between items-center">
                        <div className="flex flex-row gap-2 items-center">
                            <img className="w-6" src={logo} alt="project-logo"></img>
                            <a className="" href={demo} target="_blank">{title}</a>
                        </div>
                        <a className="flex flex-row gap-2 text-lg fill-gray-400 text-gray-400 hover:fill-gray-700 hover:text-gray-700 transition duration-200 ease-in-out" href={github} target="_blank"><Github className="w-4"></Github>GitHub</a>
                    </div>
                    <p className="text-gray-400 text-sm">{description}</p>
                </div>
            </div>
            <div className="h-48"></div>
        </div>
    )
}