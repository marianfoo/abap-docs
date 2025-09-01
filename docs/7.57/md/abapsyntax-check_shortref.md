---
title: "SYNTAX-CHECK - Short Reference"
description: |
  Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_for_itab.htm) Syntax SYNTAX-CHECK FOR itab MESSAGE mess LINE lin WORD wrd PROGRAM prog DIRECTORY ENTRY dir WITH CURRENT SWITCHSTATES INCLUDE incl OFFSET off MESSAGE-ID
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_shortref.htm"
abapFile: "abapsyntax-check_shortref.htm"
keywords: ["do", "if", "try", "abapsyntax", "check", "shortref"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SYNTAX-CHECK, ABAPSYNTAX-CHECK_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

SYNTAX-CHECK - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_for_itab.htm)

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

-   [PROGRAM prog](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_for_itab.htm)
    Defines the program properties with reference to a program prog.
-   [DIRECTORY ENTRY dir](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_for_itab.htm)
    Defines the program properties by specifying a structure in dir of the type TRDIR.
-   [WITH CURRENT SWITCHSTATES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_for_itab.htm)
    Defines which key configuration is used for the syntax check.
-   [INCLUDE incl](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_error_handling.htm)
    Returns the name of the include program in which the error occurs in incl.
-   [OFFSET off](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_error_handling.htm)
    Returns the offset of the error in the line in off.
-   [MESSAGE-ID mid](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsyntax-check_error_handling.htm)
    Returns the key of the error message from the table TRMSG in mid.