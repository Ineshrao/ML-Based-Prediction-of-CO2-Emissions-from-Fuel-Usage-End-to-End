from flask import Flask,request,app,jsonify,url_for,render_template
import numpy as np
import pandas as pd
import pickle 
import json 

app=Flask(__name__)
model=pickle.load(open("model.pkl",'rb'))
@app.route('/')
def Index():
    return render_template('Index.html')
@app.route('/predict_api',methods=['POST'])
def predict_api():
    data=request.json['data']
    print(data)
    data=pd.DataFrame(data)
    output=model.predict(data)[0]
    return jsonify(np.exp(output))

@app.route('/predict',methods=['POST'])
def predict():
    data=json.loads(request.data)
    print(data)
    data=pd.DataFrame(data)
    output=model.predict(data)[0]
    return str(round(np.exp(output),2))

if __name__=="__main__":
    app.run(debug=True)