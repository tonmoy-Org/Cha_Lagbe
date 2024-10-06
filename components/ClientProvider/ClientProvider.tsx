// app/components/ClientProvider.tsx
'use client'; // This line indicates that this is a Client Component

import React from 'react';
import { Provider } from 'react-redux';
import DrawerAppBar from '../AppBar/AppBar';
import { store } from '@/slices/store';
import Footer from '../Footer/Footer';


const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <DrawerAppBar />
      {children}
      <Footer></Footer>
    </Provider>
  );
};

export default ClientProvider;
