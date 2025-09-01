  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) →  [sql\_cond - rel\_exp for Statements](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: sql_cond - Comparison Operators, ABENWHERE_LOGEXP_COMPARE, 757%0D%0A%0D%0AError:%0D%0
A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

sql\_cond - Comparison Operators

Syntax

... operand1 operator operand2
                    *|* *{*[*\[*ALL*|*ANY*|*SOME*\]*](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\)) ( SELECT [subquery\_clauses](javascript:call_link\('abenwhere_logexp_subquery.htm'\)) )*}* ...

Effect

This relational expression compares the content of the operand operand1 in accordance with the comparison operator operator with the content of the operand operand2 or with the result of a [scalar subquery](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\)).

-   The following can be specified for operand1 on the left side:
    -   Any [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) except [aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) and [window expressions](javascript:call_link\('abapselect_over.htm'\)).
    -   [Aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) in a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause.
-   The following can be specified for operand2 on the right side:
    -   Any elementary [SQL operands](javascript:call_link\('abensql_operands.htm'\)).
        
        Here, a column [col](javascript:call_link\('abenabap_sql_columns.htm'\)) must be specified as [data\_source](javascript:call_link\('abapselect_data_source.htm'\))~comp, or tabalias~comp using the [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") and it must be possible to [compare](javascript:call_link\('abenwhere_logexp_compare_types.htm'\)) the data types of the left side and right side.
        The content of an ABAP object, that is, an [untyped literal](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)), a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)), or a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)) must match the data type of operand1 in accordance with the rules for [lossless assignments](javascript:call_link\('abenlossless_assignment_glosry.htm'\) "Glossary Entry"). This is checked by the [strict modes](javascript:call_link\('abenabap_sql_strict_modes.htm'\)) of the syntax check from Release 7.40, SP08 and can raise an exception.
        
    -   Built-in [SQL functions](javascript:call_link\('abenabap_sql_builtin_functions.htm'\)) and [cast expressions](javascript:call_link\('abensql_cast.htm'\)).
    -   [Aggregate expressions](javascript:call_link\('abapselect_aggregate.htm'\)) in a [HAVING](javascript:call_link\('abaphaving_clause.htm'\)) clause.

The following table shows the possible comparison operators:

operator

Meaning

\=, EQ

True if the content of operand1 is equal to the content of operand2.

<>, NE

True if the content of operand1 is not equal to the content of operand2.

<, LT

True if the content of operand1 is less than the content of operand2.

\>, GT

True if the content of operand1 is greater than the content of operand2.

<=, LE

True if the content of operand1 is less than or equal to the content of operand2.

\>=, GE

True if the content of operand1 is greater than or equal to the content of operand2.

The following should be noted when using these operators:

-   If operand2 is an [untyped literal](javascript:call_link\('abenabap_sql_untyped_literals.htm'\)), a [host variable](javascript:call_link\('abenabap_sql_host_variables.htm'\)), or a [host expression](javascript:call_link\('abenabap_sql_host_expressions.htm'\)), the value is converted, if necessary, to the data type that matches the type of the operand operand1 in accordance with the [ABAP conversion rules](javascript:call_link\('abenconversion_rules.htm'\)) and the [tables of built-in types in the ABAP Dictionary](javascript:call_link\('abenddic_builtin_types.htm'\)) before the statement is passed to the database.
-   Comparisons between columns or between SQL expressions (including [typed literals](javascript:call_link\('abenabap_sql_typed_literals.htm'\)) and aggregate expressions) and columns are performed completely on the database. No type conversions are made in ABAP beforehand. If the data types or lengths on the left and right side do not match, the resulting behavior depends entirely on the conversion rules of the database, where fewer conversions are generally possible here than in ABAP. The platform-dependent behavior can produce different results or even SQL errors on individual platforms. For details on the conversion rules of SAP HANA Platform, see the [SAP HANA SQL Reference Guide](https://help.sap.com/docs/HANA_SERVICE_CF/7c78579ce9b14a669c1f3295b0d8ca16/f327b70cae564c53a766367a8aad0164.html).
-   The decimal places are respected in comparisons between numeric types.
-   In greater than or less than comparisons with character-like types, the result can depend on the [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") used by the database system. This applies in particular to the non-printable characters.
-   Trailing blanks are usually ignored in comparisons between character-like types.
-   In the case of columns that contain nothing but a blank character, it depends on the platform how this blank is saved:
    
    -   In the SAP HANA database and in MaxDB, a single blank is saved as an empty string and not as specified by the code page in question.
    -   In all other database and in [table buffering](javascript:call_link\('abentable_buffering_glosry.htm'\) "Glossary Entry"), a single blank is saved in accordance with the code page.
    
    This means that the behavior produced when a value of this type is selected using size comparisons depends on the platform and buffering. More specifically, a single blank in the SAP HANA database and in MaxDB is not found in the interval of all possible characters.
    

Hints

-   The obsolete forms [\><, \=<, and \=>](javascript:call_link\('abenobsolete_logexp_op.htm'\)) of comparison operators may still appear outside of classes.
-   Size comparisons for character-like operands should be avoided to prevent platform-dependent behavior. An exception here are simple cases, such as operands that contain only digits.

Example

Reads flights with a seat occupancy that is less than the entered value.

DATA seatsocc TYPE sflight-seatsocc.
cl\_demo\_input=>request( CHANGING field = seatsocc ).
SELECT carrid, connid, fldate
       FROM sflight
       WHERE seatsocc < @seatsocc
       INTO TABLE @FINAL(sflight\_tab).

Example

Reads overbooked flights.

SELECT carrid, connid, fldate
       FROM sflight
       WHERE seatsocc > sflight~seatsmax
       INTO TABLE @FINAL(sflight\_tab).

Continue
[sql\_cond - ALL, ANY, SOME](javascript:call_link\('abenwhere_logexp_all_any_some.htm'\))
[sql\_cond - Comparable Types](javascript:call_link\('abenwhere_logexp_compare_types.htm'\))