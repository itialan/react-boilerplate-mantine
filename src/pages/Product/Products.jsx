import { Button, Group, Skeleton, Table } from '@mantine/core';
import { showNotification } from '@mantine/notifications';
import { useState } from 'react';
import { notification } from '../../helpers/notification';

const elements = [
  { position: 6, mass: 12.011, symbol: 'C', name: 'Carbon' },
  { position: 7, mass: 14.007, symbol: 'N', name: 'Nitrogen' },
  { position: 39, mass: 88.906, symbol: 'Y', name: 'Yttrium' },
  { position: 56, mass: 137.33, symbol: 'Ba', name: 'Barium' },
  { position: 58, mass: 140.12, symbol: 'Ce', name: 'Cerium' },
];

const Products = () => {
  const [loading, setLoading] = useState(true);

  const rows = elements.map((element) => (
    // <Skeleton visible={loading}>
    <tr key={element.name}>
      <td>{element.position}</td>
      <td>{element.name}</td>
      <td>{element.symbol}</td>
      <td>{element.mass}</td>
    </tr>
  ));

  return (
    <>
      <Group position='center'>
        <Button
          variant='outline'
          onClick={() =>
            // notification('Success', 'Monitor has been updated successfully')
            setLoading(!loading)
          }
        >
          Show customized notification
        </Button>
        <Skeleton visible={loading} width='fit-content'>
          <Button
            variant='outline'
            onClick={() => notification('Error', 'Deleted')}
          >
            Show customized notification
          </Button>
        </Skeleton>
      </Group>
      <Table>
        <thead>
          <tr>
            <th>Element position</th>
            <th>Element name</th>
            <th>Symbol</th>
            <th>Atomic mass</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </>
  );
};

export default Products;
