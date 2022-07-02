import { useState, useMemo } from "react";
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { Header } from "~/components/Header/header";
import styles from "~/styles/index.css";
import { TodoListsProvider } from "~/contexts/TodoListsContext";

export function links() {
  return [{ 
    rel: "stylesheet", href: styles,
  }];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Todo list",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <TodoListsProvider>
        <body style={{ fontFamily: "system-ui, sans-serif" }}>
          <Header />
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </TodoListsProvider>
    </html>
  );
}
