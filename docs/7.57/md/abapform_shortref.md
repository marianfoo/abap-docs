  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [ABAP - Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_shortref.htm) →  F

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: FORM, ABAPFORM_SHORTREF, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
improvement:)

FORM - Short Reference

[Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform.htm)

Syntax

FORM subr
  *\[* TABLES   *{* t1 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
               t2 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
                ... *}* *\]*
  *\[* USING    *{* *{*VALUE(u1)*}**|*u1 *\[* [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_shortref.htm)*|**{*STRUCTURE struc*}**\]*
               *{*VALUE(u2)*}**|*u2 *\[* [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_shortref.htm)*|**{*STRUCTURE struc*}**\]*
               ... *}* *\]*
  *\[* CHANGING *{* *{*VALUE(c1)*}**|*c1 *\[* [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_shortref.htm)*|**{*STRUCTURE struc*}**\]*
               *{*VALUE(c2)*}**|*c2 *\[* [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_shortref.htm)*|**{*STRUCTURE struc*}**\]*
               ... *}* *\]*
  *\[* RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ... *\]*.
  ...
ENDFORM.

Effect

Obsolete: Defines a subroutine subr. The subroutine is defined with FORM and implemented between FORM and ENDFORM.

Additions   

-   [TABLES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_tables.htm)
    Obsolete: Defines table parameters t1, t2, ...
-   [USING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_parameters.htm)
    Defines input parameters u1, u2, ...
-   [CHANGING](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_parameters.htm)
    Defines input/output parameters c1, c2, ...
-   [VALUE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_parameters.htm)
    Defines for a formal parameter how to pass values. Without the addition VALUE, the values are passed by reference.
-   [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentyping_shortref.htm)
    Types formal parameters.
-   [STRUCTURE struc](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform_structure.htm)
    Obsolete: Casts a structure struc to a formal parameter.
-   [RAISING exc1 exc2 ...](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapform.htm)
    Declares class-based exceptions exc1, exc2, ... which can be propagated from within the subroutine, with or without the capacity to be restarted.