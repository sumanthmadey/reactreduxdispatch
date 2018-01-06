
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux'
import store from "../store/index"
import * as actions from "../actions/app"

function abc(){

   
       return "abc";
}

export const Calculations={

    callfunc:function(){
        alert("dsa");
        store.dispatch(actions.addTodo('Read about the middleware'))
    }
};



