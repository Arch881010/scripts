# scripts

Public Personal Scripts that are accessed via the GitHub pages.
Simply go the the page, and type whatever script you wish, such as banlist.py after the url. Eg: <https://arch881010.github.io/scripts/miscpy/banlist.py>

- Chrome OS is known to download it instead

Otherwise use fetch and write it to a file to execute.
Eg: ```a = open("script.py", "w"); b = fetch("https://arch881010.github.io/scripts/miscpy/banlist.py"); a.write(b.text); a.close();```

If you wish to keep writing or adding more scripts to that file, use ```a.flush()``` instead of ```a.close();```
