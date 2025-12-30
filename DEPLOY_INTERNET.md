# 🌐 인터넷에서 접근 가능하게 배포하기

## 방법 1: GitHub Pages (무료, 추천)

### 설정
1. GitHub 저장소 생성
2. `docusaurus.config.js` 수정:
```javascript
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/REPO_NAME/',  // 저장소 이름이 루트가 아니면
```

### 배포
```bash
# GitHub Pages로 배포
npm run deploy
```

접속: `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## 방법 2: Netlify (무료, 추천)

### 방법 A: 드래그 앤 드롭
1. `npm run build` 실행
2. [Netlify](https://app.netlify.com) 접속
3. `build/` 폴더를 드래그 앤 드롭
4. 자동으로 배포됨!

### 방법 B: Git 연동
1. GitHub에 코드 푸시
2. Netlify에서 저장소 연결
3. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `build`
4. 자동 배포!

접속: `https://YOUR_SITE.netlify.app`

---

## 방법 3: Vercel (무료)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

또는 GitHub 저장소를 Vercel에 연결하면 자동 배포!

접속: `https://YOUR_SITE.vercel.app`

---

## 방법 4: ngrok (임시 테스트용)

```bash
# ngrok 설치
# https://ngrok.com/download

# 로컬 서버 실행
npm start

# 다른 터미널에서
ngrok http 3000
```

임시 URL이 생성되어 인터넷 어디서나 접근 가능 (무료 버전은 제한 있음)

---

## 방법 5: Cloudflare Pages (무료)

1. GitHub에 코드 푸시
2. [Cloudflare Pages](https://pages.cloudflare.com) 접속
3. 저장소 연결
4. 빌드 설정:
   - Build command: `npm run build`
   - Build output directory: `build`

접속: `https://YOUR_SITE.pages.dev`

---

## 추천 순서

1. **GitHub Pages** - 가장 간단, 무료, 안정적
2. **Netlify** - 드래그 앤 드롭으로 가장 빠름
3. **Vercel** - 개발자 친화적
4. **ngrok** - 임시 테스트용

