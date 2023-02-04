const btn = document.querySelector("#calculate");
btn.addEventListener("click", calculateTotal)


function calculateTotal(e){
    e.preventDefault();

    const price = document.querySelector("#room").value;
    const day = document.querySelector("#day").value;
    const people = document.querySelector("#adults").value;
    const kids = document.querySelector("#children").value;
    const breakfast = document.querySelector("#breakfast").value;




    if (price === "" || day === "" || people === "")
    {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Please enter your information!',
        })
    }




    let summ = price * day;
    let breakfastWithKid = Number (people) + Number (kids);
    let breakfastAndDays = (breakfastWithKid * day) * breakfast;
    let amountAndBreakfast = summ + breakfastAndDays;
    


document.querySelector("#forRoom").textContent = summ.toFixed(2);
document.querySelector("#forBreakfast").textContent = breakfastAndDays.toFixed(2);
document.querySelector("#totalSum").textContent = amountAndBreakfast.toFixed(2);

}

