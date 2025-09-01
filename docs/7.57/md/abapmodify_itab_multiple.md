  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables (itab)](javascript:call_link\('abenitab.htm'\)) →  [itab - Processing Statements](javascript:call_link\('abentable_processing_statements.htm'\)) →  [MODIFY itab](javascript:call_link\('abapmodify_itab.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: MODIFY itab, itab_lines, ABAPMODIFY_ITAB_MULTIPLE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%
0D%0A%0D%0ASuggestion for improvement:)

MODIFY itab, itab\_lines

[Short Reference](javascript:call_link\('abapmodify_itab_shortref.htm'\))

Syntax

... itab FROM wa *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]*
         TRANSPORTING [comp1](javascript:call_link\('abenitab_components.htm'\)) [comp2](javascript:call_link\('abenitab_components.htm'\)) ... WHERE [log\_exp](javascript:call_link\('abenlogexp.htm'\))*|*(cond\_syntax).

Additions:

[1\. ... WHERE log\_exp](#!ABAP_ADDITION_1@1@)
[2\. ... USING KEY keyname](#!ABAP_ADDITION_2@2@)
[3\. ... WHERE (cond\_syntax)](#!ABAP_ADDITION_3@3@)

Effect

In this variant, the statement MODIFY assigns the content of the components comp1 comp2 ... of the work area wa specified after TRANSPORTING to all lines of the table itab that meet the condition after WHERE. wa is a [functional operand position](javascript:call_link\('abenfunctional_position_glosry.htm'\) "Glossary Entry"). The work area wa must be [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") with the line type of the internal table.

The addition TRANSPORTING has the same effect as [changing individual lines](javascript:call_link\('abapmodify_itab_single.htm'\)). The addition WHERE can only be specified together with the addition TRANSPORTING.

Hint

Outside of classes, an [obsolete short form](javascript:call_link\('abenitab_short_forms.htm'\)) is possible where FROM wa can be omitted if the internal table has an identically named [header line](javascript:call_link\('abenheader_line_glosry.htm'\) "Glossary Entry") itab. The statement then uses the header line as the work area implicitly. Furthermore, USING KEY cannot be specified without FROM wa.

Addition 1   

... WHERE log\_exp

Effect

Static WHERE condition. All lines are processed for which the condition after WHERE is met. If a static WHERE condition is specified, the line type of the internal table must be known statically. WHERE can be specified for all table categories.

A [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can be specified after WHERE, in which the first operand of each [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") is a [component](javascript:call_link\('abenitab_components.htm'\)) of the internal table. The following can be specified as relational expressions:

-   All [comparison expressions](javascript:call_link\('abenlogexp_comp.htm'\))
-   The following [predicate expressions](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry"):
    -   [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenlogexp_initial.htm'\))
    -   [IS *\[*NOT*\]* BOUND](javascript:call_link\('abenlogexp_bound.htm'\))
    -   [IS *\[*NOT*\]* INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\))

No other [predicates](javascript:call_link\('abenpredicate.htm'\)) can be specified. The components of the internal table must be specified as individual operands and not as part of an expression. Parenthesized character-like data objects cannot be used to specify a component dynamically here. The remaining operands of a relational expression are [general expression positions](javascript:call_link\('abengeneral_expression_positions.htm'\)) at which any [suitable](javascript:call_link\('abenlogexp_rules.htm'\)) individual operands or [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") can be specified, but no components of the internal table. The specified components can have any data type. The corresponding [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) apply to the evaluation. Here, a different [rule](javascript:call_link\('abenlogexp_rules_expr_char.htm'\)) applies to a string expression on the right side than to general logical expressions.

-   When [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") are accessed without a secondary key specification, the access is not optimized. This means that all lines of the internal table are checked for the logical expression of the WHERE addition.
-   When using a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry"), that is, when accessing a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"), or a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry"), an attempt is made to optimize the access as described under [Optimization of the WHERE Condition](javascript:call_link\('abenitab_where_optimization.htm'\)). If the corresponding prerequisites are not met:
    
    -   the entire logical expression or a part of it can be transformed into a key access,
    -   the transformable part of the logical expression has the same result as the resulting key access,
    
    No optimization takes place when a sorted table or a hashed table is accessed using the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") and access using a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") produces a syntax error or exception. In the part of the logical expression that is relevant for the optimization, the static WHERE condition cannot contain any duplicate or overlapping key specifications. Duplicate key components can, however, be specified in the part of the logical expression whose relational expressions do not make a contribution to the optimized access.
    

Hints

-   When using a WHERE condition, it should be noted that the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) for incompatible data types apply when comparing incompatible data objects. Here, the data types involved determine which operand is converted. If the additions [WITH TABLE KEY](javascript:call_link\('abapread_table_key.htm'\)) and [WITH KEY](javascript:call_link\('abapread_table_free.htm'\)) of the statement READ are used or if the corresponding [keys are specified](javascript:call_link\('abentable_exp_itab_line.htm'\)) in [table expressions](javascript:call_link\('abentable_expressions.htm'\)), however, the content of the specified data objects is always converted to the data type of the columns before the comparison, which can produce varying results.
-   The difference between comparison rules in a WHERE condition and conversion rules when reading individual lines is particularly significant for [enumerated types](javascript:call_link\('abenenumerated_type_glosry.htm'\) "Glossary Entry") for which the comparison rules are more restrictive than conversion rules. [Conversions](javascript:call_link\('abenconversion_enumerated.htm'\)) of an enumerated object to a character-like type produce a message from the extended program check.
-   If possible, all operands of the logical expression should be in [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") pairs, so that the [WHERE condition can be optimized](javascript:call_link\('abenitab_where_optimization.htm'\)).
-   If a comparison expression with a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") is specified after [IN](javascript:call_link\('abenlogexp_select_option.htm'\)) as a logical expression, the expression for the initial table is always true and then all lines are then processed.

Example

In the column col2 of the internal table itab, the MODIFY statement replaces every negative value with the number 0.

TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 1,
    col2 TYPE i,
  END OF line.
DATA itab TYPE SORTED TABLE OF line
               WITH UNIQUE KEY col1.
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 20 ).
itab = VALUE #( FOR i = 1 UNTIL i > 26
                ( col1 = substring( val = sy-abcde
                                    off = i - 1
                                    len = 1 )
                                    col2 = rnd->get\_next( ) - 10 ) ).
MODIFY itab FROM VALUE line( col2 = 0 ) TRANSPORTING col2
            WHERE col2 < 0.

Addition 2   

... USING KEY keyname

Effect

The addition USING KEY can be used to specify a table key in [keyname](javascript:call_link\('abenkeyname.htm'\)) with which the processing is executed. The specified table key affects the order in which the table lines are accessed, and the evaluation of the remaining conditions.

If the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is specified, the processing behaves in the same way as if no key were explicitly specified. If a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is specified, the order in which the lines are accessed is as follows:

-   [Specification of a sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry")
    
    The lines are processed by ascending line number in the [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry")
    
-   [Specification of a hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry")
    
    The lines are processed in the order in which they were inserted into the table.
    

Hints

-   Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement SORT has no effect on the processing order when a secondary hash key is specified.
-   If a secondary table key is specified, any WHERE condition must be [optimizable](javascript:call_link\('abenitab_where_optimization.htm'\)). Otherwise a syntax error occurs, or an exception is raised.

Example

In the internal table itab, the MODIFY statement replaces the value in the column col1 with "\_" if the column col2 contains the value 0. The WHERE condition is evaluated in an optimized way using the secondary key mkey.

TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 1,
    col2 TYPE i,
  END OF line.
DATA itab TYPE TABLE OF line
               WITH EMPTY KEY
               with NON-UNIQUE SORTED KEY mkey COMPONENTS col2.
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 10 ).
itab = VALUE #( FOR i = 1 UNTIL i > 26
                ( col1 = substring( val = sy-abcde
                                    off = i - 1
                                    len = 1 )
                                    col2 = rnd->get\_next( ) - 5 ) ).
MODIFY itab FROM VALUE line( col1 = '\_' ) USING KEY mkey
            TRANSPORTING col1 WHERE col2 = 0.

Addition 3   

... WHERE (cond\_syntax)

Effect

Dynamic WHERE condition. For cond\_syntax any character-like data object or [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with character-like line type can be specified that, when the statement is executed and with the following exceptions, contains the syntax of a logical expression in accordance with the rules of the static WHERE condition or is initial. The following are not supported in a dynamic WHERE condition:

-   [String expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry")
-   [String functions](javascript:call_link\('abenstring_function_glosry.htm'\) "Glossary Entry") and [bit functions](javascript:call_link\('abenbit_function_glosry.htm'\) "Glossary Entry")
-   [Time stamp functions](javascript:call_link\('abentimestamp_function_glosry.htm'\) "Glossary Entry") with the exception of utclong\_current
-   [Constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry")
-   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")

The syntax in cond\_syntax is not case-sensitive as in the static syntax. When an internal table is specified, the syntax can be distributed across multiple lines. If cond\_syntax is initial when the statement is executed, the logical expression is true. Invalid logical expressions raises an exception from the class CX\_SY\_ITAB\_DYN\_LOOP.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)).

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
FINAL(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 20 ).
itab = VALUE #( FOR i = 1 UNTIL i > 26
                ( col1 = substring( val = sy-abcde
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