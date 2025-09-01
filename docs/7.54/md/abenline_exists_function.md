  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [log\_exp - Logical Expressions](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Functions](javascript:call_link\('abenpredicate_functions.htm'\)) →  [Predicate Functions for Table-Like Arguments](javascript:call_link\('abenpredicate_functions_tabs.htm'\)) → 

rel\_exp - line\_exists, Predicate Function

Syntax

... line\_exists( [table\_exp](javascript:call_link\('abentable_expressions.htm'\)) ) ...

Effect

The [predicate function](javascript:call_link\('abenpredicate_function_glosry.htm'\) "Glossary Entry") line\_exists checks whether a row of an internal table [specified](javascript:call_link\('abentable_exp_itab_line.htm'\)) in the [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") [table\_exp](javascript:call_link\('abentable_expressions.htm'\)) exists and returns the appropriate [truth value](javascript:call_link\('abenlogical_value_glosry.htm'\) "Glossary Entry"). Alongside single table expressions, table\_exp can also handle [chainings](javascript:call_link\('abentable_exp_chaining.htm'\)), whose result is a row of an internal table.

Within line\_exists, an explicitly specified table key in the table row [table\_line](javascript:call_link\('abentable_exp_itab_line.htm'\)) of the table expression is handled in the same way as a [free search key](javascript:call_link\('abapread_table_free.htm'\)) specified for this table key.

Notes

-   The table expression is only used to check the existence of the specified row. No temporary [result](javascript:call_link\('abentable_exp_result.htm'\)) is created.

-   The predicate function line\_exists can be considered as a short form of the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)) with the addition [TRANSPORTING NO FIELDS](javascript:call_link\('abapread_table_outdesc.htm'\)) followed by sy-subrc being checked.

-   The predicate function line\_exists cannot be used to determine the row number in a table index of a search key, since table expressions do not fill the system field sy-tabix. The table function [line\_index](javascript:call_link\('abenline_index_function.htm'\)) can be used instead.

-   If a search key specified in [table\_line](javascript:call_link\('abentable_exp_itab_line.htm'\)) in the table expression covers the initial part of a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") without being specified explicitly after KEY, a syntax check warning is produced (which can be hidden by a pragma), since the function is generally quicker if the secondary key is specified explicitly.

-   As in other use cases for table expressions, line\_exists must be used carefully and no duplicate selections made. For example, line\_exists should not be used to first check the existence of a row and then read it. Instead, the table expression can be [assigned to a field symbol](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) and then sy-subrc checked. If the row in question usually exists, the table expression can be specified in the required operand position and the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND caught.

-   As well as assigning a table expression a [default value](javascript:call_link\('abentable_exp_optional_default.htm'\)) for rows that are not found, there is also the option of checking the existence of rows.

Example

DATA flight\_tab TYPE HASHED TABLE OF spfli
                     WITH UNIQUE KEY carrid connid.
SELECT \*
       FROM spfli
       INTO TABLE @flight\_tab.
IF line\_exists( flight\_tab\[ carrid = 'LH'
                            connid = '0400' \] ).
  ...
ENDIF.