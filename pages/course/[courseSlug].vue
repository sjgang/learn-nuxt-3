<template>
  <div class="q-pa-xl">
    <AppCard>
      <template #header>
        <div class="text-h5 text-weight-medium">{{course?.title}}</div>
        <div class="flex q-gutter-x-sm items-center q-mt-sm text-grey-8">
          <span class="flex items-center">
            <q-icon name="star" size="16px" color="orange" />
            <span>{{course?.rating}}</span>
          </span>
          <span>{{course?.reviewsCount}}</span>
          <span>&middot;</span>
          <span>{{course?.studentCount}}</span>
          <q-space />
          <a
            class="text-bold"
            :href="course?.reviewsUrl"
            target="_blank"
          >
            수강평 보기
          </a>
        </div>
      </template>
      <div class="q-mb-md">
        <VideoPlayer :src="course?.video"/>
      </div>
      <div class="row q-col-gutter-md">
        <div class="col-6">
          <q-btn
            label="인프런에서 수강하기"
            unelevated
            class="full-width"
            color="primary"
            :href="course?.inflearnUrl"
            target="_blank"
          />
        </div>
        <div class="col-6">
          <q-btn
            label="짐코딩 클럽에서 수강하기"
            unelevated
            class="full-width"
            color="red"
            :href="course?.gymcodingUrl"
            target="_blank"
          />
        </div>
      </div>
      <p class="q-mt-lg text-grey-8">{{ course?.content }}</p>
      <q-separator class="q-mb-lg" />
    <q-form class="q-gutter-y-md">
      <q-btn
        label="수강완료"
        class="full-width"
        color="green"
        unelevated
        :outline="completed ? false : true"
        :icon="completed ? 'check' : undefined"
        @click="toggleComplete"
      />
      <q-input
        v-model="memo"
        type="textarea"
        outlined
        dense
        placeholder="메모를 작성해주세요."
        rows="3"
				autogrow
      />
    </q-form>      
      <template #footer>
        <ClientOnly>
        <q-btn
          v-if="prevCourse"
          label="이전 강의"
          color="primary"
          unelevated
          @click="movePage(prevCourse.path)"
        />
        <q-btn
          label="쿼리 추가"
          color="dark"
          unelevated
          :to="{path:$route.path, query:{timestamp:Date.now()}}"
        />
        <q-space />
        <q-btn
          v-if="nextCourse"
          label="다음 강의"
          color="primary"
          unelevated
          @click="movePage(nextCourse.path)"
        />
      </ClientOnly>
      </template>
    </AppCard>
  </div>
</template>

<script setup lang="ts">
import { symOutlinedPlaylistAddCheckCircle } from '@quasar/extras/material-symbols-outlined';

const route = useRoute();
const courseSlug = route.params.courseSlug as string;
const { course, prevCourse, nextCourse } = await useCourse(courseSlug);

// if(!course) {
//   throw createError({
//     status:404,
//     statusMessage:'Course not found',
//     //fatal:true,
//     // data: {
//     //   myCustomField: true
//     // },
//   })
// }
//const title = ref('');
definePageMeta({
  key: (route) => route.fullPath,
  title:'My Home Page',
  // /title:title.value,
  pageType : '',
  //keepalive: true,
  alias:['/lecture/:courseSlug'],
  // validate: (route) => {
  //   const courseSlug = route.params.courseSlug as string;
  //   const {course} = useCourse(courseSlug);
  //    if(!course) {
  //  throw createError({
  //    status:404,
  //    statusMessage:'Course not found',
  //  })
  //  }
  //  return true;
  // }
  middleware: async (route) => {
    const courseSlug = route.params.courseSlug as string;
    const {course} = await useCourse(courseSlug);
     if(!course) {
      //return navigateTo('/');
      return abortNavigation(
        createError({
     status:404,
     statusMessage:'Course not found',
     fatal:true,
     }),
        )
   }
   //return true;
  }  
})
//console.log('route.meta.title: ', route.meta);
const memo = ref('');
const completed = ref(false);

const movePage = async(path: string) => {
  await navigateTo(path)
}

const toggleComplete = () => {
  //$fetch('/api/error');
  //showError('에러가 발생했습니다.');
  completed.value = !completed.value;
  throw createError('치명적인 오류가 발생했습니다.');
}
</script>

<style scoped></style>
