const APIs = {
  home: "/mb/home",
  // AUTH API
  login: "/login",

  // Auth
  signup: "/signup",
  verify: "/verify",
  user: "/user",
  resendVerifyEmail: "/resendVerifyEmail",
  passwordResetOtpSend: "/reset-password/otp-send",
  passwordResetOtpVerify: "/reset-password/otp-verify",
  resetPassword: "/password/reset",
  updateNewPassword: "/reset-password/update-new-password",

  // Location
  countries: "/countries",
  states: "/states/",
  cities: "/cities/",
  areas: "/areas/",
  locationSearch: "/location/search",
  citySearch: "/city/search",

  subjectsByCategory: "/subjectsByCategory",
  subjectList: "/subjects/list",
  subjectIndex: "/subjects/index",
  subjects: "/subjects",
  searchTutor: "/tutor/search",

  experienceList: "/tutor/search",

  // Profile
  testApi: "/test",
  personalDetail: "/tutor/profile/personal-detail",
  updatePersonalDetail: "/tutor/profile/personal-detail/update",
  updateTaglineBio: "/profile/taglinebio/update",
  updateLocation: "/profile/location/update",
  updateFees: "/profile/fees/update",
  updateProfilePhoto: "/tutor/porfile/personal-detail/avatar-update",
  getProfilePhoto: "/tutor/porfile/personal-detail/profile-image",
  tutorSubjects: "/tutor/subjects",
  profileShow: "/profile",
  checkUserRegistered: "/profile/user/isRegistered",
  profileFollow: "/profile/follow/",
  profileUnfollow: "/profile/unfollow/",
  profileFollowers: "/profile/followers",
  profileIsFollowing: "/profile/isFollowing/",
  profileIsNotFollowing: "/profile/isNotFollowing",
  profileSearchByNameEmail: "/profile/searchByNameEmail",

  profileInterviewRequest: "/profile/interview/request",

  profileFollowUnfollow: "/profile/followUnfollow/",
  addToFriend: "/friends/add",
  // Qualification
  qualification: "/user/qualifications",

  // Experience
  experiences: "/user/experiences",
  resumes: "/user/resume",
  resumeDelete: "/user/resume/delete/",
  experienceTypes: "/user/experience/types",
  makeFeatured: "/user/resume/make-featured/",

  // Education
  degreeLevels: "/degree-levels",
  degrees: "/degrees",
  institutes: "/institutes",
  institutesSave: "/institute/save",
  institutesSearch: "/institutes/search",
  institutesType: "/institute-type",
  institutesTypeList: "/institute-type/list",
  reviews: "/reviews",
  reviewSubmit: "/reviews",
  roles: "/roles",
  subjectCategories: "/subject-categories",
  subjectCategoriesparent: "/subject-categories?parent_id=",
  subjectCategoriessubjectid: "subject-categories?subject_category_id=",

  // Assignment
  assignmentList: "/assignment/index",
  assignmentStore: "/assignment/store",
  assignmentUpdate: "/assignment/update",

  // Question
  questionList: "/question/index",
  questionStore: "/question/store",
  questionUpdate: "/question/update",

  // Videos
  videos: "/tutor/videos",
  videoUpdate: "/tutor/video/update",

  // Events
  eventCategories: "eventCategories",
  event: "/profile/event",
  myEvents: "/profile/event/my-events",
  events: "/profile/events",
  eventAttend: "/events/attend",

  eventEditById: "/profile/event/edit/",

  eventCategory: "/event/category",
  joinCommunity: "/community/join/",
  eventList: "/event/list",
  eventShow: "/event/show",
  eventCancelJoining: "/event/cancelJoiningEvent",
  eventAttendies: "/event/attendies",
  // Batch
  batchCategories: "batchCategories",
  batch: "/profile/batch",
  myBatches: "/profile/batch/my-batches",
  batchAddStudent: "/profile/batch/add-student",
  batchProfileStudents: "/profile/batch/students/",

  batches: "/profile/batches",
  batchAttend: "/batches/attend",

  batchEditById: "/profile/batch/edit/",
  batchUpdate: "profile/batch/update/",

  batchCategory: "/batch/category",
  batchList: "/batch/list",
  batchShow: "/batch/show",
  batchCancelJoining: "/batch/cancelJoiningEvent",
  batchAttendies: "/batch/attendies",

  profileLibrary: "/profile/library",
  profileAnnouncement: "/profile/announcement",
  profileEnrollments: "/profile/enrollments",

  //Order
  orderShow: "/order/show",
  orderUploadReceipt: "/order/upload-receipt/",

  // Tutorials
  tutorialCategories: "/tutorial/categories",
  tutorialSubCategories: "/tutorial/sub-categories",
  tutorialCourse: "/tutorial/course",
  courseCreate: "/tutorial/course/create",
  tutorialCourseShow: "/course/show/", // Slug should be pass at the en,
  tutorialList: "/tutorial/list",
  tutorialGroupSubmit: "/tutorial/group/create",
  tutorialGroupList: "/tutorial/group/index",
  tutorialGroupDelete: "/tutorial/group/delete",
  tutorialGroupSortUpdate: "/tutorial/group/sort-update",
  tutorialEdit: "/tutorial/edit/",
  currencies: "/currencies",
  industries: "/industries",

  paymentTypeList: "/payment-type",

  courseByOrder: "/course/order",
  profileQuestions: "/profile/questions",

  order: "/order",
  orderEarning: "/order/earning/list",
  orderCourse: "/order/course",

  tutorialsCreate: "/tutorial/create",
  tutorialsUpdate: "/tutorial/update",

  languages: "/languages",

  insightsPost: "https://ilmyst.com/insights/wp-json/wp/v2/posts",

  shopCategories: "/shop/category",
  shopProducts: "/shop/products",

  profileJob: "/profile/jobs",
  profileQuiz: "/profile/quiz",
  profileQuizQuestionAnswer: "/profile/quiz/questionAnswer",
  QuizAnswerSave: "/profile/quiz/question/answer/save",
  quizStart: "/profile/quiz/start",
  quizResult: "/profile/quiz/result/", // reference

  jobList: "/job/list",
  jobShow: "/job/show",
  jobApply: "/job/apply",
  jobApplicants: "/job/applicants",

  quizList: "/quiz/list",
  quizShow: "/quiz/show",
  quizQuestionShow: "/quiz/question/show",

  instructorRequest: "/profile/instructor/request",
  settingUpdate: "/profile-setting/update",

  // Social
  feedsSave: "/feeds/save",
  feedsGet: "/feeds/get",
  feedsPollAnswerSave: (pollId: string) => `/feeds/poll/answer/save/${pollId}`,
  likeSave: "/like/save",

  commentSubmit: `/comment`,

  layoutSearch: "/layout/search",

  becomeFriendsList: "/become-friends/list",

  // Ticket
  becomeTicket: "/ticket",

  notificationsList: "/notifications/list",
  notificationsMarkRead: "/notifications/mark-read",
  message: "/message",
  users: "/users",
  messageUnRead: "/message/unread",
  messageMarkRead: "/message/mark-read-messages",

  blogCategories: "/blog/categories",
  blogPostsHome: "/blog/home",
  blogPostList: (category: string) => `/blog/post/${category}`,
  blogPostDetail: (category: string, postSlug: string) =>
    `/blog/post/${category}/${postSlug}`,

  programUserJoin: "/program-user/join",
  profileFileUpload: "/profle/upload-file",

  getProgramBySlug: (slug: string) => `/program/detail/${slug}`,
  saveActivity: "/track",
};

export type ApisTypes = typeof APIs;
export default APIs;
