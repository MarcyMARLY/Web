import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items';
import ItemsS from './SearchListT';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term:'',
      priority:"low",
      search:'',
      searchItems:[],
      items:[],
      completeList:[]
    };


  }
  onChange = (event) =>{
      this.setState({term: event.target.value});
    }
  onChangePriority = (event) =>{
      this.setState({priority: event.target.value});
    }
  onC = (event) =>{
    this.setState({search:event.target.value});
  }

  onS = (event) => {
    event.preventDefault();
    var searchArray = this.state.items.filter((item) => (String(item.term).startsWith(this.state.search)));
    console.log(searchArray);
    this.setState({
      search:'',
      searchItems: searchArray
    });
  }


  onSubmit = (event) => {
    event.preventDefault();
    var itemcopy =this.state.items.filter((item) => (item.term!=this.state.term));

    itemcopy.unshift({term: this.inputE.value,priority:this.state.priority, key: Date.now()});

    itemcopy.sort(function(a,b){
      if(a.priority === "medium" && b.priority ==="high"){
        return true;
      }
      if(a.priority === "low" && b.priority ==="medium"){
        return true;
      }
      if(a.priority === "low" && b.priority ==="high"){
        return true;
      }


    });
    this.setState({
      term: '',

      searchItems:[],
      items: itemcopy
    });
  }

  deleteItem = (key) => {
    var delArray = this.state.items.filter((item) => (item.key !== key));

    this.setState({
      searchItems:[],
      items:delArray
    });
  }
  HighHandler = () =>{
    this.setState({
      priority:"high"
    });
  }
  MediumHandler = () =>{
    this.setState({
      priority:"medium"
    });
  }
  LowHandler = () =>{
    this.setState({
      priority:"low"
    });
  }
  complete = (key) =>{
    var completeListCopy = this.state.items.filter((item)=>item.key===key);
    var cc = this.state.completeList.concat(completeListCopy);
    console.log(cc);
    this.deleteItem(key);
    this.setState({
      completeList:cc
    });
  }
  handleUpdate = (key,term,priority) =>{
    var test = this.state.items;

    console.log("I'm here");
    console.log(priority);

    test.forEach(function(e){
      if(e.key===key){
        e.term = term;
        e.priority = priority;
      }
    });
    // test.forEach(function(e){
    //   if(e.key===key){
    //   }
    // });
    this.setState({
      items:test
    })

  }

  getList = () => {
    const testList  = this.state.completeList.map((x)=><li  class="list-group-item" key = {x.key}>{x.term}</li>)
    return testList;
  }
  render() {
    return (
      <div class="TodoList">

        <h3>Todos</h3>
        <div class ="row" >
        <form  class="col-md-6 mb-3" onSubmit = {this.onSubmit}>
        <label for="firstName">Term</label>
        <input class = "form-control" value={this.state.term} onChange = {this.onChange} ref = { (a) => this.inputE = a}/>
        </form>
          <div class="col-md-4 mb-3">
                <label for="state">Priority</label>
                <select class="custom-select d-block w-100" id="priority">
                  <option value="" onClick = {this.HighHandler}>High</option>
                  <option onClick = {this.MediumHandler}>Medium</option>
                  <option onClick = {this.LowHandler}>Low</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
          </div>

        </div>
          <div class ="row" >
        <form onSubmit = {this.onS} class="col-md-6 mb-3">
        <label for="firstName">Search</label>
        <input class = "form-control" value= {this.state.search} onChange = {this.onC} />
        </form>
        </div>
        <div class = "Lists">
          <Items entries = {this.state.items} delete={this.deleteItem} handleUpdate = {this.handleUpdate} complete = {this.complete}/>
          <ItemsS entries = {this.state.searchItems}/>
          <label for="complete">CompeteList</label>
          <ul>
              {this.getList()}
          </ul>
        </div>

      </div>
    );
  }
}

export default TodoList;
