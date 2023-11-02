import React ,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App';
import { MyContextProvider } from "../src/context/ModalContext";

import './i18n';

import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback= {<div> Loading ...</div>}>
      <MyContextProvider>
        <App />
      </MyContextProvider>
    </Suspense>
  </React.StrictMode>
);

