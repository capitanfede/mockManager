import spur
import sys
import getpass

ihsBanvir = "10.224.40.8"
ihsMobile = "10.224.40.18"
ihsCorvir = "10.224.40.13"
tecnicalUsers = ["ut12849", "ut12008", "ut11038", "ut12700", "ut05805", "ut11569", "ut13143", "ut06282", "ut06191", "ut12021"]

def mettiMock(user, passW , channel, jvm, machine):
	
	if channel == "BANVIR":
		ihsIP = ihsBanvir
	elif channel == "MOBILE":
		ihsIP = ihsMobile
	elif channel == "CORVIR":
		ihsIP = ihsCorvir
		
	print("INF: Metto i mock sulla macchina: "+ ihsIP )	
	try:
		if checkUT(user):
			shell = spur.SshShell(hostname = ihsIP, username = user, password = passW, missing_host_key = spur.ssh.MissingHostKey.accept)
			result = shell.run(["sudo", "-u", "wlpadmin", "/deploy/01_mettimock.sh", jvm, machine])
			return (result.output)
		else:
			return ("ERR: Operazione riservata a personale tecnico. \n")
	except:
		return ("ERR: Errore di connessione, verificare combinazione utente/password o permessi di accesso alle macchine sull'utenza \n" )

def togliMock(user, passW, channel, jvm, machine):
	
	if channel == "BANVIR":
		ihsIP = ihsBanvir
	elif channel == "MOBILE":
		ihsIP = ihsMobile
	elif channel == "CORVIR":
		ihsIP = ihsCorvir
		
	print("INF: Tolgo i mock sulla macchina: "+ ihsIP )	
	try:
		if checkUT(user):
			shell = spur.SshShell(hostname = ihsIP, username = user, password = passW, missing_host_key = spur.ssh.MissingHostKey.accept)
			result = shell.run(["sudo", "-u", "wlpadmin", "/deploy/02_toglimock.sh", jvm, machine])
			return (result.output)
		else:
			return ("ERR: Operazione riservata a personale tecnico. \n")
	except:
		return ("ERR: Errore di connessione, verificare combinazione utente/password o permessi di accesso alle macchine sull'utenza \n" )
		
def checkMock(user, passW, channel, jvm, machine):

	if channel == "BANVIR":
		ihsIP = ihsBanvir
	elif channel == "MOBILE":
		ihsIP = ihsMobile
	elif channel == "CORVIR":
		ihsIP = ihsCorvir
		
	print("INF: Controllo mock sulla macchina: "+ ihsIP )	
	try:
		shell = spur.SshShell(hostname = ihsIP, username = user, password = passW, missing_host_key = spur.ssh.MissingHostKey.accept)
		result = shell.run(["sudo", "-u", "wlpadmin", "/deploy/04_launchCheck.sh", machine, jvm])
		return (result.output)
	except:
		return ("ERR: Errore di connessione, verificare combinazione utente/password o permessi di accesso alle macchine sull'utenza \n")

def checkUT(user):
	if user in tecnicalUsers:
		return True
	else:
		return False