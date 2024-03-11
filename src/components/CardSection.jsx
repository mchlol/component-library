import React from "react";
import Card from "./Card"
import { HiOutlineCloudUpload } from "react-icons/hi";


export default function CardSection() {
    return (
    <section className="section--card">
        <div className="section-content">
            <h2>Cards</h2>
            <h3>With Icon</h3>
            <div className="flex-center">
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
            </div>
            <hr />
            <h3>Without Icon</h3>
            <div className="flex-center">
                <Card>
                    <Card.Header>
                        Easy Deployment
                    </Card.Header>
                    <Card.Text>
                        Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                    </Card.Text>
                </Card>
            </div>
        </div>

      </section>
    )
}