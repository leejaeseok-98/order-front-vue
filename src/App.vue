<template>
  <!-- router-view를 통해 router파일에서 설정한 url경로로  라우팅한 화면을 여기서 보여주겟다는 뜻. -->
  <!-- vuetify에서는 모든 태그의 최상단에 v-pp으로 감싸져 있어야 정상저그올 동작-->
  <v-app>
    <HeaderComponent/>
    <v-main>
      <router-view/>
  </v-main>
    <FooterComponent/>
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default {
  // 화면을 import한 이후에 template에서 사용하려고 할때는 components에 나열.
  components: {
    HeaderComponent, FooterComponent
  }
}
</script>


<!-- assets는 이미지 넣어두는 곳 (정적 리소스) -->
 <!-- 상태관리 같은것 store에 저장 -->
  <!-- views는 독립적인 화면을 넣는다 -->