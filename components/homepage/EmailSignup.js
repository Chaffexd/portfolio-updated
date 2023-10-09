import MailIcon from "../icons/MailIcon";
import WorkExperience from "./WorkExperience";
import Notification from "../layout/Notification";
import { useState, useEffect } from "react";

const EmailSignup = () => {
  const [emailSignUp, setEmailSignUp] = useState("");
  const [requestStatus, setRequestStatus] = useState();

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        // reset the requestStatus after 3 secs if success or error
        setRequestStatus(null);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  let notification;

  if (requestStatus === "success") {
    notification = {
      status: "success",
      title: "Success!",
      message: "You have successfully signed up!",
    };
  }

  if (requestStatus === "pending") {
    notification = {
      status: "success",
      title: "Working on it!",
      message: "We're working on your request...",
    };
  }

  function emailSignUpHandler(event) {
    event.preventDefault();

    setRequestStatus("pending");

    try {
      // add api here to send data to db
      console.log(emailSignUp);
      setRequestStatus("success");
      setEmailSignUp("");
    } catch (error) {
      console.log(error);
      setRequestStatus("error");
      return;
    }
  }

  return (
    <div className="max-md:mr-0 flex flex-col gap-16 mr-48">
      <form
        className="rounded-2xl border border-zinc-100 p-6"
        onSubmit={emailSignUpHandler}
      >
        <h2 className="flex text-sm font-semibold text-zinc-900">
          <MailIcon />
          <span className="ml-3">Stay up to date</span>
        </h2>
        <p className="mt-2 text-sm text-zinc-600">
          Get notified when I decide to write something, up to you!
        </p>
        <div className="mt-6 flex">
          <input
            placeholder="Email address"
            required
            className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3"
            type="email"
            value={emailSignUp}
            onChange={(event) => setEmailSignUp(event.target.value)}
          />
          <button className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70 ml-4 flex-none">
            Join
          </button>
        </div>
      </form>
      <WorkExperience />
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
    </div>
  );
};

export default EmailSignup;
