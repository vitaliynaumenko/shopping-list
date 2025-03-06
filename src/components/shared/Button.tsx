import { ButtonHTMLAttributes, ReactNode } from 'react';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  classes?: string;
  children: ReactNode;
  type?: 'button' | 'submit';
}
const Button: React.FC<IButton> = ({
  classes,
  children,
  type = 'button',
  ...props
}) => {
  return (
    <button {...props} className={classes ?? ''} type={type}>
      {children}
    </button>
  );
};
export default Button;
