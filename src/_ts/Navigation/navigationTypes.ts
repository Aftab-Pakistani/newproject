import { IconsName } from "../IconTypes";

export type MainAppStackTypes = {
  Home: { icon: IconsName; text: string };
  Connections: { icon: IconsName; text: string };
  Transactions: { icon: IconsName; text: string };
  Profile: { icon: IconsName; text: string };

  Login: undefined;
  Register: undefined;
  OTPVerify: {
    item: any;
  };

  SubmitReview: undefined;
  Library: undefined;
  Community: undefined;
  Assignment: undefined;
  AskQuestion: undefined;
  Announcements: undefined;

  EnrollmentList: undefined;
  EnrollmentDetail: undefined;
  EnrollmentDetailsTabs: {
    item: any;
  };
  BatchManageDetailsTabs: {
    item: any;
  };

  QuizList: undefined;
  QuizStart: { reference_no: string };
  ConnectionList: undefined;
  ProfileView: undefined;
  EditProfile: undefined;
  Events: undefined;
  Batches: undefined;
  
  Messages: undefined;
  Chats: undefined;

 // Home: undefined;
  MyEnrollment: undefined;
  Module: undefined;
  LibraryDetail: undefined;
  Quiz: undefined;
  Jobs: undefined;
  JobDetails: undefined;
  Tutors: undefined;
  TutorDetails: undefined;
  Menus: undefined;
  BatchDetails: undefined;

  MoreList: undefined;
  MoreTabs: {
    item: any;
  };
  Personal_Details: undefined;
  Subjects: undefined;
  Fees: undefined;
  Location: undefined;
  Tag_Bio: undefined;
  Experience: undefined;
  Qualification: undefined;
  CV_manage: undefined;
  Courses_Manage: undefined;
  Batches_Manage: undefined;

  Batch_Students:undefined;
  Batch_Details:undefined;
  Batch_Pricing:undefined;
  Batch_Syllabas:undefined;
  Batch_Featured_Image:undefined;
  Batch_Library:undefined;
  Batch_Announcements:undefined;
  Batch_Assignments:undefined;
  Batch_Questions:undefined;
};
