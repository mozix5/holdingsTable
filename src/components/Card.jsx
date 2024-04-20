import React, { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { AiFillLeftCircle, AiFillDownCircle } from "react-icons/ai";

const Card = ({ asset, data }) => {
  const [isOpen, setIsOpen] = useState(true); 

  function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name of the holding</TableCell>
              <TableCell align="right">Ticker</TableCell>
              <TableCell align="right">Average Price</TableCell>
              <TableCell align="right">Market Price</TableCell>
              <TableCell align="right">Latest Change Percentage</TableCell>
              <TableCell align="right">Market Value in Base CCY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.ticker}</TableCell>
                <TableCell align="right">{row.avg_price}</TableCell>
                <TableCell align="right">{row.market_price}</TableCell>
                <TableCell align="right">{row.latest_chg_pct}</TableCell>
                <TableCell align="right">{row.market_value_ccy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  const toggleAccordion = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div>
      <div className="flex items-center cursor-pointer" onClick={toggleAccordion}>
        {isOpen ? (
          <AiFillDownCircle className="text-2xl rotate-180" />
        ) : (
          <AiFillLeftCircle className="text-2xl -rotate-90" />
        )}
        <div className="ml-2">{asset}</div>
      </div>
      {isOpen && ( 
        <div className="border-2 border-black rounded-2xl mt-4">
          <BasicTable />
        </div>
      )}
    </div>
  );
};

export default Card;
