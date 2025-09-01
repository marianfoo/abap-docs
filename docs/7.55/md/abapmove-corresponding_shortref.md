  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Quick Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

MOVE-CORRESPONDING - Quick reference

[Reference](javascript:call_link\('abapmove-corresponding.htm'\))

Syntax

MOVE-CORRESPONDING *\[*EXACT*\]* *{* struc1 TO struc2 *\[*EXPANDING NESTED TABLES*\]* *}*
                         *|* *{* itab1  TO itab2  *\[*EXPANDING NESTED TABLES*\]*
                                              *\[*KEEPING TARGET LINES*\]* *}*.

Effect

Assigns components of a structure struc1 or an internal table itab1 to components with the same name in structure struc2 or internal table itab2.

Additions

-   [EXACT](javascript:call_link\('abapmove_exact.htm'\))
    The assignment is lossless.

-   [EXPANDING NESTED TABLES](javascript:call_link\('abapmove-corresponding_structure.htm'\))
    Planned: Tabular components are expanded.

-   [KEEPING TARGET LINES](javascript:call_link\('abapmove-corresponding_itab.htm'\))
    Planned: Target tables are supplemented, not overwritten.