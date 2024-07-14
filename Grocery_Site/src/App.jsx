import { Body } from "./components/Body";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-[url(./images/Image.png)] bg-cover h-screen flex flex-col px-10 py-5 overflow-hidden  ">
        <Header/>
        <Body/>
    </div>
  );
}

export default App;
