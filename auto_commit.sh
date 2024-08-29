#!/bin/bash

# Navigate to the project directory
cd /Users/juleseulalie/Documents/rsvp-app

# Add all changes to the staging area
git add .

# Commit the changes with a timestamp
git commit -m "Auto-commit: $(date +'%Y-%m-%d %H:%M:%S')"

# Push the changes to the remote repository
git push origin main