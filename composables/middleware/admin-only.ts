import { useAuthenticated } from "../auth";

export default defineNuxtRouteMiddleware(() => {
  //const {isAdmin, isAuthenticated} = useAuthUser();
  //const isAdmin = useAdmin();
  //const isAuthenticated = useAuthenticated();
  const {isAdmin, isAuthenticated} = storeToRefs(useAuthStore());

  if (!isAuthenticated.value) {
    return navigateTo('/login')
  }
  if (!isAdmin.value) {
    return navigateTo('/');
  }
});