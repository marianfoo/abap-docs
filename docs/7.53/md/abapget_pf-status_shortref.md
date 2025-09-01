  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_shortref.htm) →  G

GET PF-STATUS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_pf.htm)

Syntax

GET PF-STATUS status *\[*PROGRAM prog*\]* *\[*EXCLUDINGfcode*\]*.

Effect

Returns the current [GUI status](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengui_status_glosry.htm "Glossary Entry") in status.

Additions

-   PROGRAM prog
    Returns the program, in which the GUI status is defined, in prog.
    
-   EXCLUDING fcode
    Returns the inactive [function codes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_code_glosry.htm "Glossary Entry") in the internal table fcode.