
const CalculatorForm = ({handleCalculation}) => {

const handleClear = () => {}

    return (
        <form className="calculator-form">
            <h2>Calculator</h2>
            <div className="form-fields">
                <div className="form-field">
                    <h4>Enter the Wattage of the appliance that you want to calculate the price for.</h4>
                    <input className="form-item" id="wattage" type="number" name="wattage"/>
                </div>
                <div className="form-field">
                    <h4>Enter the price of electricity that you pay for 1 kWh.</h4>
                    <input className="form-item" id="price" type="number" name="price" defaultValue={0.13}/>
                </div>
                <div className="form-field">
                    <h4>How many hours per day or week is the appliance turned on?</h4>
                    <input name='timeframe-input' className="form-item" id="hours-daily" type="number" min={0} max={168} defaultValue={24}/> <span>hours </span>
                    <input className="form-item"id="minutes-daily" type="number" min={0} max={59} defaultValue={0}/> <span>minutes </span>
                    <select className="form-item" name="timeframe" id="timeframe">
                        <option value="daily">daily</option>
                        <option value="weekly">weekly</option>
                    </select>
                </div>
            </div>

            <div className="form-btn-container">
                <button id="calculate-btn" onClick={handleCalculation}>Calculate</button>
                <button id="clear-btn" onClick={handleClear}>Clear</button>
            </div>

        </form>
    );
};

export default CalculatorForm;