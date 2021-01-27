
function easeOutElastic(x: number) {
    const c4 = (2 * Math.PI) / 3;
  
    return x === 0
      ? 0
      : x === 1
      ? 1
      : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
} 
  

function easeOutSine(x: number) { 
   return Math.sin((x * Math.PI) / 2); 
}
  
  /*
  const texture = document.querySelectorAll('#texture-svg path');
  console.log(texture);
  for (let i = 0; i < texture.length; i++) {
    console.log(`Letter ${i} is ${texture[i].getTotalLength()}`);
  }
  */
