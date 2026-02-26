type screenProps = {
  previousValue: string
  currentValue: string
}

export function Screen ({previousValue, currentValue}: screenProps) {
  return (
    <div className="screen">
      <div className="previous">{previousValue}</div>
      <div className="current">{currentValue}</div>
    </div>
  )
}