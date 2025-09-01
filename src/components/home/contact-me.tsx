"use client";

import { z } from "zod";
import Container from "../common/container";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import H2 from "../common/heading-two";
import { Textarea } from "../ui/textarea";
import H3 from "../common/heading-three";
import { BiLogoInstagramAlt } from "react-icons/bi";
import {
  FaDev,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaSquareXTwitter,
  FaXTwitter,
} from "react-icons/fa6";
import { SiRoadmapdotsh } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiLink } from "react-icons/fi";
import { RiInstagramFill } from "react-icons/ri";
import { AnimatedTooltip } from "../animated-tooltip";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const ContactMe = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    // @ts-ignore
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const people = [
    {
      id: 1,
      name: "Twitter",
      designation: "@graceno75417321",
      icon: <FaSquareXTwitter />,
      link: "https://x.com/graceno75417321",
    },
    {
      id: 2,
      name: "Linkedin",
      designation: "ASIIMWE (GRACE) NOBLE",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/asiimwe-noble-5849a6255/",
    },
    {
      id: 3,
      name: "Instagram",
      designation: "@i_am_grace_noble",
      icon: <RiInstagramFill />,
      link: "https://www.instagram.com/i_am_grace_noble/",
    },
    {
      id: 4,
      name: "Roadmap.sh",
      designation: "grace noble",
      icon: <SiRoadmapdotsh />,
      link: "https://roadmap.sh/u/gracenoble",
    },
    {
      id: 5,
      name: "Dev Community",
      designation: "grace noble",
      icon: <FaDev />,
      link: "https://dev.to/grace_noble",
    },
    {
      id: 6,
      name: "Github",
      designation: "ASIIMWE GRACE NOBLE",
      icon: <FaGithub />,
      link: "https://github.com/GRACENOBLE",
    },
  ];

  return (
    <section id="contact-me" className="pb-20">
      <H2 className="text-center">Let's talk</H2>
      <Container
        size="sm"
        className="flex flex-col lg:flex-row border rounded-[24px] px-2 py-2 border-white/20 w-fit"
      >
        <div className="lg:w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 bg-muted px-6 md:px-8 py-8 rounded-2xl lg:w-xl mx-auto"
            >
              <H3 className="mb-2 text-center">Send me an email</H3>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Noble"
                        {...field}
                        className="bg-white/20 placeholder:text-white/60 border-white/20 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Noble"
                        {...field}
                        className="bg-white/20 placeholder:text-white/60 border-white/20 text-white"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-40 bg-white/20 placeholder:text-white/60 border-white/20 text-white"
                        placeholder="Noble"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
        <div className="w-full p-8 flex flex-col justify-center">
          <H3 className="text-center">Or</H3>
          <p className="flex flex-col gap-6 font-medium text-white/70 pb-4 text-center">
            Find me on any of these
          </p>
          <div className="flex flex-row items-center justify-center mb-10 mt-10 w-full">
            <AnimatedTooltip items={people} />
          </div>
          <p className="text-center max-w-lg mx-auto">
            <span className="italic">
              "Software is like entropy: it is difficult to grasp, weighs
              nothing, and always tends to increase."
            </span>
            — Norman Augustine
          </p>
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
