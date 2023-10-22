### To design a system like Medium, I would consider the following:

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

For an application like Medium, which is essentially a content-based platform with user profiles, articles, comments, claps, and recommendations, multiple database requirements come into play.

1. **User Profiles and Account Management**: Users have profiles, authentication details, and other account-related information.
2. **Content Storage**: The platform hosts articles, which might include text, images, embedded media, etc.
3. **Interactions**: This includes comments, claps, follows, bookmarks, etc.
4. **Recommendations and Analytics**: Based on user behavior, articles read, claps, etc., you might want to generate reading recommendations.

Considering these requirements, here's a possible multi-database approach:

### 1. Relational Database (SQL):

**Example**: PostgreSQL, MySQL

**Purpose**:

- Manage user profiles, including authentication, user metadata, and follower relationships.
- Handle content metadata like article titles, authors, publish dates, tags, etc.
- Store interactions such as comments, claps, and bookmarks.
- Why? Relational databases can efficiently manage structured data and the relations between different entities, like the relationship between users and articles they've authored, or comments and the article/user they're associated with.

### 2. Document-Oriented Database:

**Example**: MongoDB

**Purpose**:

- Store the actual content of the articles. These can be stored as documents, allowing for flexibility in content structure (some articles might have images, others might not; some might have embedded videos, others might not).
- Why? Document databases are schema-less, allowing for flexibility in the content and structure of the articles. This ensures the platform can evolve without constantly changing the database schema.

### 3. Search Engine:

**Example**: Elasticsearch

**Purpose**:

- Index articles to make them searchable by users. Elasticsearch can provide real-time, full-text search capabilities, making it easier for users to discover content.
- Why? While SQL databases can handle search functionalities to some extent, a dedicated search engine provides better performance and more sophisticated search features.

### 4. In-memory Data Store:

**Example**: Redis

**Purpose**:

- Caching frequently accessed data, reducing database load and improving access speeds.
- Handling session data for logged-in users.
- Why? To provide fast access to frequently used data and improve overall application performance.

### 5. Object Storage:

**Example**: Amazon S3, Google Cloud Storage

**Purpose**:

- Store media assets like images, videos, and other large files associated with articles.
- Why? Object storage solutions are scalable and cost-effective for storing large amounts of unstructured data like media files.

In conclusion, while you can start with a single database type (like a relational database) in the initial stages of your application, as your platform grows and requirements become more complex, using a combination of specialized databases can provide the best performance and user experience. Always analyze the specific needs of your application and choose the appropriate database technologies accordingly.

### Server side rendering vs Client side rendering

In the context of designing a system for a medium-like blog, whether to choose server-side rendering (SSR) or client-side rendering (CSR) depends on the goals, user experience requirements, and technical considerations of the platform. Each approach has its own benefits and trade-offs.

### Server-Side Rendering (SSR):

**Pros:**
1. **SEO Friendly**: Search engines can more easily crawl and index the content since the HTML is fully rendered on the server before sending it to the client.
2. **Faster Initial Load**: The user sees the content more quickly because the content is rendered and sent from the server directly.
3. **Consistency**: What's rendered on the server is exactly what the user sees, reducing potential discrepancies caused by client-side JavaScript errors or inconsistencies.
4. **Less Client-Side Work**: Older devices or browsers will perform better because they don't have to execute as much JavaScript as they would with CSR.

**Cons:**
1. **Server Load**: The server has to process each request by rendering the entire page, which can put more strain on the server, especially under high traffic.
2. **TTFB (Time To First Byte)**: Might be higher since the server is rendering content before sending it.
3. **Less Interactive**: Without client-side frameworks, making interactive UIs can be more challenging.

### Client-Side Rendering (CSR):

**Pros:**
1. **Interactivity and Rich UI**: Using frameworks like React, Vue, or Angular can lead to more dynamic and interactive user experiences.
2. **Reduced Server Load**: The server primarily sends static files to the client, offloading rendering to the client's browser.
3. **Single Page Applications (SPAs)**: Smooth transitions between pages and states without full page reloads are possible.
4. **Scalability**: Serving static files can be easily cached and scaled using CDNs.

**Cons:**
1. **SEO Challenges**: Some search engines may not index client-rendered content as effectively, though this has improved in recent years with search engines becoming better at indexing JavaScript-rendered content.
2. **Slower Initial Load**: The browser has to load JavaScript files and then render the content, which can lead to a perceptible delay for the user, especially on slower networks or devices.

### Conclusion:

For a medium-like blog where content discovery through search engines is crucial, SSR can be a more favorable choice due to its SEO benefits and faster initial content visibility. However, this doesn't mean you can't utilize CSR for certain dynamic parts of the website, leading to a hybrid approach known as **Server-Side Rendering with Client-Side Hydration**, where the server sends a fully-rendered page to the client and then JavaScript takes over, making the page interactive.

### Offline access to medium blog

Offline access for a Medium-like blog platform is a valuable feature, especially for readers who want to save articles for later reading in areas with no internet connectivity. Here's how you can approach designing offline access:

### 1. Service Workers:

A **Service Worker** is a script that runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction, such as push notifications and background sync. The most significant feature in the context of offline access is its ability to intercept and cache network requests, enabling the creation of web experiences that can work offline.

**Steps to implement offline access using Service Workers:**

- **Registration**: Register a service worker script on your site's pages. This script will be responsible for managing the caching and network requests.
  
- **Caching**: When the service worker is installed, you can dictate which assets (HTML, CSS, JS, images) you want to cache. You can also cache assets dynamically as they're fetched.

- **Request Interception**: The service worker can intercept network requests. When offline, the service worker can serve assets and pages from the cache instead of the network.

### 2. IndexedDB:

While Service Workers handle the caching of assets and static content, **IndexedDB** is a low-level API for client-side storage of significant amounts of structured data, including files and blobs. This can be useful for storing article content and other dynamic data offline.

- **Storing Articles**: Whenever a user reads an article, save the article's content to IndexedDB. If they're offline in the future, retrieve the article from IndexedDB instead of trying to fetch it from the server.

### 3. User Interface Indications:

- **Offline Indicator**: Provide a visual indicator when the user is offline, so they're aware that what they see is from cached data.
  
- **Save for Offline**: Offer a button or feature where users can explicitly save certain articles or content for offline reading. This action would ensure the content is cached or stored in IndexedDB.

- **Error Handling**: When offline, and a piece of content isn't available in the cache, show a friendly error message guiding the user to available offline content.

### 4. Background Sync:

If users perform actions while offline (like bookmarking an article, leaving a comment, or following a writer), those actions won't be communicated to the server immediately. Using the **Background Sync** API, you can defer actions until the user has stable connectivity.

### 5. Periodic Background Sync:

For regular readers, the **Periodic Background Sync** API allows web apps to periodically synchronize data in the background, fetching the latest articles or content updates. This ensures that frequent readers always have fresh content available even before they go offline.

### 6. Progressive Web App (PWA):

Combining Service Workers, IndexedDB, and other modern web technologies, you can package the blog as a **Progressive Web App (PWA)**. PWAs can be added to the user's home screen and offer an app-like experience, with offline capabilities as a major benefit.

### 7. Updates and Cache Management:

Offline caching is crucial, but it's also essential to manage your cache effectively to ensure users aren't stuck with outdated content. Implement strategies to periodically check for content updates and refresh the cache.

### Conclusion:

Building offline capabilities for a Medium-like blog involves various modern web technologies working in tandem. It not only enhances user experience but also makes the platform more resilient to network issues, ensuring content is always accessible. Proper cache management and periodic updates are critical to balancing offline access with content freshness.


Data replication in both SQL and NoSQL databases involves creating multiple copies of data to ensure data availability, fault tolerance, and performance. The replication techniques, however, can differ based on the underlying database architecture and design. Here's a brief overview of how replication looks in both:

1. **SQL Databases**:
   - **Master-Slave Replication**: A primary (master) database accepts write operations, while one or more secondary (slave) databases replicate the master's data. Slaves can handle read operations, thus offloading read requests from the master.
   - **Master-Master Replication**: Multiple databases can accept write operations. Changes are then propagated to other databases. Conflict resolution becomes crucial in this setup.
   - **Synchronous vs Asynchronous Replication**: In synchronous replication, the transaction isn't considered complete until data is written to both the master and the slave. In asynchronous replication, the master writes data and immediately returns, with the data propagated to the slave in the background.
   - **Snapshot Replication**: The entire database is copied at specified intervals.
   - **Transactional Replication**: Only modified data (as a result of operations like insert, update, delete) is sent to the secondary database.

2. **NoSQL Databases**:
   - **Replica Set (e.g., MongoDB)**: A group of database nodes that maintain the same data set. One node is primary (accepts writes), while the rest are secondary nodes (can be used for reads). If the primary fails, a secondary can be promoted to primary.
   - **Eventual Consistency (e.g., Cassandra)**: Data is written to one node and is then propagated to other nodes. There's a slight delay (usually milliseconds) before all nodes have the same data, hence the term "eventual consistency."
   - **Sharding/Partitioning**: Data is split across multiple nodes, and each node might replicate its subset of the data for redundancy.
   - **Multi-Master Configuration (e.g., Couchbase, DynamoDB)**: Multiple nodes can accept writes, and changes are propagated to other nodes. Conflict resolution strategies are in place to handle data discrepancies.
   - **Peer-to-Peer Replication (e.g., CouchDB)**: All nodes are treated equally, and any node can accept write operations. Data is then replicated across nodes.

Both SQL and NoSQL databases also offer various settings to control replication speed, frequency, error handling, conflict resolution, etc. The choice of replication strategy often depends on the specific use-case, desired performance, and required data consistency levels.

When choosing a database for a blogging platform like Medium, the choice between SQL, NoSQL, or a hybrid approach depends on the specific requirements, expected scale, and architectural goals of the system. Here are some considerations for each option:

1. **SQL (Relational Databases)**:
    - **Advantages**:
        - Strong consistency and ACID (Atomicity, Consistency, Isolation, Durability) properties.
        - Rich querying capabilities with SQL.
        - Well-defined schema ensures data integrity.
    - **Use Case**: If your primary goal is structured data management with complex queries and relationships, such as user management, post-to-tag relationships, and comment hierarchies.
    - **Examples**: PostgreSQL, MySQL, Microsoft SQL Server.

2. **NoSQL**:
    - **Document-Based Databases**:
        - **Advantages**: Flexible schema, good for hierarchical data (like articles with embedded metadata or content with rich media).
        - **Use Case**: Storing article content, especially if it's in a rich, variable format.
        - **Examples**: MongoDB, CouchDB.
    - **Columnar Databases**:
        - **Advantages**: Scalability, suitable for writing and reading large amounts of data quickly.
        - **Use Case**: Managing user activity feeds or tracking user actions at scale.
        - **Examples**: Cassandra, HBase.
    - **Key-Value Stores**:
        - **Advantages**: High performance, scalability, simple design.
        - **Use Case**: Session management, caching.
        - **Examples**: Redis, DynamoDB.
    - **Graph Databases**:
        - **Advantages**: Efficient for traversing relationships.
        - **Use Case**: If features like "articles you might like" or "users you might know" based on complex relationships are crucial.
        - **Examples**: Neo4j, ArangoDB.

3. **Hybrid**:
    - Combining SQL and NoSQL databases can leverage the strengths of both. 
    - **Use Case**: Use an SQL database for structured data like user profiles, post metadata, and comments. Meanwhile, use a NoSQL document-based database for storing article content and a key-value store for caching or session management.
    - Ensures flexibility, scalability, and data integrity all together.

**Recommendation for Medium-like Blog**:
Given the nature of a blogging platform like Medium:

- There's structured data (users, relationships, post metadata) that fits well in an SQL database.
- Article content, especially if allowing rich media, variable formats, or user-customized layouts, might be better suited for a NoSQL document-based database.

Thus, a **hybrid** approach might be the most effective, balancing the strengths of both SQL and NoSQL databases. Always remember that the choice of database should align with the platform's needs, expected growth, and the team's expertise.