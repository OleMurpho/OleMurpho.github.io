/*
 * MURPHY M. LOPES
 * 09/17/2023
 * ohmChart.js
 */

/*
TODO 09/21/2023:
1. Create central reset/calculate button.
2. Replace 12 input boxes with 4. (1 for each, displayed on hover.)
3. Conjoin calculate functions into one.
4. After step 3, remove unnecessary cornerVar logic.
*/

"use strict";

//dollar store jQuery.
var $ = function(id) { return document.getElementById(id); };

//calculate buttons.
var calcButton0 = $("calcButton0");
var calcButton1 = $("calcButton1");
var calcButton2 = $("calcButton2");
var calcButton3 = $("calcButton3");

//chartSliceInner input boxes.
var ampBox0 = $("ampBox0");
var ampBox1 = $("ampBox1");
var ampBox2 = $("ampBox2");
var ohmBox0 = $("ohmBox0");
var ohmBox2 = $("ohmBox2");
var ohmBox3 = $("ohmBox3");
var voltBox1 = $("voltBox1");
var voltBox2 = $("voltBox2");
var voltBox3 = $("voltBox3");
var wattBox0 = $("wattBox0");
var wattBox1 = $("wattBox1");
var wattBox3 = $("wattBox3");

//input box booleans.
var ampBox0Valid = false;
var ampBox1Valid = false;
var ampBox2Valid = false;
var ohmBox0Valid = false;
var ohmBox2Valid = false;
var ohmBox3Valid = false;
var voltBox1Valid = false;
var voltBox2Valid = false;
var voltBox3Valid = false;
var wattBox0Valid = false;
var wattBox1Valid = false;
var wattBox3Valid = false;

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
var cornerVar = 4;
var validAmpBoxes = 0;
var validOhmBoxes = 0;
var validVoltBoxes = 0;
var validWattBoxes = 0;
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
    //Acquire last digit of active element id.
    cornerVar = activeID.slice(activeID.length -1);
    
    //Check current box value.
    if (!isNaN(currentValue))
    {
        //Switch between corners of the chart.
        switch (cornerVar * 1)
        {
            //Volt corner.
            case 0:
                //Switch between potential ID's.
                switch (activeID)
                {
                    case ampBox0.id:
                        ampBox0Valid = true;
                        currentAmps = currentValue;
                        break;
                    case ohmBox0.id:
                        ohmBox0Valid = true;
                        currentOhms = currentValue;
                        break;
                    case wattBox0.id:
                        wattBox0Valid = true;
                        currentWatts = currentValue;
                        break; 
                }
                //If 2/3 valid, enable button.
                if 
                (
                    ampBox0Valid && ohmBox0Valid
                    || ampBox0Valid && wattBox0Valid
                    || ohmBox0Valid && wattBox0Valid
                )
                {
                    calcButton0.disabled = false;
                }
                else
                {
                    calcButton0.disabled = true;
                }
                break;
            //Ohm corner.
            case 1:
                switch (activeID)
                {
                    case ampBox1.id:
                        ampBox1Valid = true;
                        currentAmps = currentValue;
                        break;
                    case voltBox1.id:
                        voltBox1Valid = true;
                        currentVolts = currentValue;
                        break;
                    case wattBox1.id:
                        wattBox1Valid = true;
                        currentWatts = currentValue;
                        break; 
                }
                if 
                (
                    ampBox1Valid && voltBox1Valid
                    || ampBox1Valid && wattBox1Valid
                    || voltBox1Valid && wattBox1Valid
                )
                {
                    calcButton1.disabled = false;
                }
                else
                {
                    calcButton1.disabled = true;
                }
                break;
            //Watt corner.
            case 2:
                switch (activeID)
                {
                    case ampBox2.id:
                        ampBox2Valid = true;
                        currentAmps = currentValue;
                        break;
                    case ohmBox2.id:
                        ohmBox2Valid = true;
                        currentOhms = currentValue;
                        break;
                    case voltBox2.id:
                        voltBox2Valid = true;
                        currentVolts = currentValue;
                        break; 
                }
                if 
                (
                    ampBox2Valid && ohmBox2Valid
                    || ampBox2Valid && voltBox2Valid
                    || ohmBox2Valid && voltBox2Valid
                )
                {
                    calcButton2.disabled = false;
                }
                else
                {
                    calcButton2.disabled = true;
                }
                break;
            //Amp corner.
            case 3:
                switch (activeID)
                {
                    case ohmBox3.id:
                        ohmBox3Valid = true;
                        currentOhms = currentValue;
                        break;
                    case voltBox3.id:
                        voltBox3Valid = true;
                        currentVolts = currentValue;
                        break;
                    case wattBox3.id:
                        wattBox3Valid = true;
                        currentWatts = currentValue;
                        break; 
                }
                if 
                (
                    ohmBox3Valid && voltBox3Valid
                    || ohmBox3Valid && wattBox3Valid
                    || voltBox3Valid && wattBox3Valid
                )
                {
                    calcButton3.disabled = false;
                }
                else
                {
                    calcButton3.disabled = true;
                }
                break;
        }
    }
    else
    {
        //Switch between corners of the chart.
        switch (cornerVar * 1)
        {
            //Volt corner.
            case 0:
                //Switch between potential ID's.
                switch (activeID)
                {
                    case ampBox0.id:
                        ampBox0Valid = false;
                        break;
                    case ohmBox0.id:
                        ohmBox0Valid = false;
                        break;
                    case wattBox0.id:
                        wattBox0Valid = false;
                        break; 
                }
                //If 2/3 valid, enable button.
                if 
                (
                    ampBox0Valid && ohmBox0Valid
                    || ampBox0Valid && wattBox0Valid
                    || ohmBox0Valid && wattBox0Valid
                )
                {
                    calcButton0.disabled = false;
                }
                else
                {
                    calcButton0.disabled = true;
                }
                break;
            //Ohm corner.
            case 1:
                switch (activeID)
                {
                    case ampBox1.id:
                        ampBox1Valid = false;
                        break;
                    case voltBox1.id:
                        voltBox1Valid = false;
                        break;
                    case wattBox1.id:
                        wattBox1Valid = false;
                        break; 
                }
                if 
                (
                    ampBox1Valid && voltBox1Valid
                    || ampBox1Valid && wattBox1Valid
                    || voltBox1Valid && wattBox1Valid
                )
                {
                    calcButton1.disabled = false;
                }
                else
                {
                    calcButton1.disabled = true;
                }
                break;
            //Watt corner.
            case 2:
                switch (activeID)
                {
                    case ampBox2.id:
                        ampBox2Valid = false;
                        break;
                    case ohmBox2.id:
                        ohmBox2Valid = false;
                        break;
                    case voltBox2.id:
                        voltBox2Valid = false;
                        break; 
                }
                if 
                (
                    ampBox2Valid && ohmBox2Valid
                    || ampBox2Valid && voltBox2Valid
                    || ohmBox2Valid && voltBox2Valid
                )
                {
                    calcButton2.disabled = false;
                }
                else
                {
                    calcButton2.disabled = true;
                }
                break;
            //Amp corner.
            case 3:
                switch (activeID)
                {
                    case ohmBox3.id:
                        ohmBox3Valid = false;
                        break;
                    case voltBox3.id:
                        voltBox3Valid = false;
                        break;
                    case wattBox3.id:
                        wattBox3Valid = false;
                        break; 
                }
                if 
                (
                    ohmBox3Valid && voltBox3Valid
                    || ohmBox3Valid && wattBox3Valid
                    || voltBox3Valid && wattBox3Valid
                )
                {
                    calcButton3.disabled = false;
                }
                else
                {
                    calcButton3.disabled = true;
                }
                break;
        }
    }
}

//Calculate all four properties from validated values and populate Amp slices.
function calculateAmps()
{
    if (currentVolts != 0 && currentOhms != 0)
    {
        currentAmps = currentVolts / currentOhms;
        currentWatts = currentVolts * currentAmps;
    }
    else if (currentVolts != 0 && currentWatts != 0)
    {
        currentAmps = currentWatts / currentVolts;
        currentOhms = currentVolts / currentAmps;
    }
    else
    {
        currentVolts = Math.sqrt(currentWatts * currentOhms);
        currentAmps = currentWatts / currentVolts;
    }
    //Parse and round final values.
    currentAmps = parseFloat(currentAmps).toFixed(2);
    currentOhms = parseFloat(currentOhms).toFixed(2);
    currentVolts = parseFloat(currentVolts).toFixed(2);
    currentWatts = parseFloat(currentWatts).toFixed(2);
    
    //Display final values in Amp slices.
    bigAmp.innerHTML = currentAmps;
    ampSpan0E.innerHTML = currentVolts;
    ampSpan0R.innerHTML = currentOhms;
    ampSpan1P.innerHTML = currentWatts;
    ampSpan1E.innerHTML = currentVolts;
    ampSpan2P.innerHTML = currentWatts;
    ampSpan2R.innerHTML = currentOhms;

    //Wipe old data.
    currentAmps = 0;
    currentOhms = 0;
    currentVolts = 0;
    currentWatts = 0;
    calcButton3.disabled = true;
    ohmBox3.value = "";
    voltBox3.value = "";
    wattBox3.value = "";
}

//Calculate all four properties from validated values and populate Ohm slices.
function calculateOhms()
{
    if (currentAmps != 0 && currentWatts != 0)
    {
        currentVolts = currentWatts / currentAmps;
        currentOhms = currentVolts / currentAmps;
    }
    else if (currentAmps != 0 && currentVolts != 0)
    {
        currentWatts = currentVolts * currentAmps;
        currentOhms = currentVolts / currentAmps;
    }
    else
    {
        currentAmps = currentWatts / currentVolts;
        currentOhms = currentVolts / currentAmps;
    }
    //Parse and round final values.
    currentAmps = parseFloat(currentAmps).toFixed(2);
    currentOhms = parseFloat(currentOhms).toFixed(2);
    currentVolts = parseFloat(currentVolts).toFixed(2);
    currentWatts = parseFloat(currentWatts).toFixed(2);
    
    //Display final values in Ohm slices.
    bigOhm.innerHTML = currentOhms;
    ohmSpan0E.innerHTML = currentVolts;
    ohmSpan0I.innerHTML = currentAmps;
    ohmSpan1E.innerHTML = currentVolts;
    ohmSpan1P.innerHTML = currentWatts;
    ohmSpan2P.innerHTML = currentWatts;
    ohmSpan2I.innerHTML = currentAmps;

    //Wipe old data.
    currentAmps = 0;
    currentOhms = 0;
    currentVolts = 0;
    currentWatts = 0;
    calcButton1.disabled = true;
    ampBox1.value = "";
    wattBox1.value = "";
    voltBox1.value = "";
}

//Calculate all four properties from validated values and populate Volt slices.
function calculateVolts()
{
    if (currentAmps != 0 && currentOhms != 0)
    {
        currentVolts = currentAmps * currentOhms;
        currentWatts = currentVolts * currentAmps;
    }
    else if (currentAmps != 0 && currentWatts != 0)
    {
        currentVolts = currentWatts / currentAmps;
        currentOhms = currentVolts / currentAmps;
    }
    else
    {
        currentVolts = Math.sqrt(currentWatts * currentOhms);
        currentAmps = currentWatts / currentVolts;
    }
    //Parse and round final values.
    currentAmps = parseFloat(currentAmps).toFixed(2);
    currentOhms = parseFloat(currentOhms).toFixed(2);
    currentVolts = parseFloat(currentVolts).toFixed(2);
    currentWatts = parseFloat(currentWatts).toFixed(2);
    
    //Display final values in Volt slices.
    bigVolt.innerHTML = currentVolts;
    voltSpan0P.innerHTML = currentWatts;
    voltSpan1P.innerHTML = currentWatts;
    voltSpan0R.innerHTML = currentOhms;
    voltSpan2R.innerHTML = currentOhms;
    voltSpan1I.innerHTML = currentAmps;
    voltSpan2I.innerHTML = currentAmps;

    //Wipe old data.
    currentAmps = 0;
    currentOhms = 0;
    currentVolts = 0;
    currentWatts = 0;
    calcButton0.disabled = true;
    ampBox0.value = "";
    ohmBox0.value = "";
    wattBox0.value = "";
}

//Calculate all four properties from validated values and populate Watt slices.
function calculateWatts()
{
    if (currentAmps != 0 && currentOhms != 0)
    {
        currentVolts = currentAmps * currentOhms;
        currentWatts = currentVolts * currentAmps;
    }
    else if (currentAmps != 0 && currentVolts != 0)
    {
        currentWatts = currentVolts * currentAmps;
        currentOhms = currentVolts / currentAmps;
    }
    else
    {
        currentWatts = ((currentVolts * currentVolts)/currentOhms);
        currentAmps = currentWatts / currentVolts;
    }
    //Parse and round final values.
    currentAmps = parseFloat(currentAmps).toFixed(2);
    currentOhms = parseFloat(currentOhms).toFixed(2);
    currentVolts = parseFloat(currentVolts).toFixed(2);
    currentWatts = parseFloat(currentWatts).toFixed(2);
    
    //Display final values in Watt slices.
    bigWatt.innerHTML = currentWatts;
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
    calcButton2.disabled = true;
    ampBox2.value = "";
    ohmBox2.value = "";
    voltBox2.value = "";
}