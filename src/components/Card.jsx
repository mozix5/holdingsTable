import React from "react";
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
  const [isOpen, setIsOpen] = React.useState(true);

  function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="uppercase">
              <TableCell >Name of the holding</TableCell>
              <TableCell align="left">Ticker</TableCell>
              <TableCell align="left">Average Price</TableCell>
              <TableCell align="left">Market Price</TableCell>
              <TableCell align="left">Latest Change Percentage</TableCell>
              <TableCell align="left">Market Value in Base CCY</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow key={index} className={index % 2 === 0 ? "bg-primary" : "bg-white"}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.ticker}</TableCell>
                <TableCell align="left">{row.avg_price}</TableCell>
                <TableCell align="left">{row.market_price}</TableCell>
                <TableCell align="left">{row.latest_chg_pct}</TableCell>
                <TableCell align="left">{row.market_value_ccy}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  const toggleAccordion = () => {
    setIsOpen((prevOpen) => !prevOpen);
  };

  return (
    <div className="border-t-2 py-6 px-6 first:rounded-t-md">
      <div className="flex items-center cursor-pointer px-6" onClick={toggleAccordion}>
        {isOpen ? (
          <AiFillDownCircle className="text-2xl rotate-180 text-blue-600" />
        ) : (
          <AiFillLeftCircle className="text-2xl -rotate-90 text-blue-600" />
        )}
        <div className="ml-2 uppercase text-sm text-slate-600 font-bold">{asset}</div>
      </div>
      {isOpen && (
        <div
        className={`mt-4`}
        // style={{ maxHeight: `${contentHeight}`, transition: "max-height 0.3s ease-in-out" }}
      >
        <BasicTable data={data} />
      </div>
      )}
    </div>
  );
};

export default Card;
