'use client'

import React, { ReactNode }  from "react";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient()

interface Props {
  children?: ReactNode
}

const QueryWarapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      {children}
    </QueryClientProvider>
  );


export default QueryWarapper;