import classNames from "classnames"
import { ButtonProps } from "../type/types"

const className = "font-bold"

const variants: any = {
  primary:
    "inline-flex items-center m-1 border border-transparent font-medium text-zinc-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  secondary:
    "inline-flex items-center m-1 shadow rounded-lg font-lg text-gray-800 bg-sky-300 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
  btnValidation:
    "w-full flex items-center justify-center mt-5 border border-transparent rounded-lg shadow-lg  font-medium text-zinc-200 bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-700",
}

const sizes: any = {
  sm: "py-1 px-1.5 text-xs",
  md: "py-1.5 px-3 text-md",
  lg: "py-2.5 px-5 text-lg",
}

const Button = (props: ButtonProps) => {
  const { variant, size, ...otherProps }: any = props

  return (
    <button
      {...otherProps}
      className={classNames(className, variants[variant], sizes[size])}
    />
  )
}

export default Button
