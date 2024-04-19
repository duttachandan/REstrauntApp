const MainBtns = document.querySelector(".Main_btn");
const Hamberger = document.querySelector(".hamberger");
const signUpbtn = document.querySelector(".signup_btn")
Hamberger.addEventListener("click", () => {
    if (MainBtns.style.display == "none") {
        MainBtns.style.display = "block"
        signUpbtn.style.display = "block"
    } else {
        MainBtns.style.display = "none";
        signUpbtn.style.display = "none";
    }

})