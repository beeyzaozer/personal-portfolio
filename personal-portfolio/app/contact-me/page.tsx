'use client';

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    reset(); 
  };

  return (
   <div className="max-w-6xl mx-auto">
     <h2 className="text-3xl font-bold mb-4 mt-4">Contact Me</h2>
    <section className="max-w-5xl mx-auto px-4 py-12 text-white bg-zinc-900 rounded-2xl mt-14">
      {/* <div className="mb-10">
        <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
        <p className="text-gray-400 mb-2">yeg2799@gmail.com</p>
        <div className="flex gap-4 mt-2">
          <a href="#" target="_blank"><Github /></a>
          <a href="#" target="_blank"><Linkedin /></a>
          <a href="#" target="_blank"><Instagram /></a>
        </div>
      </div> */}

     

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div>
          <input
            {...register("name")}
            placeholder="Name"
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div>
          <input
            {...register("subject")}
            placeholder="Subject"
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded"
          />
          {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
        </div>

        <div>
          <textarea
            {...register("message")}
            placeholder="Message"
            rows={4}
            className="w-full px-4 py-2 bg-zinc-800 border border-zinc-600 rounded"
          />
          {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-red-300 hover:bg-red-300/90 text-white py-2 rounded disabled:opacity-50 p-20 mx-auto"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
   </div>
  );
}
