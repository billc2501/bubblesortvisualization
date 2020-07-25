let i  = 0;
let w = 10;

function setup() {
    createCanvas(1000, 700);    //creates an area bars
    values = new Array((width / w));
    for (let i = 0; i < values.length; i ++){
        values[i] = random(width / 1.5);  //array of height bars
    }
    bubbleSort(values, 0, values.length - 1);
}

async function bubbleSort(ar){
    for (let i = 0; i< ar.length - 1; i ++){
        for (let j = 0; j < ar.length - 1 - i; j++){
            if (ar[j] > ar[j + 1]){
                await swap(ar, j, j+ 1); //swapping between each other
            }
        }
    }
}

async function swap(ar, a, b){
    await sleep(10);
    let temp = ar[a];
    ar[a] = ar[b];
    ar[b] = temp;
}

function draw() {
    background(51);

    for (let i = 0; i < values.length; i ++){
        stroke(0);
        fill(255);
        rect(i * w, height - values[i], w, values[i]);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
