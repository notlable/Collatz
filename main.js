const input = document.querySelector('input');
const ul = document.querySelector('ul');
const btn = document.querySelector('.btnCheck');
const btnAddChart = document.querySelector('.btnAddChart');
const btnRemoveChart = document.querySelector('.btnRemoveChart');
const divChart = document.querySelector('.chart');
const btnToTop = document.getElementById('toTop');
const divResult = document.querySelector('.result');

const arrayPush = [];
const arrayUnshift = [];
const arrayLabels = ['step0'];

let insertDivX;
let insertDivY;
let divX = 1;
let divY = 0;




btn.addEventListener('click', (e) => {
    e.preventDefault();
    
    arrayPush.splice(0, arrayPush.length);
    arrayUnshift.splice(0, arrayUnshift.length);
    arrayLabels.splice(1, arrayLabels.length);
    step=1;
    ul.textContent = '';
    let x = input.value;
    arrayPush.push(x);
    arrayUnshift.unshift(x);
    const one = () => {
        if (x % 2 == 0 && x != 0) {
                y = x / 2;
            } else if (x % 2 != 0 && x != 0) {
                y = x * 3 + 1;
            } else return 

            result()
        two()
    }

    const two = () => {

        if (y % 2 == 0 && y != 1 || y % 2 != 0 && y != 1) {
            three()
        }else if (y == 1) return;
    }

    const three = () => {
        if (y % 2 == 0) {
            y = y / 2;
        } else if (y % 2 != 0) {
            y = y * 3 + 1;
        }
            result()
        two()
    }
    one();
    addDataset();
});
const result = () => {
    const li = document.createElement('li');
    li.textContent = y;
    ul.appendChild(li);
    arrayPush.push(li.textContent);
    arrayUnshift.unshift(li.textContent);
    arrayLabels.push('step'+step++);
};

const myChart = new Chart(document.getElementById('myChart'), {
    type: 'line',
    data: {
        labels: arrayLabels,
        datasets: [
            {
                label: '',
                
                data: [],
            },
        ],

    },  
        options: {
            legend: {
                display: true,
            },
            title: {
                display: true,
                text: 'Stopien',
                fontColor: '#111',
                fontSize: 20,
                padding: 20,
            }
        }
    });
const newChart = 
{
    label: 'Wykres',
        backgroundColor: ['blue'],
            data: arrayPush,
                }
                
                const addDataset = ()=>{
                    myChart.data.datasets.push(newChart)
                    myChart.update()
                    console.log(arrayPush.length);
                    console.log(arrayLabels.length);
                };
                const newChart2 =
                {
                    label: 'Odwrotny wykres',
                    backgroundColor: ['red'],
                    data: arrayUnshift,
                }
                const addDataset2 =()=>{
                    myChart.data.datasets.push(newChart2)
                    myChart.update()
                };
                
const removeData = ()=>{
    myChart.data.datasets.pop()
    myChart.update();
};
btnAddChart.addEventListener('click', addDataset2);
btnRemoveChart.addEventListener('click', removeData);



