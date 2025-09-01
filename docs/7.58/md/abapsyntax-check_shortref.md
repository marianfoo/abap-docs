  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SYNTAX-CHECK%2C%20ABAPSYNTAX-CHECK_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SYNTAX-CHECK - Short Reference

[Reference](javascript:call_link\('abapsyntax-check_for_itab.htm'\))

Syntax

SYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd
                 *\[*PROGRAM prog*\]* *\[*DIRECTORY ENTRY dir*\]*
                 *\[*WITH CURRENT SWITCHSTATES*\]*
                 *\[*INCLUDE incl*\]*
                 *\[*OFFSET off*\]*
                 *\[*MESSAGE-ID mid*\]*.

Effect

Checks the syntax of the source code in itab and returns the first error message, the first line with an error, and the first word with an error in mess, lin, and wrd.

Additions   

-   [PROGRAM prog](javascript:call_link\('abapsyntax-check_for_itab.htm'\))
    Defines the program properties with reference to a program prog.
-   [DIRECTORY ENTRY dir](javascript:call_link\('abapsyntax-check_for_itab.htm'\))
    Defines the program properties by specifying a structure in dir of the type TRDIR.
-   [WITH CURRENT SWITCHSTATES](javascript:call_link\('abapsyntax-check_for_itab.htm'\))
    Defines which key configuration is used for the syntax check.
-   [INCLUDE incl](javascript:call_link\('abapsyntax-check_error_handling.htm'\))
    Returns the name of the include program in which the error occurs in incl.
-   [OFFSET off](javascript:call_link\('abapsyntax-check_error_handling.htm'\))
    Returns the offset of the error in the line in off.
-   [MESSAGE-ID mid](javascript:call_link\('abapsyntax-check_error_handling.htm'\))
    Returns the key of the error message from the table TRMSG in mid.