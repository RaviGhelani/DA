import SearchIcon from '@mui/icons-material/Search';
import { Box, Card, InputAdornment, OutlinedInput, SvgIcon } from "@mui/material";

export const PlayersSearch = ({ searchFilterHandler }) => (
    <Box
        sx={{ p: 2 }}>

        <OutlinedInput
            defaultValue=""
            fullWidth
            placeholder="Search Player"
            onChange={(e) => searchFilterHandler(e.target.value)}
            startAdornment={
                <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                        <SearchIcon />
                    </SvgIcon>
                </InputAdornment>
            }
            sx={{
                maxWidth: 500,
                "& fieldset": {
                  borderColor: "green",
                },
              }}
        />
    </Box>
);
