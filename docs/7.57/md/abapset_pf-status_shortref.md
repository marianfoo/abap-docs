  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  S

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET PF-STATUS, ABAPSET_PF-STATUS_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D
%0ASuggestion for improvement:)

SET PF-STATUS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_dynpro.htm)

Syntax

SET PF-STATUS status *\[*OF PROGRAM prog*\]*
                     *\[*EXCLUDING fcode*\]*
                     *\[*IMMEDIATELY*\]*.

Effect

Sets the [GUI status](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abengui_status_glosry.htm "Glossary Entry").

Additions   

-   [OF PROGRAM prog](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_dynpro.htm)
    Specifies the program prog in which the GUI status is defined.
-   [EXCLUDING fcode](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_dynpro.htm)
    Deactivates functions of the GUI status by specifying the [function codes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfunction_code_glosry.htm "Glossary Entry") in a character string or in an internal table fcode.
-   [IMMEDIATELY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_pf-status_list.htm)
    Sets the GUI status after an interactive list event for the currently displayed list.