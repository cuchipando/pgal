// Your list of apps goes below
let apps = [    
  {slug: "lucas-de-poap-studio-1", id: "OZbbJakbL7SqXQwrmfUa"},
  {slug: "seg3-london-1", id: "SXwHU5KY2miL1ru7PBVH"},
  {slug: "nft-fest-brussels-1", id: "YqRrgpRYoUYZoyn1eKFy"}
];   
// Your list of apps goes above

// Capture the current slug from the URL
let currentSlug = window.location.pathname.split("/")[4] || ""; 
console.log("Current Slug: ", currentSlug);

// Find the app that matches the current slug
let currentApp = apps.find(o => o.slug === currentSlug);
console.log("Current App: ", currentApp);

// If a matching app is found, create and append the script
if (currentApp) {
  let appId = currentApp.id;   
  let script = document.createElement("script");   
  let scriptUrl = "https://progressier.app/"+appId+"/script.js";   
  script.setAttribute("src", scriptUrl);   
  document.querySelector('body').appendChild(script);
  console.log("Script appended with URL: ", scriptUrl);
} else {
  console.log("No matching app found for the current slug.");
}
