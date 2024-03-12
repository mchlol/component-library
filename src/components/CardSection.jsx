import React from "react";
import Card from "./Card"
import { HiOutlineCloudUpload } from "react-icons/hi";

export function CodeSnippet({type}) {

    const withIcon = `
    <Card>
        <Card.Icon>
            {svg, image or component}
        </Card.Icon>
        <Card.Header>
            Easy Deployment
        </Card.Header>
        <Card.Text>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card.Text>
    </Card>
    `;
  
    const withoutIcon = `
    <Card>
        <Card.Header>
            Easy Deployment
        </Card.Header>
        <Card.Text>
            Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
        </Card.Text>
    </Card>
    `;
  
    return (
      <code>
        {type === 'withIcon' ? withIcon : withoutIcon}
      </code>
    )
  }


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
            <h4>Usage</h4>
            <pre>
                <CodeSnippet type="withIcon" />
            </pre>
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
            <h4>Usage</h4>
            <pre>
                <CodeSnippet type="withoutIcon" />
            </pre>
        </div>

      </section>
    )
}