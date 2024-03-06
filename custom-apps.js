//your list of apps goes below
let apps = [    
  {slug: "lucas-de-poap-studio-1", id: "gsv3QyAnHMNtgKQNBIeP"},    
  {slug: "mahou-experience-1", id: "uvQShCUSJLFwsOjiq55t"}   
];   
//your list of apps goes above
let currentSlug = window.location.pathname.split("/")[4] || ""; 
let currentApp = apps.find(o => o.slug === currentSlug) || apps[0];   
let appId = currentApp.id;   
let script = document.createElement("script");   
let scriptUrl = "https://progressier.app/"+appId+"/script.js";   
script.setAttribute("src", scriptUrl);   
document.querySelector('body').appendChild(script);
