  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP Database Access](javascript:call_link\('abendb_access.htm'\)) →  [ABAP SQL](javascript:call_link\('abenabap_sql.htm'\)) →  [ABAP SQL - Read Access](javascript:call_link\('abenabap_sql_reading.htm'\)) →  [WITH](javascript:call_link\('abapwith.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WITH%2C%20ASSOCIATIONS%2C%20ABAPWITH_ASSOCIATIONS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WITH, ASSOCIATIONS

Syntax

... WITH ASSOCIATIONS ( [path](javascript:call_link\('abapwith_associations_using.htm'\))
                       *|*[join](javascript:call_link\('abapwith_associations_defining.htm'\))*\[*,
                        ...*\]* )
                     *|*(assoc\_syntax)

Effect

The addition WITH ASSOCIATIONS for the definition of a common table expression exposes associations of this table expression for use in the subsequent queries of a [WITH](javascript:call_link\('abapwith.htm'\)) statement. The following can be specified:

-   Existing [CDS associations](javascript:call_link\('abencds_association_glosry.htm'\) "Glossary Entry") or [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") of the common table expression using [SQL path expressions](javascript:call_link\('abensql_path_expression_glosry.htm'\) "Glossary Entry") [path](javascript:call_link\('abapwith_associations_using.htm'\)).
-   Definitions of new [CTE associations](javascript:call_link\('abencte_association_glosry.htm'\) "Glossary Entry") of the common table expression using [join](javascript:call_link\('abapwith_associations_defining.htm'\)).

The parentheses must contain at least one association and multiple associations can be specified as a comma-separated list. Both existing and new associations can be specified together and in any order.

-   In subsequent queries of the current WITH statement, the exposed associations can be used as root elements of the path expressions in question.
    -   In the [specified columns](javascript:call_link\('abenabap_sql_columns.htm'\)) of SELECT statements of the subsequent queries.
    -   As a [data source](javascript:call_link\('abapselect_data_source.htm'\)) of the [FROM clause](javascript:call_link\('abapfrom_clause.htm'\)) of the subsequent queries.
-   Exposed [self-associations](javascript:call_link\('abenself_association_glosry.htm'\) "Glossary Entry") can be specified in the [hierarchy generator](javascript:call_link\('abenhierarchy_generator_glosry.htm'\) "Glossary Entry") [HIERARCHY](javascript:call_link\('abenselect_hierarchy_generator.htm'\)) as a [hierarchy association](javascript:call_link\('abenhierarchy_association_glosry.htm'\) "Glossary Entry").
-   An exposed association can be exposed again by a subsequent common table expression of the current WITH statement using the addition WITH ASSOCIATIONS, as long as this addition uses the exposing table expression as a data source. Different [attributes](javascript:call_link\('abenabap_sql_path_filter.htm'\)) can be specified here.

Instead of specifying associations statically in parentheses, a parenthesized data object assoc\_syntax can be specified. When the statement is executed, the data object must contain the syntax shown for the static specification. In this case, the common table expression can be used only in other dynamic tokens of the WITH statement. The data object assoc\_syntax can be a character-like data object or a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") with a character-like row type. The syntax in assoc\_syntax, as in the static syntax, is not case-sensitive. When an internal table is specified, the syntax can be distributed across multiple rows. Invalid syntax raises a catchable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

If an association is exposed more than once under different alias names, it is handled as a separate association when used in a path expression. A separate instance of a join expression is created for each association used and each expression uses the result set of the exposing common table expression as its left side.

The addition WITH ASSOCIATIONS cannot be used if the subquery of the common table expression contains the [set operator](javascript:call_link\('abencds_set_operators_glosry.htm'\) "Glossary Entry") [UNION](javascript:call_link\('abapunion.htm'\)), [INTERSECT](javascript:call_link\('abapunion.htm'\)), or [EXCEPT](javascript:call_link\('abapunion.htm'\)). Furthermore, it is not possible to use the addition [USING](javascript:call_link\('abapselect_client.htm'\)) or the obsolete addition [CLIENT SPECIFIED](javascript:call_link\('abapselect_client_obsolete.htm'\)) in the current CTE, nor in CTEs where the addition REDIRECTED TO is applied, nor in queries that use the association in a path expression and that transform it to a join expression.

Hints

-   When an association of the data source of a common table expression is exposed using WITH ASSOCIATION, this is the same as [exposing](javascript:call_link\('abencds_select_list_association_v2.htm'\)) an association of the data source of a CDS view entity in its SELECT list.
-   It should be noted that the exposing common table expression itself is the [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") of the exposed association and not the data source of the expression. The exposing common table expression replaces the original [association source](javascript:call_link\('abenassociation_source_glosry.htm'\) "Glossary Entry") of the association. The left side of a join expression created for the exposed association is the result set of the subquery of the common table expression.

Example

The following example class CL\_DEMO\_WITH\_ASSOCIATIONS demonstrates how CDS associations are exposed by common table expressions. It works in the same way as the [executable example](javascript:call_link\('abenpath_expr_in_from_clause_abexa.htm'\)) for using path expressions in the FROM clause. The main query uses the alias name \_spfli\_scarr to access the [association target](javascript:call_link\('abenassociation_target_glosry.htm'\) "Glossary Entry") SCARR of the final CDS association \_scarr of the path expression \\\_spfli\[ fltime > @fltime \]\\\_scarr exposed for the common table expression +cte. The SELECT list of the common table expression must specify the component \\\_spfli-carrid with the same filter condition fltime > @fltime as in the exposed association so that the associated join can be created.

DATA:
  tz     TYPE s\_tzone    VALUE 'UTC+1',
  currc  TYPE s\_currcode VALUE 'EUR',
  fltime TYPE s\_fltime   VALUE 0.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = tz
  )->add\_field( CHANGING field = currc
  )->add\_field( CHANGING field = fltime )->request( ).
WITH
  +cte AS ( SELECT \\\_spfli\[ MANY TO MANY
                            WHERE fltime > @fltime \]-carrid
                   FROM demo\_cds\_assoc\_sairport\_tz(
                     tz = @( to\_upper( tz ) ) ) )
       WITH ASSOCIATIONS ( \\\_spfli\[ MANY TO MANY
                                    WHERE fltime > @fltime \]
                           \\\_scarr AS \_spfli\_scarr )
  SELECT DISTINCT carrname
         FROM +cte\\\_spfli\_scarr\[
                currcode = @( CONV s\_currcode( to\_upper( currc ) ) ) \]
                  AS scarr
         ORDER BY carrname
         INTO TABLE @FINAL(result).
cl\_demo\_output=>display( result ).

Continue
[WITH, ASSOCIATIONS, path](javascript:call_link\('abapwith_associations_using.htm'\))
[WITH, ASSOCIATIONS, JOIN](javascript:call_link\('abapwith_associations_defining.htm'\))