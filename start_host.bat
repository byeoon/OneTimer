@echo off 

set dir=%cd%
@echo %dir%

http-server %dir% -p 8080