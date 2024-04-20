import Moon from "./components/Moon.tsx";

function App() {
    return (
        <>
            {/* Top Banner */}
            <div className={"bg-chat flex items-center pl-4 gap-1.5 py-2 border-black border-b-2 h-8"}>
                <Moon />
                <h1 className="font-mplus font-black text-text -tracking-[0.75px] text-sm">Nightcord</h1>
            </div>
            <div className={"h-[calc(100vh-32px)] flex"}>

            </div>
        </>
    );
}

export default App;