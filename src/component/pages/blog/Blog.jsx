import React from "react";
import Navigation from "../../shared/Navigation";
import Footer from "../../shared/Footer";

const Blog = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="pb-8">
        <div>
          <h1 className=" text-2xl font-bold my-4">
            Q-1: What is an access token and refresh token? How do they work and
            where should we store them on the client-side?
          </h1>
          <p>
            <span className=" text-xl font-bold underline me-2">Ans:</span>
            <br />
            <span>
              Access Token:
              <br />
              When a user logins in, the authorization server issues an access
              token, which is an artifact that client applications can use to
              make secure calls to an API server. When a client application
              needs to access protected resources on a server on behalf of a
              user, the access token lets the client signal to the server that
              it has received authorization by the user to perform certain tasks
              or access certain resources.
              <br />
              Refresh Token:
              <br />
              For security purposes, access tokens may be valid for a short
              amount of time. Once they expire, client applications can use a
              refresh token to "refresh" the access token. That is, a refresh
              token is a credential artifact that lets a client application get
              new access tokens without having to ask the user to log in again.
            </span>
            <br />
            <br />
            <span>
              Where should we store token in Client Side:
              <br /> 1. Store it in local browser storage.
              <br />
              2. Store it in a cookie in client side, it can be safer than local
              browser storage. <br />
              3. Don't store the token but store username and password in the
              browser or client-side cookie, and then retrieve a new token by
              sending credentials silently.
            </span>
          </p>
        </div>
        <div>
          <h1 className=" text-2xl font-bold my-4">
            Q-2: Compare SQL and NoSQL databases?
          </h1>
          <div>
            <span className=" text-xl font-bold underline me-2">Ans:</span>
            <br />
            The comparisons between SQL and NoSQL :
            <br />
            <div className="overflow-x-auto my-4">
              <table className="table w-full">
                {/* head*/}
                <thead>
                  <tr className="active text-center">
                    <th>SQL</th>
                    <th>NoSQL</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                    <td>Non-relational or distributed database system.</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>
                      These databases have fixed or static or predefined schema
                    </td>
                    <td>They have a dynamic schema</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>
                      These databases are not suited for hierarchical data
                      storage.
                    </td>
                    <td>
                      These databases are best suited for hierarchical data
                      storage.
                    </td>
                  </tr>
                  {/* row 4 */}
                  <tr>
                    <td>These databases are best suited for complex queries</td>
                    <td>These databases are not so good for complex queries</td>
                  </tr>
                  {/* row 5 */}
                  <tr>
                    <td>Vertically Scalable</td>
                    <td>Horizontally scalable</td>
                  </tr>
                  {/* row 6 */}
                  <tr>
                    <td>Follows ACID property</td>
                    <td>
                      Follows CAP(consistency, availability, partition
                      tolerance)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div>
          <h1 className=" text-2xl font-bold my-4">
            Q-3: What is express js? What is Nest JS ?
          </h1>
          <p>
            <span className=" text-xl font-bold underline me-2">Ans:</span>
            <br />
            Nest JS: <br />
            Nest.JS is a framework that helps build Node.JS server-side
            applications. The Nest framework is built using TypeScript which
            allows developers to build highly scalable and testable
            applications. <br />
            Express JS: <br />
            Express is a small framework that sits on top of Node.js’s web
            server functionality to simplify its APIs and add helpful new
            features. It makes it easier to organize your application’s
            functionality with middle ware and routing. It adds helpful
            utilities to Node.js’s HTTP objects. It facilitates the rendering of
            dynamic HTTP objects.
          </p>
        </div>
        <div>
          <h1 className=" text-2xl font-bold my-4">
            Q-4: What is MongoDB aggregate and how does it work?
          </h1>
          <p>
            <span className=" text-xl font-bold underline me-2">Ans:</span>
            <br />
            Aggregation is a way of processing a large number of documents in a
            collection by means of passing them through different stages. The
            stages make up what is known as a pipeline. The stages in a pipeline
            can filter, sort, group, reshape and modify documents that pass
            through the pipeline.
            <br /> <br />
            How does it's work:
            <br />
            The input of the pipeline can be a single collection, where others
            can be merged later down the pipeline. The pipeline then performs
            successive transformations on the data until our goal is achieved.
            This way, we can break down a complex query into easier stages, in
            each of which we complete a different operation on the data. So, by
            the end of the query pipeline, we will have achieved all that we
            wanted. This approach allows us to check whether our query is
            functioning properly at every stage by examining both its input and
            the output. The output of each stage will be the input of the next.
            There is no limit to the number of stages used in the query, or how
            we combine them. To achieve optimum query performance there are a
            number of best practices to take into account. We will come to those
            later in the article.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Blog;
