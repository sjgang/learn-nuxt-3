<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>Vue Master Course</q-toolbar-title>
        <nuxt-link v-slot="{navigate}" custom to="/">
          <q-btn stretch flat :label="$t('home')" no-caps @click="navigate"/>
        </nuxt-link>
        <q-separator dark vertical />
        <nuxt-link v-slot="{navigate}" custom to="/about">
          <q-btn stretch flat :label="$t('about')" no-caps @click="navigate"/>
        </nuxt-link>
        <q-separator dark vertical />
        <q-btn stretch flat :label="$t('youtube')" no-caps @click="moveYoutube()"/>
        <q-separator dark vertical />
        <nuxt-link v-slot="{navigate}" custom to="/admin">
          <q-btn stretch flat :label="$t('admin')" no-caps @click="navigate"/>
        </nuxt-link>
        <q-separator dark vertical />
        <q-btn-dropdown stretch flat no-caps :label="selectedLanguageName">
          <q-list padding dense>
            <q-item
              v-for="{ code, name } in languages"
              :key="code"
              v-close-popup
              clickable
              :active="$i18n.locale === code"
              @click="$i18n.locale = code"
            >
              <q-item-section>
                <q-item-label>{{ name }}</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-separator dark vertical />
        <NuxtLink
          v-if="!isAuthenticated"
          v-slot="{ navigate }"
          custom
          to="/login"
        >
          <q-btn
            stretch
            flat
            :label="$t('login')"
            no-caps
            @click="navigate()"
          />
        </NuxtLink>
        <q-btn
          v-else
          stretch
          flat
          :label="$t('logout')"
          no-caps
          @click="signOut()"
        />
      </q-toolbar>
    </q-header>
    <q-page-container :style="pageContainerStyle">
      <slot></slot>>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n';

//const {authUser, isAuthenticated} = useAuthUser();
//const authUser = useAuthUser();
//const isAuthenticated = useAuthenticated();

//const {signOut} = useAuth();
const authStore = useAuthStore();
const {user:authUser, isAuthenticated} = storeToRefs(authStore);
const {signOut} = authStore;

const pageContainerStyle = computed(() => ({
  maxWidth: '1080px',
  margin: '0 auto',
}));

const moveYoutube = async () => {
await navigateTo('https://youtube.com/@gymcoding', {
  external : true,
  open : {target : '_blank'}
})
};

interface Language {
  name:string;
  code:string;
}

const languages = ref([
  {name:'English', code:'en'},
  {name:'한국어', code:'ko'},
])

const {locale} = useI18n();

const selectedLanguageName = computed(
  () => languages.value.find((lang) => lang.code === locale.value)?.name
);

watch(locale, (val) => (useCookie('locale').value = val));
</script>
