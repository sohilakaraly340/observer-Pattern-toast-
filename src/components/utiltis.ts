import { ToastProps } from "./Toast";
import { Observable } from "./observable";

type Event = {
  type: "ADD_TOAST" | "REMOVE_ALL";
  toast?: Pick<ToastProps, "id" | "message" | "variant">;
};

export const obs1 = new Observable<Event>();

export function toast(message: string) {
  obs1.notify({ type: "ADD_TOAST", toast: { id: Math.random(), message } });
}

toast.success = (message: string) => {
  obs1.notify({
    type: "ADD_TOAST",
    toast: { id: Math.random(), message, variant: "success" },
  });
};

toast.error = (message: string) => {
  obs1.notify({
    type: "ADD_TOAST",
    toast: { id: Math.random(), message, variant: "error" },
  });
};
toast.dismissAll = () => {
  obs1.notify({ type: "REMOVE_ALL" });
};
