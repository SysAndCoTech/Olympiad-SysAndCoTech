import "./App.css";
import Header from "./component/navbar/Header";
import Title from "./component/mainTitle/title";
import Timer from "./component/Timer/time";
import Reward from "./component/Reward/reward";
import Sponsor from "./component/sponsor/sponsor";
import MainForm from "./component/form/mainForm/mainForm";
import Pay from "./component/form/pay/pay";
import Faq from "./component/faq/Faq";
import Footer from "./component/footer/footer";
function App() {
  return (
    <div className="App">
      <>
        <div className="background-img"></div>
        <Header />
        <Title />
        <Timer />
        <Reward />
        <Sponsor />
        <MainForm />
        <Pay />
        <Faq />
        <Footer />
      </>
    </div>
  );
}

export default App;
