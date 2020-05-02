import React, { useState } from "react";
import { spacing } from "@material-ui/system";

import {
  Typography,
  Button,
  TextField,
  FormControl,
  Container,
  Grid,
} from "@material-ui/core";

const Contact = () => {
  const [showEmailSignup, setEmailSignup] = useState(false);
  const [email, setEmail] = useState();
  const [name, setName] = useState();

  const submitEmail = () => {
    //Need a way to get the email TextField value

    console.log("hi");
    window.open(
      `mailto:monica.dixon8@gmail.com?subject=I want cyber yoga&body=My name is ${name} and my email is ${email}. Please keep me up to date on your yoga classes.`
    );
    setEmailSignup(false);
  };

  return (
    <div className='content-text'>
      <Container spacing={2}>
        <Typography>
          <h2>Contact</h2>
          <Grid item xs={12}>
            <p>
              Here are a number number of ways you can connect with me or follow
              my classes.
            </p>
            <p>
              Every Sunday at 4pm Central. Open level, adapatible for all
              experiencel levels. Enter your email to receive more information
            </p>
          </Grid>
          <Grid container direction='column' spacing={2}>
            <Grid item xs={12}>
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

              {showEmailSignup ? (
                <div>
                  <p>You'll be so happy.</p>
                  <FormControl>
                    <Grid item mt={2}>
                      <TextField
                        fullWidth
                        helperText='Your name'
                        variant='outlined'
                        fullWidth
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item mt={2}>
                      <TextField
                        fullWidth
                        helperText='Your email address'
                        variant='outlined'
                        fullWidth
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item mt={2}>
                      <Button
                        variant='outlined'
                        onClick={() => {
                          submitEmail();
                        }}
                      >
                        Let me know
                      </Button>
                    </Grid>
                  </FormControl>
                </div>
              ) : (
                <> </>
              )}
            </Grid>
          </Grid>
          <div>
            <h4>
              <a href='https://www.instagram.com/monicajdixon/'>
                Instagram ( @monicajdixon )
              </a>
            </h4>
            <p>Its about yoga, but just barely.</p>
            <h4>
              <a href='https://www.youtube.com/channel/UCVgIYq5liRSB46JDoFiwF2Q/'>
                YouTube
              </a>
            </h4>
            <p>
              I'll continue to upload a number of 60 minute practices you can
              follow allong with at a range of intensity levels.
            </p>
          </div>

          <h4>
            Email me.{" "}
            <a href='mailto: monica.dixo8@gmail.com'>Monica.dixon8@gmail.com</a>
          </h4>
        </Typography>
      </Container>
    </div>
  );
};

export default Contact;
