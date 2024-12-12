import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import supabase from "@/lib/supabase";
import toast, { Toaster } from "react-hot-toast";
import { useThemeSwitch } from "@/components/Hooks/useThemeSwitch";


export default function About() {
  const [mode] = useThemeSwitch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessful, setIsSuccessFul] = useState(false);
  const [feeback, setFeeback] = useState("");

  useEffect(() => {
    if (feeback && !isSuccessful) {
      setTimeout(() => setFeeback(""), 3000);
    }
  }, [feeback, isSuccessful]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeeback(""); 
    const { name, email, body } = formData;
    if (!name || !email || !body) {
      setFeeback("All fields are required");
      setIsSubmitting(false);
      return;
    }
    try {
      // ==== send data to supabase ==== \\
      // const { data, error } = await supabase
      //   .from("contacts")
      //   .insert({ name, email, body });
      // console.log("result send : ", data);
      // if (error) {
      //   throw error;
      // }

      // ==== send data to personal email ==== \\
      const response = await fetch('/api/send',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nama: name, email, body})
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'An error occurred while submitting the form.');
      }

      setFeeback("Form submitted successfully");
      setFormData({
        name: "",
        email: "",
        body: "",
      });
      toast("Your submission was successful. I’ll be in touch with you soon.", {
        icon: "👋",
        position: "top-right",
        duration: 5000,
        style: {
          borderRadius: "10px",
          borderRadius: "10px",
          background: mode === "dark" ? "#f5f5f5" : "#1b1b1b",
          color: mode === "dark" ? "#1b1b1b" : "#f5f5f5",
        },
      });
    } catch (error) {
      console.error("Error occurred:", error);
      setFeeback("An error occurred while submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <>
      <Head>
        <title>Fatah RobbySalam | Contact Me</title>
        <meta
          name="description"
          content="Feel free to contact me if you have amazing idea to create new project!"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Begin Today, I'm One Message Away 👋"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <Toaster />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 relative items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4">
            <div className="absolute top-0 -right-5 -z-10 h-[103%] w-[101.5%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-1 md:col-span-8">
              <h2 className="my-4 text-2xl font-bold capitalize text-lightGreen dark:text-lightGreen">
                What’s Next?
              </h2>

              <div className="w-full"></div>
              <p className="">
                My inbox is always open. Whether you have a question or just
                want to say hello, I'll try my best to get back to you! Feel
                free to message me about any relevant project updates.
              </p>
            </div>
            <div className="relative col-span-4 h-max xl:col-span-4 md:col-span-8 md:order-2">
              <div className="grid w-full grid-cols-2 sm:gap-6 relative items-center justify-center rounded-2xl rounded-br-2xl border  border-solid  border-dark bg-light p-6   dark:border-light dark:bg-dark xs:p-4">
                <div className="col-span-8 h-max xl:col-span-6 md:col-span-8 md:order-2">
                  <form
                    name="contact-form"
                    method="POST"
                    onSubmit={handleSubmit}
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact-form"
                    />
                    <p className="hidden">
                      <label>
                        Name
                        <input name="bot-field" />
                      </label>
                    </p>

                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark dark:text-light">
                        Your Name:
                        <input
                          type="text"
                          name="name"
                          required
                          autoComplete="off"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label className="block text-sm font-medium text-dark/75 dark:text-light">
                        Your Email:
                        <input
                          type="email"
                          name="email"
                          required
                          autoComplete="off"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <label
                        htmlFor="body"
                        className="block text-sm font-medium text-dark/75 dark:text-light"
                      >
                        Message:
                        <textarea
                          name="body"
                          id="body"
                          required
                          rows="4"
                          className="mt-1 p-2 w-full border border-solid border-dark rounded-md bg-light dark:border-light dark:bg-dark dark:text-light"
                          value={formData.body}
                          onChange={handleChange}
                        ></textarea>
                      </label>
                    </div>

                    <div className="col-span-1 p-2">
                      <button
                        type="submit"
                        className="px-4 py-2 font-bold capitalize text-light bg-dark border-2 border-solid border-dark dark:border-light dark:bg-light rounded-md hover:bg-transparent hover:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light  dark:text-dark"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Send it!"}
                      </button>
                    </div>

                    {feeback && (
                      <div className="col-span-1 p-2">
                        <p className="text-sm text-center">{feeback}</p>
                      </div>
                    )}
                    {/* <button onClick={testSendEmail}>
                      test send email
                    </button> */}
                    {/* <div className="col-span-1 p-2"> */}
                    {/* <button
                        className="px-4 py-2 font-bold capitalize text-light bg-dark border-2 border-solid border-dark dark:border-light dark:bg-light rounded-md hover:bg-transparent hover:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light  dark:text-dark"
                        onClick={testSendEmail}
                      >
                        test send resend
                      </button> */}
                    {/* </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* <EmailTemplate body={"Halloooo"} nama={"anon"} email={"anon@gmail.com"}/> */}
        </Layout>
      </main>
    </>
  );
}
