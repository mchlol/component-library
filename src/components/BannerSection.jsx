import React from "react";
import Banner from './Banner'

export function CodeSnippet({type}) {

  const multiline = `
  <Banner type="success">
    <Banner.Heading>
      Congratulations!
    </Banner.Heading>
    <Banner.Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
    </Banner.Text>
  </Banner>
  `;

  const singleLine = `
  <Banner type="error">
    <Banner.Heading>
      There is a problem with your application
    </Banner.Heading>
  </Banner>
  `;

  return (
    <code>
      {type === 'multiline' ? multiline : singleLine}
    </code>
  )
}

export default function BannerSection() {
  

    return (
      <section className="section--banner">
        <div className="section-content">
          <h2>Banners</h2>
          <h3>Multiline</h3>
          
          <div className="flex-center column">
          <h4>Neutral</h4>
            <Banner>
              <Banner.Heading>
                Update available
              </Banner.Heading>
              <Banner.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
              </Banner.Text>
            </Banner>
            <h3>Success</h3>
            <Banner type="success">
              <Banner.Heading>
                Congratulations!
              </Banner.Heading>
              <Banner.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.
              </Banner.Text>
            </Banner>
            <h3>Warning</h3>
            <Banner type="warning">
              <Banner.Heading>
                Attention
              </Banner.Heading>
              <Banner.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
              </Banner.Text>
            </Banner>
            <h3>Error</h3>
            <Banner type="error">
              <Banner.Heading>
                There is a problem with your application
              </Banner.Heading>
              <Banner.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.
              </Banner.Text>
            </Banner>
          </div>

          <h4>Usage</h4>
            <pre>
            <CodeSnippet type="multiline"/>
          </pre>


          <hr />
          <h3>Single line</h3>
          
          <div className="flex-center column">
              <h4>Neutral</h4>
              <Banner>
                <Banner.Heading>
                  Update available
                </Banner.Heading>
              </Banner>
              <h4>Success</h4>
              <Banner type="success">
                <Banner.Heading>
                  Congratulations!
                </Banner.Heading>
              </Banner>
              <h4>Warning</h4>
              <Banner type="warning">
                <Banner.Heading>
                  Attention
                </Banner.Heading>
              </Banner>
              <h4>Error</h4>
              <Banner type="error">
                <Banner.Heading>
                  There is a problem with your application
                </Banner.Heading>
              </Banner>
          </div>

          <h4>Usage</h4>
            <pre>
            <CodeSnippet type="singleline"/>
          </pre>
        </div>

      </section>
    )
}