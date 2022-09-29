import { FC, useState } from "react";
import { ISubject } from "../../model/IProgram";
import styles from "./ProgramModule.module.scss";

interface ProgramModuleProps {
  moduleNumber: number;
  specializedSubjects: ISubject[];
}

const ProgramModule: FC<ProgramModuleProps> = ({ moduleNumber, specializedSubjects }) => {
  const [isActive, setIsActive] = useState<boolean>(false); // Мод для мобильных

  return (
    <section className={styles.module}>
      <p
        className={styles.module_title + (isActive ? " " + styles.module_title_active : "")}
        onClick={() => setIsActive(!isActive)}
      >
        {moduleNumber} модуль
      </p>
      <div
        className={styles.module_subjects + (isActive ? " " + styles.module_subjects_active : "")}
        role={"tree"}
      >
        {specializedSubjects.map((subject) => (
          <p key={subject.id} className={styles.module_subject} role={"treeitem"}>
            {subject.string}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ProgramModule;
