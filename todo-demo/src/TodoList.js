import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Items from './Items';
import ItemsS from './SearchList';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term:'',
      search:'',
      searchItems:[],
      items:[]
    };


  }
  onChange = (event) =>{
      this.setState({term: event.target.value});
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

    itemcopy.unshift({term: this.inputE.value, key: Date.now()})

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
  render() {
    return (
      <div className="App">

        <h3>TODOS</h3>
        <form onSubmit = {this.onSubmit}>
        <input value={this.state.term} onChange = {this.onChange} ref = { (a) => this.inputE = a}/>
        <button type = "submit">Submit</button></form>
        <form onSubmit = {this.onS}>
        <input value= {this.state.search} onChange = {this.onC} /> <button type = "submit">Search</button>
        </form>
        <Items entries = {this.state.items} delete={this.deleteItem}/>
        <ItemsS entries = {this.state.searchItems}/>

      </div>
    );
  }
}

export default TodoList;
