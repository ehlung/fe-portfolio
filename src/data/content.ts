import type { PortfolioContent } from '../types'

export const content: PortfolioContent = {
  name: '강예령',
  role: 'Frontend Developer',
  headline: '사용자 흐름을 이해하고 끝까지 구현하는 프론트엔드 개발자입니다.',
  summary:
    'UI부터 상태 관리, API 통신, 데이터 흐름까지 — 사용자가 막힘 없이 쓸 수 있도록 만드는 프론트엔드 개발자입니다.',
  about:
    '컴퓨터공학을 전공하며 프로젝트를 통해 프론트엔드 개발 경험을 쌓았습니다. 화면 구현에 그치지 않고 서비스의 흐름을 이해하며, 필요한 기능을 사용자 관점에서 끝까지 완성하는 개발을 지향합니다.',
  resumeUrl: '',
  profile: [
    { label: '이름', value: '강예령' },
    { label: '희망 직무', value: '프론트엔드 개발자' },
    { label: '전공', value: '컴퓨터공학' },
    { label: '관심 분야', value: 'React, UI 구현, API 연동' },
  ],
  projects: [
    {
      title: 'MeetLink',
      subtitle: '약속 시간·장소 추천 서비스',
      period: '2026.01 — 2026.04',
      type: '팀 프로젝트 5인 · 프론트엔드 2명, 백엔드 3명',
      description:
        '참여자별 가능 시간과 출발지 정보를 기반으로 약속 시간과 장소 후보를 조율하는 서비스입니다. 장소 추천 영역에서 카카오맵 API 연동, 출발지 검색, 추천 결과 카드-마커 동기화, 참여자별 이동 경로 표시, 지도 SDK 지연 로딩을 구현했습니다.',
      role: '카카오맵 기반 지도 화면 / 출발지 입력 / 추천 결과 시각화 / 로딩 상태 처리 / 단위 테스트',
      tech: [
        'React',
        'TypeScript',
        'Vite',
        'React Router',
        'TanStack Query',
        'Zustand',
        'Axios',
        'Tailwind CSS',
        'Kakao Maps API',
        'Vercel',
      ],
      images: ['assets/meetlink-mockup.png'],
      features: [
        '가입 없이 링크 공유만으로 참여하는 약속 생성',
        '참여자별 가능 시간 입력',
        '출발지 검색 및 현재 위치 지정',
        '카카오맵 기반 추천 시간과 장소 결과 확인',
      ],
      contributions: [
        '카카오맵 API를 연동해 추천 장소를 지도 마커와 카드 목록으로 함께 보여주는 결과 화면을 구현했습니다.',
        '카드 선택 시 지도 중심과 마커가 해당 장소로 갱신되도록 만들고, 참여자별 출발지에서 추천 장소까지의 이동 경로를 지도 위에 선으로 표시했습니다.',
        '키워드 검색, 주소 검색, 현재 위치 불러오기를 통해 출발지를 지정할 수 있도록 구현하고 중복 장소 결과를 제거했습니다.',
        '스켈레톤 UI와 스피너, 안내 문구를 적용해 데이터 로딩 중에도 화면 흐름이 끊기지 않도록 처리했습니다.',
        'Vitest와 React Testing Library로 시간 데이터 변환, 검색 결과 중복 제거, 로딩·에러·빈 데이터 상태 렌더링을 테스트했습니다.',
      ],
      troubleshooting: [
        '모든 페이지에서 로드되던 카카오맵 SDK를 지도가 필요한 페이지에서만 불러오도록 바꿨고, SDK 로드 상태에 맞춰 검색과 주소 변환 로직이 실행되도록 정리했습니다.',
        '지도 드래그와 코드 기반 중심 이동이 충돌해 중심 좌표가 흔들리던 문제를 플래그로 구분해 안정적으로 동기화했습니다.',
      ],
      achievements: [
        'Kakao Maps lazy load',
        'Lighthouse 82 → 91',
        'Lighthouse 73 → 82',
      ],
      githubUrl: 'https://github.com/greedy-team/meetlink-fe',
      demoUrl: 'https://meetlink.now',
      color: '#0d6b5f',
    },
    {
      title: '우리.zip',
      subtitle: '얼굴 인식 기반 가족 영상 아카이빙 서비스',
      period: '2025.09 — 2025.12',
      type: '팀 프로젝트 3인 · 프론트엔드 단독 담당',
      description:
        '브라우저 기반 영상 촬영과 얼굴 인식 결과를 활용한 가족 영상 아카이빙 서비스입니다. 프론트엔드를 단독으로 맡아 Figma 화면 설계부터 촬영 흐름 구현, 프레임 캡처, 얼굴 인식 서버 연동, TTS 안내와 업로드 상태 제어까지 담당했습니다.',
      role: '프론트엔드 단독 개발 / Figma 디자인 / 백엔드·AI 서버 연동 / 배포',
      tech: ['React', 'JavaScript', 'Vite', 'Tailwind CSS', 'Web API', 'Figma'],
      images: ['assets/woorizip-mockup.png'],
      features: [
        '가족 코드 기반 회원가입과 그룹 참여',
        '주차별 질문에 대한 영상 답변 촬영과 업로드',
        '얼굴 인식 AI를 활용한 실시간 촬영 가이드와 자동 썸네일 지정',
        '멤버별, 반려동물별로 자동 분류되는 기록 보관함',
        '일상 피드, 댓글, 1:1 쪽지함을 통한 가족 간 소통',
      ],
      contributions: [
        'getUserMedia, MediaRecorder, Canvas API를 조합해 브라우저 안에서 영상을 촬영하는 기능을 구현했습니다.',
        '녹화 중 450ms마다 현재 프레임을 JPEG로 변환해 얼굴 인식 서버로 보내고, 응답에 따라 얼굴 위치 안내를 화면과 음성으로 출력했습니다.',
        '이전 요청이 끝나기 전에는 다음 프레임 캡처를 건너뛰고, 컴포넌트 언마운트 시 폴링 루프를 멈춰 메모리 누수를 방지했습니다.',
        '고령 사용자를 위해 질문과 안내를 읽어주는 TTS, 글자 크기 조절 기능을 구현했습니다.',
        '디자이너 없이 Figma 시안부터 React 컴포넌트 구현까지 맡아 재사용 가능한 디자인 시스템을 구성했습니다.',
      ],
      troubleshooting: [
        '얼굴 위치 안내 음성이 중복 재생되는 문제를 같은 안내 3초, 안내 변경 1초 쿨다운으로 제어하고 ref로 관리했습니다.',
        'React 18 StrictMode에서 업로드 요청이 두 번 실행되는 문제를 ref로 실행 여부를 기록해 한 번만 실행되도록 막았습니다.',
      ],
      achievements: [
        '캡스톤디자인 대상',
        '영상 촬영 파이프라인',
        'TTS·업로드 중복 제어',
      ],
      githubUrl: 'https://github.com/Capstone-3Team/WooriZip-FE',
      demoUrl: '',
      color: '#c86b6b',
    },
  ],
  skills: [
    {
      title: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend & Data',
      items: ['Node.js', 'PostgreSQL', 'Prisma', 'REST API', 'Axios', 'TanStack Query'],
    },
    {
      title: 'Tools',
      items: ['Git', 'GitHub', 'Vercel', 'pnpm', 'Vite', 'Figma MCP'],
    },
    {
      title: 'AI & Design',
      items: ['Claude Code', 'Generative AI', 'Figma', 'Photoshop', 'Illustrator'],
    },
  ],
  experiences: [
    {
      tabLabel: 'Education',
      title: 'Sejong University',
      period: '2021.03 — 2026.08 졸업 예정',
      bullets: [
        '컴퓨터공학을 전공하며 웹 개발, 데이터베이스, 소프트웨어 설계의 기본기를 학습했습니다.',
        '팀 프로젝트와 졸업 프로젝트를 통해 프론트엔드 구현과 협업 경험을 쌓았습니다.',
      ],
    },
    {
      tabLabel: 'Greedy',
      title: 'Greedy — 초록 스터디 기반 개발 동아리',
      period: '2025.09 — 2026.04',
      bullets: [
        '우테코 초록 스터디를 기반으로 운영되는 개발 동아리에서 정기 스터디와 팀 프로젝트를 함께 진행했습니다.',
        '스터디에서 쌓은 학습 내용을 바탕으로 팀을 구성해 약속 시간·장소 추천 서비스 MeetLink를 개발했습니다.',
        '프론트엔드 파트에서 지도 기반 장소 추천 화면, 출발지 입력, 추천 결과 시각화 등 사용자 흐름과 직접 맞닿는 기능을 구현했습니다.',
      ],
    },
    {
      tabLabel: 'Training',
      title: 'AI 바이브코딩 기반 프론트엔드 실무과정',
      period: '2026.05 — 진행중',
      bullets: [
        '서울시 민간기업 참여형 매력일자리 프로그램으로, AI 도구를 프론트엔드 개발 흐름에 적용하는 실무 과정을 수강하고 있습니다.',
        '기획 의도를 화면 구조로 풀어내고, 구현 과정에서 Claude Code 등 AI 기반 개발 도구를 활용하는 방식을 실습하고 있습니다.',
        '팀 기반 파이널 프로젝트를 통해 요구사항 정리, UI 구현, 코드 리뷰, 배포까지 이어지는 개발 흐름을 경험하고 있습니다.',
      ],
    },
    {
      tabLabel: 'Pair Study',
      title: 'Pair Study — 미션 구현과 코드 리뷰 중심 학습',
      period: '2026.05 — 진행중',
      url: 'https://github.com/pair-study',
      bullets: [
        'JavaScript와 React 미션을 각자 구현한 뒤 PR을 올리고, 상호 코드 리뷰를 통해 구현 방식과 설계 선택을 비교했습니다.',
        '리뷰 코멘트를 질문, 제안, 배움, 논의로 구분해 남기며 단순 풀이 공유가 아니라 개선 가능한 지점을 기록했습니다.',
        '초록 스터디와 바이브코딩 교육 파이널 프로젝트를 같은 organization에서 관리하며 미션, 리뷰, 회고, 프로젝트 협업을 이어가고 있습니다.',
      ],
    },
    {
      tabLabel: 'Awards',
      title: 'Awards',
      period: '',
      bullets: [],
      entries: [
        {
          title: '캡스톤디자인 창의설계경진대회 대상',
          period: '2025.09 — 2025.12',
          bullets: [
            '얼굴 인식 기반 가족 영상 아카이빙 서비스 우리.zip으로 교내 캡스톤디자인 창의설계경진대회에서 대상(1등)을 수상했습니다.',
            '프론트엔드 단독 개발과 Figma 디자인, 백엔드·AI 서버 연동을 담당했습니다.',
          ],
        },
        {
          title: '세종대학교 SW·AI 해커톤 장려상',
          period: '2025.06',
          bullets: [
            '인공지능융합대학 전공 트랙제의 낮은 인지도를 문제로 정의하고, 학생이 트랙 이수 가능성과 부족 과목을 확인할 수 있는 서비스를 기획했습니다.',
            '기이수 성적 파일 업로드를 통한 트랙별 이수 현황 확인, 성향 기반 트랙 추천, 관심 과목 중심 수강 계획 제공을 MVP 기능으로 정리했습니다.',
            '저학년에게는 관심 분야 기반 탐색을, 고학년에게는 가장 빠르게 이수 가능한 트랙 확인을 제공하는 방향으로 사용자 흐름을 설계했습니다.',
          ],
        },
      ],
    },
  ],
  contactMessage:
    '사용자 흐름을 고려한 UI와 안정적인 프론트엔드 구현을 함께 고민하는 개발자로 성장하고 싶습니다. 편하게 연락주세요.',
  contacts: [
    { label: 'Email', value: 'dpfud8786@gmail.com', url: 'mailto:dpfud8786@gmail.com' },
    { label: 'GitHub', value: 'github.com/ehlung', url: 'https://github.com/ehlung' },
  ],
}
