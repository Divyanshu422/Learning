import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex-1 p-4"></div>
      </div>
    </div>
  );
}

export default App;
