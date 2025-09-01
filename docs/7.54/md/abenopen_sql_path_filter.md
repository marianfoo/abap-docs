  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL path expressions sql\_path](javascript:call_link\('abenopen_sql_path.htm'\)) → 

ABAP SQL - Path Expressions, attributes

Syntax

... \[ *\[*(n*|*\*) *\[*INNER*|**{*LEFT*|*RIGHT OUTER*}**\]**\]* *\[**\[*WHERE*\]* [sql\_cond](javascript:call_link\('abenosql_expr_logexp.htm'\))*\]* \] ...

Extras:

[1\. ... (n*|*\*)](#!ABAP_ADDITION_1@1@)
[2\. ... INNER*|**{*LEFT*|*RIGHT OUTER*}*](#!ABAP_ADDITION_2@2@)
[3\. ... *\[*WHERE*\]* sql\_cond](#!ABAP_ADDITION_3@3@)

Effect

Attributes for a section of a path expression can be specified in square brackets for every [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE association](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") [\_assoc](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of the [path expression](javascript:call_link\('abenopen_sql_path.htm'\)) specified in a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) or a [column specification](javascript:call_link\('abenopen_sql_columns.htm'\)) The following can be done using these attributes:

-   The cardinality of the section can be declared

-   The type of the join expression can be specified

-   A filter condition sql\_cond can be specified
    

Addition 1

... (n*|*\*)

Effect

The cardinality of the current association \_assoc is declared by specifying a number n or the character \* is specified in parentheses ( ). The numbers 1 and 2 can be specified for n. If specified, the cardinality overwrites the definition of the cardinality [\[min..max\]](javascript:call_link\('abencds_f1_association.htm'\)) or [TO ONE*|*MANY](javascript:call_link\('abapwith_associations_defining.htm'\)) of the current association with "to 1", "to 2", or "to \*".

-   The cardinality can be specified to prevent syntax warnings or syntax errors in cases where the cardinality of the association does not match the way it is used in a path expression of a SELECT statement

-   If (1) is specified, a LEFT OUTER JOIN is defined implicitly using the addition [MANY TO ONE](javascript:call_link\('abapselect_join.htm'\)) (on database systems that support this) and the consequences of this should be noted.

Note

If the cardinality is specified in a path expression, the syntax check is performed in [strict mode from Release 7.52](javascript:call_link\('abenopensql_strict_mode_752.htm'\)).

Example

Paths specified with an explicitly specified cardinality of CDS associations in the SELECT list. If supported by the database, only the left outer join between the database tables SPFLI and SAIRPORT is defined using the addition MANY TO ONE.

SELECT scarr~carrname,
       \\\_spfli\[ (\*) \]-connid AS connid,
       \\\_spfli\[ (\*) \]\\\_sflight\[ (\*) \]-fldate AS fldate,
       \\\_spfli\[ (\*) \]\\\_sairport\[ (1) \]-name AS name
       FROM demo\_cds\_assoc\_scarr AS scarr
       WHERE scarr~carrid = '...'
       ORDER BY carrname, connid, fldate
       INTO TABLE @DATA(result).

Addition 2

... INNER*|**{*LEFT*|*RIGHT OUTER*}*

Effect

This addition defines the type of join into which the current association \_assoc is transformed:

-   INNER is an inner join

-   LEFT*|*RIGHT OUTER produces a left or right outer join

The type of the join expression can only be specified together with the cardinality.

If the type of join expression is not specified explicitly, the type depends on the place where the path expression is used:

-   When [columns are specified](javascript:call_link\('abenopen_sql_columns.htm'\)) in SELECT statements, a LEFT OUTER JOIN is used.

-   An INNER JOIN is used as a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)).

Note

If the type of the join is specified in a path expression, the syntax check is performed in [strict mode from Release 7.52](javascript:call_link\('abenopensql_strict_mode_752.htm'\)).

Example

Paths specified with an explicitly specified cardinality and and a switch of the left outer joins to inner joins in the columns specified in the SELECT list.

SELECT scarr~carrname,
       \\\_spfli\[ (1) INNER \]-connid AS connid,
       \\\_spfli\[ (1) INNER \]\\\_sflight\[ (1) INNER \]-fldate AS fldate,
       \\\_spfli\[ (1) INNER \]\\\_sairport\[ (1) INNER \]-name AS name
       FROM demo\_cds\_assoc\_scarr AS scarr
       WHERE scarr~carrid = 'LH'
       ORDER BY carrname, connid, fldate
       INTO TABLE @DATA(result).ABAP\_EXAMPLE

Addition 3

...  *\[*WHERE*\]* sql\_cond

Effect

Specifies a [filter condition](javascript:call_link\('abenfilter_condition_glosry.htm'\) "Glossary Entry") [sql\_cond](javascript:call_link\('abenosql_expr_logexp.htm'\)) for the current association \_assoc. The addition WHERE is optional in cases where the filter condition is the only item specified in the square brackets. The addition must be specified if one of the other additions is used first.

When the association is resolved in a join, the filter condition is converted to an extended condition for the join. If no filter condition is specified in the path expression, the default filter condition defined using [WITH DEFAULT FILTER](javascript:call_link\('abencds_f1_association.htm'\)) is used in the case of a CDS association.

Columns specified in the filter condition sql\_cond always refer to the targets [target](javascript:call_link\('abencds_f1_association.htm'\)) or [target](javascript:call_link\('abapwith_associations_defining.htm'\)) of the association for which the condition is specified. An explicit name must not and cannot be specified with the [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") ~ before a column specification.

Notes

-   The [relational expressions](javascript:call_link\('abenosql_expr_logexp.htm'\)) that can be used in a filter condition are a subset of the [relational expressions for statements](javascript:call_link\('abenwhere_logexp.htm'\)), but also allow [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) as operands on the right side.

-   If a filter condition is specified in a path expression, the syntax check is performed in [strict mode from Release 7.52](javascript:call_link\('abenopensql_strict_mode_752.htm'\)).

Example

Specifying filter conditions in a path expression.

SELECT carrid, connid, fldate, price
       FROM demo\_cds\_assoc\_scarr
            \\\_spfli\[   airpfrom = 'FRA' \]
            \\\_sflight\[ currency  = 'EUR' AND
                       price  BETWEEN 500 AND 1500 \]
            AS flights
       ORDER BY carrid, connid, fldate, price
       INTO TABLE @DATA(result).ABAP\_EXAMPLE