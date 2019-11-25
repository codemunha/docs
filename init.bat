@echo off 
set remove=Remove DSL-Core SUCCESS
set message=SUCCESS Initial application
rm -rf core
printf  "\n\n"
echo %remove%
printf  "\n\n"
mkdir core
cd core
git clone http://git.dsl.ktb/dsl/frontend/core/dsl-core.git -b v2
printf  "\n\n"
echo %message%