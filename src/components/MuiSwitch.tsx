import {Box, FormControlLabel, Switch} from '@mui/material'
import React, {useState} from 'react'

const MuiSwitch = () => {
    const [checked, setChecked] = useState(false)
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }
  return (
    <Box>
        <FormControlLabel label='Dark Mode' control={<Switch size='small' color='warning' checked={checked} onChange={handleChange} />} />
    </Box>
  )
}

export default MuiSwitch