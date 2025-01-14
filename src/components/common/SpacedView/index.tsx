import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import responsive from '@utils/responsive';

const GappedView = styled(View)<{ gap: number; direction?: 'row' | 'column' }>`
  gap: ${(props) => responsive(props.gap, 'height')}px;
  flex-direction: ${(props) => props.direction || 'column'};
`;

interface SpacedViewProps {
  gap: number;
  direction?: 'row' | 'column';
  children: React.ReactNode;
}

const SpacedView: React.FC<SpacedViewProps> = ({
  gap,
  children,
  direction,
}) => {
  return (
    <GappedView gap={gap} direction={direction}>
      {children}
    </GappedView>
  );
};

export default SpacedView;
