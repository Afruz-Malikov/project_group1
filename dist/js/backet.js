let counter = 0;

function increment() {
    counter++;
    document.getElementById('result').textContent = counter;
}

function decrement() {
    if (counter > 0) {
        counter--;
        document.getElementById('result').textContent = counter;
    }
}