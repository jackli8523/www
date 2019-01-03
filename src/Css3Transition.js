import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';

class Transition extends Component{
   constructor(props){
     super(props)
     this.state={
         show:true
     }
     this.handleClick = this.handleClick.bind(this);
   }

    render(){
        return (
            <Fragment>
               {/* <div  className={this.state.show ? 'show' : 'hide'}>
                 Hello World
               </div> */}
               <CSSTransition
                  in={this.state.show}
                  timeout={1000}
                  classNames = 'fade'
                  unmountOnExit
                  onEntered={(el)=>{el.style.color='#666'}}
               >
                   <div>Hello world</div>
               </CSSTransition>
               <button  onClick={this.handleClick}>toggle</button> 
            </Fragment>
        )
    }

    handleClick(){
        console.log(123)
        this.setState({
            show: this.state.show?false:true
        })
    }
}

export default Transition;