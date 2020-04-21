// Link to youtube channel.
// Link to Calendly
// Instagram Feed
// Subscription to newsletter
// Email/Contact Form

//Eventually maybe I can add firebase -  users can create an account and there are options to create lists // add to community lists
import React from "react";

const contact = () => {
  return (
    <div className='content-text'>
      <h3>Contact</h3>
      <p>
        Here are a number number of ways you can connect with me or follow my
        classes{" "}
      </p>
      <div>
        <a href='https://www.instagram.com/monicajdixon/'>Instagram</a>
      </div>
      <div>
        <a href='https://www.youtube.com/channel/UCVgIYq5liRSB46JDoFiwF2Q/'>
          YouTube
        </a>
      </div>

      <h3>Class Schedule</h3>
      <h3>Calendly</h3>
      <h3>Email</h3>
    </div>
  );
};

export default contact;
