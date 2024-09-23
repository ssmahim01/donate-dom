// Using DOM in contents.

// Using function.

function inputValue(id){
    const convertNumber = parseFloat(document.getElementById(id).value);
    return convertNumber;
}

function showModal(id){
    const modal = document.getElementById(id);
    modal.className = "hidden";
    alert('Invalid Amount!');
}

let count = 0;
const donateBtn1 = document.getElementById('donate-btn1');

donateBtn1.addEventListener('click', function(event){
    event.preventDefault();
    const inputField = inputValue('first-donation-field');
    const totalDonate = parseFloat(document.getElementById('total-donate1').innerText);

    if(isNaN(inputField) || inputField < 0){
        showModal('first_modal');
    }
    
    count = inputField + totalDonate;

    const main_balance = parseFloat(document.getElementById('main-balance').innerText);
    const remaining_balance = main_balance - count;

    const donateFirstTransaction = document.getElementById('first-transaction');

    const div = document.createElement('div');
    div.className = "flex flex-col space-y-4 border border-gray-300 p-6";
    
    div.innerHTML = `
    <h3 class="text-xl font-bold">${inputField} Taka is ${donateFirstTransaction}</h3>
    <p class="text-sm font-medium text-gray-300">Date: ${new Date().toLocaleDateString}</p>
    `;

    const historySection = document.getElementById('history-section');
    historySection.insertBefore = (div, historySection.firstChild);
});

const historyBtn = document.getElementById('history-btn');

historyBtn.addEventListener('click', function(){
    this.className = "btn text-base bg-lime-400 text-blackPrimary font-semibold px-6";
    this.classList.remove('text-gray-600');
    const donateBtn = document.getElementById('donate-btn');
    donateBtn.classList.remove("bg-lime-400");

    const donationSections = document.getElementById('donation-sections');
    donationSections.classList.add('hidden');
});

const donateBtn = document.getElementById('donate-btn');

donateBtn.addEventListener('click', function(){
    this.className = "btn text-base bg-lime-400 text-blackPrimary font-semibold px-6";
    this.classList.remove('text-gray-600');
    const historyBtn = document.getElementById('history-btn');
    historyBtn.classList.remove("bg-lime-400");

    const donationSections = document.getElementById('donation-sections');
    donationSections.classList.remove('hidden');
});

const blogBtn = document.getElementById('blog-btn');
blogBtn.addEventListener('click', function(){
    window.location = '/blog.html';
})