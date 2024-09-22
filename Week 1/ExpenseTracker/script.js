const expenseform = document.getElementById('expenseform');
const expenselist = document.getElementById('expenselist');

expenseform.addEventListener('submit',function(event){
    event.preventDefault();

    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    if(description && category && !isNaN(amount)){
        const newrow = document.createElement('tr');

        newrow.innerHTML = `<td>${description}</td><td>${category}</td><td>${amount}</td>`;

        expenselist.appendChild(newrow);

        expenseform.reset();
    }
    else{
        alert('Please fill all fields correctly!');
    }
});