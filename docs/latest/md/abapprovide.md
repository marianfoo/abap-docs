  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [itab - Interval Join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_table_interval_spcl.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20PROVIDE%2C%20ABAPPROVIDE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

PROVIDE

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprovide_shortref.htm)

Syntax

PROVIDE FIELDS *{*\**|**{*comp1 comp2 ...*}**}*
               FROM itab1 INTO wa1 VALID flag1
               BOUNDS intliml1 AND intlimu1
               *\[*WHERE [log\_exp1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm)*\]*
        FIELDS *{*\**|**{*comp1 comp2 ...*}**}*
               FROM itab2 INTO wa2 VALID flag2
               BOUNDS intliml2 AND intlimu2
               *\[*WHERE [log\_exp2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm)*\]*
               ...
        BETWEEN extliml AND extlimu
        *\[*INCLUDING GAPS*\]*.
  ...
ENDPROVIDE.

Additions:

[1\. ... WHERE log\_exp](#!ABAP_ADDITION_1@1@)
[2\. ... INCLUDING GAPS](#!ABAP_ADDITION_2@2@)

Effect

[Table iteration](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_iteration_glosry.htm "Glossary Entry") across multiple tables depending on interval limits. The statements PROVIDE and ENDPROVIDE define a loop around a statement block. In this loop, any number of internal tables itab1, itab2, ... are processed together. A single table can be listed more than once. For each table itab a FIELDS addition must be specified. After FIELDS, either the placeholder \* must be specified for all components or a list comp1, comp2, ... must be specified for certain components of the table in question. The names of the components comp1, comp2, ... can only be specified directly.

Prerequisites

Prerequisites for processing internal tables using PROVIDE are:

-   All tables itab1, itab2, ... must be completely typed index tables.
-   Each table must contain two particular columns that have the same data type for all tables involved. The data type can be d, i, n, or t.

For every table, the names of these columns must be specified as operands intliml1, intliml2, ... and intlimu1, intlimu2, ... behind the addition BOUNDS.

Defining Intervals

In every line of the internal tables involved, the columns intliml1, intliml2, ... and intlimu1, intlimu2, ... must contain values that can be interpreted as limits of closed intervals. The PROVIDE statement must be able to interpret intervals defined by these columns as a kind of unique key for each line within each individual internal table. This is achieved by the following additional prerequisites for the values in these columns:

-   The intervals must not overlap.
-   The intervals must be sorted in ascending order with regard to the [primary table index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_index_glosry.htm "Glossary Entry").

Another external interval with limits extliml and extlimu must be specified using the BETWEEN addition. The operands extliml and extlimu can be data objects that can be converted to the data types of columns intliml1, intliml2, ... and intlimu1, intlimu2, ... respectively.

The interval limits intliml1, intliml2, ... and intlimu1, intlim2, ... of each line of all internal tables itab1, itab2, ... that are located within the closed interval made up by extliml and extlimu divide the latter into a set of sequential intervals, where each interval limit closes an interval in the original direction. If inside an involved table a lower interval limit follows an upper interval without a gap and if the components specified after FIELDS have the same content in the corresponding lines, the two intervals are combined and the corresponding interval limits intliml1, intliml2, ... and intlimu1, intlimu2, ...are ignored for the new intervals.

Target Areas

For every table, two target areas must be specified:

-   A work area wa1, wa2, that is compatible with the respective line type.
-   A variable flag1, flag2, ... which has a character-like data type with length 1 or can be converted into that type.

For each loop pass of the PROVIDE loop, values are assigned to work areas wa1, wa2, ... and variables flag1, flag2, ... for every internal table. A work area wa1, wa2, ... or a variable flag1, flag2, ... cannot be specified more than once.

Processing a PROVIDE Loop

The PROVIDE loop processes the above described set of sequential intervals that results from the internal and external interval limits from left to right. For each interval of this set that overlaps with at least one of the internal intervals of a table involved, one loop pass is executed. and the target areas are filled with values as follows:

-   The components intliml1, intliml2, ... and intlimu1, intlimu2, ... of every work area wa1, wa2, ...are filled with the interval limits of the current interval.
    
    -   If the current interval overlaps with one of the intervals of an involved table, the remaining components of the corresponding work area are assigned the content of the corresponding components of this table line and the variables flag1, flag2, ... are set to the value X.
    -   Otherwise, the work area components and the variables flag1, flag2, ... are set to their [initial value](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninitial_value_glosry.htm "Glossary Entry").
    
    For performance reasons, the components of the work areas are filled with values again only if the corresponding content of the table lines has been modified since the preceding loop pass.
    
-   Except for intliml1, intliml2, ... and intlimu1, intlimu2, ... the components not specified after FIELDS are always set to their initial value. The components intliml1, intliml2, ... and intlimu1, intlimu2, ... are always assigned an interval limit.

The PROVIDE loop processes the set of sequential intervals from left to right and checks for each loop pass whether the lines of every table involved meet the above prerequisites of non-overlapping intervals and sorting within the interval made up by extliml and extlimu. If such a line is detected before the complete set of intervals is processed, catchable exceptions of the class CX\_SY\_PROVIDE\_INTERVAL\_OVERLAP or CX\_SY\_PROVIDE\_TABLE\_NOT\_SORTED are raised.

Exiting a PROVIDE Loop

The PROVIDE loop can be exited with the following statements;

-   [EXIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapexit_loop.htm) that exits a complete loop and resumes the program behind the closing statement of the loop.
-   A statement for [exiting the current processing block](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenleave_processing_blocks.htm)
-   A statement for [existing the current program](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_leave_program.htm)

In order to exit the current loop pass and to continue with the next loop pass, the statements [CONTINUE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcontinue.htm) and [CHECK](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapcheck_processing_blocks.htm) can be used.

Hints

-   The statement PROVIDE is intended mainly for the processing of internal tables for HR\- [info types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninfo_type_glosry.htm "Glossary Entry") declared using the special statement [INFOTYPES](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapinfotypes.htm) or that have a corresponding structure.
-   The internal tables involved should not be modified in the PROVIDE loop.
-   Only reads should be performed on the work areas wa1, wa2,..., since they are not necessarily assigned values at the start of each loop.
-   The WHERE condition can be used to remove overlaps between the tables involved, or to ensure the sorting of the intervals.
-   Any [secondary table keys](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") of the internal tables involved are not supported in the PROVIDE statement. The primary table index is always implicitly used for processing.
-   The PROVIDE statement relies on the above described prerequisites of non-overlapping intervals and sorting of the intervals. But an exception only occurs if processing of the PROVIDE loop runs into a situation, where that can be detected. If the last interval of the sequential interval set can be processed, the PROVIDE loop ends normally and no exception is raised. This behavior depends on the interval limits and the number of tables involved and cannot easily be foreseen. If multiple tables are involved, the PROVIDE statement cannot be used for checking if the prerequisites are fulfilled for the complete content of all involved internal tables. Such a check must be done for each individual table before executing the PROVIDE statement.
-   In addition to this variant of the PROVIDE statement, an [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapprovide_obsolete.htm) can also be used outside of classes.
-   The usage of group level processing with [AT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_itab.htm) is not supported in PROVIDE loops and leads to syntax errors in most cases. The fact that a few variants of AT are syntactically allowed in certain constellations should not be exploited.

System Fields

sy-subrc and sy-tabix are set to the value 0 before every loop pass and by ENDPROVIDE. Only if the loop is not passed at all, is sy-subrc set to 4 by ENDPROVIDE.

Addition 1   

... WHERE log\_exp

Effect

The addition WHERE can be used to specify a condition for every table itab1, itab2, ... involved. After WHERE, a [logical expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expression_glosry.htm "Glossary Entry") [log\_exp1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm), [log\_exp2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) ... can be specified, where a [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm) of the internal table must be specified as the first operand of each [relational expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelational_expression_glosry.htm "Glossary Entry") as a single operand, that is, not part of an expression. Only components that are also listed after FIELDS can be specified. All [comparison expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_comp.htm) and the [predicate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm) can be specified as relational expressions. No other [predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate.htm) can be specified. The other operands of a comparison can be any [suitable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) individual operands or arithmetic expressions but not components of the internal table. The table entries for which the condition is not met are ignored by the PROVIDE loop.

Addition 2   

... INCLUDING GAPS

Effect

If the INCLUDING GAPS addition is specified, a loop pass is processed for the PROVIDE loop for every interval of the sequential interval set, even if the current interval does not overlap with at least one of the intervals of an involved table. In such a case, the variable flag is initial for every table involved.

Example

In two tables, itab1 and itab2, the columns col1 and col2 are interval limits of type i for intervals of integers between 1 and 14. The filling of the internal tables produces the following intervals shown in lines two and three:

\-------------------------------------------
|01|02|03|04|05|06|07|08|09|10|11|12|13|14|
\-------------------------------------------
|   Itab1 Int1    |     |Itab1 Int2 |     |
\-------------------------------------------
|        |      Itab2 Int1       |        |
\-------------------------------------------
|  |          ... BETWEEN ...             |
\-------------------------------------------
|  | i1  |   i2   | i3  |   i4   |i5|     |
\-------------------------------------------

The interval specified in the BETWEEN addition of the PROVIDE statement is shown in the fourth line. It produces the five intervals in the fifth line represented by i1 to i5, which can be processed in the PROVIDE loop.

Because each of the five intervals overlaps with one of the intervals from lines two and three, the PROVIDE loop is passed five times.

Only the component col3 of wa1 is filled in the first pass, only the component col3 of wa2 in the third pass, and the components col3 of both work areas in the second and fourth passes. The fields valid1 and valid2 are set accordingly.

DATA: BEGIN OF wa1,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE string,
      END OF wa1.
DATA: BEGIN OF wa2,
        col1 TYPE i,
        col2 TYPE i,
        col3 TYPE string,
      END OF wa2.
DATA: itab1 LIKE STANDARD TABLE OF wa1,
      itab2 LIKE STANDARD TABLE OF wa2.
DATA: flag1(1) TYPE c,
      flag2(1) TYPE c.
itab1 = VALUE #( ( col1 = 1 col2 = 6  col3 = 'Itab1 Int1' )
                 ( col1 = 9 col2 = 12 col3 = 'Itab1 Int2' ) ).
itab2 = VALUE #( ( col1 = 4 col2 = 11 col3 = 'Itab2 Int1' ) ).
DATA output TYPE TABLE OF string WITH EMPTY KEY.
PROVIDE FIELDS col3 FROM itab1 INTO wa1
                               VALID flag1
                               BOUNDS col1 AND col2
        FIELDS col3 FROM itab2 INTO wa2
                               VALID flag2
                               BOUNDS col1 AND col2
        BETWEEN 2 AND 14.
  APPEND | { wa1-col1 WIDTH = 2 } { wa1-col2 WIDTH = 2 } {
             wa1-col3 } { flag1 } | TO output.
  APPEND | { wa2-col1 WIDTH = 2 } { wa2-col2 WIDTH = 2 } {
             wa2-col3 } { flag2 } | TO output.
  APPEND INITIAL LINE TO output.
ENDPROVIDE.
cl\_demo\_output=>display( output ).

The output is as follows:

   2           3  Itab1 Int1 X
   2           3
   4           6  Itab1 Int1 X
   4           6  Itab2 Int1 X
   7           8
   7           8  Itab2 Int1 X
   9          11  Itab1 Int2 X
   9          11  Itab2 Int1 X
  12          12  Itab1 Int2 X
  12          12

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_PROVIDE\_INTERVAL\_OVERLAP

-   Cause: In one of the involved tables there are overlapping intervals within extlim1 and extlim2.
    Runtime error: UNCAUGHT\_EXCEPTION

CX\_SY\_PROVIDE\_TABLE\_NOT\_SORTED

-   Cause: One of the involved tables is not sorted in ascending order by the intervals within extlim1 and extlim2.
    Runtime error: UNCAUGHT\_EXCEPTION

Continue
[ENDPROVIDE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapendprovide.htm)