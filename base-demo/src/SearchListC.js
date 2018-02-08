import React, { Component } from 'react';


class SearchListC extends Component{
  constructor(props){
    super(props);
    this.create = this.create.bind(this);
  }
  create(item){
    return(<div class="card mb-4 box-shadow" ><div ><img src = {item.img} width = "40px" heigth="40px"/><li  class="list-group-item" key = {item.key}> {item.name} </li></div></div>)
  }
  render(){
    var items = this.props.entries;
    var result = items.map(this.create);
    return(
      <div className="strange">
      <label>Search result </label>
        <ul>
        {result}
        </ul>
      </div>
    );
  }
}
export default SearchListC;
