/*
 * MURPHY M. LOPES
 * 03/23/2024
 * navigator.js
 * 2026-10-13: tabs reduced to Games (Fragment) and Tools (Ohm Chart).
 */
"use strict";

//dollar store jQuery.
var $ = function(id) { return document.getElementById(id); };

//app buttons
var gamesButton = $("gamesButton");
var toolsButton = $("toolsButton");

//app containers
var appGames = $("app_games");
var appTools = $("app_tools");

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
            case gamesButton.id:
                appGames.className = "activeAppContainer";
                break;
            case toolsButton.id:
                appTools.className = "activeAppContainer";
                break;
        }
    }
}
