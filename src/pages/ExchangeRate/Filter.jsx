import { Box, Chip } from '@mantine/core';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import SingleCheckbox from './SingleCheckbox';

const Filter = () => {
  // array of obj (ex: [{isDeleted: 'false'}, {base: 'KRW}])
  const [filterData, setFilterData] = useState({
    status: ['false'],
    currencies: ['KRW', 'USD'],
    percentage: ['10%'],
  });

  const showFilterData = useCallback(
    () =>
      Object.keys(filterData).forEach((key) => {
        return (
          // <Chip>
          //   {key}: {filterData[key]}
          // </Chip>
          <p>HIHI</p>
        );
      }),
    [filterData]
  );

  useEffect(() => {
    const gg = showFilterData();
    console.log(gg);
  }, [filterData, showFilterData]);

  const selectSingleCheckBox = (value, field) => {
    const newSelectedCheckBox = value.pop();

    // Checkbox store value as array
    setFilterData({ ...filterData, [field]: [newSelectedCheckBox] });
  };

  return (
    <>
      <Box>{showFilterData()}</Box>
      <SingleCheckbox
        filterData={filterData['status']}
        setFilter={(value) => selectSingleCheckBox(value, 'status')}
      />
    </>
  );
};

export default Filter;
