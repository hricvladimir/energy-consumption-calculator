import {useState} from "react";
import CalculatorForm from "./CalculatorForm.jsx";
import ResultsTable from "./ResultsTable.jsx";
import MoreInfo from "./MoreInfo.jsx";

const Calculator = () => {

    const [hourlyPrice, setHourlyPrice] = useState(null)
    const [kWh, setkWh] = useState(null)
    const [dayPercentage, setDayPercentage] = useState(100)

    const handleCalculation = (e) => {
        e.preventDefault()

        const wattage = document.querySelector('#wattage').value;
        const price = document.querySelector('#price').value;

        setkWh(wattage/1000)
        const hourlyPrice = wattage/1000*price;
        setHourlyPrice(hourlyPrice)

        // get percentage of the day to change daily, monthly and yearly calculations
        const hoursPerDay = document.querySelector('#hours-daily').value
        const minutesPerDay = document.querySelector('#minutes-daily').value
        const timeFrame = document.querySelector('#timeframe').value

        const seconds = hoursPerDay*60*60 + minutesPerDay*60;
        let percentage = timeFrame==='daily'?seconds/86400:seconds/604800
        if(percentage > 1) percentage = 1

        setDayPercentage(percentage)
    }

    return (
        <div className="calculator">
            <section className="section title-section">
                <h1>Electricity consumption</h1>
                <p className='paragraph'>This calculator can calculate the price of electricity that is consumed by an appliance</p>
            </section>


            <CalculatorForm handleCalculation={handleCalculation}/>
            <ResultsTable hourlyPrice={hourlyPrice} kWh={kWh} dayPercentage={dayPercentage}/>
            <MoreInfo/>

        </div>
    );
};

export default Calculator;