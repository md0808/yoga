import React from "react";
import { Typography } from "@material-ui/core";

const resources = () => {
  return (
    <div className='content-text'>
      <Typography>
        <h2>Resources</h2>
        <p>
          Here are some resources that I've drawn inspiration from recently or
          in the past.
        </p>
        <div>
          <h3>Yoga</h3>
          <p>
            <a href='https://www.youtube.com/watch?v=soA-PHxcgbI&t=531s'>
              Angela Fisher
            </a>
            <br />
            Dynamic, internal approach to yoga
          </p>
          <p>
            <a href='https://www.youtube.com/channel/UCVgIYq5liRSB46JDoFiwF2Q'>
              My Youtube Channel
            </a>
            <br />
            Mostly videos recorded from live zoom classes, with a few
            prerecorded classes.
          </p>
        </div>
        <div>
          <h3>Meditation and Mindfulness</h3>
          <p>
            <a href='https://wakingup.com/'>Sam Harris's Waking Up App</a>
            <br />
            Structured course, and daily guided meditations, and thoughtful
            talks on what it means to be mindful, and why its worth your time.
          </p>
        </div>
        <div>
          <h3>Personal, Relational, and Social Change</h3>
          <p>
            <a href='https://www.youtube.com/watch?v=66cYcSak6nE'>
              Gabor Mate{" "}
            </a>{" "}
            <br />
            Brief introduction to his work that examines the roots of addiction
            and the effects of childhood trauma.
          </p>
          <p>
            <a href='https://www.youtube.com/watch?v=NK8C_rCz1yw&list=LLSogJUQRsgHqhMkkhYLAJLw&index=2&t=0s'>
              Charles Eisenstein{" "}
            </a>{" "}
            <br />
            Writer and speaker who examines social and personal transitional
            spaces
          </p>
          <p>
            <a href='https://www.youtube.com/watch?v=bUzC9CrTpoo'>
              Eckhart Tolle{" "}
            </a>{" "}
            <br />
            Instant Calm
          </p>
          <p>
            <a href='https://www.youtube.com/watch?v=ObtmLBOfIRM'>
              Esther Perel
            </a>
            <br />
            Relationship Expert
          </p>
        </div>
        <div>
          <h3>Dance</h3>
          <p>
            <a href='https://www.instagram.com/ryan.heffington/'>
              Ryan Heffington
            </a>{" "}
            <br />
            Live instagram dance party/workout 5 days a week (during quarantine)
          </p>
        </div>
      </Typography>
    </div>
  );
};

export default resources;
