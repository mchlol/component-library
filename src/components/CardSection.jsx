import React from "react";
import Card from "./Card"
import { HiOutlineCloudUpload } from "react-icons/hi";


export default function CardSection() {
    return (
    <section className="section--card">
        <h2>Cards</h2>

        <h3>With Icon</h3>

        <Card>
            <Card.Icon>
                <HiOutlineCloudUpload />
            </Card.Icon>
            <Card.Header>
                Easy Deployment
            </Card.Header>
            <Card.Text>
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
            </Card.Text>
        </Card>

        <h3>Without Icon</h3>

        <Card>
            <Card.Header>
                Easy Deployment
            </Card.Header>
            <Card.Text>
                Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
            </Card.Text>
        </Card>



      </section>
    )
}