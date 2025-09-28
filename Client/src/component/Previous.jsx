import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { useEffect } from "react";

function Counter() {
  const [counters, setCounters] = useState([]);
  const [total, setTotal] = useState(0);

  function formatDate(isoDate) {
    const date = new Date(isoDate);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  useEffect(() => {
    const fetchCounter = async () => {
      const res = await fetch(`http://localhost:8000/api/counter/history`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      data.reverse();

      setCounters(data);

      const calculate = data.reduce(
        (acc, curr) => {
          acc.count += curr.count;
          acc.mala += curr.mala;
          return acc;
        },
        { count: 0, mala: 0 }
      );
      const total = calculate.count + calculate.mala * 108;
      setTotal(total);
    };

    fetchCounter();
  }, []);

  return (
    <>
      <div className="bg-yellow-600 h-full w-full">
        <Table>
          <TableCaption>~~Gateway to Godhead~~</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Dates</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Mala</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {counters.map((one, idx) => (
              <TableRow key={idx}>
                <TableCell className="font-medium">
                  {formatDate(one.date)}
                </TableCell>
                <TableCell>{one.count}</TableCell>
                <TableCell>{one.mala}</TableCell>
                <TableCell className="text-right">
                  {one.mala >= 16 ? "Done" : "Do it now"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">{total}</TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}

export default Counter;
