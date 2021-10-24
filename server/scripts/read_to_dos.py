import requests
import json

server_ip = "localhost"
server_port = 3001

req = requests.get(f"http://{server_ip}:{server_port}/read_to_dos")
if req.status_code != 200:
    print("Failed to read the items from the do list")

response = req.json()
for entry in response:
    name = entry["Name"]
    description= entry["Description"]
    print(f"{name}: {description}")
