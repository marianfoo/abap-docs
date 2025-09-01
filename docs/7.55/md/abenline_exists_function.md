  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Expressions and Functions for Conditions](javascript:call_link\('abenlogical_expr_func.htm'\)) →  [Logical Expressions (log\_exp)](javascript:call_link\('abenlogexp.htm'\)) →  [rel\_exp - Predicates](javascript:call_link\('abenpredicate.htm'\)) →  [rel\_exp - Predicate Functions](javascript:call_link\('abenpredicate_functions.htm'\)) →  [rel\_exp - Predicate Functions for Table-Like Arguments](javascript:call_link\('abenpredicate_functions_tabs.htm'\)) → 

rel\_exp - line\_exists

Syntax

... line\_exists( [table\_exp](javascript:call_link\('abentable_expressions.htm'\)) ) ...

Effect

The [predicate function](javascript:call_link\('abenpredicate_function_glosry.htm'\) "Glossary Entry") line\_exists checks whether a line of an internal table [specified](javascript:call_link\('abentable_exp_itab_line.htm'\)) in the [table expression](javascript:call_link\('abentable_expression_glosry.htm'\) "Glossary Entry") [table\_exp](javascript:call_link\('abentable_expressions.htm'\)) exists and returns the corresponding [truth value](javascript:call_link\('abentruth_value_glosry.htm'\) "Glossary Entry"). In addition to single table expressions, [chainings](javascript:call_link\('abentable_exp_chaining.htm'\)) can also be specified for table\_exp, whose result is a line of an internal table.

Within line\_exists, an explicitly specified table key in the table line [table\_line](javascript:call_link\('abentable_exp_itab_line.htm'\)) of the table expression is handled in the same way as a [free search key](javascript:call_link\('abapread_table_free.htm'\)) specified for this table key.

Hints

-   The table expression is only used to check the existence of the specified line. No temporary [result](javascript:call_link\('abentable_exp_result.htm'\)) is created.

-   The predicate function line\_exists can be considered as a short form of the statement [READ TABLE](javascript:call_link\('abapread_table.htm'\)) with the addition [TRANSPORTING NO FIELDS](javascript:call_link\('abapread_table_outdesc.htm'\)) followed by sy-subrc being checked.

-   The predicate function line\_exists cannot be used to determine the line number in a table index of a search key used for the search, since table expressions do not fill the system field sy-tabix. The table function [line\_index](javascript:call_link\('abenline_index_function.htm'\)) can be used instead.

-   If a search key specified in [table\_line](javascript:call_link\('abentable_exp_itab_line.htm'\)) in the table expression covers the initial part of a [secondary table key](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") without being specified explicitly after KEY, a syntax check warning that can be hidden by a pragma occurs, since the function is generally more performant if the secondary key is specified explicitly.

-   As in other use cases of table expressions, line\_exists must be used carefully to avoid duplicate selections. Therefore, line\_exists should not be used to first check the existence of a line and then read it. Instead, the table expression can be [assigned to a field symbol](javascript:call_link\('abapassign_mem_area_writable_exp.htm'\)) and then sy-subrc checked. If the line in question usually exists, the table expression can be specified in the required operand position and the exception CX\_SY\_ITAB\_LINE\_NOT\_FOUND caught.

-   As well as assigning a table expression a [default value](javascript:call_link\('abentable_exp_optional_default.htm'\)) for lines that are not found, there is also the option of checking the existence of lines.

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