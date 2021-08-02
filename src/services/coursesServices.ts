import { getRepository } from "typeorm";
import Courses from "../entities/Courses";

export async function allCourses() {
    return await getRepository(Courses).find();
}

export async function courseTeachers(courseId: number) {
    return await getRepository(Courses).findOne({
        where: { id: courseId },
        relations: ["teachers", "teachers.tests"]
    });
}

export async function courseSubjects(subjectId: number) {
    return await getRepository(Courses).findOne({
        where: { id: subjectId },
        relations: ["subjects", "subjects.period"]
    });
}

export async function createCourse(course: Courses) {
    return await getRepository(Courses).save(course);
}