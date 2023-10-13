import React from 'react';

import Toast from '../Toast';
import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toastMessages } = React.useContext(ToastContext);

  if (toastMessages.length === 0) {
    return null;
  }

  return (
    <ol className={styles.wrapper}>
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
