const monthlyBtn = document.getElementById("monthlyBtn");
const yearlyBtn = document.getElementById("yearlyBtn");

const starterPrice = document.getElementById("starterPrice");
const essentialPrice = document.getElementById("essentialPrice");
const enterprisePrice = document.getElementById("enterprisePrice");

monthlyBtn.onclick = () => {
    monthlyBtn.classList.add("active");
    yearlyBtn.classList.remove("active");

    starterPrice.innerHTML = "$9.99 <span>/ month</span>";
    essentialPrice.innerHTML = "$14.99 <span>/ month</span>";
    enterprisePrice.innerHTML = "$19.99 <span>/ month</span>";
};

yearlyBtn.onclick = () => {
    yearlyBtn.classList.add("active");
    monthlyBtn.classList.remove("active");

    starterPrice.innerHTML = "$99 <span>/ year</span>";
    essentialPrice.innerHTML = "$149 <span>/ year</span>";
    enterprisePrice.innerHTML = "$199 <span>/ year</span>";
};