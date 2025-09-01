  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_shortref.htm) →  M

MOVE-CORRESPONDING - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding.htm)

Syntax

MOVE-CORRESPONDING *\[*EXACT*\]* *{* struc1 TO struc2 *\[*EXPANDING NESTED TABLES*\]* *}*
                         *|* *{* itab1  TO itab2  *\[*EXPANDING NESTED TABLES*\]*
                                              *\[*KEEPING TARGET LINES*\]* *}*.

Effect

Assigns components of a structure struc1 or an internal table itab1 to components with the same name in structure struc2 or internal table itab2.

Additions

-   [EXACT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove_exact.htm)
    The assignment is lossless.
    
-   [EXPANDING NESTED TABLES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding_structure.htm)
    Planned: Tabular components are expanded.
    
-   [KEEPING TARGET LINES](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmove-corresponding_itab.htm)
    Planned: Target tables are supplemented, not overwritten.