/*
 * MURPHY M. LOPES
 * 03/23/2024
 * navigator.js
 */
"use strict";

//dollar store jQuery.
var $ = function(id) { return document.getElementById(id); };

//app buttons
var fragmentButton = $("fragmentButton");
var ohmButton = $("ohmButton");
var hvacButton = $("hvacButton");
var toryButton = $("toryButton");

//app containers
var appFragment = $("app_fragment");
var appOhmChart = $("app_ohmChart");
var appHvacTrainer = $("app_hvacTrainer");
var appTORY = $("app_TORY");

//page title
var pageTitleHeading = $("pageTitleHeading");

//Set active app.
function setActiveAppButton(activeID)
{
    //Get active app button.
    let activeAppButton = document.getElementsByClassName("activeAppButton");
    
    //Button class swap, swaps styles, change page title.
    activeAppButton[0].className = "potentialAppButton";
    $(activeID).className = "activeAppButton";
    pageTitleHeading.innerHTML = $(activeID).innerHTML;
    setActiveApp(activeID);
}

//Set active tab.
function setActiveApp(activeID)
{
    //Get active app container.
    let activeAppContainer = document.getElementsByClassName("activeAppContainer");

    //If activated app is currently inactive, activate it and deactivate last app.
    if (activeID != activeAppContainer[0].id)
    {
        activeAppContainer[0].className = "potentialAppContainer";
        switch(activeID) {
            case fragmentButton.id:
                appFragment.className = "activeAppContainer";
                break;
            case ohmButton.id:
                appOhmChart.className = "activeAppContainer";
                break;
            case hvacButton.id:
                appHvacTrainer.className = "activeAppContainer";
                break;
            case toryButton.id:
                appTORY.className = "activeAppContainer";
                break;
        }
    }
}