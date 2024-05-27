import Backend "../main";
import { test; suite } "mo:test/async";
import Principal "mo:base/Principal";
import Debug "mo:base/Debug";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Array "mo:base/Array";

let backend = await Backend.Hackfinity();
var hackathonID ="";
await suite(
    "Testing the organizer functionality",
    func() : async () {
        await test(
            "user should not be registered as an organizer",
            func() : async () {
                let rr = await backend.user_rank(Principal.fromText("2vxsx-fae"));
                assert (not Text.equal(rr, "organizer"));
            },
        );

        await test(
            "fail to create a new hackathon",
            func() : async () {
                let results = await backend.create_new_hackathon({
                    title = "Text";
                    highlightPhase = "Text";
                    location = "Text";
                    description = "Text";
                    categories = [];
                    deliverables = "Text";
                    image = "Text";
                    coverImage = "Text";
                    projectGoals = "Text";
                    hackathonTimelines = [];
                });

                assert (Nat.equal(results.status, 404));
            },
        );

        await test(
            "register as an organizer",
            func() : async () {
                let results = await backend.create_organizer_account({
                    fullName = "samuel";
                    userName = "samuel";
                    profilePic = "samuel";
                    industry = "samuel";
                    location = "samuel";
                });

                assert (Nat.equal(results.status, 200));
            },
        );

        await test(
            "succeed to create a new hackathon",
            func() : async () {
                let results = await backend.create_new_hackathon({
                    title = "Text";
                    highlightPhase = "Text";
                    location = "Text";
                    description = "Text";
                    categories = [];
                    deliverables = "Text";
                    image = "Text";
                    coverImage = "Text";
                    projectGoals = "Text";
                    hackathonTimelines = [];
                });

                assert (Nat.equal(results.status, 200));
            },
        );

        await test(
            "return all hackathons by the organizer",
            func() : async () {
                let results = await backend.get_organizer_hackathons();
                assert (Array.size(results.data) > 0);
            },
        );
    },
);

await suite(
    "Testing the participant functionality",
    func() : async () {
        await test(
            "user should not be registered as a participant",
            func() : async () {
                let rr = await backend.user_rank(Principal.fromText("2vxsx-fae"));
                assert (not Text.equal(rr, "participant"));
            },
        );

        await test(
            "fail to submit project for a hackathon",
            func() : async () {
                let results = await backend.get_organizer_hackathons();

                let (id, dd) = results.data[0];
                hackathonID := id;
                let subResults = await backend.add_submission(
                    hackathonID,
                    {
                        title = "HHHH";
                        description = "HHHH";
                        image = "HHHH";
                        githubLink = "HHHH";
                        liveUrlLink = "HHHH";
                        presentationSlides = "HHHH";
                    },
                );

                assert (Nat.equal(subResults.status, 404));
            },
        );

        await test ("register as a participant",
        func() : async () {
            let results = await backend.create_participant_profile ({
                fullName = "participant";
                email = "participant";
                city = "participant";
                gender =  #Male;
                profileImage = "participant";
                hackathonTheme = "participant";
        });
        assert (Nat.equal(results.status, 200));
    }
    );


     await test ("enroll in a hackathon",
        func() : async () {
            let results = await backend.register_for_hackathon (hackathonID);
        assert (Nat.equal(results.status, 200));
    }
    );



        await test(
            "succeed to submit project for a hackathon",
            func() : async () {
                Debug.print(hackathonID);
                let subResults = await backend.add_submission(
                    hackathonID,
                    {
                        title = "HHHH";
                        description = "HHHH";
                        image = "HHHH";
                        githubLink = "HHHH";
                        liveUrlLink = "HHHH";
                        presentationSlides = "HHHH";
                    },
                );

                assert (Nat.equal(subResults.status, 200));
            },
        );

         await test(
        "get hackathon submissions",
        func() : async () {
            Debug.print(hackathonID);
            let results = await backend.get_hackathon_submissions(hackathonID);
            assert (Array.size(results.data) > 0);
        },
    );


    await test(
        "delete submission",
        func() : async () {
            let results = await backend.delete_submission(hackathonID);

            assert (Nat.equal(results.status, 200));
        },
    );

     await test(
        "there are no hackathon submissions",
        func() : async () {
            Debug.print(hackathonID);
            let results = await backend.get_hackathon_submissions(hackathonID);
            assert (Array.size(results.data) == 0);
        },
    );


    // await test(
    //     "return all hackathons by the organizer",
    //     func() : async () {
    //         let results = await backend.get_organizer_hackathons();
    //         assert (Array.size(results.data) > 0);
    //     },
    // );
    },
);
