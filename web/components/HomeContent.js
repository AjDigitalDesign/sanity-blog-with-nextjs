import React from "react";
import Link from "next/link";
import client from "../client";

function toExcerpt(blocks = []) {
  return blocks
    .map(block => {
      if (block._type !== "block" || !block.children) {
        return "";
      }
      return block.children.map(child => child.text).join("");
    })
    .join("\n\n")
    .substring(0, 120);
}

const HomeContent = ({ data }) => {
  const { posts } = data;

  console.log(posts);

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {posts.map(
              ({ _id, title, name, slug, _updatedAt, body }) =>
                slug && (
                  <div key={_id} className="post-preview">
                    <Link href="../post/[slug]" as={`../post/${slug.current}`}>
                      <a>
                        <h2 className="post-title">{title}</h2>
                        <p className="post-subtitle">{toExcerpt(body)}...</p>
                      </a>
                    </Link>{" "}
                    <p className="post-meta">
                      Posted by
                      <a> {name} </a>
                      on {new Date(_updatedAt).toDateString()}
                    </p>
                  </div>
                )
            )}
            <hr />
          </div>
        </div>
        <style jsx>{`
          .post-preview > a {
            color: #212529;
          }

          .post-preview > a:focus,
          .post-preview > a:hover {
            text-decoration: none;
            color: #0085a1;
          }

          .post-preview > a > .post-title {
            font-size: 30px;
            margin-top: 30px;
            margin-bottom: 10px;
          }

          .post-preview > a > .post-subtitle {
            font-weight: 300;
            margin: 0 0 10px;
          }

          .post-preview > .post-meta {
            font-size: 18px;
            font-style: italic;
            margin-top: 0;
            color: #868e96;
          }

          .post-preview > .post-meta > a {
            text-decoration: none;
            color: #212529;
          }

          .post-preview > .post-meta > a:focus,
          .post-preview > .post-meta > a:hover {
            text-decoration: underline;
            color: #0085a1;
          }

          @media only screen and (min-width: 768px) {
            .post-preview > a > .post-title {
              font-size: 36px;
            }
          }
        `}</style>
      </div>
    </React.Fragment>
  );
};

export default HomeContent;
