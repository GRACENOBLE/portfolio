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

  return (
    <section id="contact-me" className="pb-20">
      <H2 className="text-center">Let's talk</H2>
      <Container
        size="sm"
        className="flex flex-col lg:flex-row border rounded-[24px] px-2 py-2 border-white/20"
      >
        <div className="lg:w-full">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 bg-muted px-6 md:px-8 py-8 rounded-2xl max-w-2xl mx-auto"
            >
              <H3 className="mb-2">Send me an email</H3>
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
        <div className="w-full lg:max-w-md p-8">
          <H3>Or</H3>
          <p className="flex flex-col gap-6 font-medium text-white/70 max-w-sm pb-4">
            Find me on any of these
          </p>
          <div className="flex flex-col gap-4">
            <Button size={"icon"}>
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
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactMe;
