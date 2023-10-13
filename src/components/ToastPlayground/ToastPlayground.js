import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';
import Toast from '../Toast/Toast';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [variant, setVariant] = React.useState('notice');

  const [toastMessages, setToastMessages] = React.useState([]);

  const handleAddToastMessage = () => {
    const newToastMessage = {
      message: message,
      variant: variant,
      id: crypto.randomUUID(),
    };

    setToastMessages((prevToastMessages) => {
      return [...prevToastMessages, newToastMessage];
    });
  };

  const handleDeleteToastMessage = (id) => {
    setToastMessages((prevToastMessages) => {
      const filteredToastMessages = prevToastMessages.filter(
        (toastMessage) => toastMessage.id !== id
      );
      return filteredToastMessages;
    });
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt='Cute toast mascot' src='/toast.png' />
        <h1>Toast Playground</h1>
      </header>
      {/* {showToast && (
        <Toast variant={variant} dismissToast={dismissToast}>
          {message}
        </Toast>
      )} */}

      {toastMessages.length > 0 && (
        <ToastShelf
          toastMessages={toastMessages}
          handleDeleteToastMessage={handleDeleteToastMessage}
        />
      )}

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor='message'
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id='message'
              className={styles.messageInput}
              value={message}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option) => {
              const id = `variant-${option}`;

              return (
                <label htmlFor={id} key={id}>
                  <input
                    id={id}
                    type='radio'
                    name='variant'
                    value={option}
                    checked={variant === option}
                    onChange={(event) => {
                      setVariant(event.target.value);
                    }}
                  />
                  {option}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={handleAddToastMessage}>
              Pop Toast!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
