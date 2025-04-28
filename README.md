# Expense Tracker App

A full-stack **Expense Tracker** web application that allows users to add, edit, delete, and visualize their expenses using intuitive charts. Built with **React** (frontend) and **Django** (backend), and using **PostgreSQL** as the database.

---

## 🛠️ Technologies Used

### Frontend
- React.js
- Axios (for API calls)
- Recharts (for data visualization)
- Material-UI Icons
- React Spinners (for loading indicators)

### Backend
- Django
- Django REST Framework (DRF)

### Database
- PostgreSQL

---

## ✨ Features

- ✅ Add new expense records
- ✅ Edit existing expenses
- ✅ Delete expenses
- ✅ List of all expenses
- ✅ Dashboard with Pie Chart visualization
- ✅ Responsive, mobile-friendly design
- ✅ Loading indicators for smooth UX
- ✅ Clean, modular codebase

---

## 📂 Project Structure

```bash
/expense-tracker-frontend
    └── src/
        ├── components/
        │   ├── Dashboard.jsx
        │   ├── ExpenseForm.jsx
        │   ├── ExpenseList.jsx
        ├── pages/
        │   ├── Home.jsx
        │   ├── DashboardPage.jsx
        ├── services/
        │   └── ExpenseService.jsx
        ├── App.jsx
        ├── index.jsx

/expense-tracker-backend
    └── expenses/
        ├── models.py
        ├── serializers.py
        ├── views.py
        ├── urls.py
    └── expense_tracker/ (django project settings)
    └── manage.py
```

---

## 🚀 How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
```

---

### 2. Backend Setup (Django)

```bash
cd expense-tracker-backend

# (Recommended) Create a virtual environment
python -m venv venv
source venv/bin/activate  # Mac/Linux
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r requirements.txt

# Migrate the database
python manage.py makemigrations
python manage.py migrate

# Start the server
python manage.py runserver
```

- Backend server will run on: `http://localhost:8000/`

---

### 3. Frontend Setup (React)

```bash
cd expense-tracker-frontend

# Install dependencies
npm install

# Start the frontend app
npm start
```

- Frontend server will run on: `http://localhost:3000/`

---

## ⚡ API Endpoints

| Method | Endpoint | Description            |
|-------|-----------|-------------------------|
| POST   | /expenses/ | Add new expense |
| GET    | /expenses/ | Get all expenses |
| PUT    | /expenses/:id/ | Update an expense |
| DELETE | /expenses/:id/ | Delete an expense |

---

## 📌 Environment Variables (Optional)

If needed, create `.env` files to store:
- Backend Django secret keys
- PostgreSQL database credentials
- React API URLs

---

## 🙏 Acknowledgements

- [Recharts](https://recharts.org/) - Charting library
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
- [Django REST Framework](https://www.django-rest-framework.org/)

---

## 📬 Contact

> **Developed by Harshita**  
> Email: harshitamakode@gmail.com  
> LinkedIn: [Your LinkedIn Profile](https://linkedin.com/in/harshita-makode)

---

# ⭐ Don't forget to give this project a **star** if you found it helpful!

---
