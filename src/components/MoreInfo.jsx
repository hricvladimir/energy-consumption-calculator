
const MoreInfo = () => {
    return (
        <section className="section more-info-section">
            <h2 className="section-heading">More Info</h2>
            <p className='paragraph'>This calculator will calculate the price of consumed electricity by your appliance per given timeframe.
                You have to know the Wattage of the appliance (per hour) and the price of the electricity where the appliance is located.
                <br/>
                For example, average kettle can consume around 2000 W, which is 2 kWh.
                If the price is 0.13€/kWh, then the price of running the kettle for one hour is 2*0.13, which is 0.26€.
                With this calculator, you can calculate yearly expense of an appliance, if you know approximate daily/weekly usage.
                Now let&apos;s say, that you use the kettle on average 2 times a day, where average time to boil the water is 2 minutes.
                That would be 4 minutes of usage per day.
                Using our formula, we can calculate that using the kettle 2 times a day every day for a year, it would cost us approximately 6.33€.

            </p>
        </section>
    );
};

export default MoreInfo;