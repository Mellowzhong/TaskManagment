# Task Management

A RESTful API built with Django and a React frontend.

## Features

- User authentication and authorization
- Task creation, editing, and deletion
- Responsive user interface

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Mellowzhong/TaskManagment.git
    ```
2. Navigate to the project directory:
    ```bash
    cd TaskManagment
    ```
3. Install backend dependencies:
    Linux/MacOS
    ```bash
    cd backend
    ```
    ```bash
    python -m venv venv
    or
    python3 -m venv venv
    ```
    ```bash
    source venv/bin/activate
    ```
    ```bash
    pip install django
    ```
    ```bash
    pip install -r requirements.txt
    ```
    ```bash
    pip install psycopg2-binary
    ```
    Windows:
    ```bash
    cd backend
    ```
    ```bash
    python -m venv venv
    or
    python3 -m venv venv
    ```
    ```bash
    .\venv\Scripts\activate
    ```
    ```bash
    pip install django
    ```
    ```bash
    pip install -r requirements.txt
    ```
    ```bash
    pip install psycopg2-binary
    ``` 
4. Install frontend dependencies:
    ```bash
    cd frontend
    npm install
    ```

## Usage

1. Start the Django development server:
    ```bash
    cd backend 
    python manage.py migrate
    ```

    ```bash
    python manage.py runserver
    ```
2. Start the React development server:
    ```bash
    cd frontend
    npm run dev
    ```