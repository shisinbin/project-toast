import React from 'react';

// Create a context to manage toast messages
export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  // Maintain a state for storing toast messages
  const [toastMessages, setToastMessages] = React.useState([]);

  // Create a new toast message and add it to the state
  const createToastMessage = (message, variant) => {
    // Create a new toast message object
    const newToastMessage = {
      message: message,
      variant: variant,
      id: crypto.randomUUID(),
    };

    // Update the state to include the new message
    setToastMessages((prevToastMessages) => {
      return [...prevToastMessages, newToastMessage];
    });
  };

  // Dismiss a toast message based on its unique ID
  const dismissToastMessage = (id) => {
    // Filter out the message with the provided ID
    setToastMessages((prevToastMessages) => {
      const filteredToastMessages = prevToastMessages.filter(
        (toastMessage) => toastMessage.id !== id
      );
      return filteredToastMessages;
    });
  };

  // Dismiss all toast messages
  // const dismissAllToasts = () => {
  //   setToastMessages([]);
  // };

  const dismissAllToasts = React.useCallback(() => {
    setToastMessages([]);
  }, []);

  return (
    // Provide the toast context and its functions to child components
    <ToastContext.Provider
      value={{
        toastMessages,
        createToastMessage,
        dismissToastMessage,
        dismissAllToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
