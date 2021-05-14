import logo from './logo.svg';

import React, {Suspense, lazy} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TheNavbar from "./Components/UI/TheNavbar";

import './Style/App.css';
import './Style/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { NoMatch } from './components/Pages/NoMatch';
// import Footer from "./components/Ui/Footer";



const Home = lazy(()=>import('./Components/Home/Home'))
const Baie = lazy(()=>import('./Components/Baie/Baie'))
const Parcare = lazy(()=>import('./Components/Parcare/Parcare'))
const Living = lazy(()=>import('./Components/Living/Living'))
const Dormitor = lazy(()=>import('./Components/Dormitor/Dormitor'))
const Bucatarie = lazy(()=>import('./Components/Bucatarie/Bucatarie'))
const Balcon = lazy(()=>import('./Components/Balcon/Balcon'))


function App() {
  return (
      <React.Fragment>
        <Router>
          <TheNavbar />
          {/*<Sidebar />*/}
          <Suspense fallback={<p> Loading ...</p>}>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/living" component={Living}/>
              <Route exact path="/dormitor" component={Dormitor}/>
              <Route exact path="/bucatarie" component={Bucatarie}/>
              <Route exact path="/baie" component={Baie}/>
              <Route exact path="/balcon" component={Balcon}/>
              <Route path="/parcare" component={Parcare} />
              {/*<Route component={NoMatch} />*/}
            </Switch>
          </Suspense>
          {/*<Footer />*/}
        </Router>
      </React.Fragment>
  );
}

export default App;
