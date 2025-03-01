// Your list of apps goes below
let apps = [    
  {slug: "lucas-de-poap-studio-1", id: "OZbbJakbL7SqXQwrmfUa"},
  {slug: "mercedes-benz-consulting-20-1", id: "u2AkGwcEUNOVg3CjB6ZP"},
  {slug: "merge-madrid-1", id: "w7wKQFv6wdZbMX432y14"},
  {slug: "linea-1", id: "KpqJ5VTW2vZgSAozZsSK"},
  {slug: "mantle-1", id: "w2DFEQDbzRCpJd64Vdrv"}
];   
// Your list of apps goes above

try {
  // Capture the current slug dynamically based on the URL structure
  let pathParts = window.location.pathname.split("/");
  let currentSlug = pathParts.includes("collection") ? pathParts[2] : pathParts[3]; 
  console.log("Current Slug: ", currentSlug);

  // Find the app that matches the current slug
  let currentApp = apps.find(o => o.slug === currentSlug);
  console.log("Current App: ", currentApp);

  // If a matching app is found, create and append the script
  if (currentApp) {
    let appId = currentApp.id;   
    let script = document.createElement("script");   
    let scriptUrl = "https://progressier.app/" + appId + "/script.js";   
    script.setAttribute("src", scriptUrl);   
    document.querySelector('body').appendChild(script);
    console.log("Script appended with URL: ", scriptUrl);
  } else {
    console.log("No matching app found for the current slug.");
  }
} catch (error) {
  console.error("An error occurred: ", error);
}

