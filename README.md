# [archived] savvy eye

**⚠️ This project is no longer maintained and has been archived.**  
Please note that this repository is now in a read-only state and will not receive any further updates or support.

We recommend using to the latest version of the **Agora Web SDK**: [Learn more](https://www.agora.io/en/products/video-call/) 

For documentation and support, please visit the [Agora Documentation](https://docs.agora.io/en/).

--- 
Savvy eye is a video chat app for customer support agents that helps in making better conversation decisions by performing sentiment analysis of customer's face. The app has two parts. The 1st part is face sentiment analysis server. It takes a base 64 encoded image and sends back face sentiments along with other information. It uses google cloud vision api for this purpose. The 2nd part is the savvy eye app. It has two views, one is customer support agent view and the other is customer view. The view can be changed by pressing a toggle button. In customer support agent view, when the customer support agent presses the analyze customer sentiment button a video frame is extracted as a 720p image, drawn on a canvas, and then converted to base 64 encoding, and sent to https://face-sentiment-analysis.glitch.me/1 in a post request. Face sentiment analysis information is received along with other information and is displayed to the customer support agent. They can make better conversation decisions based on the sentiment information. In other words, the information guides the customer support agent to ensure the customer has the best possible video chat experience.

To use the app, customer support agent visits [savvy-eye.glitch.me](https://savvy-eye.glitch.me/) and wait a few seconds if required as the app loads. Customer support agent view is the default. The customer also visits the same site and changes the view to customer view with the help of the toggle button. Both need to press the join button to start the video chat. If the browser asks for permission to use the microphone and camera, both need to allow it. When both videos (local and remote) are visible then the customer support agent can press the analyze customer sentiment button, when they need it. In 10-20 seconds, they will get the sentiment information. Please see an example below.
```
sentiment:


joy: very likely
anger: very unlikely
sorrow: very unlikely
surprise: very unlikely
```
If the sentiment information indicates the customer is unhappy, the customer support agent can then change the tone of the conversation to ensure customer satisfaction.

The solution is using [chivo](https://fonts.google.com/specimen/Chivo) due to its delicacy. The font has fast loading time. Designed by Omnibus-Type - Principal Design, Chivo is a popular font that's in use in 170K sites. Google fonts api has served chivos 44.3 M times in the last week.

Customer experience management market size will be [$32.49 B](https://www.grandviewresearch.com/press-release/global-customer-experience-management-cem-market) by 2025. In encounters with customer support agents, many customers often feel that the agent is failing to address the real issue. It leads to customer dissatisfaction. The customer says one thing, and the agent understands another. Right guidance at the right time can ensure these issues are avoided. That's where savvy eye comes in. With it, if a customer support agent sees the customer is not joyful, they can change the manner in which they are conducting the conversation and reflect upon what they have said. The customer support agent needs to press the analyze customer sentiment button and they will get to see the customer sentiment information. The app can be a game-changer in customer experience management.
