(() => {

    console.log("starting");

    const heightContainer = document.getElementById('height');
    const widthContainer = document.getElementById('width');
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    let height = window.innerHeight;
    let width = window.innerWidth;

    context.fillStyle = 'blue'

    /* Color Theme Swatches in RGBA */
    let red = 'rgba(242, 5, 68, 1)';
    let darkBlue =' rgba(7, 21, 38, 1)';
    let mediumBlue = 'rgba(38, 52, 64, 1)';
    let lightBlue = 'rgba(143, 173, 191, 1)';
    let orange = 'rgba(242, 139, 48, 1)';

    let colorArr = [red, darkBlue, mediumBlue, lightBlue, orange]

    height = window.innerHeight;
    width = window.innerWidth;
    context.canvas.width = width;
    context.canvas.height = height;
    // let squareWidth = width / 5;

    let squareWidth = 100;
    let squareHeight = 100;
    let gap = 20;



    function renderSquares() {
        for (let i = 0; i < Math.floor(width / (squareWidth + gap) ); i++) {
            for (let j = 0; j < Math.floor(height / (squareHeight + gap)); j++) {
                // console.log(width, height)

                let x = 0 + (squareWidth + gap) * i;
                let y = 0 + (squareHeight + gap) * j;

                context.beginPath();
                context.rect(x, y, squareWidth, squareHeight)
                context.lineWidth = 10;
                context.stroke();
                
                if (Math.random() > .5) {
                    context.beginPath();
                    context.rect(x + 8, y + 8, squareWidth - 16, squareHeight - 16 )
                    context.stroke()
                    context.strokeStyle = colorArr[Math.floor(Math.random() * 6)]
                }
            }
        }

    }

    // atempt to create variable timing function

    function setTimer() {
        const maxDelay = 2500;
        const delay = (Math.random() * 2) * maxDelay;
        console.log(delay)
        setInterval(() => {
            for (let i = 0; i < 99999; i++) {
                window.clearInterval(i)
            }
            renderSquares()
            setTimer()
        }, delay)
    }

    setTimer()

})()