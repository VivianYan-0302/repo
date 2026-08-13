@echo off
chcp 65001 > nul
echo ================================
echo   高中線上學習平台 - 啟動中...
echo ================================
echo.

:: 重新載入系統環境變數（讓 node/npx 可以找到）
for /f "tokens=*" %%i in ('powershell -Command "[System.Environment]::GetEnvironmentVariable(\"Path\",\"Machine\")"') do set "SYS_PATH=%%i"
for /f "tokens=*" %%i in ('powershell -Command "[System.Environment]::GetEnvironmentVariable(\"Path\",\"User\")"') do set "USR_PATH=%%i"
set "PATH=%SYS_PATH%;%USR_PATH%"

echo 正在啟動本機伺服器（port 8080）...
cd /d "%~dp0"

:: 延遲 2 秒後開啟瀏覽器
start "" timeout /t 3 /nobreak > nul & start "" "http://localhost:8080/qa.html"
start /wait "" timeout /t 2 /nobreak > nul
start "" "http://localhost:8080/qa.html"

npx --yes http-server . -p 8080 -c-1 --cors
pause
