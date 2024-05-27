# Backend API Documentation

This document describes the functions available on the backend canister.

We have three major entities that can call the backend functions.

    Admins
    Participants
    Organizers

- add_admin : adds a neww admin principal address. It can only be called by another admin or the identity which deployed the backend canister

- delete_admin : deletes a neww admin principall address. It can only be called by another admin or the identity which deployed the backend canister

- get_all_admins: returns a list of all the admin Principals available. anyone can call this function


- add_category : adds a new category to the list. Can only be called by an admin or deployer identity

- delete_category : adds a new category to the list. Can only be called by an admin or deployer identity

- get_all_categories: returns a list of all the categories available. open

- create_organizer_account : allows the user to register as an organizer on the platform. open to anyone


- create_new_hackathon : allows the user to create a new hackathon. Only users registered as organizers can call this function


- get_all_hackathons : returns all the hackathons available on the platform. open

- delete_hackathon : deletes a hackathon entry from the platform. Can only be called by the organizer that registered the hackathon


- get_organizer_hackathons : returns all the hackathons registered by a specific organizer. open

 - register_for_hackathon : allows a user to enrol in a particular hackathon. User must have been registered as a participant

- get_participant_hack_submission : returns the participant's submission for a particular hackathon

- get_user_profile : returns the profile details about the user. open

- get_all_participants : returns profile details for every user registered as a participant. open

- add_submission : allows the user to submit their project for a specific hackathon. User must have a participant account

- delete_submission : allows the participant to delete their project submission for a specific hackathon.

- rank_hackathon_submission : allows hackathon organizer to give score to a specific project submission of their hackathon

- get_participant_hackathons : returns all the hackathons that the participant has registered for

- get_hackathon_submissions : returns all the projects that have been submitted for a specific hackathon

- create_participant_profile : allows the user to register as a participant on the platform

- isParticipant : returns a boolean on whether or not the user is a participant

- isOrganizer : returns a boolean on whether or not the user is an organizer





```

type UserProfileResponse = 
 variant {
   none: text;
   organizer: OrganizerAccount;
   participant: ParticipantAccount;
 };
type Timeline = 
 record {
   dueDate: int;
   eventName: text;
 };
type Response_8 = 
 record {
   data: opt vec principal;
   error_text: opt text;
   status: nat16;
   status_text: text;
 };
type Response_7 = 
 record {
   data: opt vec text;
   error_text: opt text;
   status: nat16;
   status_text: text;
 };
type Response_6 = 
 record {
   data: opt vec record {
                   principal;
                   OrganizerAccount;
                 };
   error_text: opt text;
   status: nat16;
   status_text: text;
 };
type Response_5 = 
 record {
   data: opt vec record {
                   principal;
                   ParticipantAccount;
                 };
   error_text: opt text;
   status: nat16;
   status_text: text;
 };
type Response_4 = 
 record {
   data: opt vec HackathonSubmission;
   error_text: opt text;
   status: nat16;
   status_text: text;
 };
type Response_3 = 
 record {
   data: opt HackathonSubmission;
   error_text: opt text;
   status: nat16;
   status_text: text;
 };
type Response_2 = 
 record {
   data: opt vec record {
                   text;
                   NewHackathon;
                 };
   error_text: opt text;
   status: nat16;
   status_text: text;
 };
type Response_1 = 
 record {
   data: opt record {
               profile: UserProfileResponse;
               rank: text;
             };
   error_text: opt text;
   status: nat16;
   status_text: text;
 };
type Response = 
 record {
   data: opt text;
   error_text: opt text;
   status: nat16;
   status_text: text;
 };
type ParticipantAccount = 
 record {
   city: text;
   email: text;
   fullName: text;
   gender: variant {
             Female;
             Male;
           };
   hackathonTheme: text;
   profileImage: text;
 };
type OrganizerAccount = 
 record {
   fullName: text;
   industry: text;
   location: text;
   profilePic: text;
   userName: text;
 };
type NewHackathonPayload = 
 record {
   categories: vec text;
   coverImage: text;
   deliverables: text;
   description: text;
   hackathonTimelines: vec Timeline;
   highlightPhase: text;
   image: text;
   location: text;
   projectGoals: text;
   title: text;
 };
type NewHackathon = 
 record {
   categories: vec text;
   coverImage: text;
   deliverables: text;
   description: text;
   hackathonTimelines: vec Timeline;
   highlightPhase: text;
   image: text;
   location: text;
   owner: principal;
   participants: vec text;
   projectGoals: text;
   title: text;
 };
type Hackfinity = 
 service {
   add_admin: (principal) -> (Response);
   add_category: (text) -> (Response);
   add_submission: (text, HackathonSubmissionPayload) -> (Response_3);
   create_new_hackathon: (NewHackathonPayload) -> (Response);
   create_organizer_account: (OrganizerAccount) -> (Response);
   create_participant_profile: (ParticipantAccount) -> (Response);
   delete_admin: (principal) -> (Response);
   delete_category: (text) -> (Response);
   delete_hackathon: (text) -> (Response);
   delete_submission: (text) -> (Response);
   get_all_admins: () -> (Response_8) query;
   get_all_categories: () -> (Response_7) query;
   get_all_hackathons: () -> (Response_2) query;
   get_all_organizers: () -> (Response_6) query;
   get_all_participants: () -> (Response_5) query;
   get_hackathon_submissions: (text) -> (Response_4) query;
   get_organizer_hackathons: (principal) -> (Response_2);
   get_participant_hack_submission: (text, principal) -> (Response_3);
   get_participant_hackathons: (principal) -> (Response_2) query;
   get_user_profile: (principal) -> (Response_1) query;
   isOrganizer: (principal) -> (bool);
   isParticipant: (principal) -> (bool);
   rank_hackathon_submission: (text, text, nat) -> (Response);
   register_for_hackathon: (text) -> (Response);
 };
type HackathonSubmissionPayload = 
 record {
   description: text;
   githubLink: text;
   image: text;
   liveUrlLink: text;
   presentationSlides: text;
   title: text;
 };
type HackathonSubmission = 
 record {
   description: text;
   githubLink: text;
   id: text;
   image: text;
   liveUrlLink: text;
   owner: principal;
   presentationSlides: text;
   score: nat;
   title: text;
 };
service : () -> Hackfinity





```