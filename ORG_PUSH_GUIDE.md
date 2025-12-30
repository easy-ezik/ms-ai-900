# 🔐 Organization 저장소 Push 가이드

## 문제점

Organization 저장소(`easy-ezik/ms-ai-900`)에 push하려면:
- ✅ Organization의 멤버여야 함
- ✅ 해당 저장소에 **write 권한**이 있어야 함
- ✅ Organization이 개인 토큰 사용을 허용해야 함

---

## 해결 방법

### 방법 1: Organization 멤버 확인 및 권한 설정

1. **멤버 확인**
   - `mjsong` 계정이 `easy-ezik` Organization의 멤버인지 확인
   - Organization → People에서 확인

2. **저장소 권한 확인**
   - Organization → Settings → Member privileges
   - 또는 저장소 Settings → Collaborators
   - `mjsong`에게 **Write** 권한 부여

3. **개인 토큰 사용 허용**
   - Organization Settings → Third-party access → Personal access tokens
   - "Allow members to use personal access tokens" 활성화

### 방법 2: Organization 토큰 사용 (고급)

Organization 레벨에서 토큰을 생성하려면:
- Organization Owner 권한 필요
- Settings → Developer settings → Personal access tokens → Fine-grained tokens
- Organization 토큰 생성

### 방법 3: Collaborator로 추가

저장소 소유자가 `mjsong`을 Collaborator로 추가:
- 저장소 Settings → Collaborators → Add people
- `mjsong` 추가하고 **Write** 권한 부여

---

## 현재 상황 확인

### 1. 멤버 여부 확인
```bash
# GitHub 웹에서 확인
# easy-ezik Organization → People
```

### 2. 권한 확인
```bash
# 저장소에 접근 가능한지 확인
git ls-remote origin
```

### 3. Push 테스트
```bash
# 작은 변경사항으로 테스트
echo "# Test" >> test.md
git add test.md
git commit -m "Test push"
git push origin master
```

---

## 권한 오류 시

### 오류: "Permission denied"
→ Organization 멤버가 아니거나 write 권한이 없음

### 해결:
1. Organization Owner에게 멤버 추가 요청
2. 또는 저장소 Collaborator로 추가 요청
3. Organization Settings에서 개인 토큰 사용 허용 확인

---

## 대안: Fork 후 Pull Request

권한이 없다면:
1. 저장소를 Fork
2. Fork한 저장소에 push
3. Pull Request 생성
4. Organization Owner가 Merge

---

## 추천

**Organization Owner가 직접 push하거나**, `mjsong`을 Organization 멤버로 추가하는 것이 가장 간단합니다.

