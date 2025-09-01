  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Operands and Expressions](javascript:call_link\('abenabap_sql_operands.htm'\)) → 

ABAP SQL - SQL path expressions sql\_path

Syntax

... *\[*source~*\]*\\\_assoc1*\[* [sql\_para](javascript:call_link\('abenabap_sql_parameters.htm'\))*\]**\[*[attributes](javascript:call_link\('abenabap_sql_path_filter.htm'\))*\]*
            *\[*\\\_assoc2*\[* [sql\_para](javascript:call_link\('abenabap_sql_parameters.htm'\))*\]**\[*[attributes](javascript:call_link\('abenabap_sql_path_filter.htm'\))*\]**\]*
            *\[*\\...*\]* ...

Effect

Specifies an [SQL path expression](javascript:call_link\('abensql_path_expression_glosry.htm'\) "Glossary Entry"). ABAP SQL statements can contain path expressions in certain operand positions whose root element must be a [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE association](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") exposed as follows:

-   In the same SELECT statement of a [query](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry"), the name of the [CDS entity](javascript:call_link\('abencds_entity_glosry.htm'\) "Glossary Entry") is used to access one of the following [data sources](javascript:call_link\('abapselect_data_source.htm'\)):
    -   A [CDS view entity](javascript:call_link\('abencds_v2_view_glosry.htm'\) "Glossary Entry") that [exposes](javascript:call_link\('abencds_select_list_association_v2.htm'\)) the CDS association in its [SELECT list](javascript:call_link\('abencds_select_list_v2.htm'\)).
    -   A [CDS DDIC-based view](javascript:call_link\('abencds_v1_view_glosry.htm'\) "Glossary Entry") that [exposes](javascript:call_link\('abencds_select_list_association_v1.htm'\)) the CDS association in its [SELECT list](javascript:call_link\('abencds_select_list_v1.htm'\)).
    -   A [CDS hierarchy](javascript:call_link\('abencds_hierarchy_glosry.htm'\) "Glossary Entry") that [exposes](javascript:call_link\('abencds_f1_hiera_element.htm'\)) the CDS association in its [element list](javascript:call_link\('abencds_f1_hiera_element_list.htm'\)).
-   In a [WITH](javascript:call_link\('abapwith.htm'\)) statement, the association with the addition [WITH ASSOCIATIONS](javascript:call_link\('abapwith_associations.htm'\)) is exposed by a preceding [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry"). This can be one of the following:
    -   [CDS association](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE association](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") [exposed](javascript:call_link\('abapwith_associations_using.htm'\)) using a path expression.
    -   [CTE association](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") [defined and exposed](javascript:call_link\('abapwith_associations_defining.htm'\)) for the common table expression.

In a path expression, the names of associations \_assoc1, \_assoc2, ... are separated by backslashes (\\). Associations specified after the root element must be exposed in the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") of the directly prefixed association in the path expression. No CDS associations can occur that are defined in an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry") or whose association targets are an [CDS abstract entity](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").

When a SELECT statement with path expressions is compiled, the joins represented by them are implicitly inserted in the [FROM](javascript:call_link\('abapfrom_clause.htm'\)) clause of the statement and the resulting additional data sources are implicitly evaluated at the usage locations of the path expressions. The join conditions of the associations and the other conditions of the CDS entities or common table expressions involved are respected. Path expressions can be used:

-   In the [specified columns](javascript:call_link\('abenabap_sql_columns.htm'\)) of SELECT statements of [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").
    
    The path expression represents a left outer join (LEFT OUTER JOIN) by default.
    
-   As a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) in [queries](javascript:call_link\('abenquery_glosry.htm'\) "Glossary Entry").
    
    The path expression represents an inner join (INNER JOIN) by default.
    
-   To [expose](javascript:call_link\('abapwith_associations_using.htm'\)) an association of a [common table expression](javascript:call_link\('abencommon_table_expression_glosry.htm'\) "Glossary Entry") in the [WITH](javascript:call_link\('abapwith.htm'\)) statement.

When specifying columns and when exposing an association, an optional source unit can be specified in front of the path expression, separated by a [column selector](javascript:call_link\('abentable_comp_selector_glosry.htm'\) "Glossary Entry") ~. The first association of this unit is exposed. This is either a CDS view, a CDS hierarchy, or a common table expression. However, when used as a data source, the path expression follows the exposed unit directly anyway.

An association has the [cardinality](javascript:call_link\('abencardinality_glosry.htm'\) "Glossary Entry") defined implicitly or explicitly in the CDS entity or common table expression by default. Syntax warnings or syntax errors occur when the cardinality does not match the way the path expression is used in the SELECT statement. If the association has the cardinality "to 1", the addition [MANY TO ONE](javascript:call_link\('abapselect_join.htm'\)) is added implicitly in the case of a LEFT OUTER JOIN on databases where this is supported. The consequences of this behavior should be noted. The following can be specified after an association:

-   Actual parameters can be passed to input parameters of the data source of a CDS association by using [sql\_para](javascript:call_link\('abenabap_sql_parameters.htm'\)).
-   The following attributes can be specified for the section of the path expression using [attributes](javascript:call_link\('abenabap_sql_path_filter.htm'\)):
    -   Cardinality of the association
    -   Category of the join expression
    -   Filter conditions

A path expression can be split across multiple lines of source code at the following places:

-   In front of a backslash (\\), but not in the [SELECT](javascript:call_link\('abapselect_list.htm'\)) list
-   In blanks in parentheses in parameter passing
-   In blanks in parentheses in square brackets for attributes

Certain [restrictions](javascript:call_link\('abenabap_sql_path_restrictions.htm'\)) apply to the associations of path expressions in ABAP SQL.

Hints

-   When the associations of the path expressions are defined as joins, an attempt is made to map them to as few join expressions as possible. Associations with identical [parameter passing](javascript:call_link\('abenabap_sql_parameters.htm'\)) and semantically identical [attributes](javascript:call_link\('abenabap_sql_path_filter.htm'\)) generally produce only one join expression.
-   If the [specified columns](javascript:call_link\('abenabap_sql_columns.htm'\)) of different [clauses](javascript:call_link\('abenselect_clauses.htm'\)) are checked for matches in a SELECT statement, any parameters specified and attributes are also checked. Here, the same host variables must also be used in the same operand positions.
-   No path expressions can be created using CDS associations that are [exposed](javascript:call_link\('abencds_f1_absent_association.htm'\)) in the element list of [CDS abstract entities](javascript:call_link\('abencds_abstract_entity_glosry.htm'\) "Glossary Entry").
-   If parameters are passed or attributes specified in a path expression of a [specified column](javascript:call_link\('abenabap_sql_columns.htm'\)), the syntax check runs in [strict mode from Release 7.52](javascript:call_link\('abenabap_sql_strictmode_752.htm'\)).

Example

Simple path specified for the CDS association \_spfli\_scarr from the following CDS view:

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
      key \_spfli\_scarr\[inner\].carrname,
      key spfli.connid,
          spfli.cityfrom,
          spfli.cityto
    }

The program DEMO\_CDS\_ASSOCIATION uses the following SELECT statement with the simple path \\\_spfli\_scarr for the view and compares it with accesses to the data that work in the same way.

SELECT id,
       \\\_spfli\_scarr\[ (1) INNER \]-carrname AS carrier,
       flight,
       departure,
       destination
       FROM demo\_cds\_association
       INTO TABLE @DATA(result).

A SELECT statement that accesses the entire SELECT list of the view and a SELECT statement that accesses a view with a join of the same type produce the same result.

Executable Examples

-   [Path Expressions, Use in the SELECT List](javascript:call_link\('abenpath_expr_in_colspec_abexa.htm'\))
-   [Path Expressions, Use in the FROM Clause](javascript:call_link\('abenpath_expr_in_from_clause_abexa.htm'\))

Continue
[ABAP SQL - Path Expressions, attributes](javascript:call_link\('abenabap_sql_path_filter.htm'\))
[ABAP SQL - Restrictions for Path Expressions](javascript:call_link\('abenabap_sql_path_restrictions.htm'\))
![Example](exa.gif "Example") [Path Expressions, Use in the SELECT List](javascript:call_link\('abenpath_expr_in_colspec_abexa.htm'\))
![Example](exa.gif "Example") [Path Expressions, Use in the FROM Clause](javascript:call_link\('abenpath_expr_in_from_clause_abexa.htm'\))