
# GitHub User Search

A comprehensive React application designed to search for GitHub users, visualize profile statistics, and explore repository data via the GitHub API.

![Login Page](./src/images/login-img.svg)

## 🚀 Features

* **User Search**: Real-time search to retrieve comprehensive GitHub profile information.
* **Dynamic Charts**: Data visualization for Top Languages, Most Popular Repos, and Most Forked Repos using FusionCharts.
* **Detailed Profiles**: Displays user bio, company, location, blog, and more.
* **Followers List**: Browse and navigate to user followers with quick links.
* **Secure Authentication**: Session management powered by Auth0.
* **Responsive Design**: Mobile-friendly layout using Styled Components.
* **Rate Limit Tracking**: Real-time monitoring of remaining GitHub API requests.

## 🛠️ Tech Stack

* **Frontend**: [React](https://reactjs.org/)
* **Styling**: [Styled Components](https://styled-components.com/)
* **Charts**: [FusionCharts](https://www.fusioncharts.com/)
* **Routing**: [React Router Dom (v5)](https://reactrouter.com/web/guides/quick-start)
* **API Requests**: [Axios](https://axios-http.com/)
* **Authentication**: [Auth0](https://auth0.com/)
* **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 🏁 Getting Started

### Prerequisites

* Node.js and npm installed.
* A GitHub account.
* An Auth0 account.

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/aadhar41/github-users.git
cd github-users

```


2. **Install dependencies**
```bash
npm install

```


3. **Environment Variables**
Create a `.env` file in the root directory:
```env
REACT_APP_AUTH0_DOMAIN=your_auth0_domain
REACT_APP_AUTH0_CLIENT_ID=your_auth0_client_id

```


4. **Run the application**
```bash
npm start

```


The app will run at `http://localhost:3000`.

---

## 🏗️ Technical Guide

### Styled Components

For styling, use the `styled-components` library.

```jsx
import styled from "styled-components";

const Component = () => {
  return <Wrapper>Content</Wrapper>;
}

const Wrapper = styled.article`
  /* Add your CSS here */
`;

```

### Routing

This project uses `react-router-dom` v5.2.0.

* `<Switch>` renders the first matching child `<Route>`.
* A `<Route path="*">` serves as a catch-all for undefined paths.

### GitHub API Endpoints

* **Root**: `https://api.github.com`
* **User**: `https://api.github.com/users/{username}`
* **Repos**: `https://api.github.com/users/{username}/repos?per_page=100`
* **Followers**: `https://api.github.com/users/{username}/followers`
* **Rate Limit**: `https://api.github.com/rate_limit`

> **Note**: Unauthenticated requests are limited to 60 requests per hour based on the originating IP address.

---

## 🔐 Auth0 Configuration

1. Create a **Single Page Web Application** in your Auth0 Dashboard.
2. In **Settings**, configure the following for `http://localhost:3000`:
* Allowed Callback URLs
* Allowed Logout URLs
* Allowed Web Origins


3. Activate desired **Connections** (Email/Social).
4. Copy your **Domain** and **Client ID** to your `.env` file.

---

## 🚀 Deployment

### Netlify Setup

This project is optimized for [Netlify](https://www.netlify.com/).

**1. Fix Build Warnings**
Update your `package.json` to prevent build failures due to warnings:

```json
"build": "CI= react-scripts build",

```

**2. Handling Client-Side Routing**
To ensure React Router works correctly on Netlify, create a `_redirects` file in the `public` folder:

```text
/* /index.html   200

```
## ⚓ API Reference

- [GitHub API Documentation](https://docs.github.com/en/rest)
- [Rate Limit Info](https://api.github.com/rate_limit)
