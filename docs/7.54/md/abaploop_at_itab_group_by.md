---
title: "LOOP AT itab - GROUP BY"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_shortref.htm) Syntax LOOP AT itab result(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm)  cond(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abap
version: "7.54"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by.htm"
abapFile: "abaploop_at_itab_group_by.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "data", "internal-table", "abaploop", "itab", "group"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_variants.htm) → 

LOOP AT itab - GROUP BY

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_shortref.htm)

Syntax

LOOP AT itab [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm) *\[* [cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm)*\]* GROUP BY [group\_key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by_key.htm)
                           *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
                           *\[*WITHOUT MEMBERS*\]*
                           *\[*[group\_result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by_binding.htm)*\]*.
  ...
  [*\[*LOOP AT GROUP ...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm)
    [...](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm)
  [ENDLOOP.*\]*](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm)
  ...
ENDLOOP.

Extras:

[1\. ... ASCENDING*|*DESCENDING *\[*AS TEXT*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... WITHOUT MEMBERS](#!ABAP_ADDITION_2@2@)

Effect

This variant of the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_variants.htm) groups the rows of the internal table and executes a loop across the groups. The same applies to the syntax of the additions [result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm) and [cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm) as to a [loop across rows](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm) with the exception that the addition [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_result.htm) cannot be specified.

If the addition GROUP BY is specified, the LOOP is processed in two phases:

-   Grouping
    In the first phase, all rows specified by the conditions [cond](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_cond.htm) are read in the processing order specified in a [loop across rows](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm). The statements in the statement block between LOOP and ENDLOOP are not executed during this operation. For each row read, a group key is constructed in the group key expression [group\_key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by_key.htm) instead. Each group key represents a group. Each row is assigned to precisely one group (as a member). This is the group of all rows with the same group key. If the addition WITHOUT MEMBERS is not used, this assignment is internal and can be used for access to the members of a group in the second phase.
    
-   Group Loop
    In the second phase, a loop is executed across all groups. The statements in the statement block between LOOP and ENDLOOP are executed for each loop pass. The output behavior for the group loop is defined in [group\_result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by_binding.htm) and the corresponding values can be accessed in the loop. If the assignment of the table rows to their groups is defined, a member loop [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm) can be nested in the LOOP to read the rows in each group.
    

The default order of the groups in the group loop plus the order of the members within a group is defined by the processing order of the LOOP in the first phase:

-   The default order of the groups is based on the time their group key is first created, which itself can be overridden using the additions ASCENDING or DESCENDING.
    
-   If the assignment of the rows to their group is defined, the order of the rows of a group is based on the time they are assigned to the group. This defines, in particular, the first row of each group, used as a representative in the [representative binding](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by_binding.htm).
    

The internal table itab cannot be modified in the group loop unless the addition WITHOUT MEMBERS is specified.

System Fields

This variant of the statement LOOP AT with the addition GROUP BY sets the values of the system field sy-tabix in the group loop as follows:

-   If a representative binding is defined in the [output behavior](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by_binding.htm), sy-tabix is set to the value that would be set for the row representing the group in the LOOP without grouping.
    
-   If a group key binding is defined in the [output behavior](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by_binding.htm), the groups are counted in sy-tabix. The first loop pass sets sy-tabix to 1 and each subsequent loop pass raises it by 1.
    

After leaving the loop using ENDLOOP, sy-tabix is set to the value that it had before entering the loop. The same applies to sy-subrc as in a [loop across rows](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab.htm).

Notes

-   A grouping (the assignment of rows to a group) exists only within the group loop and a group can only be addressed here after [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm) or [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_in_group.htm).
    
-   A member loop [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm) is only possible in LOOPs for which the internal table itab is specified directly as a data object and not specified as the result of a call or expression. If the table is specified as the result of a call or expression, only the group keys exist in the group loop and not the groups themselves.
    
-   A LOOP with the addition GROUP BY is not possible for [mesh paths](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmesh_path_glosry.htm "Glossary Entry").
    
-   No [group level processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_level_processin_glosry.htm "Glossary Entry") with the statement [AT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapat_itab.htm) is possible in a LOOP with the addition GROUP BY.
    
-   Unlike in [group level processing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencontrol_level_processin_glosry.htm "Glossary Entry"), a grouping with GROUP BY is not defined by the structure of the rows and the processing order of the loop. A grouping with GROUP BY can usually replace group level processing in cases where the internal table is sorted before the loop by the group key (see the [example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenint_table_at_unsorted_abexa.htm)).
    
-   Groupings using GROUP BY replace self-programmed group loops (see the [example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_group_by_explicit_abexa.htm)).
    
-   Internal tables can also be grouped using the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfor_groups_of.htm).
    

Example

The example shows the simplest form of grouping: by one column, without explicitly specifying the output behavior of the group loop: Within the loop, there is access to the work area wa, in particular to the component wa-carrid that is used for grouping. The work area wa contains the first row of each group and represents the group in the loop. This is called a representative binding.

SELECT \*
       FROM spfli
       INTO TABLE @DATA(spfli\_tab).
LOOP AT spfli\_tab INTO DATA(wa)
                  GROUP BY wa-carrid.
  cl\_demo\_output=>write( wa-carrid ).
ENDLOOP.
cl\_demo\_output=>display( ).

Executable Examples

[Grouping Internal Tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_group_by_abexas.htm)

Addition 1

... ASCENDING*|*DESCENDING *\[*AS TEXT*\]*

Effect

These additions sort the groups by the group key in ascending or descending order before the group loop is executed. The groups are sorted in exactly the same way as when the statement [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm) is used on an internal table whose primary table key is the group key and the addition AS TEXT is applied accordingly.

The group loop is executed in the sort order. If the additions ASCENDING and DESCENDING are not specified, the groups are in the order in which the value of a group key was constructed for the first time.

Note

Groups can be sorted as an addition to the statement [SORT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsort_itab.htm) if the criteria here are not enough.

Example

Like the example above, but with sorting by group key in descending order.

SELECT \*
       FROM spfli
       INTO TABLE @DATA(spfli\_tab).
LOOP AT spfli\_tab INTO DATA(wa)
                  GROUP BY wa-carrid DESCENDING.
  cl\_demo\_output=>write( wa-carrid ).
ENDLOOP.
cl\_demo\_output=>display( ).

Executable Example

[Grouping with LOOP and Sort](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_group_by_sort_abexa.htm).

Addition 2

... WITHOUT MEMBERS

Effect

The addition WITHOUT MEMBERS deactivates the default internal variant of the assignment of each table row to its group. This addition constructs groups but there is not access to the rows of the groups in the group loop. If the addition WITHOUT MEMBERS is specified, the following applies:

-   The [output behavior](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by_binding.htm) cannot be defined for a row of the group as a representative and a group key binding must be defined.
    
-   The group loop cannot contain a nested member loop [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm).
    
-   The internal table itab can be modified in the group loop.
    

Note

The addition WITHOUT MEMBERS is used to improve performance in all cases where the content of the groups is not required.

Example

Like the example above, but with the addition WITHOUT MEMBERS, for which a group key binding is defined with INTO DATA(key). There is no access to the rows of the groups in the loop.

SELECT \*
       FROM spfli
       INTO TABLE @DATA(spfli\_tab).
LOOP AT spfli\_tab INTO DATA(wa)
                  GROUP BY wa-carrid WITHOUT MEMBERS
                  INTO DATA(key).
  cl\_demo\_output=>write( key ).
ENDLOOP.
cl\_demo\_output=>display( ).

Continue
[LOOP AT itab - group\_key](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by_key.htm)
[LOOP AT itab - group\_result](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_itab_group_by_binding.htm)
[LOOP AT GROUP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaploop_at_group.htm)
[Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenloop_group_by_abexas.htm)