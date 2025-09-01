  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  E

EVENTS - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapevents.htm)

Syntax

EVENTS evt *\[* EXPORTING VALUE(p1) [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_shortref.htm)
                         *\[*OPTIONAL*|**{*DEFAULT def1*}**\]*
                       VALUE(p2) [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_shortref.htm)
                         *\[*OPTIONAL*|**{*DEFAULT def2*}**\]*
                        ... *\]*.

Effect

Declares an instance event evt of a class or interface.

Additions

-   [EXPORTING VALUE(p1) ... VALUE(p2) ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapevents.htm)
    Defines the output parameters p1, p2, ... of the event.
    
-   [typing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentyping_shortref.htm)
    Assigns a type to the output parameter.
    
-   [OPTIONAL*|*DEFAULT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapevents_parameters.htm)
    Specifies optional output parameters either with or without the replacement parameters def1, def2, ...