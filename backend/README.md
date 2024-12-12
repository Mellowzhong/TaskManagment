First create a virtual environment
python -m venv venv

Second activate the virtual environment
source venv/bin/activate

Third install django
pip install django

Fourth install the requirements
pip install -r requirements.txt

pip install psycopg2
pip install psycopg2-binary

Fifth migrate the database
python manage.py migrate

Sixth create a superuser
python manage.py createsuperuser

Seventh run the server
python manage.py runserver