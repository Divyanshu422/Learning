import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Data from "./components/Data";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <SideBar />
        <div className="flex-1 p-4">
          <Data />
        </div>
      </div>
    </div>
  );
}

export default App;
