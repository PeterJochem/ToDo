import requests
import json

server_ip = "localhost"
server_port = 3001

req = requests.get(f"http://{server_ip}:{server_port}/remove_all_to_dos")
if req.status_code == 200:
    print("Successfully removed all the items from the to do list")
else:
    print("Failed to remove all the new items from the to do list")
