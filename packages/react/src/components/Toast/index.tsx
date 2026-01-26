import * as RadixToast from "@radix-ui/react-toast";
import { X } from "phosphor-react";
import { createContext, ReactNode, useContext, useState } from "react";

import {
  ToastClose,
  ToastDescription,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "./styles";

// Internal state type
interface ToastData {
  id: string;
  title: string;
  description?: string;
}

// Props for the showToast function, exposed to the user
export type ToastProps = Omit<ToastData, "id">;

interface ToastContextData {
  showToast: (props: ToastProps) => void;
}

interface ToastProviderProps {
  children: ReactNode;
}

const ToastContext = createContext({} as ToastContextData);

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  function showToast({ title, description }: ToastProps) {
    const newToast = {
      id: new Date().getTime().toString(),
      title,
      description,
    };

    setToasts((prev) => [...prev, newToast]);
  }

  function handleOpenChange(open: boolean, toastId: string) {
    if (!open) {
      setToasts((prev) => prev.filter((toast) => toast.id !== toastId));
    }
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      <RadixToast.Provider swipeDirection="right">
        {children}

        {toasts.map((toast) => (
          <ToastRoot
            key={toast.id}
            onOpenChange={(open) => handleOpenChange(open, toast.id)}
          >
            <div>
              <ToastTitle>{toast.title}</ToastTitle>
              {toast.description && (
                <ToastDescription>{toast.description}</ToastDescription>
              )}
            </div>
            <ToastClose asChild>
              <X weight="light" size={20} />
            </ToastClose>
          </ToastRoot>
        ))}

        <ToastViewport />
      </RadixToast.Provider>
    </ToastContext.Provider>
  );
}

export const useToast = () => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  return context;
};
