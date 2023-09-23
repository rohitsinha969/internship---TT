let input = document.getElementById('in'),
    result = document.getElementById('re'),
    inputType = document.getElementById('inType'),
    resultType = document.getElementById('reType'),
    inValue, reValue;

function myResult() {
    inValue = inputType.value;
    reValue = resultType.value;

    // Meter conversions
    if (inValue === 'meter' && reValue === 'kilometre') {
        result.value = Number(input.value) * 0.001;
    } else if (inValue === 'meter' && reValue === 'meter') {
        result.value = input.value;
    } else if (inValue === 'meter' && reValue === 'centimeter') {
        result.value = Number(input.value) * 100;
    } else if (inValue === 'meter' && reValue === 'millimetre') {
        result.value = Number(input.value) * 1000;
    } else if (inValue === 'meter' && reValue === 'micrometres') {
        result.value = Number(input.value) * 1000000;
    } else if (inValue === 'meter' && reValue === 'nanometres') {
        result.value = Number(input.value) * 1000000000;
    } else if (inValue === 'meter' && reValue === 'mile') {
        result.value = Number(input.value) * 0.000621371;
    } else if (inValue === 'meter' && reValue === 'yard') {
        result.value = Number(input.value) * 1.09361;
    } else if (inValue === 'meter' && reValue === 'foot') {
        result.value = Number(input.value) * 3.28084;
    } else if (inValue === 'meter' && reValue === 'inch') {
        result.value = Number(input.value) * 39.3701;
    } else if (inValue === 'meter' && reValue === 'nautical mile') {
        result.value = Number(input.value) * 0.000539957;
    }


    // Kilometre conversions
    if (inValue === 'kilometre' && reValue === 'kilometre') {
        result.value = input.value;
    } else if (inValue === 'kilometre' && reValue === 'meter') {
        result.value = Number(input.value) * 1000;
    } else if (inValue === 'kilometre' && reValue === 'centimeter') {
        result.value = Number(input.value) * 100000;
    } else if (inValue === 'kilometre' && reValue === 'millimetre') {
        result.value = Number(input.value) * 1000000;
    } else if (inValue === 'kilometre' && reValue === 'micrometres') {
        result.value = Number(input.value) * 1000000000;
    } else if (inValue === 'kilometre' && reValue === 'nanometres') {
        result.value = Number(input.value) * 1000000000000;
    } else if (inValue === 'kilometre' && reValue === 'mile') {
        result.value = Number(input.value) * 0.621371;
    } else if (inValue === 'kilometre' && reValue === 'yard') {
        result.value = Number(input.value) * 1093.61;
    } else if (inValue === 'kilometre' && reValue === 'foot') {
        result.value = Number(input.value) * 3280.84;
    } else if (inValue === 'kilometre' && reValue === 'inch') {
        result.value = Number(input.value) * 39370.1;
    } else if (inValue === 'kilometre' && reValue === 'nautical mile') {
        result.value = Number(input.value) * 0.539957;
    }


    // Centimeter conversions
    if (inValue === 'centimeter' && reValue === 'kilometre') {
        result.value = Number(input.value) * 0.00001;
    } else if (inValue === 'centimeter' && reValue === 'meter') {
        result.value = Number(input.value) * 0.01;
    } else if (inValue === 'centimeter' && reValue === 'centimeter') {
        result.value = input.value;
    } else if (inValue === 'centimeter' && reValue === 'millimetre') {
        result.value = Number(input.value) * 10;
    } else if (inValue === 'centimeter' && reValue === 'micrometres') {
        result.value = Number(input.value) * 10000;
    } else if (inValue === 'centimeter' && reValue === 'nanometres') {
        result.value = Number(input.value) * 10000000;
    } else if (inValue === 'centimeter' && reValue === 'mile') {
        result.value = Number(input.value) * 0.000006213;
    } else if (inValue === 'centimeter' && reValue === 'yard') {
        result.value = Number(input.value) * 0.0109361;
    } else if (inValue === 'centimeter' && reValue === 'foot') {
        result.value = Number(input.value) * 0.0328084;
    } else if (inValue === 'centimeter' && reValue === 'inch') {
        result.value = Number(input.value) * 0.393701;
    } else if (inValue === 'centimeter' && reValue === 'nautical mile') {
        result.value = Number(input.value) * 0.0000053996;
    }


    // Millimetre conversions
    if (inValue === 'millimetre' && reValue === 'kilometre') {
        result.value = Number(input.value) * 0.000001;
    } else if (inValue === 'millimetre' && reValue === 'meter') {
        result.value = Number(input.value) * 0.001;
    } else if (inValue === 'millimetre' && reValue === 'centimeter') {
        result.value = Number(input.value) * 0.1;
    } else if (inValue === 'millimetre' && reValue === 'millimetre') {
        result.value = input.value;
    } else if (inValue === 'millimetre' && reValue === 'micrometres') {
        result.value = Number(input.value) * 1000;
    } else if (inValue === 'millimetre' && reValue === 'nanometres') {
        result.value = Number(input.value) * 1000000;
    } else if (inValue === 'millimetre' && reValue === 'mile') {
        result.value = Number(input.value) * 6.2137e-7;
    } else if (inValue === 'millimetre' && reValue === 'yard') {
        result.value = Number(input.value) / 914.4;
    } else if (inValue === 'millimetre' && reValue === 'foot') {
        result.value = Number(input.value) * 3280.84;
    } else if (inValue === 'millimetre' && reValue === 'inch') {
        result.value = Number(input.value) * 39370.1;
    } else if (inValue === 'millimetre' && reValue === 'nautical mile') {
        result.value = Number(input.value) * 0.539957;
    }

}


input.addEventListener('keyup', myResult);
// result.addEventListener('keyup', myResult);
inputType.addEventListener('change', myResult);
resultType.addEventListener('change', myResult);

inValue = inputType.value;
reValue = resultType.value;

