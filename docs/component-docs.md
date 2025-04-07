# 🧩 Frontend Component Documentation

---

## 📄 Editor.js

| **Property** | **Details** |
|--------------|-------------|
| **Purpose**  | Provides a collaborative rich text editing experience |
| **Key Features** | - Real-time syncing via WebSockets<br>- Rich text formatting<br>- Auto-save on change |
| **Props** | `docId` *(string)* – Document identifier used for fetching and syncing |

---

## 💬 ChatBox.js

| **Property** | **Details** |
|--------------|-------------|
| **Purpose**  | Real-time chat interface within a document session |
| **Key Features** | - Instant message exchange using Socket.IO<br>- Displays historical chat |
| **Props** | `docId` *(string)* – Chat room linked to the document ID |

---

## 🔐 Auth.js

| **Property** | **Details** |
|--------------|-------------|
| **Purpose**  | Handles both login and registration |
| **Key Features** | - Form validation<br>- Auth token management<br>- Conditional rendering (login/register) |

---

## 📚 Sidebar.js

| **Property** | **Details** |
|--------------|-------------|
| **Purpose**  | Sidebar navigation showing documents or chat rooms |
| **Key Features** | - Document list fetched from backend<br>- Option to create/select documents |

---

## 🧭 Header.js

| **Property** | **Details** |
|--------------|-------------|
| **Purpose**  | App header with branding and user session actions |
| **Key Features** | - User name display<br>- Logout button triggering session cleanup |

---

## 📎 Footer.js

| **Property** | **Details** |
|--------------|-------------|
| **Purpose**  | Simple footer for credits or links |
| **Key Features** | - Responsive design<br>- Minimal content, e.g., © 2025 Collaboration App |
