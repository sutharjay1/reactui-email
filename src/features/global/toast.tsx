import {
  Bell,
  CheckWaves,
  Copy,
  DangerTriangle,
  DangerWaves,
  InfoWaves,
  SpinnerOne,
} from "@mynaui/icons-react";
import { toast } from "sonner";
import { cn } from "../../lib/utils";

type ToastOptions = {
  description?: string;
  duration?: number;
  position?:
    | "bottom-right"
    | "bottom-left"
    | "top-right"
    | "top-left"
    | "top-center"
    | "bottom-center";
};

const DEFAULT_DURATION = 3000;
const DEFAULT_POSITION = "top-center";

export const successToast = (message: string, options?: ToastOptions) => {
  toast.success(message, {
    description: options?.description,
    duration: options?.duration || DEFAULT_DURATION,
    position: DEFAULT_POSITION,
    icon: <CheckWaves className="h-5 w-5 font-bold" size={16} strokeWidth={1.08} />,
    style: {
      backgroundColor: "#004014",
      color: "#56eda1",
      border: "none",
    },
    className: cn("rounded-xl shadow-lg flex items-center gap-2 py-2 text-sm font-medium"),
  });
};

export const loadingToast = (message: string, options?: ToastOptions) => {
  const toastId = toast.loading(message, {
    description: options?.description,
    duration: options?.duration || DEFAULT_DURATION,
    position: DEFAULT_POSITION,
    icon: (
      <SpinnerOne
        className="h-5 w-5 font-semibold text-[#0e0d0c]"
        size={16}
        strokeWidth={1.08}
        color="#0e0d0c"
      />
    ),
    style: {
      backgroundColor: "#f7f7f7",
      color: "#0e0d0c",
      border: "none",
    },
    className: "rounded-xl py-2 shadow-lg flex items-center gap-2 text-sm font-medium",
  });

  return {
    id: toastId,
    dismissToast: function () {
      toast.dismiss(this.id);
    },
  };
};

export const errorToast = (message: string, options?: ToastOptions) => {
  toast.error(message, {
    description: options?.description,
    duration: options?.duration || DEFAULT_DURATION,
    position: DEFAULT_POSITION,
    icon: <DangerWaves className="h-5 w-5 font-bold" size={16} strokeWidth={1.08} />,
    style: {
      backgroundColor: "#500000",
      color: "#ED5555",
      border: "none",
    },
    className: "rounded-xl py-2 shadow-lg flex items-center gap-2 text-sm font-medium",
  });
};

export const infoToast = (message: string, options?: ToastOptions) => {
  toast(message, {
    description: options?.description,
    duration: options?.duration || DEFAULT_DURATION,
    position: DEFAULT_POSITION,
    icon: <InfoWaves className="h-5 w-5 font-semibold" size={16} strokeWidth={1.08} />,
    style: {
      backgroundColor: "#4338ca",
      color: "#a5b4fc",
      border: "none",
    },
    className: "rounded-xl py-2 shadow-lg flex items-center gap-2 text-sm font-medium",
  });
};

export const warningToast = (message: string, options?: ToastOptions) => {
  toast(message, {
    description: options?.description,
    duration: options?.duration || DEFAULT_DURATION,
    position: DEFAULT_POSITION,
    icon: <DangerTriangle className="h-5 w-5 font-semibold" size={16} strokeWidth={1.08} />,
    style: {
      backgroundColor: "rgb(245, 158, 11)",
      color: "white",
      border: "none",
    },
    className: "rounded-xl py-2 shadow-lg flex items-center gap-2 text-sm font-medium",
  });
};

export const copyToast = (message: string = "Copied to clipboard", options?: ToastOptions) => {
  toast(message, {
    description: options?.description,
    duration: options?.duration || DEFAULT_DURATION,
    position: DEFAULT_POSITION,
    icon: <Copy className="h-5 w-5 font-semibold" size={16} strokeWidth={1.08} />,
    style: {
      backgroundColor: "rgb(17, 24, 39)",
      color: "white",
      border: "none",
    },
    className: "rounded-xl py-2 shadow-lg flex items-center gap-2 text-sm font-medium",
  });
};

export const notificationToast = (message: string, options?: ToastOptions) => {
  toast(message, {
    description: options?.description,
    duration: options?.duration || DEFAULT_DURATION,
    position: DEFAULT_POSITION,
    icon: <Bell className="h-5 w-5 font-semibold" size={16} strokeWidth={1.08} />,
    style: {
      backgroundColor: "rgb(88, 28, 135)",
      color: "white",
      border: "none",
    },
    className: "rounded-xl py-2 shadow-lg flex items-center gap-2 text-sm font-medium",
  });
};
