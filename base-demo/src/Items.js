import React, { Component } from 'react';

class Items extends Component{
   constructor(props,context){
    super(props,context);
    this.state={
      editing:null,
      term:'',
      termCopy:'',
      priority:'',
      priorityCopy:''
    };
    this.createTask = this.createTask.bind(this);
  }
  toggleEditing = (e) =>{
    this.setState({
      editing:e
    });
  }
  termChange = (e) =>{
    this.setState({term: e.target.value});
  }
  priorityChange = (e) =>{
    this.setState({priority: e.target.value});
  }


  handleEditItem = (e) =>{
    let itemId = this.state.editing;
    if(this.state.term===""){
      this.state.term = this.state.termCopy;
    }
    if(this.state.priority===""){
      this.state.priority = this.state.priorityCopy;
    }

    this.props.handleUpdate(e,this.state.term,this.state.priority);

    this.state.editing = null;
  }
  createTask(item){
    if(this.state.editing === item.key){
      this.state.termCopy = item.term;
      this.state.priorityCopy = item.priority;

      return <li key={ `editing-${ item.key }` } className="list-group-item">

       <div className="col-xs-12 col-sm-3">
         <input
           onKeyDown = {this.termChange}
           type="text"
           className="form-control"
           ref={ `title_${ item.key }` }
           name="title"
           defaultValue={ item.term }
         />
       </div>
       <div className="col-xs-12 col-sm-3">
            <input
              onKeyDown = {this.priorityChange}
              type="text"
              className="form-control"
              ref={ `phone_${ item.key }` }
              name="phone"
              defaultValue={ item.priority }
            />
          </div>

          <div className="col-xs-12 col-sm-3">
            <button onClick={ this.handleEditItem.bind(null, item.key)} >Update</button>
          </div>

      </li>;
    }else{
      return <div  class="card mb-4 box-shadow" onClick = {this.toggleEditing.bind(null, item.key)}>   <div class="card-body"><li class="list-group-item" key={item.key}>{item.term},{item.priority} <button class="btn btn-sm btn-outline-secondary" onClick ={()=> this.props.complete(item.key)}>complete</button><button class="btn btn-sm btn-outline-secondary" onClick ={()=> this.props.delete(item.key)}>del</button></li></div></div>
    }

  }
  render(){
    var itemEntries = this.props.entries;

    var listEn = itemEntries.map(this.createTask);
    return(
      <div class="col-md-4">
      <ul>{listEn}</ul>
      </div>



    );
  }
}
export default Items;
