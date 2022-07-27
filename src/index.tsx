import React from 'react';
import './index.css';
import App from '../src/n1-main/m1-ui/App';
import {Provider} from "react-redux";

import {createRoot} from 'react-dom/client';
import store from "./n1-main/m2-bll/redux/store";

const container = document.getElementById('root');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <App/>
  </Provider>
)

