import { FC } from "react";
import { ISubject } from "../../model/IProgram";
import ProgramModule from "../ProgramModule/ProgramModule";
import styles from "./ProgramComponent.module.scss";

interface ProgramComponentProps {
  title: string;
  specializedSubjects: ISubject[];
}

const ProgramComponent: FC<ProgramComponentProps> = ({ title, specializedSubjects }) => {
  return (
    <article className={styles.component}>
      <p className={styles.component_title}>{title}</p>
      <div className={styles.component_modules}>
        <ProgramModule
          moduleNumber={1}
          specializedSubjects={specializedSubjects.slice(0, specializedSubjects.length / 2)}
        />
        <ProgramModule
          moduleNumber={2}
          specializedSubjects={specializedSubjects.slice(
            specializedSubjects.length / 2,
            specializedSubjects.length
          )}
        />
      </div>
    </article>
  );
};

export default ProgramComponent;
