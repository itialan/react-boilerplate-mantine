import { Box, Button, Drawer } from '@mantine/core';
import { useCallback, useState } from 'react';
import Sidebar from './Sidebar/Sidebar';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const handleSidebarOpen = useCallback(() => {
    setSidebarOpen(true);
  }, [setSidebarOpen]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flex: '1 1 auto',
          maxWidth: '100%',
          paddingTop: 64,
          '@media (min-width: 1200px)': {
            paddingLeft: '280px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%',
          }}
        >
          {children}
        </Box>
      </Box>
      {/* <NavBar onSidebarOpen={handleSidebarOpen} /> */}
      {/* <Sidebar onClose={setSidebarOpen} open={isSidebarOpen} /> */}
      {/* <Drawer
        opened={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        title='Register'
        padding='xl'
        size='md'
      >
        <Button>Heelo</Button>
      </Drawer> */}
    </>
  );
};

export default MainLayout;
