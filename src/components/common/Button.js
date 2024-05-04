import LoadingButton from '@mui/lab/LoadingButton';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';

import { purple } from '@mui/material/colors';

  
export default function SubmittButton({ label, loading, ...props }) {
    return (
        <LoadingButton
            loading={loading}
            variant="contained"
            type="submit"
            disableElevation
            sx={{mt:2, px: 3, backgroundColor: '#050816', '&:hover': { backgroundColor: '#639' } }}
            {...props}
        >
            {label}
        </LoadingButton>
    )
}


export function OutlinedButton({label,...props}){
    return(
        <Button
        variant="outlined"
        disableElevation
        sx={{ color: '#c24a00', borderColor:'#c24a00', '&:hover': { backgroundColor: '#c24a00', color:'#f9f9f9', borderColor:'#c24a00' } }}
        {...props}
        >
{label}
        </Button>
    )
}