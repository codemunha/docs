@echo off 

setLocal enabledelayedexpansion

set "file=.env.serversit"
set tmpfile=!file!~tmp

:: date time format
set hour=%time:~0,2%
if "%hour:~0,1%" == " " set hour=0%hour:~1,1%
set min=%time:~3,2%
if "%min:~0,1%" == " " set min=0%min:~1,1%
set secs=%time:~6,2%
if "%secs:~0,1%" == " " set secs=0%secs:~1,1%
set year=%date:~-4%
set month=%date:~4,2%
if "%month:~0,1%" == " " set month=0%month:~1,1%
set day=%date:~-7,2%
if "%day:~0,1%" == " " set day=0%day:~1,1%

set datetimef=%day%/%month%/%year% %hour%:%min%

:: read file >> write tmpfile
for /f "tokens=1,2 delims==" %%G in (!file!) do (
  set k=%%G
  set v=%%H
  if "!k!" == "VUE_APP_VERSION" (
    :: find current version (e.g. 'เวอร์ชั่น 2.0.4 วันที่ 22/11/2019 17:50 น.')
    for /f "tokens=1-6 delims= " %%G in ("!v!") do (
      set version=%%H
      :: find subversion
      for /f "tokens=1-3 delims=." %%G in ("!version!") do (
        set subversion=%%I
        set /A subversion=subversion+1
        set newversion=%%G.%%H.!subversion!
      )
    )
    echo.!k!='เวอร์ชั่น !newversion! วันที่ !datetimef! น.'
  ) else (
    echo.!k!=!v!
  )
) >> !tmpfile!

:: replace tmpfile >> file
del !file!
ren !tmpfile! !file!

git pull && yarn sync && yarn update && yarn build:sit && scp -r ./dist/* dsladm@10.9.251.11:/web/DMS02nginx/html && call noti.bat && yarn push:sit