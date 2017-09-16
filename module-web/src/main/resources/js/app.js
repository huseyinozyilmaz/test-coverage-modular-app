var btnCalculate = document.getElementById("btnCalculate")
btnCalculate.addEventListener("click", onCalculateClick)

function onCalculateClick(e) {
    var x = parseInt(document.getElementById('x').value)
    var y = parseInt(document.getElementById('y').value)

    document.getElementById("result").value = window.calculator.add(x,y)
}