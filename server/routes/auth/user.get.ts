import { getUserFromEvent } from "~/server/utils/auth";

export default defineEventHandler((event) => {
  //const user = getUserFromEvent(event);
  const user = event.context.user;

  if (!user) {
    return {user:null}
  }

  return {
    user,
  };
});