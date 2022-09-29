import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { IProgram } from "../../model/IProgram";

export const StudyAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api-moscow-mba.herokuapp.com",
  }),
  endpoints: (build) => ({
    getStudyPrograms: build.query<IProgram[], null>({
      query: () => ({
        url: "products",
        params: {
          subjectsStickerType: "practiceModulesAndFinalAttestation",
          _sort: "specializedSubjects:DESC",
          _limit: 5,
        },
      }),
      transformResponse: (data: IProgram[]): IProgram[] => {
        data = data.filter((value) => value.specializedSubjects.length !== 0);
        return data;
      },
    }),
  }),
});
