  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Data and Communication Interfaces](javascript:call_link\('abenextern_obsolete.htm'\)) → 

ABAP and JavaScript

In the kernel of an AS ABAP, a JavaScript (JS) Engine is integrated, in which execute JavaScript programs can be executed either in normal or in debugging mode (server-side scripting). The JavaScript (JS) Engine used supports JavaScript Version 1.5. Proxies can be used to bind script variables to data objects in ABAP programs.

The class CL\_JAVA\_SCRIPT realizes an API, which can be used in ABAP programs, for the JavaScript (JS) Engine implemented in the kernel. This class encapsulates the JavaScript C Engine API and makes methods and attributes available to the ABAP programmer to perform JavaScript programs.

Note

Support for the binding of JavaScript to ABAP is scheduled to be stopped. This means that the class CL\_JAVA\_SCRIPT can no longer be used.

Example

The program DEMO\_JAVA\_SCRIPT\_MINI\_EDITOR is an example of a minimal JavaScript editor in which JavaScript programs can be edited, executed, and tested. This program was created using ABAP methods only and uses the class CL\_JAVA\_SCRIPT.