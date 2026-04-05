// Function to send POST requests to the server
async function processText(text) {
    try {
        const response = await fetch('http://localhost:5000/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error processing text:', error);
    }
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    console.log('Text copied to clipboard!');
}

// Keyboard shortcut (Ctrl+Enter) to process text
document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'Enter') {
        const textToProcess = document.getElementById('textInput').value;
        processText(textToProcess).then(result => {
            if (result) {
                console.log('Processed result:', result);
                copyToClipboard(result.processedText);
            }
        });
    }
});