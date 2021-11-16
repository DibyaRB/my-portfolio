import React, { useRef } from 'react';
import { Scrollbar } from 'smooth-scrollbar-react';

export default function SmoothScrollbar({ children }) {
  const ref = useRef(null);

  return (
    <Scrollbar ref={ref} damping="0.09">
      {children}
    </Scrollbar>
  );
}
