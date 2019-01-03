import React, { Component, Fragment } from 'react';
import TodoItem from './TodoItem';
import Css3Transition from './Css3Transition';
import TransitionAddItem from  './TransitionAddItem';
import axios from 'axios';
// import Test from './Test';
import './style.css'

class TodoList extends Component {
    constructor(props){
       super(props);
       this.state = {
          inputValue:'',
            list: []
       }
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
      console.log('componentDidMount')
      axios.get('/api/todolist')
           .then(()=>{alert('succ')})
           .catch(()=>{console.log('error')})
   }

    shouldComponentUpdate(){
       console.log('sholudComponentUpdate');
       return true
    }

   /** 
    * 但数据props或者state发生变化时候shouldComponentUpdate返回true的时候
    * componentWillUpdate将会被执行 render也将重新渲染
    *  **/

    componentWillUpdate() {
        console.log('componentWillUpdate')    
    }

    componentDidUpdate() {
        console.log('componentDidUpdate')
    }

    componentWillReceiveProps(){
       console.log('componentWillReceiveProps')
    }

    render() {
       console.log('render')
       return (
           <Fragment>
              <div>
                <label  htmlFor='insert'>请输入内容</label>  
                <input
                     id='insert'     
                     className='input'
                     value={this.state.inputValue}  
                     onChange={this.handleInputChange.bind(this)}
                     ref={(input)=>{this.input=input}}
                /> 
                <button 
                  ref={( button ) => {this.button=button}} 
                  onClick={this.handleBtnClick.bind(this)}
                >
                  提交
                </button>
              </div>
              <ul ref={(ul)=>{this.ul=ul}}>
                {
                    this.state.list.map((item, index) => {
                        return (
                            // 需要每次循环把值和下标传进去
                            <TodoItem    
                               item={item}  
                               idx={index}
                               key={index}
                               handleItemClick = {this.handleDeleteClick.bind(this)}
                            />
                            /*
                            <li  
                            key={index}  
                            onClick={this.handleDeleteClick.bind(this,index)}
                            >
                            {item}
                            </li>
                            */
                         )
                    })
                }
              </ul>
              {/* <Test  content={this.state.inputValue}/> */}
              <br></br><br></br><br></br><br></br>

              <Css3Transition/>

              <br></br><br></br><br></br><br></br>    
              <TransitionAddItem/>
           </Fragment>
       ) 
    }

    handleInputChange(e) {
       this.setState({
          inputValue: this.input.value            //e.target.value
       }) 
      //  console.log(this.input)
    }
    
    handleBtnClick(){
       this.setState({
           list:[...this.state.list,this.state.inputValue],
           inputValue:''
       },()=>{
           console.log(this.ul.querySelectorAll('li').length)
       }) 
      //  console.log(this.button) 
     
    }

    handleDeleteClick(index){
       const list = this.state.list;
       list.splice(index,1);
       this.setState({
           list:list
       })
    }

}


export default TodoList;