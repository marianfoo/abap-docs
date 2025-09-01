  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  S

SYNTAX-CHECK - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_itab.htm)

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

-   [PROGRAM prog](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_itab.htm)
    Defines the program attributes with reference to a program prog.
    
-   [DIRECTORY ENTRY dir](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_itab.htm)
    Defines the program attributes by specifying a structure in dir of the type TRDIR.
    
-   [WITH CURRENT SWITCHSTATES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_for_itab.htm)
    Defines which key configuration is used for the syntax check.
    
-   [INCLUDE incl](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_error_handling.htm)
    Returns the name of the include program in which the error occurs in incl.
    
-   [OFFSET off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_error_handling.htm)
    Returns the offset of the error in the line in off.
    
-   [MESSAGE-ID mid](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsyntax-check_error_handling.htm)
    Returns the key of the error message from the table TRMSG in mid.