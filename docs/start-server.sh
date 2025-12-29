#!/bin/bash

# MS AI-900 문서 서버 시작 스크립트

echo "🚀 MS AI-900 문서 서버를 시작합니다..."
echo ""
echo "📂 작업 디렉토리: $(pwd)"
echo ""

# docs 폴더로 이동
cd "$(dirname "$0")"

# Python 버전 확인
if command -v python3 &> /dev/null; then
    PYTHON_CMD=python3
elif command -v python &> /dev/null; then
    PYTHON_CMD=python
else
    echo "❌ Python이 설치되어 있지 않습니다."
    exit 1
fi

# 포트 8000이 사용 중인지 확인
if lsof -Pi :8000 -sTCP:LISTEN -t >/dev/null 2>&1 ; then
    echo "⚠️  포트 8000이 이미 사용 중입니다."
    echo "다른 포트를 사용하시겠습니까? (y/n)"
    read -r response
    if [[ "$response" =~ ^[Yy]$ ]]; then
        echo "사용할 포트 번호를 입력하세요 (기본값: 8001):"
        read -r port
        port=${port:-8001}
    else
        echo "기존 서버를 종료하고 계속하시겠습니까? (y/n)"
        read -r response
        if [[ "$response" =~ ^[Yy]$ ]]; then
            kill $(lsof -ti:8000)
            sleep 1
            port=8000
        else
            exit 1
        fi
    fi
else
    port=8000
fi

echo ""
echo "✅ 서버 시작 중..."
echo "📍 주소: http://localhost:$port"
echo "📱 모바일 접속: 같은 Wi-Fi에서 http://$(ipconfig getifaddr en0 2>/dev/null || hostname -I | awk '{print $1}'):$port"
echo ""
echo "⏹️  서버를 중지하려면 Ctrl+C를 누르세요"
echo ""

$PYTHON_CMD -m http.server $port

