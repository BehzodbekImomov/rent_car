"use client";
import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { request } from "@/request";
import { REST } from "@/constants/enpoint";
import Loading from "../../(public)/loading";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function Dashboard() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getRows();
  }, []);

  async function getRows() {
    try {
      setIsLoading(true);
      const res = await request.get(`${REST.ORDERS}`);
      setRows(res?.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <TableContainer component={Paper}>
      {isLoading ? (
        <Loading />
      ) : (
        <Table sx={{ minWidth: 250 }} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">E-mail</StyledTableCell>
              <StyledTableCell align="right">Phone</StyledTableCell>
              <StyledTableCell align="right">Citys</StyledTableCell>
              <StyledTableCell align="right">Car brand</StyledTableCell>
              <StyledTableCell align="right">Car model</StyledTableCell>
            </StyledTableRow>
          </TableHead>

          <TableBody style={{ backgroundColor: "#1a202c" }}>
            {rows.length ? (
              rows.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell
                    sx={{ color: "var(--yellow)" }}
                    component="th"
                    scope="row"
                  >
                    {row.customer_name}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{ color: "var(--yellow)" }}
                    align="right"
                  >
                    {row.email}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{ color: "var(--yellow)" }}
                    align="right"
                  >
                    {row.contact_number}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{ color: "var(--yellow)" }}
                    align="right"
                  >
                    {row.from_destination}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{ color: "var(--yellow)" }}
                    align="right"
                  >
                    {row.car_brand}
                  </StyledTableCell>
                  <StyledTableCell
                    sx={{ color: "var(--yellow)" }}
                    align="right"
                  >
                    {row.car_model}
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <StyledTableRow>
                <StyledTableCell colSpan={6} align="center">
                  No data
                </StyledTableCell>
              </StyledTableRow>
            )}
          </TableBody>
        </Table>
      )}
    </TableContainer>
  );
}
