@echo off
echo ===================================================
echo     Backlink Bridge - Push to GitHub Repository
echo ===================================================
echo.
set /p REPO_URL="Enter your GitHub Repository URL (e.g., https://github.com/username/repo.git): "

if "%REPO_URL%"=="" (
    echo.
    echo Error: GitHub URL cannot be empty!
    pause
    exit /b
)

echo.
echo Initializing Git remote...
git remote add origin %REPO_URL% 2>nul
if %errorlevel% neq 0 (
    echo Remote 'origin' already exists. Updating URL to %REPO_URL%...
    git remote set-url origin %REPO_URL%
)

echo.
echo Renaming current branch to 'main'...
git branch -M main

echo.
echo Pushing code to GitHub...
git push -u origin main

echo.
if %errorlevel% equ 0 (
    echo ===================================================
    echo SUCCESS: Your website code is now on GitHub!
    echo You can now import this repository into Vercel.
    echo ===================================================
) else (
    echo ===================================================
    echo ERROR: Failed to push to GitHub.
    echo Please make sure the repository exists and you have access.
    echo ===================================================
)
echo.
pause
