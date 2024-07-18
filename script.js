function calculatePay() {
    const name = document.getElementById('name').value;
    const hoursWorked = document.getElementById('hoursWorked').value;
    const ratePerHour = document.getElementById('ratePerHour').value;

    if (name && hoursWorked && ratePerHour) {
        const basicPay = hoursWorked * ratePerHour;
        let tax;

        if (basicPay > 50000) {
            tax = basicPay * 0.2;
        } else if (basicPay >= 20000 && basicPay <= 50000) {
            tax = basicPay * 0.1;
        } else {
            tax = 0;
        }

        const netPay = basicPay - tax;

        document.getElementById('basicPay').innerText = `Basic Pay: $${basicPay.toFixed(2)}`;
        document.getElementById('tax').innerText = `Tax: $${tax.toFixed(2)}`;
        document.getElementById('netPay').innerText = `Net Pay: $${netPay.toFixed(2)}`;
    } else {
        alert('Please fill out all fields.');
    }
}
