  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  G

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET PF-STATUS, ABAPGET_PF-STATUS_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

GET PF-STATUS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_pf.htm)

Syntax

GET PF-STATUS status *\[*PROGRAM prog*\]* *\[*EXCLUDING fcode*\]*.

Effect

Returns the current [GUI status](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengui_status_glosry.htm "Glossary Entry") in status.

Additions   

-   PROGRAM prog
    Returns the program, in which the GUI status is defined, in prog.
-   EXCLUDING fcode
    Returns the inactive [function codes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_code_glosry.htm "Glossary Entry") in the internal table fcode.