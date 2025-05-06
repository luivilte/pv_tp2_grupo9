
let nombres = [`Juan`, `Maria`, `Pedro`, `Ana`, `Luis`];

let may;
for (let i = 0; i < nombres.length; i++) {
    if (i == 0) {
        may = nombres[i];
    } else {
        if (nombres[i].length > may.length) { 
            may = nombres[i];
        }
    }
}
console.log(`El nombre más largo es: ${may}`);