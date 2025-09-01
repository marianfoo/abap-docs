---
title: "Syntax"
description: |
  ... itab FROM wa USING KEY keyname(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkeyname.htm) TRANSPORTING comp1(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) comp2(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenita
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_multiple.htm"
abapFile: "abapmodify_itab_multiple.htm"
keywords: ["select", "insert", "loop", "do", "if", "case", "try", "catch", "class", "data", "types", "internal-table", "abapmodify", "itab", "multiple"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_data_working.htm) →  [Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab.htm) →  [Processing Statements for Internal Tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_processing_statements.htm) →  [MODIFY itab](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm) → 

MODIFY itab - itab\_lines

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_shortref.htm)

Syntax

... itab FROM wa *\[*USING KEY [keyname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkeyname.htm)*\]*
         TRANSPORTING [comp1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) [comp2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) ... WHERE [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm)*|*(cond\_syntax).

Extras:

[1\. ... WHERE log\_exp](#!ABAP_ADDITION_1@1@)
[2\. ... USING KEY keyname](#!ABAP_ADDITION_2@2@)
[3\. ... WHERE (cond\_syntax)](#!ABAP_ADDITION_3@3@)

Effect

In this variant, the statement MODIFY assigns the content of the components comp1 comp2 ... of the work area wa specified after TRANSPORTING to all rows of the table itab that meet the condition after WHERE. wa is a [functional operand position](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunctional_position_glosry.htm "Glossary Entry"). The work area wa must be [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatible_glosry.htm "Glossary Entry") with the row type of the internal table.

The addition TRANSPORTING has the same effect as [changing individual rows](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab_single.htm). The addition WHERE can only be specified together with the addition TRANSPORTING.

Note

Outside of classes, an [obsolete short form](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_short_forms.htm) is possible where FROM wa can be omitted if the internal table has a [header line](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenheader_line_glosry.htm "Glossary Entry") itab with the same name. The statement then uses the header line as the work area implicitly. Furthermore, USING KEY cannot be specified without USING KEY.

Addition 1

... WHERE log\_exp

Effect

Static WHERE condition. All rows are processed for which the condition after WHERE is met. If a static WHERE condition is specified, the row type of the internal table must be statically identifiable. WHERE can be specified for all table categories.

A [logical expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogical_expression_glosry.htm "Glossary Entry") [log\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp.htm) can be specified after WHERE, in which the first operand of each [relational expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrelational_expression_glosry.htm "Glossary Entry") is a [component](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_components.htm) of the internal table. Any [comparison expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_comp.htm) and the [predicate expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate_expression_glosry.htm "Glossary Entry") [IS INITIAL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_initial.htm) can be specified as relational expressions. Other [predicates](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpredicate.htm) cannot be specified. The components of the internal table must be specified as individual operands and not as part of an expression. Parenthesized character-like data objects cannot be used to specify a component dynamically here. The remaining operands of a relational expression are [general expression positions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneral_expression_positions.htm) at which any [suitable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) individual operands or [expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexpression_glosry.htm "Glossary Entry") can be specified, but no components of the internal table. The specified components can have any data type. The relevant [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) apply to the evaluation.

-   When [standard tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") are accessed without a secondary key being specified, the access is not optimized. This means that all rows of the internal table are tested for the logical expression of the WHERE addition.

-   When using a [sorted key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") or a [hash key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm "Glossary Entry") (that is, when accessing a [sorted table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_table_glosry.htm "Glossary Entry"), a [hashed table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhashed_table_glosry.htm "Glossary Entry"), or a [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry")), an attempt is made to optimize the access as described under [Optimization of the WHERE Condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_where_optimization.htm). If the following prerequisites are not met:

-   the entire logical expression (or a part of the expression) can be transformed to a key access,

-   the transformable part of the logical expression has the same result as the resulting key access,

no optimization takes place when a sorted table or a hashed table is accessed using the [primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry"). Any access using a [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") produces a syntax error or exception. In the part of the logical expression relevant for the optimization, the static WHERE condition cannot specify any duplicate or overlapping keys. Duplicate key components can, however, be specified in the part of the logical expression whose relational expressions do not make a contribution to the optimized access.

Notes

-   When using a WHERE condition, note that the [comparison rules](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_rules.htm) for incompatible data types apply when comparing incompatible data objects. Here, the data types involved determine which operand is converted. If the additions [WITH TABLE KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_key.htm) and [WITH KEY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_table_free.htm) of the statement READ are used or if the appropriate [keys are specified](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_exp_itab_line.htm) in [table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expressions.htm), however, the content of the specified data objects is always converted to the data type of the columns before the comparison. This can produce varying results.
    
-   If possible, all operands of the logical expression should be in [compatible](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencompatible_glosry.htm "Glossary Entry") pairs, so enabling the [WHERE condition to be optimized](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_where_optimization.htm).
    
-   If a comparison expression with a [selection table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_table_glosry.htm "Glossary Entry") is specified after [IN](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlogexp_select_option.htm) as a logical expression, note that the expression at the initial table is always true and then all rows are edited.
    

Example

In the column col2 of the internal table itab, the MODIFY statement replaces every negative value with the number 0.

TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 1,
    col2 TYPE i,
  END OF line.
DATA itab TYPE SORTED TABLE OF line
               WITH UNIQUE KEY col1.
DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
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

The USING KEY addition can be used to specify a table key in [keyname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenkeyname.htm) used to carry out the processing. The specified table key influences the order in which the table rows are accessed, and the evaluation of the remaining conditions.

If the [primary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") is specified, the processing behaves in the same way as when no key is explicitly specified. If a [secondary table key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") is specified, the order in which the rows are accessed is as follows:

-   [Sorted key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensorted_key_glosry.htm "Glossary Entry") specified
    The rows are processed by ascending row number in the [secondary table index](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_index_glosry.htm "Glossary Entry")
    
-   [Hash key](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenhash_key_glosry.htm "Glossary Entry") specified
    The rows are processed in the order in which they were inserted into the table.
    

Notes

-   Unlike the processing of a hashed table when a primary key is used, a preceding sort using the statement SORT has no influence on the processing order when a secondary hash key is specified.
    
-   If a secondary table key is specified, any WHERE condition must be [optimizable](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_where_optimization.htm). Otherwise a syntax error occurs or an exception is raised.
    

Example

In the internal table itab, the MODIFY statement replaces the value in the column col1 with "\_" if the column col2 contains the value 0. The WHERE condition is evaluated (and the evaluation optimized) using the secondary key mkey.

TYPES:
  BEGIN OF line,
    col1 TYPE c LENGTH 1,
    col2 TYPE i,
  END OF line.
DATA itab TYPE TABLE OF line
               WITH EMPTY KEY
               with NON-UNIQUE SORTED KEY mkey COMPONENTS col2.
DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
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

Dynamic WHERE Condition cond\_syntax can be specified as a character-like data object or [standard table](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstandard_table_glosry.htm "Glossary Entry") with character-like row type that, when the statement is executed and with the following exceptions, contains the syntax of a logical expression (in accordance with the rules of the static WHERE condition) or is initial. The following are not supported in a dynamic WHERE condition:

-   [String expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_expression_glosry.htm "Glossary Entry") and [bit expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_expression_glosry.htm "Glossary Entry")
    
-   [String functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenstring_function_glosry.htm "Glossary Entry") and [bit functions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenbit_function_glosry.htm "Glossary Entry")
    
-   [Constructor expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenconstructor_expression_glosry.htm "Glossary Entry")
    
-   [Table expressions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentable_expression_glosry.htm "Glossary Entry")
    

The syntax in cond\_syntax is, as in the ABAP Editor, not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. If cond\_syntax is initial when the statement is executed, the logical expression is true. Invalid logical expressions raises an exception from the class CX\_SY\_ITAB\_DYN\_LOOP.

Security Note

If used wrongly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before being used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the predefined function [escape](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenescape_functions.htm). See [Security Risks of Input from Outside](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendynamic_programming_scrty.htm).

Note

The dynamic WHERE conditions is not evaluated for a blank table for optimization reasons. Therefore, if an internal table is blank, and a logical expression has errors, no exception is raised.

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
DATA(rnd) = cl\_abap\_random\_int=>create( seed = + sy-uzeit
                                        min  = 1
                                        max  = 20 ).
itab = VALUE #( FOR i = 1 UNTIL i > 26
                ( col1 = substring( val = sy-abcde
                                    off = i - 1
                                    len = 1 )
                                    col2 = rnd->get\_next( ) - 10 ) ).
TRY.
    MODIFY itab FROM VALUE line( col2 = 0 ) TRANSPORTING col2
                WHERE  (condition).
    cl\_demo\_output=>display( itab ).
  CATCH cx\_sy\_itab\_dyn\_loop INTO DATA(exc).
    ...
ENDTRY.