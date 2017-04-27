function toMilitary (time) {
  if(time.indexOf('pm') !== -1){
    timeArr = time.split(':')
    if(timeArr[0] < 12){
      timeArr[0] = Number(timeArr[0]) + 12
    }
    timeArr[1] = timeArr[1].slice(0, 2);
    timeArr = timeArr.join(':');
    
    return timeArr;

  } else if(time.indexOf('am') !== -1){
    timeArr = time.split(':')
    if(timeArr[0] === '12') timeArr[0] = '0'
    if(Number(timeArr[0]) < 10){
      timeArr[0] = '0' + timeArr[0]
    }
    timeArr[1] = timeArr[1].slice(0, 2);
    timeArr = timeArr.join(':');
    
    return timeArr;
  } else {
    timeArr = time.split(':')
    if(Number(timeArr[0]) < 10 && timeArr[0][0] !== '0'){
      timeArr[0] = '0' + timeArr[0]
    }
    timeArr[1] = timeArr[1].slice(0, 2);
    timeArr = timeArr.join(':');
    
    return timeArr;
  }
}