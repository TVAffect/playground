function clicky() {
    alert("здрасте это кнопка");
};

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("yo");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const formData = new FormData(form);
        const selV1 = formData.get("num1");
        const selV2 = formData.get("num2");
        
        if (selV1) {
            console.log("выбрано в 1:", selV1);
        } else {
            console.log("в 1 ничего не выбрано");
        }

        if (selV2) {
            console.log("выбрано в 2:", selV2);
        } else {
            console.log("в 2 ничего не выбрано");
        }

        const sumNum = Number(selV1)+Number(selV2);
        const averageNum = sumNum/2;
        console.log(averageNum);

        document.querySelector("#display").innerHTML=averageNum
    });
});
