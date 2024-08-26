const canvas = document.getElementById("canvas")
const width =700
canvas.width = width
const w = 5
canvas.height = width
canvas.style.background = "black"
const context = canvas.getContext("2d")
let ans = 0
let f = 0
function empty_grid(k){
    let matrix = [];
    for (let i = 0; i < k; i++) {
        let row = [];
        for (let j = 0; j < k; j++) {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
}
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
function grid_randamither(g){
    let k = g.length;
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < k; j++) {
            g[i][j] =Math.floor(Math.random() *2)

        }
    }
    return g
}

function draw_cell(g){
    let x = 0
    for (let i = 0;i <(width/w);i++){
        // console.log(i)
        let y = 0
        for (let j = 0;j < width/w;j++){
            if (g[i][j] == 0){
                context.fillStyle = "black"
            }if(g[i][j] == 1){
                context.fillStyle = "white"
                // context.fillStyle = getRandomColor()
    
            }
            context.fillRect(x,y,w,w)

            y += w + 1
        }
        x += w + 1
    }
}

function check_grid(grid,x,y){
    let res = 0
    let len = grid.length
    for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
            
            
            if (grid[i+x][j+y] === 1){
                // console.log(i+x,j+y)
                if(i === 0 && j === 0){
                    res -= 1
                }
                res += 1
            }
        }
    }
    
    return res
}

function rewrite_cell(){
    f = d.slice()
    let t = empty_grid(width/w)
    for (let i = 1; i < f.length-3; i++) {
        for (let j = 1; j < f.length-3; j++) {
            ans = check_grid(f,i,j)
            
            // console.log(f)
            if (f[i][j] == 1){
                if (ans == 1){
                    t[i][j] = 0
                }
                else if (ans >= 4){
                    t[i][j] = 0
                }
                
                else if (ans == 2){
                    t[i][j] = 1
                }
                else if (ans == 3){
                    t[i][j] = 1
                }
                
            }else{
                if (ans == 3){
                    t[i][j] = 1
                }
            }
           
        }
    }
    
    d = t.slice()

    draw_cell(d)

}
let d = grid_randamither(empty_grid(width/w))
// console.log(d)
d[20][20] = 1
d[20][21] = 1
d[20][22] = 1
// d[21][21] = 1

draw_cell(d)
setInterval(rewrite_cell,100)
// rewrite_cell()
