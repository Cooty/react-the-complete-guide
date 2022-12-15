import 'components/ui/Chart/ChartBar.css';

function ChartBar({value, maxValue, label}) {
    let fillHeight = '0%';
    if(maxValue > 0) {
        fillHeight = `${Math.round((value / maxValue) * 100)}%`
    }
    
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div
                    className="chart-bar__fill"
                    style={{height: fillHeight}}
                />
            </div>
            <div className="chart-bar__label">{label}</div>
        </div>
    );
}

export default ChartBar;
