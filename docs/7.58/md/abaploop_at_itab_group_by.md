---
title: "LOOP AT itab, GROUP BY"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_shortref.htm) Syntax LOOP AT itab result(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_result.htm)  cond(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abap
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by.htm"
abapFile: "abaploop_at_itab_group_by.htm"
keywords: ["select", "loop", "do", "if", "case", "try", "data", "internal-table", "abaploop", "itab", "group"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_variants.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOOP%20AT%20itab%2C%20GROUP%20BY%2C%20ABAPLOOP_AT_ITAB_GROUP_BY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOOP AT itab, GROUP BY

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_shortref.htm)

Syntax

LOOP AT itab [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_result.htm) *\[* [cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_cond.htm)*\]* GROUP BY [group\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_key.htm)
                           *\[*ASCENDING*|*DESCENDING *\[*AS TEXT*\]**\]*
                           *\[*WITHOUT MEMBERS*\]*
                           *\[*[group\_result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_binding.htm)*\]*.
  ...
  [*\[*LOOP AT GROUP ...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_group.htm)
    [...](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_group.htm)
  [ENDLOOP.*\]*](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_group.htm)
  ...
ENDLOOP.

Additions:

[1\. ... ASCENDING*|*DESCENDING *\[*AS TEXT*\]*](#!ABAP_ADDITION_1@1@)
[2\. ... WITHOUT MEMBERS](#!ABAP_ADDITION_2@2@)

Effect

This variant of the statement [LOOP AT itab](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_variants.htm) groups the lines of the internal table and executes a loop across the groups. The same applies to the syntax of the additions [result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_result.htm) and [cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_cond.htm) as to a [loop across lines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm) with the exception that the addition [TRANSPORTING NO FIELDS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_result.htm) cannot be specified.

If the addition GROUP BY is specified, the LOOP is processed in two phases:

-   Grouping
    
    In the first phase, all lines determined by the conditions [cond](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_cond.htm) are read in the processing order described in a [loop across lines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm). The statements in the statement block between LOOP and ENDLOOP are not executed during this process. For each line read, a group key is constructed in the group key expression [group\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_key.htm) instead. Each group key represents a group. Each line is assigned to exactly one group as a member, namely the group of all lines with the same group key. If the addition WITHOUT MEMBERS is not used, this assignment is internal and can be used for access to the members of a group in the second phase.
    
-   Group Loop
    
    In the second phase, a loop is executed across all groups. The statements in the statement block between LOOP and ENDLOOP are executed for each loop pass. The output behavior for the group loop is defined in [group\_result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_binding.htm) and the corresponding values can be accessed in the loop. If the assignment of the table lines to their groups is defined, a member loop [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_group.htm) can be nested in the LOOP to read the lines in each group.
    

The default order of the groups in the group loop as well as the order of the members within a group is defined by the processing order of the LOOP in the first phase:

-   The default order of the groups depends on the time their group key is first created, which itself can be overridden by an explicit sorting using the additions ASCENDING or DESCENDING.
-   If the assignment of the lines to their group is defined, the order of the lines of a group is based on the time they are assigned to the group. This defines, in particular, the first line of each group that is used as a representative in the [representative binding](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_binding.htm).

The internal table itab cannot be modified in the group loop unless the addition WITHOUT MEMBERS is specified.

System Fields

This variant of the statement LOOP AT with the addition GROUP BY sets the values of the system field sy-tabix in the group loop as follows:

-   If a representative binding is defined in the [output behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_binding.htm), sy-tabix is set to the value that would be set for the line representing the group in the LOOP without grouping.
-   If a group key binding is defined in the [output behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_binding.htm), the groups are counted in sy-tabix. The first loop pass sets sy-tabix to 1 and each subsequent loop pass raises it by 1.

After leaving the loop using ENDLOOP, sy-tabix is set to the value that it had before entering the loop. The same applies to sy-subrc as in a [loop across lines](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab.htm).

Hints

-   A grouping, that is, the assignment of lines to a group, only exists within the group loop and a group can only be addressed after [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_group.htm) or [FOR ... IN GROUP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_in_group.htm).
-   A member loop [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_group.htm) is only possible in LOOP statements for which the internal table itab is specified directly as a data object and not as the result of a call or expression. If the table is specified as the result of a call or expression, only the group keys exist in the group loop and no longer the groups themselves.
-   A LOOP with the addition GROUP BY is not possible for [mesh paths](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenmesh_path_glosry.htm "Glossary Entry").
-   No [group level processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_level_processing_glosry.htm "Glossary Entry") with the statement [AT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapat_itab.htm) is possible in a LOOP with the addition GROUP BY.
-   Internal tables can also be grouped using the expression [FOR GROUPS ... OF](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_groups_of.htm).
-   Unlike in [group level processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengroup_level_processing_glosry.htm "Glossary Entry"), a grouping with GROUP BY does not depend on the structure of the lines and the processing order of the loop. A grouping with GROUP BY can usually replace group level processing in cases where the internal table is sorted before the loop by the group key.
-   Groupings using GROUP BY replace self-programmed group loops.
-   In this [example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenint_table_at_unsorted_abexa.htm), GROUP BY is used to replace group level processing.
-   For groupings using GROUP BY to replace self-programmed group loops see the [example](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_explicit_abexa.htm)).

Example

The example shows the simplest form of grouping by a column without explicitly specifying the output behavior of the group loop. Within the loop, there is access to the work area wa, in particular to the component wa-carrid that is used for grouping. The work area wa contains the first line of each group and represents the group in the loop. This is called a representative binding.

SELECT \*
       FROM spfli
       INTO TABLE @FINAL(spfli\_tab).
LOOP AT spfli\_tab INTO FINAL(wa)
                  GROUP BY wa-carrid.
  cl\_demo\_output=>write( wa-carrid ).
ENDLOOP.
cl\_demo\_output=>display( ).

Executable Example

[Grouping Internal Tables](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_abexas.htm)

Addition 1   

... ASCENDING*|*DESCENDING *\[*AS TEXT*\]*

Effect

These additions sort the groups by the group key in ascending or descending order before the group loop is executed. The groups are sorted in exactly the same way as when the statement [SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm) is used on an internal table whose primary table key is the group key and the addition AS TEXT is applied accordingly.

The group loop is executed in the sort order. If the additions ASCENDING and DESCENDING are not specified, the groups are in the order in which the value of a group key was constructed for the first time.

Hint

Groups can be sorted as an addition to the statement [SORT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapsort_itab.htm) if the criteria here are not sufficient.

Example

Like the example above, but with sorting by group key in descending order.

SELECT \*
       FROM spfli
       INTO TABLE @FINAL(spfli\_tab).
LOOP AT spfli\_tab INTO FINAL(wa)
                  GROUP BY wa-carrid DESCENDING.
  cl\_demo\_output=>write( wa-carrid ).
ENDLOOP.
cl\_demo\_output=>display( ).

Executable Example

[Grouping with LOOP and Sort](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_sort_abexa.htm).

Addition 2   

... WITHOUT MEMBERS

Effect

The addition WITHOUT MEMBERS deactivates the default internal variant of the assignment of each table line to its group. This addition constructs groups, but there is no access to the lines of the groups in the group loop. If the addition WITHOUT MEMBERS is specified, the following applies:

-   The [output behavior](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_binding.htm) cannot be defined for a line of the group as a representative and a group key binding must be defined.
-   The group loop cannot contain a nested member loop [LOOP AT GROUP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_group.htm).
-   The internal table itab can be modified in the group loop.

Hint

The addition WITHOUT MEMBERS is used to improve performance in all cases where the content of the groups is not required.

Example

Like the example above, but with the addition WITHOUT MEMBERS, for which a group key binding is defined with INTO DATA(key). There is no access to the lines of the groups in the loop.

SELECT \*
       FROM spfli
       INTO TABLE @FINAL(spfli\_tab).
LOOP AT spfli\_tab INTO FINAL(wa)
                  GROUP BY wa-carrid WITHOUT MEMBERS
                  INTO FINAL(key).
  cl\_demo\_output=>write( key ).
ENDLOOP.
cl\_demo\_output=>display( ).

Continue
[LOOP AT itab, group\_key](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_key.htm)
[LOOP AT itab, group\_result](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_itab_group_by_binding.htm)
[LOOP AT GROUP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abaploop_at_group.htm)
[Examples of Grouping with LOOP](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenloop_group_by_abexas.htm)