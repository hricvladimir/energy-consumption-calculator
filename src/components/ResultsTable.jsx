import {useState} from "react";

const ResultsTable = ({hourlyPrice, dayPercentage, kWh}) => {

    const [hours, setHours] = useState(1)
    const [days, setDays] = useState(1)
    const [months, setMonths] = useState(1)
    const [years, setYears] = useState(1)

    return (
        <section className="section results-section">
            <h2 className="section-heading">Power consumption and price</h2>
            <table cellSpacing={0}>

                <thead>
                <tr>
                    <th>Period</th>
                    <th>Consumption (kWh)</th>
                    <th>Price (€)</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><input className="time-input" id="hours" type="number" defaultValue={hours} onChange={() => setHours(document.querySelector('#hours').value)}/><br/>hour</td>
                    <td>{kWh?(kWh*hours).toFixed(2):""}</td>
                    <td>{hourlyPrice?(hourlyPrice * hours).toFixed(2):""}</td>
                </tr>
                <tr>
                    <td><input className="time-input" id="days" type="number" defaultValue={days} onChange={() => setDays(document.querySelector('#days').value)}/><br/>day</td>
                    <td>{kWh?(kWh*days*24).toFixed(2):""}</td>
                    <td>{hourlyPrice?((hourlyPrice * 24*days)*dayPercentage).toFixed(2):""}</td>
                </tr>
                <tr>
                    <td><input className="time-input" id="months" type="number" defaultValue={months} onChange={() => setMonths(document.querySelector('#months').value)}/><br/>month</td>
                    <td>{kWh?(kWh*months*24*30.41666666).toFixed(2):""}</td>
                    <td>{hourlyPrice?((hourlyPrice * 24*30.41666666*months)*dayPercentage).toFixed(2):""}</td>
                </tr>
                <tr>
                    <td><input className="time-input" id="years" type="number" defaultValue={years} onChange={() => setYears(document.querySelector('#years').value)}/><br/>year</td>
                    <td>{kWh?(kWh*years*24*30.416666666*12).toFixed(2):""}</td>
                    <td>{hourlyPrice?((hourlyPrice * 24*30.41666666*12*years)*dayPercentage).toFixed(2):""}</td>
                </tr>
                </tbody>
            </table>
        </section>

    );
};

export default ResultsTable;