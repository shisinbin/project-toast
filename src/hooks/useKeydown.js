import React from 'react';

function useKeydown(key, callback) {
  React.useEffect(() => {
    // console.log('useEffect in useKeydown fired!');

    function handleKeydown(event) {
      if (event.code === key) {
        callback();
      }
    }

    // Set up a subscription
    window.addEventListener('keydown', handleKeydown);

    // On unmount of component, remove subscription
    return () => {
      // console.log('useKeydown listener out, folks!');
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [key, callback]);
}

export default useKeydown;
