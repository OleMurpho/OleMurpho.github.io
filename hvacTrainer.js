/*
 * MURPHY M. LOPES
 * 02/17/2024
 * hvacTrainer.js
 */
"use strict";

//dollar store jQuery.
var $ = function(id) { return document.getElementById(id); };

//layer 2
var hvacTrainerDiv = $("hvacTrainer");

//layer 3
var dropdownContainerDiv = $("dropdownContainer");
var workingContainerDiv = $("workingContainer");

//layer 4
var controlContainerDiv = $("controlContainer");
var equipmentContainerDiv = $("equipmentContainer");

//layer 5
var controlTabContainerDiv = $("controlTabContainer");
var controlTabPotentialDiv0 = $("controlTabPotential0");
var controlTabPotentialDiv1 = $("controlTabPotential1");
var controlTabPotentialDiv2 = $("controlTabPotential2");
var controlTabPotentialDiv3 = $("controlTabPotential3");
var equipmentTabContainerDiv = $("equipmentTabContainer");
var equipmentTabPotentialDiv0 = $("equipmentTabPotential0");
var equipmentTabPotentialDiv1 = $("equipmentTabPotential1");
var equipmentTabPotentialDiv2 = $("equipmentTabPotential2");

//layer 6
var thermostatButton01 = $("thermostatButton01");
var thermostatButton02 = $("thermostatButton02");
var thermostatButton03 = $("thermostatButton03");
var zoneButton = $("zoneButton");
var airHandlerButton = $("airHandlerButton");
var condenserButton = $("condenserButton");
var documentationButton = $("documentationButton");

//Set active button.
function setActiveButton(activeID)
{
    //Get active element and active buttons.
    let activeControlButton = document.getElementsByClassName("controlButtonActive");
    let activeEquipmentButton = document.getElementsByClassName("equipmentButtonActive");
    
    //If the active element is a control button, change control button.
    if (controlTabContainerDiv.contains($(activeID)))
    {
        $(activeControlButton[0].id).style.height = "70px";
        $(activeControlButton[0].id).style.padding = "10px 12px";
        activeControlButton[0].className = "tabButtons";
        $(activeID).className = "controlButtonActive";
    }
    //Else, the active element is an equipment button, so change it.
    else
    {
        $(activeEquipmentButton[0].id).style.height = "70px";
        $(activeEquipmentButton[0].id).style.padding = "10px 12px";
        activeEquipmentButton[0].className = "tabButtons";
        $(activeID).className = "equipmentButtonActive";
    }
    $(activeID).style.height = "80px";
    $(activeID).style.padding = "16px 18px";
    setActiveTab(activeID);
}

//Set active tab.
function setActiveTab(activeID)
{
    //Get active tabs.
    let activeControlTab = document.getElementsByClassName("controlTabActive");
    let activeEquipmentTab = document.getElementsByClassName("equipmentTabActive");

    //If activated tab is currently inactive, activate it.
    if (activeID != activeControlTab[0].id && activeID != activeEquipmentTab[0].id)
    {
        switch (activeID)
        {
            case thermostatButton01.id:
                controlTabPotentialDiv0.style.display = "block";
                activeControlTab[0].style.display = "none";
                activeControlTab[0].className = "potentialTab";
                controlTabPotentialDiv0.className = "controlTabActive";
                controlContainerDiv.style.backgroundImage = "linear-gradient(#D5E8D4, #82B366)";
                break;
            case thermostatButton02.id:
                controlTabPotentialDiv1.style.display = "block";
                activeControlTab[0].style.display = "none";
                activeControlTab[0].className = "potentialTab";
                controlTabPotentialDiv1.className = "controlTabActive";
                controlContainerDiv.style.backgroundImage = "linear-gradient(#D5E8D4, #82B366)";
                break;
            case thermostatButton03.id:
                controlTabPotentialDiv2.style.display = "block";
                activeControlTab[0].style.display = "none";
                activeControlTab[0].className = "potentialTab";
                controlTabPotentialDiv2.className = "controlTabActive";
                controlContainerDiv.style.backgroundImage = "linear-gradient(#D5E8D4, #82B366)";
                break;
            case zoneButton.id:
                controlTabPotentialDiv3.style.display = "block";
                activeControlTab[0].style.display = "none";
                activeControlTab[0].className = "potentialTab";
                controlTabPotentialDiv3.className = "controlTabActive";
                controlContainerDiv.style.backgroundImage = "linear-gradient(#FFF2CC, #D6B656)";
                break;
            case airHandlerButton.id:
                equipmentTabPotentialDiv0.style.display = "block";
                activeEquipmentTab[0].style.display = "none";
                activeEquipmentTab[0].className = "potentialTab";
                equipmentTabPotentialDiv0.className = "equipmentTabActive";
                equipmentContainerDiv.style.backgroundImage = "linear-gradient(#FFE6CC, #D79B00)";
                break;
            case condenserButton.id:
                equipmentTabPotentialDiv1.style.display = "block";
                activeEquipmentTab[0].style.display = "none";
                activeEquipmentTab[0].className = "potentialTab";
                equipmentTabPotentialDiv1.className = "equipmentTabActive";
                equipmentContainerDiv.style.backgroundImage = "linear-gradient(#E1D5E7, #9673A6)";
                break;
            case documentationButton.id:
                equipmentTabPotentialDiv2.style.display = "block";
                activeEquipmentTab[0].style.display = "none";
                activeEquipmentTab[0].className = "potentialTab";
                equipmentTabPotentialDiv2.className = "equipmentTabActive";
                equipmentContainerDiv.style.backgroundImage = "linear-gradient(#DAE8FC, #00CCCC)";
                break;
        }
    }
}