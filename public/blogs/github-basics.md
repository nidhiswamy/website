---
title: "Git & GitHub Basics"
date: "11th June, 2024"
readtime: "8"
description: "The basics of Git and GitHub highlighted by me using tips, tutorials, and insights."
---

> The basics of Git and GitHub highlighted by me using tips, tutorials, and insights.

# Introduction
Git is a distributed version control system that tracks changes in files and coordinates work among multiple developers. It allows for efficient collaboration and management of projects.
# Concepts
### Repository
A repository (repo) is a portal/storage area that hosts all of your project’s files and folders, as well as their history.
### Commit
A commit is a snapshot of changes made to the project’s files or folders. Committing your changes is equivalent to “saving” changes made to a file. Each commit has a unique identifier and a message describing the changes.
### Branch
A branch is a parallel version of a repository, allowing you to work on different features or fixes without affecting the main codebase.
### Merge
Merging combines changes from one branch into another, typically used to integrate features or fixes into the main codebase.
### Pull Request (PR)
A pull request is a request to merge changes from one branch into another. It allows for review and discussion before the changes are merged.
# Setup
## Installation
Download and install Git from [git-scm.com](http://git-scm.com)
## Configuration
1. Open up a terminal on your local machine
2. Run the following commands one by one and set your name and email address:

```bash
git config --global user.name "your username"
git config --global user.email "yourname@email.com"
```

# Commands
The basic commands for running and managing Git are highlighted below. Git has over 135 commands that are all useful in their own ways. I will update this page with them all once I have a condensed version of explaining and introducing them.

## 1. Initializing a Repository
This command initializes a _local_ repository in the current local directory of your machine

```bash
git init
``` 

## 2. Status
This command checks the status of the current git repository which includes unstaged commits, changes, and unpushed references.

```bash
git status
``` 

## 3. Changes

### Adding Changes
```bash
git add . // adds all changed files
git add file1.ext file2.ext // adds all specified files
``` 

### Committing Changes
```bash
git commit -m "your commit message" // commits the added files 
``` 

### Pushing Changes
```bash
git push origin <branch-name> // pushes changes to the given branch
``` 

## 4. Viewing Commit History
Use this command to view the history of all commits

```bash
git log
``` 

## 5. Branches

### Create Branch
```bash
git branch <branch-name>
``` 

### Switch to a Branch
```bash
git checkout <branch-name>
```

## 6. Merging 

```bash
git merge <branch-name>
``` 
# Resources
Like mentioned above, this is a quick run-down of the basics of Git and GitHub. If you would like to know more about the various resources, check these links out!

[Git SCM Docs](https://git-scm.com/doc)

[GitHub Docs](https://docs.github.com/en)​