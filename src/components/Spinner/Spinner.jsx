import { Box, Center, Container, Title } from '@mantine/core';
import { useState } from 'react';
import { ClipLoader, HashLoader } from 'react-spinners';
import { useStyles } from './styles';

const override = {
  display: 'block',
  margin: '0 auto',
};

const Spinner = () => {
  let [loading, setLoading] = useState(true);

  return (
    <Center sx={{ height: '100vh' }}>
      <Box>
        <HashLoader
          color='#233464'
          loading={loading}
          cssOverride={override}
          size={50}
        />
        <Title
          sx={{
            fontSize: 25,
            lineHeight: '2.2',
            fontWeight: 700,
            color: '#252932',
            textShadow:
              'rgba(61, 61, 61, 0.3) 1px 1px, rgba(61, 61, 61, 0.2) 2px 2px, rgba(61, 61, 61, 0.3) 3px 3px;fontSize: 150',
          }}
        >
          GGWL
        </Title>
      </Box>
    </Center>
  );
};

export default Spinner;
