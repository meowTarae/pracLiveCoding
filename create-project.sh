#!/bin/bash

# 사용자로부터 프로젝트 이름 입력 받기
read -p "프로젝트 이름을 입력하세요: " project_name

# 프로젝트 디렉토리 생성
mkdir -p "$project_name"
mkdir -p "$project_name/react"
mkdir -p "$project_name/vanillaJS"

echo "프로젝트 '$project_name'이 성공적으로 생성되었습니다!"
echo "생성된 디렉토리 구조:"
tree "$project_name" 