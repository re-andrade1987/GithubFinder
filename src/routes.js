import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Repos from './components/Respos/index'
import InfoRepos from './components/InfoRepos/index'


const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Repos}/>
                <Route  path="/InfoRepos" component={InfoRepos}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;