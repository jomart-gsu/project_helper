const optionMap = {
    // Entry point
    0: {
        "type": "basic",
        "text": "Welcome! What are you looking to do?",
        "options": [
            {
                "dest": 1,
                "text": "I have a project idea, but I don't know how to build it"
            },
            {
                "dest": 2,
                "text": "I don't know what to build"
            },
        ]
    },
    // Functional Specs
    1: {
        "type": "checkbox",
        "text": "Let's get a little more information about your project. Which of the following things do you want to do?",
        "options": [
            "Create a website",
            "Create a mobile app",
            "Create a game",
            "Create something with hardware like Raspberry Pi or Arduino",
            "Use a third party tool to fetch data (e.g. Google search results, Yelp reviews)",
            "Remember things between different user sessions",
            "Publish my project so other people can interact with it",
            "I don't want to do any of these things",
        ]
    },
    // 
    9: {
        "type": "basic",
        "text": "Are you looking to use a particular platform (like web, Android), technology (like React, Django), or both?",
        "options": [
            {
                "dest": 4,
                "text": "Platform"
            },
            {
                "dest": 5,
                "text": "Technology"
            },
            {
                "dest": 6,
                "text": "Both"
            },
        ]
    },
    2: {
        "type": "basic",
        "text": "How can I help?",
        "options": [
            {
                "dest": 3,
                "text": "Help me decide what to build"
            },
            {
                "dest": 4,
                "text": "Show me some project examples"
            },
            {
                "dest": 5,
                "text": "Explain why I should build a project"
            },
        ]
    },
    3: {
        "type": "basic",
        "text": "Why do you want to work on a project?",
        "options": [
            {
                "dest": 6,
                "text": "I want to learn and improve my skills"
            },
            {
                "dest": 7,
                "text": "I want to strengthen my resume"
            },
            {
                "dest": 5,
                "text": "...I don't know?"
            },
        ]
    },
    4: {
        "type": "recipe",
        "ref": "project_examples"
    },
    5: {
        "type": "recipe",
        "ref": "motivation"
    },
    6: {
        "type": "basic",
        "text": "How would you describe your programming skills?",
        "options": [
            {
                "dest": 8,
                "text": "Beginner"
            },
            {
                "dest": 9,
                "text": "Advanced"
            }
        ]
    },
    7: {
        "type": "basic",
        "text": "How many programming projects are already on your resume?",
        "options": [
            {
                "dest": 100,
                "text": "0-1"
            },
            {
                "dest": 9,
                "text": "2 or more"
            }
        ]
    },
    8: {
        "type": "basic",
        "text": "Have you made a web app or website before?",
        "options": [
            {
                "dest": 101,
                "text": "Yes"
            },
            {
                "dest": 100,
                "text": "No"
            }
        ]
    },
    9: {
        "type": "basic",
        "text": "Don't go through this flow chart. I assume you're advanced enough as a programmer to know how to get started with most ideas. You will make a WAY better project if it's something you're legitimately interested in, and it's an idea you've had yourself. It's okay if you don't have one of those right now -- just keep your eyes and ears open for interesting ideas, and come back when you're ready. Is there a game you wish existed? Is there something that makes you curious how it works, like an email spam filter, a chess AI, or a video chat app? Follow your curiosity and try to build it!",
        "options": [
            {
                "dest": 2,
                "text": "Okay, I have an idea. Can you help me implement it?"
            },
            {
                "dest": 8,
                "text": "I'm ignoring you. Tell me my options."
            }
        ]
    },
    10: {
        "type": "basic",
        "text": "Sure! How ambitious are you feeling?",
        "options": [
            {
                "dest": 102,
                "text": "Not ambitious, I just like JavaScript"
            },
            {
                "dest": 103,
                "text": "A little"
            },
            {
                "dest": 104,
                "text": "Very"
            }
        ]
    },
    
    // 100s: tech suggestions. These run in order, so the user can always reject the current suggestion to see the next one

    100: {
        "type": "basic",
        "text": "You should build a web app using Flask (Python)",
        "options": [
            {
                "dest": 200,
                "text": "Sounds great! How do I get started?"
            },
            {
                "dest": 101,
                "text": "I already have/don't want to"
            },
            {
                "dest": 10,
                "text": "Got anything with more JavaScript?"
            },
        ]
    },
    101: {
        "type": "basic",
        "text": "You should build a simple game in Python",
        "options": [
            {
                "dest": 201,
                "text": "Sounds great! How do I get started?"
            },
            {
                "dest": 105,
                "text": "I already have/don't want to"
            },
            {
                "dest": 105,
                "text": "Got anything with more JavaScript?"
            },
        ]
    },
    102: {
        "type": "basic",
        "text": "You should build a web app using Express JS",
        "options": [
            {
                "dest": 202,
                "text": "Sounds great! How do I get started?"
            },
            {
                "dest": 105,
                "text": "I already have/don't want to"
            },
            {
                "dest": 103,
                "text": "Can I learn React too?"
            },
        ]
    },
    103: {
        "type": "basic",
        "text": "You should build a React web app",
        "options": [
            {
                "dest": 203,
                "text": "Sounds great! How do I get started?"
            },
            {
                "dest": 105,
                "text": "I already have/don't want to"
            },
            {
                "dest": 104,
                "text": "Can I add more tools?"
            },
        ]
    },
    104: {
        "type": "basic",
        "text": "You should build a web app using the MERN stack",
        "options": [
            {
                "dest": 204,
                "text": "Sounds great! How do I get started?"
            },
            {
                "dest": 105,
                "text": "I already have/don't want to"
            },
        ]
    },
    105: {
        "type": "basic",
        "text": "You should build a multiplayer game using Node.js",
        "options": [
            {
                "dest": 205,
                "text": "Sounds great! How do I get started?"
            },
            {
                "dest": 106,
                "text": "I already have/don't want to"
            },
        ]
    },
    106: {
        "type": "basic",
        "text": "You should build an Android app",
        "options": [
            {
                "dest": 206,
                "text": "Sounds great! How do I get started?"
            },
            {
                "dest": 107,
                "text": "I already have/don't want to"
            },
        ]
    },
    107: {
        "type": "basic",
        "text": "You should build an iOS app",
        "options": [
            {
                "dest": 207,
                "text": "Sounds great! How do I get started?"
            },
            {
                "dest": 199,
                "text": "I already have/don't want to"
            },
        ]
    },
    199: {
        "type": "recipe",
        "ref": "out_of_ideas"
    },

    // 200s: Recipes
    // Flask
    // Simple Python Game
    // Express
    // React
    // MERN 
    // Complex JavaScript Game
    // Android
    // iOS
    // 
    200: {
        "type": "recipe",
        "ref": "flask"
    },
    201: {
        "type": "recipe",
        "ref": "python_game"
    },
    202: {
        "type": "recipe",
        "ref": "express"
    },
    203: {
        "type": "recipe",
        "ref": "react"
    },
    204: {
        "type": "recipe",
        "ref": "MERN"
    },
    205: {
        "type": "recipe",
        "ref": "js_game"
    },
    206: {
        "type": "recipe",
        "ref": "android"
    },
    206: {
        "type": "recipe",
        "ref": "ios"
    },
  }

  export default optionMap;