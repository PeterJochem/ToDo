import requests
import json

server_ip = "localhost"
server_port = 3001

name = input("What is the name of the to do?\n")
description = input("Longer description of the item?\n")
req = requests.get(f"http://{server_ip}:{server_port}/add_to_dos?name={name}&description={description}")
if req.status_code != 200:
    print("Failed to add the new item to the to do list")
