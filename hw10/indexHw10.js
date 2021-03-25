function getRandomColor() {
    let color = '';
    for (let i = 0; i < 6; i++) {
        color += (Math.random() * 16 | 0).toString(16);
    }
    return '#' + color;
}

document.getElementById("squaresButton").onclick = function generateBlocks() {
    const squares = document.getElementById("squares");
    squares.style.cssText = `height: 250px; width: 250px; display: flex; flex-wrap: wrap`;
    squares.setAttribute("id", "square_container");

    for (let i = 1; i <= 25; i++) {
        const square = document.createElement("div");
        square.style.cssText = `height: 50px; width: 50px; display: inline-block`;
        square.style.backgroundColor = getRandomColor();
        squares.append(square);
    }
}

console.log(generateBlocks())


function resetPage() {
    document.location.reload();
}