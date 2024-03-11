import React from "react";
import Banner from './Banner'

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
          <hr />
          <h3>Single line</h3>
          
          <div className="flex-center column">
              <h4>Neutral</h4>
              <Banner>
              <Banner.Heading>
                  Update available
              </Banner.Heading>
              </Banner>
              <h3>Success</h3>
              <Banner type="success">
              <Banner.Heading>
                  Congratulations!
              </Banner.Heading>
              </Banner>
              <h3>Warning</h3>
              <Banner type="warning">
              <Banner.Heading>
                  Attention
              </Banner.Heading>
              </Banner>
              <h3>Error</h3>
              <Banner type="error">
              <Banner.Heading>
                  There is a problem with your application
              </Banner.Heading>
              </Banner>
          </div>
        </div>

      </section>
    )
}