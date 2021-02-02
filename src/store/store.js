import React from "react";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from '../reducers';

export const store = createStore(reducer, compose(applyMiddleware(thunk)));
