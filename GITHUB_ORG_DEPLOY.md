# 🚀 easy-ezik Organization GitHub Pages 배포

## 설정 완료 ✅

`docusaurus.config.js`가 다음으로 설정되었습니다:
- URL: `https://easy-ezik.github.io`
- baseUrl: `/`

## 배포 단계

### 1. GitHub 저장소 생성

1. GitHub에서 `easy-ezik` Organization으로 이동
2. 새 저장소 생성
3. **저장소 이름: `easy-ezik.github.io`** (정확히 이 이름!)
4. Public 또는 Private 선택

### 2. 로컬 저장소 연결

```bash
# Git 초기화 (아직 안 했다면)
git init

# 파일 추가
git add .

# 커밋
git commit -m "Initial commit: MS AI-900 학습 자료"

# GitHub 저장소 연결
git remote add origin https://github.com/easy-ezik/easy-ezik.github.io.git

# 푸시
git push -u origin main
```

### 3. 배포

```bash
npm run deploy
```

또는 package.json의 deploy 스크립트를 수정:

```json
"deploy": "GIT_USER=easy-ezik USE_SSH=true npm run deploy"
```

### 4. GitHub Pages 활성화

1. GitHub 저장소 → Settings → Pages
2. Source: `gh-pages` 브랜치 선택
3. Save

### 5. 접속 확인

몇 분 후 접속:
**`https://easy-ezik.github.io`**

---

## 자동 배포 설정 (GitHub Actions)

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
    permissions:
      contents: write
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

## ⚠️ 중요: GITHUB_TOKEN은 자동 제공됩니다!

`secrets.GITHUB_TOKEN`은 **별도로 생성할 필요가 없습니다**. GitHub Actions에서 자동으로 제공됩니다.

### Organization의 경우 추가 설정

Organization 저장소에서는 GitHub Actions 권한을 활성화해야 할 수 있습니다:

1. Organization Settings → Actions → General
2. "Actions permissions" 섹션에서:
   - ✅ "Allow all actions and reusable workflows" 선택
   - 또는 "Allow local actions and reusable workflows" 선택
3. "Workflow permissions" 섹션에서:
   - ✅ "Read and write permissions" 선택
   - ✅ "Allow GitHub Actions to create and approve pull requests" 체크

이렇게 하면 `GITHUB_TOKEN`이 자동으로 사용됩니다!

---

이렇게 하면 `master` 브랜치에 push할 때마다 자동 배포됩니다!

---

## 결과

✅ URL: `https://easy-ezik.github.io`
✅ 모든 경로가 루트에서 시작: `/docs/intro` 등
✅ Organization 이름으로 깔끔한 도메인

