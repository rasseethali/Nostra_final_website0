var st_sign =document.getElementById("st_sign-up")
var sign = document.getElementById("sign-upx")

sign.addEventListener("click",function(){
    st_sign.remove()
})



const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const products = document.querySelectorAll('#product-over-image > div');

checkboxes.forEach(cb => cb.addEventListener("change", () => {
  const selected = Array.from(checkboxes).filter(c => c.checked).map(c => c.value.toLowerCase());

  products.forEach(p => {
    const title = p.querySelector("h1").textContent.toLowerCase();
    const show =
      (selected.filter(v => ["summer", "party", "beach"].includes(v)).length === 0 || selected.some(v => title.includes(v))) &&
      (selected.filter(v => ["red", "blue", "white"].includes(v)).length === 0 || selected.some(v => title.includes(v))) &&
      (
        (!selected.includes("old") && !selected.includes("new")) ||
        (selected.includes("old") && title.includes("summer")) ||
        (selected.includes("new") && (title.includes("party") || title.includes("beach")))
      );
    p.style.display = show ? "block" : "none";
  });
}));







