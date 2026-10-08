import re, json

with open(r'C:\Users\Naveen\.gemini\antigravity\brain\7d217f7c-0037-4f31-a69d-25cb371bddff\.system_generated\steps\155\content.md', encoding='utf-8', errors='ignore') as f:
    text = f.read()

# Find strings in minified JS
strings = re.findall(r'"([^"\\]*(?:\\.[^"\\]*)*)"', text)
print("Total strings extracted:", len(strings))

relevant = []
for s in strings:
    if len(s) > 3 and not re.match(r'^[a-zA-Z0-9_\-\.\/]+$', s):
        relevant.append(s)

print("\nSample English UI Strings from Bikas Bhargavi Wedding site:")
for r in relevant[:80]:
    print(" •", r)
