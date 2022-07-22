import * as React from 'react';
import styled from 'styled-components';

interface TitleProps {
  color?: string;
  level?: number;
  children?: React.ReactNode;
  as?: React.ElementType;
}

const Title = ({ color, level, children, ...restProps }: TitleProps) => {
  return (
    <Wrapper as={level ? `h${level}` : 'h1'} color={color} {...restProps}>
      <>{children}</>
    </Wrapper>
  );
};

const Wrapper = styled.span<{
  as?: string;
  color?: string;
}>`
  color: ${({ color }) => color || 'inherit'};
`;

export default Title;
