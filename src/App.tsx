import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { TopBar } from './layouts/TopBar';
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { HomePage } from './pages/HomePage';
import { ResumePage } from './pages/ResumePage';
import { ScrollToTop } from './components/common/ScrollToTop';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { LoadingScreen } from './components/common/LoadingScreen';
import { Toast } from './components/common/Toast';
import { ToastNotification } from './types';

function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [notifications, setNotifications] = useState<ToastNotification[]>([]);

  useEffect(() => {
    // Initial loading screen animation timer
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const showToast = (type: 'success' | 'error' | 'info', message: string) => {
    const newToast: ToastNotification = {
      id: Date.now().toString(),
      type,
      message,
    };
    setNotifications((prev) => [...prev, newToast]);

    setTimeout(() => {
      setNotifications((prev) => prev.filter((t) => t.id !== newToast.id));
    }, 5000);
  };

  const dismissToast = (id: string) => {
    setNotifications((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col font-sans transition-colors duration-300">
      <LoadingScreen isLoading={isLoading} />
      <Toast notifications={notifications} onDismiss={dismissToast} />

      <TopBar />
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onShowToast={showToast} />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="*" element={<HomePage onShowToast={showToast} />} />
        </Routes>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}
