"use client";
import React from "react";
import BoilerPlate from "../BoilerPlate";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { feedbackSchema } from "@/schema/feedbackSchema";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const Page = () => {
  const form = useForm<z.infer<typeof feedbackSchema>>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
      rating: 0,
    },
  });
  return (
    <BoilerPlate>
      <div className="w-full h-full py-16 px-5 flex justify-center items-center text-brand-text">
        <div className="w-full max-w-[1800px] grid grid-cols-8 gap-8">
          <div className="hidden sm:col-span-1 sm:block"></div>
          <Image
            className="hidden lg:col-span-3 lg:flex justify-center items-center place-self-center  w-full max-h-[450px]"
            src={"/image/feedback.svg"}
            width={200}
            height={200}
            alt="Feedback illustration"
          />
          <div className="col-span-8 sm:col-span-6 lg:col-span-3 flex flex-col w-full">
            <div className="flex w-full justify-center flex-col items-center">
              <p className="text-xs text-brand-accent_dark">
                Your opinion matters..
              </p>
              <h4 className="text-xl tracking-wider font-bold text-brand pb-3 text-nowrap">
                Send Feedback
              </h4>
              <p className="text-xs text-brand-accent_dark">
                Help us improve by sharing your experience..
              </p>
            </div>
            <Form {...form}>
              <form action="" className="flex flex-col gap-4 py-10">
                <FormField
                  control={form.control}
                  name="rating"
                  render={({}) => (
                    <FormItem>
                      <div className="flex justify-center items-center flex-nowrap">
                        {[...Array(5)].map((_, index) => (
                          <button
                            type="button"
                            key={index}
                            className={`text-2xl ${
                              index ? "text-gray-300" : "text-yellow-500"
                            }`}
                          >
                            ★
                          </button>
                        ))}
                      </div>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="fullname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Full Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Message here" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="bg-brand-secondary hover:bg-brand-accent_dark"
                >
                  Submit
                </Button>
              </form>
            </Form>
          </div>
          <div className="hidden sm:col-span-1 sm:block"></div>
        </div>
      </div>
    </BoilerPlate>
  );
};

export default Page;
