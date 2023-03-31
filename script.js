var input = document.getElementById('input');
var output = document.getElementById('output');
var input_type = document.getElementById('input-type');
var output_type = document.getElementById('output-type');
var input_type_value, output_type_value;

input.addEventListener("keyup", myresult);
input_type.addEventListener("change", myresult);
output_type.addEventListener("change", myresult);

input_type_value = input_type.value;
output_type_value = output_type.value;



function myresult() {

    input_type_value = input_type.value;
    output_type_value = output_type.value;

    if (input_type_value == "meter" && output_type_value == "kilometer") {
        output.value = Number(input.value) * 0.001;
    } else if (input_type_value == "meter" && output_type_value == "centimeter") {
        output.value = Number(input.value) * 100;
    } else if (input_type_value == "meter" && output_type_value == "meter") {
        output.value = input.value;
    }

    if (input_type_value == "kilometer" && output_type_value == "meter") {
        output.value = Number(input.value) * 1000;
    } else if (input_type_value == "kilometer" && output_type_value == "centimeter") {
        output.value = Number(input.value) * 10000;
    } else if (input_type_value == "kilometer" && output_type_value == "kilometer") {
        output.value = input.value;
    }

    if (input_type_value == "centimeter" && output_type_value == "kilometer") {
        output.value = Number(input.value) * 0.00001;
    } else if (input_type_value == "centimeter" && output_type_value == "meter") {
        output.value = Number(input.value) * 0.01;
    } else if (input_type_value == "centimeter" && output_type_value == "centimeter") {
        output.value = input.value;
    }


    if (input_type_value == "celsius" && output_type_value == "fahrenheit") {

        output.value = Number(input.value * 9 / 5) + 32;
    }
    else if (input_type_value == "celsius" && output_type_value == "kelvin") {

        output.value = Number(input.value) + 273.15;
    }

    else if (input_type_value == "celsius" && output_type_value == "celsius") {
        output.value = input.value;
    }

    if (input_type_value == "fahrenheit" && output_type_value == "celsius") {

        output.value = Number(input.value - 32) * 5 / 9;
    }
    else if (input_type_value == "fahrenheit" && output_type_value == "kelvin") {

        output.value = Number(input.value - 32) * 5 / 9 + 273.15;
    }

    else if (input_type_value == "fahrenheit" && output_type_value == "fahrenheit") {
        output.value = input.value;
    }

    if (input_type_value == "kelvin" && output_type_value == "celsius") {

        output.value = Number(input.value) - 273.15;
    }
    else if (input_type_value == "kelvin" && output_type_value == "fahrenheit") {

        output.value = Number(input.value - 273.15) * 9 / 5 + 32;
    }

    else if (input_type_value == "kelvin" && output_type_value == "kelvin") {
        output.value = input.value;
    }

    if (input_type_value == "milliliter" && output_type_value == "centiliter") {

        output.value = Number(input.value)*0.1;
    }
    else if (input_type_value == "milliliter" && output_type_value == "deciliter") {

        output.value = Number(input.value)*0.01;
    }

    else if (input_type_value == "milliliter" && output_type_value == "milliliter") {
        output.value = input.value;
    }

    if (input_type_value == "centiliter" && output_type_value == "milliliter") {

        output.value = Number(input.value)*10;
    }
    else if (input_type_value == "centiliter" && output_type_value == "deciliter") {

        output.value = Number(input.value)*0.1;
    }

    else if (input_type_value == "centiliter" && output_type_value == "centiliter") {
        output.value = input.value;
    }


    if (input_type_value == "deciliter" && output_type_value == "centiliter") {

        output.value = Number(input.value) * 10;
    }
    else if (input_type_value == "deciliter" && output_type_value == "milliliter") {

        output.value = Number(input.value)*100;
    }

    else if (input_type_value == "deciliter" && output_type_value == "deciliter") {
        output.value = input.value;
    }
    
}




