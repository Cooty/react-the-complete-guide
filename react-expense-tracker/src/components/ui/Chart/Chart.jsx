import ChartBar from 'components/ui/Chart/ChartBar';
import 'components/ui/Chart/Chart.css';

function Chart({ dataPoints }) {
    const dataPointValues = dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
}

export default Chart;
