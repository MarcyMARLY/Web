import React, { Component } from 'react';
class SearchListT extends Component{
  constructor(props,context){
   super(props,context);
   this.create = this.create.bind(this);
 }

 create(item){
   return <li key={item.key}>{item.term} </li>
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
