const adminload = document.getElementById ('loadadmin');

adminload.addEventListener ('click', () => {
    let code = prompt ("Pour accéder à cette page vous devez entrer le code secret");
    if (code == '2020') {
        location.href = "admin.html";
    } else {
        alert ("mauvais code");
    }
});