@echo off
setLocal enabledelayedexpansion

set "file=.env.serversit"

for /f "tokens=1,2 delims==" %%G in (!file!) do (
  set k=%%G
  set v=%%H
  if "!k!" == "VUE_APP_VERSION" (
    for /f "tokens=* delims='" %%G in ("!v!") do set version=%%G
  )
)

set datetimef=https://docs.dsl.sit/ %version%
REM @echo %datetimef%

REM curl -X POST -H "Authorization: Bearer 2mgLn9ByS1jvkXvKiySR6xMueICJ1Ia4q3KHdbPxOCV" -F "message=%datetimef%" https://notify-api.line.me/api/notify
curl -X POST -H "Authorization: Bearer OOfcdh9yXH9X64orJvLSfDi1T5tMKRvzmX6FwacY9xP" -F "message=%datetimef%" https://notify-api.line.me/api/notify