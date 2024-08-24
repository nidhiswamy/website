import BlogLayout from '@/app/ui/BlogLayout'; 
import { 
  Header1, 
  Header2, 
  List, 
  Body,
  Code,
  LinkText
} from '@/app/ui/BlogLayout'; 

export default function BlogPost1() {
  return (
    <BlogLayout title="Git & GitHub Basics" desc="The basics of Git and GitHub highlighted by me using tips, tutorials, and insights.">
      <Header1 text="Introduction"/>
        <Body>
        Git is a distributed version control system that tracks changes in files and coordinates work among multiple developers. It allows for efficient collaboration and management of projects.
        </Body>
      <Header1 text="Concepts"/>
      <Header2 text="Repository"/>
        <Body>
        A repository (repo) is a portal/storage area that hosts all of your project's files and folders, as well as their history.
        </Body>
      <Header2 text="Commit"/>
        <Body>
        A commit is a snapshot of changes made to the project’s files or folders. Committing your changes is equivalent to “saving” changes made to a file. Each commit has a unique identifier and a message describing the changes.
        </Body>
      <Header2 text="Branch"/>
        <Body>
        A branch is a parallel version of a repository, allowing you to work on different features or fixes without affecting the main codebase.
        </Body>
      <Header2 text="Merge"/>
        <Body>
        Merging combines changes from one branch into another, typically used to integrate features or fixes into the main codebase.
        </Body>
      <Header2 text="Pull Request (PR)"/>
        <Body>
        A pull request is a request to merge changes from one branch into another. It allows for review and discussion before the changes are merged.
        </Body>
      <Header1 text="Setup"/>
      <Header2 text="Installation"/>
        <Body>
          Download and install Git from <LinkText href="https://git-scm.com/" text="git-scm.com" />
        </Body>
      <Header2 text="Configuration"/>
        <Body>
          <List 
            items={[
              { desc: "Open up a terminal on your local machine" },
              { desc: "Run the following commands and set your name and email address" },
            ]}
          />
        {/* Insert code here */}
        <Code text="git config --global user.name 'Nidhi Swamy'" />
        <Code text="git config --global user.email 'HrQp7@example.com'" />
        </Body>
      <Header1 text="Commands"/>
        <Body>
          The basic commands for running and managing Git are highlighted below. Git has over 135 commands that are all useful in their own ways. I will update this page with them all once I have a condensed version of explaining and introducing them. 
        </Body>
        <Header2 text="1. Initializing a Repository"/>
        <Body>
          This command initializes a local repository in the current local directory of your machine
          <Code text="git init"/>
        </Body>
        <Header2 text="2. Status"/>
        <Body>
          This command checks the status of the current git repository which includes unstaged commits, changes, and unpushed references.
          <Code text="git status"/>
        </Body>
        <Header2 text="3. Changes"/>
        <Body>
          This command initializes a local repository in the current local directory of your machine
          <Code text="git add . // adds all changed files" />
          <Code text="git add file1.ext file2.ext // adds all specified files" />
        </Body>
        <Header2 text="4. Viewing Commit History"/>
        <Body>
          This command initializes a local repository in the current local directory of your machine
          <Code text="git log" />
        </Body>
        <Header2 text="5. Branches"/>
        <Body>
          This command initializes a local repository in the current local directory of your machine
          <Code text="git branch <branch-name>" />
        </Body>
        <Header2 text="6. Merging"/>
        <Body>
          This command initializes a local repository in the current local directory of your machine
          <Code text="git merge <branch-name>" />
        </Body>
      <Header1 text="Resources"/>
        <Body>
          Like mentioned above, this is a quick run-down of the basics of Git and GitHub. If you would like to know more about the various resources, check these links out!
        </Body>
        <br />
        <Body>
          <LinkText href="https://git-scm.com/doc" text="git-scm.com/doc"/>
          <br />
          <LinkText href="https://docs.github.com/en" text="docs.github.com"/>
        </Body>
    </BlogLayout>
  );
}
