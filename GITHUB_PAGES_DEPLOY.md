# 🚀 GitHub Pages 배포 가이드

## GitHub Pages의 장점 (팀 사용 시)

✅ **GitHub 통합** - 코드와 문서가 한 곳에
✅ **간단한 공유** - 저장소 링크만 공유하면 문서도 접근 가능
✅ **README 연동** - README에서 바로 문서 링크 가능
✅ **별도 계정 불필요** - GitHub 계정만 있으면 됨
✅ **무료** - 완전 무료
✅ **자동 배포** - Git push만 하면 자동 배포

---

## 설정 방법

### 1. GitHub 저장소 생성

1. GitHub에서 새 저장소 생성 (예: `ms-ai-900`)
2. 저장소를 로컬에 클론하거나 기존 프로젝트 연결

### 2. docusaurus.config.js 수정

저장소 이름에 따라 설정이 다릅니다:

#### 경우 A: 저장소 이름이 `YOUR_USERNAME.github.io`인 경우 (사용자/조직 페이지)
```javascript
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/',
```

#### 경우 B: 일반 저장소인 경우 (프로젝트 페이지)
```javascript
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/REPO_NAME/',  // 저장소 이름
```

예: 저장소가 `ms-ai-900`이면
```javascript
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/ms-ai-900/',
```

### 3. GitHub Actions로 자동 배포 설정 (추천)

`.github/workflows/deploy.yml` 파일 생성:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    paths:
      - '**.md'
      - 'docs/**'
      - 'src/**'
      - 'static/**'
      - 'docusaurus.config.js'
      - 'sidebars.js'
      - 'package.json'

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

### 4. 수동 배포 (간단한 방법)

```bash
# 1. GitHub 저장소에 코드 푸시
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ms-ai-900.git
git push -u origin main

# 2. 배포
npm run deploy
```

또는 package.json의 deploy 스크립트 수정:
```json
"deploy": "GIT_USER=YOUR_USERNAME USE_SSH=true npm run deploy"
```

### 5. GitHub Pages 활성화

1. GitHub 저장소 → Settings → Pages
2. Source: `gh-pages` 브랜치 선택
3. Save

---

## 배포 후 접속

- 사용자/조직 페이지: `https://YOUR_USERNAME.github.io`
- 프로젝트 페이지: `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## 자동 배포 설정 (GitHub Actions)

위의 `.github/workflows/deploy.yml` 파일을 만들면:
- `main` 브랜치에 push할 때마다 자동으로 배포됩니다
- 별도 명령어 실행 불필요!

---

## README에 링크 추가

```markdown
# MS AI-900 학습 자료

📚 [문서 보기](https://YOUR_USERNAME.github.io/ms-ai-900/)
```

---

## 팀원들이 사용하는 방법

1. GitHub 저장소 접근 권한만 주면 됨
2. README에서 문서 링크 클릭
3. 또는 직접 URL 접속

별도 플랫폼 계정이나 설정 불필요!

