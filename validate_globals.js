
// Script to validate global styles
const computedStyle = getComputedStyle(document.body);
const backgroundColor = computedStyle.backgroundColor;
const color = computedStyle.color;
console.log('Background Color:', backgroundColor); // Should be rgb(0, 0, 0)
console.log('Text Color:', color); // Should be rgb(255, 255, 255)

// Check for noise overlay
const noiseOverlay = document.querySelector('body::before');
// Pseudo-elements are tricky to select directly in JS, usually visual inspection is best, 
// but we can check if the CSS rule exists in stylesheets.
let noiseRuleFound = false;
for (const sheet of document.styleSheets) {
    try {
        for (const rule of sheet.cssRules) {
            if (rule.selectorText === 'body::before' && rule.style.backgroundImage.includes('data:image/svg+xml')) {
                noiseRuleFound = true;
            }
        }
    } catch (e) { }
}
console.log('Noise Overlay Rule Found:', noiseRuleFound);
