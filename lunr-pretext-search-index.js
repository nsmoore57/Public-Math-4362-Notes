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
  "id": "unit-02-errors",
  "level": "1",
  "url": "unit-02-errors.html",
  "type": "Section",
  "number": "2.1",
  "title": "Errors",
  "body": "Errors   Before diving into numerical methods, let’s establish some fundamental concepts.  An iterative method generates a sequence of approximations that ideally converge to the true value as , meaning   Since we cannot compute the exact limit, we stop the iteration at some finite step and take as an approximation of . But how can we assess the quality of this approximation?  To do so, we measure the approximation error , which quantifies how close is to . There are in general two basic types of measured error, absolute error and relative error.   Absolute and Relative Error   Absolute and Relative Error  Suppose is an approximation of , the quantity is called the absolute error , and is called the relative error , provided that .    In an approximation, if the true value is and the approximate value is , then what is the absolute error and relative error?  By definition, it is easy to find that the absolute error is and the relative error is .   Knowing how errors are typically measured, we now move to discuss the order of convergence , which describes how quickly an iterative method approaches the true solution.   Order of Convergence   Order of Convergence  Let be a sequence that converges to . If there exist constants and such that for all , then we say that converges to with order .    It is easy to see can be written as .  If and , the sequence is said to converge linearly , with a rate of convergence given by . In this case, using induction, we can show that Some methods satisfy this bound but do not satisfy for any . These methods are still classified as linearly convergent . A notable example of this is the bisection method .  If , the convergence is said to be superlinear . In particular, when , the convergence is called quadratic convergence .    Suppose you apply an iterative method and obtain the following errors from the first four steps: How would you characterize the order of convergence of this method?  The error is reduced by a factor of 10 in every iteration and so can be written . According to the definition of Order of Convergence, this is linear ( ) convergence with a rate of 0.1.    Suppose you apply an iterative method and obtain the following errors from the first four steps: How would you characterize the order of convergence of this method?  The error is squared in every iteration and so can be written . According to the definition of Order of Convergence, this is quadratic ( ) convergence. Note that it can also be classified as superlinear convergence since . Video Breakdown       If an iterative method approximately squares the error in every two iterations then what is its order of convergence?  We're given that the error in step satisfies . But from the definition of convergence, for a method of order , the error in step also satisfies . Comparing these two expressions, it suggests that and , that is, . Video Breakdown       Stopping Criteria   A key challenge in any iterative method is determining when to stop since the true value is unknown. Given a predefined error tolerance , we commonly use one of the following stopping criteria:  Successive approximations are sufficiently close:    Relative change in approximations is small (when ):    Function value is near zero (indicating a good root approximation):    Maximum number of iterations:      Throughout our numerical experiments, we will test different stopping criteria.   "
},
{
  "id": "unit-02-errors-2-2",
  "level": "2",
  "url": "unit-02-errors.html#unit-02-errors-2-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "iterative method "
},
{
  "id": "unit-02-errors-2-5",
  "level": "2",
  "url": "unit-02-errors.html#unit-02-errors-2-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "approximation error "
},
{
  "id": "unit-02-absolute-and-relative-error-3",
  "level": "2",
  "url": "unit-02-errors.html#unit-02-absolute-and-relative-error-3",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Absolute and Relative Error.",
  "body": "Absolute and Relative Error  Suppose is an approximation of , the quantity is called the absolute error , and is called the relative error , provided that .  "
},
{
  "id": "unit-02-absolute-and-relative-error-4",
  "level": "2",
  "url": "unit-02-errors.html#unit-02-absolute-and-relative-error-4",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": " In an approximation, if the true value is and the approximate value is , then what is the absolute error and relative error?  By definition, it is easy to find that the absolute error is and the relative error is .  "
},
{
  "id": "unit-02-absolute-and-relative-error-5",
  "level": "2",
  "url": "unit-02-errors.html#unit-02-absolute-and-relative-error-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order of convergence "
},
{
  "id": "unit-02-order-of-convergence-3",
  "level": "2",
  "url": "unit-02-errors.html#unit-02-order-of-convergence-3",
  "type": "Definition",
  "number": "2.1.3",
  "title": "Order of Convergence.",
  "body": "Order of Convergence  Let be a sequence that converges to . If there exist constants and such that for all , then we say that converges to with order .  "
},
{
  "id": "unit-02-order-of-convergence-4",
  "level": "2",
  "url": "unit-02-errors.html#unit-02-order-of-convergence-4",
  "type": "Remark",
  "number": "2.1.4",
  "title": "",
  "body": " It is easy to see can be written as .  If and , the sequence is said to converge linearly , with a rate of convergence given by . In this case, using induction, we can show that Some methods satisfy this bound but do not satisfy for any . These methods are still classified as linearly convergent . A notable example of this is the bisection method .  If , the convergence is said to be superlinear . In particular, when , the convergence is called quadratic convergence .  "
},
{
  "id": "unit-02-order-of-convergence-5",
  "level": "2",
  "url": "unit-02-errors.html#unit-02-order-of-convergence-5",
  "type": "Example",
  "number": "2.1.5",
  "title": "",
  "body": " Suppose you apply an iterative method and obtain the following errors from the first four steps: How would you characterize the order of convergence of this method?  The error is reduced by a factor of 10 in every iteration and so can be written . According to the definition of Order of Convergence, this is linear ( ) convergence with a rate of 0.1.  "
},
{
  "id": "unit-02-order-of-convergence-6",
  "level": "2",
  "url": "unit-02-errors.html#unit-02-order-of-convergence-6",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": " Suppose you apply an iterative method and obtain the following errors from the first four steps: How would you characterize the order of convergence of this method?  The error is squared in every iteration and so can be written . According to the definition of Order of Convergence, this is quadratic ( ) convergence. Note that it can also be classified as superlinear convergence since . Video Breakdown     "
},
{
  "id": "unit-02-order-of-convergence-7",
  "level": "2",
  "url": "unit-02-errors.html#unit-02-order-of-convergence-7",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": " If an iterative method approximately squares the error in every two iterations then what is its order of convergence?  We're given that the error in step satisfies . But from the definition of convergence, for a method of order , the error in step also satisfies . Comparing these two expressions, it suggests that and , that is, . Video Breakdown     "
},
{
  "id": "unit-02-bisection-method",
  "level": "1",
  "url": "unit-02-bisection-method.html",
  "type": "Section",
  "number": "2.2",
  "title": "Bisection Method",
  "body": "Bisection Method  Let’s explore the bisection method , a simple and reliable technique that makes minimal assumptions about the function . This method is rooted in the Intermediate Value Theorem , a fundamental result you may recall from Calculus I. Before diving into the method itself, let’s briefly revisit the theorem: Intermediate Value Theorem  If and is any number between and , then there exists with .    The Method   According to the Intermediate Value Theorem, if a continuous function is defined on the interval and satisfies , then there exists such that . This principle forms the foundation of the bisection method. At each step, the interval is divided into two halves by computing the midpoint. The value of is then evaluated at the midpoint, and we determine which subinterval contains the root based on the sign of the function. The subinterval that does not contain the root is discarded, and the process is repeated on the remaining interval.    Bisection Method       Bisection Method      Apply the bisection method to find the root of the function starting from the interval . Calculate , , and .  First, we need to verify there exist a root in the interval , where and , Since , then there exists such that . Hence, is the midpoint of the interval, that is, Then we evaluate the function at , Therefore, the root is in the left subinterval since the function has different signs at the endpoints ( and ) of left subinterval. Then, is the midpoint of left subinterval, that is, Since the root is between and , therefore,   Video Breakdown       Error Analysis  Now, let’s perform an error analysis for the bisection method to understand how accurately it approximates the root at each step.    Suppose that and . The bisection method generates a sequence approximating a zero of with   Let the sequences and denote the left-end and right-end points of the subintervals generated by the bisection method. Since at each step the interval is halved, we have By mathematical induction, we get Therefore,    The bisection method converges linearly with a rate of convergence by this theorem and the definition of the Order of Convergence.  The bisection method takes iterations to obtain a value that satisfies , where is a predefined error tolerance.   Let’s revisit last example of applying the bisection method to find the root of the function starting from the interval . If the allowed approximation tolerance is , how many iterations at least are required?   By , we have Therefore, it requires at least 3 iterations such that .  Video Breakdown       This example suggests that we need at least 3 iterations to achieve an error tolerance of . We can confirm this using Example 6 , where the first three approximations were computed, with .  For the simple function , the exact positive root is . Therefore, the absolute error at the third iteration is which verifies that the desired accuracy is indeed achieved after 3 iterations.    Algorithm and Coding  Next, we’ll summarize the steps of the bisection algorithm, illustrate its process with a flowchart, and then implement it using Python code.  Bisection Method   Define .  If , then accept as the root and stop.  If , then set . Otherwise, set . Return to step 1.       Bisection Flow Chart   Bisection Flow Chart    def bisection(f, a, b, atol, max_iter): root_found = False if f(a)*f(b) < 0: for i in range(max_iter): p = (a+b)\/2 if b-p < atol: root_found = True return p elif f(b)*f(p) < 0: a = p else: b = p if not root_found: raise Exception( \"Bisection did not converge \" f\"within {max_iter} iterations. \" \"Try a greater max_iter.\" ) else: raise Exception( \"Bisection is not applicable for this problem.\" )  Let’s apply the bisection method to find a root of the function within the interval , using error tolerance of . We also set max_iter = 20 , as we expect the method to converge to a root within 20 iterations.  p = bisection( f=lambda x: x*x*x + 2*x*x + 5*x - 2, a=0, b=2, atol=1e-3, max_iter=20, ) print(f\"The root found by bisection method is {p}.\")  You will see the output as follows: The root found by bisection method is 0.3447265625. The code will be given in Canvas.   "
},
{
  "id": "unit-02-bisection-method-2-1",
  "level": "2",
  "url": "unit-02-bisection-method.html#unit-02-bisection-method-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "bisection method Intermediate Value Theorem "
},
{
  "id": "anim-bisection-method-light",
  "level": "2",
  "url": "unit-02-bisection-method.html#anim-bisection-method-light",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " Bisection Method    "
},
{
  "id": "anim-bisection-method-dark",
  "level": "2",
  "url": "unit-02-bisection-method.html#anim-bisection-method-dark",
  "type": "Figure",
  "number": "2.2.3",
  "title": "",
  "body": " Bisection Method   "
},
{
  "id": "unit-02-the-method-5",
  "level": "2",
  "url": "unit-02-bisection-method.html#unit-02-the-method-5",
  "type": "Example",
  "number": "2.2.4",
  "title": "",
  "body": " Apply the bisection method to find the root of the function starting from the interval . Calculate , , and .  First, we need to verify there exist a root in the interval , where and , Since , then there exists such that . Hence, is the midpoint of the interval, that is, Then we evaluate the function at , Therefore, the root is in the left subinterval since the function has different signs at the endpoints ( and ) of left subinterval. Then, is the midpoint of left subinterval, that is, Since the root is between and , therefore,   Video Breakdown     "
},
{
  "id": "unit-02-error-analysis-4",
  "level": "2",
  "url": "unit-02-bisection-method.html#unit-02-error-analysis-4",
  "type": "Theorem",
  "number": "2.2.5",
  "title": "",
  "body": " Suppose that and . The bisection method generates a sequence approximating a zero of with   Let the sequences and denote the left-end and right-end points of the subintervals generated by the bisection method. Since at each step the interval is halved, we have By mathematical induction, we get Therefore,   "
},
{
  "id": "unit-02-error-analysis-5",
  "level": "2",
  "url": "unit-02-bisection-method.html#unit-02-error-analysis-5",
  "type": "Remark",
  "number": "2.2.6",
  "title": "",
  "body": "The bisection method converges linearly with a rate of convergence by this theorem and the definition of the Order of Convergence. "
},
{
  "id": "unit-02-error-analysis-6",
  "level": "2",
  "url": "unit-02-bisection-method.html#unit-02-error-analysis-6",
  "type": "Remark",
  "number": "2.2.7",
  "title": "",
  "body": "The bisection method takes iterations to obtain a value that satisfies , where is a predefined error tolerance. "
},
{
  "id": "unit-02-error-analysis-7",
  "level": "2",
  "url": "unit-02-bisection-method.html#unit-02-error-analysis-7",
  "type": "Example",
  "number": "2.2.8",
  "title": "",
  "body": " Let’s revisit last example of applying the bisection method to find the root of the function starting from the interval . If the allowed approximation tolerance is , how many iterations at least are required?   By , we have Therefore, it requires at least 3 iterations such that .  Video Breakdown     "
},
{
  "id": "unit-02-error-analysis-8",
  "level": "2",
  "url": "unit-02-bisection-method.html#unit-02-error-analysis-8",
  "type": "Remark",
  "number": "2.2.9",
  "title": "",
  "body": " This example suggests that we need at least 3 iterations to achieve an error tolerance of . We can confirm this using Example 6 , where the first three approximations were computed, with .  For the simple function , the exact positive root is . Therefore, the absolute error at the third iteration is which verifies that the desired accuracy is indeed achieved after 3 iterations.  "
},
{
  "id": "unit-02-algorithm-and-coding-3",
  "level": "2",
  "url": "unit-02-bisection-method.html#unit-02-algorithm-and-coding-3",
  "type": "Algorithm",
  "number": "2.2.10",
  "title": "Bisection Method.",
  "body": "Bisection Method   Define .  If , then accept as the root and stop.  If , then set . Otherwise, set . Return to step 1.    "
},
{
  "id": "unit-02-algorithm-and-coding-4",
  "level": "2",
  "url": "unit-02-bisection-method.html#unit-02-algorithm-and-coding-4",
  "type": "Figure",
  "number": "2.2.11",
  "title": "",
  "body": "  Bisection Flow Chart   Bisection Flow Chart  "
},
{
  "id": "unit-03-newtons-method",
  "level": "1",
  "url": "unit-03-newtons-method.html",
  "type": "Section",
  "number": "3.1",
  "title": "Newton’s Method",
  "body": " Newton's Method   Now that we’ve explored the bisection method, let’s move on to a more powerful and faster-converging technique: Newton’s method .    The Method    Newton’s method (also known as the Newton-Raphson method) is an iterative algorithm used to approximate the roots of a real-valued function . Unlike the bisection method, which only requires function evaluations, Newton’s method also uses the derivative to guide each step.  Starting from an initial guess close to the root, the method generates a sequence using the formula Geometrically, this formula corresponds to finding the -intercept of the tangent line to the graph of at the point .    Newton's Method       Newton's Method     When the initial guess is sufficiently close to the actual root and , Newton’s method typically converges very rapidly, at least quadratically , making it much more efficient than bisection for smooth functions. However, this speed comes with a trade-off: Newton’s method may fail to converge if the initial guess is poor or if is zero or undefined during the iteration.   Apply Newton’s method to find the root of the function with an initial guess . Calculate , , and . Round your answer to four decimal places if necessary.   It is easy to find , hence the iterative formula for Newton’s method is Therefore,   Video Breakdown  Dr. Yang walks through this example in the following video.        Error Analysis  Next, we’ll carry out an error analysis for Newton’s method. To do this, we’ll need to use Taylor series . Let’s begin by recalling the definition. Taylor Series  Let be a function with derivatives of all orders throughout some interval containing as an interior point. Then the Taylor series generated by at is where is between and .    Quadratic Convergence of Newton’s Method  Newton’s method has quadratic convergence.    To show Newton’s method has quadratic convergence, we need to show the following inequality holds true:   Suppose is sufficiently close to the root of the function . Then the Taylor series (choose ) generated by at is Hence, But is the root of the function , which means . Solving this equation for yields   By Newton’s method, . Therefore, the left side of becomes Let . Then which proves the desired bound.      Algorithm and Coding  Next, we’ll summarize the steps of Newton’s method, illustrate its process with a flowchart, and then implement it using Python code.  Newton’s Method   Given a scalar differentiable function , start from an initial guess .  For , set until or a maximum number of iterations is reached.      Flow chart for Newton's method: evaluate the function and its derivative at the current approximation, update with the tangent-line intercept, and test the tolerance.   Newton's Method Flow Chart    def newton(f, fprime, p0, atol, max_iter): root_found = False for i in range(max_iter): p1 = p0 - f(p0)\/fprime(p0) if abs(p1 - p0) < atol: root_found = True return p1 else: p0 = p1 if not root_found: raise Exception( f\"Newton's method did not converge within {max_iter} iterations. \" \"Try different initial guesses or increase max_iter.\" )  Let’s apply Newton’s method to find a root of the function with an initial guess p0=1 , using error tolerance . We also set max_iter = 20 , as we expect the method to converge to a root within 20 iterations. We also need the derivative, which in this case is .  p = newton(f=lambda x: x**3 + 2*x**2 + 5*x - 2, fprime=lambda x: 3*x**2 + 4*x + 5, p0=1, atol=1e-3, max_iter=20) print(f\"The root found by Newton's method is {p}.\")  You will see output like the following (the last few digits may differ due to variations in computing precision across different machines): The root found by Newton's method is 0.34438923796780624. You can download the accompanying Newton Code notebook from Canvas.  Tips for Choosing an Initial Guess  A good initial guess for Newton’s method is one that is close to the actual root . To choose one:  Try graphing the function to visually identify where it crosses the -axis.  Look for an interval where the function changes sign (like in the bisection method), and pick a point near that change.  If possible, use physical context or analytical insight to estimate where a root might be.  Avoid points where the derivative is zero or very small, as this can cause the method to diverge or behave unpredictably.  Starting with a reasonable guess increases the chances of fast and reliable convergence.    "
},
{
  "id": "unit-03-newtons-method-2-1",
  "level": "2",
  "url": "unit-03-newtons-method.html#unit-03-newtons-method-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton’s method "
},
{
  "id": "unit-03-newton-method-3",
  "level": "2",
  "url": "unit-03-newtons-method.html#unit-03-newton-method-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Newton’s method "
},
{
  "id": "anim-newtons-method-light",
  "level": "2",
  "url": "unit-03-newtons-method.html#anim-newtons-method-light",
  "type": "Figure",
  "number": "3.1.1",
  "title": "",
  "body": " Newton's Method    "
},
{
  "id": "anim-newtons-method-dark",
  "level": "2",
  "url": "unit-03-newtons-method.html#anim-newtons-method-dark",
  "type": "Figure",
  "number": "3.1.2",
  "title": "",
  "body": " Newton's Method   "
},
{
  "id": "unit-03-newton-method-6",
  "level": "2",
  "url": "unit-03-newtons-method.html#unit-03-newton-method-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "quadratically "
},
{
  "id": "unit-03-newton-method-7",
  "level": "2",
  "url": "unit-03-newtons-method.html#unit-03-newton-method-7",
  "type": "Example",
  "number": "3.1.3",
  "title": "",
  "body": " Apply Newton’s method to find the root of the function with an initial guess . Calculate , , and . Round your answer to four decimal places if necessary.   It is easy to find , hence the iterative formula for Newton’s method is Therefore,   Video Breakdown  Dr. Yang walks through this example in the following video.     "
},
{
  "id": "unit-03-newton-error-analysis-2",
  "level": "2",
  "url": "unit-03-newtons-method.html#unit-03-newton-error-analysis-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Taylor series Taylor series "
},
{
  "id": "unit-03-newton-error-analysis-3",
  "level": "2",
  "url": "unit-03-newtons-method.html#unit-03-newton-error-analysis-3",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "Quadratic Convergence of Newton’s Method.",
  "body": "Quadratic Convergence of Newton’s Method  Newton’s method has quadratic convergence.    To show Newton’s method has quadratic convergence, we need to show the following inequality holds true:   Suppose is sufficiently close to the root of the function . Then the Taylor series (choose ) generated by at is Hence, But is the root of the function , which means . Solving this equation for yields   By Newton’s method, . Therefore, the left side of becomes Let . Then which proves the desired bound.   "
},
{
  "id": "unit-03-newton-algorithm-and-coding-3",
  "level": "2",
  "url": "unit-03-newtons-method.html#unit-03-newton-algorithm-and-coding-3",
  "type": "Algorithm",
  "number": "3.1.6",
  "title": "Newton’s Method.",
  "body": "Newton’s Method   Given a scalar differentiable function , start from an initial guess .  For , set until or a maximum number of iterations is reached.   "
},
{
  "id": "unit-03-newton-algorithm-and-coding-4",
  "level": "2",
  "url": "unit-03-newtons-method.html#unit-03-newton-algorithm-and-coding-4",
  "type": "Figure",
  "number": "3.1.7",
  "title": "",
  "body": "  Flow chart for Newton's method: evaluate the function and its derivative at the current approximation, update with the tangent-line intercept, and test the tolerance.   Newton's Method Flow Chart  "
},
{
  "id": "unit-03-newton-algorithm-and-coding-10",
  "level": "2",
  "url": "unit-03-newtons-method.html#unit-03-newton-algorithm-and-coding-10",
  "type": "Remark",
  "number": "3.1.8",
  "title": "Tips for Choosing an Initial Guess.",
  "body": "Tips for Choosing an Initial Guess  A good initial guess for Newton’s method is one that is close to the actual root . To choose one:  Try graphing the function to visually identify where it crosses the -axis.  Look for an interval where the function changes sign (like in the bisection method), and pick a point near that change.  If possible, use physical context or analytical insight to estimate where a root might be.  Avoid points where the derivative is zero or very small, as this can cause the method to diverge or behave unpredictably.  Starting with a reasonable guess increases the chances of fast and reliable convergence.  "
},
{
  "id": "unit-03-secant-method",
  "level": "1",
  "url": "unit-03-secant-method.html",
  "type": "Section",
  "number": "3.2",
  "title": "Secant Method",
  "body": " Secant Method   Building on our understanding of Newton’s method, we now introduce the secant method , a practical alternative that avoids the need for an explicit derivative.    The Method   Newton’s method requires the user to supply both the function and its derivative . However, in many real-world situations, computing the derivative may be difficult, expensive, or even impossible—for example, when dealing with data from experiments, simulations, or complex black-box functions. In such cases, the secant method becomes especially useful.  The secant method approximates the derivative using the slope of the secant line through the two most recent iterates: Substituting this into Newton’s update formula, we get the secant method iteration: This method requires two initial guesses, and , but avoids evaluating the derivative altogether. While it typically converges more slowly than Newton’s method, it is often preferred when derivative information is unavailable or costly to obtain.  Geometrically, this formula corresponds to finding the -intercept of the secant line connecting the points and on the graph of .    Secant Method       Secant Method      Apply the secant method to find the root of the function with initial guesses and . Calculate and . Round your answer to four decimal places if necessary.   By the iterative formula for the secant method, we have   Video Breakdown        Error Analysis  To understand the efficiency of the secant method, let’s analyze its convergence behavior. Specifically, we’ll show that it converges superlinearly, but not quadratically like Newton’s method.  Superlinear Convergence of the Secant Method  The secant method has superlinear convergence.   We will not prove this theorem, but provide the main idea. Using a Taylor expansion of and about , we can derive an expression for the error in terms of and . After some algebra, we find where .      Algorithm and Coding  Next, we’ll summarize the steps of the secant method , illustrate its process with a flowchart, and then implement it using Python code.  Secant Method   Given a scalar function , start with two initial guesses and .  For , compute until or a maximum number of iterations is reached.      Flow chart for the secant method: evaluate the function at two recent approximations, update with the secant-line intercept, and test the tolerance.   Secant Method Flow Chart    def secant(f, p0, p1, atol, max_iter): for i in range(max_iter): p2 = p1 - f(p1) * (p1 - p0) \/ (f(p1) - f(p0)) if abs(p2 - p1) \\le atol: return p2 else: p0, p1 = p1, p2 raise Exception( f\"Secant method did not converge within {max_iter} iterations. \" \"Try different initial guesses or increase max_iter.\" )  Let’s apply the secant method to find a root of the function using initial guesses p0 = 0 and p1 = 1 , and an error tolerance of . We’ll set max_iter = 20 , assuming the root will be found within that many steps.  p = secant(f=lambda x: x**3 + 2*x**2 + 5*x - 2, p0=0, p1=1, atol=1e-3, max_iter=20) print(f\"The root found by the secant method is {p}.\")  You may get output like the following (the final digits may vary depending on computing precision): The root found by the secant method is 0.3443892308090592. You can download the accompanying Secant Code notebook from Canvas.  Tips for Choosing Initial Guesses  A good pair of initial guesses for the secant method are two values close to the root and with opposite signs of . You can use a graph of the function or a sign change in the interval to guide your choice.    "
},
{
  "id": "unit-03-secant-method-2-1",
  "level": "2",
  "url": "unit-03-secant-method.html#unit-03-secant-method-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant method "
},
{
  "id": "unit-03-secant-method-description-3",
  "level": "2",
  "url": "unit-03-secant-method.html#unit-03-secant-method-description-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant method "
},
{
  "id": "anim-secant-method-light",
  "level": "2",
  "url": "unit-03-secant-method.html#anim-secant-method-light",
  "type": "Figure",
  "number": "3.2.1",
  "title": "",
  "body": " Secant Method    "
},
{
  "id": "anim-secant-method-dark",
  "level": "2",
  "url": "unit-03-secant-method.html#anim-secant-method-dark",
  "type": "Figure",
  "number": "3.2.2",
  "title": "",
  "body": " Secant Method   "
},
{
  "id": "unit-03-secant-method-description-7",
  "level": "2",
  "url": "unit-03-secant-method.html#unit-03-secant-method-description-7",
  "type": "Example",
  "number": "3.2.3",
  "title": "",
  "body": " Apply the secant method to find the root of the function with initial guesses and . Calculate and . Round your answer to four decimal places if necessary.   By the iterative formula for the secant method, we have   Video Breakdown     "
},
{
  "id": "unit-03-secant-error-analysis-3",
  "level": "2",
  "url": "unit-03-secant-method.html#unit-03-secant-error-analysis-3",
  "type": "Theorem",
  "number": "3.2.4",
  "title": "Superlinear Convergence of the Secant Method.",
  "body": "Superlinear Convergence of the Secant Method  The secant method has superlinear convergence.   We will not prove this theorem, but provide the main idea. Using a Taylor expansion of and about , we can derive an expression for the error in terms of and . After some algebra, we find where .   "
},
{
  "id": "unit-03-secant-algorithm-and-coding-2",
  "level": "2",
  "url": "unit-03-secant-method.html#unit-03-secant-algorithm-and-coding-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant method "
},
{
  "id": "unit-03-secant-algorithm-and-coding-3",
  "level": "2",
  "url": "unit-03-secant-method.html#unit-03-secant-algorithm-and-coding-3",
  "type": "Algorithm",
  "number": "3.2.5",
  "title": "Secant Method.",
  "body": "Secant Method   Given a scalar function , start with two initial guesses and .  For , compute until or a maximum number of iterations is reached.   "
},
{
  "id": "unit-03-secant-algorithm-and-coding-4",
  "level": "2",
  "url": "unit-03-secant-method.html#unit-03-secant-algorithm-and-coding-4",
  "type": "Figure",
  "number": "3.2.6",
  "title": "",
  "body": "  Flow chart for the secant method: evaluate the function at two recent approximations, update with the secant-line intercept, and test the tolerance.   Secant Method Flow Chart  "
},
{
  "id": "unit-03-secant-algorithm-and-coding-10",
  "level": "2",
  "url": "unit-03-secant-method.html#unit-03-secant-algorithm-and-coding-10",
  "type": "Remark",
  "number": "3.2.7",
  "title": "Tips for Choosing Initial Guesses.",
  "body": "Tips for Choosing Initial Guesses  A good pair of initial guesses for the secant method are two values close to the root and with opposite signs of . You can use a graph of the function or a sign change in the interval to guide your choice.  "
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
