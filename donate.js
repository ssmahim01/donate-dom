/* Using DOM in contents. */

const classes = document.getElementsByClassName('donate-btn');
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

// First button content.

const donateBtn1 = document.getElementById('donate-btn1');
donateBtn1.addEventListener('click', function(){
    const firstField = inputValue('first-donation-field');
    if(typeof firstField === 'number' && firstField > 0){
        const totalDonate = textValue('total-donate1');
        
        const total = firstField + totalDonate;
        
        document.getElementById('total-donate1').innerText = total;
        document.getElementById('first-donation-field').value = '';
        
        const remainingBalance = mainBalance - total;
        
        if(mainBalance <= total){
            alert('You do not have sufficient Balance!');
            return;
            }

        document.getElementById('main-balance').innerText = remainingBalance;

       const firstTransaction = document.getElementById('first-transaction').innerText;

          const div = document.createElement('div');
           div.className = "w-4/5 mx-auto space-y-4 border border-gray-300 p-6 rounded-lg"
    
    div.innerHTML = `
    <h3 class="text-xl font-bold">${firstField} Taka is ${firstTransaction}</h3>
    <p class="text-sm font-medium text-gray-500">Date: ${new Date()}</p>
    `;

    const historySection = document.getElementById('history-section');
    historySection.insertBefore(div, historySection.firstChild);
}

    else{
        alert('Invalid Amount!');
    }
});

// Second button content.

const donateBtn2 = document.getElementById('donate-btn2');
donateBtn2.addEventListener('click', function(){
    const secondField = inputValue('second-donation-field');
    if(typeof secondField === 'number' && secondField > 0){
        const totalDonate = textValue('total-donate2');
    
        const total = secondField + totalDonate;
        
        document.getElementById('total-donate2').innerText = total;
        document.getElementById('second-donation-field').value = '';
        
        const totalDonate1 = textValue('total-donate1');
        const remainingBalance = mainBalance - totalDonate1 - total;

        if(mainBalance <= total){
            alert('You do not have sufficient Balance!');
            return;
            }
    
        document.getElementById('main-balance').innerText = remainingBalance;

       const secondTransaction = document.getElementById('second-transaction').innerText;

       const historySection = document.getElementById('history-section');
          const div = document.createElement('div');
           div.className = "w-4/5 mx-auto space-y-4 border border-gray-300 p-6 rounded-lg"
    
    div.innerHTML = `
    <h3 class="text-xl font-bold">${secondField} Taka is ${secondTransaction}</h3>
    <p class="text-sm font-medium text-gray-500">Date: ${new Date()}</p>
    `;

    historySection.insertBefore(div, historySection.firstChild);
    }

    else{
        alert('Invalid Amount!');
    }
});

// Third button content.

const donateBtn3 = document.getElementById('donate-btn3');
donateBtn3.addEventListener('click', function(){
    const thirdField = inputValue('third-donation-field');
    if(typeof thirdField === 'number' && thirdField > 0){
        const totalDonate = textValue('total-donate3');
    
        const total = thirdField + totalDonate;
        
        document.getElementById('total-donate3').innerText = total;
        document.getElementById('third-donation-field').value = '';

        const totalDonate1 = textValue('total-donate1');
        const totalDonate2 = textValue('total-donate2');
        const remainingBalance = mainBalance - totalDonate1 - totalDonate2 - total;

        if(mainBalance <= total){
        alert('You do not have sufficient Balance!');
        return;
        }

        document.getElementById('main-balance').innerText = remainingBalance;

       const thirdTransaction = document.getElementById('third-transaction').innerText;

          const div = document.createElement('div');
          div.className = "w-4/5 mx-auto space-y-4 border border-gray-300 p-6 rounded-lg"
    
    div.innerHTML = `
    <h3 class="text-xl font-bold">${thirdField} Taka is Donated for ${thirdTransaction}</h3>
    <p class="text-sm font-medium text-gray-500">Date: ${new Date()}</p>
    `;

    const historySection = document.getElementById('history-section');
    // historySection.appendChild(div);
    historySection.insertBefore(div, historySection.firstChild);
}

    else{
        alert('Invalid Amount!');
    }
});

// History button content.

const historyBtn = document.getElementById('history-btn');

historyBtn.addEventListener('click', function(){
    this.className = "btn text-base bg-lime-400 font-medium px-6";
    this.classList.remove("text-gray-600");

    const donateBtn = document.getElementById('donate-btn');
    donateBtn.classList.add("text-black");
    donateBtn.classList.remove("bg-lime-400");

    const donationSections = document.getElementById('donation-sections');
    donationSections.classList.add('hidden');

    const historySection = document.getElementById('history-section');
    historySection.classList.remove('hidden');
});

// Donate button content.

const donateBtn = document.getElementById('donate-btn');

donateBtn.addEventListener('click', function(){
    this.className = "btn text-base bg-lime-400 font-medium px-6";
    this.classList.remove("text-blackPrimary");
    const historyBtn = document.getElementById('history-btn');
    historyBtn.classList.add("text-black");
    historyBtn.classList.remove("bg-lime-400");

    const donationSections = document.getElementById('donation-sections');
    donationSections.classList.remove('hidden');

    const historySection = document.getElementById('history-section');
    historySection.classList.add('hidden');
});

// Go to blog site.

const blogBtn = document.getElementById('blog-btn');
blogBtn.addEventListener('click', function(){
    window.location = './blog.html';
});