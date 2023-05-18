import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { useHooke } from '../../context/context';
import './style.css';

export default function BasicMenu() {
  const { pageAboutherf, pageTechherf, pageProjectherf, pageHomeherf } = useHooke()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <a className='menu' href={pageHomeherf} onClick={handleClose}>Home</a>
        <a className='menu' href={pageAboutherf} onClick={handleClose}>About</a>
        <a className='menu' href={pageTechherf} onClick={handleClose}>Tech Stack</a>
        <a className='menu' href={pageProjectherf} onClick={handleClose}>Project</a>
      </Menu>
    </div>
  );
}