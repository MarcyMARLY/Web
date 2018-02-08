import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchss from './SearchListC.js';
import Contacts from './Contacts';

class ContactList extends Component {
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
  handleUpdate = (key,name,phone,img) =>{
    var test = this.state.contacts;

    console.log("I'm here");

    test.forEach(function(e){
      if(e.key===key){
        e.name = name;

      }
    });
    test.forEach(function(e){
      if(e.key===key){
          e.phone = phone;

      }
    });
    test.forEach(function(e){
      if(e.key===key){
      e.img = img;

      }
    });


    this.setState({
      contacts:test
    })
    console.log(this.state.contacts);
  }
  onNameSubmit = (e) =>{
    e.preventDefault();
    var contactCopy = this.state.contacts;
    contactCopy.unshift({name: this.state.name, phone : this.state.phone, img: this.state.img, key: Date.now()})

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
      <div className="ContactList">
        <h3>Contact List</h3>

        <div className = "Forms">

          <form onSubmit = {this.onNameSubmit} class="col-md-6 mb-3">
          <label>Parameters</label>
          <div class="col-md-10 mb-3">
            <input  class = "form-control"value = {this.state.name} onChange = {this.nameChange} placeHolder=" Name"/>
            </div>
            <div class="form-label-group" class="col-md-10 mb-3">
            <input  class = "form-control"value = {this.state.phone} onChange = {this.phoneChange} placeHolder=" Phone"/>
              </div>
            <div class="form-label-group" class="col-md-10 mb-3">
            <input class = "form-control" value = {this.state.img} onChange = {this.imgChange} placeHolder=" Image"/>
            </div>

          <div class="form-label-group" class="col-md-10 mb-3">
            <button class="btn btn-lg btn-primary btn-block" type = "submit">Submit</button>
            </div>
          </form>
          <form onSubmit = {this.onSearhSubmit} >
            <label>Search</label>
            <div class="form-label-group" class="col-md-10 mb-3">
              <input class = "form-control" value = {this.state.search} onChange = {this.onSearchChange} placeHolder=" Search"/>

            </div>

          </form>
        </div>
        <div>
          <Contacts entries = {this.state.contacts} delete = {this.deleteContact} handleUpdate = {this.handleUpdate}/>
          <Searchss entries = {this.state.searchContacts}/>
        </div>

      </div>
    );
  }
}

export default ContactList;
