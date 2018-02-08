import React, { Component } from 'react';

class Contacts extends Component {
  constructor(){
    super();
    this.state ={
      editing : null,
      name:'',
      phone:'',
      img:'',
      nameCopy:'',
      phoneCopy:'',
      imgCopy:''
    };
    this.create = this.create.bind(this);

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

  handleEditItem = (e) =>{
    let itemId = this.state.editing;
    if(this.state.phone===""){
      this.state.phone = this.state.phoneCopy;
    }
    if(this.state.name===""){
      this.state.name = this.state.nameCopy;
    }
    if(this.state.img ===""){
      this.state.img = this.state.imgCopy;
    }
    this.props.handleUpdate(e,this.state.name,this.state.phone,this.state.img);

    this.state.editing = null;
  }
  toggleEditing = (e) =>{
    this.setState({
      editing:e
    });
  }
  create(item){
    if(this.state.editing === item.key){
      this.state.nameCopy = item.name;
      this.state.phoneCopy = item.phone;
      this.state.imgCopy = item.img;
      return <li key={ `editing-${ item.key }` } className="list-group-item">

       <div className="col-xs-12 col-sm-3">
         <input
           onKeyDown = {this.nameChange}
           type="text"
           className="form-control"
           ref={ `title_${ item.key }` }
           name="title"
           defaultValue={ item.name }
         />
       </div>
       <div className="col-xs-12 col-sm-3">
            <input
              onKeyDown = {this.phoneChange}
              type="text"
              className="form-control"
              ref={ `phone_${ item.key }` }
              name="phone"
              defaultValue={ item.phone }
            />
          </div>
          <div className="col-xs-12 col-sm-3">
            <input
              onKeyDown = {this.imgChange}
              type="text"
              className="form-control"
              ref={ `img_${ item.key }` }
              name="img"
              defaultValue={ item.img }
            />
          </div>
          <div className="col-xs-12 col-sm-3">
            <button onClick={ this.handleEditItem.bind(null, item.key)} >Update</button>
          </div>

      </li>;
    }else{
      return(<div class="card mb-4 box-shadow" onClick = {this.toggleEditing.bind(null, item.key)}><div class = "row"><img src = {item.img} width = "50px" heigth="30px"/><li  class="list-group-item" key = {item.key}> {item.name} <button class="btn btn-sm btn-outline-secondary" onClick = {() => this.props.delete(item.key)}>del</button></li></div></div>)
    }
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
