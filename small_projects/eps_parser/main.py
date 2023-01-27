# Function that parse an eps file and save binary data in a file

import sys
import re
import os

def parse_eps(eps_file, output_file):
    # Open the eps file
    f = open(eps_file, "r")
    # Read the file
    data = f.read()
    # Close the file
    f.close()
    # Search for the binary data
    match = re.search(r"%%BeginData: (\d+) Hex Bytes", data)
    # Get the number of bytes
    bytes = int(match.group(1))
    # Search for the binary data
    match = re.search(r"%%BeginData (.*) %%EndData", data, re.DOTALL)
    # Get the binary data
    binary = match.group(1)
    # Remove the spaces
    binary = binary.replace(" ", "")
    # Remove the new lines
    binary = binary.replace("\n", "")
    # Convert the binary data to a string
    binary = binary.decode("hex")
    # Open the output file
    f = open(output_file, "wb")
    # Write the binary data
    f.write(binary)
    # Close the file
    f.close()
    

