import re

with open(r'C:\Users\Naveen\.gemini\antigravity\brain\7d217f7c-0037-4f31-a69d-25cb371bddff\.system_generated\steps\155\content.md', encoding='utf-8', errors='ignore') as f:
    text = f.read()

strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', text)
strings_single = re.findall(r"'([^'\\]*(?:\\.[^'\\]*)*)'", text)

all_strings = set(strings + strings_single)

out = []
for s in all_strings:
    if any(k in s.lower() for k in ['bikas', 'bhargavi', 'wedding', 'groom', 'bride', 'venue', 'count', 'story', 'gallery', 'love', 'bless', 'music', 'invitation', 'august', 'diddi', 'jena', 'heart', 'rsvp', 'event', 'muhurtham', 'mandapam', 'dinner', 'reception', 'haldi', 'sangeet', 'mehendi', 'location', 'map', 'audio']):
        out.append(s)

with open(r'scratch/ref_strings.txt', 'w', encoding='utf-8') as f:
    for line in out:
        f.write(line + '\n')

print(f"Extracted {len(out)} matching strings into scratch/ref_strings.txt")
