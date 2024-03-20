// Your list of apps goes below
let apps = [
    { slug: "lucas-de-poap-studio-1", id: "gsv3QyAnHMNtgKQNBIeP" },
    { slug: "wow-gala-1", id: "XTngDxIgtm0f1PrSIbb4" },
    { slug: "rug-radio-1", id: "AiO3rk2BPaD3xxlbaEIk" }
];
// Your list of apps goes above

let currentSlug = window.location.pathname.split("/")[3] || "";
let currentApp = apps.find(o => o.slug === currentSlug) || apps[0];
let appId = currentApp.id;

// Creating the service worker script content
let serviceWorkerContent = `importScripts("https://progressier.app/${appId}/sw.js");`;

// Creating the service worker file
let serviceWorkerBlob = new Blob([serviceWorkerContent], { type: "text/javascript" });
let serviceWorkerUrl = URL.createObjectURL(serviceWorkerBlob);

// Creating a link element to add the service worker file to the root directory
let serviceWorkerLink = document.createElement("a");
serviceWorkerLink.href = serviceWorkerUrl;
serviceWorkerLink.download = "progressier.js";

// Appending the link element to the body to trigger the download
document.body.appendChild(serviceWorkerLink);
serviceWorkerLink.click();
document.body.removeChild(serviceWorkerLink);

// Now, adding the script tag to load the main script
let script = document.createElement("script");
let scriptUrl = `https://progressier.app/${appId}/script.js`;
script.setAttribute("src", scriptUrl);
document.querySelector('body').appendChild(script);
