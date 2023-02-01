import React from 'react'
import { Backdrop, CircularProgress } from '@mui/material'
import type { Theme } from '@mui/material'

export default function Loading(): JSX.Element {
  return (
    <Backdrop sx={{ color: '#fff', zIndex: (theme: Theme) => theme.zIndex.drawer + 1 }} open>
      <CircularProgress color='primary' />
    </Backdrop>
  )
}
