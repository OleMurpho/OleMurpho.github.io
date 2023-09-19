/*
 * MURPHY M. LOPES
 * 09/17/2023
 * ohmChart.js
 */

"use strict";

//dollar store jQuery.
var $ = function(id) { return document.getElementById(id); };

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
var ampSpan0I = $("ampSpan0I");
var ampSpan0E = $("ampSpan0E");
var ampSpan0R = $("ampSpan0R");
var ampSpan1I = $("ampSpan1I");
var ampSpan1P = $("ampSpan1P");
var ampSpan1E = $("ampSpan1E");
var ampSpan2I = $("ampSpan2I");
var ampSpan2P = $("ampSpan2P");
var ampSpan2R = $("ampSpan2R");
var ohmSpan0R = $("ohmSpan0R");
var ohmSpan0E = $("ohmSpan0E");
var ohmSpan0I = $("ohmSpan0I");
var ohmSpan1R = $("ohmSpan1R");
var ohmSpan1E = $("ohmSpan1E");
var ohmSpan1P = $("ohmSpan1P");
var ohmSpan2R = $("ohmSpan2R");
var ohmSpan2P = $("ohmSpan2P");
var ohmSpan2I = $("ohmSpan2I");
var voltSpan0E = $("voltSpan0E");
var voltSpan0P = $("voltSpan0P");
var voltSpan0R = $("voltSpan0R");
var voltSpan1E = $("voltSpan1E");
var voltSpan1P = $("voltSpan1P");
var voltSpan1I = $("voltSpan1I");
var voltSpan2E = $("voltSpan2E");
var voltSpan2I = $("voltSpan2I");
var voltSpan2R = $("voltSpan2R");
var wattSpan0P = $("wattSpan0P");
var wattSpan0E = $("wattSpan0E");
var wattSpan0R = $("wattSpan0R");
var wattSpan1P = $("wattSpan1P");
var wattSpan1I = $("wattSpan1I");
var wattSpan1R = $("wattSpan1R");
var wattSpan2P = $("wattSpan2P");
var wattSpan2E = $("wattSpan2E");
var wattSpan2I = $("wattSpan2I");

//global variables.
var cornerVar = 5;
var validAmpBoxes = 0;
var validOhmBoxes = 0;
var validVoltBoxes = 0;
var validWattBoxes = 0;
var currentAmps;
var currentOhms;
var currentVolts;
var currentWatts;

//validateToEnable.
function validateToEnable()
{
    //Acquire last digit of active element id.
    var activeID = document.activeElement.id;
    cornerVar = activeID.slice(activeID.length -1);
    
    //Check current box value.
    var currentValue = $(activeID).value;
    if (currentValue.length > 0 && !isNaN(currentValue))
    {
        switch (cornerVar * 1)
        {
            case 0:
                switch (activeID)
                {
                    case "ampBox0":
                        ampBox0Valid = true;
                        break;
                    case "ohmBox0":
                        ohmBox0Valid = true;
                        break;
                    case "wattBox0":
                        wattBox0Valid = true;
                        break; 
                }
                break;
            case 1:
                validOhmBoxes++;
                break;
            case 2:
                validWattBoxes++;
                break;
            case 3:
                validAmpBoxes++;
                break;
        }
    }
    if (validVoltBoxes > 1)
    {
        $("calcButton0").disabled = false;
    }
    if (validOhmBoxes > 1)
    {
        $("calcButton1").disabled = false;
    }
    if (validWattBoxes > 1)
    {
        $("calcButton2").disabled = false;
    }
    if (validAmpBoxes > 1)
    {
        $("calcButton3").disabled = false;
    }
}