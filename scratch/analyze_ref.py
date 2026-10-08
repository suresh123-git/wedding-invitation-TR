import re

with open(r'C:\Users\Naveen\.gemini\antigravity\brain\7d217f7c-0037-4f31-a69d-25cb371bddff\.system_generated\steps\155\content.md', encoding='utf-8', errors='ignore') as f:
    text = f.read()

print("File length:", len(text))

# Find jsx / HTML elements & classes used in reference app
classes = set(re.findall(r'className:\s*["\']([^"\']+)["\']', text))
print("Sample classNames count:", len(classes))
print("\nFirst 30 classNames:")
for c in list(classes)[:30]:
    print(" -", c)

# Search for section headings, titles, structure
headings = set(re.findall(r'<h[1-6][^>]*>(.*?)</h[1-6]>', text))
print("\nHeadings found:")
for h in headings:
    print(" -", h)

# Search for section tags or text
text_samples = re.findall(r'>([^<]{4,80})<', text)
print("\nUnique text samples:")
seen = set()
for t in text_samples:
    t_clean = t.strip()
    if t_clean and t_clean not in seen and not t_clean.startswith('{') and len(t_clean) > 3:
        seen.add(t_clean)
        print(" -", t_clean)
        if len(seen) > 40:
            break
