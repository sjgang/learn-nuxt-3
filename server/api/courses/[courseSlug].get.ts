import { getCourseDetails } from "~/server/model/course";

export default defineEventHandler((event) => {
  const courseSlug = getRouterParam(event, 'courseSlug') as string;
  const courseDetail = getCourseDetails(courseSlug);

  if (!courseDetail.course) {
    throw createError({
      statusCode : 500,
      statusMessage : 'Server Error',
    })
  }

  return courseDetail;
})