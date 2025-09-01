  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) → 

ABAP SQL - Specified Columns

Syntax

... *\[*data\_source*|*tabalias~*\]*colname
  *|* *\[*data\_source*|*tabalias~*\]*[path\_expr](javascript:call_link\('abenopen_sql_path.htm'\))\-element ...

Variants:

[1\. ... colname](#!ABAP_VARIANT_1@1@)
[2\. ... path\_expr-element](#!ABAP_VARIANT_2@2@)

Addition:

[... data\_source*|*tabalias~](#!ABAP_ONE_ADD@1@)

Effect

Specifies a column of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) or the target of a [write](javascript:call_link\('abenopen_sql_writing.htm'\)) in an ABAP SQL statement.

Note

A specified column is allowed in places where [SQL expressions](javascript:call_link\('abensql_expression_glosry.htm'\) "Glossary Entry") are allowed and has the same meaning as a column specified as an [elementary SQL expression](javascript:call_link\('abensql_elem.htm'\)).

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

... path\_expr-element

Effect

Specifies an element of a [data source](javascript:call_link\('abencds_f1_data_source.htm'\)) of a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") after a path expression [path\_expr](javascript:call_link\('abenopen_sql_path.htm'\)). This can be specified in SELECT statements where path expressions can be used and in all places where a column can be specified (unless otherwise indicated).

The element element closes the path expression (compiled from [associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry")) for which the structure component selector \- is used. This element must be an element of the target data source of the final association in the path.

Notes

-   [Path expressions](javascript:call_link\('abenopen_sql_path.htm'\)) can be used in the following SELECT statements:

-   Statements that use the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") to access a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in which the used associations are [published](javascript:call_link\('abencds_f1_select_list_association.htm'\)) for use from outside.

-   Statements in a [WITH](javascript:call_link\('abapwith.htm'\)) statement that follow [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") that themselves publish associations using the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)).

-   If an element is specified after the path expression, this represents a column specified of the join created implicitly for the path expression. Left outer joins (LEFT OUTER JOIN) are created for path expressions in specified columns.

-   [source~](javascript:call_link\('abenopen_sql_path.htm'\)) can be used to prefix the path expression with the unit from which its first association is published.

-   When a column is specified using a path expression, the syntax check is performed in a [strict mode](javascript:call_link\('abenopensql_strict_mode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

Example

A [SELECT](javascript:call_link\('abapselect.htm'\)) statement accesses the [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") demo\_cds\_assoc\_scarr that publishes an association \_spfli. As its target data source, this association uses a view that publishes the associations \_sflight and \_sairport. The columns specified by the SELECT statement cover any path expressions created by these associations. See also the associated [executable example](javascript:call_link\('abenpath_expr_in_colspec_abexa.htm'\)).

SELECT carrname,
        \\\_spfli-connid AS connid,
        \\\_spfli\\\_sairport-name AS name
        FROM demo\_cds\_assoc\_scarr
        WHERE carrid = '...' and
              \\\_spfli\\\_sflight-fldate > '........'
        INTO TABLE @DATA(itab).

Addition

... data\_source*|*tabalias~

Effect

The [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") ~ can be used to prefix every specified column directly with the name of the associated data source of a query or of the target of a write (as data\_source or as an alternative table name tabalias).

If multiple [data sources](javascript:call_link\('abapselect_data_source.htm'\)) in an ABAP SQL statement need to be edited and the column name is not unique, the data source must be specified.

Example

Uses the name scarr of a data source and the alternative table name connections of a different data source in front of the column selector ~ of specified columns.

SELECT FROM scarr
         INNER JOIN spfli AS connections
           ON scarr~carrid = connections~carrid
       FIELDS scarr~carrname, connections~connid
       WHERE  connections~cityfrom = '...'
       INTO TABLE @DATA(itab).