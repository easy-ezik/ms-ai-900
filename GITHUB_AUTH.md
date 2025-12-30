# 🔐 GitHub 인증 및 Push 가이드

## 방법 1: Personal Access Token 사용 (추천)

### 1. GitHub에서 토큰 생성

1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token" → "Generate new token (classic)" 클릭
3. 토큰 이름 입력 (예: "ms-ai-900-deploy")
4. 만료 기간 선택
5. 권한(scope) 선택:
   - ✅ **repo** (전체 저장소 권한)
   - ✅ **workflow** (GitHub Actions 사용)
6. "Generate token" 클릭
7. **토큰 복사** (한 번만 보여줌!)

### 2. Git에 토큰 설정

#### Windows (PowerShell/CMD)
```bash
# 원격 저장소 URL 확인
git remote -v

# 토큰으로 URL 설정
git remote set-url origin https://TOKEN@github.com/easy-ezik/easy-ezik.github.io.git

# 또는 사용자명과 토큰 함께
git remote set-url origin https://USERNAME:TOKEN@github.com/easy-ezik/easy-ezik.github.io.git
```

#### Mac/Linux
```bash
git remote set-url origin https://TOKEN@github.com/easy-ezik/easy-ezik.github.io.git
```

### 3. Push
```bash
git push origin master
```

---

## 방법 2: Git Credential Manager 사용

### Windows
```bash
# 자격 증명 저장
git config --global credential.helper wincred

# Push 시 사용자명과 토큰 입력 요청됨
git push origin master
# Username: YOUR_USERNAME
# Password: YOUR_TOKEN (토큰을 비밀번호처럼 입력)
```

### Mac
```bash
git config --global credential.helper osxkeychain
git push origin master
```

---

## 방법 3: SSH 키 사용

### 1. SSH 키 생성
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

### 2. SSH 키를 GitHub에 추가
1. 생성된 공개 키 복사: `cat ~/.ssh/id_ed25519.pub`
2. GitHub → Settings → SSH and GPG keys → New SSH key
3. 키 추가

### 3. SSH URL로 변경
```bash
git remote set-url origin git@github.com:easy-ezik/easy-ezik.github.io.git
```

### 4. Push
```bash
git push origin master
```

---

## 방법 4: GitHub CLI 사용

### 1. GitHub CLI 설치
```bash
# Windows (Chocolatey)
choco install gh

# Mac
brew install gh

# 또는 https://cli.github.com/
```

### 2. 로그인
```bash
gh auth login
```

### 3. Push
```bash
git push origin master
```

---

## Organization 저장소의 경우

### 토큰 권한 확인
Organization 저장소에 push하려면:
- ✅ **repo** 권한 필요
- Organization이 토큰 사용을 허용해야 함:
  - Organization Settings → Third-party access → Personal access tokens
  - "Allow members to use personal access tokens" 활성화

---

## 추천 방법

**Personal Access Token**을 추천합니다:
- ✅ 간단하고 빠름
- ✅ Organization 저장소에도 사용 가능
- ✅ 안전함 (필요한 권한만 부여)

---

## 보안 주의사항

⚠️ **토큰을 코드에 직접 작성하지 마세요!**
- 환경 변수 사용
- `.gitignore`에 토큰 파일 추가
- 토큰이 노출되면 즉시 재생성

---

## 문제 해결

### 인증 실패 시
```bash
# 저장된 자격 증명 삭제
git credential reject
# protocol=https
# host=github.com

# 또는 Windows
git credential-manager-core erase
```

### 토큰 만료 시
- GitHub에서 새 토큰 생성
- Git에 새 토큰 설정

