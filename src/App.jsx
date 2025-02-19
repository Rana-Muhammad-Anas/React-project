import { Routes, Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./component/pages/Home-Components/Home";
import Transcend from "./component/pages/ProductsPages/Transcend";
import Retail from "./component/pages/ProductsPages/Retail";
import Portals from "./component/pages/ProductsPages/Portals";
import Loan from "./component/pages/ProductsPages/Loan";
import Service from "./component/pages/ProductsPages/Service";
import Finance from "./component/pages/ProductsPages/Finance";
import Marketplace from "./component/pages/Marketplace";
import Information from "./component/pages/Services pages/Information";
import Digital from "./component/pages/Services pages/Digital";
import Mobility from "./component/pages/ProductsPages/Mobility";
import AI from "./component/pages/Services pages/AI";
import GenAi from "./component/pages/Services pages/GenAi";
import Policy from "./component/pages/Services pages/Policy";
import Techno from "./component/pages/Services pages/Techno";
import Cloud from "./component/pages/Services pages/Cloud";
import Data from "./component/pages/Services pages/Data";
import Automotive from "./component/pages/Solutions pages/Automotive";
import Equipment from "./component/pages/Solutions pages/Equipment";
import Insights from "./component/pages/Insights";
import Netsol from "./component/pages/AboutUs pages/Netsol";
import Directors from "./component/pages/AboutUs pages/Directors";
import Team from "./component/pages/AboutUs pages/Team";
import News from "./component/pages/AboutUs pages/News";
import Investors from "./component/pages/AboutUs pages/Investors";
import Careers from "./component/pages/AboutUs pages/Careers";
import Contact from "./component/pages/Contact";
import Error from "./component/pages/Error";
import routes from "../src/component/pagesRoutes.json";
import Footer from "./component/footer/Footer";
import TermsofUse from "./component/pages/Footer-link-pages/Terms-of-Use";
import PrivacyPolicy from "./component/pages/Footer-link-pages/Privacy-policy";
import SlaveryAct from "./component/pages/Footer-link-pages/Slavery-Act";
import HumanRights from "./component/pages/Footer-link-pages/Human-rights";

function App() {
  const routesElement = {
    Home: <Home />,
    Marketplace: <Marketplace />,
    Transcend: <Transcend />,
    Retail: <Retail />,
    Portals: <Portals />,
    Loan: <Loan />,
    Service: <Service />,
    Finance: <Finance />,
    Mobility: <Mobility />,
    Information: <Information />,
    Digital: <Digital />,
    AI: <AI />,
    GenAi: <GenAi />,
    Policy: <Policy />,
    Techno: <Techno />,
    Cloud: <Cloud />,
    Data: <Data />,
    Automotive: <Automotive />,
    Equipment: <Equipment />,
    Insights: <Insights />,
    Netsol: <Netsol />,
    Directors: <Directors />,
    Team: <Team />,
    News: <News />,
    Investors: <Investors />,
    Careers: <Careers />,
    Contact: <Contact />,
    TermsofUse: <TermsofUse />,
    PrivacyPolicy: <PrivacyPolicy />,
    SlaveryAct: <SlaveryAct />,
    HumanRights: <HumanRights />,
    Error: <Error />,
  };
  return (
    <>
      <NavBar />
      <Routes>
        {routes.map((route) => {
          return (
            <>
              <Route
                key={route.id}
                path={route.path}
                element={routesElement[route.element]}
              />
            </>
          );
        })}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
