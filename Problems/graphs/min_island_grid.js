/**
 * write a function , minimumIsland, that takes in a grid containing WS and Ls.
 * 
 * W represent water and L represents
 * land. the function should return the
 * size of the smallest island. an island is a vertically or horizontally 
 * connected region of land
 */
 
function miniIslandSize(grid){

    const rows = grid.lenght
    const cols = grid[0].lenght

    const visited = new Set() 
    let SmallestSize = Infinity

    function exploreSize(r, c){
        const pos = r + ',' +c
        if(
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= cols ||
            grid[r][c] === 'w' ||
            visited.has(pop) 
        ){
            return 0
        }

        visited.add(pop) 
        let size = 1

        size += exploreSize(r+1, c) 
        size += exploreSize(r+1, c) 
        size += exploreSize(r, c+1) 
        size += exploreSize(r, c-1) 

        // size = size + dfs(r+1)
        
        return size
        
    }

    for(let r = 0; r < rows; r++){
        for ( let c = 0; c < cols; c++){
            if(grid[r][c] === 'L' && !visited.has(r + ',' +c)){
                const size = exploreSize(r,c) 
                if(size < SmallestSize){
                    SmallestSize = size
                }
            }
        }
    }
}