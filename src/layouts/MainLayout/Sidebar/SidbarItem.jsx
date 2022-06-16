import { Box, Button, ListItem } from '@mantine/core';
import {
  NavLink as RouterLink,
  useLocation,
  matchPath,
} from 'react-router-dom';

export const SidebavItem = (props) => {
  const { href, icon, title, ...others } = props;
  const location = useLocation();
  const active = href
    ? !!matchPath(
        {
          path: href,
          end: false,
        },
        location.pathname
      )
    : false;

  return (
    <ListItem
      sx={{
        display: 'flex',
        marginBottom: 0.5,
        padding: '0 16px',
      }}
      {...others}
    >
      <Button
        component={RouterLink}
        to={href}
        leftIcon={icon}
        sx={{
          backgroundColor: active && 'rgba(255,255,255, 0.08)',
          borderRadius: 1,
          color: active ? 'secondary.main' : 'neutral.300',
          fontWeight: active && 'fontWeightBold',
          justifyContent: 'flex-start',
          px: 3,
          textAlign: 'left',
          textTransform: 'none',
          width: '100%',
          '& .MuiButton-startIcon': {
            color: active ? 'secondary.main' : 'neutral.400',
          },
          '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.08)',
          },
        }}
      >
        <Box sx={{ flexGrow: 1 }}>{title}</Box>
      </Button>
    </ListItem>
  );
};
