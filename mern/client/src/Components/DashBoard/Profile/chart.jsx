// import React from 'react'

import 'chart.js/auto';
import { Pie, Bar } from 'react-chartjs-2';
import React, { useEffect, useRef } from 'react';

const data = {
    labels: ['Canned Food', 'Fresh Produce', 'Packaged Meals', 'Fruits & Vegetables', 'Bakery Itmes', 'Beverages', 'Baby Food'],
    datasets: [
        {
            label: 'Food Type Items',
            data: [12, 19, 3, 5, 2, 3, 6],
            backgroundColor: [
                'pink',
                '#17a2b8',
                '#ffc107',
                'rgb(87, 185, 96)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'red'
            ],
            borderColor: [
                'pink',
                '#17a2b8',
                '#ffc107',
                'rgb(87, 185, 96)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'red'
            ],
            borderWidth: 1,
            
        },
    ],
};

const data1 = {
    labels: ['Donors', 'Recipients', 'Volunteers'],
    datasets: [
        {
            label: 'Number of users',
            data: [12, 19, 3],
            backgroundColor: [
                'pink',
                '#17a2b8',
                '#ffc107',
            ],
            borderColor: [
                'pink',
                '#17a2b8',
                '#ffc107',
            ],
            borderWidth: 1,
        },
    ],
};

const barOptions = {
    maintainAspectRatio: false,
};

export default function chart() {
    return (
        <>
            <div className="row justify-content-center gap-5">
                <div className="col col-5">
                    <Bar data={data} options={barOptions} />
                </div>
                <div className="col col-5">
                    <Pie data={data1} />
                </div>
            </div>
        </>
    )
}
