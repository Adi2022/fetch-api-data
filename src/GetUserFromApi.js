import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const GetUserFromApi = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => {
        console.log("Error", err);
      });
  }, []);


  const styles={
    tabel1:{
      marginTop:'20px',
      width: '100%',

    },
    tabel2:{
      width:'100%',
      height:'auto'
    },
    row:{
     fontSize:'25px',
     fontWeight:'bold',
     textAlign:{
      xs:'left',
      md:'left'
     }
    }
  }

  return (
    <>
      <TableContainer sx={styles.tabel1} >
        <Table sx={styles.tabel2}>
          <TableHead sx={{ backgroundColor: "#e1e1e1" }}>
            <TableRow >
              <TableCell sx={styles.row} md={12} xs={6} align="left">Name</TableCell>
              <TableCell   sx={styles.row} align="left">UserName</TableCell>
              <TableCell  sx={styles.row} align="left">Email</TableCell>
              <TableCell  sx={styles.row} align="left">Phone</TableCell>
              <TableCell  sx={styles.row} align="left">Website</TableCell>
              <TableCell sx={styles.row}  align="right">Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users &&
              users.map((user) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: "0"} }}
                >
                  <TableCell sx={{fontSize:'20px'}}>
                    {user.name}
                  </TableCell>

                  <TableCell  sx={{fontSize:'20px'}} align="left">{user.username}</TableCell>
                  <TableCell sx={{fontSize:'20px'}}  align="left">{user.email}</TableCell>
                  <TableCell sx={{fontSize:'20px'}}  align="left">{user.phone}</TableCell>
                  <TableCell sx={{fontSize:'20px'}}  align="left">{user.website}</TableCell>
                  <TableCell sx={{fontSize:'20px'}} align="right">{user.address.street}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default GetUserFromApi;
