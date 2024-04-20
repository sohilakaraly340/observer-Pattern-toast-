import { useEffect, useState } from "react";
import { Toast } from "./Toast";
import { ToastProps } from "./Toast";
import { obs1 } from "./utiltis";

export function ToastContainer() {
  const [toasts, setToasts] = useState<
    Pick<ToastProps, "id" | "message" | "variant">[]
  >([]);

  useEffect(() => {
    return obs1.subscribe((event) => {
      if (event.type === "ADD_TOAST") {
        //@ts-ignore
        setToasts((prev) => [...prev, event.toast]);
      }
      if (event.type === "REMOVE_ALL") {
        setToasts([]);
      }
    });
  }, []);

  const handleClose = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="absolute bottom-0 end-0 p-4 space-y-2 w-full h-full justify-end pointer-events-none flex flex-col max-w-xs ">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          variant={toast.variant}
          onClose={() => {
            handleClose(toast.id);
          }}
        />
      ))}
    </div>
  );
}
