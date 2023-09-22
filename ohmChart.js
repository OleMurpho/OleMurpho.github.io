/*
 * MURPHY M. LOPES
 * 09/21/2023
 * ohmChart.js
 */
"use strict";

//dollar store jQuery.
var $ = function(id) { return document.getElementById(id); };

//calculate button.
var calcButton = $("calcButton");

//input boxes.
var ampBox = $("ampBox");
var ohmBox = $("ohmBox");
var voltBox = $("voltBox");
var wattBox = $("wattBox");

//input box booleans.
var ampBoxValid = false;
var ohmBoxValid = false;
var voltBoxValid = false;
var wattBoxValid = false;

//chartSliceInner paragraphs.
var bigAmp = $("bigAmp");
var bigOhm = $("bigOhm");
var bigVolt = $("bigVolt");
var bigWatt = $("bigWatt");

//chartSlice spans.
var ampSpan0E = $("ampSpan0E");
var ampSpan0R = $("ampSpan0R");
var ampSpan1P = $("ampSpan1P");
var ampSpan1E = $("ampSpan1E");
var ampSpan2P = $("ampSpan2P");
var ampSpan2R = $("ampSpan2R");
var ohmSpan0E = $("ohmSpan0E");
var ohmSpan0I = $("ohmSpan0I");
var ohmSpan1E = $("ohmSpan1E");
var ohmSpan1P = $("ohmSpan1P");
var ohmSpan2P = $("ohmSpan2P");
var ohmSpan2I = $("ohmSpan2I");
var voltSpan0P = $("voltSpan0P");
var voltSpan0R = $("voltSpan0R");
var voltSpan1P = $("voltSpan1P");
var voltSpan1I = $("voltSpan1I");
var voltSpan2I = $("voltSpan2I");
var voltSpan2R = $("voltSpan2R");
var wattSpan0E = $("wattSpan0E");
var wattSpan0R = $("wattSpan0R");
var wattSpan1I = $("wattSpan1I");
var wattSpan1R = $("wattSpan1R");
var wattSpan2E = $("wattSpan2E");
var wattSpan2I = $("wattSpan2I");

//global variables.
var clickCount = 0;
var currentAmps = 0;
var currentOhms = 0;
var currentVolts = 0;
var currentWatts = 0;

//validateToEnable.
function validateToEnable()
{
    //Get active element.
    let activeID = document.activeElement.id;
    let currentValue = document.activeElement.value;
    
    //Check current box value.
    if (currentValue != "")
    {
        //Switch between corners of the chart.
        switch (activeID)
        {
            //Volt corner.
            case voltBox.id:
                voltBoxValid = true;
                currentVolts = currentValue;
                break;
            //Ohm corner.
            case ohmBox.id:
                ohmBoxValid = true;
                currentOhms = currentValue;
                break;
            //Watt corner.
            case wattBox.id:
                wattBoxValid = true;
                currentWatts = currentValue;
                break;
            //Amp corner.
            case ampBox.id:
                ampBoxValid = true;
                currentAmps = currentValue;
                break;
        }
        //If 2/3 valid, enable button.
        if 
        (
            ampBoxValid && ohmBoxValid
            || ampBoxValid && voltBoxValid
            || ampBoxValid && wattBoxValid
            || ohmBoxValid && voltBoxValid
            || ohmBoxValid && wattBoxValid
            || voltBoxValid && wattBoxValid
        )
        {
            calcButton.disabled = false;
        }
        else
        {
            calcButton.disabled = true;
        }
    }
    else
    {
        //Switch between corners of the chart.
        switch (activeID)
        {
            //Volt corner.
            case voltBox.id:
                voltBoxValid = false;
                currentVolts = 0;
                break;
            //Ohm corner.
            case ohmBox.id:
                ohmBoxValid = false;
                currentOhms = 0;
                break;
            //Watt corner.
            case wattBox.id:
                wattBoxValid = false;
                currentWatts = 0;
                break;
            //Amp corner.
            case ampBox.id:
                ampBoxValid = false;
                currentAmps = 0;
                break;
        }
        //If 2/3 valid, enable button.
        if 
        (
            ampBoxValid && ohmBoxValid
            || ampBoxValid && voltBoxValid
            || ampBoxValid && wattBoxValid
            || ohmBoxValid && voltBoxValid
            || ohmBoxValid && wattBoxValid
            || voltBoxValid && wattBoxValid
        )
        {
            calcButton.disabled = false;
        }
        else
        {
            calcButton.disabled = true;
        }
    }
}

//Calculate all four properties from validated values and populate Amp slices.
function calculate()
{
    switch (clickCount)
    {
        case 0:
            //Amps & Ohms
            if (currentAmps != 0 && currentOhms != 0)
            {
                currentVolts = currentAmps * currentOhms;
                currentWatts = currentVolts * currentAmps;
            }
            //Amps & Volts
            else if (currentAmps != 0 && currentVolts != 0)
            {
                currentWatts = currentVolts * currentAmps;
                currentOhms = currentVolts / currentAmps;
            }
            //Amps & Watts
            else if (currentAmps != 0 && currentWatts != 0)
            {
                currentVolts = currentWatts / currentAmps;
                currentOhms = currentVolts / currentAmps;
            }
            //Ohms & Volts
            else if (currentOhmss != 0 && currentVolts != 0)
            {
                currentAmps = currentVolts / currentOhms;
                currentWatts = currentVolts * currentAmps;
            }
            //Ohms & Watts
            else if (currentOhms != 0 && currentWatts != 0)
            {
                currentVolts = Math.sqrt(currentWatts * currentOhms);
                currentAmps = currentWatts / currentVolts;
            }
            //Volts & Watts
            else if (currentVolts != 0 && currentWatts != 0)
            {
                currentAmps = currentWatts / currentVolts;
                currentOhms = currentVolts / currentAmps;
            }

            //Parse and round final values.
            currentAmps = parseFloat(currentAmps).toFixed(2);
            currentOhms = parseFloat(currentOhms).toFixed(2);
            currentVolts = parseFloat(currentVolts).toFixed(2);
            currentWatts = parseFloat(currentWatts).toFixed(2);
            
            //Display final values in slices.
            bigAmp.innerHTML = currentAmps;
            bigOhm.innerHTML = currentOhms;
            bigVolt.innerHTML = currentVolts;
            bigWatt.innerHTML = currentWatts;

            ampSpan0E.innerHTML = currentVolts;
            ampSpan0R.innerHTML = currentOhms;
            ampSpan1P.innerHTML = currentWatts;
            ampSpan1E.innerHTML = currentVolts;
            ampSpan2P.innerHTML = currentWatts;
            ampSpan2R.innerHTML = currentOhms;
            ohmSpan0E.innerHTML = currentVolts;
            ohmSpan0I.innerHTML = currentAmps;
            ohmSpan1E.innerHTML = currentVolts;
            ohmSpan1P.innerHTML = currentWatts;
            ohmSpan2P.innerHTML = currentWatts;
            ohmSpan2I.innerHTML = currentAmps;
            voltSpan0P.innerHTML = currentWatts;
            voltSpan1P.innerHTML = currentWatts;
            voltSpan0R.innerHTML = currentOhms;
            voltSpan2R.innerHTML = currentOhms;
            voltSpan1I.innerHTML = currentAmps;
            voltSpan2I.innerHTML = currentAmps;
            wattSpan0E.innerHTML = currentVolts;
            wattSpan0R.innerHTML = currentOhms;
            wattSpan1I.innerHTML = currentAmps;
            wattSpan1R.innerHTML = currentOhms;
            wattSpan2E.innerHTML = currentVolts;
            wattSpan2I.innerHTML = currentAmps;

            //Wipe old data.
            currentAmps = 0;
            currentOhms = 0;
            currentVolts = 0;
            currentWatts = 0;
            clickCount = 1;
            calcButton.value = "RESET";
            ampBox.value = "";
            ohmBox.value = "";
            voltBox.value = "";
            wattBox.value = "";
            break;
        case 1:
            clickCount = 0;
            reset();
            break;
    }
}

function reset()
{
    bigAmp.innerHTML = 'I';
    bigOhm.innerHTML = 'R';
    bigVolt.innerHTML = 'E';
    bigWatt.innerHTML = 'P';

    ampSpan0E.innerHTML = 'E';
    ampSpan0R.innerHTML = 'R';
    ampSpan1P.innerHTML = 'P';
    ampSpan1E.innerHTML = 'E';
    ampSpan2P.innerHTML = 'P';
    ampSpan2R.innerHTML = 'R';
    ohmSpan0E.innerHTML = 'E';
    ohmSpan0I.innerHTML = 'I';
    ohmSpan1E.innerHTML = 'E';
    ohmSpan1P.innerHTML = 'P';
    ohmSpan2P.innerHTML = 'P';
    ohmSpan2I.innerHTML = 'I';
    voltSpan0P.innerHTML = 'P';
    voltSpan1P.innerHTML = 'P';
    voltSpan0R.innerHTML = 'R';
    voltSpan2R.innerHTML = 'R';
    voltSpan1I.innerHTML = 'I';
    voltSpan2I.innerHTML = 'I';
    wattSpan0E.innerHTML = 'E';
    wattSpan0R.innerHTML = 'R';
    wattSpan1I.innerHTML = 'I';
    wattSpan1R.innerHTML = 'R';
    wattSpan2E.innerHTML = 'E';
    wattSpan2I.innerHTML = 'I';

    ampBoxValid = false;
    ohmBoxValid = false;
    voltBoxValid = false;
    wattBoxValid = false;
    calcButton.value = "ENTER";
    calcButton.disabled = true;
}