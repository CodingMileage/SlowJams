import Music from "./components/Music";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
      <div className="relative w-full h-full bg-[url('https://picsum.photos/2000/900')] bg-repeat-x  animate-scrollBackground">
        {/* <SideBar /> */}
        <Music />
      </div>
    </>
  );
}

export default App;
