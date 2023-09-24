/*
 * MURPHY M. LOPES
 * 09/23/2023
 * fragment.js
 */
"use strict";

//dollar store jQuery.
var $ = function(id) { return document.getElementById(id); };

var fragmentPlayButton = $("fragmentPlayButton");
var fragmentControlsDiv = $("fragmentControlsDiv");
var fragmentGameDiv = $("fragmentGameDiv");

function playFragment() {
    fragmentGameDiv.style.display = "flex";
    fragmentControlsDiv.style.display = "none";
}