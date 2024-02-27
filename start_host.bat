@echo off 
set dir=%cd%
@echo %dir%

FOR /F "tokens=4 delims= " %%i in ('route print ^| find " 0.0.0.0"') do set localIp=%%i

http-server %dir% -p 8080
echo The link to the local OnTimer server should be at %localIp%:8080 
pause