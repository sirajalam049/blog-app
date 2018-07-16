import BlogListComponent from './screens/blog-list/index';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import {HomePage} from './screens/HomePage';
import React from 'react';
import {SingleBlog} from './screens/single-blog/index';

const STYLES = {
    width: '1000px',
    margin: '0 auto'
}

export class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <div>
                    <center><h1><Link to={'/'}>Welcome to Siraj's Blog</Link></h1></center>
                    <hr />
                    <div  style={STYLES}>
                        <Switch>
                            <Route path='/' exact component={HomePage}></Route>
                            <Route path='/blogs' exact component={BlogListComponent}></Route>
                            <Route path='/post' exact component={SingleBlog}></Route>
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}
