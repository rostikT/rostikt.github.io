/**
 * @param {Array} data
 * @param {HTMLElement} canvas
 */
 let data = [100, 68, 20];
 let canvas = document.getElementById('canvas');
 let c = canvas.getContext('2d');
 
 c.fillStyle = "white";
 c.fillRect(0,0,500,500);
 
 let colors = ['green', "blue","orange"];
 /**
  * @param {Array} colors
  */
 //вычисляем сумму всех данных
 let total = 0;
 for(let i=0;i<data.length;i++){
 total += data[i];
 }
 //рисуем круговые данные
 let prevAngle =0;
 for(i=0;i<data.length;i++){
 //доля,представленная сегментом
 let fraction=data[i]/total;
 //вычисляем начальный угол
 let angle = prevAngle+fraction*Math.PI*2;
 //рисуем сегмент
 c.fillStyle=colors[i];
 //создаем контур
 c.beginPath();
 c.moveTo(250,250);
 c.arc(250,250,100, prevAngle,angle,false);
 c.lineTo(250,250);
 //заливаем его
 c.fill();
 //обводим
 c.strokeStyle = "black";
 c.stroke();
 //обновляем для следующей итерации цикла
 prevAngle = angle;
 }
 //тест по центру
 c.fillStyle = "black";
 c.font="24pt sans-serif";
 let text = "Посещаемость:";
 let kids = 'Дети-green,';
 let kids2= 'Подростки-blue,';
 let kids3 = 'Взрослые-orange'
 let metrics=c.measureText(text);
 let metrics1=c.measureText(kids);
 let metrics2=c.measureText(kids2);
 let metrics3=c.measureText(kids3);
 c.fillText(text,130-metrics.width/2,400);
 c.fillText(kids,370-metrics.width/2,400);
 c.fillText(kids2,550-metrics.width/2,400);
 c.fillText(kids3,800-metrics.width/2,400);