import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    render() {
        const { item, test } = this.props;
        return(
          <li  onClick={this.handleClick}>
             {item} -- {test}
          </li>
        )
    }

    handleClick(){
        console.log(this.props.idx)
        this.props.handleItemClick(this.props.idx)
    }

    /**
     * 一个组件从父组件中接受参数
     * 如果这个组件第一次存在父组件中将不会执行
     * 如果这个组件已经存在父组件中，才会执行
     */

    componentWillReceiveProps(){
        console.log('componentWillReceiveProps')
     }


}

TodoItem.propTypes = {
    test: PropTypes.string.isRequired,
    item: PropTypes.string,
    idx: PropTypes.number
}

TodoItem.defaultProps = {
    test: 'hello world'
}



export  default TodoItem