# 🔑 GITHUB_TOKEN 설명

## GITHUB_TOKEN은 자동 제공됩니다!

`secrets.GITHUB_TOKEN`은 **별도로 생성할 필요가 없습니다**.

GitHub Actions가 자동으로 제공하는 토큰입니다.

---

## Organization 저장소의 경우

Organization 저장소에서는 GitHub Actions 권한을 활성화해야 합니다:

### 1. Organization Settings 접근
1. GitHub에서 `easy-ezik` Organization으로 이동
2. Settings → Actions → General

### 2. Actions permissions 설정
- "Actions permissions" 섹션:
  - ✅ **"Allow all actions and reusable workflows"** 선택
  - 또는 "Allow local actions and reusable workflows" 선택

### 3. Workflow permissions 설정
- "Workflow permissions" 섹션:
  - ✅ **"Read and write permissions"** 선택
  - ✅ **"Allow GitHub Actions to create and approve pull requests"** 체크

### 4. 저장
- 페이지 하단의 "Save" 버튼 클릭

---

## Personal 저장소의 경우

Personal 저장소는 기본적으로 권한이 활성화되어 있어 추가 설정이 필요 없습니다.

---

## 확인 방법

워크플로우가 실행되면:
1. 저장소 → Actions 탭
2. 워크플로우 실행 내역 확인
3. "Deploy to GitHub Pages" 단계에서 토큰이 자동으로 사용됨

---

## 문제 해결

만약 권한 오류가 발생하면:
1. Organization Settings → Actions → General 확인
2. Workflow permissions가 "Read and write"로 설정되어 있는지 확인
3. 저장소 Settings → Actions → General에서도 확인

---

## 요약

✅ **GITHUB_TOKEN은 자동 제공 - 생성 불필요**
✅ **Organization의 경우 권한 설정만 필요**
✅ **Personal 저장소는 추가 설정 불필요**

