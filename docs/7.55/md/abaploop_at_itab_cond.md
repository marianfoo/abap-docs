  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_processing_statements.htm) →  [LOOP AT itab](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_variants.htm) →  [LOOP AT itab, Basic Form](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm) → 

LOOP AT itab, cond

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab_shortref.htm)

Syntax

... *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkeyname.htm)*\]*
    *\[*FROM idx1*\]* *\[*TO idx2*\]*
    *\[*WHERE [log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm)*|*(cond\_syntax)*\]* ...

Additions:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*FROM idx1*\]* *\[*TO idx2*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... WHERE log\_exp](#!ABAP_ADDITION_3@3@)
[4\. ... WHERE (cond\_syntax)](#!ABAP_ADDITION_4@4@)

Effect

USING KEY [keyname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkeyname.htm) is used to determine the table key with which the loop is executed. The table lines to be read in a LOOP loop can also be limited using optional conditions. If no conditions are specified, all table lines are read.

Within the loop, the key used can be addressed using the predefined name loop\_key. This is possible in all statements where the table key [keyname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkeyname.htm) to be used and can be specified explicitly. This type of statement must then be listed in the loop itself. Including the statement in a procedure that is called in the loop is not sufficient.

Addition 1

... USING KEY keyname

Effect

The addition USING KEY can be used to specify a table key [keyname](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenkeyname.htm) with which the processing is executed. The specified table key affects the order in which the table lines are accessed, and the evaluation of the remaining conditions.

If the [primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified using its name primary\_key, the processing behaves in the same way as if no key were explicitly specified. If a [secondary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is specified, the order in which the lines are accessed is as follows:

-   [Specification of a sorted key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensorted_key_glosry.htm "Glossary Entry")
    The lines are processed by ascending line number in the [secondary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_index_glosry.htm "Glossary Entry") In each loop pass, the system field sy-tabix contains the line number of the current line in the associated secondary table index.
    

-   [Specification of a hash key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhash_key_glosry.htm "Glossary Entry")
    The lines are processed in the order in which they were inserted into the table. In each loop pass, the system field sy-tabix contains the value 0.

Hints

-   Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement SORT has no affect on the processing order when a secondary hash key is specified.

-   If a secondary table key is specified, a WHERE condition also specified must be [optimizable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_where_optimization.htm), otherwise a syntax error occurs or an exception is raised.
    

Example

The example demonstrates the difference between loops across a standard table of random numbers with and without a sorted secondary table key specification. The first loop returns the lines in the order in which they were appended. The second loop returns the lines sorted in ascending order.

DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 100 ).
DATA itab TYPE STANDARD TABLE OF i WITH EMPTY KEY
          WITH NON-UNIQUE SORTED KEY key COMPONENTS table\_line.
itab = VALUE #( FOR i = 1 UNTIL i > 10 ( rnd->get\_next( ) ) ).
DATA output1 TYPE TABLE OF i WITH EMPTY KEY.
LOOP AT itab INTO DATA(number1).
  output1 = VALUE #( BASE output1 ( number1 ) ).
ENDLOOP.
cl\_demo\_output=>write( output1 ).
DATA output2 TYPE TABLE OF i WITH EMPTY KEY.
LOOP AT itab INTO DATA(number2) USING KEY key.
  output2 = VALUE #( BASE output2 ( number2 ) ).
ENDLOOP.
cl\_demo\_output=>display( output2 ).

Executable Example

[Loop Across Internal Table with Key Specified](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenloop_at_itab_key_abexa.htm)

Addition 2

... *\[*FROM idx1*\]* *\[*TO idx2*\]*

Effect

These additions cause only the table lines from line number idx1, or up to line number idx2 to be respected in the table index used. If only FROM is specified, all lines of the table from line number idx1 up to and including the last line are respected. If only TO is specified, all lines in the table from the first line up to line number idx2 are respected.

If the addition USING KEY is not used, or the [primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified in keyname, the additions FROM and TO can only be used for [index tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenindex_table_glosry.htm "Glossary Entry") and refer to the line numbers of the [primary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_index_glosry.htm "Glossary Entry").

If a [sorted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensorted_key_glosry.htm "Glossary Entry") [secondary key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is specified in keyname after USING KEY, the additions FROM and TO can be used for all table categories and refer to the line numbers of the [secondary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").

idx1 and idx2 are [numeric expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i. The following restrictions apply:

-   If the value of idx1 is less than or equal to 0, it is set to 1 in the statement LOOP. If the value of idx1 is greater than the total number of table lines, no processing takes place.
    

-   If the value of idx2 is less than or equal to 0, the statement LOOP is not executed. If the value of idx2 is greater than the number of table lines, it is set to the number of table lines.
    

-   If the value of idx2 is less than the value of idx1, no processing takes place.

The value of idx1 is evaluated once when the loop is entered. Any changes to idx1 during loop processing are ignored. In contrast, the value of idx2 is evaluated in each loop pass and any changes made to idx2 during loop processing are respected.

Hint

To determine when loop processing is exited and whether the value specified in idx2 has been reached, the current line number is evaluated. Note that this number can be changed if lines are inserted or deleted during a loop pass as described in [LOOP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaploop_at_itab.htm). When lines are inserted, the loop may be processed less often and when lines are deleted, it may be processed more often than specified by the difference between idx2 and idx1.

Example

Determination of the primary index of a particular table line using the built-in function [line\_index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_index_function.htm) and a loop across the internal table from this line.

DATA itab TYPE SORTED TABLE OF scarr
               WITH UNIQUE KEY carrid.
SELECT \*
       FROM scarr
       INTO TABLE itab.
DATA(idx) = line\_index( itab\[ carrid = 'LH' \] ).
IF idx = 0.
  RETURN.
ENDIF.
LOOP AT itab FROM idx ASSIGNING FIELD-SYMBOL(<fs>).
  ...
ENDLOOP.

Addition 3

... WHERE log\_exp

Effect

Static WHERE condition. All lines are processed for which the condition after WHERE is met. If a static WHERE condition is specified, the line type of the internal table must be known statically. WHERE can be specified for all table categories.

A [logical expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_expression_glosry.htm "Glossary Entry") [log\_exp](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp.htm) can be specified after WHERE, in which the first operand of each [relational expression](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrelational_expression_glosry.htm "Glossary Entry") is a [component](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_components.htm) of the internal table. The following can be specified as relational expressions:

-   All [comparison expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_comp.htm)

-   The following [predicate expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate_expression_glosry.htm "Glossary Entry"):

-   [IS *\[*NOT*\]* INITIAL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_initial.htm)

-   [IS *\[*NOT*\]* BOUND](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_bound.htm)

-   [IS *\[*NOT*\]* INSTANCE OF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_instance_of.htm)

No other [predicates](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpredicate.htm) can be specified. The components of the internal table must be specified as individual operands and not as part of an expression. Parenthesized character-like data objects cannot be used to specify a component dynamically here. The remaining operands of a relational expression are [general expression positions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abengeneral_expression_positions.htm) at which any [suitable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules.htm) individual operands or [expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexpression_glosry.htm "Glossary Entry") can be specified, but no components of the internal table. The specified components can have any data type. The corresponding [comparison rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules.htm) apply to the evaluation. Here, a different [rule](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules_expr_char.htm) applies to a string expression on the right side than to general logical expressions.

-   When [standard tables](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") are accessed without a secondary key specification, the access is not optimized. This means that all lines of the internal table are checked for the logical expression of the WHERE addition.

-   When using a [sorted key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensorted_key_glosry.htm "Glossary Entry") or a [hash key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhash_key_glosry.htm "Glossary Entry"), that is, when accessing a [sorted table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensorted_table_glosry.htm "Glossary Entry"), a [hashed table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhashed_table_glosry.htm "Glossary Entry"), or a [secondary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"), an attempt is made to optimize the access as described under [Optimization of the WHERE Condition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_where_optimization.htm). If the corresponding prerequisites are not met:

-   the entire logical expression or a part of it can be transformed into a key access,

-   the transformable part of the logical expression has the same result as the resulting key access,

no optimization takes place when a sorted table or a hashed table is accessed using the [primary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") and access using a [secondary table key](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") produces a syntax error or exception. In the part of the logical expression that is relevant for the optimization, the static WHERE condition cannot must not contain any duplicate or overlapping key specifications. Duplicate key components can, however, be specified in the part of the logical expression whose relational expressions do not make a contribution to the optimized access.

Hints

-   When using a WHERE condition, it should be noted that the [comparison rules](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_rules.htm) for incompatible data types apply when comparing incompatible data objects. Here, the data types involved determine which operand is converted. If the additions [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_key.htm) and [WITH KEY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_table_free.htm) of the statement READ are used or if the corresponding [keys are specified](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_exp_itab_line.htm) in [table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expressions.htm), however, the content of the specified data objects is always converted to the data type of the columns before the comparison, which can produce varying results.

-   The difference between comparison rules in a WHERE condition and conversion rules when reading individual lines is particularly significant for [enumerated types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenenumerated_type_glosry.htm "Glossary Entry") for which the comparison rules are more restrictive than conversion rules. [Conversions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_enumerated.htm) of an enumerated object to a character-like type produce a message from the extended program check.

-   If possible, all operands of the logical expression should be in [compatible](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompatible_glosry.htm "Glossary Entry") pairs, so that the [WHERE condition can be optimized](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenitab_where_optimization.htm).

-   If a comparison expression with a [ranges table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenranges_table_glosry.htm "Glossary Entry") is specified after [IN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_select_option.htm) as a logical expression, the expression for the initial table is always true and then all lines are then processed.
    

-   The logical expression specified after WHERE is evaluated once when the loop is entered. Any changes to the second operand during loop processing are ignored.
    

Example

The following example demonstrates the differences in behavior of a WHERE condition and a key access with WITH TABLE KEY. In LOOP AT itab WHERE, the rule for the [comparison of character-like data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_character.htm) applies. The short column content "AA" is first padded with blanks to bring the length to 4 and then compared to "AAXX". No matching line is found. With READ TABLE itab WITH TABLE KEY, the content of text\_long is [converted](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconversion_type_c.htm) to the value "AA" before the comparison, by cutting off two characters, and then compared to the column content. The read is therefore successful.

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

Addition 4

... WHERE (cond\_syntax)

Effect

Dynamic WHERE condition. For cond\_syntax any character-like data object or [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") with character-like line type that, when the statement is executed and with the following exceptions, contains the syntax of a logical expression in accordance with the rules of the static WHERE condition or is initial can be specified. The following are not supported in a dynamic WHERE condition:

-   [String expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbit_expression_glosry.htm "Glossary Entry")

-   [String functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstring_function_glosry.htm "Glossary Entry") and [bit functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbit_function_glosry.htm "Glossary Entry")

-   [Time stamp functions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentimestamp_function_glosry.htm "Glossary Entry") with the exception of utclong\_current

-   [Constructor expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenconstructor_expression_glosry.htm "Glossary Entry")

-   [Table expressions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_expression_glosry.htm "Glossary Entry")

The syntax in cond\_syntax is not case-sensitive as in the static syntax. When an internal table is specified, the syntax can be distributed across multiple lines. If cond\_syntax is initial when the statement is executed, the logical expression is true. Invalid logical expressions raises an exception from the class CX\_SY\_ITAB\_DYN\_LOOP.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or masked before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenescape_functions.htm). See [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynamic_programming_scrty.htm).

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