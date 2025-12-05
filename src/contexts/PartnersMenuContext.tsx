import { createContext, useContext, useState, ReactNode } from 'react';

interface PartnersMenuContextType {
  isPartnersMenuOpen: boolean;
  openPartnersMenu: () => void;
  closePartnersMenu: () => void;
  togglePartnersMenu: () => void;
}

// 创建上下文（默认值为空，需用 Provider 包裹）
const PartnersMenuContext = createContext<PartnersMenuContextType | undefined>(undefined);

// 自定义 Provider 组件
export const PartnersMenuProvider = ({ children }: { children: ReactNode }) => {
  const [isPartnersMenuOpen, setIsPartnersMenuOpen] = useState(false);

  const openPartnersMenu = () => setIsPartnersMenuOpen(true);
  const closePartnersMenu = () => setIsPartnersMenuOpen(false);
  const togglePartnersMenu = () => setIsPartnersMenuOpen(prev => !prev);

  return (
    <PartnersMenuContext.Provider
      value={{
        isPartnersMenuOpen,
        openPartnersMenu,
        closePartnersMenu,
        togglePartnersMenu,
      }}
    >
      {children}
    </PartnersMenuContext.Provider>
  );
};

// 自定义 Hook 简化上下文使用
export const usePartnersMenu = () => {
  const context = useContext(PartnersMenuContext);
  if (!context) {
    throw new Error('usePartnersMenu must be used within a PartnersMenuProvider');
  }
  return context;
};