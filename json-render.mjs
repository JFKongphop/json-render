import { example } from "./example_2.mjs";
 
function iterate(obj, indent = 0) {
  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (typeof obj[property] == "object" && !Array.isArray(obj[property])) {
        console.log("  ".repeat(indent) + property + ": {");
        iterate(obj[property], indent + 1);
        console.log("  ".repeat(indent) + "}");
      } else if (Array.isArray(obj[property])) {
        console.log("  ".repeat(indent) + property + ": [");
        obj[property].forEach(item => {
          console.log("  ".repeat(indent + 1) + JSON.stringify(item) + ",");
        });
        console.log("  ".repeat(indent) + "]");
      } else {
        console.log("  ".repeat(indent) + property + ": " + JSON.stringify(obj[property]) + ",");
      }
    }
  }
}

iterate(example);