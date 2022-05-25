import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-cyan-800 md:text-center text-4xl mt-8'>Difference between javascript and node.js</h1>
            <table className='w-10/12 mx-auto mt-10 border-separate border border-slate-400 mb-10'>
                <thead className='bg-slate-400'>
                    <th>JavaScript</th>
                    <th>Node.js</th>
                </thead>
                <tr >
                    <td><span className='font-bold'>1.</span>Javascript is a programming language that is used for writing scripts on the website. </td>
                    <td>NodeJS is a Javascript runtime environment. </td>

                </tr>
                <tr>
                    <td><span className='font-bold'>2.</span>Javascript can only be run in the browsers. </td>
                    <td>It is mostly used on the server-side. </td>

                </tr>
                <tr>
                    <td><span className='font-bold'>3.</span>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                    <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>

                </tr>
                <tr>
                    <td><span className='font-bold'>4.</span>Javascript is used in frontend development.</td>
                    <td>Nodejs is used in server-side development.</td>

                </tr>
                <tr>
                    <td><span className='font-bold'>5.</span>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                    <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>

                </tr>
                <tr>
                    <td><span className='font-bold'>6.</span>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
                    <td>Nodejs is written in C, C++and Javascript. </td>

                </tr>
            </table>
            <h1 className='text-cyan-800 md:text-center text-4xl mt-8 mb-10'>When should we use nodejs and when should we use mongodb</h1>
            <p className='w-10/12 mx-auto'>MongoDB and NodeJS are two different technologies. MonogDB is a database system which gives us a chance to efficiently store documents in a database and to perform operations like data updates, or to search documents by some criterias.</p>
            <p className='w-10/12 mx-auto mt-4'>Nodejs is a Javascript engine that we can write any application we want with (by programming in the Javascript language).It runs wer Javascript code.Most commonly, it is used to build servers that can respond to web requests, though it can be used for lots of other types of code too..</p>
            <p className='w-10/12 mx-auto mt-4'>MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data.</p>
            <p className='w-10/12 mx-auto mt-4'>MongoDB offers an API library that runs within a Nodejs application to give we programmatic access to MongoDB so we can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc...</p>

            
            <div> 
                <h1 className='text-cyan-800 md:text-center text-4xl mt-8 mb-10'>Difference between Sql And No Sql</h1> 
                <table className='w-10/12 mx-auto mt-10 border-separate border border-slate-400 mb-10'>
                    <thead className='bg-slate-400'>
                        <th>Sql</th>
                        <th>NoSql</th>
                    </thead>
                    <tr >
                        <td><span className='font-bold'>1.</span>SQL databases are relational </td>
                        <td>NoSQL databases are non-relational. </td>

                    </tr>
                    <tr>
                        <td><span className='font-bold'>2.</span>SQL databases use structured query language and have a predefined schema </td>
                        <td>NoSQL databases have dynamic schemas for unstructured data. </td>

                    </tr>
                    <tr>
                        <td><span className='font-bold'>3.</span>SQL databases are vertically scalable</td>
                        <td>NoSQL databases are horizontally scalable.</td>

                    </tr>
                    <tr>
                        <td><span className='font-bold'>4.</span>SQL databases are table-based.</td>
                        <td>NoSQL databases are document, key-value, graph, or wide-column stores.</td>

                    </tr>
                    <tr>
                        <td><span className='font-bold'>5.</span>SSQL databases are better for multi-row transactions. </td>
                        <td>NoSQL is better for unstructured data like documents or JSON.</td>

                    </tr>
                    <tr>
                        <td><span className='font-bold'>6.</span>It is the upgraded version of ECMA script that uses Chrome’s V8 engine written in C++.</td>
                        <td>Nodejs is written in C, C++and Javascript. </td>

                    </tr>
                </table>
            </div>
            <h1 className='text-cyan-800 md:text-center text-4xl mt-8 mb-10'>What is the purpose of jwt and how does it work?</h1>

            <p className='w-10/12 mx-auto'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.Each JWT contains encoded JSON objects, including a set of claims.JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
            <p className='w-10/12 mx-auto mt-4'>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            <p className='w-10/12 mx-auto mt-4'>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
            <p className='w-10/12 mx-auto mt-4 mb-16'>Once decoded, we will get two JSON strings:

                The header and the payload.
                The signature.
                The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.

                The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.

                There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.

                The signature ensures that the token hasnt been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. </p>


        </div>
        
    );
};

export default Blogs;