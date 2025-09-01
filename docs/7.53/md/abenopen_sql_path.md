  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL](javascript:call_link\('abenopensql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenopen_sql_operands.htm'\)) → 

ABAP SQL - Path Expressions

Syntax

... *\[*source~*\]*\\\_assoc1*\[* [parameters](javascript:call_link\('abenopen_sql_parameters.htm'\))*\]**\[*[attributes](javascript:call_link\('abenopen_sql_path_filter.htm'\))*\]*
            *\[*\\\_assoc2*\[* [parameters](javascript:call_link\('abenopen_sql_parameters.htm'\))*\]**\[* [attributes](javascript:call_link\('abenopen_sql_path_filter.htm'\))*\]**\]*
            *\[*\\...*\]* ...

Effect

Specifies a [CDS path expression](javascript:call_link\('abencds_path_expression_glosry.htm'\) "Glossary Entry"). ABAP SQL statements can contain path expressions in certain operand positions whose root element must be a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") published as follows:

-   In the same SELECT statement of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"), the name of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is used to access a [CDS view](javascript:call_link\('abencds_view_glosry.htm'\) "Glossary Entry") as the [data source](javascript:call_link\('abapselect_data_source.htm'\)), which [publishes](javascript:call_link\('abencds_f1_select_list_association.htm'\)) the association in its [SELECT list](javascript:call_link\('abencds_f1_select_list.htm'\)) to be used from outside.

-   In a [WITH](javascript:call_link\('abapwith.htm'\)) statement, the association with the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)) is published by a preceding [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry").

In a path expression, the names of associations \_assoc1, \_assoc2, ... are separated by backslashes (\\). Associations specified after the root element must be published in the target data source of the directly prefixed association in the path expression. No associations can occur that are defined in an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry") or whose target data sources are an [abstract CDS entity](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

When a SELECT statement is compiled using path expressions, the joins represented by these expressions are implicitly added to the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of the statement. The resulting additional data sources are implicitly evaluated at the occurrences of the path expressions. This respects the join conditions of the associations and the other conditions of the CDS views in question. Path expressions can be used:

-   In the [specified columns](javascript:call_link\('abenopen_sql_columns.htm'\)) of SELECT statements of [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").
    The path expression represents a left outer join (LEFT OUTER JOIN) by default.

-   As a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) in [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").
    The path expression represents an inner join (INNER JOIN) by default.

-   To [publish](javascript:call_link\('abapwith_associations.htm'\)) an [association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") of a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") in the [WITH](javascript:call_link\('abapwith.htm'\)) statement.

When specifying columns and when publishing an association, an optional source unit can be specified before the path expression, separated by a [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") ~. The first association of this unit is published. This is either a CDS view or a common table expression. However, when used as a data source, the path expression leads directly to the published unit anyway.

An association has the cardinality defined implicitly or explicitly in the CDS view by default. Syntax warnings or syntax errors occur when the cardinality does not match the way the path expression is used in the SELECT statement. If the association has the cardinality “to 1”, the addition [MANY TO ONE](javascript:call_link\('abapselect_join.htm'\)) is added implicitly in the case of a LEFT OUTER JOIN on databases where this is supported. The consequences of this behavior should be noted. The following can be done after an association:

-   Actual parameters can be passed to input parameters of the data source of the association by using [parameters](javascript:call_link\('abenopen_sql_parameters.htm'\)).
    
-   The following attributes can be specified for the section of the path expression using [attributes](javascript:call_link\('abenopen_sql_path_filter.htm'\)):
    

-   Cardinality of the association

-   Category of the join expression

-   Filter conditions

A path expression can be split across multiple lines of source code at the following places:

-   In front of a backslash (\\), but not in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list

-   In blanks in parentheses in parameter passing

-   In blanks in parentheses in square brackets for attributes

Certain [restrictions](javascript:call_link\('abenopen_sql_path_restrictions.htm'\)) apply to the associations of path expressions in ABAP SQL.

Notes

-   When the associations of the path expressions are defined as joins, they are mapped to as few join expressions as possible. Associations with identical [parameter passing](javascript:call_link\('abenopen_sql_parameters.htm'\)) and semantically identical [attributes](javascript:call_link\('abenopen_sql_path_filter.htm'\)) generally produce only one join expression.

-   If the [specified columns](javascript:call_link\('abenopen_sql_columns.htm'\)) of different [clauses](javascript:call_link\('abencds_select_clauses.htm'\)) are checked for matches in a SELECT statement, any parameters specified and attributes are also checked, Here, the same host variables must be used in the same operand positions too.

-   No path expressions can be created using associations that are [published](javascript:call_link\('abencds_f1_absent_association.htm'\)) in the element list of [abstract CDS entities](javascript:call_link\('abenabstract_entity_glosry.htm'\) "Glossary Entry").

-   If parameters are passed or attributes specified in a path expression of a [specified column](javascript:call_link\('abenopen_sql_columns.htm'\)), the syntax check runs in [strict mode from Release 7.52](javascript:call_link\('abenopensql_strict_mode_752.htm'\)).

Example

Simple path specified for the association \_spfli\_scarr from the following CDS view:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASSOC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_association(
\_spfli\_scarr,
id,
carrier,
flight,
departure,
destination
)
as select from
spfli
association \[1..1\] to scarr as \_spfli\_scarr on
$projection.carrid = \_spfli\_scarr.carrid
{
\_spfli\_scarr,
key spfli.carrid,
key \_spfli\_scarr.carrname,
key spfli.connid,
spfli.cityfrom,
spfli.cityto
}    

The program DEMO\_CDS\_ASSOCIATION uses the following SELECT statement with the simple path \\\_spfli\_scarr for the view and compares it with accesses to the data that work in the same way.

SELECT id,
       \\\_spfli\_scarr-carrname AS carrier,
       flight,
       departure,
       destination
       FROM demo\_cds\_association
       INTO TABLE @DATA(result).

A SELECT statement that access the full SELECT list of the view and a SELECT statement that accesses a view with a join of the same type produce the same result.

Executable Examples

-   [Path Expressions, Use in the SELECT List](javascript:call_link\('abenpath_expr_in_colspec_abexa.htm'\))

-   [Path Expressions, Use in the FROM Clause](javascript:call_link\('abenpath_expr_in_from_clause_abexa.htm'\))

Continue
[ABAP SQL - Path Expressions, attributes](javascript:call_link\('abenopen_sql_path_filter.htm'\))
[ABAP SQL - Restrictions for Path Expressions](javascript:call_link\('abenopen_sql_path_restrictions.htm'\))
![Example](exa.gif "Example") [Path Expressions, Use in the SELECT List](javascript:call_link\('abenpath_expr_in_colspec_abexa.htm'\))
![Example](exa.gif "Example") [Path Expressions, Use in the FROM Clause](javascript:call_link\('abenpath_expr_in_from_clause_abexa.htm'\))