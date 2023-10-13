import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastMessages, dismissAllToasts } =
    React.useContext(ToastContext);

  React.useEffect(() => {
    // console.log('useEffect in ToastShelf fired!');

    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        dismissAllToasts();
      }
    }

    // Set up a subscription
    window.addEventListener('keydown', handleKeyDown);

    // On exit of shelf, remove subscription
    return () => {
      // console.log('ToastShelf out, folks!');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [dismissAllToasts]);

  if (toastMessages.length === 0) {
    return null;
  }

  return (
    <ol
      className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {toastMessages.map(({ message, variant, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast id={id} variant={variant}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default React.memo(ToastShelf);
