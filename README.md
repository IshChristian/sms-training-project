### Entities:
    - teachers
    - students
    - courses
    - admin

### CL
 Teachers 1 - 1 Courses 1 - N Students
### LL
 Teachers: - id (int)
            - name varchar()
            - level varachar()
            - age int()
 Courses: - c_id int() P.K
            - name varchar()

 Students: - s_id
            - name varchar ()
            - gender varchar()
            - class varchar()
            - c_id F.K

## Install Tailwind CSS
Install tailwindcss, @tailwindcss/postcss, and postcss via npm.
````bash
npm install tailwindcss @tailwindcss/postcss postcss
````
## Add Tailwind to your PostCSS configuration
Add @tailwindcss/postcss to your postcss.config.mjs file, or wherever PostCSS is     configured in your project.
    - create file called postcss.config.js
    - Copy and Paste
````bash
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  }
}
````
## Import Tailwind CSS
Add an @import to your CSS file that imports Tailwind CSS.
```bash
@import "tailwindcss";
```
## Start your build process
Run your build process with npm run dev or whatever command is configured in your package.json file.
```bash
npm run dev
```

### How to setup this project on your local computer
### 1.Clone
````bash
git clone https://github.com/IshChristian/sms-training-project.git
cd sms-training-project
````
### 2.Install
````bash
npm install
````
### 3.Run
````bash
npm run dev
````


For any help all more info

Number: 0791364641 
ISHIMWE CHRISTIAN
