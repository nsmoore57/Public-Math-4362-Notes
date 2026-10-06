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
  "body": "Bisection Method  Let’s explore the bisection method , a simple and reliable technique that makes minimal assumptions about the function . This method is rooted in the Intermediate Value Theorem , a fundamental result you may recall from Calculus I. Before diving into the method itself, let’s briefly revisit the theorem: Intermediate Value Theorem  If and is any number between and , then there exists with .    The Method   According to the Intermediate Value Theorem, if a continuous function is defined on the interval and satisfies , then there exists such that . This principle forms the foundation of the bisection method. At each step, the interval is divided into two halves by computing the midpoint. The value of is then evaluated at the midpoint, and we determine which subinterval contains the root based on the sign of the function. The subinterval that does not contain the root is discarded, and the process is repeated on the remaining interval.    Bisection Method       Bisection Method      Apply the bisection method to find the root of the function starting from the interval . Calculate , , and .  First, we need to verify there exist a root in the interval , where and , Since , then there exists such that . Hence, is the midpoint of the interval, that is, Then we evaluate the function at , Therefore, the root is in the left subinterval since the function has different signs at the endpoints ( and ) of left subinterval. Then, is the midpoint of left subinterval, that is, Since the root is between and , therefore,   Video Breakdown       Error Analysis  Now, let’s perform an error analysis for the bisection method to understand how accurately it approximates the root at each step.    Suppose that and . The bisection method generates a sequence approximating a zero of with   Let the sequences and denote the left-end and right-end points of the subintervals generated by the bisection method. Since at each step the interval is halved, we have By mathematical induction, we get Therefore,    The bisection method converges linearly with a rate of convergence by this theorem and the definition of the Order of Convergence.  The bisection method takes iterations to obtain a value that satisfies , where is a predefined error tolerance.   Let’s revisit last example of applying the bisection method to find the root of the function starting from the interval . If the allowed approximation tolerance is , how many iterations at least are required?   By , we have Therefore, it requires at least 3 iterations such that .  Video Breakdown       This example suggests that we need at least 3 iterations to achieve an error tolerance of . We can confirm this using Example 6 , where the first three approximations were computed, with .  For the simple function , the exact positive root is . Therefore, the absolute error at the third iteration is which verifies that the desired accuracy is indeed achieved after 3 iterations.    Algorithm and Coding  Next, we’ll summarize the steps of the bisection algorithm, illustrate its process with a flowchart, and then implement it using Python code.  Bisection Method   Define .  If , then accept as the root and stop.  If , then set . Otherwise, set . Return to step 1.       Bisection Flow Chart   Bisection Flow Chart    def bisection(f, a, b, atol, max_iter): root_found = False if f(a)*f(b) < 0: for i in range(max_iter): p = (a+b)\/2 if b-p < atol: root_found = True return p elif f(b)*f(p) < 0: a = p else: b = p if not root_found: raise Exception( \"Bisection did not converge \" f\"within {max_iter} iterations. \" \"Try a greater max_iter.\" ) else: raise Exception( \"Bisection is not applicable for this problem.\" )  Let’s apply the bisection method to find a root of the function within the interval , using error tolerance of . We also set max_iter = 20 , as we expect the method to converge to a root within 20 iterations.  p = bisection( f=lambda x: x*x*x + 2*x*x + 5*x - 2, a=0, b=2, atol=1e-3, max_iter=20, ) print(f\"The root found by bisection method is {p}.\")    The root found by bisection method is 0.3447265625.     "
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
  "body": " Newton's Method   Now that we’ve explored the bisection method, let’s move on to a more powerful and faster-converging technique: Newton’s method .    The Method    Newton’s method (also known as the Newton-Raphson method) is an iterative algorithm used to approximate the roots of a real-valued function . Unlike the bisection method, which only requires function evaluations, Newton’s method also uses the derivative to guide each step.  Starting from an initial guess close to the root, the method generates a sequence using the formula Geometrically, this formula corresponds to finding the -intercept of the tangent line to the graph of at the point .    Newton's Method       Newton's Method     When the initial guess is sufficiently close to the actual root and , Newton’s method typically converges very rapidly, at least quadratically , making it much more efficient than bisection for smooth functions. However, this speed comes with a trade-off: Newton’s method may fail to converge if the initial guess is poor or if is zero or undefined during the iteration.   Apply Newton’s method to find the root of the function with an initial guess . Calculate , , and . Round your answer to four decimal places if necessary.   It is easy to find , hence the iterative formula for Newton’s method is Therefore,   Video Breakdown  Dr. Yang walks through this example in the following video.        Error Analysis  Next, we’ll carry out an error analysis for Newton’s method. To do this, we’ll need to use Taylor series . Let’s begin by recalling the definition. Taylor Series  Let be a function with derivatives of all orders throughout some interval containing as an interior point. Then the Taylor series generated by at is where is between and .    Quadratic Convergence of Newton’s Method  Newton’s method has quadratic convergence.    To show Newton’s method has quadratic convergence, we need to show the following inequality holds true:   Suppose is sufficiently close to the root of the function . Then the Taylor series (choose ) generated by at is Hence, But is the root of the function , which means . Solving this equation for yields   By Newton’s method, . Therefore, the left side of becomes Let . Then which proves the desired bound.      Algorithm and Coding  Next, we’ll summarize the steps of Newton’s method, illustrate its process with a flowchart, and then implement it using Python code.  Newton’s Method   Given a scalar differentiable function , start from an initial guess .  For , set until or a maximum number of iterations is reached.      Flow chart for Newton's method: evaluate the function and its derivative at the current approximation, update with the tangent-line intercept, and test the tolerance.   Newton's Method Flow Chart    def newton(f, fprime, p0, atol, max_iter): root_found = False for i in range(max_iter): p1 = p0 - f(p0)\/fprime(p0) if abs(p1 - p0) < atol: root_found = True return p1 else: p0 = p1 if not root_found: raise Exception( f\"Newton's method did not converge within {max_iter} iterations. \" \"Try different initial guesses or increase max_iter.\" )  Let’s apply Newton’s method to find a root of the function with an initial guess p0=1 , using error tolerance . We also set max_iter = 20 , as we expect the method to converge to a root within 20 iterations. We also need the derivative, which in this case is .  p = newton(f=lambda x: x**3 + 2*x**2 + 5*x - 2, fprime=lambda x: 3*x**2 + 4*x + 5, p0=1, atol=1e-3, max_iter=20) print(f\"The root found by Newton's method is {p}.\")    The root found by Newton's method is 0.34438923796780624.    The last few digits of your answer may differ due to variations in computing precision across different machines):  Tips for Choosing an Initial Guess  A good initial guess for Newton’s method is one that is close to the actual root . To choose one:  Try graphing the function to visually identify where it crosses the -axis.  Look for an interval where the function changes sign (like in the bisection method), and pick a point near that change.  If possible, use physical context or analytical insight to estimate where a root might be.  Avoid points where the derivative is zero or very small, as this can cause the method to diverge or behave unpredictably.  Starting with a reasonable guess increases the chances of fast and reliable convergence.    "
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
  "id": "unit-03-newton-algorithm-and-coding-11",
  "level": "2",
  "url": "unit-03-newtons-method.html#unit-03-newton-algorithm-and-coding-11",
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
  "body": " Secant Method   Building on our understanding of Newton’s method, we now introduce the secant method , a practical alternative that avoids the need for an explicit derivative.    The Method   Newton’s method requires the user to supply both the function and its derivative . However, in many real-world situations, computing the derivative may be difficult, expensive, or even impossible—for example, when dealing with data from experiments, simulations, or complex black-box functions. In such cases, the secant method becomes especially useful.  The secant method approximates the derivative using the slope of the secant line through the two most recent iterates: Substituting this into Newton’s update formula, we get the secant method iteration: This method requires two initial guesses, and , but avoids evaluating the derivative altogether. While it typically converges more slowly than Newton’s method, it is often preferred when derivative information is unavailable or costly to obtain.  Geometrically, this formula corresponds to finding the -intercept of the secant line connecting the points and on the graph of .    Secant Method       Secant Method      Apply the secant method to find the root of the function with initial guesses and . Calculate and . Round your answer to four decimal places if necessary.   By the iterative formula for the secant method, we have   Video Breakdown  Dr. Yang walks through this example in the following video.        Error Analysis  To understand the efficiency of the secant method, let’s analyze its convergence behavior. Specifically, we’ll show that it converges superlinearly, but not quadratically like Newton’s method.  Superlinear Convergence of the Secant Method  The secant method has superlinear convergence.   We will not prove this theorem, but provide the main idea. Using a Taylor expansion of and about , we can derive an expression for the error in terms of and . After some algebra, we find where .      Algorithm and Coding  Next, we’ll summarize the steps of the secant method , illustrate its process with a flowchart, and then implement it using Python code.  Secant Method   Given a scalar function , start with two initial guesses and .  For , compute until or a maximum number of iterations is reached.      Flow chart for the secant method: evaluate the function at two recent approximations, update with the secant-line intercept, and test the tolerance.   Secant Method Flow Chart    def secant(f, p0, p1, atol, max_iter): for i in range(max_iter): p2 = p1 - f(p1) * (p1 - p0) \/ (f(p1) - f(p0)) if abs(p2 - p1) <= atol: return p2 else: p0, p1 = p1, p2 raise Exception( f\"Secant method did not converge within {max_iter} iterations. \" \"Try different initial guesses or increase max_iter.\" )  Let’s apply the secant method to find a root of the function using initial guesses p0 = 0 and p1 = 1 , and an error tolerance of . We’ll set max_iter = 20 , assuming the root will be found within that many steps.  p = secant(f=lambda x: x**3 + 2*x**2 + 5*x - 2, p0=0, p1=1, atol=1e-3, max_iter=20) print(f\"The root found by the secant method is {p}.\")    The root found by the secant method is 0.3443892308090592.    The final digits may vary depending on computing precision:  Tips for Choosing Initial Guesses  A good pair of initial guesses for the secant method are two values close to the root and with opposite signs of . You can use a graph of the function or a sign change in the interval to guide your choice.    "
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
  "body": " Apply the secant method to find the root of the function with initial guesses and . Calculate and . Round your answer to four decimal places if necessary.   By the iterative formula for the secant method, we have   Video Breakdown  Dr. Yang walks through this example in the following video.     "
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
  "id": "unit-03-secant-algorithm-and-coding-11",
  "level": "2",
  "url": "unit-03-secant-method.html#unit-03-secant-algorithm-and-coding-11",
  "type": "Remark",
  "number": "3.2.7",
  "title": "Tips for Choosing Initial Guesses.",
  "body": "Tips for Choosing Initial Guesses  A good pair of initial guesses for the secant method are two values close to the root and with opposite signs of . You can use a graph of the function or a sign change in the interval to guide your choice.  "
},
{
  "id": "unit-04-introduction-fixed-point-iteration",
  "level": "1",
  "url": "unit-04-introduction-fixed-point-iteration.html",
  "type": "Section",
  "number": "4.1",
  "title": "Introduction to Fixed-Point Iteration",
  "body": " Introduction to Fixed-Point Iteration   Many numerical methods for solving equations rely on reformulating the original problem into an equivalent fixed-point problem . That is, instead of solving directly, we rewrite it as: where the solution to this equation is called a fixed point of the function , meaning .  The fixed-point iteration method starts with an initial guess , and generates a sequence: If the sequence converges, then the limit is a solution to , and thus also a root of , assuming and .  This method is simple and forms the basis for many other iterative techniques. However, convergence is not guaranteed for every or initial guess, so analyzing its behavior is crucial.  "
},
{
  "id": "unit-04-introduction-fixed-point-iteration-3",
  "level": "2",
  "url": "unit-04-introduction-fixed-point-iteration.html#unit-04-introduction-fixed-point-iteration-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fixed-point problem fixed point "
},
{
  "id": "unit-04-introduction-fixed-point-iteration-4",
  "level": "2",
  "url": "unit-04-introduction-fixed-point-iteration.html#unit-04-introduction-fixed-point-iteration-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "fixed-point iteration "
},
{
  "id": "unit-04-fixed-point-choose-g",
  "level": "1",
  "url": "unit-04-fixed-point-choose-g.html",
  "type": "Section",
  "number": "4.2",
  "title": "How To Choose <span class=\"process-math\">\\(g(x)\\)<\/span>",
  "body": " How To Choose   The convergence behavior of fixed-point iteration is highly dependent on the choice of the function . It’s important to recognize that, for a given equation , there isn’t a unique way to define . In fact, we can construct many different functions such that solving is equivalent to solving . For example, we might consider any of the following (and more):   Note that if we choose as in the last case, the fixed-point iteration becomes identical to Newton’s method.  Suppose we have chosen a continuous function and are ready to apply fixed-point iteration. Naturally, several important questions arise:  Does a fixed point exist in the interval ?   If so, is the fixed point unique?    Will the sequence of iterates generated by the method actually converge to ?    If it does converge, how fast is the convergence?     "
},
{
  "id": "unit-04-fixed-point-choose-g-4",
  "level": "2",
  "url": "unit-04-fixed-point-choose-g.html#unit-04-fixed-point-choose-g-4",
  "type": "Remark",
  "number": "4.2.1",
  "title": "",
  "body": "Note that if we choose as in the last case, the fixed-point iteration becomes identical to Newton’s method. "
},
{
  "id": "unit-04-fixed-point-theorem",
  "level": "1",
  "url": "unit-04-fixed-point-theorem.html",
  "type": "Section",
  "number": "4.3",
  "title": "Fixed Point Theorem",
  "body": " Fixed Point Theorem   To prove that a unique fixed point exists in the interval , we introduce the Fixed Point Theorem. Before stating it, let’s first recall the Mean Value Theorem from Calculus I, as it will play a key role in the proof.   Mean Value Theorem   Suppose that is a continuous function on a closed interval and differentiable on its interior . Then there is at least one number in such that .    Now let’s dive into the Fixed Point Theorem.   Fixed Point Theorem   If is a continuous function on and for all , then has at least one fixed point in . If, in addition, the derivative exists and for all where , then the fixed point is unique.    First, we will proof the existence of fixed point. By hypothesis, we have and . If or , then a fixed point has been found, so now assume and . Then for the continuous function we have and . Hence, by the Intermediate Value Theorem, there is a root such that , that is, Therefore, is a fixed point of .  Next, we will show the uniqueness of the fixed point if the derivative exists and for all where . Suppose there is another fix point, say , then . Thus, where is a number between and . Obviously, this inequality can hold with only if . Therefore, the fixed point is unique.    "
},
{
  "id": "unit-04-fixed-point-theorem-4",
  "level": "2",
  "url": "unit-04-fixed-point-theorem.html#unit-04-fixed-point-theorem-4",
  "type": "Theorem",
  "number": "4.3.1",
  "title": "Mean Value Theorem.",
  "body": " Mean Value Theorem   Suppose that is a continuous function on a closed interval and differentiable on its interior . Then there is at least one number in such that .   "
},
{
  "id": "unit-04-fixed-point-theorem-6",
  "level": "2",
  "url": "unit-04-fixed-point-theorem.html#unit-04-fixed-point-theorem-6",
  "type": "Theorem",
  "number": "4.3.2",
  "title": "Fixed Point Theorem.",
  "body": " Fixed Point Theorem   If is a continuous function on and for all , then has at least one fixed point in . If, in addition, the derivative exists and for all where , then the fixed point is unique.    First, we will proof the existence of fixed point. By hypothesis, we have and . If or , then a fixed point has been found, so now assume and . Then for the continuous function we have and . Hence, by the Intermediate Value Theorem, there is a root such that , that is, Therefore, is a fixed point of .  Next, we will show the uniqueness of the fixed point if the derivative exists and for all where . Suppose there is another fix point, say , then . Thus, where is a number between and . Obviously, this inequality can hold with only if . Therefore, the fixed point is unique.   "
},
{
  "id": "unit-04-convergence-fixed-point-iteration",
  "level": "1",
  "url": "unit-04-convergence-fixed-point-iteration.html",
  "type": "Section",
  "number": "4.4",
  "title": "Convergence of the Fixed Point Iteration",
  "body": " Convergence of the Fixed Point Iteration   We now investigate whether the sequence defined by the iteration converges to the fixed point , along with its corresponding rate of convergence.  Under the same assumptions of the fixed point theorem, we have This is a contraction by the factor . Therefore, Since , we have as , thus, as .  Note that implies the convergence is linear with rate . Further more, if , then the convergence can be faster than linear—possibly quadratic —depending on higher-order derivatives. (Think about the Newton’s method.)   Apply fixed point iteration to find the root of the equation in the interval with an initial guess . Calculate , , and . Round your answer to four decimal places if necessary.   We need to rewrite equation as a fixed-point problem. One possible rearrangement is: Then we need to verify has a unique fixed point in the interval . By the Fixed Point Theorem, we need to answer the following questions:  Is is continuous on ?   Is for ?    Is for where ?     The first question is easy to answer. The function is a polynomial, so it is continuous everywhere.  To answer the second question, we need to find the extrema of in the interval . The derivative of is Let it be zero, we have or . Thus is monotonic in the interval . Since and , we have , therefore, for   To answer the third question, we need to find the extrema of in the interval . The derivative of is Let it be zero, we have . Thus is monotonic in the interval . Since and , we have , therefore, for .  Therefore, by the Fixed Point Theorem, has a unique fixed point in the interval . And the sequence generated by the iteration formula converges to the fixed point . By the formula, it is easy to find , and with the initial guess ,   Video Breakdown  Dr. Yang walks through this example in the following video.      "
},
{
  "id": "unit-04-convergence-fixed-point-iteration-4",
  "level": "2",
  "url": "unit-04-convergence-fixed-point-iteration.html#unit-04-convergence-fixed-point-iteration-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "contraction "
},
{
  "id": "unit-04-convergence-fixed-point-iteration-5",
  "level": "2",
  "url": "unit-04-convergence-fixed-point-iteration.html#unit-04-convergence-fixed-point-iteration-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "linear "
},
{
  "id": "unit-04-convergence-fixed-point-iteration-6",
  "level": "2",
  "url": "unit-04-convergence-fixed-point-iteration.html#unit-04-convergence-fixed-point-iteration-6",
  "type": "Example",
  "number": "4.4.1",
  "title": "",
  "body": " Apply fixed point iteration to find the root of the equation in the interval with an initial guess . Calculate , , and . Round your answer to four decimal places if necessary.   We need to rewrite equation as a fixed-point problem. One possible rearrangement is: Then we need to verify has a unique fixed point in the interval . By the Fixed Point Theorem, we need to answer the following questions:  Is is continuous on ?   Is for ?    Is for where ?     The first question is easy to answer. The function is a polynomial, so it is continuous everywhere.  To answer the second question, we need to find the extrema of in the interval . The derivative of is Let it be zero, we have or . Thus is monotonic in the interval . Since and , we have , therefore, for   To answer the third question, we need to find the extrema of in the interval . The derivative of is Let it be zero, we have . Thus is monotonic in the interval . Since and , we have , therefore, for .  Therefore, by the Fixed Point Theorem, has a unique fixed point in the interval . And the sequence generated by the iteration formula converges to the fixed point . By the formula, it is easy to find , and with the initial guess ,   Video Breakdown  Dr. Yang walks through this example in the following video.     "
},
{
  "id": "unit-04-fixed-point-algo-coding",
  "level": "1",
  "url": "unit-04-fixed-point-algo-coding.html",
  "type": "Section",
  "number": "4.5",
  "title": "Algorithm and Coding",
  "body": " Algorithm and Coding  Let’s now summarize the steps of fixed-point iteration and implement it in Python.  Fixed-Point Iteration   Given a function such that has a solution,   Choose an initial guess .    For , compute: until or a maximum number of iterations is reached.        def fixed_point(g, p0, atol, max_iter): for i in range(max_iter): p1 = g(p0) if abs(p1 - p0) < atol: return p1 p0 = p1 raise Exception(f\"Fixed-point iteration did not converge within {max_iter} iterations.\")  Let’s solve the equation by rewriting it as a fixed-point problem using the same rearrangement as Example 1:   g = lambda x: (2 - x**3 - 2*x**2) \/ 5 p = fixed_point(g, p0=0.3, atol=1e-3, max_iter=20) print(f\"The root found by fixed-point iteration is {p}.\")    The root found by fixed-point iteration is 0.34459818033018197.    Reminder  When choosing a function for fixed-point iteration, make sure:    is continuous on an interval ,     , and     for all in that interval.     You can use a graph or numerical derivative to check this.   "
},
{
  "id": "unit-04-fixed-point-algo-coding-3",
  "level": "2",
  "url": "unit-04-fixed-point-algo-coding.html#unit-04-fixed-point-algo-coding-3",
  "type": "Algorithm",
  "number": "4.5.1",
  "title": "Fixed-Point Iteration.",
  "body": "Fixed-Point Iteration   Given a function such that has a solution,   Choose an initial guess .    For , compute: until or a maximum number of iterations is reached.      "
},
{
  "id": "unit-04-fixed-point-algo-coding-9",
  "level": "2",
  "url": "unit-04-fixed-point-algo-coding.html#unit-04-fixed-point-algo-coding-9",
  "type": "Remark",
  "number": "4.5.2",
  "title": "Reminder.",
  "body": "Reminder  When choosing a function for fixed-point iteration, make sure:    is continuous on an interval ,     , and     for all in that interval.     You can use a graph or numerical derivative to check this.  "
},
{
  "id": "unit-05-review-linear-algebra",
  "level": "1",
  "url": "unit-05-review-linear-algebra.html",
  "type": "Section",
  "number": "5.1",
  "title": "Review of Linear Algebra",
  "body": "Review of Linear Algebra   Matrix Product   If is an matrix and is a matrix, then the product  is the matrix whose entries are determined as follows: To find the entry in row and column of , single out row from the matrix and column from the matrix . Multiply the corresponding entries from the row and column together, and then add up the resulting products.  The matrix product      The linear system can be written as If we designate these matrices by , , and respectively, then the system becomes The matrix in this equation is called the coefficient matrix of the system. The augmented matrix for the system is obtained by adjoining to as the last column:   "
},
{
  "id": "unit-05-review-linear-algebra-3",
  "level": "2",
  "url": "unit-05-review-linear-algebra.html#unit-05-review-linear-algebra-3",
  "type": "Definition",
  "number": "5.1.1",
  "title": "Matrix Product.",
  "body": "Matrix Product   If is an matrix and is a matrix, then the product  is the matrix whose entries are determined as follows: To find the entry in row and column of , single out row from the matrix and column from the matrix . Multiply the corresponding entries from the row and column together, and then add up the resulting products.  The matrix product     "
},
{
  "id": "unit-05-review-linear-algebra-4",
  "level": "2",
  "url": "unit-05-review-linear-algebra.html#unit-05-review-linear-algebra-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "coefficient matrix augmented matrix "
},
{
  "id": "unit-05-gaussian-elimination",
  "level": "1",
  "url": "unit-05-gaussian-elimination.html",
  "type": "Section",
  "number": "5.2",
  "title": "Gaussian Elimination with Backward Substitution",
  "body": "Gaussian Elimination with Backward Substitution   The fundamental direct method for solving systems of linear equations is Gaussian elimination . In this section, we will cover two key steps of the process:   First, how to solve a linear system when the coefficient matrix is already in upper triangular form . This step is known as backward substitution .    Second, how to transform a general linear system into an upper triangular form so that backward substitution can be applied. This transformation process is known as Gaussian elimination .      Backward Substitution  Sometimes, the matrix has a special structure that simplifies the solution process. For example, if is an upper triangular matrix , then solving the system becomes straightforward.   Solve the linear system     Note that the coefficient matrix is upper triangular, we can solve the system using backward substitution . Starting from the last equation, Then substituting the value of in the second equation, Similarly, solving the first equation for by substituting the values of and , we have Therefore, the solution is .     Gaussian Elimination  Now, suppose the matrix does not have any special zero structure. Gaussian elimination is a general method that uses elementary row operations to transform the system into an equivalent upper triangular form. Once in this form, the system can be solved using backward substitution.   Recall there are three types of elementary row operations:  Exchange two rows.  Multiply a row by a nonzero constant.  Add a multiple of a row to another row.    Gaussian elimination are as follows: The diagonal elements , , , , are called pivot elements .    Solve the linear system by Gaussian elimination and backward substitution.      Apply Gaussian elimination to reduce the augmented matrix of the system into an equivalent upper triangular form, After we get the equivalent upper triangular form, we can use backward substitution (see last example) to find the solution is , , and .      Pivoting Strategies   To enhance the stability of Gaussian elimination, it’s important to choose pivot elements that are as large as possible. This minimizes the size of the multipliers, reducing the risk of significant round-off errors caused by finite precision. When a small pivot is multiplied by a large number, it can distort other rows and degrade accuracy. A common strategy is to compare the absolute values of the pivot and the entries below it, and then swap the current row with the one containing the largest value in magnitude, if different. This approach is known as partial pivoting . It works as follows: as the elimination proceeds for , at each stage , choose as the smallest integer for which and interchange rows and . Then proceed with the elimination process.    Apply Gaussian elimination with partial pivoting to solve the following linear system.     Apply Gaussian elimination with partial pivoting to reduce the augmented matrix of the system into an equivalent upper triangular form,   After we get the equivalent upper triangular form, we can use backward substitution to find the solution. Starting from the last equation, Then substituting the value of in the last second equation, Similarly, solve the second equation for and the first equation for ,   Therefore, the solution is , , , and .  Video Breakdown  Dr. Yang walks through this example in the following video.        Algorithm and Coding  Let’s implement Gaussian elimination with backward substitution without pivoting in Python to solve a system of linear equations step by step. You can add partial pivoting by yourself.   import numpy as np def gaussian_elimination(A, b): \"\"\"Performs Gaussian elimination without pivoting\"\"\" A = np.array(A, dtype=np.float64) b = np.array(b, dtype=np.float64) n = b.size for k in range(n-1): for i in range(k+1, n): m = A[i, k] \/ A[k, k] A[i, k:] = A[i, k:] - m * A[k, k:] b[i] = b[i] - m * b[k] return A, b def backward_substitution(U, y): \"\"\"Solves Ux = y for upper triangular matrix U\"\"\" U = np.array(U, dtype=np.float64) y = np.array(y, dtype=np.float64) n = y.size x = np.zeros_like(y) for i in range(n-1, -1, -1): x[i] = (y[i] - np.dot(U[i, i+1:], x[i+1:])) \/ U[i, i] return x  Now, let’s use this implementation to solve the linear system given in Example 2: A=[[2,4,10], [-1,-6, -21], [3,3,7]] b=[-22, 59, -17] U, y = gaussian_elimination(A, b) x = backward_substitution(U, y) print(\"Solution x =\", x)    Solution x = [-2. 8. -5.]     This confirms our implementation works correctly. Alternatively, you can solve the same system more easily using NumPy’s built-in solver: x = np.linalg.solve(A, b) print(\"Solution x =\", x)    Solution x = [-2. 8. -5.]   This built-in method is optimized and should be preferred for general-purpose use unless you’re explicitly learning or implementing algorithms manually.   "
},
{
  "id": "unit-05-gaussian-elimination-2-1",
  "level": "2",
  "url": "unit-05-gaussian-elimination.html#unit-05-gaussian-elimination-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian elimination upper triangular form backward substitution Gaussian elimination "
},
{
  "id": "unit-05-gaussian-elimination-3-2",
  "level": "2",
  "url": "unit-05-gaussian-elimination.html#unit-05-gaussian-elimination-3-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "upper triangular matrix "
},
{
  "id": "unit-05-gaussian-elimination-3-3",
  "level": "2",
  "url": "unit-05-gaussian-elimination.html#unit-05-gaussian-elimination-3-3",
  "type": "Example",
  "number": "5.2.1",
  "title": "",
  "body": " Solve the linear system     Note that the coefficient matrix is upper triangular, we can solve the system using backward substitution . Starting from the last equation, Then substituting the value of in the second equation, Similarly, solving the first equation for by substituting the values of and , we have Therefore, the solution is .   "
},
{
  "id": "unit-05-gaussian-elimination-4-2",
  "level": "2",
  "url": "unit-05-gaussian-elimination.html#unit-05-gaussian-elimination-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian elimination "
},
{
  "id": "unit-05-gaussian-elimination-4-5",
  "level": "2",
  "url": "unit-05-gaussian-elimination.html#unit-05-gaussian-elimination-4-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "pivot elements "
},
{
  "id": "unit-05-gaussian-elimination-4-6",
  "level": "2",
  "url": "unit-05-gaussian-elimination.html#unit-05-gaussian-elimination-4-6",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Solve the linear system by Gaussian elimination and backward substitution.      Apply Gaussian elimination to reduce the augmented matrix of the system into an equivalent upper triangular form, After we get the equivalent upper triangular form, we can use backward substitution (see last example) to find the solution is , , and .   "
},
{
  "id": "unit-05-gaussian-elimination-5-3",
  "level": "2",
  "url": "unit-05-gaussian-elimination.html#unit-05-gaussian-elimination-5-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "partial pivoting "
},
{
  "id": "unit-05-gaussian-elimination-5-4",
  "level": "2",
  "url": "unit-05-gaussian-elimination.html#unit-05-gaussian-elimination-5-4",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Apply Gaussian elimination with partial pivoting to solve the following linear system.     Apply Gaussian elimination with partial pivoting to reduce the augmented matrix of the system into an equivalent upper triangular form,   After we get the equivalent upper triangular form, we can use backward substitution to find the solution. Starting from the last equation, Then substituting the value of in the last second equation, Similarly, solve the second equation for and the first equation for ,   Therefore, the solution is , , , and .  Video Breakdown  Dr. Yang walks through this example in the following video.     "
},
{
  "id": "unit-05-gaussian-elimination-6-2",
  "level": "2",
  "url": "unit-05-gaussian-elimination.html#unit-05-gaussian-elimination-6-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gaussian elimination with backward substitution "
},
{
  "id": "unit-05-lu-decomposition",
  "level": "1",
  "url": "unit-05-lu-decomposition.html",
  "type": "Section",
  "number": "5.3",
  "title": "LU Decomposition",
  "body": "LU Decomposition  In this section, we demonstrate that the steps involved in Gaussian elimination not only solve a linear system but also reveal a deeper structure of the matrix . Specifically, the elimination process can be viewed as decomposing into the product of two matrices: a lower triangular matrix and an upper triangular matrix , such that This factorization, known as LU decomposition , is a powerful tool in numerical linear algebra. It allows for efficient solutions of linear systems, especially when multiple right-hand sides are involved, and it forms the foundation for many more advanced matrix algorithms. In the LU decomposition, captures the row operations used to eliminate entries below the pivots, while records the multipliers used in those operations. Rigorously, given a square matrix , LU decomposition factors it as: where is a lower triangular matrix in the form of and is an upper triangular matrix in the form of Note that all diagonal entries of are 1 and entries below the diagonal ( for ) are the multipliers used during Gaussian elimination, and the matrix comes from the result of Gaussian elimination.    Find LU decomposition of      Apply Gaussian elimination to reduce the matrix into upper triangular form, The boxed multipliers form the lower triangular part of , while the resulting upper triangular matrix defines the matrix , namely,     Suppose is the coefficient matrix of the linear system By factoring , the system becomes This can be viewed as two successive systems: The first system is solved using forward substitution, since is lower triangular. The second is solved using backward substitution, as is upper triangular.    Use LU decomposition to solve the linear system     By last example, the coefficient matrix can be decomposed into as follows, Then, becomes Solving this system using forward substitution, we obtain , and thus the system becomes Then solving this system for using backward substitution, we have   Video Breakdown  Dr. Yang walks through this example in the following video.      "
},
{
  "id": "unit-05-lu-decomposition-2",
  "level": "2",
  "url": "unit-05-lu-decomposition.html#unit-05-lu-decomposition-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "LU decomposition lower triangular matrix upper triangular matrix "
},
{
  "id": "unit-05-lu-decomposition-3",
  "level": "2",
  "url": "unit-05-lu-decomposition.html#unit-05-lu-decomposition-3",
  "type": "Example",
  "number": "5.3.1",
  "title": "",
  "body": "  Find LU decomposition of      Apply Gaussian elimination to reduce the matrix into upper triangular form, The boxed multipliers form the lower triangular part of , while the resulting upper triangular matrix defines the matrix , namely,    "
},
{
  "id": "unit-05-lu-decomposition-5",
  "level": "2",
  "url": "unit-05-lu-decomposition.html#unit-05-lu-decomposition-5",
  "type": "Example",
  "number": "5.3.2",
  "title": "",
  "body": "  Use LU decomposition to solve the linear system     By last example, the coefficient matrix can be decomposed into as follows, Then, becomes Solving this system using forward substitution, we obtain , and thus the system becomes Then solving this system for using backward substitution, we have   Video Breakdown  Dr. Yang walks through this example in the following video.     "
},
{
  "id": "unit-06-jacobi-method",
  "level": "1",
  "url": "unit-06-jacobi-method.html",
  "type": "Section",
  "number": "6.1",
  "title": "Jacobi Method",
  "body": "Jacobi Method   Rewrite the linear system as where is the strictly lower triangular part of , is the diagonal of , and is the strictly upper triangular part of .  Further rewriting as and it forms a fixed point iteration for vectors. Similarly to fixed point iteration, starting with an initial guess , use the following iteration to generate a sequence: where the superscripts denote iteration steps. This is called Jacobi method .  If we write out all vectors and matrices, it becomes Therefore, the equivalent element-wise formula of Jacobi method is     Given , compute the next two iterates and when solving the following linear system by Jacobi iteration. Round the results to four digits.     The iterative formulas of Jacobi method are Let , we obtain the first iterate Then let , we obtain the second iterate   Video Breakdown  Dr. Yang walks through this example in the following video.      "
},
{
  "id": "unit-06-jacobi-method-4",
  "level": "2",
  "url": "unit-06-jacobi-method.html#unit-06-jacobi-method-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Jacobi method "
},
{
  "id": "unit-06-jacobi-method-5",
  "level": "2",
  "url": "unit-06-jacobi-method.html#unit-06-jacobi-method-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "element-wise formula of Jacobi method "
},
{
  "id": "unit-06-jacobi-method-6",
  "level": "2",
  "url": "unit-06-jacobi-method.html#unit-06-jacobi-method-6",
  "type": "Example",
  "number": "6.1.1",
  "title": "",
  "body": "  Given , compute the next two iterates and when solving the following linear system by Jacobi iteration. Round the results to four digits.     The iterative formulas of Jacobi method are Let , we obtain the first iterate Then let , we obtain the second iterate   Video Breakdown  Dr. Yang walks through this example in the following video.     "
},
{
  "id": "unit-06-gauss-seidel-method",
  "level": "1",
  "url": "unit-06-gauss-seidel-method.html",
  "type": "Section",
  "number": "6.2",
  "title": "Gauss-Seidel Method",
  "body": "Gauss-Seidel Method   While solving the previous example, you might wonder: Why not use the newly updated values immediately within the same iteration, rather than waiting for the next one? For instance, when computing , we already have the updated value —so why not use it right away? Congratulations! This line of thinking leads to a new algorithm called the Gauss-Seidel method .  To derive it by matrix notation, let's rewrite in a different way, Using this equation, we have the following iterative formula: where the superscripts denote iteration steps.  Similarly to Jacobi method, if we write out all vectors and matrices, it becomes Therefore, the equivalent element-wise formula of Gauss-Seidel method is     Given , compute the next two iterates and when solving the following linear system by Gauss-Seidel iteration. Round the results to four digits.     The iterative formulas of Gauss-Seidel method are Let , we obtain the first iterate Then let , we obtain the second iterate   Video Breakdown  Dr. Yang walks through this example in the following video.      "
},
{
  "id": "unit-06-gauss-seidel-method-3",
  "level": "2",
  "url": "unit-06-gauss-seidel-method.html#unit-06-gauss-seidel-method-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "Gauss-Seidel method "
},
{
  "id": "unit-06-gauss-seidel-method-5",
  "level": "2",
  "url": "unit-06-gauss-seidel-method.html#unit-06-gauss-seidel-method-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "element-wise formula of Gauss-Seidel method "
},
{
  "id": "unit-06-gauss-seidel-method-6",
  "level": "2",
  "url": "unit-06-gauss-seidel-method.html#unit-06-gauss-seidel-method-6",
  "type": "Example",
  "number": "6.2.1",
  "title": "",
  "body": "  Given , compute the next two iterates and when solving the following linear system by Gauss-Seidel iteration. Round the results to four digits.     The iterative formulas of Gauss-Seidel method are Let , we obtain the first iterate Then let , we obtain the second iterate   Video Breakdown  Dr. Yang walks through this example in the following video.     "
},
{
  "id": "unit-06-iteration-methods-convergence",
  "level": "1",
  "url": "unit-06-iteration-methods-convergence.html",
  "type": "Section",
  "number": "6.3",
  "title": "Convergence of Iterative Methods",
  "body": "Convergence of Iterative Methods   The iterative methods do not always converge. Let’s consider the following linear system and the Jacobi iterative formulas are Starting from the initial guess , the first 10 iterates are After 6 steps, the iterates get close to the exact solution and , and stays there, indicating the iteration converges.  Now let's swap the equations in the system and obtain an equivalent linear system, and the Jacobi iterative formulas are Starting from the initial guess , the first 10 iterates are It clearly shows that the iteration diverges and Jacobi method does not work for it.   A square matrix is said to be strictly diagonally dominant if for every row of the matrix, the magnitude of the diagonal entry in a row is larger than the sum of the magnitudes of all the other (non-diagonal) entries in that row. More precisely, an matrix is said to be strictly diagonally dominant if, for each , where .     The Jacobi method and Gauss–Seidel method converge if the coefficient matrix of a linear system is strictly diagonally dominant.      Do you expect the Jacobi iteration in Example 1 and Gauss-Seidel iteration in Example 2 to converge? Why?    The coefficient matrix of the linear system in Example 1 and 2 is The matrix is strictly diagonally dominant since Therefore, by the theorem, both Jacobi iteration and Gauss-Seidel iteration for this linear system converge.  Video Breakdown  Dr. Yang walks through this example in the following video.      "
},
{
  "id": "unit-06-iteration-methods-convergence-5",
  "level": "2",
  "url": "unit-06-iteration-methods-convergence.html#unit-06-iteration-methods-convergence-5",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": " A square matrix is said to be strictly diagonally dominant if for every row of the matrix, the magnitude of the diagonal entry in a row is larger than the sum of the magnitudes of all the other (non-diagonal) entries in that row. More precisely, an matrix is said to be strictly diagonally dominant if, for each , where .  "
},
{
  "id": "unit-06-iteration-methods-convergence-6",
  "level": "2",
  "url": "unit-06-iteration-methods-convergence.html#unit-06-iteration-methods-convergence-6",
  "type": "Theorem",
  "number": "6.3.2",
  "title": "",
  "body": "  The Jacobi method and Gauss–Seidel method converge if the coefficient matrix of a linear system is strictly diagonally dominant.   "
},
{
  "id": "unit-06-iteration-methods-convergence-7",
  "level": "2",
  "url": "unit-06-iteration-methods-convergence.html#unit-06-iteration-methods-convergence-7",
  "type": "Example",
  "number": "6.3.3",
  "title": "",
  "body": "  Do you expect the Jacobi iteration in Example 1 and Gauss-Seidel iteration in Example 2 to converge? Why?    The coefficient matrix of the linear system in Example 1 and 2 is The matrix is strictly diagonally dominant since Therefore, by the theorem, both Jacobi iteration and Gauss-Seidel iteration for this linear system converge.  Video Breakdown  Dr. Yang walks through this example in the following video.     "
},
{
  "id": "unit-06-iterative-methods-coding",
  "level": "1",
  "url": "unit-06-iterative-methods-coding.html",
  "type": "Section",
  "number": "6.4",
  "title": "Algorithms and Coding for Iterative Methods",
  "body": "Algorithms and Coding for Iterative Methods   We will stop the iteration when the latest iterates and satisfy where represents infinity norm of a vector, which is defined as follows, We can use the built-in function linalg.norm in Python’s Numpy module to calculate the infinity norm of a vector.  Now we code Jacobi method and Gauss-Seidel method: import numpy as np def jacobi(A, b, x0=None, tol=1e-5, max_iter=100, verbose=False): \"\"\" Solves the linear system Ax = b using the Jacobi iterative method. Parameters: A : array Coefficient matrix (assumed to be square). b : array Right-hand side vector. x0 : array (optional) Initial guess for the solution. tol : float (optional) Convergence tolerance. max_iter : int (optional) Maximum number of iterations. verbose : bool (optional) If True, print the solution at each iteration. Returns: x : ndarray Approximate solution vector. \"\"\" A = np.array(A, dtype=np.float64) b = np.array(b, dtype=np.float64) n = b.size x = np.zeros_like(b) if x0 is None else np.array(x0, dtype=np.float64).copy() for k in range(max_iter): x_new = np.zeros_like(x) for i in range(n): s = sum(A[i,j] * x[j] for j in range(n) if j != i) x_new[i] = (b[i] - s) \/ A[i,i] if verbose: print(f\"Iteration {k+1}: x = {np.round(x_new, 6)}\") if np.linalg.norm(x_new - x, ord=np.inf) < tol: return x_new x = x_new raise Exception(f\"Jacobi method did not converge after {max_iter} iterations.\") def gauss_seidel(A, b, x0=None, tol=1e-5, max_iter=100, verbose=False): \"\"\" Solves the linear system Ax = b using the Gauss-Seidel iterative method. Parameters: A : array Coefficient matrix (assumed to be square). b : array Right-hand side vector. x0 : array (optional) Initial guess for the solution. tol : float (optional) Convergence tolerance. max_iter : int (optional) Maximum number of iterations. verbose : bool (optional) If True, print the solution at each iteration. Returns: x : ndarray Approximate solution vector. \"\"\" A = np.array(A, dtype=np.float64) b = np.array(b, dtype=np.float64) n = b.size x = np.zeros_like(b) if x0 is None else np.array(x0, dtype=np.float64).copy() for k in range(max_iter): x_new = np.zeros_like(x) for i in range(n): s1 = sum(A[i,j] * x_new[j] for j in range(n) if j < i) s2 = sum(A[i,j] * x[j] for j in range(n) if j > i) x_new[i] = (b[i] - s1 - s2) \/ A[i,i] if verbose: print(f\"Iteration {k+1}: x = {np.round(x_new, 6)}\") if np.linalg.norm(x_new - x, ord=np.inf) < tol: return x_new x = x_new raise Exception(f\"Gauss-Seidel method did not converge after {max_iter} iterations.\") Let's use the function jacobi() to solve the example in the last section about the convergence: A = [[4, -3], [2,5]] b = [-1, 19] x = jacobi(A, b, verbose=True) print(f\"The solution is {np.round(x, 4)}\")    Iteration 1: x = [-0.25 3.8 ] Iteration 2: x = [2.6 3.9] Iteration 3: x = [2.675 2.76 ] Iteration 4: x = [1.82 2.73] Iteration 5: x = [1.7975 3.072 ] Iteration 6: x = [2.054 3.081] Iteration 7: x = [2.06075 2.9784 ] Iteration 8: x = [1.9838 2.9757] Iteration 9: x = [1.981775 3.00648 ] Iteration 10: x = [2.00486 3.00729] Iteration 11: x = [2.005468 2.998056] Iteration 12: x = [1.998542 2.997813] Iteration 13: x = [1.99836 3.000583] Iteration 14: x = [2.000437 3.000656] Iteration 15: x = [2.000492 2.999825] Iteration 16: x = [1.999869 2.999803] Iteration 17: x = [1.999852 3.000052] Iteration 18: x = [2.000039 3.000059] Iteration 19: x = [2.000044 2.999984] Iteration 20: x = [1.999988 2.999982] Iteration 21: x = [1.999987 3.000005] Iteration 22: x = [2.000004 3.000005] Iteration 23: x = [2.000004 2.999999] The solution is [2. 3.]     After swapping equations in the system, we have A = [[2,5], [4, -3]] b = [19, -1] x = jacobi(A, b, verbose=True) print(f\"The solution is {np.round(x, 4)}\")    Iteration 1: x = [9.5 0.333333] Iteration 2: x = [ 8.666667 13. ] Iteration 3: x = [-23. 11.888889] Iteration 4: x = [-20.222222 -30.333333] Iteration 5: x = [ 85.333333 -26.62963 ] Iteration 6: x = [ 76.074074 114.111111] Iteration 7: x = [-275.777778 101.765432] Iteration 8: x = [-244.91358 -367.37037] Iteration 9: x = [ 927.925926 -326.218107] Iteration 10: x = [ 825.045267 1237.567901] Iteration 11: x = [-3084.419753 1100.39369 ] Iteration 12: x = [-2741.484225 -4112.226337] Iteration 13: x = [10290.065844 -3654.978967] Iteration 14: x = [ 9146.947417 13720.421125] Iteration 15: x = [-34291.552812 12196.263222] Iteration 16: x = [-30481.158055 -45721.737083] Iteration 17: x = [114313.842707 -40641.21074 ] Iteration 18: x = [101612.526851 152418.790276] Iteration 19: x = [-381037.47569 135483.702467] Iteration 20: x = [-338699.756169 -508049.634253] Iteration 21: x = [1270133.585632 -451599.341558] Iteration 22: x = [1129007.853895 1693511.780843] Iteration 23: x = [-4233769.952108 1505344.138527] Iteration 24: x = [-3763350.846318 -5645026.269477] Iteration 25: x = [14112575.173692 -5017800.79509 ] Iteration 26: x = [12544511.487726 18816767.231589] Iteration 27: x = [-47041908.578973 16726015.650302] Iteration 28: x = [-41815029.625754 -62722544.438631] Iteration 29: x = [ 1.56806371e+08 -5.57533725e+07] Iteration 30: x = [1.39383441e+08 2.09075161e+08] Iteration 31: x = [-5.22687893e+08 1.85844588e+08] Iteration 32: x = [-4.64611461e+08 -6.96917191e+08] Iteration 33: x = [ 1.74229299e+09 -6.19481947e+08] Iteration 34: x = [1.54870488e+09 2.32305732e+09] Iteration 35: x = [-5.80764328e+09 2.06493984e+09] Iteration 36: x = [-5.16234958e+09 -7.74352437e+09] Iteration 37: x = [ 1.93588109e+10 -6.88313277e+09] Iteration 38: x = [1.72078319e+10 2.58117479e+10] Iteration 39: x = [-6.45293698e+10 2.29437759e+10] Iteration 40: x = [-5.73594398e+10 -8.60391597e+10] Iteration 41: x = [ 2.15097899e+11 -7.64792531e+10] Iteration 42: x = [1.91198133e+11 2.86797199e+11] Iteration 43: x = [-7.16992998e+11 2.54930844e+11] Iteration 44: x = [-6.37327109e+11 -9.55990664e+11] Iteration 45: x = [ 2.38997666e+12 -8.49769479e+11] Iteration 46: x = [2.12442370e+12 3.18663555e+12] Iteration 47: x = [-7.96658886e+12 2.83256493e+12] Iteration 48: x = [-7.08141232e+12 -1.06221185e+13] Iteration 49: x = [ 2.65552962e+13 -9.44188310e+12] Iteration 50: x = [2.36047077e+13 3.54070616e+13] Iteration 51: x = [-8.85176540e+13 3.14729437e+13] Iteration 52: x = [-7.86823591e+13 -1.18023539e+14] Iteration 53: x = [ 2.95058847e+14 -1.04909812e+14] Iteration 54: x = [2.62274530e+14 3.93411796e+14] Iteration 55: x = [-9.83529489e+14 3.49699374e+14] Iteration 56: x = [-8.74248435e+14 -1.31137265e+15] Iteration 57: x = [ 3.27843163e+15 -1.16566458e+15] Iteration 58: x = [2.91416145e+15 4.37124217e+15] Iteration 59: x = [-1.09281054e+16 3.88554860e+15] Iteration 60: x = [-9.71387150e+15 -1.45708072e+16] Iteration 61: x = [ 3.64270181e+16 -1.29518287e+16] Iteration 62: x = [3.23795717e+16 4.85693575e+16] Iteration 63: x = [-1.21423394e+17 4.31727622e+16] Iteration 64: x = [-1.07931906e+17 -1.61897858e+17] Iteration 65: x = [ 4.04744646e+17 -1.43909207e+17] Iteration 66: x = [3.59773018e+17 5.39659528e+17] Iteration 67: x = [-1.34914882e+18 4.79697358e+17] Iteration 68: x = [-1.19924339e+18 -1.79886509e+18] Iteration 69: x = [ 4.49716273e+18 -1.59899119e+18] Iteration 70: x = [3.99747798e+18 5.99621697e+18] Iteration 71: x = [-1.49905424e+19 5.32997064e+18] Iteration 72: x = [-1.33249266e+19 -1.99873899e+19] Iteration 73: x = [ 4.99684748e+19 -1.77665688e+19] Iteration 74: x = [4.44164220e+19 6.66246331e+19] Iteration 75: x = [-1.66561583e+20 5.92218960e+19] Iteration 76: x = [-1.4805474e+20 -2.2208211e+20] Iteration 77: x = [ 5.55205275e+20 -1.97406320e+20] Iteration 78: x = [4.93515800e+20 7.40273701e+20] Iteration 79: x = [-1.85068425e+21 6.58021067e+20] Iteration 80: x = [-1.64505267e+21 -2.46757900e+21] Iteration 81: x = [ 6.16894750e+21 -2.19340356e+21] Iteration 82: x = [5.48350889e+21 8.22526334e+21] Iteration 83: x = [-2.05631583e+22 7.31134519e+21] Iteration 84: x = [-1.82783630e+22 -2.74175445e+22] Iteration 85: x = [ 6.85438612e+22 -2.43711506e+22] Iteration 86: x = [6.09278766e+22 9.13918149e+22] Iteration 87: x = [-2.28479537e+23 8.12371688e+22] Iteration 88: x = [-2.03092922e+23 -3.04639383e+23] Iteration 89: x = [ 7.61598457e+23 -2.70790563e+23] Iteration 90: x = [6.76976407e+23 1.01546461e+24] Iteration 91: x = [-2.53866152e+24 9.02635209e+23] Iteration 92: x = [-2.25658802e+24 -3.38488203e+24] Iteration 93: x = [ 8.46220508e+24 -3.00878403e+24] Iteration 94: x = [7.52196007e+24 1.12829401e+25] Iteration 95: x = [-2.82073503e+25 1.00292801e+25] Iteration 96: x = [-2.50732002e+25 -3.76098004e+25] Iteration 97: x = [ 9.40245009e+25 -3.34309337e+25] Iteration 98: x = [8.35773341e+25 1.25366001e+26] Iteration 99: x = [-3.13415003e+26 1.11436446e+26] Iteration 100: x = [-2.78591114e+26 -4.17886671e+26] === PYTHON EXCEPTION === Traceback (most recent call last): File \"C:\\Users\\nsmoo\\AppData\\Local\\uv\\cache\\environments-v2\\math-4362-course-notes-cp3.13.11-ace1a3bea5e4df9d\\Lib\\site-packages\\ptx_builder\\code_runner.py\", line 71, in execute_python exec(code_string, env_globals, env_globals) ~~~~^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ File \"<string>\", line 3, in <module> File \"<string>\", line 44, in jacobi Exception: Jacobi method did not converge after 100 iterations.     Notice that swapping the equations in the system results in a Jacobi iteration that does not converge. This is bacause the swapped system is not strictly diagonally dominant and therefore there is no guarantee of convergence.  You can apply gauss_seidel() to solve this system by yourself, and you will find Gauss-Seidel method converges in less iterations (when it converges) and its convergence also relies on the strictly diagonal dominance of the coefficient matrix.  You can download the code from Canvas.  "
},
{
  "id": "unit-06-other-iterative-methods",
  "level": "1",
  "url": "unit-06-other-iterative-methods.html",
  "type": "Section",
  "number": "6.5",
  "title": "Other Iterative Methods",
  "body": "Other Iterative Methods  The following video discusses other iterative methods.   "
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
