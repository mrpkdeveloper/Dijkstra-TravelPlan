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

const V = 3;
const E = [
  [0, 1, 1],
  [0, 2, 2],
  [1, 2, 3],
];
let graph = creategraph(V, E);
console.log(graph);
