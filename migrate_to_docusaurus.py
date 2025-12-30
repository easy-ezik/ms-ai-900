#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
기존 마크다운 파일들을 Docusaurus 구조로 마이그레이션하는 스크립트
"""
import os
import shutil
import re
from pathlib import Path

# 경로 설정
BASE_DIR = Path(__file__).parent
OLD_DOCS_DIR = BASE_DIR / "docs" / "md"
OLD_IMAGES_DIR = BASE_DIR / "docs" / "images"
NEW_DOCS_DIR = BASE_DIR / "docs"
NEW_IMAGES_DIR = BASE_DIR / "static" / "img"

# 문서 목록 (파일명 기준)
documents = [
    "01_Azure의_AI_소개",
    "02_Microsoft_Foundry에서_AI_시작",
    "03_기계_학습_개념_소개",
    "04_Azure에서_기계_학습_시작",
    "05_생성형_AI_및_Agent_소개",
    "06_Microsoft_Foundry에서_생성형_AI를_시작하기",
    "07_텍스트_분석_개념_소개",
    "08_Microsoft_Foundry에서_자연어_처리_시작",
    "09_AI_음성_개념_소개",
    "10_Microsoft_Foundry에서_음성_시작",
    "11_Computer_Vision_개념_소개",
    "12_Microsoft_Foundry에서_Computer_Vision_시작",
    "13_AI_기반_정보_추출_개념_소개",
    "14_Microsoft_Foundry에서_AI_기반_정보_추출_시작",
]

def fix_image_paths(content):
    """이미지 경로를 Docusaurus 형식으로 수정"""
    # ../images/ 또는 images/ 경로를 /img/로 변경
    content = re.sub(
        r'!\[([^\]]*)\]\((?:\.\./)?images/([^\)]+)\)',
        r'![\1](/img/\2)',
        content
    )
    return content

def migrate_documents():
    """문서 파일들을 마이그레이션"""
    print("문서 파일 마이그레이션 시작...")
    
    for doc_name in documents:
        old_file = OLD_DOCS_DIR / f"{doc_name}.md"
        new_dir = NEW_DOCS_DIR / doc_name
        new_file = new_dir / f"{doc_name}.md"
        
        if not old_file.exists():
            print(f"[WARN] 파일을 찾을 수 없습니다: {old_file}")
            continue
        
        # 디렉토리 생성
        new_dir.mkdir(parents=True, exist_ok=True)
        
        # 파일 읽기
        with open(old_file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 이미지 경로 수정
        content = fix_image_paths(content)
        
        # 제목 추가 (파일명 기반)
        if not content.startswith('#'):
            title = doc_name.replace('_', ' ')
            content = f"# {title}\n\n{content}"
        
        # 새 위치에 저장
        with open(new_file, 'w', encoding='utf-8') as f:
            f.write(content)
        
        print(f"[OK] {doc_name}.md 마이그레이션 완료")

def migrate_images():
    """이미지 파일들을 static/img로 복사"""
    print("\n이미지 파일 마이그레이션 시작...")
    
    if not OLD_IMAGES_DIR.exists():
        print(f"[WARN] 이미지 디렉토리를 찾을 수 없습니다: {OLD_IMAGES_DIR}")
        return
    
    # 이미지 디렉토리 생성
    NEW_IMAGES_DIR.mkdir(parents=True, exist_ok=True)
    
    # 이미지 파일 복사
    image_count = 0
    for img_file in OLD_IMAGES_DIR.iterdir():
        if img_file.is_file():
            dest = NEW_IMAGES_DIR / img_file.name
            shutil.copy2(img_file, dest)
            image_count += 1
    
    print(f"[OK] {image_count}개의 이미지 파일 복사 완료")

if __name__ == "__main__":
    print("=" * 50)
    print("Docusaurus 마이그레이션 시작")
    print("=" * 50)
    
    migrate_documents()
    migrate_images()
    
    print("\n" + "=" * 50)
    print("마이그레이션 완료!")
    print("=" * 50)

