// Link to youtube channel.
// Link to Calendly
// Instagram Feed
// Subscription to newsletter
// Email/Contact Form

//Eventually maybe I can add firebase -  users can create an account and there are options to create lists // add to community lists
import React, { useState } from "react";
import { Typography, Button, TextField, FormControl } from "@material-ui/core";

const Contact = () => {
  const [showEmailSignup, setEmailSignup] = useState(false);
  // const [email, setEmail] = useState();

  const submitEmail = () => {
    //Need a way to get the email TextField value
    let email = "fjskdlfjskl";
    let name = "fjskdlfjskl";

    console.log("hi");
    window.open(
      `mailto:monica.dixon8@gmail.com?subject=I want cyber yoga&body=My name is ${name} and my email is ${email}. Please keep me up to date on your yoga classes.`
    );
    setEmailSignup(false);
  };

  return (
    <div className='content-text'>
      <Typography>
        <h2>Contact</h2>
        <p>
          Here are a number number of ways you can connect with me or follow my
          classes.
        </p>
        <div>
          <a>
            <Button
              variant='outlined'
              onClick={() => {
                showEmailSignup === true
                  ? setEmailSignup(false)
                  : setEmailSignup(true);
              }}
            >
              <h4>Join my weekly Zoom Yoga Class</h4>
            </Button>
          </a>
          {showEmailSignup ? (
            <div>
              {/* on submit prevent default? */}
              <FormControl>
                <TextField
                  fullWidth
                  helperText='Your name'
                  variant='outlined'
                  fullWidth
                  // onChange =
                />
                <TextField
                  fullWidth
                  helperText='Your email address'
                  variant='outlined'
                  fullWidth
                  // onChange =
                />
                <Button
                  variant='outlined'
                  onClick={() => {
                    submitEmail();
                  }}
                >
                  Let me know
                </Button>
              </FormControl>
            </div>
          ) : (
            <> </>
          )}
          <p>
            Every Sunday at 4pm Central. Open level, adapatible for all
            experiencel levels. Enter your email to receive more information
          </p>
          <a href='https://www.instagram.com/monicajdixon/'>
            Instagram ( @monicajdixon )
          </a>{" "}
          <br />
          Its about yoga, but just barely.
        </div>
        <div>
          <a href='https://www.youtube.com/channel/UCVgIYq5liRSB46JDoFiwF2Q/'>
            YouTube
          </a>
          <p>
            I'll continue to upload a number of 60 minute practices you can
            follow allong with at a range of intensity levels.
          </p>
        </div>

        <h3>
          Email me.{" "}
          <a href='mailto: monica.dixo8@gmail.com'>Monica.dixon8@gmail.com</a>
        </h3>
      </Typography>
    </div>
  );
};

export default Contact;
