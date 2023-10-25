import React from 'react';

import { Container, Pagination, Stack } from '@mui/material';

import { useAppDispatch, useAppSelector } from '../../hooks/redux/hook';

import { setPage } from '../../redux/slices/filter/filterSlice';

const PaginationComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  const offset = useAppSelector((state) => state.filter.offset);

  return (
    <Container
      sx={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}
    >
      <Stack spacing={2}>
        <Pagination
          size="large"
          count={3}
          page={offset}
          onChange={(_, num) => dispatch(setPage(num))}
        />
      </Stack>
    </Container>
  );
};

export default PaginationComponent;
