// 프로젝트 정보 데이터
const projects = {
  project1: {
    title: '포스터 디자인',
    image: 'img/p1.jpg',
    description: '공연을 홍보하고 흥행시키기 위해 제작한 포스터로 일러스트 그림과 브랜드 로고를 포함하여 목적에 맞게 제작하였습니다.'
  },
  project2: {
    title: '패키지 디자인',
    image: 'img/p2.jpg',
    description: '제주에만 판매하는 전통 과자 제주감귤유과 박스 패키지 디자인입니다.'
  },
  project3: {
    title: '로고디자인',
    image: 'img/p3.jpg',
    description: '가게 이름은 만빵제작소이지만 빵, 커피, 케익을 판매하는 말그대로 카페입니다. 그래서 빵을 그리는 것보다 케익을 그리는게 어울릴거 같아서 딸기 케익 심볼을 로고로 작업하였습니다. .'
  },
  project4: {
    title: 'SNS베너 디자인',
    image: 'img/p4.jpg',
    description: '비타 500음료를 주제로 하는 SNS베너로 홍보하는 방식으로 디자인 하였습니다.'
  },
  project5: {
    title: '리플렛 디자인',
    image: 'img/p5.jpg',
    description: '대구에 있는 팔공산 갓바위를 홍보하는 리플렛을 제작하였습니다.'
  },
  project6: {
    title: '사보디자인',
    image: 'img/p6.jpg',
    description: '영진직업전문학교의 디지털편집디자인부에 관한 주제로 만든 사보디자인입니다.'
  }
};

// 모달 열기 함수
function openModal(projectId) {
  const modal = document.getElementById('modal');
  const modalBody = document.getElementById('modal-body');
  const project = projects[projectId];

  modalBody.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <h2>${project.title}</h2>
    <p>${project.description}</p>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// 모달 닫기 함수
function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// 모달 외부 클릭시 닫기
function closeModalOnOutside(event) {
  if (event.target.id === 'modal') {
    closeModal();
  }
}

// ESC 키로 모달 닫기
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});