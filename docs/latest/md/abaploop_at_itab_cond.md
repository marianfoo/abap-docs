---
title: "LOOP AT itab, cond"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_shortref.htm) Syntax ... USING KEY keyname(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) FROM idx1 TO idx2 STEP n WHERE log_ex
version: "latest"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_cond.htm"
abapFile: "abaploop_at_itab_cond.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "abaploop", "itab", "cond"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, Basic Form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20LOOP%20AT%20itab%2C%20cond%2C%20ABAPLOOP_AT_ITAB_COND%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

LOOP AT itab, cond

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab_shortref.htm)

Syntax

... *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm)*\]*
    *\[*FROM idx1*\]* *\[*TO idx2*\]* *\[*STEP n*\]*
    *\[*WHERE [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm)*|*(cond\_syntax)*\]* ...

Additions:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*FROM idx1*\]* *\[*TO idx2*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... STEP n](#!ABAP_ADDITION_3@3@)
[4\. ... WHERE log\_exp](#!ABAP_ADDITION_4@4@)
[5\. ... WHERE (cond\_syntax)](#!ABAP_ADDITION_5@5@)

Effect

These optional additions to [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm) specify a subset of lines to be processed and the order in which the loop is executed.

-   The subset of lines can be defined with:
    -   FROM and TO that define an interval of line numbers for index tables
    -   WHERE that selects lines that fulfill a condition specified in a logical expression
    -   STEP that allows lines to be skipped by defining a step size greater than 1.
-   The processing order can be defined with:
    -   USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) that defines the table key that is used for the loop and thus overrides the standard order determined by the table category.
    -   STEP that can define a reverse order by specifying a negative step size.

If none of the conditions are specified, all table lines are read in the standard order that is defined by the table category as described under [LOOP AT itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm).

Addition 1   

... USING KEY keyname

Effect

The optional addition USING KEY specifies a table key [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) with which the processing is executed. The specified table key affects the order in which the table lines are accessed, and the evaluation of the other conditions.

If the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified using its name primary\_key, the processing behaves in the same way as if no key were explicitly specified. If a [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is specified, the order in which the lines are accessed is as follows. [STEP](abaploop_at_itab_cond.htm#!ABAP_ADDITION_3@3@).

-   [Specification of a sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry")
    
    The lines are processed by ascending line number in the [secondary table index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") In each loop pass, the system field sy-tabix contains the line number of the current line in the associated secondary table index.
    
-   [Specification of a hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry")
    
    The lines are processed in the order in which they were inserted into the table. In each loop pass, the system field sy-tabix contains the value 0. A preceding sort using the statement [SORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm) does not change this processing order.
    

The order defined by USING KEY can be reversed by using the addition STEP with a negative step size.

Within the loop, the key used can be addressed using the predefined name loop\_key. This is possible in all statements where the table key [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) to be used can be specified explicitly. This type of statement must then be listed in the loop itself. Including the statement in a procedure that is called in the loop is not sufficient.

Hints

-   The fact that the processing order defined by a secondary hash key is not affected by a preceding sort using the statement SORT is a different behavior than for the processing order defined by the primary key of a hashed table that is affected by a preceding sort.
-   If a secondary table key is specified, a simultaneously specified WHERE condition also must be [optimizable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm), otherwise a syntax error occurs or an exception is raised.

Example

The example demonstrates the difference between loops across a standard table of random numbers with and without a sorted secondary table key specification. The first loop returns the lines in the order in which they were appended. The second loop returns the lines sorted in ascending order.

FINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ).
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t )
                                         min  = 1
                                         max  = 100 ).
DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY
          WITH NON-UNIQUE SORTED KEY key COMPONENTS table\_line.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( rnd->get\_next( ) ) ).
DATA output1 TYPE TABLE OF i WITH EMPTY KEY.
LOOP AT itab INTO FINAL(number1).
  output1 = VALUE #( BASE output1 ( number1 ) ).
ENDLOOP.
cl\_demo\_output=>write( output1 ).
DATA output2 TYPE TABLE OF i WITH EMPTY KEY.
LOOP AT itab INTO FINAL(number2) USING KEY key.
  output2 = VALUE #( BASE output2 ( number2 ) ).
ENDLOOP.
cl\_demo\_output=>display( output2 ).

Executable Example

[Loop Across Internal Table with Key Specified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_at_itab_key_abexa.htm)

Addition 2   

... *\[*FROM idx1*\]* *\[*TO idx2*\]*

Effect

These optional additions have the effect that only table rows from row number idx1 or up to and including row number idx2 are respected in the table index used. The table index used is either the primary index or a secondary sorted index specified by USING KEY.

If only FROM is specified, all lines of the table from line number idx1 up to and including the last line are respected. If only TO is specified, all lines in the table from the first line up to line number idx2 are respected.

-   If the addition USING KEY is not used, or the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified in keyname, the additions FROM and TO can only be used for [index tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindex_table_glosry.htm "Glossary Entry") and refer to the line numbers of the [primary table index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_index_glosry.htm "Glossary Entry").
-   If a [sorted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry") [secondary key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is specified in keyname after USING KEY, the additions FROM and TO can be used for all table categories and refer to the line numbers of the [secondary table index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").

idx1 and idx2 are [numeric expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

The following restrictions apply:

-   If the value of idx1 is less than or equal to 0, it is set to 1 in the statement LOOP. If the value of idx1 is greater than the total number of table lines, no processing takes place.
-   If the value of idx2 is less than or equal to 0, the statement LOOP is not executed. If the value of idx2 is greater than the number of table lines, it is set to the number of table lines.
-   If the value of idx2 is less than the value of idx1, no processing takes place.

The value of idx1 is evaluated once when the loop is entered. Any changes to idx1 during loop processing are ignored. In contrast, the value of idx2 is evaluated in each loop pass and any changes made to idx2 during loop processing are respected.

The additions FROM and TO can be specified together with STEP and then special rules apply.

Hint

To determine when loop processing is exited and whether the value specified in idx2 has been reached, the current line number is evaluated. Note that this number can be changed if lines are inserted or deleted during a loop pass as described in [LOOP](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaploop_at_itab.htm). When lines are inserted, the loop may be processed less often and when lines are deleted, it may be processed more often than specified by the difference between idx2 and idx1.

Example

Determination of the primary index of a particular table line using the built-in function [line\_index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenline_index_function.htm) and a loop across the internal table from this line.

DATA itab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE @itab.
FINAL(idx) = line\_index( itab\[ carrid = 'LH' \] ).
IF idx = 0.
  RETURN.
ENDIF.
LOOP AT itab FROM idx ASSIGNING FIELD-SYMBOL(<fs>).
  ...
ENDLOOP.

Addition 3   

... STEP n

Effect

The optional addition STEP n defines the step size and the direction of the loop. The step size is defined by the absolute value of n and the direction is defined by the positive or negative sign of n. n is a [numeric expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i. If the addition STEP is not specified, the step size is 1 and the loop order is defined by the table category or the addition USING KEY only.

The addition step size can be combined with the additions FROM, TO and WHERE and then works on the subset of table lines defined by these conditions. For such combinations the following special rules apply:

-   If FROM idx1 or TO idx2 are combined with STEP:
    
    -   If the value of n is greater than 0, idx1 needs to be less than or equal to idx2.
    -   If the value of n is less than 0, idx1 needs to be greater than or equal to idx2.
    
    If none of the above restrictions are met, the loop is interpreted as empty. All other settings for FROM idx1 and TO idx2 are described as for [... *\[*FROM idx1*\]* *\[*TO idx2*\]*](abaploop_at_itab_cond.htm#!ABAP_ADDITION_2@2@).
    
-   If a WHERE condition is combined with STEP, the argument n can only have the value 1 or -1. Other values lead to a syntax error or the uncatchable runtime error ITAB\_ILLEGAL\_STEP\_SIZE. The WHERE condition needs to be placed after STEP n.

The detailed effect of the addition STEP is as follows:

-   Step size
    
    The absolute value of n specifies the step size of the loop over all table lines or the subset of table lines defined by the conditions FROM, TO and WHERE. Starting from the first line of the table or subset for a forwards order or from the last line of the subset for a backwards order,
    
    -   if the absolute value of n is equal to 1, every line is read,
    -   if the absolute value of n is equal to 2, every second line is read,
    -   and so on.
    
    If the absolute value of n is greater than the lines available in the subset, only the first or last line of the subset are processed.
    
-   Loop order
    
    The sign of n keeps or reverses the loop order as it is defined by the table category or the addition USING KEY:
    
    -   If the value of n is greater than 0,the loop order is not changed. A forward loop is executed that starts with the first table line or the first line of the subset.
    -   If the value of n is less than 0, the loop order is reversed. A backward loop is executed, that starts with the last table line or the last line of the subset.
    
    Specifying a reverse loop order changes the standard order as follows:
    
    -   A reverse loop order without specifying a secondary key behind USING KEY reverses the loop order defined by the table category. For index tables, the primary table index is processed backwards starting with the highest index entry in descending order and the corresponding table lines are read. For hashed tables, the table lines are read backward in the reverse order in which they were inserted into the table or are sorted after a [SORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm) statement.
    -   A reverse loop order together with a secondary key specified behind USING KEY reverses the loop order defined by the secondary key. For a sorted secondary key, the corresponding secondary index is processed backwards starting with the highest index entry in descending order and the corresponding table lines are read. For a secondary hashed key, the table lines are read backward in the reverse order in which they were inserted into the table (a preceding sort using [SORT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsort_itab.htm) has no effect here).

The value of n must not be 0. If the value 0 is known statically for n, a syntax error occurs. If the value 0 is known at runtime only, the program is aborted with the runtime error ITAB\_ILLEGAL\_STEP\_SIZE which is not catchable. Changing the value of n inside the loop has no effect on the step size or loop order.

As usual, sy-tabix contains the line number of the current line read in a loop pass when using a table index or 0 when using a hashed key.

Hints

-   The addition STEP does not change the actual sort order of the table as defined by table category or for a secondary index. It changes the processing order of the current loop with respect to this sort order.
-   The control structures for [group level processing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengroup_level_processing_glosry.htm "Glossary Entry") [AT FIRST, AT LAST, AT NEW, and AT END OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapat_itab.htm) are not supported with STEP.
-   STEP n can, however, be positioned otherwise. Its use after FROM idx1 and TO idx2 is recommended.

Example

The following example shows the use of STEP n as reverse loop in combination with FROM idx1 and TO idx2. As result, line 3, line 2, and line 1 as defined by the primary table index are processed in the mentioned order.

SELECT \*
       FROM scarr
       ORDER BY carrid
       INTO TABLE @FINAL(itab).
LOOP AT itab ASSIGNING FIELD-SYMBOL(<fs>)
             FROM 3 TO 1 STEP -1.
  cl\_demo\_output=>write( <fs> ).
ENDLOOP.
cl\_demo\_output=>display( ).

Executable Example

[LOOP with Step Size](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_at_itab_step_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Illegal step size for the statement.
    Runtime error: ITAB\_ILLEGAL\_STEP\_SIZE
-   Cause: The statement only supports integral data objects.
    Runtime error: OBJECTS\_NOT\_INTEGRAL

Addition 4   

... WHERE log\_exp

Effect

Static WHERE condition. All lines are processed for which the condition after WHERE is met. If a static WHERE condition is specified, the line type of the internal table must be known statically. WHERE can be specified for all table categories.

A [logical expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogical_expression_glosry.htm "Glossary Entry") [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm) can be specified after WHERE, in which the first operand of each [relational expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrelational_expression_glosry.htm "Glossary Entry") is a [component](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm) of the internal table. The following can be specified as relational expressions:

-   All [comparison expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_comp.htm)
-   The following [predicate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate_expression_glosry.htm "Glossary Entry"):
    -   [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_initial.htm)
    -   [IS *\[*NOT*\]* BOUND](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_bound.htm)
    -   [IS *\[*NOT*\]* INSTANCE OF](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_instance_of.htm)

No other [predicates](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenpredicate.htm) can be specified. The components of the internal table must be specified as individual operands and not as part of an expression. Parenthesized character-like data objects cannot be used to specify a component dynamically here. The remaining operands of a relational expression are [general expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abengeneral_expression_positions.htm) at which any [suitable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) individual operands or [expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexpression_glosry.htm "Glossary Entry") can be specified, but no components of the internal table. The specified components can have any data type. The corresponding [comparison rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) apply to the evaluation. Here, a different [rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules_expr_char.htm) applies to a string expression on the right side than to general logical expressions.

-   When [standard tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") are accessed without a secondary key specification, the access is not optimized. This means that all lines of the internal table are checked for the logical expression of the WHERE addition.
-   When using a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry") or a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry"), that is, when accessing a [sorted table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_table_glosry.htm "Glossary Entry"), a [hashed table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhashed_table_glosry.htm "Glossary Entry"), or a [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), the compiler tries to optimize the access as described under [Optimization of the WHERE Condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm). The prerequisites are:
    
    -   The entire logical expression or a part of it can be transformed into a key access.
    -   The transformable part of the logical expression has the same result as the resulting key access.
    
    If an optimization is not possible, the behavior is as follows:
    
    -   If a sorted table or a hashed table is accessed using the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"), the full WHERE condition is applied to all lines of the table.
    -   If the table is accessed using a [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), a syntax error or an exception is raised.

Hints

-   When using a WHERE condition, it should be noted that the [comparison rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_rules.htm) for incompatible data types apply when comparing incompatible data objects. Here, the data types involved determine which operand is converted. If the additions [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_key.htm) and [WITH KEY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_table_free.htm) of the statement READ are used or if the corresponding [keys are specified](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_exp_itab_line.htm) in [table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expressions.htm), however, the content of the specified data objects is always converted to the data type of the columns before the comparison, which can produce varying results.
-   The difference between comparison rules in a WHERE condition and conversion rules when reading individual lines is particularly significant for [enumerated types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenenum_type_glosry.htm "Glossary Entry") for which the comparison rules are more restrictive than conversion rules. [Conversions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_enumerated.htm) of an enumerated object to a character-like type produce a message from the extended program check.
-   If possible, all operands of the logical expression should be in [compatible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompatible_glosry.htm "Glossary Entry") pairs, so that the [WHERE condition can be optimized](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm).
-   If a comparison expression with a [ranges table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenranges_table_glosry.htm "Glossary Entry") is specified after [IN](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_select_option.htm) as a logical expression, the expression for the initial table is always true and then all lines are then processed.
-   The logical expression specified after WHERE is evaluated once when the loop is entered. Any changes to the second operand during loop processing are ignored.

Example

The following example demonstrates the differences in behavior of a WHERE condition and a key access with WITH TABLE KEY. In LOOP AT itab WHERE, the rule for the [comparison of character-like data types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp_character.htm) applies. The short column content AA is first padded with blanks to increase the length to 4 and then compared with AAXX. No matching line is found. Using READ TABLE itab WITH TABLE KEY, the content of text\_long is [converted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconversion_type_c.htm) to the value AA before the comparison, by cutting off two characters, and then compared with the column content. The read is therefore successful.

DATA text\_short TYPE c LENGTH 2.
DATA text\_long  TYPE c LENGTH 4.
DATA itab LIKE TABLE OF text\_short WITH NON-UNIQUE KEY table\_line.
text\_short = 'AA'.
text\_long  = 'AAXX'.
APPEND text\_short TO itab.
LOOP AT itab INTO text\_short WHERE table\_line = text\_long.
ENDLOOP.
cl\_demo\_output=>write( |LOOP: { sy-subrc }| ).
READ TABLE itab INTO text\_short WITH TABLE KEY table\_line = text\_long.
cl\_demo\_output=>display( |READ: { sy-subrc }| ).

Addition 5   

... WHERE (cond\_syntax)

Effect

Dynamic WHERE condition. For cond\_syntax any character-like data object or [standard table](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_table_glosry.htm "Glossary Entry") with character-like line type can be specified that, when the statement is executed and with the following exceptions, contains the syntax of a logical expression in accordance with the rules of the static WHERE condition or is initial. The following are not supported in a dynamic WHERE condition:

-   [String expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_expression_glosry.htm "Glossary Entry")
-   [String functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstring_function_glosry.htm "Glossary Entry") and [bit functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbit_function_glosry.htm "Glossary Entry")
-   [Time stamp functions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentimestamp_function_glosry.htm "Glossary Entry") with the exception of utclong\_current
-   [Constructor expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenconstructor_expression_glosry.htm "Glossary Entry")
-   [Table expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_expression_glosry.htm "Glossary Entry")

The syntax in cond\_syntax is not case-sensitive as in the static syntax. When an internal table is specified, the syntax can be distributed across multiple lines. If cond\_syntax is initial when the statement is executed, the logical expression is true. Invalid logical expressions raises an exception from the class CX\_SY\_ITAB\_DYN\_LOOP.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenescape_functions.htm). See [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendynamic_programming_scrty.htm).

Hint

The dynamic WHERE condition is not evaluated for an empty table for optimization reasons. Therefore, if an internal table is empty, and a logical expression has errors, no exception is raised.

Example

Reading of lines with certain line numbers in the primary table index that meet a condition. Demonstration of the static and dynamic declaration of a WHERE condition.

DATA: BEGIN OF line,
         col1 TYPE i,
         col2 TYPE i,
      END OF line.
DATA itab LIKE SORTED TABLE OF line WITH UNIQUE KEY table\_line.
DATA output TYPE TABLE OF string WITH EMPTY KEY.
DATA num TYPE i VALUE 400.
DATA dref TYPE REF TO i.
DATA cond TYPE string.
itab = VALUE #( FOR j = 1 UNTIL j > 30
                  ( col1 = j
                    col2 = j \*\* 2 ) ).
dref = REF #( num ).
LOOP AT itab INTO line FROM 10 TO 25 WHERE col2 > dref->\*.
  APPEND CONV string( line-col2 ) TO output.
ENDLOOP.
APPEND INITIAL LINE TO output.
cond = 'col2 > dref->\*'.
LOOP AT itab INTO line FROM 10 TO 25 WHERE (cond).
  APPEND CONV string( line-col2 ) TO output.
ENDLOOP.
cl\_demo\_output=>display\_data( output ).

Continue
![Example](exa.gif "Example") [itab - Loop with Key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_at_itab_key_abexa.htm)
![Example](exa.gif "Example") [itab - Loop with Step Size](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_at_itab_step_abexa.htm)
![Example](exa.gif "Example") [itab - STEP Examples](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenloop_step_examples_abexa.htm)