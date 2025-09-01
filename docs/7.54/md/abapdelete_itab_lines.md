  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [DELETE itab](javascript:call_link\('abapdelete_itab.htm'\)) → 

DELETE itab - itab\_lines

[Quick Reference](javascript:call_link\('abapdelete_itab_shortref.htm'\))

Syntax

... itab *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]* *\[*FROM idx1*\]* *\[*TO idx2*\]*
                             *\[*WHERE [log\_exp](javascript:call_link\('abenlogexp.htm'\))*|*(cond\_syntax)*\]* ...

Extras:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*FROM idx1*\]* *\[*TO idx2*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... WHERE log\_exp](#!ABAP_ADDITION_3@3@)
[4\. ... WHERE (cond\_syntax)](#!ABAP_ADDITION_4@4@)

Effect

To delete more than one row, at least one of the additions FROM, TO, or WHERE must be specified. USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\)) is used to determine the table key to which the additions refer.

If you specify more than one of the additions, those rows are deleted that result from the intersection of the individual additions.

Addition 1

... USING KEY keyname

Effect

The USING KEY addition can be used to specify a table key in [keyname](javascript:call_link\('abenkeyname.htm'\)) used to carry out the processing. The specified table key influences the order in which the table rows are accessed, and the evaluation of the remaining conditions.

If the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is specified, the processing behaves in the same way as when no key is explicitly specified. If a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is specified, the order in which the rows are accessed is as follows:

-   [Sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") specified
    The rows are processed by ascending row number in the [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry")
    
-   [Hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") specified
    The rows are processed in the order in which they were inserted into the table.
    

Notes

-   Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement SORT has no influence on the processing order when a secondary hash key is specified.
    
-   If a secondary table key is specified, any WHERE condition also specified must be [optimizable](javascript:call_link\('abenitab_where_optimization.htm'\)). Otherwise a syntax error occurs or an exception is raised.
    

Example

The statement DELETE deletes the first three rows of the internal table itab because they occur from row 4 in the secondary table index of the secondary key skey.

DATA itab TYPE TABLE OF i WITH EMPTY KEY
          WITH UNIQUE SORTED KEY skey COMPONENTS table\_line.
itab = VALUE #( ( 6 ) ( 5 ) ( 4 ) ( 3 ) ( 2 ) ( 1 ) ).
DELETE itab USING KEY skey FROM 4.

Addition 2

... *\[*FROM idx1*\]* *\[*TO idx2*\]*

Effect

If these additions are used, only the table rows from row number idx1, or up to row number idx2, are respected if the table index used. If only FROM is specified, all rows of the table from row number idx1 up to and including the last row are taken into account. If only TO is specified, all rows in the table from the first row up to row number idx2 are respected.

If the addition USING KEY is not used, or the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is specified in keyname, the additions FROM and TO can only be used for [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry"). In this case, they refer to the row numbers of the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry").

If a [sorted](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") [secondary key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is specified in keyname after USING KEY, the additions FROM and TO can be used for all table categories and refer to the row numbers of the [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry").

idx1 and idx2 are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i. The following restrictions apply:

-   If the value of idx1 is less than or equal to 0, a runtime error occurs. If the value of idx1 is greater than the total number of table rows, no processing takes place.
    
-   If the value of idx2 is less than or equal to 0, a runtime error occurs. If the value of idx2 is greater than the number of table rows, it is set to the number of table rows.
    
-   If the value of idx2 is less than the value of idx1, no processing takes place.
    

Note

The statement DELETE FROM itab has the statement [DELETE FROM dbtab](javascript:call_link\('abapdelete_dbtab.htm'\)) with identical syntax. If an internal table has the same name as a database table, a statement like this accesses the internal table.

Example

Deletes all rows in an internal table from row 4. The result is the same as in the example for [APPEND ...](javascript:call_link\('abapappend.htm'\)). [SORTED BY](javascript:call_link\('abapappend.htm'\)).

DATA: carrid TYPE sflight-carrid VALUE 'LH',
      connid TYPE sflight-connid VALUE '0400'.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = carrid
  )->add\_field( CHANGING field = connid )->request( ).
DATA: BEGIN OF seats,
        fldate TYPE sflight-fldate,
        seatsocc TYPE sflight-seatsocc,
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

... WHERE log\_exp

Effect

Static WHERE condition. All rows are processed for which the condition after WHERE is met. If a static WHERE condition is specified, the row type of the internal table must be known statically. WHERE can be specified for all table categories.

A [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can be specified after WHERE, in which the first operand of each [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") is a [component](javascript:call_link\('abenitab_components.htm'\)) of the internal table. The following can be specified as relational expressions:

-   All [comparison expressions](javascript:call_link\('abenlogexp_comp.htm'\))
    
-   The following [predicate expressions](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry"):
    

-   [IS *\[*NOT*\]* INITIAL](javascript:call_link\('abenlogexp_initial.htm'\))

-   [IS *\[*NOT*\]* BOUND](javascript:call_link\('abenlogexp_bound.htm'\))

-   [IS *\[*NOT*\]* INSTANCE OF](javascript:call_link\('abenlogexp_instance_of.htm'\))

No other [predicates](javascript:call_link\('abenpredicate.htm'\)) can be specified. The components of the internal table must be specified as individual operands and not as part of an expression. You cannot use parenthesized character-like data objects to specify a component dynamically here. The remaining operands of a relational expression are [general expression positions](javascript:call_link\('abengeneral_expression_positions.htm'\)) at which any [suitable](javascript:call_link\('abenlogexp_rules.htm'\)) individual operands or [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") can be specified, but no components of the internal table. The specified components can have any data type. The usual [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) apply to the evaluation. Here, a different [rule](javascript:call_link\('abenlogexp_rules_expr_char.htm'\)) applies to a string expression on the right side than to general logical expressions.

-   When [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") are accessed without a secondary key being specified, the access is not optimized. This means that all rows of the internal table are tested for the logical expression of the WHERE addition.

-   When using a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") (that is, when accessing a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"), or a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry")), an attempt is made to optimize the access as described under [Optimization of the WHERE Condition](javascript:call_link\('abenitab_where_optimization.htm'\)). If the corresponding prerequisites are not met:

-   the entire logical expression (or a part of the expression) can be transformed to a key access,

-   the transformable part of the logical expression has the same result as the resulting key access,

no optimization takes place when a sorted table or a hashed table is accessed using the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"). Any access using a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") produces a syntax error or exception. In the part of the logical expression relevant for the optimization, the static WHERE condition cannot specify any duplicate or overlapping keys. Duplicate key components can, however, be specified in the part of the logical expression whose relational expressions do not make a contribution to the optimized access.

Notes

-   When using a WHERE condition, note that the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) for incompatible data types apply when comparing incompatible data objects. Here, the data types involved determine which operand is converted. If the additions [WITH TABLE KEY](javascript:call_link\('abapread_table_key.htm'\)) and [WITH KEY](javascript:call_link\('abapread_table_free.htm'\)) of the statement READ are used or if the appropriate [keys are specified](javascript:call_link\('abentable_exp_itab_line.htm'\)) in [table expressions](javascript:call_link\('abentable_expressions.htm'\)), however, the content of the specified data objects is always converted to the data type of the columns before the comparison. This can produce varying results.
    
-   If possible, all operands of the logical expression should be in [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") pairs, so enabling the [WHERE condition to be optimized](javascript:call_link\('abenitab_where_optimization.htm'\)).
    
-   If a comparison expression with a [ranges table](javascript:call_link\('abenranges_table_glosry.htm'\) "Glossary Entry") is specified after [IN](javascript:call_link\('abenlogexp_select_option.htm'\)) as a logical expression, note that the expression at the initial table is always true and then all rows are edited.
    
-   [Optimizations of the WHERE condition](javascript:call_link\('abenitab_where_optimization.htm'\)) affect searches for the rows to delete but do not affect, for example, updates of the primary index of a standard table.
    

Example

In two optimized DELETE statements, deletes a row using a fully specified unique primary table key and deletes multiple rows by specifying a non-unique secondary table key.

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

[Deleting Rows Using WHERE](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\))

Addition 4

... WHERE (cond\_syntax)

Effect

Dynamic WHERE condition. cond\_syntax can be specified as a character-like data object or [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with character-like row type that, when the statement is executed and with the following exceptions, contains the syntax of a logical expression (in accordance with the rules of the static WHERE condition) or is initial. The following are not supported in a dynamic WHERE condition:

-   [String expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry")
    
-   [String functions](javascript:call_link\('abenstring_function_glosry.htm'\) "Glossary Entry") and [bit functions](javascript:call_link\('abenbit_function_glosry.htm'\) "Glossary Entry")
    
-   [Time stamp functions](javascript:call_link\('abentimestamp_function_glosry.htm'\) "Glossary Entry") with the exception of utclong\_current
    
-   [Constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry")
    
-   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")
    

The syntax in cond\_syntax is not case-sensitive (as in the static syntax). When an internal table is specified, the syntax can be distributed across multiple rows. If cond\_syntax is initial when the statement is executed, the logical expression is true. Invalid logical expressions raises an exception from the class CX\_SY\_ITAB\_DYN\_LOOP.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)).

Note

The dynamic WHERE condition is not evaluated for a blank table for optimization reasons. Therefore, if an internal table is blank, and a logical expression has errors, no exception is raised.

Example

Deletes the rows of n internal table using a condition that can be entered for the table rows.

DATA condition TYPE string VALUE '<= 0'.
cl\_demo\_input=>request( CHANGING field = condition ).
condition = \`table\_line \` && condition.
DATA itab TYPE TABLE OF i with EMPTY KEY
               WITH NON-UNIQUE sorted KEY skey COMPONENTS table\_line.
DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 20 ).
itab = VALUE #( FOR i = 1 UNTIL i > 100
                ( rnd->get\_next( ) - 10 ) ).
TRY.
    DELETE itab USING KEY skey WHERE (condition).
    cl\_demo\_output=>display( itab ).
  CATCH cx\_sy\_itab\_dyn\_loop INTO DATA(exc).
    ...
ENDTRY.

Continue
![Example](exa.gif "Example") [Internal Tables, Deleting Rows Using WHERE](javascript:call_link\('abendelete_itab_using_key_abexa.htm'\))