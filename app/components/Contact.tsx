import { Link } from "@remix-run/react";
import { CONTACT } from "~/project-texts/project-experience-texts";

export const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <Link to={"#"} className="my-4">
          {CONTACT.email}
        </Link>
      </div>
    </div>
  );
};
