import { useState } from 'react';
import {
  Popover,
  Box,
  Button,
  Container,
  Checkbox,
  CheckboxGroup,
} from '@mantine/core';
import FilterButton from './FilterButton';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExchangeRate = () => {
  const [opened, setOpened] = useState(false);
  // const [checkboxValues, setCheckboxValues] = useState({
  //   base: '',
  //   symbols: [],
  // });
  const [checkboxValues, setCheckboxValues] = useState([]);

  const removeItemFilter = (value) => {
    setCheckboxValues([...checkboxValues.filter((item) => item !== value)]);
  };

  const addSymbols = (symbol) => {
    setCheckboxValues({
      ...checkboxValues,
      symbols: [...symbol],
    });
  };

  return (
    <Container size='xl'>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          minWidth: '100%',
        }}
      >
        <Popover
          opened={opened}
          onClose={() => setOpened(false)}
          position='bottom'
          placement='center'
          transition='pop-top-right'
          target={
            <Button
              rightIcon={<FontAwesomeIcon icon={faAngleDown} />}
              onClick={() => setOpened((o) => !o)}
              variant='subtle'
              sx={{
                // backgroundColor: 'transparent',
                color: 'black',
              }}
            >
              Base Currency
            </Button>
          }
          width={260}
        >
          <Box sx={{ maxHeight: '300px', overflowX: 'hidden' }}>
            <CheckboxGroup
              defaultValue={['react']}
              color='indigo'
              orientation='vertical'
              required
              spacing='md'
              // value={checkboxValues.symbols}
              // onChange={(value) => addSymbols(value)}
              value={checkboxValues}
              onChange={setCheckboxValues}
            >
              <Checkbox value='react' label='React' sx={{ '&:hover': {} }} />
              <Checkbox value='svelte' label='Svelte' />
              <Checkbox value='angular' label='Angular' />
              <Checkbox value='vue' label='Vue' />
            </CheckboxGroup>
          </Box>
        </Popover>
        <Button onClick={() => console.log(checkboxValues)}>Show values</Button>
        <Box sx={{ backgroundColor: 'gray' }}>
          {checkboxValues.length !== 0
            ? checkboxValues.map((item, i) => (
                <FilterButton
                  key={i}
                  value={item}
                  removeItemFilter={removeItemFilter}
                />
              ))
            : ''}
        </Box>
      </Box>
    </Container>
  );
};

export default ExchangeRate;
