import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export default function SideBarProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const data = useContext(SidebarContext);
  return data;
}
