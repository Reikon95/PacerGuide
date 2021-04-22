import React from "react"

export default function CalculateWattage({ average, minutes }) {
  const seconds = minutes / 60
  const totalOutput = (average * seconds) / 1000

  return (
    <>
      <div>
        At a pace of {average} watts per second sustained for {minutes} minutes,
        your total output would be {totalOutput}kJ!
      </div>
    </>
  )
}
