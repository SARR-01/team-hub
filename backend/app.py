from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route('/process_message', methods=['POST'])
def process_message():
    data = request.json
    message = data.get('message', '')
    translated = translate_message(message)
    return jsonify({'original': message, 'translated': translated})


def translate_message(message):
    # Placeholder for translation logic (could use an external API)
    # For now, we'll just return the same message for simplicity.
    return message


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
