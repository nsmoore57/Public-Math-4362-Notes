var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "week-01-install-python-uv",
  "level": "1",
  "url": "week-01-install-python-uv.html",
  "type": "Section",
  "number": "1.1",
  "title": "Installing Python and uv",
  "body": " Installing Python and uv    Install uv , the tool used to manage the course Python environment.  Confirm that the terminal can find uv before syncing the course environment.  Sync the course environment and open jupyter lab    If you already have uv installed, you do not need to reinstall it. You may still run the verification commands below. If a command reports that uv is not found, install uv first and then open a new terminal before continuing.   Video: Installing uv and Opening JupyterLab  This video demonstrates first-time setup: installing or verifying uv , installing the course Python version, synchronizing the course project environment, launching JupyterLab, and confirming the setup in the getting-started notebook.     Step 1: Install uv  First, go to the uv installation page at https:\/\/astral.sh\/uv\/install . Close to the top of the page, you will see the installation command for your operating system. The command for Windows is shown below. For the macOS and Linux command, click the appropriate header right above the command.  Windows installation command for uv.   A screenshot of the uv installer page with the Windows installation command.     On Windows, open PowerShell . On macOS or Linux, open Terminal . Then use the command for your operating system.    Operating system  Command    Windows PowerShell  irm https:\/\/astral.sh\/uv\/install.ps1 | iex    macOS or Linux  curl -LsSf https:\/\/astral.sh\/uv\/install.sh | sh    After the installer finishes, close the terminal and open a new one. This lets your operating system reload the command path.    Step 2: Verify uv  Run the following command in the new terminal.   uv --version   If the command prints a version number, uv is installed. If it says that uv is not recognized or not found, restart the terminal once more. If it still fails, ask for help and include the exact error message.  Successful uv installation version command. Your actual version number may be different.   A screenshot of the uv version command output. The version is 0.11.31       Step 3: Extract the course environment folder  Remember that zip file containing the course environment folder from the introduction? Extract it to your desired location. This directory will be the place where you put the programming files for the course. Remember this location for the next step. Remember this location for the next step.    Step 4: Start the Jupyter Lab Server and Environment  If you are running Windows, double-click the Start_Jupyter_Windows.bat file to start the Jupyter Lab server and environment. If you are running macOS or Linux, use the Start_Jupyter_Mac.command script instead. This should install all the required packages for the course and open the Jupyter Lab interface in your web browser.  The course environment folder with the Start_Jupyter_Windows.bat or Start_Jupyter_Mac.command script.   A screenshot of the course environment folder with the Start_Jupyter_Windows.bat or Start_Jupyter_Mac.command script.       Step 5: Jupyter Lab Should Be Running  Once you have started the Jupyter Lab server and environment, you should see the Jupyter Lab interface in your web browser.  The Jupyter Lab interface in your web browser.   A screenshot of the Jupyter Lab interface in your web browser.       What to do if setup fails  Do not delete random files or reinstall many tools at once. First copy the exact error message, check the troubleshooting appendix, and ask for help in the course help channel or office hours. Setup troubleshooting is something that AI can help with and you have permission to use it for troubleshooting the installation process.  When asking for help, either from an AI assistant or from me, include the command you ran, the folder where you ran it, your operating system, and the exact error text. A screenshot can be useful, but copied text is usually easier to search and diagnose.   "
},
{
  "id": "week-01-install-python-uv-2",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-2",
  "type": "Objectives",
  "number": "1.1",
  "title": "",
  "body": "  Install uv , the tool used to manage the course Python environment.  Confirm that the terminal can find uv before syncing the course environment.  Sync the course environment and open jupyter lab   "
},
{
  "id": "week-01-install-python-uv-5-2-3",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-5-2-3",
  "type": "Figure",
  "number": "1.1.1",
  "title": "",
  "body": " Windows installation command for uv.   A screenshot of the uv installer page with the Windows installation command.   "
},
{
  "id": "week-01-install-python-uv-5-3",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "PowerShell Terminal "
},
{
  "id": "week-01-install-python-uv-6-4-3",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-6-4-3",
  "type": "Figure",
  "number": "1.1.2",
  "title": "",
  "body": " Successful uv installation version command. Your actual version number may be different.   A screenshot of the uv version command output. The version is 0.11.31   "
},
{
  "id": "week-01-install-python-uv-8-2-3",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-8-2-3",
  "type": "Figure",
  "number": "1.1.3",
  "title": "",
  "body": " The course environment folder with the Start_Jupyter_Windows.bat or Start_Jupyter_Mac.command script.   A screenshot of the course environment folder with the Start_Jupyter_Windows.bat or Start_Jupyter_Mac.command script.   "
},
{
  "id": "week-01-install-python-uv-9-2-1",
  "level": "2",
  "url": "week-01-install-python-uv.html#week-01-install-python-uv-9-2-1",
  "type": "Figure",
  "number": "1.1.4",
  "title": "",
  "body": " The Jupyter Lab interface in your web browser.   A screenshot of the Jupyter Lab interface in your web browser.   "
},
{
  "id": "week-01-jupyter-basics",
  "level": "1",
  "url": "week-01-jupyter-basics.html",
  "type": "Section",
  "number": "1.2",
  "title": "Getting Started with Jupyter Notebooks",
  "body": " Getting Started with Jupyter Notebooks   To start, we'll open a Jupyter Notebook and get familiar with the interface.   Imagine Jupyter Notebook as your personal science journal: you write notes, do calculations, and see results right away, all in one digital book. It’s perfect for numerical analysis because you can test ideas interactively, like trying different numbers in a formula and seeing the output instantly.    How to Open a .ipynb File  An .ipynb file is a file format associated with Jupyter Notebook. After you launch Jupyter Notebook (Check previous page if you do not know how), your web browser (like Chrome or Firefox) will open automatically, showing a list of files and folders in current work directory. It’s running on your computer, not the internet.  In the browser, click on your .ipynb file. It opens like a webpage you can edit!    Understanding the Interface and Running Code  Now that it’s open, let’s explore the screen together. It’s not complicated—think of it as a notebook with pages you can write on.  Menu Bar at the Top  File for saving or opening, Edit for copying, View to hide\/show parts, Insert to add sections, Cell to run things, Kernel to restart if something goes wrong (like turning off and on a calculator), and Help for tips.   Toolbar Just Below  Quick buttons! The floppy disk saves, the + adds a new section (cell), scissors cut, copy\/paste for cells, the play button runs code, the square stops running code, arrows restart, and a dropdown changes cell type (Code for programming, Markdown for notes).   Cells - The Main Part  These are like blank pages in your journal.  Code Cells: For writing instructions to the computer. They have []: on the left—the brackets show if you've run it (e.g., [1]: means the first \"run\").  Markdown Cells: For writing text, like explanations. Use # for big headings, ## for smaller, * for italics, ** for bold, or - for bullet lists.  When you click a cell, it gets a highlighted border.      Output Area  After running a code cell, results appear below.    Kernel  This is the \"brain\" running in the background. If code gets stuck (infinite loop?), go to Kernel > Restart.    How to Run Code   Click into a code cell—it turns highlighted.  Type a simple instruction, like print(\"Hello, world!\") . (Don’t worry, we’ll explain this soon!)  To run: Hold Shift and press Enter. (Or Ctrl + Enter to stay in the cell, or click the play button.)  Watch: The kernel thinks (asterisk in brackets), then shows output.  If it’s your first run, it starts the kernel automatically.     "
},
{
  "id": "week-01-python-basics",
  "level": "1",
  "url": "week-01-python-basics.html",
  "type": "Section",
  "number": "1.3",
  "title": "Python Basics",
  "body": " Python Basics   Here we learn the ABCs of Python: doing math, comparing things, and storing information. Think of this as learning to use a calculator that can remember numbers and make decisions. For this section, you should be able to find the PythonTutorial.ipynb notebook in the demo directory of the course environment folder.    Variables and Basic Data Types       Mathematical Operations       Lists       Tuples and Dictionaries in Python       Boolean Logic       If Statements       For Loops       While Loops       Functions       Help System in Jupyter Notebooks       Round-Off Error       Python Exceptions      "
},
{
  "id": "week-01-numpy-basics",
  "level": "1",
  "url": "week-01-numpy-basics.html",
  "type": "Section",
  "number": "1.4",
  "title": "Introduction to NumPy",
  "body": " Introduction to NumPy   For this section, you should be able to find the Numpy_tutorial.ipynb notebook in the demo directory of the course environment folder.     Basic Array Operations in NumPy       Indexing and Slicing in NumPy      "
},
{
  "id": "week-01-plotly",
  "level": "1",
  "url": "week-01-plotly.html",
  "type": "Section",
  "number": "1.5",
  "title": "Plotting with Plotly",
  "body": " Plotting with Plotly  For this section, you should be able to find the plotly-plotting-introduction.ipynb notebook in the demo directory of the course environment folder.   "
},
{
  "id": "appendix-troubleshooting",
  "level": "1",
  "url": "appendix-troubleshooting.html",
  "type": "Appendix",
  "number": "A",
  "title": "Troubleshooting",
  "body": " Troubleshooting   Setup problems    Confirm that you are in the course project folder before running uv sync or uv run jupyter lab .    Copy the exact error message when asking for help.    If JupyterLab opens in the wrong folder, stop it and relaunch from the course project folder.      Notebook problems    If Python says a name is not defined, check whether the cell that creates that variable has been run.    If output looks stale, restart the kernel and rerun the notebook from the top.    If a plot does not appear, check that the plotting cell ran and that it calls plt.show() when needed.      Standard Programming Tips   If something isn't behaving the way you expect, try putting \"print\" statements into your code to track what the different variables are doing. That is usually helpful in helping you pinpoint where the code is doing something that you don't expect.  If you can, work through the process by hand on a simple example and then see if the computer is getting the same results. This can be tedious, but it's very helpful to compare what the answer should be with what the computer variables have stored.  Throughout the course, you'll develop and practice the ability to \"think like the computer\". That is, you'll learn how to walk yourself through the code the same way the computer runs it. This \"thinking mode\" will help you spot errors. Just remind yourself to think \"What does this line of code do? What does the next line of code do?\". When you're trying to \"think like a computer\" to debug your code, you want to think about what the computer is actually doing, not what you want it to do at each step. A large part of programming is holding both of those things in mind at the same time: \"What do I want this line of code to do?\" and \"What does this line of code actually do?\" When those two questions don't have the same answer, you have a problem (a \"bug\" in computer science talk).     When asking for help It's fine to ask me or your classmates for help, but asking for programming help can be a little tricky. If you don't give the person (or AI) helping you enough information, they won't be able to help you effectively. Here are some tips for asking for help:  Copy the exact error message  Give all the relevant cells that are causing the issue  Let me know what you've tried so far  There are two main types of issues you'll come across while programming for numerical analysis:  Code errors: your code crashes, produces an error of some kind. These errors are errors with the actual written lines of code. You aren't giving valid instructions to the computer or you are trying to do something that code wasn't designed to handle (dividing by zero for example).  Math errors: your code runs fine without errors, etc. but it gives you incorrect output. These errors mean your code is functional, it's just not \"doing the right thing\".  This is an important distinction because it helps others know whether this is an error with syntax (getting your correct idea into the programming language correctly) or an error with your idea or algorithm.  If your error is a math error, state what the expected output is and what the actual output is. This can help narrow down the issue.  Sometimes what look like math errors are actually code errors so the above aren't hard and fast rules. Sometimes python is silently doing something you don't expect and that causes code which runs fine but doesn't give the right answer. All that to say \"debugging\" (that is, fixing code which isn't working) almost always takes longer than writing it in the first place. This is very typical so expect that fixing your code will be part of the process. That also means we might need to have a back and forth exchange because some of it is experimentation about where the error might be.    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
