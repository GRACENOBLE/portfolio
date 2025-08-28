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
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiLink } from "react-icons/fi";
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
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
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
                      <Input placeholder="Noble" {...field} />
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
                      <Input placeholder="Noble" {...field} />
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
                        className="h-40"
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
            {/* <Button size={"icon"}>
              <BiLogoInstagramAlt />
            </Button>
            <Button size={"icon"}>
              <FaSquareXTwitter />
            </Button>
            <Button size={"icon"}>
              <IoLogoWhatsapp />
            </Button>
            <Button size={"icon"}>
              <FaGithub />
            </Button>
            <Button size={"icon"}>
              <FiLink />
            </Button>
            <Button size={"icon"}>
              <BiLogoInstagramAlt />
            </Button>
            <Button size={"icon"}>
              <BiLogoInstagramAlt />
            </Button> */}

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
