import { button } from './button.css.ts';

export const PrimaryButton = ({ children, ...props }) => {
  return <button className={`${button}`} {...props}>{children}</button>
}