import React from 'react';
import { SGrid } from './Base/SLayout';
import { SHeadingSecondary, SText } from './Base/STypography';

export default function SectionNav({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <SGrid
        css={{ gap: '10px', justifyContent: 'center', marginBottom: '20px' }}
      >
        <SHeadingSecondary css={{ textAlign: 'center' }}>
          {title}
        </SHeadingSecondary>
        <SText css={{ textAlign: 'center', maxWidth: '670px' }}>
          {description}
        </SText>
      </SGrid>
    </>
  );
}
