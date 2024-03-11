import React from "react";
import Badge from "./Badge/Badge";

export default function BadgeSection() {
    return (
    <section className="section--badge">
        <h2>Badges</h2>

            <h3>Square</h3>

            <div className="flex-wrap-gap">

            <Badge>Grey</Badge>
            <Badge color="red">Red</Badge>
            <Badge color="yellow">yellow</Badge>
            <Badge color="green">green</Badge>
            <Badge color="blue">blue</Badge>
            <Badge color="indigo">indigo</Badge>
            <Badge color="purple">purple</Badge>
            <Badge color="pink">pink</Badge>

            </div>
        
            <hr />
        
            <h3>Pill</h3>

            <div className="flex-wrap-gap">


            <Badge shape="pill">Grey</Badge>
            <Badge color="red" shape="pill">Red</Badge>
            <Badge color="yellow" shape="pill">yellow</Badge>
            <Badge color="green" shape="pill">green</Badge>
            <Badge color="blue" shape="pill">blue</Badge>
            <Badge color="indigo" shape="pill">indigo</Badge>
            <Badge color="purple" shape="pill">purple</Badge>
            <Badge color="pink" shape="pill">pink</Badge>
        </div>

      </section>
    )
}