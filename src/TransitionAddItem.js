import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';


export default class TransitionAddItem extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[]
        }
        this.handleAddItem = this.handleAddItem.bind(this)
    }

    render(){
       return(
         <Fragment>
            <TransitionGroup>
              {
                this.state.list.map((item,index)=>{
                   return (   
                    <CSSTransition
                    key={index}
                    in={this.state.show}
                    timeout={1000}
                    classNames = 'fade'
                    unmountOnExit
                    onEntered={(el)=>{el.style.color='#666'}}
                    >
                      <div>item</div>
                    </CSSTransition>
                   )
                })
              }
            </TransitionGroup>
            <button  onClick={this.handleAddItem}>toggle</button> 
         </Fragment> 
      )
    }

    handleAddItem(){
        this.setState((prveState)=>{
            return {
                list:[...prveState.list, 'item']
            }
        })
    }
}