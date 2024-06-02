import Text "mo:base/Text";
import Int "mo:base/Int";
import List "mo:base/List";
import Trie "mo:base/Trie";
import Nat16 "mo:base/Nat16";

module Hackfinitty {

    public type ParticipantAccount = {
        fullName : Text;
        email : Text;
        city : Text;
        gender : {
            # Male;
            # Female;
        };
        profileImage : Text;
        hackathonTheme : Text;
    };
    

    public type UserProfileResponse={
        #participant:ParticipantAccount;
        #organizer:OrganizerAccount;
        #none:Text;
    };


    public type HackathonSubmission = {
        id:Text;
        owner:Principal;
        title : Text;
        description : Text;
        image : Text;
        githubLink : Text;
        liveUrlLink : Text;
        presentationSlides : Text;
        score:Nat;
    };

     public type HackathonSubmissionPayload = {
        title : Text;
        description : Text;
        image : Text;
        githubLink : Text;
        liveUrlLink : Text;
        presentationSlides : Text;
    };

    public type Timeline = {
        eventName : Text;
        dueDate : Int;
    };


    public type NewHackathonPayload={
        title : Text;
        highlightPhase : Text;
        location : Text;
        description : Text;
        categories : [Text];
        deliverables : Text;
        image : Text;
        coverImage : Text;
        projectGoals : Text;
        // deadline:Int;
        hackathonTimelines : [Timeline];
    };



    public type NewHackathon = {
        owner:Principal;
        title : Text;
        highlightPhase : Text;
        location : Text;
        description : Text;
        categories : [Text];
        deliverables : Text;
        image : Text;
        coverImage : Text;
        projectGoals : Text;
        // deadline:Int;
        hackathonTimelines : [Timeline];
        participants : [Text];
    };

    public type OrganizerAccount = {
        fullName : Text;
        userName : Text;
        profilePic : Text;
        industry : Text;
        location : Text;
    };

    public type Response<T> = {
    status : Nat16;
    status_text : Text;
    data : ?T;
    error_text : ?Text;
  };

};
