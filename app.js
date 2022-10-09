const btn5 = document.querySelector('#btn5');
const btn10 = document.querySelector('#btn10');
const btn15 = document.querySelector('#btn15');
const btn25 = document.querySelector('#btn25');
const btn50 = document.querySelector('#btn50');
const tip = document.querySelector('#tip');
const tipMount = document.querySelector('#totalTip');
const total = document.querySelector('#totalTipPerson');
const reset = document.querySelector('#resetBtn');



let msgGlobal = ''; // value to can remove new label

let btn = 0;
let x = 0; //value for first time to add the label

btn5.addEventListener('click', () => {
    const bill = document.querySelector('#bill').value / 1;
    const numPeople = document.querySelector('#people').value / 1;

    for (let i = 0; i < 100; i++) {

        if (x === 0) {
            const msg = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "Can't be zero";
            let newLabel = document.createElement('label');
            newLabel.setAttribute("id", "newLabel");
            newLabel.innerText = msg;
            newLabel.style.color = 'red';
            document.querySelector('#people').style.border = '2px solid red';
            document.querySelector('#peopleLabel').append(newLabel);
            x = 1;
            msgGlobal = newLabel;
        }

        const numPeople = document.querySelector('#people').value / 1;
        console.log(numPeople);
        if (numPeople !== false && numPeople !== 0) {
            document.querySelector('#people').style.border = 'none';
            document.querySelector('#newLabel').remove();
            x = 0;
            btn = 5;
            tipCalc(bill, numPeople);
            break;
        }

    }
})

btn10.addEventListener('click', () => {
    const bill = document.querySelector('#bill').value / 1;
    const numPeople = document.querySelector('#people').value / 1;

    for (let i = 0; i < 100; i++) {

        if (x === 0) {
            const msg = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "Can't be zero";
            let newLabel = document.createElement('label');
            newLabel.setAttribute("id", "newLabel");
            newLabel.innerText = msg;
            newLabel.style.color = 'red';
            document.querySelector('#people').style.border = '2px solid red';
            document.querySelector('#peopleLabel').append(newLabel);
            x = 1;
            msgGlobal = newLabel;
        }

        const numPeople = document.querySelector('#people').value / 1;
        console.log(numPeople);
        if (numPeople !== false && numPeople !== 0) {
            document.querySelector('#people').style.border = 'none';
            document.querySelector('#newLabel').remove();
            x = 0;
            btn = 10;
            tipCalc(bill, numPeople);
            break;
        }

    }
})

btn15.addEventListener('click', () => {
    const bill = document.querySelector('#bill').value / 1;
    const numPeople = document.querySelector('#people').value / 1;

    for (let i = 0; i < 100; i++) {

        if (x === 0) {
            const msg = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "Can't be zero";
            let newLabel = document.createElement('label');
            newLabel.setAttribute("id", "newLabel");
            newLabel.innerText = msg;
            newLabel.style.color = 'red';
            document.querySelector('#people').style.border = '2px solid red';
            document.querySelector('#peopleLabel').append(newLabel);
            x = 1;
            msgGlobal = newLabel;
        }

        const numPeople = document.querySelector('#people').value / 1;
        console.log(numPeople);
        if (numPeople !== false && numPeople !== 0) {
            document.querySelector('#people').style.border = 'none';
            document.querySelector('#newLabel').remove();
            x = 0;
            btn = 15;
            tipCalc(bill, numPeople);
            break;
        }

    }
})

btn25.addEventListener('click', () => {
    const bill = document.querySelector('#bill').value / 1;
    const numPeople = document.querySelector('#people').value / 1;

    for (let i = 0; i < 100; i++) {

        if (x === 0) {
            const msg = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "Can't be zero";
            let newLabel = document.createElement('label');
            newLabel.setAttribute("id", "newLabel");
            newLabel.innerText = msg;
            newLabel.style.color = 'red';
            document.querySelector('#people').style.border = '2px solid red';
            document.querySelector('#peopleLabel').append(newLabel);
            x = 1;
            msgGlobal = newLabel;
        }

        const numPeople = document.querySelector('#people').value / 1;
        console.log(numPeople);
        if (numPeople !== false && numPeople !== 0) {
            document.querySelector('#people').style.border = 'none';
            document.querySelector('#newLabel').remove();
            x = 0;
            btn = 25;
            tipCalc(bill, numPeople);
            break;
        }

    }
})

btn50.addEventListener('click', () => {
    const bill = document.querySelector('#bill').value / 1;
    const numPeople = document.querySelector('#people').value / 1;

    for (let i = 0; i < 100; i++) {

        if (x === 0) {
            const msg = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "Can't be zero";
            let newLabel = document.createElement('label');
            newLabel.setAttribute("id", "newLabel");
            newLabel.innerText = msg;
            newLabel.style.color = 'red';
            document.querySelector('#people').style.border = '2px solid red';
            document.querySelector('#peopleLabel').append(newLabel);
            x = 1;
            msgGlobal = newLabel;
        }

        const numPeople = document.querySelector('#people').value / 1;
        console.log(numPeople);
        if (numPeople !== false && numPeople !== 0) {
            document.querySelector('#people').style.border = 'none';
            document.querySelector('#newLabel').remove();
            x = 0;
            btn = 50;
            tipCalc(bill, numPeople);
            break;
        }

    }
})

// gia to custom
tip.addEventListener('input', () => {
    const bill = document.querySelector('#bill').value / 1;
    const numPeople = document.querySelector('#people').value / 1;
    const tipV = document.querySelector('#tip').value / 1;

    for (let i = 0; i < 100; i++) {

        if (x === 0) {
            const msg = "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + "Can't be zero";
            let newLabel = document.createElement('label');
            newLabel.setAttribute("id", "newLabel");
            newLabel.innerText = msg;
            newLabel.style.color = 'red';
            document.querySelector('#people').style.border = '2px solid red';
            document.querySelector('#peopleLabel').append(newLabel);
            x = 1;
            msgGlobal = newLabel;
        }

        const numPeople = document.querySelector('#people').value / 1;
        if (numPeople !== false && numPeople !== 0) {
            document.querySelector('#people').style.border = 'none';
            document.querySelector('#newLabel').remove();
            x = 0;
            let mount = 0;
            let i = 0;
            i = bill * tipV / 100;
            mount = i / numPeople;
            tipMount.innerText = `$ ${mount.toFixed(2)}`;
            let sumP = (bill + i) / numPeople;
            total.innerText = `$ ${sumP.toFixed(2)}`;
            console.log(i, mount, sumP, bill, i, numPeople);
            break;
        }

    }



})

reset.addEventListener('click', () => {
    tipMount.innerText = `$ 0.00`;
    total.innerText = `$ 0.00`;
    document.querySelector('#tip').value = 0;
    document.querySelector('#bill').value = '';
    document.querySelector('#people').value = '';
    document.querySelector('#people').style.border = 'none';
    document.querySelector('#newLabel').remove();
})


function tipCalc(bill, numPeople) {
    let mount = 0;
    let x = 0;
    if (btn === 5) {
        x = bill * 0.05;
        mount = x / numPeople;
        tipMount.innerText = `$ ${mount.toFixed(2)}`;
    } else if (btn === 10) {
        x = bill * 0.1;
        mount = x / numPeople;
        tipMount.innerText = `$ ${mount.toFixed(2)}`;
    } else if (btn === 15) {
        x = bill * 0.15;
        mount = x / numPeople;
        tipMount.innerText = `$ ${mount.toFixed(2)}`;
    } else if (btn === 25) {
        x = bill * 0.25;
        mount = x / numPeople;
        tipMount.innerText = `$ ${mount.toFixed(2)}`;
    } else if (btn === 50) {
        x = bill * 0.5;
        mount = x / numPeople;
        tipMount.innerText = `$ ${mount.toFixed(2)}`;
    }

    console.log(bill, x, mount, numPeople);
    let sumP = (bill + x) / numPeople;
    total.innerText = `$ ${sumP.toFixed(2)}`;
}





