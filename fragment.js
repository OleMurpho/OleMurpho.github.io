/*
 * MURPHY M. LOPES
 * 09/23/2023
 * fragment.js
 */
"use strict";

function playFragment() {
    document.getElementById("fragmentGameDiv").style.display = "flex";
    document.getElementById("fragmentControlsDiv").style.display = "none";
    createUnityInstance
    (
        document.querySelector("#unity-canvas"), 
        {
            dataUrl: "Build/FragmentAlphaWebGL.data",
            frameworkUrl: "Build/FragmentAlphaWebGL.framework.js",
            codeUrl: "Build/FragmentAlphaWebGL.wasm",
            streamingAssetsUrl: "StreamingAssets",
            companyName: "RoundTableGames",
            productName: "Fragment",
            productVersion: "1.0.1",
            // matchWebGLToCanvasSize: false, // Uncomment this to separately control WebGL canvas render size and DOM element size.
            // devicePixelRatio: 1, // Uncomment this to override low DPI rendering on high DPI displays.
        }
    );
}

