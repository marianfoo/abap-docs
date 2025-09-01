  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [ABAP - Short Reference](javascript:call_link\('abenabap_shortref.htm'\)) →  M

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MOVE-CORRESPONDING%2C%20ABAPMOVE-CORRESPONDING_SHORTREF%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MOVE-CORRESPONDING - Short Reference

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
-   [EXPANDING NESTED TABLES](javascript:call_link\('abapmove-corresponding.htm'\))
    Planned: Tabular components are expanded.
-   [KEEPING TARGET LINES](javascript:call_link\('abapmove-corresponding.htm'\))
    Planned: Target tables are supplemented, not overwritten.