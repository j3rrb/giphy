import React from 'react'
import { TextField } from '@mui/material'
import type { TextFieldProps } from '@mui/material'

interface Props {
  debounceTime?: number
  onChange: (text: string | null) => unknown
}

let timeout: NodeJS.Timeout

export default function SearchBar({
  onChange,
  debounceTime = 300,
  ...props
}: TextFieldProps & Props): JSX.Element {
  const handleOnChange:
    | React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
    | undefined = ({ target: { value } }) => {
    clearTimeout(timeout)

    timeout = setTimeout(() => {
      onChange(value !== '' ? value : null)
    }, debounceTime)
  }

  return <TextField {...props} onChange={handleOnChange} />
}
