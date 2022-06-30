from flask import Flask, render_template, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/index')
def index():
    return render_template('index.html')


@app.route('/test')
def test():
    return 'teste'


@app.route('/gravar')
def gravar():
    txt = request.args['txt']
    with open('log.txt', 'a') as logfile:
        logfile.write(txt + '\n')

    return jsonify({'status': 'ok'}), 200


app.run(debug=True)