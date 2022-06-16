import {
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Paper,
  Text,
  Title,
} from '@mantine/core';
import {
  faSquarePollVertical,
  faChartColumn,
  faRightLong,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Backup = () => {
  return (
    <>
      <Grid>
        <Grid.Col md={6} lg={3} gutter='xl'>
          <Paper
            sx={{
              borderRadius: '8px',
              boxShadow:
                'rgb(100 116 139 / 6%) 0px 1px 1px, rgb(100 116 139 / 10%) 0px 1px 2px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
              }}
            >
              <Box>
                <Text color='#65748b' weight={400}>
                  Monitors
                </Text>
                <Title>50</Title>
              </Box>
              <Box>
                <FontAwesomeIcon icon={faChartColumn} size='4x' color='teal' />
              </Box>
            </Box>
            <Divider />
            <Card.Section sx={{ padding: '16px 24px' }}>
              <Button
                variant='subtle'
                rightIcon={<FontAwesomeIcon icon={faRightLong} />}
              >
                See all monitors
              </Button>
            </Card.Section>
          </Paper>
        </Grid.Col>
        <Grid.Col md={6} lg={3} gutter='xl'>
          <Paper
            sx={{
              borderRadius: '8px',
              boxShadow:
                'rgb(100 116 139 / 6%) 0px 1px 1px, rgb(100 116 139 / 10%) 0px 1px 2px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
              }}
            >
              <Box>
                <Text color='#65748b' weight={400}>
                  KRW
                </Text>
                <Title>1000</Title>
              </Box>
              <Box>
                <FontAwesomeIcon icon={faChartColumn} size='4x' color='teal' />
              </Box>
            </Box>
            <Divider />
            <Card.Section sx={{ padding: '16px 24px' }}>
              <Button
                variant='subtle'
                rightIcon={<FontAwesomeIcon icon={faRightLong} />}
              >
                See all monitors
              </Button>
            </Card.Section>
          </Paper>
        </Grid.Col>
        <Grid.Col md={6} lg={3} gutter='xl'>
          <Paper
            sx={{
              borderRadius: '8px',
              boxShadow:
                'rgb(100 116 139 / 6%) 0px 1px 1px, rgb(100 116 139 / 10%) 0px 1px 2px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
              }}
            >
              <Box>
                <Text color='#65748b' weight={400}>
                  Monitors
                </Text>
                <Title>50</Title>
              </Box>
              <Box>
                <FontAwesomeIcon icon={faChartColumn} size='4x' color='teal' />
              </Box>
            </Box>
            <Divider />
            <Card.Section sx={{ padding: '16px 24px' }}>
              <Button
                variant='subtle'
                rightIcon={<FontAwesomeIcon icon={faRightLong} />}
              >
                See all monitors
              </Button>
            </Card.Section>
          </Paper>
        </Grid.Col>
        <Grid.Col md={6} lg={3} gutter='xl'>
          <Paper
            sx={{
              borderRadius: '8px',
              boxShadow:
                'rgb(100 116 139 / 6%) 0px 1px 1px, rgb(100 116 139 / 10%) 0px 1px 2px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px 24px',
              }}
            >
              <Box>
                <Text color='#65748b' weight={400}>
                  Monitors
                </Text>
                <Title>50</Title>
              </Box>
              <Box>
                <FontAwesomeIcon icon={faChartColumn} size='4x' color='teal' />
              </Box>
            </Box>
            <Divider />
            <Card.Section sx={{ padding: '16px 24px' }}>
              <Button
                variant='subtle'
                rightIcon={<FontAwesomeIcon icon={faRightLong} />}
              >
                See all monitors
              </Button>
            </Card.Section>
          </Paper>
        </Grid.Col>
      </Grid>
    </>
  );
};

export default Backup;
