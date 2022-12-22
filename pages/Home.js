import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import {
  ProgressChart,
  ContributionGraph,
  BarChart
} from "react-native-chart-kit";


const data = {
  labels: ["Swim", "Bike", "Run"], // optional
  data: [0.4, 0.6, 0.8]
};

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 }
];

const barData = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};

export default function Home() {
  width=Dimensions.get("window").width
  chartConfig={
    backgroundColor: "#212529",
    backgroundGradientFrom: "#495057",
    backgroundGradientTo: "#588157",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,

    propsForDots: {
      r: "6",
      strokeWidth: "2",
      stroke: "#ffa726"
    }
  }

  return (
    <View style={{ alignItems: 'center', flex:1}}>
      <Text style={{fontSize: 30, marginTop: 20}} onPress={()=>console.log('this is a log')}>Home</Text>
      <ProgressChart
        data={data}
        width={width}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <ContributionGraph
        style={{marginTop: 10}}
        values={commitsData}
        endDate={new Date("2017-04-01")}
        numDays={105}
        width={width}
        height={220}
        chartConfig={chartConfig}
      />
      <BarChart
        style={{marginTop: 10}}
        data={barData}
        width={width}
        height={220}
        yAxisLabel="$"
        chartConfig={chartConfig}
        verticalLabelRotation={30}
      />
    </View>
  )
}
