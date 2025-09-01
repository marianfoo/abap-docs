  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_shortref.htm) →  M

MOVE-CORRESPONDING - Quick reference

[Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove-corresponding.htm)

Syntax

MOVE-CORRESPONDING *\[*EXACT*\]* *{* struc1 TO struc2 *\[*EXPANDING NESTED TABLES*\]* *}*
                         *|* *{* itab1  TO itab2  *\[*EXPANDING NESTED TABLES*\]*
                                              *\[*KEEPING TARGET LINES*\]* *}*.

Effect

Assigns components of a structure struc1 or an internal table itab1 to components with the same name in structure struc2 or internal table itab2.

Additions

-   [EXACT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove_exact.htm)
    The assignment is lossless.
    
-   [EXPANDING NESTED TABLES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove-corresponding_structure.htm)
    Planned: Resolves tabular components.
    
-   [KEEPING TARGET LINES](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmove-corresponding_itab.htm)
    Planned: Adds data to target tables instead of overwriting them.