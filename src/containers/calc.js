
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux'
import store from "../store/index"
import * as actions from "../actions/app"

function abc(){

 
    store.dispatch(actions.addTodo('Read the docs'))
    store.dispatch(actions.addTodo('Read about the middleware'))
       return "abc";
}

const Calculations=abc();



