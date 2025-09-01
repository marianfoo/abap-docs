  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) →  [ABAP SQL - SQL Operands sql\_elem](javascript:call_link\('abensql_operands.htm'\)) → 

ABAP SQL - col

Syntax

... *\[*data\_source*|*tabalias~*\]*colname
  *|* *\[*data\_source*|*tabalias~*\]*[sql\_path](javascript:call_link\('abenopen_sql_path.htm'\))\-element ...

Variants:

[1\. ... colname](#!ABAP_VARIANT_1@1@)
[2\. ... sql\_path-element](#!ABAP_VARIANT_2@2@)

Addition:

[... data\_source*|*tabalias~](#!ABAP_ONE_ADD@1@)

Effect

Specifies a column of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") or the target of a [write](javascript:call_link\('abenopen_sql_writing.htm'\)) in an ABAP SQL statement.

Columns can be specified as [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) in all operand positions in which [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are possible. However, they can also occur in specific operand positions in which no SQL expressions are possible.

Variant 1

... colname

Effect

Specifies a column of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") or of the target of a [write](javascript:call_link\('abenopen_sql_writing.htm'\)) directly using its name colname (as defined as a component of the associated structure in ABAP Dictionary).

Note

When a column is specified, the actual names of the components must be used for a database table containing an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)), and not the names of any groups defined in ABAP Dictionary.

Example

Columns carrid, carrname, and url specified directly in the clauses of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.

SELECT FROM scarr
       FIELDS carrid, carrname
       WHERE  url = ' '
       INTO   TABLE @DATA(itab).

Variant 2

... sql\_path-element

Effect

Specifies an element of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") after a path expression [sql\_path](javascript:call_link\('abenopen_sql_path.htm'\)). This can be specified in SELECT statements where path expressions can be used and in all places where a column can be specified (unless otherwise indicated).

The element element closes the path expression (compiled from [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry")) for which the structure component selector \- is used. This element must be an element of the target data source of the final association in the path.

Notes

-   [Path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) can be used in the following SELECT statements:

-   Statements that use the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") to access a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in which the used associations are [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) for use from outside.

-   Statements in a [WITH](javascript:call_link\('abapwith.htm'\)) statement that follow [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") that themselves publish associations using the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)).

-   If an element is specified after the path expression, this represents a column specified of the join created implicitly for the path expression. Left outer joins (LEFT OUTER JOIN) are created for path expressions in specified columns.

-   [source~](javascript:call_link\('abenopen_sql_path.htm'\)) can be used to prefix the path expression with the unit from which its first association is published.

-   When a column is specified using a path expression, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

Example

A [SELECT](javascript:call_link\('abapselect.htm'\)) statement accesses the [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") demo\_cds\_assoc\_scarr that [publishes](javascript:call_link\('abencds_f1_select_list_association.htm'\)) a CDS association \_spfli. As its target data source, this CDS association uses a view that publishes the CDS associations \_sflight and \_sairport. The columns specified by the SELECT statement cover any path expressions created by these CDS associations. See also the associated [executable example](javascript:call_link\('abenpath_expr_in_colspec_abexa.htm'\)).

SELECT carrname,
        \\\_spfli-connid AS connid,
        \\\_spfli\\\_sairport-name AS name
        FROM demo\_cds\_assoc\_scarr
        WHERE carrid = '...' and
              \\\_spfli\\\_sflight-fldate > '20190515'
        INTO TABLE @DATA(itab).

Addition

... data\_source*|*tabalias~

Effect

The [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") ~ can be used to prefix every specified column directly with the name of the associated data source of a query or of the target of a write (as data\_source or as an alias name tabalias).

The data source must be specified in the following cases:

-   If multiple [data sources](javascript:call_link\('abapselect_data_source.htm'\)) in an ABAP SQL statement need to be edited and the column name is not unique.

-   On the right-hand side of the [relational expressions](javascript:call_link\('abenwhere_logexp.htm'\)) of SQL conditions [sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) for statements.

Example

Using the name scarr of a data source and the alias name connections of a different data source in front of the column selector ~ of specified columns.

SELECT FROM scarr
         INNER JOIN spfli AS connections
           ON scarr~carrid = connections~carrid
       FIELDS scarr~carrname, connections~connid
       WHERE  connections~cityfrom = '...'
       INTO TABLE @DATA(itab).