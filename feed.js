document.getElementById("feedback-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name  = document.getElementById("name").value;
    var rollNo = document.getElementById("rollNo").value;
    var feedback = document.getElementById("feedback").value;

    var emailBody = "Roll No: " + rollNo + "\n\nName Of the Sender: "+ name + "\n\nFeedback:\n" + feedback;
    var subject = "Feedback Submission";

    // Open the user's default email client with the feedback details
    var mailToLink = "mailto:saianvesh736@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(emailBody);
    window.location.href = mailToLink;
});
