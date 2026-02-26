type screenProps = {
  previousValue: string
  currentValue: string
}

export function Screen ({previousValue, currentValue}: screenProps) {
  return (
    <div>
      <div>{previousValue}</div>
      <div>{currentValue}</div>
    </div>
  )
}