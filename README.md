# Run Figma Script in Editors

This project allows you to run Figma scripts from your preferred code editor, such as Sublime Text or Visual Studio Code.

> **Only available on macOS now.**
>
> *Windows users need to research how to write scripts to run plugins in Figma*

## 1. How It Work

This project use two parts to make the script could be executed in Figma. 

1. A Figma plugin named "Quick Script" that is automatically generated from your script.
2. Use the VSCode's "Run Task" feature to get your codes from editor, and send the codes to a Shell script to generate the plugn, then use an AppleScript to tell the Figma to run plugin.

Follow the steps below and you will find more details.


## 2. Add the Quick Script plugin into Figma

Download and extract this repo, move the folder to a stable path.

Open the Figma client, go to the "Recents" page, click your avatar in the upper right corner, and then click the "Plugins" menu item.


<img src="https://user-images.githubusercontent.com/5106039/208347231-4bc5ecf9-ae9c-4b6b-a2e0-e8e8840bb402.png" width="305px" />


Add the Quick Script plugin in the Plugins modal, click the plus icon in the "In development" section. Click the "Import plugin from manifest..." item, and then navigate to this repo folder, select the "manifest.json" file in this folder. You will see the Quick Script plugin has been added to the "In development" section.


<img src="https://user-images.githubusercontent.com/5106039/208347595-b9382dec-bb05-4b09-825f-267991c75666.png" width="667px" />


## 3. Set up shell scripts

Open the "combine-script.sh" file with the VSCode or other editor. Look at the line 5 `cd ~/Develop/figma-plugin/quick-script`, you need to change the path to where the folder is located. 

For example, if you storage this repo at `~/Figma/plugins/quick-script`, you need to change the code to `cd ~/Figma/plugins/quick-script`

Don't forget to save the file after changing the path.


## 4. Run Script with VSCode

Open this repo folder with VSCode, and open the `write-your-code-here.js` file. First try to run the default script.

1. Open a Figma file and select some layers
2. Click on the "Run Build Task..." menu item from the "Termin al" item in the top menu.

<img width="1195" alt="screenshot" src="https://user-images.githubusercontent.com/5106039/208362733-c0374203-4347-4c25-a43f-ce3ada76b446.png">

After you do this, the Figma window will be activated, and a notification pops up at the bottom of the window.

<img width="1198" alt="screenstho" src="https://user-images.githubusercontent.com/5106039/208363853-8ebee460-f147-4f42-a0d0-6bf651c9c35f.png">

Now edit the `write-your-code-here.js` file, and use the "Run Build Task..." action to run your scripts with Figma.

> You can create a folder to manage your Figma script files, copy the .vscode folder from this repo to your scripts folder, and don't forget to change the the plugin path in the tasks.json file of the .vscode folder, eg: `"command": "/Users/tank/Figma/plugins/quick-script/combine-script.sh '${file}'"`


## 5. Use with Keyboard Maestro or other automation tools

If you want to use other tools to manage or edit your Figma scripts, what you need to do is save your script as a file, and sent the file path as a paramater to `combine-scripts.sh`, your script will run in Figma.

I use Keyboard Maestro to manage my scripts, so I can easily use them via palettes or set keyboard shortcuts for them.

<img width="531" alt="image" src="https://user-images.githubusercontent.com/5106039/208367564-62b1322e-49df-49cb-a128-5193f1910d51.png">



<hr />



Hope this project will make your design process more enjoyable. Join my Discord Server to share your experience with this project.

Discord: https://discord.gg/Fzje7m4HsP