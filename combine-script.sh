#!/bin/bash

scriptContentFile=$1

cd ~/Develop/figma-plugin/quick-script

cp code-default.js code.js

lines=`expr $(wc -l < code.js) - 7`
sed -i "" "$lines r $scriptContentFile" code.js

osascript run-script-in-figma.scptd

