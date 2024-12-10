function cyberReindeer(road, time) {
    let moves = [road]
    let a = 0
    let b = "."
  
    for (let i = 1; i < time; i++) {
      if (i == 5) road = road.replace(/\|/g, "*")
      const newRoad = road.replace(/S[\.\*]/, `${b}S`)
      if (newRoad != road) {
        a++
        b = road[a]
      }
      road = newRoad
      moves.push(road)
    }
  
    return moves;
}

let road = 'S..|...|..';
const time = 10; 
console.log(cyberReindeer(road, time));
console.log(cyberReindeer('S.|..|...|..', 12));

