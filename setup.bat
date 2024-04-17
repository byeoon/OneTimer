@echo off
SETLOCAL EnableDelayedExpansion
for /F "tokens=1,2 delims=#" %%a in ('"prompt #$H#$E# & echo on & for %%b in (1) do rem"') do (
  set "DEL=%%a"
)


title OneTimer Initial Setup
echo If you want other devices to integrate and sync with OneTimer, this setup will be required.
echo OneTimer will now install Node.js and setup a host server, a UAC prompt may show up during installation.
@echo on

winget install -e --id OpenJS.NodeJS

@echo off
echo.
call :ColorText 0a "[ ALERT ]"
call :ColorText 0a "The next dependency (npm http-server) likes to automatically terminate the script once it finishes installing."
call :ColorText 0a "After that, you will no longer need to run the initial setup. Please use `start_host.bat` after this completes."

pause
@echo on
npm install http-server -g
pause
exit

:ColorText
echo off
echo %DEL% > "%~2"
findstr /v /a:%1 /R "^$" "%~2" nul
del "%~2" > nul 2>&1
goto :eof