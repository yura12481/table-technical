import React, { useState, useEffect } from 'react';

import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  Box,
} from '@mui/material';

import { fetchUsers } from '../../redux/slices/data/asyncAction';
import { fetchUpdateUser } from '../../redux/slices/updateUser/asyncAction';

import { useAppDispatch, useAppSelector } from '../../hooks/redux/hook';

import PaginationComponent from '../../components/Pagination/PaginationComponent';
import LoadingComponent from '../../components/loading/LoadingComponent';
import ErrorComponent from '../../components/error/ErrorComponent';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, status } = useAppSelector((state) => state.users);
  const { offset } = useAppSelector((state) => state.filter);

  const [editableUserId, setEditableUserId] = useState<number | null>(null);
  const [editedName, setEditedName] = useState<string>('');
  const [editedEmail, setEditedEmail] = useState<string>('');

  useEffect(() => {
    dispatch(fetchUsers({ offset }));
  }, [dispatch, offset]);

  const handleUpdateUser = (userId: number) => {
    const updatedUserData = {
      id: userId,
      name: editedName,
      email: editedEmail,
    };
    dispatch(fetchUpdateUser(updatedUserData))
      .then((data) => {
        alert('Data updated successfully: ' + JSON.stringify(data.meta.arg));
        console.log('Data updated successfully:', data);
      })
      .catch((error) => {
        console.error('Error when updating data:', error);
      });
    setEditableUserId(null);
    setEditedName('');
    setEditedEmail('');
  };

  if (status === 'loading') {
    return <LoadingComponent />;
  }

  if (status === 'error') {
    return <ErrorComponent />;
  }

  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Id:</TableCell>
              <TableCell align="center">Name:</TableCell>
              <TableCell align="center">Email:</TableCell>
              <TableCell align="center">Actions:</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="center">{row.id}</TableCell>
                <TableCell align="center">
                  {editableUserId === row.id ? (
                    <input
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  ) : (
                    row.name
                  )}
                </TableCell>
                <TableCell align="center">
                  {editableUserId === row.id ? (
                    <input
                      type="text"
                      value={editedEmail}
                      onChange={(e) => setEditedEmail(e.target.value)}
                    />
                  ) : (
                    row.email
                  )}
                </TableCell>
                <TableCell align="center">
                  {editableUserId === row.id ? (
                    <Button onClick={() => handleUpdateUser(row.id)}>
                      Save
                    </Button>
                  ) : (
                    <Button onClick={() => setEditableUserId(row.id)}>
                      Edit
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationComponent />
      <Box sx={{ display: 'flex', justifyContent: 'center', margin: '25px 0' }}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="IT humor"
          src="https://cs14.pikabu.ru/post_img/2023/02/20/8/1676900856116630133.jpg"
        />
      </Box>
    </>
  );
};

export default HomePage;
