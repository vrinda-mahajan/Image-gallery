import Navbar from "./components/navbar";
import img from "./assets/images/landing.svg"
function App() {
  return (
    <div className="">
      <div className="h-screen relative">
        <Navbar />
        <img src={img} className="h-auto w-full"/>
      </div>
    </div>
  );
}

export default App;
