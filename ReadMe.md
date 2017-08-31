# groupProject

 GITHUB FLOW

1. From Master: Git Pull (this will bring in the latest code down)
2. git checkout -b name the branch 

——————— once finished with feature ————————— 
3. commit everything (git add/commit)
4. git checkout master 
5. git pull —> this checks whether master has been changed since create branch. 
6. git checkout <feature branch> 
7. git merge master 
8. git push origin <feature branch> -u
9. open pull request (tell mentor I've open pull request)

git branch -d <feature branch> 

——— fix merge conflict ———— 
<<<<HEAD

this is will be my code 

>>>> master 

this is there other coders 

To Start Working On the Project

1. Fork/Clone to your local drive/machine.. $git clone https://github.com/CloneWellsFargoChase/groupProject.git

2. Create a new branch.. $git checkout -b <insert-name-here>

3. Run 'npm install' to install all package dependencies.. $npm install

4. Run 'npm start' to view in browser.. $npm start

5. REBASE often!!!.. $git pull

To Commit Changes Locally

1. Run git status to check for local changes.. $git status 

2. Add files to commit.. $git add .

3. Commit changes to local directory with the following structure.. $git commit -m 'finished: insert-text-here'

To Commit Changes To Github

1. Run git remote -v to determine upstream name. Validate for exact match to the name and path below.. $git remote -v
 
   origin  https://github.com/CloneWellsFargoChase/groupProject.git (fetch)
 
   origin  https://github.com/CloneWellsFargoChase/groupProject.git (push)

2. Run git push origin <your-branch-name>.. $git push origin test-branch

3. Merge request to be approved by approver(Dallin).

4. Delete your local branch and REBASE once merge has been approved.

Rebasing

1. Checkout to local master branch.. $git checkout master

2. Rebase with remote master.. $git pull

3. Switch to local branch.. $git checkout branch-name

4. Merge local branch with master.. $git merge master

Bugs/Defects/Errors
-- Please raise any issues/concerns/bugs in the issues tab --
