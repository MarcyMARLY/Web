import React, { Component } from 'react';

class Items extends Component{
   constructor(props,context){
    super(props,context);
    this.createTask = this.createTask.bind(this);
  }

  createTask(item){
    return <li key={item.key}>{item.term} <button onClick ={()=> this.props.delete(item.key)}>del</button></li>
  }
  render(){
    var itemEntries = this.props.entries;
    var listEn = itemEntries.map(this.createTask);
    return(
      <div className="theList">
      <ul>{listEn}</ul>
      </div>
    );
  }
}
export default Items;
