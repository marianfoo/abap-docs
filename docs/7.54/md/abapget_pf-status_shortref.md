  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  G

GET PF-STATUS - Quick reference

[Reference](javascript:call_link\('abapget_pf.htm'\))

Syntax

GET PF-STATUS status *\[*PROGRAM prog*\]* *\[*EXCLUDINGfcode*\]*.

Effect

Returns the current [GUI status](javascript:call_link\('abengui_status_glosry.htm'\) "Glossary Entry") in status.

Additions

-   PROGRAM prog
    Returns the program, in which the GUI status is defined, in prog.
    
-   EXCLUDING fcode
    Returns the inactive [function codes](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry") in the internal table fcode.