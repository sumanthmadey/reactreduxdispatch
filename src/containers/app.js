import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadApp,addTodo } from 'actions/app';
import styles from './app.css';
import {Calculations} from "./calc";
type Props = {
  dispatch: () => void,
  loaded: boolean
}

export class AppContainer extends Component {
  constructor(props){
    super(props);
    this.triggerHandler=this.triggerHandler.bind(this);
  }
  componentDidMount() {
    this.props.dispatch(loadApp());
    Calculations.callfunc()}

  props: Props;
  triggerHandler()
  
  {
alert(23);
this.props.dispatch(addTodo("dasd"))
  }
  render() {
   let cba= this.props.message;
    debugger;
    if (!this.props.loaded) {
      return null;
    }

    return (
      <div className={styles.container} >
      This is my my first react component
    <h1> {cba}</h1>
   
       <input type="button" onClick={this.triggerHandler}  value="SUBMIT" /> 
      </div>
    );
  }
}

function mapStateToProperties(state) {
  return {
    loaded: state.app.loaded,
    message:state.app.message
  };
}

export default connect(mapStateToProperties)(AppContainer);
