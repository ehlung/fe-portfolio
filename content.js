window.PORTFOLIO_CONTENT = {
  name: "강예령",
  role: "Frontend Developer",
  headline: "사용자 흐름을 이해하고 끝까지 구현하는 프론트엔드 개발자 강예령입니다.",
  summary:
    "컴퓨터공학을 전공하며 프로젝트를 경험하는 과정에서 프론트엔드 개발에 관심을 갖게 되었습니다. 화면 구현을 넘어 상태 관리, API 통신, 데이터 흐름까지 함께 고려하는 개발자로 성장하고 있습니다.",
  about:
    "컴퓨터공학을 전공하며 프로젝트를 경험하는 과정에서 프론트엔드 개발에 관심을 갖게 되었습니다. 처음에는 화면을 직접 구현하고 결과를 눈으로 확인할 수 있다는 점에서 시작했지만, 개발을 이어갈수록 프론트엔드는 UI뿐만 아니라 상태 관리, API 통신, 데이터 흐름을 함께 고려해야 하는 역할이라는 것을 알게 되었습니다. 사용자가 막힘 없이 서비스를 이용할 수 있도록 로딩, 에러, 예외 상황까지 세심하게 다루는 개발자가 되고 싶습니다.",
  resumeUrl: "",
  profile: [
    { label: "이름", value: "강예령" },
    { label: "희망 직무", value: "프론트엔드 개발자" },
    { label: "전공", value: "컴퓨터공학" },
    { label: "관심 분야", value: "React, UI 구현, API 연동" },
  ],
  projects: [
    {
      title: "MeetLink",
      subtitle: "약속 시간·장소 추천 서비스",
      period: "2026.01 - 2026.04",
      type: "팀 프로젝트 5인 · 프론트엔드 2명, 백엔드 3명",
      description:
        "여러 명이 모일 때 약속 시간과 장소를 정하는 번거로움을 줄여주는 서비스입니다. 참여자가 입력한 가능 시간과 출발지를 바탕으로 적합한 시간과 장소를 추천하며, 저는 프론트엔드 개발을 맡아 장소 추천 영역을 중심으로 구현했습니다.",
      role: "카카오맵 기반 지도 화면 / 출발지 입력 / 추천 결과 시각화 / 로딩 상태 처리 / 단위 테스트",
      tech: [
        "React",
        "TypeScript",
        "Vite",
        "React Router",
        "TanStack Query",
        "Zustand",
        "Axios",
        "Tailwind CSS",
        "Kakao Maps API",
        "Vercel",
      ],
      features: [
        "가입 없이 링크 공유만으로 참여하는 약속 생성",
        "참여자별 가능 시간 입력",
        "출발지 검색 및 현재 위치 지정",
        "카카오맵 기반 추천 시간과 장소 결과 확인",
      ],
      contributions: [
        "카카오맵 API를 연동해 추천 장소를 지도 마커와 카드 목록으로 함께 보여주는 결과 화면을 구현했습니다.",
        "카드 선택 시 지도 중심과 마커가 해당 장소로 갱신되도록 만들고, 참여자별 출발지에서 추천 장소까지의 이동 경로를 지도 위에 선으로 표시했습니다.",
        "키워드 검색, 주소 검색, 현재 위치 불러오기를 통해 출발지를 지정할 수 있도록 구현하고 중복 장소 결과를 제거했습니다.",
        "스켈레톤 UI와 스피너, 안내 문구를 적용해 데이터 로딩 중에도 화면 흐름이 끊기지 않도록 처리했습니다.",
        "Vitest와 React Testing Library로 시간 데이터 변환, 검색 결과 중복 제거, 로딩·에러·빈 데이터 상태 렌더링을 테스트했습니다.",
      ],
      troubleshooting: [
        "모든 페이지에서 로드되던 카카오맵 SDK를 지도가 필요한 페이지에서만 불러오도록 바꿨고, SDK 로드 상태에 맞춰 검색과 주소 변환 로직이 실행되도록 정리했습니다.",
        "지도 드래그와 코드 기반 중심 이동이 충돌해 중심 좌표가 흔들리던 문제를 플래그로 구분해 안정적으로 동기화했습니다.",
      ],
      achievements: [
        "출발지 검색 페이지 성능 점수 82 → 91 개선",
        "추천 장소 페이지 성능 점수 73 → 82 개선",
      ],
      githubUrl: "https://github.com/greedy-team/meetlink-fe",
      demoUrl: "https://meetlink.now",
      color: "#0d6b5f",
    },
    {
      title: "우리.zip",
      subtitle: "얼굴 인식 기반 가족 영상 아카이빙 서비스",
      period: "2025.09 - 2025.12",
      type: "팀 프로젝트 3인 · 프론트엔드 단독 담당",
      description:
        "떨어져 사는 가족이 일상을 영상으로 기록하고 함께 나누는 가족 아카이빙 서비스입니다. 매주 주어지는 질문에 가족들이 짧은 영상으로 답하면 기록이 자동으로 정리되어 쌓이며, 캡스톤디자인 졸업 프로젝트로 진행했습니다.",
      role: "프론트엔드 단독 개발 / Figma 디자인 / 백엔드·AI 서버 연동 / 배포",
      tech: ["React", "JavaScript", "Vite", "Tailwind CSS", "Web API", "Figma"],
      images: ["./assets/image1.png", "./assets/image2.png", "./assets/image3.png"],
      features: [
        "가족 코드 기반 회원가입과 그룹 참여",
        "주차별 질문에 대한 영상 답변 촬영과 업로드",
        "얼굴 인식 AI를 활용한 실시간 촬영 가이드와 자동 썸네일 지정",
        "멤버별, 반려동물별로 자동 분류되는 기록 보관함",
        "일상 피드, 댓글, 1:1 쪽지함을 통한 가족 간 소통",
      ],
      contributions: [
        "getUserMedia, MediaRecorder, Canvas API를 조합해 브라우저 안에서 영상을 촬영하는 기능을 구현했습니다.",
        "녹화 중 450ms마다 현재 프레임을 JPEG로 변환해 얼굴 인식 서버로 보내고, 응답에 따라 얼굴 위치 안내를 화면과 음성으로 출력했습니다.",
        "이전 요청이 끝나기 전에는 다음 프레임 캡처를 건너뛰고, 컴포넌트 언마운트 시 폴링 루프를 멈춰 메모리 누수를 방지했습니다.",
        "고령 사용자를 위해 질문과 안내를 읽어주는 TTS, 글자 크기 조절 기능을 구현했습니다.",
        "디자이너 없이 Figma 시안부터 React 컴포넌트 구현까지 맡아 재사용 가능한 디자인 시스템을 구성했습니다.",
      ],
      troubleshooting: [
        "얼굴 위치 안내 음성이 중복 재생되는 문제를 같은 안내 3초, 안내 변경 1초 쿨다운으로 제어하고 ref로 관리했습니다.",
        "React 18 StrictMode에서 업로드 요청이 두 번 실행되는 문제를 ref로 실행 여부를 기록해 한 번만 실행되도록 막았습니다.",
      ],
      achievements: ["교내 캡스톤디자인 창의설계경진대회 대상(1등)"],
      githubUrl: "https://github.com/Capstone-3Team/WooriZip-FE",
      demoUrl: "",
      color: "#c86b6b",
    },
  ],
  skills: [
    {
      title: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend & Data",
      items: ["Node.js", "PostgreSQL", "Prisma", "REST API", "Axios", "TanStack Query"],
    },
    {
      title: "Tools",
      items: ["Git", "GitHub", "Vercel", "pnpm", "Vite", "Figma MCP"],
    },
    {
      title: "AI & Design",
      items: ["Claude Code", "Generative AI", "Figma", "Photoshop", "Illustrator"],
    },
  ],
  experiences: [
    {
      title: "2026년 서울시 민간기업 참여형 매력일자리",
      period: "AI 바이브코딩 기반 프론트엔드 실무과정",
      description:
        "AI 도구와 프론트엔드 개발 워크플로우를 함께 학습하며 실무형 프로젝트를 준비하고 있습니다.",
    },
    {
      title: "교내 캡스톤디자인 창의설계경진대회 대상",
      period: "우리.zip",
      description:
        "얼굴 인식 기반 가족 영상 아카이빙 서비스로 창의설계경진대회 대상(1등)을 수상했습니다.",
    },
    {
      title: "해커톤 장려상",
      period: "Award",
      description:
        "제한된 시간 안에서 문제를 정의하고 팀원과 협업해 실행 가능한 결과물을 완성했습니다.",
    },
  ],
  contactMessage:
    "사용자 흐름을 고려한 UI와 안정적인 프론트엔드 구현을 함께 고민하는 개발자로 성장하고 싶습니다.",
  contacts: [
    { label: "Email", value: "dpfud8786@gmail.com", url: "mailto:dpfud8786@gmail.com" },
    { label: "GitHub", value: "github.com/ehlung", url: "https://github.com/ehlung" },
    { label: "Velog", value: "velog.io/@ehlung", url: "https://velog.io/@ehlung/posts" },
  ],
};
