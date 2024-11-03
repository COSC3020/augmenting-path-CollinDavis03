function augmentingPath(graph, start, end) {
    //Handle where start and end nodes are the same 
    if (start === end) {
        return [start]; 
    }
    
    //Queue DFS and a mao to keep track of paths 
    let queue = [start];
    let visited = new Set(); 
    let parenMap = {}; 

    //Start DFS 
    while (queue > 0){
        let current = queue.shift();

        //mark current node visited 
        visited.add(current);
        
        //Iterate over the neighbors of the current nodes 
        for (let neighbor in graph[current]) {
            //Check if the neighbor is not visited 
            if (!visited.has(neighbor) && graph[current][neighbor] > 0) {
                //Record the path 
                parenMap[neighor] = current; 

                 // Reach end build path and return 
                if (neighbor === end) {
                    let path = [end]; 
                    let step = end; 

                    while (step !== start) { 
                        step = parenMap[step];
                        path.unshift(step);
                    }
                    return path; 
                }
                // add the neighbor to queue
                queue.push(neighbor);
                visited.add(neighbor);
            }
        }
    }

    //if not path found return it
    return [];
}
