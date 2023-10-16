To design a system like Medium, I would consider the following:

**Functional Requirements**

- Users should be able to create and publish articles, stories, essays, and other types of long-form content.
- Users should be able to read and follow other users.
- Users should be able to comment on and react to articles.
- Users should be able to curate their own reading lists.
- Medium should be able to recommend articles to users based on their interests.

**Non-Functional Requirements**

- Medium should be able to handle a large number of concurrent users.
- Medium should be highly scalable and reliable.
- Medium should be secure and protect user data.

**System Architecture**

I would design Medium as a microservices architecture. This would allow me to break down the app into smaller, more manageable components that can be independently scaled and developed.

**Microservices**

- **Authentication and Authorization:** This microservice would be responsible for authenticating and authorizing users.
- **User Profile:** This microservice would be responsible for managing user profiles, including their interests, following relationships, and reading lists.
- **Content:** This microservice would be responsible for storing and managing user-generated content, such as articles, stories, and essays.
- **Recommendations:** This microservice would be responsible for recommending articles to users based on their interests.
- **Search:** This microservice would be responsible for indexing and searching user-generated content.

**API Gateway**

An API gateway would be used to route requests from the Medium client apps to the appropriate microservices.

**Database**

I would use a distributed database, such as Cassandra or MongoDB, to store user profiles, user-generated content, and other data.

**Caching**

I would use a caching layer to improve the performance of the system. For example, I would cache frequently accessed articles in memory so that they can be served to users quickly.

**Load Balancing**

I would use a load balancer to distribute traffic across the different microservices.

**Monitoring and Observability**

I would implement a monitoring and observability system to track the performance and health of the system.

**Deployment**

I would deploy Medium to a cloud platform, such as AWS or GCP. This would allow me to scale the system up or down as needed.

**Security**

I would implement a number of security measures to protect user data, such as data encryption, access control, and intrusion detection.

This is just a high-level overview of how I would design a system like Medium. There are many other factors to consider, such as the specific features of the app and the budget and resources available.

**Additional Considerations**

In addition to the above, I would also consider the following when designing a system like Medium:

- **Content moderation:** Medium needs to have a system in place to moderate user-generated content and remove any content that violates its terms of service.
- **Search engine optimization (SEO):** Medium needs to be optimized for search engines so that users can easily find its content.
- **Mobile support:** Medium should be accessible on mobile devices, as well as desktop devices.
- **Internationalization:** Medium should be internationalized so that it can be used by users around the world.

I would also consider using a number of third-party services to improve the functionality of Medium, such as:

- **Cloud storage:** Medium could use a cloud storage service, such as Amazon S3, to store user-generated content.
- **Email service:** Medium could use an email service, such as Amazon SES, to send email notifications to users.
- **Analytics service:** Medium could use an analytics service, such as Google Analytics, to track user activity and engagement.

By carefully considering all of the above factors, I would be able to design a system that is scalable, reliable, secure, and meets the needs of users.

Here are some functional requirements questions to ask regarding the system design for a Medium-like app:

- What are the different types of users of the system? (e.g., writers, readers, moderators)
- What are the different tasks that each type of user can perform in the system? (e.g., writers can create and publish articles, readers can read and follow other users, moderators can remove inappropriate content)
- What are the different inputs and outputs of each task? (e.g., to create an article, a writer would need to input a title, body text, and tags; the output would be the published article)
- What are the different performance requirements for each task? (e.g., articles should be published within 1 second of being submitted)
- What are the different security requirements for each task? (e.g., only authenticated users should be able to create and publish articles)

In addition to these general questions, here are some more specific questions to ask about the functional requirements of a Medium-like app:

- How will the system handle different types of content, such as articles, stories, essays, and poems?
- How will the system support collaboration between multiple authors on a single piece of content?
- How will the system recommend articles to users based on their interests?
- How will the system allow users to curate their own reading lists?
- How will the system support search and discovery of content?

By asking these types of questions, you can get a better understanding of the functional requirements of the system and ensure that your design meets the needs of the users.

Here are some system requirements (performance, usability, visibility, etc.) questions to ask for a Medium-like app:

**Performance**

- How many concurrent users is the system expected to support?
- What are the response time requirements for different tasks, such as loading an article list, publishing an article, or searching for content?
- How will the system handle spikes in traffic?
- How will the system be monitored and scaled to ensure that it can meet performance requirements?

**Usability**

- How easy is it for users to create and publish content?
- How easy is it for users to discover and read content?
- How easy is it for users to manage their profile and settings?
- How easy is it for users to report problems or get help?

**Visibility**

- How will the system be visible to potential users?
- How will the system be optimized for search engines?
- How will the system be promoted on social media and other platforms?

**Other**

- What are the availability requirements for the system? (e.g., 99.9% uptime)
- What are the security requirements for the system? (e.g., user data encryption, access control)
- What are the scalability requirements for the system? (e.g., ability to handle increased traffic and content)

In addition to these general questions, you may also want to ask more specific questions about the system requirements for a Medium-like app, such as:

- How will the system handle different types of content, such as images, videos, and embedded media?
- How will the system support different types of devices, such as desktop computers, laptops, tablets, and smartphones?
- How will the system support different languages?
- How will the system be localized for different regions?

By asking these types of questions, you can get a better understanding of the system requirements and ensure that your design meets the needs of the business and the users.

## Step 1: Outline use cases, constraints, and assumptions

Gather requirements and scope the problem. Ask questions to clarify use cases and constraints. Discuss assumptions.

### Questions to Consider

- Who is going to use it?
- How are they going to use it?
- How many users are there?
- What does the system do?
- What are the inputs and outputs of the system?
- How much data do we expect to handle?
- How many requests per second do we expect?
- What is the expected read to write ratio?

## Step 2: Create a high level design

Outline a high level design with all important components.

### Actions

- Sketch the main components and connections
- Justify your ideas

## Step 3: Design core components

Dive into details for each core component. For example, if you were asked to design a url shortening service, discuss:

### Topics

- Generating and storing a hash of the full url
- MD5 and Base62
- Hash collisions
- SQL or NoSQL
- Database schema
- Translating a hashed url to the full url
- Database lookup
- API and object-oriented design

## Step 4: Scale the design

Identify and address bottlenecks, given the constraints. For example, do you need the following to address scalability issues?

### Considerations

- Load balancer
- Horizontal scaling
- Caching
- Database sharding

### Discussion Points

Discuss potential solutions and trade-offs. Everything is a trade-off. Address bottlenecks using principles of scalable system design.
