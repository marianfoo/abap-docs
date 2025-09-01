  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_data_working.htm) →  [Internal Tables (itab)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab.htm) →  [itab - Processing Statements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentable_processing_statements.htm) →  [MODIFY itab](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20MODIFY%20itab%2C%20itab_lines%2C%20ABAPMODIFY_ITAB_MULTIPLE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

MODIFY itab, itab\_lines

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_shortref.htm)

Syntax

... itab FROM wa *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm)*\]*
         TRANSPORTING [comp1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm) [comp2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_components.htm) ... WHERE [log\_exp](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogexp.htm)*|*(cond\_syntax).

Additions:

[1\. ... WHERE log\_exp](#!ABAP_ADDITION_1@1@)
[2\. ... USING KEY keyname](#!ABAP_ADDITION_2@2@)
[3\. ... WHERE (cond\_syntax)](#!ABAP_ADDITION_3@3@)

Effect

In this variant, the statement MODIFY assigns the content of the components comp1 comp2 ... of the work area wa specified after TRANSPORTING to all lines of the table itab that meet the condition after WHERE. wa is a [functional operand position](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The work area wa must be [compatible](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencompatible_glosry.htm "Glossary Entry") with the line type of the internal table.

The addition TRANSPORTING has the same effect as [changing individual lines](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapmodify_itab_single.htm). The addition WHERE can only be specified together with the addition TRANSPORTING.

Hint

Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_short_forms.htm) is possible where FROM wa can be omitted if the internal table has an identically named [header line](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenheader_line_glosry.htm "Glossary Entry") itab. The statement then uses the header line as the work area implicitly. Furthermore, USING KEY cannot be specified without FROM wa.

Addition 1   

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

Example

In the column col2 of the internal table itab, the MODIFY statement replaces every negative value with the number 0.

TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 1,
    col2 TYPE i,
  END OF line.
DATA itab TYPE SORTED TABLE OF line
               WITH UNIQUE KEY col1.
FINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ).
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t )
                                        min  = 1
                                        max  = 20 ).
FINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`.
itab = VALUE #( FOR i = 1 UNTIL i > 26
                ( col1 = substring( val = abcde
                                    off = i - 1
                                    len = 1 )
                                    col2 = rnd->get\_next( ) - 10 ) ).
MODIFY itab FROM VALUE line( col2 = 0 ) TRANSPORTING col2
            WHERE col2 < 0.

Addition 2   

... USING KEY keyname

Effect

The addition USING KEY can be used to specify a table key in [keyname](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenkeyname.htm) with which the processing is executed. The specified table key affects the order in which the table lines are accessed, and the evaluation of the remaining conditions.

If the [primary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified, the processing behaves in the same way as if no key were explicitly specified. If a [secondary table key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is specified, the order in which the lines are accessed is as follows:

-   Specification of a [sorted key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensorted_key_glosry.htm "Glossary Entry")
    
    The lines are processed by ascending line number in the [secondary table index](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_table_index_glosry.htm "Glossary Entry")
    
-   Specification of a [hash key](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhash_key_glosry.htm "Glossary Entry")
    
    The lines are processed in the order in which they were inserted into the table.
    

Hints

-   Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement SORT has no effect on the processing order when a secondary hash key is specified.
-   If a secondary table key is specified, any WHERE condition must be [optimizable](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenitab_where_optimization.htm). Otherwise a syntax error occurs, or an exception is raised.

Example

In the internal table itab, the MODIFY statement replaces the value in the column col1 with \_ if the column col2 contains the value 0. The WHERE condition is evaluated in an optimized way using the secondary key mkey.

TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 1,
    col2 TYPE i,
  END OF line.
DATA itab TYPE TABLE OF line
               WITH EMPTY KEY
               WITH NON-UNIQUE SORTED KEY mkey COMPONENTS col2.
FINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ).
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t )
                                        min  = 1
                                        max  = 10 ).
FINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`.
itab = VALUE #( FOR i = 1 UNTIL i > 26
                ( col1 = substring( val = abcde
                                    off = i - 1
                                    len = 1 )
                                    col2 = rnd->get\_next( ) - 5 ) ).
MODIFY itab FROM VALUE line( col1 = '\_' ) USING KEY mkey
            TRANSPORTING col1 WHERE col2 = 0.

Addition 3   

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

Like the example for static WHERE conditions, but with a condition for the column col2 that can be entered dynamically.

DATA condition TYPE string VALUE '< 0'.
cl\_demo\_input=>request( CHANGING field = condition ).
condition = \`col2 \` && condition.
TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 1,
    col2 TYPE i,
  END OF line.
DATA itab TYPE SORTED TABLE OF line
               WITH UNIQUE KEY col1.
FINAL(t) = cl\_demo\_date\_time=>get\_utc\_time( ).
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = CONV i( t )
                                         min  = 1
                                         max  = 20 ).
FINAL(abcde) = \`abcdefghijklmnopqrstuvwxyz\`.
itab = VALUE #( FOR i = 1 UNTIL i > 26
                ( col1 = substring( val = abcde
                                    off = i - 1
                                    len = 1 )
                                    col2 = rnd->get\_next( ) - 10 ) ).
TRY.
    MODIFY itab FROM VALUE line( col2 = 0 ) TRANSPORTING col2
                WHERE (condition).
    cl\_demo\_output=>display( itab ).
  CATCH cx\_sy\_itab\_dyn\_loop INTO FINAL(exc).
    ...
ENDTRY.