import argparse
import subprocess

parser = argparse.ArgumentParser(description='Build for testing by running elm-test, elm make, and starting a local server on port 8000.  Must be run from the root and the elm main function must be at ./src/Main.elm')
args = parser.parse_args()

# Run elm-test
subprocess.check_call(['elm-test'])
subprocess.check_call(['elm', 'make', 'src/Main.elm', '--optimize', '--output=main.js'])
subprocess.check_call(['python3', '-m', 'http.server', '8000'])