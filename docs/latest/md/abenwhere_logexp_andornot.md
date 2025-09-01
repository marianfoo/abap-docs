  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Conditions sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) → 

[Short Reference](javascript:call_link\('abensql_cond_shortref.htm'\))

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20sql_cond%20-%20AND%2C%20OR%2C%20NOT%2C%20%28%20%29%2C%20ABENWHERE_LOGEXP_ANDORNOT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improv
ement:)

sql\_cond - AND, OR, NOT, ( )

Syntax

... sql\_cond1 AND sql\_cond2 AND sql\_cond3 ...

... sql\_cond1 OR sql\_cond2 OR sql\_cond3 ...

... NOT sql\_cond ...

... ( sql\_cond ) ...

Effect

Any number of logical [sql\_cond](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) expressions can be combined into one logical expression using AND or OR and the result of a logical expression can be negated using NOT. The same [rules](javascript:call_link\('abenlogexp_boole.htm'\)) apply as to general logical expressions, with the difference that the operator NOT cannot be specified more than once in direct succession. In particular, the explicit use of ( ) parentheses is also possible.

In SQL, the order in which two expressions are evaluated that are combined by AND is not defined. Results can be different on different database platforms.

The following additional rules apply to logical expressions whose result is unknown because an operand has the [null value](javascript:call_link\('abennull_value_glosry.htm'\) "Glossary Entry"):

-   An AND combination of two unknown expressions or a true expression with an unknown expression produces an unknown expression. An AND combination of a false expression with an unknown expression produces a false expression.
-   An OR combination of two unknown expressions or one false expression with an unknown expression produces an unknown expression. An OR combination of one true and one unknown expression produces a true expression.
-   The negation of an unknown expression with NOT produces an unknown expression.

Hints

-   In particular, the expressions specified [dynamically](javascript:call_link\('abenwhere_logexp_dynamic.htm'\)) as (cond\_syntax) are also possible as logical expressions within a combination or negation.
-   The operator NOT in a WHERE clause cannot be supported by an [index](javascript:call_link\('abenddic_database_tables_index.htm'\)). For this reason, it is best to use the reverse comparison operator instead of NOT, for example col <= dobj instead of NOT col > dobj.
-   Two NOT operators can only be specified consecutively if they are separated by an opening parenthesis. If not, an even number of consecutive NOT operators has the same meaning as none, and an odd number of consecutive NOT operators has the same meaning as a single NOT and should be used accordingly.
-   If multiple expressions are combined using AND, rules such as the following cannot be relied on: If one expression is false, then the following expressions are not evaluated any more. For example, a condition col1 <> 0 AND col2 / col1 > 1 can lead to an exception. To avoid such exceptions, CASE expressions can be used.
-   The rules for unknown expressions establish an important difference to the rules for a false expression. While a single unknown expression behaves mostly the same as a false expression in the sense that both are not true, the results of applying the operators can be unexpected. Especially an unknown expression cannot be made true by applying NOT.

Example

Reads flights from Frankfurt to Los Angeles or San Francisco.

SELECT \*
       FROM spfli
       WHERE cityfrom = 'FRANKFURT' AND
             ( cityto = 'LOS ANGELES' OR
               cityto = 'SAN FRANCISCO' )
       INTO TABLE @FINAL(spfli\_tab).