@echo off
chcp 65001 > nul
echo ================================
echo   高中線上學習平台 - 啟動中...
echo ================================
echo.
echo 正在啟動本機伺服器，請稍候...
echo 伺服器啟動後，瀏覽器會自動開啟。
echo 關閉此視窗即可停止伺服器。
echo.
cd /d "%~dp0"
start "" "http://localhost:8080"
npx --yes http-server . -p 8080 -c-1 --cors
pause
