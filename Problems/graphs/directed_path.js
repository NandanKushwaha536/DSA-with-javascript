/**
 * give two nodes (start and dest) in a directed acyclic graph (DAG). return
 * 
 * true if there is a directed path from start to dest, otherwise return false
 * 
 * Example 1:
 * 
 * input: start -1 , dest = 3
 * 
 * output: true
 * 
 * explation: there is a directed path 
 * 
 * 1 -> 2 -> ->3
 * 
 * example 2:
 * 
 * input: start = 1, dest = 4
 * 
 * output: false
 * explation: there is no path form 1 to 4
 */

function haspathDFS(graph, start, dest){
    const stack = [ start ]

    const visited = new Set()

    while(stack.length > 0){
        const node = stack.pop()
        if(node === dest){
            return true
        }

        if(!visited.has(node)){
            visited.add(node) 
            for(const neighbour of graph[node]){
                stack.push(neighbour)
            }
        }
    }

    return false
}

function hasPathBFS(graph, start, dest){

    const queue = [start]

    const visited = new Set()

    while(queue.length > 0 ){ 
        const node = queue.shift()

        if(node === dest) return true

        if(!visited.has(node)){
            visited.add(node) 
            for(const neighbour of graph[node]){
                queue.push(neighbour)
            }
        }
    }

    return false
}

// note: we forgot to talk about visited in this video

function hasPathRec(graph, start, dest, visited = new Set()){
    if( start === dest) return true

    // just 4 lines for visited

    if(visited.has(start)){
        return false
    }

    visited.add(start)

    // rest all is good

    for(const negighbour of graph[start]){
        if(hasPathRec(graph, neighbour, dest) ===true){
            return true
        }
    }

    return false

    
}