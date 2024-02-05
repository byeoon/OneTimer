@echo off 
echo If you want other devices to integrate and sync with OnTimer, this setup will be required.
echo OnTimer will now install Node.js, a UAC prompt may show up during installation.
@echo on

set dir=%cd%
@echo %dir%

winget install -e --id OpenJS.NodeJS
npm install http-server -g
http-server %dir% -p 8080

@echo off
pause
