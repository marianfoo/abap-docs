  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_shortref.htm) →  E

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20EVENTS%2C%20ABAPEVENTS_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

EVENTS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapevents.htm)

Syntax

EVENTS evt *\[* EXPORTING VALUE(p1) [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_shortref.htm)
                         *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
                       VALUE(p2) [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_shortref.htm)
                         *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
                        ... *\]*.

Effect

Declares an instance event evt of a class or interface.

Additions   

-   [EXPORTING VALUE(p1) ... VALUE(p2) ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapevents.htm)
    Defines the output parameters p1, p2, ... of the event.
-   [typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentyping_shortref.htm)
    Assigns a type to the output parameter.
-   [OPTIONAL*|*DEFAULT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapevents_parameters.htm)
    Specifies optional output parameters either with or without the replacement parameters def1, def2, ...