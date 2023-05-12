import './styles/App.scss';
import React from 'react';
import Form from './components/form';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

function App() {

  return (
    <div className="App">
      <Form />
      <NotificationContainer />
    </div>
  );
}

export default App;
