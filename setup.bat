@echo off 
echo If you want other devices to integrate and sync with OnTimer, this setup will be required.
echo OnTimer will now install Node.js and setup a host server, a UAC prompt may show up during installation.
@echo on

winget install -e --id OpenJS.NodeJS
npm install http-server -g

call start_host.bat

@echo off
pause
