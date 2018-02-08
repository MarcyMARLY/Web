import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Contact from './ContactList'
import TodoList from './TodoList'
import {Router, Route,hashHistory,Switch} from 'react-router';
import registerServiceWorker from './registerServiceWorker';
import createBrowserHistory from 'history/createBrowserHistory'
import { Link } from 'react-router-dom';

const history = createBrowserHistory()

class Home extends Component{


  render(){
    return (
      <div class = "Home">
      <div class = "jumbotron">
      <h1>Home page</h1>
      </div>
      <div class = "container">
      <SplitPane
         left={
           <div class="Test1" >
           <Contact />
           </div>
         }
         right={
           <div  class="Test1">
           <TodoList />
           </div>
     } />
     </div>
     </div>
    );
  }
}
function SplitPane(props) {
  return (
    <div className="SplitPane" class = "row">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  );
}
ReactDOM.render(

  <Router history = {history}>
  <div>
  <App />
  <Switch>
    <Route path = "/contacts" component = {Contact}/>
    <Route path  = "/todos" component = {TodoList}/>
    <Route path = "/" component = {Home}/>
  </Switch>
  </div>
</Router>,
 document.getElementById('root'));
registerServiceWorker();
