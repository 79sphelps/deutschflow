// import { getExercises } from "@/lib/api";
import { getExercisesFromDB } from "@/lib/db/exercises";
import PracticeClient from "./PracticeClient";
import { Exercise } from "@/types/exercises";

export default async function PracticePage({
  params,
}: {
  params: Promise<{ lessonId: string }>;
}) {
  const { lessonId } = await params;
  const data: Exercise = await getExercisesFromDB(lessonId) as unknown as Exercise;
  return <PracticeClient lessonId={lessonId} exercise={data} />;
}
