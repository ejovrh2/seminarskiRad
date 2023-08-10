function getRandomColorLight(){
 
      colorLight = [
        "white",
        "antiquewhite",
        "blanchedalmond",
        "bisque",
        "beige",
        "cornsilk",
        "ghostwhite",
        "ivory",
        "lavender",
        "lightcoral",
        "lightcyan",
        "lightgoldenrodyellow",
        "lightgray",
        "lightpink",
        "lightsalmon",
        "lightseagreen",
        "lightskyblue",
        "lightslategray",
        "lightsteelblue",
        "lightyellow"
      ];
      

    return  colorLight[getRandomInt(20)]
}

function getRandomColorDark(){
 
  colorDark = [
    "black",
    "dimgray",
    "darkslategray",
    "midnightblue",
    "navy",
    "darkolivegreen",
    "darkgreen",
    "darkred",
    "darkmagenta",
    "darkorange",
    "darkorchid",
    "darkcyan",
    "darkblue",
    "darkviolet",
    "darkgoldenrod",
    "darkseagreen",
    "darkturquoise",
    "darkslateblue",
    "darkkhaki",
    "darkgray"
  ];
  

return  colorDark[getRandomInt(20)]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
  }