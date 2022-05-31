import React, { FC } from 'react'
import { ClipLoader } from 'react-spinners'

interface Props {
  loading?: boolean
  color?: string
}

const ButtonSpinner: FC<Props> = (props) => {
  const { loading, children, color } = props

  if (loading) {
    return <ClipLoader color={color || '#fff'} size={30} />
  }
  return <>{children}</>
}
export default ButtonSpinner
