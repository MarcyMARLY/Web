import React, { Component } from 'react';


class SearchList extends Component{
  constructor(props){
    super(props);
    this.create = this.create.bind(this);
  }
  create(item){
    return <div className = "SearchResult" ><li key = {item.key}> {item.name},{item.phone}</li></div>
  }
  render(){
    var items = this.props.entries;
    var result = items.map(this.create);
    return(
      <div className="strange">
        <ul>
        {result}
        </ul>
      </div>
    );
  }
}
export default SearchList;
