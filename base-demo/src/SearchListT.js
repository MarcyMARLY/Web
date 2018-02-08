import React, { Component } from 'react';
class SearchListT extends Component{
  constructor(props,context){
   super(props,context);
   this.create = this.create.bind(this);
 }

 create(item){
   return <div  class="card mb-4 box-shadow" >   <div class="card-body"><li class="list-group-item" key={item.key}>{item.term},{item.priority} </li></div></div>
 }
  render(){
    var Sr = this.props.entries;
    var result = Sr.map(this.create)
    return(
      <div className="theSearchResult">
      <ul>{result}</ul>
      </div>
    );
  }
}
export default SearchListT;
