export { getLessonDifficultyText, getLessonTypeText, getLessonTypeColorClass };

function getLessonDifficultyText(difficulty = -1) {
  switch (difficulty) {
    case 0:
      return "All Levels";
    case 1:
      return "Intermediate";
    case 2:
      return "Advanced";
    default:
      return "No difficulty";
  }
}

function getLessonTypeText(lessonType) {
  switch (lessonType) {
    case 0:
      return "Technique";
    case 1:
      return "Repertoire";
    case 2:
      return "Interview";
    default:
      return "Lesson";
  }
}

function getLessonTypeColorClass(lessonType) {
  switch (lessonType) {
    case 0:
      return "color-yellow--dark";
    case 2:
      return "color-yellow--main";
    default:
      return "color-primary--main";
  }
}
