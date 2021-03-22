import { tuple } from 'utils/type';
import React from 'react';
import * as S from './styles';

export type SizeType = 'small' | 'medium' | 'large' | undefined;

const ButtonTypes = tuple('default', 'primary');
export type ButtonType = typeof ButtonTypes[number];

export interface ButtonProps {
  appearance?: ButtonType;
  size?: SizeType;
  outline?: boolean;
  block?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e?: React.MouseEvent) => void
}

const Button: React.FC<ButtonProps> = ({
  appearance,
  size,
  outline,
  block,
  className,
  children,
  onClick,
  ...props
}) => {
  return (
    <S.Button
      appearance={appearance}
      size={size}
      outline={outline}
      block={outline}
      className={className}
      onClick={onClick}
      {...props}
    >
      {children}
    </S.Button>
  );
};



export default Button;
