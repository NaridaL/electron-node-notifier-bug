# repro:

```bash
# be on windows

npm install # install dependencies

# Navigate to node_modules\electron\dist\electron.exe, right click -> Pin to Start

npm run start # start example

# Click on "Without appID". A notification from "snoretoast" should open
# Click on button "Hey".
#    "null, 'Hey'" is logged (as expected)

# Click on "With appID". A notification from "electron" should open
# Click on button "Hey".
#    "null, 'undefined" is logged (what happened to 'Hey'?)
```