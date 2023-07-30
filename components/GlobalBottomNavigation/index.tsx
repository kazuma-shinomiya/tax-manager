'use client'

import { FC, useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Paper from '@mui/material/Paper';

const GlobalBottomNavigation: FC = () => {
  const [value, setValue] = useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="ホーム" icon={<RestoreIcon />} />
        <BottomNavigationAction label="グラフ" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="その他" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Paper>
  );
};

export default GlobalBottomNavigation;
