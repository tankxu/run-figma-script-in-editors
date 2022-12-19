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
  // Custom scripts end

  figma.closePlugin();
  print("========> Scripts complete");
}

customScripts();
