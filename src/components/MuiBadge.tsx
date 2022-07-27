import {Stack, Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={5} color='primary'>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={1000} max={999} color='primary'>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={0} showZero color='secondary'>
            <MailIcon/>
        </Badge>
        <Badge variant='dot' color='primary'>
            <MailIcon/>
        </Badge>
    </Stack>
  )
}
