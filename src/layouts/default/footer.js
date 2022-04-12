import * as React from 'react';
import {BottomNavigation, BottomNavigationAction, Box} from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Footer({ props }) {
    const [value, setValue] = React.useState(0);

    //console.log('PROPS', props)

    return <Box sx={{width: 500}}>
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon/>}/>
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon/>}/>
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon/>}/>
        </BottomNavigation>
    </Box>
}