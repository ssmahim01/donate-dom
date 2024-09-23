// Using DOM in contents.

let count = 0;
const btnClass = document.getElementsByClassName('donate-btn');
const mainBalance = parseFloat(document.getElementById('main-balance').innerText);

// Using function.

function inputValue(id){
    const convertNumber = parseFloat(document.getElementById(id).value);
    return convertNumber;
}

function textValue(id){
    const convertNumber2 = parseFloat(document.getElementById(id).innerText);
    return convertNumber2;
}

// function showModal(id){
//     const modal = document.getElementById(id);
//     modal.className = "hidden";
//     alert('Invalid Amount!');
// }

const donateBtn1 = document.getElementById('donate-btn1');
donateBtn1.addEventListener('click', function(){
    const firstField = inputValue('first-donation-field');
    if(typeof firstField === 'number' && firstField > 0){
        const totalDonate = textValue('total-donate1');
    
        const total = firstField + totalDonate;
        
        document.getElementById('total-donate1').innerText = total;
        
        const remainingBalance = mainBalance - total;
    
        document.getElementById('main-balance').innerText = remainingBalance;

       const firstTransaction = document.getElementById('first-transaction').innerText;

          const div = document.createElement('div');
    
    div.innerHTML = `
    <h3 class="text-xl font-bold">${firstField} Taka is ${firstTransaction}</h3>
    <p class="text-sm font-medium text-gray-300">Date: ${new Date().toLocaleString}</p>
    `;

    const historySection = document.getElementById('history-section');

    
    }

    else{
        alert('Invalid Amount!');
    }
});

const donateBtn2 = document.getElementById('donate-btn2');
donateBtn2.addEventListener('click', function(){
    const secondField = inputValue('second-donation-field');
    if(typeof secondField === 'number' && secondField > 0){
        const totalDonate = textValue('total-donate2');
    
        const total = secondField + totalDonate;
        
        document.getElementById('total-donate2').innerText = total;
        
        const remainingBalance = mainBalance - total;
    
        document.getElementById('main-balance').innerText = remainingBalance;

       const secondTransaction = document.getElementById('second-transaction').innerText;

          const div = document.createElement('div');
    
    div.innerHTML = `
    <h3 class="text-xl font-bold">${secondField} Taka is ${secondTransaction}</h3>
    <p class="text-sm font-medium text-gray-300">Date: ${new Date().toLocaleString}</p>
    `;

    const historySection = document.getElementById('history-section');


    }

    else{
        alert('Invalid Amount!');
    }
});

const donateBtn3 = document.getElementById('donate-btn3');
donateBtn3.addEventListener('click', function(){
    const thirdField = inputValue('third-donation-field');
    if(typeof thirdField === 'number' && thirdField > 0){
        const totalDonate = textValue('total-donate3');
    
        const total = thirdField + totalDonate;
        
        document.getElementById('total-donate3').innerText = total;
        
        const remainingBalance = mainBalance - total;
    
        document.getElementById('main-balance').innerText = remainingBalance;

       const thirdTransaction = document.getElementById('third-transaction').innerText;

          const div = document.createElement('div');
    
    div.innerHTML = `
    <h3 class="text-xl font-bold">${thirdField} Taka is ${thirdTransaction}</h3>
    <p class="text-sm font-medium text-gray-300">Date: ${new Date().toLocaleString}</p>
    `;

    const historySection = document.getElementById('history-section');


    }

    else{
        alert('Invalid Amount!');
    }
});
    

const historyBtn = document.getElementById('history-btn');

historyBtn.addEventListener('click', function(){
    this.className = "btn text-base bg-lime-400 font-medium px-6";
    this.classList.remove('text-gray-600');
    this.classList.add('text-gray-600');
    const donateBtn = document.getElementById('donate-btn');
    donateBtn.classList.add('text-blackPrimary');
    donateBtn.classList.remove("bg-lime-400");

    const donationSections = document.getElementById('donation-sections');
    donationSections.classList.add('hidden');
});

const donateBtn = document.getElementById('donate-btn');

donateBtn.addEventListener('click', function(){
    this.className = "btn text-base bg-lime-400 font-medium px-6";
    this.classList.remove('text-blackPrimary');
    const historyBtn = document.getElementById('history-btn');
    historyBtn.classList.add('text-gray-600');
    historyBtn.classList.remove("bg-lime-400");

    const donationSections = document.getElementById('donation-sections');
    donationSections.classList.remove('hidden');
});

const blogBtn = document.getElementById('blog-btn');
blogBtn.addEventListener('click', function(){
    window.location = './blog.html';
});