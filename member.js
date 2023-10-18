function skillsMember() {
  var member = document.getElementById("member");
  var memberSkills = document.getElementById("member-skills");
  var memberSkillsList = document.getElementById("member-skills-list");

  member.addEventListener("click", function() {
    memberSkills.classList.toggle("hidden");
    memberSkillsList.classList.toggle("hidden");
  });
}