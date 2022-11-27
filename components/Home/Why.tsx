import Link from "next/link";
import Image from "next/image";
import {
  PersonalizedLearning,
  TrustedContent,
  EmpowerTeachers,
} from "../../constants/images";

export default function Why() {
  return (
    <section className="why-section bg-accent py-8 md:py-12">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Why do Kunji Foundation exist?
        </h2>
        <div className="home-why-section flex">
          <div className="why-section-element flex flex-col items-center p-6 text-center">
            <Image
              src={PersonalizedLearning}
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h3 className="mb-4 text-xl font-bold">Personalized learning</h3>
            <p>
              Students practice at their own pace, first filling in gaps in
              their understanding and then accelerating their learning.
            </p>
          </div>
          <div className="why-section-element flex flex-col items-center p-6 text-center">
            <Image
              src={TrustedContent}
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h3 className="mb-4 text-xl font-bold">Trusted content</h3>
            <p>
              Created by experts, Khan Academy’s library of trusted,
              standards-aligned practice and lessons covers math K-12 through
              early college, grammar, science, history, SAT®, and more. It’s all
              free for learners and teachers.
            </p>
          </div>
          <div className="why-section-element flex flex-col items-center p-6 text-center">
            <Image
              src={EmpowerTeachers}
              alt="Picture of the author"
              width={100}
              height={100}
            />
            <h3 className="mb-4 text-xl font-bold">
              Tools to empower teachers
            </h3>
            <p>
              With Khan Academy, teachers can identify gaps in their students’
              understanding, tailor instruction, and meet the needs of every
              student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
