  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  I

INCLUDE, TYPE, STRUCTURE - Short Reference

[Reference](javascript:call_link\('abapinclude_type.htm'\))

Syntax

INCLUDE *{* *{*TYPE struc\_type*}*
        *|* *{*STRUCTURE struc*}* *}*
        *\[*AS name *\[*RENAMING WITH SUFFIX suffix*\]**\]*.

Effect

Includes all components of the structured type struc\_type or the structure struc at the current position in a structure definition.

Additions

-   AS name
    Defines a higher-level name for the included components.
-   RENAMING WITH SUFFIX suffix
    Renames the bound components by adding the ending suffix.