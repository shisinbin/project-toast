import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toastMessages, handleDeleteToastMessage }) {
  return (
    <ol className={styles.wrapper}>
      {toastMessages.map(({ message, variant, id }) => (
        <li className={styles.toastWrapper} key={id}>
          <Toast
            variant={variant}
            id={id}
            handleDeleteToastMessage={handleDeleteToastMessage}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );

  // return (
  //   <ol className={styles.wrapper}>
  //     <li className={styles.toastWrapper}>
  //       <Toast variant='notice'>Example notice toast</Toast>
  //     </li>
  //     <li className={styles.toastWrapper}>
  //       <Toast variant='error'>Example error toast</Toast>
  //     </li>
  //   </ol>
  // );
}

export default ToastShelf;
