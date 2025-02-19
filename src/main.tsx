import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { SidebarProvider } from "@/components/ui/sidebar";
import AppSidebar from "@/components/organisms/sidebar";
import { BrowserRouter } from "react-router";
import Topbar from "@/components/molecules/topbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SidebarProvider>
          <AppSidebar />
          <div className="w-full">
            <Topbar />
            <main className="p-5">
              <App />
            </main>
            <Toaster />
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
