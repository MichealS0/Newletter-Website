import { FiHome, FiInfo, FiFile } from "react-icons/fi";

export default function NavigationBar() {
    return (
        <div className="w-screen flex justify-around p-1 items-center bg-slate-900 text-white">
            <p>APUNL</p>
            <ul className="flex gap-10">
                <li><a href="/"><FiHome /></a></li>
                <li><a href="/About"><FiInfo /></a></li>
                <li><a href="/Apply"><FiFile /></a></li>
            </ul>
            <button className="border-black border-2 rounded-xl px-2 p-1 bg-white text-black">Contribute</button>
        </div>
    )
}