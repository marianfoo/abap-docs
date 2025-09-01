  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  F

FORM - Short Reference

[Reference](javascript:call_link\('abapform.htm'\))

Syntax

FORM subr
  *\[* TABLES   *{* t1 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
               t2 *\[**{*TYPE itab\_type*}**|**{*LIKE itab*}**|**{*STRUCTURE struc*}**\]*
                ... *}* *\]*
  *\[* USING    *{* *{*VALUE(u1)*}**|*u1 *\[* [typing](javascript:call_link\('abentyping_shortref.htm'\))*|**{*STRUCTURE struc*}**\]*
               *{*VALUE(u2)*}**|*u2 *\[* [typing](javascript:call_link\('abentyping_shortref.htm'\))*|**{*STRUCTURE struc*}**\]*
               ... *}* *\]*
  *\[* CHANGING *{* *{*VALUE(c1)*}**|*c1 *\[* [typing](javascript:call_link\('abentyping_shortref.htm'\))*|**{*STRUCTURE struc*}**\]*
               *{*VALUE(c2)*}**|*c2 *\[* [typing](javascript:call_link\('abentyping_shortref.htm'\))*|**{*STRUCTURE struc*}**\]*
               ... *}* *\]*
  *\[* RAISING exc1*|*RESUMABLE(exc1) exc2*|*RESUMABLE(exc2) ... *\]*.
  ...
ENDFORM.

Effect

Obsolete: Defines a subroutine subr. The subroutine is defined with FORM and implemented between FORM and ENDFORM.

Additions

-   [TABLES](javascript:call_link\('abapform_tables.htm'\))
    Obsolete: Defines table parameters t1, t2, ...
-   [USING](javascript:call_link\('abapform_parameters.htm'\))
    Defines input parameters u1, u2, ...
-   [CHANGING](javascript:call_link\('abapform_parameters.htm'\))
    Defines input/output parameters c1, c2, ...
-   [VALUE](javascript:call_link\('abapform_parameters.htm'\))
    Defines for a formal parameter how to pass values. Without the addition VALUE, the values are passed by reference.
-   [typing](javascript:call_link\('abentyping_shortref.htm'\))
    Types formal parameters.
-   [STRUCTURE struc](javascript:call_link\('abapform_structure.htm'\))
    Obsolete: Casts a structure struc to a formal parameter.
-   [RAISING exc1 exc2 ...](javascript:call_link\('abapform.htm'\))
    Declares class-based exceptions exc1, exc2, ... which can be propagated from within the subroutine, with or without the capacity to be restarted.