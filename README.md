# Machine Learning-Based Prediction of CO2 Emissions from Fuel Usage

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Dataset](#dataset)
6. [Model Training](#model-training)
7. [Frontend](#frontend)
8. [Requirements](#requirements)
9. [Deployment](#deployment)
10. [License](#license)

## Introduction

This project aims to predict CO2 emissions from fuel usage in new light-duty vehicles using machine learning techniques. It provides an end-to-end solution, including data preprocessing, model training, and a Flask-based frontend for prediction.

The application is Dockerized and deployed on [Render](https://render.com/). You can access the deployed project [here](https://c02-emission.onrender.com/).


## Features

- CO2 Emission Prediction: Predicts CO2 emissions from fuel usage in new light-duty vehicles, aiding environmental impact assessment.

- Multiple Regression Models: Offers various regression models (Linear, Polynomial, Decision Tree, Random Forest, Support Vector) for accurate predictions.

- High Accuracy: Polynomial Linear Regression achieved 99.89% accuracy (R2 score) for reliable CO2 emission estimates.

- Data Preprocessing: Performs EDA and feature engineering to enhance data quality and improve prediction accuracy.

- Flask-based Frontend: Provides an intuitive Flask-based frontend for easy interaction and input of vehicle data.

- Deployment and Accessibility: Dockerized and deployed on Render for convenient access to the application.


## Installation

To install and set up the project, follow these steps:

1. Clone the repository: `git clone https://github.com/Ineshrao/ML-Based-Prediction-of-CO2-Emissions-from-Fuel-Usage-End-to-End.git`
2. Change to the project directory: `cd ML-Based-Prediction-of-CO2-Emissions-from-Fuel-Usage-End-to-End`
3. Install the required dependencies: `pip install -r requirements.txt`

## Usage

1. Run the Flask application: `python app.py`
2. Access the frontend by visiting `http://localhost:5000` in your web browser.

## Dataset

The dataset used for training the models is the "Fuel Consumption 2000-2022.csv" obtained from [Kaggle](https://www.kaggle.com/datasets/ahmettyilmazz/fuel-consumption). It provides model-specific fuel consumption ratings and estimated carbon dioxide emissions for new light-duty vehicles.

## Model Training

The project trained five regression models to predict CO2 emissions from fuel usage in new light-duty vehicles:

1. Linear Regression
2. Polynomial Linear Regression
3. Decision Tree Regressor
4. Random Forest Regressor
5. Support Vector Regressor

Among these models, the Polynomial Linear Regression model achieved the highest accuracy, with an impressive R2 score of 99.89%. This model outperformed the other models in terms of prediction accuracy for CO2 emissions.


## Frontend

The project provides a user-friendly frontend developed using Flask, which allows users to interact with the trained regression models and obtain CO2 emission predictions easily.

### File Structure

The frontend file structure is organized as follows:

```plaintext
.
├── app.py            # Flask application file
├── templates/        # HTML templates
│   └── Index.html    # Main page template for CO2 emission prediction
└── static/           # Static assets (CSS, JavaScript,Image)
    ├── script.js     # JavaScript for the frontend
    ├── styles.css    # CSS styles for the frontend
    └── bg.jpg        # Background Image for the frontend
```

## Requirements

The project was created using Python 3.10.7 and relies on the following dependencies:

- Flask==2.2.5
- matplotlib==3.7.1
- numpy==1.22.4
- pandas==1.5.3
- scikit-learn==1.2.2
- scipy==1.10.1
- gunicorn==20.1.0


You can install these dependencies using the following command:


```bash
pip install -r requirements.txt
```

Please ensure you have Python 3.10.7 installed, along with the specified package versions, to run the project successfully.

## Deployment

The project is Dockerized and deployed using a CI/CD pipeline with Git Actions. This ensures streamlined deployment and continuous integration for efficient updates and maintenance.

### Dockerization

The project is containerized using Docker to encapsulate the application and its dependencies into a portable and reproducible package. The Dockerfile can be found in the root directory of the project.

### Workflow Setup

The workflow for CI/CD is defined in the `.github/workflows/main.yaml` file. The workflow is triggered on pushes and pull requests to the main branch. Please ensure to replace the placeholders `${{ secrets.SERVICE_ID }}` and `${{ secrets.RENDER_TOKEN }}` with the actual values from your Render account.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## FAQ

### 1. What is the purpose of this project?

The purpose of this project is to develop a machine learning-based system that predicts CO2 emissions from fuel usage in new light-duty vehicles. It aims to provide accurate estimations for assessing environmental impact.

### 2. How accurate are the CO2 emission predictions?

The Polynomial Linear Regression model, which performed the best among the trained models, achieved an accuracy of 99.89% (R2 score). However, please note that the accuracy may vary depending on various factors such as the quality and representativeness of the dataset used.

### 3. How can I use the CO2 emission prediction system?

To use the CO2 emission prediction system, you need to input relevant vehicle data such as fuel consumption and other features. The system will then utilize the trained regression models to provide an estimation of the CO2 emissions based on the given inputs.

### 4. Can I contribute to this project?

Yes, contributions to the project are welcome! You can contribute by suggesting improvements, reporting issues, or submitting pull requests on the project's GitHub repository.

### 6. How can I get further assistance or support?

If you need further assistance or have any questions, feel free to reach out to me at [ineshrao@gmail.com](mailto:ineshrao@gmail.com).


## Future Enhancements

- Improve frontend user experience with additional features and visual enhancements.
- Explore the possibility of incorporating more advanced regression models.
- Enhance the preprocessing techniques to handle more complex datasets.
- Integrate additional datasets for comprehensive CO2 emission prediction.


