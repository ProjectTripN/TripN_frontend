import React from "react";
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/bar
import { ResponsiveBar } from "@nivo/bar";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Chart1 = ({ data /* see data tab */ }) => (
  <ResponsiveBar
    data={data}
    // keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
    keys={[
      // "매출원가",
      "판매비와 관리비",
      "지급 수수료",
      "기타비용",
      "금융비용",
    ]}
    indexBy="Month"
    margin={{ top: 50, right: 130, bottom: 50, left: 75 }}
    padding={0.3}
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    valueFormat={{ format: "", enabled: true }}
    colors={{ scheme: "nivo" }}
    defs={
      [
        // {
        //   id: "dots",
        //   type: "patternDots",
        //   background: "inherit",
        //   color: "#38bcb2",
        //   size: 4,
        //   padding: 1,
        //   stagger: true,
        // },
        // {
        //   id: "lines",
        //   type: "patternLines",
        //   background: "inherit",
        //   color: "#eed312",
        //   rotation: -45,
        //   lineWidth: 6,
        //   spacing: 10,
        // },
      ]
    }
    fill={
      [
        // {
        //   match: {
        //     id: "fries",
        //   },
        //   id: "dots",
        // },
        // {
        //   match: {
        //     id: "sandwich",
        //   },
        //   id: "lines",
        // },
      ]
    }
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Month",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
  />
);

export default Chart1;
