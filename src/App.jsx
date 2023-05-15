import './styles/App.scss';
import React from 'react';
import Form from './components/form';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications'; //TODO https://www.npmjs.com/package/react-toastify?activeTab=readme

function App() {

  return (
    <div className="App">
      <h1 className='main-text'>//TODO</h1>
      <Form />
      <NotificationContainer />
    </div>
  );
}

export default App;
