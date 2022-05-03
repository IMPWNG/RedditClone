import React from 'react';

import { SubBanner } from './Ui';
import { WritePost } from './Ui';
import { Feed } from './Ui';

export default function Content() {
  return (
    <>
      <SubBanner />
      <WritePost />
      <Feed />
    </>
  );
}

