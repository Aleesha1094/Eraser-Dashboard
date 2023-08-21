import NavScroll from "./Components/Navbar/navbar";
import Home from "./Components/Home/home";
import Middle from "./Components/Middle/middle";
import Footer from "./Components/Footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import InBetween from "./Components/InBetween/InBetween";
import './App.css';


function App() {
  return (
    <div>
      <NavScroll/>
      <Home/>
      <Middle/>
      <InBetween/>
      <Footer/>
    </div>
  );
}

export default App;
