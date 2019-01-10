import React, {Component} from 'react';
import  Home  from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Footer from './Footer';
import Header from './HeaderComponent';
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
                <Route path="/home" component={HomePage} />
                {/*<Route path="/aboutus" component={() => <About leaders = {this.props.leaders} />} />
                <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                <Route path="/menu/:dishId" component={DishWithId} />
        <Route path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />*/}
                <Redirect to="/home" />
              </Switch>
              <Footer />
            </div>
          );
        
        
    }
}
export default Main;