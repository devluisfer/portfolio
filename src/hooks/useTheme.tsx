'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export function useTheme() {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return {
    theme: context.theme,
    setTheme: context.setTheme,
    isLight: context.theme === 'light',
    isDark: context.theme === 'dark',
    toggleTheme: () => {
      context.setTheme(context.theme === 'light' ? 'dark' : 'light');
    },
  };
}