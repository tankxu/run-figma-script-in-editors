#!/bin/bash

scriptContentFile=$1

cd /Users/tank/Develop/figma-plugins/quick-script

cp code-default.txt code.js

lines=`expr $(wc -l < code.js) - 7`
sed -i "" "$lines r $scriptContentFile" code.js

# npm run build
osascript run-script-in-figma.scptd

