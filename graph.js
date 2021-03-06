function creategraph(V, E) {
  // V- no of vertices in graph
  // E- set of edges in graph
  let adjency_list = [];

  for (let i = 0; i < V; i++) {
    adjency_list.push([]);
  }

  for (let i = 0; i < E.length; i++) {
    adjency_list[E[i][0]].push([E[i][1], E[i][2]]);
    adjency_list[E[i][1]].push([E[i][0], E[i][2]]);
  }
  return adjency_list;
}

function minvertex(distance, visited, V) {
  let minvertex = -1;
  for (let i = 0; i < V; i++) {
    if (
      !visited[i] &&
      (minvertex === -1 || distance[i][0] < distance[minvertex][0])
    ) {
      minvertex = i;
    }
  }
  return minvertex;
}

function djikstra(graph, V, src) {
  let visited = Array(V).fill(false);
  var distance = [];
  //making distance storing [distance,prev node]
  // initialising all distances with max value and prev node as -1
  for (let i = 0; i < V; i++) {
    distance.push([1000, -1]);
  }
  distance[src][0] = 0;

  for (let i = 0; i < V - 1; i++) {
    //find vertex with min distance
    let minVertex = minvertex(distance, visited, V);
    // console.log(minVertex);
    visited[minVertex] = true;

    //explore neighbours
    for (let j = 0; j < graph[minVertex].length; j++) {
      //getting neighbour edges
      let edge = graph[minVertex][j];
      if (
        !visited[edge[0]] &&
        distance[edge[0]][0] > distance[minVertex][0] + edge[1] &&
        distance[minVertex][0] != 1000
      ) {
        let newdist = distance[minVertex][0] + edge[1];
        distance[edge[0]][0] = newdist;
        distance[edge[0]][1] = minVertex;
      }
    }
  }

  //print distance matrix
  // for (let i = 0; i < V; i++) {
  //   console.log(i + " " + distance[i]);
  // }
  return distance;
}

// const V = 4;
// const E = [
//   [0, 1, 5],
//   [0, 2, 2],
//   [1, 2, 1],
//   [2, 3, 4],
// ];
let src = 0;
const V = 9;
const E = [
  [0, 1, 4],
  [0, 7, 8],
  [1, 7, 11],
  [1, 2, 8],
  [2, 8, 2],
  [2, 3, 7],
  [2, 5, 4],
  [3, 4, 9],
  [3, 5, 14],
  [4, 5, 10],
  [5, 6, 2],
  [6, 7, 1],
  [6, 8, 6],
  [7, 8, 7],
];
let graph = creategraph(V, E);
console.log(graph);
let distances = djikstra(graph, V, src);
// djikstra(graph, V, src);
console.log(distances);
