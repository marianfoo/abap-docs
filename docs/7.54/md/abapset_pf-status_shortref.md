  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  S

SET PF-STATUS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_pf-status_dynpro.htm)

Syntax

SET PF-STATUS status *\[*OF PROGRAM prog*\]*
                     *\[*EXCLUDING fcode*\]*
                     *\[*IMMEDIATELY*\]*.

Effect

Sets the [GUI status](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abengui_status_glosry.htm "Glossary Entry").

Additions

-   [OF PROGRAM prog](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_pf-status_dynpro.htm)
    Specifies the program prog in which the GUI status is defined.
    
-   [EXCLUDING fcode](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_pf-status_dynpro.htm)
    Deactivates functions of the GUI status by specifying the [function codes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfunction_code_glosry.htm "Glossary Entry") in a character string or in an internal table fcode.
    
-   [IMMEDIATELY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapset_pf-status_list.htm)
    Sets the GUI status after an interactive list event for the currently displayed list.