import React from 'react'
import { Bubble } from "react-chartjs-2"

const data = {
    datasets: [
        {
            label: "React",
            backgroundColor: "#4169e1",
            borderColor: "transparent",
            data: [{x:20, y:866, r:63}]
        },
        {
            label: "Angular",
            backgroundColor: "#c71585",
            borderColor: "transparent",
            data: [{x:30, y:389, r:4}]
        },
        {
            label: "Vue",
            backgroundColor: "#008080",
            borderColor: "transparent",
            data: [{x:10, y:749, r:13}]
        },
    ],
};

const options = {
    title: {
        display: true,
        fontSize: 18,
        text: "NPM donwloads comparison (global)",
    },
    scales: {
        yAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: "Number of job offer in LinkedIn (Japan)",
                    fontSize: 18,
                },
                ticks:{
                    min: 0,
                    max: 1300,
                    fontSize: 14,
                },
            },
        ],
        xAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: "Leaning Cost",
                    fontSize: 18,
                },
                ticks:{
                    min: 5,
                    max: 35,
                    fontSize: 14,
                },
            },
        ],
    }
}

const BubblePlot: React.FC = () => {
    return (
        <div>
            <Bubble data={data} options={options} />
        </div>
    );
};

export default BubblePlot
