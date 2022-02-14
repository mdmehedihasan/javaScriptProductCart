function value_plus_minus(isPlus, price, product) {

    const value_up_down_text = document.getElementById(product + '_increase_decrease_value');
    let value_up_down_number = parseInt(value_up_down_text.value);
    if (isPlus == true) {
        value_up_down_number = value_up_down_number + 1;
    }
    if (isPlus == false) {
        if (value_up_down_number > 1) {
            value_up_down_number = value_up_down_number - 1;
        }
    }
    // total value show
    value_up_down_text.value = value_up_down_number;
    const product_total_text = document.getElementById(product + '_total');
    const product_sur_total = value_up_down_number * price;
    product_total_text.innerText = product_sur_total;

    total_value();


}

function total_value() {
    const case_product_quantity = document.getElementById('case_increase_decrease_value').value;
    const case_product_value = parseInt(case_product_quantity) * 59;

    const phone_product_quantity = document.getElementById('phone_increase_decrease_value').value;
    const phone_product_value = parseInt(phone_product_quantity) * 1219;
    let sub_total = case_product_value + phone_product_value;
    const tax = sub_total / 10;
    const total = sub_total + tax;
    document.getElementById('subtotal').innerText = sub_total;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
    // show on lower part


    // const tax_value = document.getElementById('tax').innerText;
    // let tax = parseFloat(tax_value);

    // let subtotal_value = document.getElementById('subtotal').innerText;
    // let subtotal = parseInt(subtotal_value);

    // const total_value = document.getElementById('total').innerText;
    // let total = parseFloat(total_value);

    // tax = subtotal / 10;
    // total = subtotal + tax;
    // total.innerText = total;
}


//case product plus button select
document.getElementById('case_button_plus').addEventListener('click', function () {
    value_plus_minus(true, 59, 'case');
})

//case product minus button select
document.getElementById('case_button_minus').addEventListener('click', function () {
    value_plus_minus(false, 59, 'case');
});


// phone product plus button select
document.getElementById('phone_button_plus').addEventListener('click', function () {
    value_plus_minus(true, 1219, 'phone');
})

//phone product minus button select
document.getElementById('phone_button_minus').addEventListener('click', function () {
    value_plus_minus(false, 1219, 'phone');
});


