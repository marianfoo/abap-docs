  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenvalue_assignments.htm) →  [Assigning Structure Components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencorresponding.htm) →  [MOVE-CORRESPONDING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove-corresponding.htm) → 

MOVE-CORRESPONDING, itab

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove-corresponding_shortref.htm)

Syntax

MOVE-CORRESPONDING *\[*EXACT*\]* itab1 TO itab2.
  *\[*EXPANDING NESTED TABLES*\]* *\[*KEEPING TARGET LINES*\]*.

Additions:

[1\. ... EXPANDING NESTED TABLES](#!ABAP_ADDITION_1@1@)
[2\. ... KEEPING TARGET LINES](#!ABAP_ADDITION_2@2@)

Effect

This variant of the statement MOVE-CORRESPONDING requires [internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_table_glosry.htm "Glossary Entry") to be specified for itab1 and itab2. It searches for all identically named components in the line types of itab1 and itab2 and assigns them from itab1 to itab2 in accordance with the rules below.

-   If the line type is structured, the components are the structure components.

-   A non-structured line type is handled like a structure with a single component. The type of the component is the line type of the internal table, that is, elementary, a table itself, or a reference variable. The component has an internal name that is the same for all tables.

If there are identically named components, the target table itab2 is deleted without the addition KEEPING TARGET LINES and the same number of initial lines are inserted as exist in the source table itab1. The lines of the source table are then read sequentially in the same order as in the statement [LOOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm), and the content of each line is assigned to the corresponding line in the target table in accordance with the rules for [MOVE-CORRESPONDING *\[*EXACT*\]* for structures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove-corresponding_structure.htm). Finally, and if necessary, the [table keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_key.htm) and associated [table indexes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_index_glosry.htm "Glossary Entry") are updated in the target table in accordance with the rules [insertions in internal tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapinsert_itab.htm). The corresponding exceptions are raised if uniqueness is violated.

If there are no identically named components, no assignment is made and the target table remains unchanged.

Hints

-   MOVE-CORRESPONDING is always ignored when an internal table with a non-structured line type is assigned to an internal table with a structured line type and vice versa.

-   Without additions, MOVE-CORRESPONDING has the same effect on the assignment of an internal table with non-structured line type to a similar table as a regular [assignment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove.htm).

-   If an internal table itab is assigned to itself using MOVE-CORRESPONDING, the statement is ignored. This also means that the lines are not deleted first and then filled again.

-   The convertibility of the components, if it is known, is checked statically. If the convertibility cannot be determined statically, a runtime error is only raised if an assignment is actually performed.
    

Addition 1

... EXPANDING NESTED TABLES

Effect

If this addition is specified, the individual lines are assigned in accordance with the rules for [MOVE-CORRESPONDING *\[*EXACT*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove-corresponding_structure.htm) with EXPANDING NESTED TABLES specified, and tabular components are resolved at every hierarchy level.

If the addition is not specified, the individual lines are assigned in accordance with the rules for [MOVE-CORRESPONDING *\[*EXACT*\]*](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove-corresponding_structure.htm) without EXPANDING NESTED TABLES specified, and tabular components are assigned in accordance with the [rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_itab.htm) for [assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove.htm) or [lossless assignments](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapmove_exact.htm).

Addition 2

... KEEPING TARGET LINES

Effect

This addition ensures that the target table itab2 is not deleted. Instead, it appends the same number of initial lines as exist in the source table itab1 and assigns the lines of the source table to these initial lines. The table keys and indexes are then updated across all lines. If no identically named components are found, the target table remains unchanged.

Hint

The addition KEEPING TARGET LINES is only effective on the lines of itab2. It cannot be effective on nested tables, even if it is specified with the addition EXPANDING NESTED TABLES. This is because nested tables are always resolved in new initial lines.

Example

Assignment of four identically named components of standard table spfli\_tab to a sorted table flights.

TYPES:
  BEGIN OF flight,
    carrid   TYPE spfli-carrid,
    connid   TYPE spfli-connid,
    cityfrom TYPE spfli-cityfrom,
    cityto   TYPE spfli-cityto,
  END OF flight.
DATA
  flights TYPE SORTED TABLE OF flight WITH UNIQUE KEY carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @DATA(spfli\_tab).
MOVE-CORRESPONDING spfli\_tab TO flights.
cl\_demo\_output=>display( flights ).

Executable Example

[MOVE-CORRESPONDING for Internal Tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmove_corresponding_abexa.htm)