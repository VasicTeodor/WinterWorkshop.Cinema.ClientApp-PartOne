import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-notifications/lib/notifications.css';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { NotificationContainer } from 'react-notifications';
// components
import Header from './components/Header';

function App() {
  return (
    <React.Fragment>
      <Header/>
      <div className="set-overflow-y">
        <h1>WELCOME TO LEVI9 WINTER WORKSHOP (REACTJS PART)</h1>
      <NotificationContainer />
      </div>
    </React.Fragment>
  );
}

export default App;
