function getRandomColor(){
    var color = [
  "Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Cyan", "Magenta", "Lime",
  "Teal", "Indigo", "Aquamarine", "Gold", "Silver", "Gray", "Brown", "Maroon", "Olive", "Navy",
  "Orchid", "Peru", "Plum", "Salmon", "Sienna", "SlateBlue", "SteelBlue", "Tomato", "Turquoise", "Violet"
];
    return  color[getRandomInt(6)]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }