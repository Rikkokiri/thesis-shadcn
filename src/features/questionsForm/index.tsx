import { useQuestionsForm } from "./hooks/useQuestionsForm";
import { QuestionsList } from "./components/QuestionsList";

export function QuestionForm() {
  const questionsForm = useQuestionsForm();
  return <QuestionsList {...questionsForm} />;
}
