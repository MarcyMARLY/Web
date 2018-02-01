import React, { Component } from 'react';

class Contacts extends Component {
  constructor(){
    super();
    this.create = this.create.bind(this);
  }
  create(item){
    return (<div className = "list"><li key = {item.key}> {item.name}, {item.phone} <img src={item.img} alt="NoImage" height="20" width="20"/> <button onClick = {() => this.props.delete(item.key)}>del</button></li></div>)

  }
  render(){
    var items = this.props.entries;
    var result = items.map(this.create);
    return (
      <div className = "theList">
        <ul>{result}</ul>
      </div>
    );
  }
}

export default Contacts;
