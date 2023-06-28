import SimpleBar from 'simplebar-react';
import { styled } from '@mui/material/styles';

// export const Scrollbar = styled(SimpleBar)`
// .SimpleBarPlaceholder {
//     display: none !important;
//   }`; \



export const Scrollbar = styled(SimpleBar)(({ theme }) => ({
    [theme.breakpoints.up('xs')]: {
      '.simplebar-placeholder': {
        display: 'none!important',
      },
    },
  }));
