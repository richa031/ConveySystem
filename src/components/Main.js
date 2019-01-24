import React, {Component} from 'react';
import  Home  from './Home';
import Footer from './Footer';
import TeamPage from './About';
import ContactPage from './Contact';
import NavbarPage from './navb';
import EcommercePage from './categories';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {
    
    render(){
        const HomePage = () => {
            return(
                <Home />
            );

        }
        return (
            <div>
              <NavbarPage />
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route exact path="/categories/grocery" component={() => <EcommercePage />} />
                <Route exact path="/aboutus" component={() => <TeamPage />} />
                <Route path="/contactus" component={() => <ContactPage />} />
                <Redirect to="/home" />
              </Switch>
              <Footer />
            </div>
          );
        
        
    }
}
export default Main;