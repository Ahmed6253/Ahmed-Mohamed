import { useState } from 'react';
import Logo from '../logo';
import './loading.css';
import { createPortal } from 'react-dom';

export default function Loading() {
  const [hide, setHide] = useState(false);
  setTimeout(() => setHide(true), 1300);
  return createPortal(
    <div className={hide ? 'loadingContHide' : 'loadingCont'}>
      <Logo />
    </div>,
    document.getElementById('loading')
  );
}
