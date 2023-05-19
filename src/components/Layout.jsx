import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import AppBar from './AppBar/AppBar';
import { Container } from '@mantine/core';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={null}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
};
