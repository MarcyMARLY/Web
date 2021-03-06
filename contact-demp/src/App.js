import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchss from './SearchList.js';
import Contacts from './Contacts';

class App extends Component {
  constructor(){
    super();
    this.state  = {
      name: '',
      phone: '',
      search: '',
      img: '',
      contacts:[],
      searchContacts:[]
    };
    this.onNameSubmit = this.onNameSubmit.bind(this);
    this.onSearhSubmit = this.onSearhSubmit.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.onSearchChange  = this.onSearchChange.bind(this);
    this.imgChange = this.imgChange.bind(this);
    this.deleteContact = this.deleteContact.bind(this);
  }
  onNameSubmit = (e) =>{
    e.preventDefault();
    var contactCopy = this.state.contacts;
    contactCopy.unshift({name: this.state.name, phone : this.state.phone, img: this.state.img, key: Date.now()})
    console.log(contactCopy);
    this.setState({
      name:'',
      phone:'',
      img:'',
      searchContacts:[],
      contacts : contactCopy
    })
  }
  onSearhSubmit = (e) =>{
    e.preventDefault();
    var searchArray = this.state.contacts.filter((item) =>String(item.name).startsWith(this.state.search));
      this.setState({
        search:'',
        searchContacts: searchArray
      });
  }
  onSearchChange = (e) =>{
    this.setState({search: e.target.value});
  }
  nameChange = (e) =>{
    this.setState({name: e.target.value});
  }
  phoneChange = (e) =>{
    this.setState({phone: e.target.value});
  }
  imgChange = (e) => {
    this.setState({img: e.target.value});
  }
  deleteContact(key){
    var delArray = this.state.contacts.filter((item) => (item.key !== key ));

    console.log(delArray);

    this.setState({
      contacts:delArray,
      searchContacts:[]
    });
  }
  render() {
    return (
      <div className="App">
        <h3>ContactList</h3>

        <div className = "Forms">

          <form onSubmit = {this.onNameSubmit}>
          <div class="form-label-group">
            <input value = {this.state.name} onChange = {this.nameChange} placeHolder=" Name"/>
            </div>
            <div class="form-label-group">
            <input value = {this.state.phone} onChange = {this.phoneChange} placeHolder=" Phone"/>
              </div>
              <div class="form-label-group">
            <input value = {this.state.img} onChange = {this.imgChange} placeHolder=" Image"/>
            </div>


            <button class="btn btn-sm btn-primary btn-block" type = "submit">Submit</button>
          </form>
          <form onSubmit = {this.onSearhSubmit}>
          <div class="form-label-group">
            <input value = {this.state.search} onChange = {this.onSearchChange} placeHolder=" Search"/>
            </div>
            <button type = "submit" class="btn btn-sm btn-primary btn-block">Submit</button>
          </form>
        </div>
        <div>
          <Contacts entries = {this.state.contacts} delete = {this.deleteContact}/>
          <Searchss entries = {this.state.searchContacts}/>
        </div>

      </div>
    );
  }
}

export default App;
