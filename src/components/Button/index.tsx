type buttonProps = {
  children: React.ReactNode
  onClick?: () => void
  className: string
}

export function Button ({children, onClick, className}: buttonProps) {
  return (
    <button className= {className} onClick={onClick}> {children}</button>
  )
}