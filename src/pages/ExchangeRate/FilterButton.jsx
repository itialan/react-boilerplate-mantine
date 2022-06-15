import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mantine/core';

const FilterButton = ({ value, removeItemFilter }) => {
  return (
    <Button
      sx={{
        userSelect: 'none',
        appearance: 'none',
        color: 'rgb(18, 24, 40)',
        transition:
          'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        cursor: 'default',
        outline: '0px',
        borderRadius: '16px',
        padding: '0px',
        backgroundColor: 'transparent',
        border: '1px solid rgb(189, 189, 189)',
        margin: '8px',
        '&:hover': {
          backgroundColor: 'transparent',
        },
        '&:not(:disabled):active': {
          transform: 'none',
        },
      }}
    >
      <span style={{ paddingRight: '12px', paddingLeft: '12px' }}>
        {`${value}`}
      </span>
      <FontAwesomeIcon
        icon={faCircleXmark}
        size='lg'
        color='#d1d5db'
        style={{
          marginRight: '12px',
          cursor: 'pointer',
        }}
        onClick={() => removeItemFilter(value)}
      />
    </Button>
  );
};

export default FilterButton;
