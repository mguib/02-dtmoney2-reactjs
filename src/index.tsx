import React from 'react';
import ReactDOM from 'react-dom/client';
import {createServer, Model} from 'miragejs'
import {App} from './App';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'Desenvolvimento',
          amount: 5000,
          createdAt: new Date('2022-02-10 09:30:00')
        },
        {
          id: 2,
          title: 'Aluguel do ap',
          type: 'withdraw',
          category: 'Aluguel',
          amount: 700,
          createdAt: new Date('2022-01-10 09:30:00')
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', (schema) =>{
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) =>{
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

