import {
  faBook,
  faChartLine,
  faHome,
  faTimeline,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Divider, Drawer, Title } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useEffect, memo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SidebavItem } from './SidbarItem';

const items = [
  {
    href: '/',
    icon: <FontAwesomeIcon icon={faHome} />,
    title: 'Dashboard',
  },
  {
    href: '/monitors',
    icon: <FontAwesomeIcon icon={faBook} />,
    title: 'Monitors',
  },
  {
    href: '/logs',
    icon: <FontAwesomeIcon icon={faTimeline} />,
    title: 'Logs',
  },
  {
    href: '/exchange',
    icon: <FontAwesomeIcon icon={faChartLine} />,
    title: 'Exchange Rate',
  },
];

const Sidebar = ({ open, onClose }) => {
  const location = useLocation();
  const lgUp = useMediaQuery('(max-width: 1200px)', false);

  useEffect(
    () => {
      if (open && onClose) {
        console.log('gg');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div>
          <Box sx={{ p: 3 }}>
            <Link to='/'>
              <img
                src='/assets/images/logo.png'
                alt='Logo'
                title='logo'
                style={{ height: 42, width: 42 }}
              />
            </Link>
          </Box>
          <Box sx={{ padding: '0 16px' }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                padding: '11px 24px',
                borderRadius: 1,
              }}
            >
              <div>
                <Title order={4}>Forex</Title>
                {/* <Title
                  color="neutral.400"
                  variant="body2"
                >
                  Your tier
                  {' '}
                  : Premium
                </Typography> */}
              </div>
            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            margin: '24px 0',
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <SidebavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        open
        sx={{
          backgroundColor: '#121818',
          color: '#FFFFFF',
          width: 280,
        }}
      >
        <div>
          <p>hello</p>
        </div>
      </Drawer>
    );
  }

  return (
    // <Drawer onClose={onClose} open={open} size={280} sx={{}}>
    //   {content}
    // </Drawer>
    // <Drawer open={open}   size='280'>
    //   <div>
    //     <p>hello</p>
    //   </div>
    // </Drawer>
    <Drawer
      opened={open}
      onClose={onClose}
      size={280}
      sx={{
        backgroundColor: '#121818',
        color: '#FFFFFF',
        position: 'relative',
      }}
    >
      {content}
    </Drawer>
  );
};

export default Sidebar;
