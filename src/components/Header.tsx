const Header = () => {
  return (
    <header className="flex w-full flex-row items-center justify-between">
      <h1 className="text-2xl">devFinder</h1>

      <button className="w-61 rounded-def h-10 bg-blue-200 p-2.5 text-sm font-extrabold tracking-wide hover:bg-blue-400">
        FAVS
      </button>
    </header>
  )
}

export default Header
