import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span className={styles.heroTitleMain}>{siteConfig.title}</span>
          </h1>
          <p className={styles.heroDescription}>
            Microsoft Azure AI Fundamentals (AI-900) 시험을 준비하기 위한<br />
            체계적인 학습 자료와 실습 가이드를 제공합니다.
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro">
              📚 학습 시작하기
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/docs/short/Azure의_AI_소개">
              📖 요약본 보러가기
            </Link>
          </div>
        </div>
        <div className={styles.heroStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>14</div>
            <div className={styles.statLabel}>학습 주제</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>이미지 자료</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>AI-900</div>
            <div className={styles.statLabel}>시험 준비</div>
          </div>
        </div>
      </div>
    </header>
  );
}


function QuickLinks() {
  const quickLinks = [
    { label: 'Azure의 AI 소개', link: '/docs/short/Azure의_AI_소개' },
    { label: 'Microsoft Foundry에서 AI 시작', link: '/docs/short/Microsoft_Foundry에서_AI_시작' },
    { label: '기계 학습 개념 소개', link: '/docs/short/기계_학습_개념_소개' },
    { label: 'Azure에서 기계 학습 시작', link: '/docs/short/Azure에서_기계_학습_시작' },
    { label: '생성형 AI 및 Agent 소개', link: '/docs/short/생성형_AI_및_Agent_소개' },
    { label: 'Microsoft Foundry에서 생성형 AI 시작', link: '/docs/short/Microsoft_Foundry에서_생성형_AI를_시작하기' },
    { label: '텍스트 분석 개념 소개', link: '/docs/short/텍스트_분석_개념_소개' },
    { label: 'Microsoft Foundry에서 자연어 처리 시작', link: '/docs/short/Microsoft_Foundry에서_자연어_처리_시작' },
    { label: 'AI 음성 개념 소개', link: '/docs/short/AI_음성_개념_소개' },
    { label: 'Microsoft Foundry에서 음성 시작', link: '/docs/short/Microsoft_Foundry에서_음성_시작' },
    { label: 'Computer Vision 개념 소개', link: '/docs/short/Computer_Vision_개념_소개' },
    { label: 'Microsoft Foundry에서 Computer Vision 시작', link: '/docs/short/Microsoft_Foundry에서_Computer_Vision_시작' },
    { label: 'AI 기반 정보 추출 개념 소개', link: '/docs/short/AI_기반_정보_추출_개념_소개' },
    { label: 'Microsoft Foundry에서 AI 기반 정보 추출 시작', link: '/docs/short/Microsoft_Foundry에서_AI_기반_정보_추출_시작' },
  ];

  return (
    <section className={styles.quickLinks}>
      <div className="container">
        <h3 className={styles.sectionTitle}>📚 전체 학습 자료</h3>
        <div className="row">
          <div className="col col--12">
            <div className={styles.linkGrid}>
              {quickLinks.map((item, idx) => (
                <Link
                  key={idx}
                  className={styles.linkCard}
                  to={item.link}>
                  <span className={styles.linkNumber}>{idx + 1}</span>
                  <span className={styles.linkLabel}>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Microsoft Azure AI Fundamentals (AI-900) 학습 자료">
      <HomepageHeader />
      <main>
        <QuickLinks />
      </main>
    </Layout>
  );
}

