import List "mo:core/List";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";

actor {
  type ServiceType = {
    #residentialCleaning;
    #commercialCleaning;
    #carpetCleaning;
    #windowCleaning;
    #other;
  };

  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    phone : Text;
    serviceType : ServiceType;
    message : Text;
    preferredDate : Time.Time;
    submittedAt : Time.Time;
  };

  var nextId = 1;

  let submissions = List.empty<ContactSubmission>();
  let lastSubmissionTime = Map.empty<Principal, Time.Time>();

  let spamThreshold = 3;
  let spamTimeframe = 24 * 60 * 60 * 1_000_000_000; // 24 hours in nanoseconds

  public shared ({ caller }) func submitContactForm(
    name : Text,
    email : Text,
    phone : Text,
    serviceType : ServiceType,
    message : Text,
    preferredDate : Time.Time,
  ) : async () {
    let currentTime = Time.now();
    let submissionCount = getSubmissionsByPrincipal(caller, currentTime);

    if (submissionCount >= spamThreshold) {
      Runtime.trap("You have exceeded the maximum number of submissions allowed in a 24-hour period.");
    };

    let newSubmission : ContactSubmission = {
      id = nextId;
      name;
      email;
      phone;
      serviceType;
      message;
      preferredDate;
      submittedAt = currentTime;
    };

    submissions.add(newSubmission);
    lastSubmissionTime.add(caller, currentTime);

    nextId += 1;
  };

  func getSubmissionsByPrincipal(principal : Principal, currentTime : Time.Time) : Nat {
    var count = 0;
    for (submission in submissions.values()) {
      if (submission.submittedAt >= currentTime - spamTimeframe) {
        count += 1;
      };
    };
    count;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.toArray();
  };
};
