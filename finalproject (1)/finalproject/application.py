import os

from flask import Flask, flash, jsonify, redirect, render_template, request, session
from flask_session import Session
from tempfile import mkdtemp
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from werkzeug.exceptions import default_exceptions, HTTPException, InternalServerError
from werkzeug.security import check_password_hash, generate_password_hash

# Configure application
app = Flask(__name__)

# Ensure templates are auto-reloaded
app.config["TEMPLATES_AUTO_RELOAD"] = True

# Ensure responses aren't cached
@app.after_request
def after_request(response):
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_FILE_DIR"] = mkdtemp()
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# SQLAlchemy
Base = declarative_base()
class User(Base):
    __tablename__ = 'comments'

    id = Column(Integer, primary_key = True)
    name = Column(String)
    comment = Column(String)



@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/home", methods=["GET", "POST"])
def home():
    engine = create_engine("sqlite:///blog.db", echo=True)
    Session = sessionmaker(bind=engine)
    Base.metadata.create_all(engine)
    session = Session()

    if request.method == "POST":
        username = request.form.get("name")
        usercomment = request.form.get("comment")
        user = User(name=username ,comment=usercomment)
        session.add(user)
        session.commit()
        blogComments = session.query(User)
        session.close()
        return render_template("/home.html", comments=blogComments)
    else:
        blogComments = session.query(User)
        session.close()
        return render_template("/home.html", comments=blogComments)

@app.route("/about")
def about():
    return render_template("/about.html")

@app.route("/music")
def music():
    return render_template("/music.html")

@app.route("/videos")
def videos():
    return render_template("/videos.html")

@app.route("/store")
def store():
    return render_template("/store.html")

@app.route("/contact")
def contact():
    return render_template("/contact.html")