import { useState } from 'react';
import Logo from '../logo';
import './loading.css';
import { createPortal } from 'react-dom';

export default function Loading() {
  setTimeout(() => setHide(true), 1400);
  const [hide, setHide] = useState(false);
  return createPortal(
    <div className={hide ? 'loadingContHide' : 'loadingCont'}>
      <Logo />
    </div>,
    document.getElementById('loading')
  );
}
