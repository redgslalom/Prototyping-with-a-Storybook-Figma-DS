import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Visual style of the button
   */
  variant?: 'Default' | 'Secondary' | 'Ghost' | 'Danger';
  /**
   * Size of the button
   */
  size?: 'Small' | 'Medium' | 'Large' | 'XL';
  /**
   * Icon to display on the left
   */
  iconL?: React.ReactNode;
  /**
   * Icon to display on the right
   */
  iconR?: React.ReactNode;
  /**
   * Button content
   */
  label?: string;
  /**
   * Manually set focused state for styling
   */
  isFocused?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'Default',
  size = 'Small',
  iconL,
  iconR,
  label = 'Button',
  isFocused = false,
  className,
  disabled,
  children,
  ...props
}) => {
  const rootClassName = classNames(
    styles.button,
    styles[variant.toLowerCase()],
    styles[size.toLowerCase()],
    {
      [styles.focused]: isFocused,
    },
    className
  );

  return (
    <button
      type="button"
      className={rootClassName}
      disabled={disabled}
      {...props}
    >
      {iconL && (
        <div className={styles.iconWrapper} data-testid="icon-left">
          {iconL}
        </div>
      )}
      
      <span>{label || children}</span>

      {iconR && (
        <div className={styles.iconWrapper} data-testid="icon-right">
          {iconR}
        </div>
      )}
    </button>
  );
};

export default Button;