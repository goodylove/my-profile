


#  Profile Endpoint API

A lightweight `GET API` that returns **your profile information** along with a **random cat fact** fetched dynamically from the [Cat Facts API](https://catfact.ninja/fact).

This project demonstrates clean backend structure, third-party API integration, and solid RESTful practices — all wrapped in a minimal Express.js setup.


##  Features

* 🧑‍💻 **GET `/me`** endpoint returning structured JSON.
* 🐈 Fetches live data from the [Cat Facts API](https://catfact.ninja/fact).
* ⏰ Generates dynamic **UTC timestamps** (ISO 8601 format).
* ⚡ Graceful fallback if the Cat Facts API fails or times out.
* 🧱 Clean architecture with environment variables and modular code.
* 📦 Deployable to any Node environment (except Vercel/Render).


## 🧩 API Specification

### **Endpoint**

```bash
GET /me
```

### **Response Example**

```json
{
  "status": "success",
  "user": {
    "email": "goodjohn@example.com",
    "name": "Goodluck John",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T08:25:04.230Z",
  "fact": "A cat's appetite is the barometer of its health. Any cat that does not eat or drink for more than two days should be taken to a vet."
}
```

### **Field Description**

| Field        | Type   | Description                                   |
| ------------ | ------ | --------------------------------------------- |
| `status`     | string | Always `"success"`.                           |
| `user.email` | string | Developer’s email address.                    |
| `user.name`  | string | Developer’s full name.                        |
| `user.stack` | string | Backend stack used (e.g., `Node.js/Express`). |
| `timestamp`  | string | Current UTC time in ISO 8601 format.          |
| `fact`       | string | A random cat fact or fallback message.        |

---

## 🧠 Core Logic

1. When `/me` is requested:

   * Fetches a random cat fact from `https://catfact.ninja/fact`.
   * Generates the current UTC timestamp.
   * Returns both along with developer info in a JSON response.

2. If the external API fails:

   * Returns a fallback fact such as:

     > “A cat's appetite is the barometer of its health. Any cat that does not eat or drink for more than two days should be taken to a vet.”
   * Responds with **HTTP 200**, maintaining schema consistency.

3. Response headers:

   * `Content-Type: application/json`

4. Configurable via `.env` variables:

   * `CAT_API_URL`
   * `PORT`


## 🛠️ Tech Stack

| Tool                   | Purpose                       |
| ---------------------- | ----------------------------- |
| **Node.js**            | Runtime                       |
| **Express.js**         | Web framework                 |
| **Axios**              | HTTP client for Cat Facts API |
| **dotenv**             | Environment variables         |
| **morgan**             | HTTP request logger           |
| **CORS**               | Cross-origin middleware       |
| **express-rate-limit** | Basic rate limiting           |


## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/goodylove/my-profile.git
cd my-profile
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the project root:

```bash
PORT=3001
CAT_API_URL=https://catfact.ninja/fact
```

### 4️⃣ Run the Server

```bash
npm start
```

Now open:

```
http://localhost:3001/me
```


## 🧾 Example Output

```json
{
  "status": "success",
  "user": {
    "email": "jane@example.com",
    "name": "Jane Smith",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-18T08:25:04.230Z",
  "fact": "Cats can rotate their ears 180 degrees."
}
```


## 👨‍💻 Author

**Name:** Nwachukwu Goodness
**Email:** goodyz575@gmail.com
**Stack:** Node.js / Express


## 📄 License

Released under the **MIT License** — free to use, modify, and distribute with attribution.



