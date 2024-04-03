"use client";

import { upsertUserProgress } from "@/actions/user-progress";
import { courses, userProgress } from "@/db/schema";
import { useRouter } from "next/navigation";
import { startTransition, useTransition } from "react";
import { toast } from "sonner";
import Card from "./Card";

type Props = {
    courses: typeof courses.$inferSelect[]
    activeCourseId?: typeof userProgress.$inferSelect.activeCourseId
}

const List = ({
    activeCourseId,
    courses
}: Props) => {

    const router = useRouter();
    const [pending, setPending] = useTransition();

    const onClick = (id: number) => {
        if(pending) return;
        if(id === activeCourseId){
            return router.push('/learn');
        }

        startTransition(() => {
            upsertUserProgress(id).catch(() => {
                toast.error("Something went wrong 🧐")
            })
        });
    }

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
        {courses.map((course)=>(
            <Card 
                key={course.id}
                id={course.id}
                title={course.title}
                imageSrc={course.imageSrc}
                onClick={onClick}
                disabled={pending}
                active={course.id === activeCourseId}
            />
        ))}
    </div>
  )
}

export default List