/*

const edges = [
["b", "a"],
["c", "a"],
["b", "c"],
["q", "r"],
["q", "s"],
["q", "u"],
["q", "t"],

]


const graph = {
    b:[a],
    a:[b],
}

loop = > check if does not exist , then add key => push both nodes

write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.

after that you can find and node path etc.

take  care of cycle va visited technique

*/

function createGraph(edges){
    const graph = {}

    for (const edge of edge){
        const [a, b ] = edge

        if(!(a in graph)){
            graph[a] = []
        }

        if(!(b in graph)){
            graph[b]=[]
        }

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

// find a graph from start to dest-key

function hasPathRec(graph, start, dest, visited = new Set()){
    if(start === dest) return true
    
    // just 4 lines for visited

    if(visited.has(start)){
        return false
    }

    visited.add(Start())

    // rest all is good

    for (const neighbour of graph[start]){
        if(hasPathRec(graph, neighbour, dest) === true){
            return true
        }
    }

    return false

}

function finnalFunctionBudle(edges, start, dest){
    const graph = createGraph(edges)
    return hasPathRec(graph, start, dest)
}