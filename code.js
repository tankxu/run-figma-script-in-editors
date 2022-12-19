function selection(index) {
  if (index !== undefined) {
    return figma.currentPage.selection[index] || null;
  } else {
    return figma.currentPage.selection;
  }
}

function print(content) {
  console.log(content);
}

async function customScripts() {
  print("========> Running scripts");

  // Custom scripts will be added to here
// Use VSCode to open this folder
// Write you code in this file

let names = []
selection().map(node => {
  names.push(node.name)
})
print("123123")
figma.notify("Selected layer: " + names.join(","))
  // Custom scripts end

  figma.closePlugin();
  print("========> Scripts complete");
}

customScripts();
