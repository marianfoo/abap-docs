  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) →  [ABAP SQL - SQL Operands sql\_elem](javascript:call_link\('abensql_operands.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP SQL - col, ABENABAP_SQL_COLUMNS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASu
ggestion for improvement:)

ABAP SQL - col

Syntax

... *\[*data\_source*|*tabalias~*\]*colname
  *|* *\[*data\_source*|*tabalias~*\]*[sql\_path](javascript:call_link\('abenabap_sql_path.htm'\))\-element ...

Variants:

[1\. ... colname](#!ABAP_VARIANT_1@1@)
[2\. ... sql\_path-element](#!ABAP_VARIANT_2@2@)

Addition:

[... data\_source*|*tabalias~](#!ABAP_ONE_ADD@1@)

Effect

Specifies a column of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") or the target of a [write](javascript:call_link\('abenabap_sql_writing.htm'\)) in an ABAP SQL statement.

Columns can be specified as [elementary SQL expressions](javascript:call_link\('abensql_elem.htm'\)) in all operand positions in which [SQL expressions](javascript:call_link\('abapsql_expr.htm'\)) are possible. However, they can also occur in specific operand positions in which no SQL expressions are possible.

Variant 1   

... colname

Effect

Specifies a column of a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry") or of the target of a [write](javascript:call_link\('abenabap_sql_writing.htm'\)) directly using its name colname (as defined as a component of the associated DDIC structure).

Hint

For a column specification, the actual names of the components must be used for a DDIC database table that contains an [include structure](javascript:call_link\('abenddic_include_structure.htm'\)), and not the names of any groups defined in the ABAP Dictionary.

Example

Direct column specification carrid, carrname, and url in the clauses of a [SELECT](javascript:call_link\('abapselect.htm'\)) statement.

SELECT FROM   scarr
       FIELDS carrid, carrname
       WHERE  url = ' '
       INTO   TABLE @FINAL(itab).

Variant 2   

... sql\_path-element

Effect

Specifies an element of a data source of a [CDS view entity](javascript:call_link\('abencds_data_source_v2.htm'\)) or of a [CDS DDIC-based view (obsolete)](javascript:call_link\('abencds_data_source_v1.htm'\)) after a path expression [sql\_path](javascript:call_link\('abenabap_sql_path.htm'\)). This can be specified in SELECT statements where path expressions can be used in all places where a column can be specified, unless otherwise indicated.

The element element closes the path expression constructed from [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry"), for which the structure component selector \- is used. This element must be an element of the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the final association in the path.

Hints

-   [Path expressions](javascript:call_link\('abenabap_sql_path.htm'\)) can be used in the following SELECT statements:
    -   Statements that use the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") to access a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") in which the used associations are exposed for use from outside.
    -   Statements in a [WITH](javascript:call_link\('abapwith.htm'\)) statement that follow [common table expressions](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") that themselves expose associations using the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)).
-   If an element is specified after the path expression, this represents a column specified of the join created implicitly for the path expression. Left outer joins (LEFT OUTER JOIN) are created for path expressions in specified columns.
-   [source~](javascript:call_link\('abenabap_sql_path.htm'\)) can be used to prefix the path expression with the unit from which its first association is exposed.
-   When a column is specified using a path expression, the syntax check is performed in a [strict mode](javascript:call_link\('abenabap_sql_strictmode_750.htm'\)), which handles the statement more strictly than the regular syntax check.

Example

A [SELECT](javascript:call_link\('abapselect.htm'\)) statement accesses the [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") demo\_cds\_assoc\_scarr that exposes a CDS association \_spfli. As its [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry"), this CDS association uses a view that exposes the CDS associations \_sflight and \_sairport. The columns specified in the SELECT statement include any path expressions created by these CDS associations. See also the associated [executable example](javascript:call_link\('abenpath_expr_in_colspec_abexa.htm'\)).

SELECT carrname,
        \\\_spfli\[ (\*) \]-connid AS connid,
        \\\_spfli\[ (\*) \]\\\_sairport-name AS name
        FROM demo\_cds\_assoc\_scarr
        WHERE carrid = '...' and
              \\\_spfli\[ (\*) \]\\\_sflight\[ (\*) \]-fldate > '20190515'
        INTO TABLE @FINAL(itab).

Addition   

... data\_source*|*tabalias~

Effect

The [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") ~ can be used to prefix every specified column directly with the name of the associated data source of a query or of the target of a write (as data\_source or as an alias name tabalias).

The data source must be specified in the following cases:

-   If multiple [data sources](javascript:call_link\('abapselect_data_source.htm'\)) in an ABAP SQL statement are edited and the column name is not unique.
-   On the right-hand side of the [relational expressions](javascript:call_link\('abenabap_sql_stmt_logexp.htm'\)) of SQL conditions [sql\_cond](javascript:call_link\('abenasql_cond.htm'\)) for statements.

Example

Use of the name scarr of a data source and the alias name connections of a different data source in front of the column selector ~ of specified columns.

SELECT FROM scarr
         INNER JOIN spfli AS connections
           ON scarr~carrid = connections~carrid
       FIELDS scarr~carrname, connections~connid
       WHERE  connections~cityfrom = '...'
       INTO TABLE @FINAL(itab).