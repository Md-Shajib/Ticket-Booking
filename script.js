function inputFieldUpdate (category, isincrement){
    let ticketCounterValue = getValue(category);
    let NewTicketCounterValue = ticketCounterValue;
    if(isincrement == true){
        NewTicketCounterValue += 1;
    }
    if(isincrement == false && ticketCounterValue > 0){
        NewTicketCounterValue -= 1;
    }
    document.getElementById(category + '-counter').value = NewTicketCounterValue;
    calculationTotal();
}


function getValue(category){
    let ticketCounter = document.getElementById(category + '-counter');
    let CounterValue = parseInt(ticketCounter.value);
    return CounterValue;
}


function calculationTotal(){
    let firstClassCounter = getValue('firstclass');
    let economicCounter = getValue('economy');

    const subtotal = firstClassCounter * 150 + economicCounter * 100;
    const vat = (subtotal * 10)/100;
    const total = subtotal + vat;

    document.getElementById('subtotal').innerText = subtotal;
    document.getElementById('vat').innerText = vat;
    document.getElementById('total').innerText = total;

    // notice value set
    document.getElementById('amountOfFirstclass').innerText = firstClassCounter;
    document.getElementById('costOfFirstclass').innerText = firstClassCounter * 150;
    document.getElementById('amountOfEconomy').innerText = economicCounter;
    document.getElementById('costOfEconomy').innerText = economicCounter * 100;
    document.getElementById('notice-subtotal').innerText = subtotal;
    document.getElementById('notice-vat').innerText = vat;
    document.getElementById('notice-total').innerText = total;
}

document.getElementById('book-now').addEventListener('click', function(){
    const noticeArea = document.getElementById('notice');
    noticeArea.style.display = 'block';
});

document.getElementById('notice-button').addEventListener('click', function(){
    const noticeArea = document.getElementById('notice');
    noticeArea.style.display = 'none';
});