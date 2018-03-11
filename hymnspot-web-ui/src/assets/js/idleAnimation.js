$(document).ready(function () {
    canvas = document.getElementById("visualCanvas");
    canvasCtx = canvas.getContext('2d');
    barColor = '#D71B7B';
    shadowBlur = 20;
    shadowColor = '#880669';
    barWidth = 2;
    barHeight = 2;
    barSpacing = 5;

    gradient = canvasCtx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(1, barColor);
    canvasCtx.fillStyle = gradient;
    canvasCtx.shadowBlur = shadowBlur;
    canvasCtx.shadowColor = shadowColor;
    var cx = canvas.width / 2;
    var cy = canvas.height / 2;
    var radius = 140;
    var maxBarNum = Math.floor((radius * 2 * Math.PI) / (barWidth + barSpacing));
    var slicedPercent = Math.floor((maxBarNum * 25) / 100);
    var barNum = maxBarNum - slicedPercent;
    counter = 0
    maxIdleBarHeight = barNum * 6;
    idleRecorder = setInterval(function () {
        canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
        for (var i = 0; i < barNum; i++) {
            switch (i) {
                case counter - 10:
                case counter + 10:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 22);
                    break;
                case counter - 9:
                case counter + 9:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 20);
                    break;
                case counter - 8:
                case counter + 8:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 18);
                    break;
                case counter - 7:
                case counter + 7:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 16);
                    break;
                case counter - 6:
                case counter + 6:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 14);
                    break;
                case counter - 5:
                case counter + 5:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 12);
                    break;
                case counter - 4:
                case counter + 4:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 10);
                    break;
                case counter - 3:
                case counter + 3:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 8);
                    break;
                case counter - 2:
                case counter + 2:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 6);
                    break;
                case counter - 1:
                case counter + 1:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 4);
                    break;
                case counter:
                    amplitude = maxIdleBarHeight * Math.sin(Math.PI / 2);
                    break;
                default:
                    amplitude = 0;
            }
            var alfa = (i * 2 * Math.PI) / maxBarNum;
            var beta = (3 * 45 - barWidth) * Math.PI / 180;
            var x = 0;
            var y = radius - (amplitude / 12 - barHeight);
            var w = barWidth;
            var h = amplitude / 12 + barHeight;

            canvasCtx.save();
            canvasCtx.translate(cx, cy);
            canvasCtx.rotate(alfa - beta);
            canvasCtx.fillRect(x, y, w, h);
            canvasCtx.restore();
        }

        counter = counter > barNum + 10 ? -10 : counter + 1;
    }, 30);
});