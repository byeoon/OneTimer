@echo off
set "dir=%cd%"

FOR /F "tokens=4 delims= " %%i in ('route print ^| find " 0.0.0.0"') do set localIp=%%i
echo The link to the local OnTimer server should be at %localIp%:8080/src/. The output below should show more detailed information.
@echo on
http-server "%dir%" -p 8080

pause