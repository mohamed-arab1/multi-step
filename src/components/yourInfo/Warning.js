import React from 'react'
import styled from 'styled-components'

const WarningText = styled.span`
  font-size: 12px;
`

export const Warning = () => {
  return (
    <WarningText>This Field is required</WarningText>
  )
}
