import { Checkbox, CheckboxGroup } from '@mantine/core';

const SingleCheckbox = ({ filterData, setFilter }) => {
  return (
    <>
      <CheckboxGroup label='Status' value={filterData} onChange={setFilter}>
        <Checkbox value='react' label='React' />
        <Checkbox value='svelte' label='Svelte' />
        <Checkbox value='angular' label='Angular' />
        <Checkbox value='vue' label='Vue' />
      </CheckboxGroup>
    </>
  );
};

export default SingleCheckbox;
