#!flask/bin/python
from flask import Flask
from flask import request
from flask_cors import CORS
import mockManager

parameters=['user', 'pwd', 'channel', 'jvm', 'machine']

def checkContentIntegrity(content):
	for par in parameters:
		if par not in content:
			print("ERRORE")
			return "ERR: Parametro '" + par + "' richiesto per esecuzione"
			break
	return ""

app = Flask(__name__)
CORS(app)


@app.route('/togliMock', endpoint ="togli", methods=['POST'])
@app.route('/mettiMock', endpoint ="metti", methods=['POST'])
@app.route('/checkMock', endpoint ="check", methods=['POST'])
def post():

	if request.endpoint == "togli":
		print(request.is_json)
		content = request.get_json()
		checkIntegrityResult = checkContentIntegrity(content) 
		if checkIntegrityResult == "":
			user = content['user']
			pwd = content['pwd']
			channel = content['channel']
			jvm = content['jvm']
			machine = content['machine']
		else:
			return checkIntegrityResult
		return mockManager.togliMock(user, pwd, channel, jvm, machine)
		
	elif request.endpoint == "metti":
		print(request.is_json)
		content = request.get_json()
		checkIntegrityResult = checkContentIntegrity(content) 
		if checkIntegrityResult == "":
			user = content['user']
			pwd = content['pwd']
			channel = content['channel']
			jvm = content['jvm']
			machine = content['machine']
		else:
			return checkIntegrityResult
		return mockManager.mettiMock(user, pwd, channel, jvm, machine)
	
	elif request.endpoint == "check":
		print(request.is_json)
		content = request.get_json()
		checkIntegrityResult = checkContentIntegrity(content) 
		if checkIntegrityResult == "":
			user = content['user']
			pwd = content['pwd']
			channel = content['channel']
			jvm = content['jvm']
			machine = content['machine']
		else:
			return checkIntegrityResult
		return mockManager.checkMock(user, pwd, channel, jvm, machine)

app.run(host='0.0.0.0', port=5000)