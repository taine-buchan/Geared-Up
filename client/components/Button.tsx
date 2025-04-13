import { HtmlHTMLAttributes } from 'react'

type ButtonProps = HtmlHTMLAttributes<HTMLButtonElement> & {
  disabled?: boolean
}

function Button({ children, disabled, ...props }: ButtonProps) {
  return (
    <button disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
