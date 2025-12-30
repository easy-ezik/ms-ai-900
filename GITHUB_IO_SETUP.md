# 🌐 GitHub.io 루트 도메인 사용하기

## 방법 1: 현재 저장소 이름을 `username.github.io`로 변경 (추천)

### 장점
- `https://YOUR_USERNAME.github.io`로 직접 접근
- 깔끔한 URL
- 저장소 하나로 관리

### 단계

1. **GitHub에서 저장소 이름 변경**
   - 저장소 Settings → General → Repository name
   - `ms-ai-900` → `YOUR_USERNAME.github.io`로 변경
   - 예: `sjlee.github.io`

2. **docusaurus.config.js 수정**
   ```javascript
   url: 'https://YOUR_USERNAME.github.io',
   baseUrl: '/',  // 루트 경로
   ```

3. **로컬 저장소 remote URL 업데이트**
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
   ```

4. **배포**
   ```bash
   npm run deploy
   ```

5. **GitHub Pages 설정**
   - Settings → Pages
   - Source: `gh-pages` 브랜치
   - Custom domain (선택사항): 설정 가능

### 결과
- 접속: `https://YOUR_USERNAME.github.io`
- 모든 경로가 루트에서 시작: `/docs/intro` 등

---

## 방법 2: 새 저장소 `username.github.io` 생성

### 장점
- 기존 저장소 유지 가능
- 별도 저장소로 분리

### 단계

1. **새 저장소 생성**
   - GitHub에서 `YOUR_USERNAME.github.io` 저장소 생성

2. **현재 프로젝트를 새 저장소에 푸시**
   ```bash
   git remote set-url origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
   git push -u origin main
   ```

3. **docusaurus.config.js 수정**
   ```javascript
   url: 'https://YOUR_USERNAME.github.io',
   baseUrl: '/',
   ```

4. **배포**
   ```bash
   npm run deploy
   ```

---

## 현재 저장소 그대로 사용 (Project Pages)

현재 저장소 이름(`ms-ai-900`)을 그대로 사용하려면:

```javascript
url: 'https://YOUR_USERNAME.github.io',
baseUrl: '/ms-ai-900/',  // 저장소 이름
```

접속: `https://YOUR_USERNAME.github.io/ms-ai-900/`

---

## 추천

**방법 1 (저장소 이름 변경)**을 추천합니다:
- ✅ 가장 깔끔한 URL
- ✅ 저장소 하나로 관리
- ✅ 설정이 간단

저장소 이름만 변경하면 됩니다!

