import React from 'react';
import { Group } from '@mantine/core';

const Navbar = () => {
  return (
    <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
      <a href="" className={classes.link}>
        Home
      </a>
      <a href="" className={classes.link}>
        Contacts
      </a>
    </Group>
  );
};

export default Navbar;
