import "./Header.css"
import reactLogo from "./assets/react.svg"

function Header() {
  return (
    <>
      <nav>
        <header className="w-full bg-slate-300 h-20 flex justify-between items-center">
          <div className="ml-6 flex bg-slate-200 py-2 px-4 rounded-full">
            <img src={reactLogo} alt="reactLogo" />
            <h1 className="ml-2 text-2xl font-black text-gray-900">StaticSite</h1>
          </div>
          <ul className="flex gap-6 h-full mr-10 items-center">
            <a href="">
              <li className="bg-slate-500 py-1 px-4 rounded-full text-white font-bold">Menu</li>
            </a>
            <a href="">
              <li className="bg-slate-500 py-1 px-4 rounded-full text-white font-bold">Home</li>
            </a>
            <a href="">
              <li className="bg-slate-500 py-1 px-4 rounded-full text-white font-bold">Shops</li>
            </a>
            <a href="">
              <li className="bg-slate-500 py-1 px-4 rounded-full text-white font-bold">Contact</li>
            </a>
          </ul>
        </header>
      </nav>
    </>
  )
}

export default Header
