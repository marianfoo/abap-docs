  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  E

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: EVENTS, ABAPEVENTS_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

EVENTS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapevents.htm)

Syntax

EVENTS evt *\[* EXPORTING VALUE(p1) [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_shortref.htm)
                         *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
                       VALUE(p2) [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_shortref.htm)
                         *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
                        ... *\]*.

Effect

Declares an instance event evt of a class or interface.

Additions   

-   [EXPORTING VALUE(p1) ... VALUE(p2) ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapevents.htm)
    Defines the output parameters p1, p2, ... of the event.
-   [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_shortref.htm)
    Assigns a type to the output parameter.
-   [OPTIONAL*|*DEFAULT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapevents_parameters.htm)
    Specifies optional output parameters either with or without the replacement parameters def1, def2, ...