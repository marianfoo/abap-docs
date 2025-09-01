  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing Internal Data](javascript:call_link\('abenabap_data_working.htm'\)) →  [Internal Tables](javascript:call_link\('abenitab.htm'\)) →  [Processing Statements for Internal Tables](javascript:call_link\('abentable_processing_statements.htm'\)) →  [LOOP AT itab](javascript:call_link\('abaploop_at_itab_variants.htm'\)) →  [LOOP AT itab - Basic Form](javascript:call_link\('abaploop_at_itab.htm'\)) → 

LOOP AT itab - cond

[Quick Reference](javascript:call_link\('abaploop_at_itab_shortref.htm'\))

Syntax

... *\[*USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\))*\]*
    *\[*FROM idx1*\]* *\[*TO idx2*\]*
    *\[*WHERE [log\_exp](javascript:call_link\('abenlogexp.htm'\))*|*(cond\_syntax)*\]* ...

Extras:

[1\. ... USING KEY keyname](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*FROM idx1*\]* *\[*TO idx2*\]*](#!ABAP_ADDITION_2@2@)
[3\. ... WHERE log\_exp](#!ABAP_ADDITION_3@3@)
[4\. ... WHERE (cond\_syntax)](#!ABAP_ADDITION_4@4@)

Effect

USING KEY [keyname](javascript:call_link\('abenkeyname.htm'\)) is used to determine the table key with which the loop is executed. The table rows to be read in a LOOP loop can also be limited using optional conditions. If no conditions are declared, all table rows are read.

Within the loop, the key being used can be addressed using the predefined loop\_key. This is possible in all statements where the table key [keyname](javascript:call_link\('abenkeyname.htm'\)) is used and where it can be declared explicitly. This type of statement must then be executed in the loop itself. Including the statement in a procedure that is called in the loop is not sufficient.

Addition 1

... USING KEY keyname

Effect

The addition USING KEY can be used to specify a table key [keyname](javascript:call_link\('abenkeyname.htm'\)) with which the processing is carried out. The specified table key influences the order in which the table rows are accessed, and the evaluation of the remaining conditions.

If the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is specified using the name primary\_key, the processing behaves in the same way as when no key is explicitly specified. If a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is specified, the order in which the rows are accessed is as follows:

-   Specification of a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry")
    The rows are processed by ascending row number in the [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry") In each loop pass, the system field sy-tabix contains the row number of the current row in the associated secondary table index.
    
-   [Hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") specified
    The rows are processed in the order in which they were inserted into the table. In each loop pass, the system field sy-tabix contains the value 0.
    

Notes

-   Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement SORT has no influence on the processing order when a secondary hash key is specified.
    
-   If a secondary table key is specified, any WHERE condition also specified must be [optimizable](javascript:call_link\('abenitab_where_optimization.htm'\)). Otherwise a syntax error occurs or an exception is raised.
    

Example

The example demonstrates the difference between loops across a standard table of random numbers where a sorted secondary table key is specified and those where it is not. The first loop returns the rows in the order they were appended. The second loop returns the rows sorted in ascending order.

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

[Loop Across Internal Table with Key Specified](javascript:call_link\('abenloop_at_itab_key_abexa.htm'\))

Addition 2

... *\[*FROM idx1*\]* *\[*TO idx2*\]*

Effect

If these additions are used, only the table rows from row number idx1, or up to row number idx2, are respected if the table index used. If only FROM is specified, all rows of the table from row number idx1 up to and including the last row are taken into account. If only TO is specified, all rows in the table from the first row up to row number idx2 are respected.

If the addition USING KEY is not used, or the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry") is specified in keyname, the additions FROM and TO can only be used for [index tables](javascript:call_link\('abenindex_table_glosry.htm'\) "Glossary Entry"). In this case, they refer to the row numbers of the [primary table index](javascript:call_link\('abenprimary_table_index_glosry.htm'\) "Glossary Entry").

If a [sorted](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") [secondary key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is specified in keyname after USING KEY, the additions FROM and TO can be used for all table categories and refer to the row numbers of the [secondary table index](javascript:call_link\('abensecondary_table_index_glosry.htm'\) "Glossary Entry").

idx1 and idx2 are [numeric expression positions](javascript:call_link\('abennumerical_expr_position_glosry.htm'\) "Glossary Entry") of operand type i. The following restrictions apply:

-   If the value of idx1 is less than or equal to 0, it is set to 1 in the statement LOOP. If the value of idx1 is greater than the total number of table rows, no processing takes place.
    
-   If the value of idx2 is less than or equal to 0, the statement LOOP is not executed. If the value of idx2 is greater than the number of table rows, it is set to the number of table rows.
    
-   If the value of idx2 is less than the value of idx1, no processing takes place.
    

The value of idx1 is evaluated once when the loop is entered. Any changes to idx1 during loop processing are ignored. In contrast, the value of idx2 is evaluated in each loop pass and any changes made to idx2 during loop processing are respected.

Note

To determine when loop processing is exited and whether the value specified in idx2 has been reached, the current row number is evaluated. Note that this number can be changed if rows are inserted or deleted during a loop pass as described in [LOOP](javascript:call_link\('abaploop_at_itab.htm'\)). As a result, there may be more loop passes (if rows are inserted) or fewer loop passes (if rows are deleted) than is specified by the difference between idx2 and idx1.

Example

Determine the primary index of a particular table row using the built-in function [line\_index](javascript:call_link\('abenline_index_function.htm'\)) and a loop across the internal table from this row.

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

Static WHERE condition. All rows are processed for which the condition after WHERE is met. If a static WHERE condition is specified, the row type of the internal table must be statically identifiable. WHERE can be specified for all table categories.

A [logical expression](javascript:call_link\('abenlogical_expression_glosry.htm'\) "Glossary Entry") [log\_exp](javascript:call_link\('abenlogexp.htm'\)) can be specified after WHERE, in which the first operand of each [relational expression](javascript:call_link\('abenrelational_expression_glosry.htm'\) "Glossary Entry") is a [component](javascript:call_link\('abenitab_components.htm'\)) of the internal table. Any [comparison expression](javascript:call_link\('abenlogexp_comp.htm'\)) and the [predicate expression](javascript:call_link\('abenpredicate_expression_glosry.htm'\) "Glossary Entry") [IS INITIAL](javascript:call_link\('abenlogexp_initial.htm'\)) can be specified as relational expressions. Other [predicates](javascript:call_link\('abenpredicate.htm'\)) cannot be specified. The components of the internal table must be specified as individual operands and not as part of an expression. Parenthesized character-like data objects cannot be used to specify a component dynamically here. The remaining operands of a relational expression are [general expression positions](javascript:call_link\('abengeneral_expression_positions.htm'\)) at which any [suitable](javascript:call_link\('abenlogexp_rules.htm'\)) individual operands or [expressions](javascript:call_link\('abenexpression_glosry.htm'\) "Glossary Entry") can be specified, but no components of the internal table. The specified components can have any data type. The relevant [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) apply to the evaluation.

-   When [standard tables](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") are accessed without a secondary key being specified, the access is not optimized. This means that all rows of the internal table are tested for the logical expression of the WHERE addition.

-   When using a [sorted key](javascript:call_link\('abensorted_key_glosry.htm'\) "Glossary Entry") or a [hash key](javascript:call_link\('abenhash_key_glosry.htm'\) "Glossary Entry") (that is, when accessing a [sorted table](javascript:call_link\('abensorted_table_glosry.htm'\) "Glossary Entry"), a [hashed table](javascript:call_link\('abenhashed_table_glosry.htm'\) "Glossary Entry"), or a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry")), an attempt is made to optimize the access as described under [Optimization of the WHERE Condition](javascript:call_link\('abenitab_where_optimization.htm'\)). If the following prerequisites are not met:

-   the entire logical expression (or a part of the expression) can be transformed to a key access,

-   the transformable part of the logical expression has the same result as the resulting key access,

no optimization takes place when a sorted table or a hashed table is accessed using the [primary table key](javascript:call_link\('abenprimary_table_key_glosry.htm'\) "Glossary Entry"). Any access using a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") produces a syntax error or exception. In the part of the logical expression relevant for the optimization, the static WHERE condition cannot specify any duplicate or overlapping keys. Duplicate key components can, however, be specified in the part of the logical expression whose relational expressions do not make a contribution to the optimized access.

Notes

-   When using a WHERE condition, note that the [comparison rules](javascript:call_link\('abenlogexp_rules.htm'\)) for incompatible data types apply when comparing incompatible data objects. Here, the data types involved determine which operand is converted. If the additions [WITH TABLE KEY](javascript:call_link\('abapread_table_key.htm'\)) and [WITH KEY](javascript:call_link\('abapread_table_free.htm'\)) of the statement READ are used or if the appropriate [keys are specified](javascript:call_link\('abentable_exp_itab_line.htm'\)) in [table expressions](javascript:call_link\('abentable_expressions.htm'\)), however, the content of the specified data objects is always converted to the data type of the columns before the comparison. This can produce varying results.
    
-   If possible, all operands of the logical expression should be in [compatible](javascript:call_link\('abencompatible_glosry.htm'\) "Glossary Entry") pairs, so enabling the [WHERE condition to be optimized](javascript:call_link\('abenitab_where_optimization.htm'\)).
    
-   If a comparison expression with a [selection table](javascript:call_link\('abenselection_table_glosry.htm'\) "Glossary Entry") is specified after [IN](javascript:call_link\('abenlogexp_select_option.htm'\)) as a logical expression, note that the expression at the initial table is always true and then all rows are edited.
    
-   The logical expression declared after WHERE is evaluated once when the loop is entered. Any changes to the second operand during loop processing are ignored.
    

Example

The following example demonstrates the differences in behavior of a WHERE condition and a key access with WITH TABLE KEY. In LOOP AT itab WHERE, the rule for the [comparison of character-like data types](javascript:call_link\('abenlogexp_character.htm'\)) applies. The short column content "AA" is first padded with blanks to change the length to 4. It is then compared to "AAXX". No matching row is found. With READ TABLE itab WITH TABLE KEY, the content of text\_long is [converted](javascript:call_link\('abenconversion_type_c.htm'\)) to the value "AA" before the comparison, by cutting off two characters, and then compared to the column content. The result is produced without errors.

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

Dynamic WHERE Condition cond\_syntax can be specified as a character-like data object or [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with character-like row type that, when the statement is executed and with the following exceptions, contains the syntax of a logical expression (in accordance with the rules of the static WHERE condition) or is initial. The following are not supported in a dynamic WHERE condition:

-   [String expressions](javascript:call_link\('abenstring_expression_glosry.htm'\) "Glossary Entry") and [bit expressions](javascript:call_link\('abenbit_expression_glosry.htm'\) "Glossary Entry")
    
-   [String functions](javascript:call_link\('abenstring_function_glosry.htm'\) "Glossary Entry") and [bit functions](javascript:call_link\('abenbit_function_glosry.htm'\) "Glossary Entry")
    
-   [Constructor expressions](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry")
    
-   [Table expressions](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry")
    

The syntax in cond\_syntax is, as in the ABAP Editor, not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. If cond\_syntax is initial when the statement is executed, the logical expression is true. Invalid logical expressions raises an exception from the class CX\_SY\_ITAB\_DYN\_LOOP.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [Security Risks of Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)).

Note

The dynamic WHERE conditions is not evaluated for a blank table for optimization reasons. Therefore, if an internal table is blank, and a logical expression has errors, no exception is raised.

Example

Gets rows with certain row numbers in the primary table index that meet a condition. Demonstrates the static and dynamic declaration of a WHERE condition.

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