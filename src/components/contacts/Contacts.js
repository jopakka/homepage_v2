import React from "react";
import "./Contacts.css";
import {ContentData} from "../../resources/ContentData";
import ContactItem from "./ContactItem";

const Contacts = () => {
    const data = ContentData.contacts;
    return (
        <>
            <h1>{data.title}</h1>
            <div className="center contacts">
                {ContentData.contacts.links.map(con => <ContactItem key={con.key} type={con.key} href={con.url} />)}
            </div>
        </>
    );
};

export default Contacts;