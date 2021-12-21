import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenuBar from './Components/Include/TopMenuBar';
import Footer from './Components/Include/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import PropertyEvaluation from './Components/PropertyConsultants/PropertyEvaluation';
import Taxation from './Components/PropertyConsultants/Taxation';
import BuySell from './Components/PropertyConsultants/BuySell';
import HomeSearch from './Components/PropertyConsultants/HomeSearch';
import Documentation from './Components/PropertyConsultants/Documentation';
import BankingAssist from './Components/PropertyConsultants/BankingAssist';
import Investment from './Components/PropertyConsultants/Investment';
import ProjectMarketing from './Components/PropertyConsultants/ProjectMarketing';
import Painting from './Components/PropertyManagement/Painting';
import Electrical from './Components/PropertyManagement/Electrical';
import Plumbing from './Components/PropertyManagement/Plumbing';
import Relocations from './Components/OtherServices/Relocations';
import VaastuConsulting from './Components/OtherServices/VaastuConsulting';
import DigitalMarketing from './Components/OtherServices/DigitalMarketing';
import WebDesigns from './Components/OtherServices/WebDesigns';

function App() {
  return (
    <div>
      <Router>
        <TopMenuBar />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/about" index element={<About />}></Route>
          <Route path="/proprety-consultants/property-evalution" index element={<PropertyEvaluation />}></Route>
          <Route path="//proprety-consultants/taxation" index element={<Taxation />}></Route>
          <Route path="proprety-consultants/buy-sell" index element={<BuySell />}></Route>
          <Route path="/proprety-consultants/home-search" index element={<HomeSearch />}></Route>
          <Route path="/proprety-consultants/documentation" index element={<Documentation/>}></Route>
          <Route path="/proprety-consultants/banking-assist" index element={<BankingAssist />}></Route>
          <Route path="/proprety-consultants/investment" index element={<Investment />}></Route>
          <Route path="/proprety-consultants/project-marketing" index element={<ProjectMarketing />}></Route>
          <Route path="/property-management/painting" index element={<Painting />}></Route>
          <Route path="/property-management/electrical" index element={<Electrical/>}></Route>
          <Route path="/property-management/plumbing" index element={<Plumbing />}></Route>
          <Route path="/other-services/relocations" index element={<Relocations />}></Route>
          <Route path="/other-services/vaastu-consulting" index element={<VaastuConsulting />}></Route>
          <Route path="/other-services/digital-marketing" index element={<DigitalMarketing />}></Route>
          <Route path="/other-services/web-designs" index element={<WebDesigns />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
