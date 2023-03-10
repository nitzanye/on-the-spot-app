'use client'

import React, { ReactNode }  from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

interface Props {
  children?: ReactNode
}

const QueryWarapper = ({ children }: Props) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );


export default QueryWarapper;