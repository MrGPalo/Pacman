// Your CODE goes here
let level = [
  "WWWWWWWWWWWWWWWWWWWWWWWWWWWW",
  "W*...........WW...........*W",
  "W.WWWWW.WWWW.WW.WWWW.WWWWW.W",
  "W.WWWWW.WWWW.WW.WWWW.WWWWW.W",
  "W.WW....WWWW.WW.WWWW....WW.W",
  "W.WW.WW.WWWW....WWWW.WW.WW.W",
  "W.WW.WW.WWWW.WW.WWWW.WW.WW.W",
  "W.WW.WW.WWWW.WW.WWWW.WW.WW.W",
  "W....WW......WW......WW....W",
  "W.WWWWWWW.WWWWWWWW.WWWWWWW.W",
  "W.WWWWWWW.WWWWWWWW.WWWWWWW.W",
  "W..........................W",
  "W.WWWW.WW.WWW--WWW.WW.WWWW.W",
  "W.WWWW.WW.W------W.WW.WWWW.W",
  "W.WW...WW.W------W.WW...WW.W",
  "W.WW.WWWW.W------W.WWWW.WW.W",
  "W.WW.WWWW.WWWWWWWW.WWWW.WW.W",
  "W.....*..............*.....W",
  "WWWWWW.WWWWW.WW.WWWWW.WWWWWW",
  "WWWWWW.WWWWW.WW.WWWWW.WWWWWW",
  "....WW.WW....WW....WW.WW....",
  "WWW.WW.WW.WWWWWWWW.WW.WW.WWW",
  "WWW.WW.WW.WWWWWWWW.WW.WW.WWW",
  "W...WW.WW..........WW.WW...W",
  "W.WWWW.WW.WWWWWWWW.WW.WWWW.W",
  "W.WWWW.WW.WWWWWWWW.WW.WWWW.W",
  "W......WW....WW....WW......W",
  "W.WWWWWWWWWW.WW.WWWWWWWWWW.W",
  "W.WWWWWWWWWW.WW.WWWWWWWWWW.W",
  "W*...........WW...........*W",
  "WWWWWWWWWWWWWWWWWWWWWWWWWWWW",
].map((f) => f.split(""));

class Map {
  constructor(position) {
    this.position = position;
  }
  update() {}
  keyboard_event() {}
  draw(delta, ctx) {
    let total_ratio = 1024 / level.length;
    let spacing = total_ratio;
    let size = total_ratio;
    ctx.save();
    ctx.translate(50, 0);
    for (let x = 0; x < level.length; x++) {
      for (let y = 0; y < level[x].length; y++) {
        ctx.beginPath();

        if (level[x][y] == "W") {
          ctx.fillStyle = "#EBA578";
          ctx.rect(y * spacing, x * spacing, size, size);
        }

         if (level[x][y] == "-") {
           ctx.fillStyle = "#EB877D";
           ctx.rect(y * spacing, x * spacing, size, size);
         }

        if (level[x][y] == ".") {
          ctx.fillStyle = "#04974E";
          ctx.arc(
            y * spacing + size / 2,
            x * spacing + size / 2,
            5,
            0,
            2 * Math.PI
          );
        }

        if (level[x][y] == "*") {
          ctx.fillStyle = "#415FD8";
          ctx.arc(
            y * spacing + size / 2,
            x * spacing + size / 2,
            5,
            0,
            2 * Math.PI
          );
        }

        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    }
    ctx.restore();
  }
}
