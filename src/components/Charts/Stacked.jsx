import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip
} from '@syncfusion/ej2-react-charts'

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis
} from '../../data/dummy'

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      chartArea={{ border: { width: 0 } }}
      primaryYAxis={stackedPrimaryYAxis}
      series={stackedCustomSeries}
      width={width}
      height={height}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
