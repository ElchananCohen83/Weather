import React from 'react';
import '../App.css';

export default function DayOfWeek({ dayOfWeek, temp_min, temp_max }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>{dayOfWeek}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{temp_min}</td>
                </tr>
                <tr>
                    <td>{temp_max}</td>
                </tr>
                {/* Add more rows as needed */}
            </tbody>
        </table>
    );
}
