  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [DELETE itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DELETE%20itab%2C%20itab_lines%2C%20ABAPDELETE_ITAB_LINES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

DELETE itab, itab\_lines

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_itab_shortref.htm)

Syntax

... itab *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm)*\]* *\[*FROM idx1*\]* *\[*TO idx2*\]*
                             *\[*STEP n*\]**|**\[*WHERE [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm)*|*(cond\_syntax)*\]* ...

Additions:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*FROM idx1*\]* *\[*TO idx2*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... STEP n](#!ABAP_ADDITION_3@3@)
[4\. ... WHERE log\_exp](#!ABAP_ADDITION_4@4@)
[5\. ... WHERE (cond\_syntax)](#!ABAP_ADDITION_5@5@)

Effect

To delete multiple lines, at least one of the additions FROM, TO, STEP, or WHERE must be specified. USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) is used to determine the table key to which the additions refer.

If multiple additions are specified, the lines that result from the intersection of the individual additions are deleted.

Addition 1   

... USING KEY keyname

Effect

The addition USING KEY can be used to specify a table key in [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) with which the processing is executed. The specified table key affects the order in which the table lines are accessed, and the evaluation of the remaining conditions.

If the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified, the processing behaves in the same way as if no key were explicitly specified. If a [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is specified, the order in which the lines are accessed is as follows:

-   Specification of a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry")
    
    The lines are processed by ascending line number in the [secondary table index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_index_glosry.htm "Glossary Entry")
    
-   Specification of a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry")
    
    The lines are processed in the order in which they were inserted into the table.
    

Hints

-   Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement SORT has no affect on the processing order when a secondary hash key is specified.
-   If a secondary table key is specified, any WHERE condition also specified must be [optimizable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm). Otherwise a syntax error occurs, or an exception is raised.

Example

The statement DELETE deletes the first three lines of the internal table itab because they occur from line 4 in the secondary table index of the secondary key skey.

DATA itab TYPE TABLE OF i WITH EMPTY KEY
          WITH UNIQUE SORTED KEY skey COMPONENTS table\_line.
itab = VALUE #( ( 6 ) ( 5 ) ( 4 ) ( 3 ) ( 2 ) ( 1 ) ).
DELETE itab USING KEY skey FROM 4.

Addition 2   

... *\[*FROM idx1*\]* *\[*TO idx2*\]*

Effect

These optional additions have the effect that only table rows from row number idx1 or up to and including row number idx2 are respected in the table index used. The table index used is either the primary index or a secondary sorted index specified by USING KEY.

If only FROM is specified, all lines of the table from line number idx1 up to and including the last line are respected. If only TO is specified, all lines in the table from the first line up to line number idx2 are respected.

-   If the addition USING KEY is not used, or the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified in keyname, the additions FROM and TO can only be used for [index tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenindex_table_glosry.htm "Glossary Entry") and refer to the line numbers of the [primary table index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_index_glosry.htm "Glossary Entry").
-   If a [sorted](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry") [secondary key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is specified in keyname after USING KEY, the additions FROM and TO can be used for all table categories and refer to the line numbers of the [secondary table index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_index_glosry.htm "Glossary Entry").

idx1 and idx2 are [numeric expression positions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i.

The following restrictions apply:

-   If the value of idx1 is less than or equal to 0, a runtime error occurs. If the value of idx1 is greater than the total number of table lines, no processing takes place.
-   If the value of idx2 is less than or equal to 0, a runtime error occurs. If the value of idx2 is greater than the number of table lines, it is set to the number of table lines.
-   If the value of idx2 is less than the value of idx1, no processing takes place.

The additions FROM and TO can be specified together with STEP and then special rules apply.

Hint

The statement DELETE FROM itab has the statement [DELETE FROM dbtab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapdelete_dbtab.htm) with identical syntax. If an internal table has the same name as a database table, a statement like this accesses the internal table.

Example

Deletion of all lines in an internal table from line 4. The result is the same as in the example for [APPEND ...](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend.htm), [SORTED BY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapappend.htm).

DATA: carrid TYPE sflight-carrid VALUE 'LH',
      connid TYPE sflight-connid VALUE '0400'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = connid )->request( ).
DATA: BEGIN OF seats,
        fldate    TYPE sflight-fldate,
        seatsocc  TYPE sflight-seatsocc,
        seatsmax  TYPE sflight-seatsmax,
        seatsfree TYPE sflight-seatsocc,
      END OF seats.
DATA seats\_tab LIKE STANDARD TABLE OF seats.
SELECT fldate, seatsocc, seatsmax, seatsmax - seatsocc AS seatsfree
       FROM sflight
       WHERE carrid = @carrid AND
             connid = @connid
       INTO TABLE @seats\_tab.
SORT seats\_tab BY seatsfree DESCENDING.
DELETE seats\_tab FROM 4.
cl\_demo\_output=>display( seats\_tab ).

Addition 3   

... STEP n

Effect

The optional addition STEP n defines the step size for processing an internal table. The step size is defined by the value of n which must be positive. n is a [numeric expression position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abennumerical_expr_position_glosry.htm "Glossary Entry") of operand type i. If the addition STEP is not specified, the step size is 1.

The step size can be combined with the additions FROM and TO and then works on the subset of table lines defined by these conditions. If FROM idx1 and TO idx2 are combined with STEP, idx1 needs to be less than or equal to idx2.

Depending on the value of n, every nth line is processed. The value of n must not be 0. For more details, see [LOOP AT itab, cond](abaploop_at_itab_cond.htm#!ABAP_ADDITION_3@3@).

Hints

-   STEP n cannot be used in combination with WHERE.
-   In contrast to the [STEP](abaploop_at_itab_cond.htm#!ABAP_ADDITION_3@3@) addition for LOOP AT, the processing order cannot be changed by negative values of n here. The processing order is only defined by the table category or the addition USING KEY.
-   STEP n can, however, be positioned otherwise. Its use after FROM idx1 and TO idx2 is recommended.

Example

The following example shows that every second table line between line 1 and 8 is deleted from the internal table.

SELECT \*
       FROM spfli
       ORDER BY carrid
       INTO TABLE @DATA(itab).
DELETE itab FROM 1 TO 8 STEP 2.
cl\_demo\_output=>display( itab ).

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
-   [Optimizations of the WHERE condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm) affect searches for the lines to delete but do not affect, for example, updates of the primary index of a standard table.

Example

Optimized deletion of a line by specifying the unique primary table key and multiple lines by specifying a non-unique secondary table key in two DELETE statements.

DATA spfli\_tab TYPE SORTED TABLE OF spfli
     WITH UNIQUE KEY carrid connid
     WITH NON-UNIQUE SORTED KEY skey COMPONENTS cityfrom cityto.
SELECT \*
       FROM spfli
       INTO TABLE @spfli\_tab.
DELETE spfli\_tab WHERE carrid = 'LH' AND
                       connid = '0400'.
DELETE spfli\_tab USING KEY skey WHERE cityfrom = 'FRANKFURT' AND
                                      cityto   = 'NEW YORK'.

Executable Example

[Deleting Lines Using WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendelete_itab_using_key_abexa.htm)

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

Deletion of the lines of an internal table using a condition that can be entered for the table lines.

DATA condition TYPE string VALUE '<= 0'.
cl\_demo\_input=>request( CHANGING field = condition ).
condition = \`table\_line \` && condition.
DATA itab TYPE TABLE OF i WITH EMPTY KEY
               WITH NON-UNIQUE SORTED KEY skey COMPONENTS table\_line.
FINAL(t) = CONV i( cl\_demo\_date\_time=>get\_utc\_time( ) ).
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = t
                                         min  = 1
                                         max  = 20 ).
itab = VALUE #( FOR i = 1 UNTIL i > 100
                ( rnd->get\_next( ) - 10 ) ).
TRY.
    DELETE itab USING KEY skey WHERE (condition).
    cl\_demo\_output=>display( itab ).
  CATCH cx\_sy\_itab\_dyn\_loop INTO FINAL(exc).
    ...
ENDTRY.

Continue
![Example](exa.gif "Example") [itab - Deleting Lines Using WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendelete_itab_using_key_abexa.htm)