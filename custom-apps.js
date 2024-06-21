//your list of apps goes below
let apps = [    
  {slug: "lucas-de-poap-studio-1", id: "OZbbJakbL7SqXQwrmfUa"},
  {slug: "seg3-london-1", id: "SXwHU5KY2miL1ru7PBVH"},
  {slug: "nft-fest-brussels-1", id: "YqRrgpRYoUYZoyn1eKFy"}
];   
//your list of apps goes above
let currentSlug = window.location.pathname.split("/")[4] || ""; 
let currentApp = apps.find(o => o.slug === currentSlug); // removed the defaulting to apps[0]
if (currentApp) {
  let appId = currentApp.id;   
  let script = document.createElement("script");   
  let scriptUrl = "https://progressier.app/"+appId+"/script.js";   
  script.setAttribute("src", scriptUrl);   
  document.querySelector('body').appendChild(script);
