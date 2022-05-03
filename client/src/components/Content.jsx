import React from 'react';

import { SubBanner } from './Ui';
import { WritePost } from './Ui';
import { Feed } from './Ui';
import { AuthModal } from './Ui';

export default function Content() {
  return (
    <>
      <AuthModal />
      <SubBanner />
      <WritePost />
      <Feed />
      <AuthModal />
    </>
  );
}

