import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { Navbar, Footer, Sidebar } from './components';
import { AddNewExpense, Calendar, DashBoard, Login, Profile, Register, Setting, Income, ColorPicker, Planner } from './pages';
import { registerLicense } from '@syncfusion/ej2-base';
import { useUIStore } from './context/uiStore'
import './App.css';
registerLicense(import.meta.env.VITE_SYNCFUSION_LICENSE_KEY);


const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useUIStore();
  return (
    <div className={currentMode === 'Dark' ? 'dark !overflow-auto' : '!overflow-auto'}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
            <TooltipComponent
              content="Settings"
              position="Top"
            >
              <button
                type="button"
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navbar />
            </div>
            <div className="!overflow-auto">
              <Routes>
                <Route path="/" element={<DashBoard />} />
                <Route path="/dashboard" element={<DashBoard />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/income" element={<Income />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/register" element={<Register />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/color-picker" element={<ColorPicker />} />
                <Route path="/planner" element={<Planner />} />
              </Routes>

            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};


export default App;
