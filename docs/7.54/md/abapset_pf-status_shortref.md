  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  S

SET PF-STATUS - Quick reference

[Reference](javascript:call_link\('abapset_pf-status_dynpro.htm'\))

Syntax

SET PF-STATUS status *\[*OF PROGRAM prog*\]*
                     *\[*EXCLUDING fcode*\]*
                     *\[*IMMEDIATELY*\]*.

Effect

Sets the [GUI status](javascript:call_link\('abengui_status_glosry.htm'\) "Glossary Entry").

Additions

-   [OF PROGRAM prog](javascript:call_link\('abapset_pf-status_dynpro.htm'\))
    Specifies the program prog in which the GUI status is defined.
    
-   [EXCLUDING fcode](javascript:call_link\('abapset_pf-status_dynpro.htm'\))
    Deactivates functions of the GUI status by specifying the [function codes](javascript:call_link\('abenfunction_code_glosry.htm'\) "Glossary Entry") in a character string or in an internal table fcode.
    
-   [IMMEDIATELY](javascript:call_link\('abapset_pf-status_list.htm'\))
    Sets the GUI status after an interactive list event for the currently displayed list.