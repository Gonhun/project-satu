import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";
import TitleComponent from '../TitleComponent';

function createData(time, amount) {
    return { time, amount };
  }

const data = [
  createData("00:00", 0),
  createData("02:00", 200),
  createData("04:00", 400),
  createData("06:00", 600),
  createData("08:00", 800),
  createData("10:00", 1000),
  createData("12:00", 1200),
  createData("14:00", 1400),
  createData("18:00", 1800),
  createData("20:00", 2000),
  createData("22:00", undefined)
];

export default function ChartComponent() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <TitleComponent>Graphic</TitleComponent>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis dataKey="time" stroke={theme.palette.text.secondary} />
          <YAxis stroke={theme.palette.text.secondary}>
            <Label
              angle={270}
              position="left"
              style={{ textAnchor: "middle", fill: theme.palette.text.primary }}
            >
              Sales ($)
            </Label>
          </YAxis>
          <Line
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
