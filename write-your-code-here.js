// Use VSCode to open this folder
// Write you code in this file
// Click the "Run Build Task..."(Shift + Cmd + B) action from the top menu "Terminal" of VSCode
// I defined the selection() and print() funtions in code-default.js

let names = []
selection().map(node => {
  print(node.name)
  names.push(node.name)
})
figma.notify("Selected layer: " + names.join(","))
