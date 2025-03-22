import React from "react";
import DashBoardPage from "./components/dashboard/DashBoardPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import Expense from "./components/dashboard/Expense";
import Income from "./components/dashboard/Income";
import Calender from "./components/dashboard/Calender";
import Setting from "./components/dashboard/Setting";
import Profile from "./components/dashboard/Profile";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddNewExpense from "./components/dashboard/AddNewExpense";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [],
    },
    {
      path: "/dashboard",
      element: <DashBoardPage />,
    },
    {
      path: "/expense",
      element: <Expense />,
    },
    {
      path: "/income",
      element: <Income />,
    },
    {
      path: "/calender ",
      element: <Calender />,
    },
    {
      path: "/setting",
      element: <Setting />,
    },
    {
      path: "/profile ",
      element: <Profile />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/addNewExpenses",
      element: <AddNewExpense />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
