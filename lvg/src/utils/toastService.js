let toastHandler = null;

export function registerToastHandler(handler) {
  toastHandler = handler;
}

export function toast(message, options = {}) {
  if (typeof toastHandler === "function") {
    toastHandler(message, options);
  }
}
