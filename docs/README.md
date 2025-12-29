# MS AI-900 학습 자료 모바일 뷰어

## 사용 방법

### 방법 1: 간단한 로컬 서버 (Python)

```bash
cd docs
python3 -m http.server 8000
```

브라우저에서 `http://localhost:8000` 접속

### 방법 2: Node.js http-server

```bash
# 설치 (한 번만)
npm install -g http-server

# 실행
cd docs
http-server -p 8000
```

### 방법 3: VS Code Live Server

1. VS Code에서 `docs` 폴더 열기
2. `index.html` 우클릭 → "Open with Live Server"

## 기능

- ✅ 모바일 반응형 디자인
- ✅ 다크 모드 자동 지원
- ✅ 사이드바 네비게이션
- ✅ 마크다운 자동 렌더링
- ✅ 읽기 쉬운 폰트 및 레이아웃
- ✅ 빠른 문서 전환

## 파일 구조

```
docs/
├── index.html          # 메인 뷰어 페이지
├── short/              # 요약본 마크다운 파일들
│   ├── 01_Azure의_AI_소개.md
│   ├── 02_Microsoft_Foundry에서_AI_시작.md
│   └── ...
└── md/                 # 원본 마크다운 파일들
    └── ...
```

## 모바일에서 접속

같은 네트워크에 있는 경우:
1. 컴퓨터의 로컬 IP 주소 확인: `ifconfig` (Mac/Linux) 또는 `ipconfig` (Windows)
2. 모바일 브라우저에서 `http://[컴퓨터IP]:8000` 접속

예: `http://192.168.0.100:8000`

