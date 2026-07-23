@echo off
setlocal

set "SSH_USER=tempserver"
set "SSH_HOST=vps60725.dreamhostps.com"
set "SSH_PORT=22"

echo Conectando a %SSH_USER%@%SSH_HOST%...
echo.
ssh -p %SSH_PORT% %SSH_USER%@%SSH_HOST%

endlocal
