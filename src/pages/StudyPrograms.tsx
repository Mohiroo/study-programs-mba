import ProgramComponent from "../components/ProgramComponent/ProgramComponent";
import { StudyAPI } from "../store/API/StudyAPI";
import styles from "./StudyPrograms.module.scss";

const StudyPrograms = () => {
  const { data, isLoading, isError, isSuccess } = StudyAPI.useGetStudyProgramsQuery(null);

  return (
    <main className={styles.study_page} role={"application"}>
      {isLoading && <div className={styles.loader}></div>}
      {isError && <h1 className={styles.study_title}>Произошла ошибка :С </h1>}
      {isSuccess && (
        <>
          <h1 className={styles.study_title}>Специализированные дисциплины</h1>
          {data.map((program) => (
            <ProgramComponent
              key={program.id}
              title={program.title}
              specializedSubjects={program.specializedSubjects}
            />
          ))}
          <div className={styles.rectangles}>
            <div className={styles.rectangle_red}>
              <h3 className={styles.rectangle_title}>Практические модули</h3>
              <p className={styles.rectangle_text}>
                Работа над собственными проектами: практика групповых взаимодействий, кейс-методы,
                эссе
              </p>
            </div>
            <div className={styles.rectangle_black}>
              <h3 className={styles.rectangle_title}>Итоговая аттестация</h3>
              <p className={styles.rectangle_text}>
                Бизнес-проектирование (подготовка итоговой аттестационной работы, консультирование
                по бизнес-проектированию)
              </p>
              <p className={styles.rectangle_text}>Защита итоговой аттестационной работы</p>
            </div>
          </div>
        </>
      )}
    </main>
  );
};

export default StudyPrograms;
