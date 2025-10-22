export const Input = ({ className, ...rest }) => (
  <input
    className={`rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
    {...rest}
  />
)