  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_shortref.htm) →  E

EVENTS - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapevents.htm)

Syntax

EVENTS evt *\[* EXPORTING VALUE(p1) [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_shortref.htm)
                         *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
                       VALUE(p2) [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_shortref.htm)
                         *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
                        ... *\]*.

Effect

Declares an instance event evt of a class or interface.

Additions

-   [EXPORTING VALUE(p1) ... VALUE(p2) ...](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapevents.htm)
    Defines the output parameters p1, p2, ... of the event.
-   [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentyping_shortref.htm)
    Assigns a type to the output parameter.
-   [OPTIONAL*|*DEFAULT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapevents_parameters.htm)
    Specifies optional output parameters either with or without the replacement parameters def1, def2, ...