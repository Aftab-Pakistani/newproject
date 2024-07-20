export type ProfileCompletionType = {
  label: string;
  percentage: number;
  valid: boolean;
};
export type ProfileCompletionTypes = {
  add_experience: ProfileCompletionType;
  add_qualification: ProfileCompletionType;
  add_subjects_expertise: ProfileCompletionType;
  choose_event_categories: ProfileCompletionType;
  manage_cvs: ProfileCompletionType;
  monthly_hourly_fees: ProfileCompletionType;
  personalDetail: ProfileCompletionType;
  set_a_tagline_and_bio: ProfileCompletionType;
  set_your_locatio: ProfileCompletionType;
};
export type UserResponseType = null | {
  cnic: any;
  completion_percentage: any;
  email: any;
  first_name: any;
  gender: any;
  id: any;
  is_instructor: any;
  last_name: any;
  latitude: any;
  longitude: any;
  over_view: any;
  profile_completion: ProfileCompletionTypes;
  profile_image: any;
  profile_setting: any;
  role_id: any;
  short_desc: any;
  tag_line: any;
  test: any;
  tutor: any;
  user_name: any;
  verifie: any;
};
