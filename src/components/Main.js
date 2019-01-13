import React, {Component} from 'react';
import  Home  from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import TeamPage from './About';
import ContactPage from './Contact';
import Books from './Booksnstationery';

class Main extends Component {
    
    render(){
        const HomePage = () => {
            return(
                <Home />
            );

        }
        return (
            <div>
              <Header />
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/categories/booksNstationery" component={Books} />
                <Route path="/aboutus" component={TeamPage} />
                <Route path="/contactus" component={() => <ContactPage />} />
                <Redirect to="/home" />
              </Switch>
              <Footer />
            </div>
          );
        
        
    }
}
export default Main;