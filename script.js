const today = new Date();

document.getElementById("date").innerHTML =
today.toDateString();

document
.getElementById("readMoreBtn")
.addEventListener("click", () => {

    alert(
        "Welcome to my portfolio. Explore my projects and skills!"
    );

});
