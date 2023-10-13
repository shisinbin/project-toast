import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';
import useKeydown from '../../hooks/useKeydown';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastMessages, dismissAllToasts } =
    React.useContext(ToastContext);

  useKeydown('Escape', dismissAllToasts);

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
