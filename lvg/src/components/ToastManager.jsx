import { useEffect, useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";
import { registerToastHandler } from "../utils/toastService";

const ToastManager = () => {
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    registerToastHandler((message, options = {}) => {
      setToasts(prevToasts => [
        ...prevToasts,
        {
          id: Date.now() + Math.random(),
          message,
          type: options.type,
          position: options.position || "bottom-start",
          show: true
        }
      ]);
    });
  }, []);

  const handleToastClose = (id) => {
    setToasts(prevToasts =>
      prevToasts.map(t =>
        t.id === id ? { ...t, show: false } : t
      )
    );

    setTimeout(() => {
      setToasts(prevToasts =>
        prevToasts.filter(t => t.id !== id)
      );
    }, 350);
  };

  const positions = Array.from(
    new Set(
      toasts.map(t => t.position || "bottom-start")
    )
  );

  const getToastClass = (type) => {
    return `custom-toast ${type || "info"}`;
  };

  if (!toasts || toasts.length === 0) return null;

  return (
    <>
      {positions.map(position => (
        <ToastContainer
          key={position}
          className="p-3"
          position={position}
          style={{ position: "fixed", zIndex: 1080 }}
        >
          {toasts
            .filter(t => (t.position || "bottom-start") === position)
            .map(toast => (
              <Toast
                key={toast.id}
                className={getToastClass(toast.type)}
                show={toast.show}
                animation
                onClose={() => handleToastClose(toast.id)}
                delay={3000}
                autohide
              >
                <Toast.Body className="custom-toast-body">
                  <span>{toast.message}</span>
                  <button
                    type="button"
                    className="btn-close shrink-0 ms-2"
                    aria-label="Close"
                    onClick={() => handleToastClose(toast.id)}
                  />
                </Toast.Body>
              </Toast>
            ))}
        </ToastContainer>
      ))}
    </>
  );
};

export default ToastManager;
