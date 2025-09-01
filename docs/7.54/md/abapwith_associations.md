  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) → 

WITH - ASSOCIATIONS

Syntax

... WITH ASSOCIATIONS ( [path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations_using.htm)
                       *|*[join](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations_defining.htm)*\[*,
                        ...*\]* )
                     *|*(assoc\_syntax)

Effect

The addition WITH ASSOCIATIONS used to define a common table expression publishes associations of this table expression for use in the subsequent queries of a [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement. The following can be specified:

-   Existing [CDS associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_association_glosry.htm "Glossary Entry") or [CTE associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencte_association_glosry.htm "Glossary Entry") of the common table expression using [SQL path expressions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_path_expression_glosry.htm "Glossary Entry") [path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations_using.htm).
    
-   Definitions of new [CTE associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencte_association_glosry.htm "Glossary Entry") of the common table expression using [join](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations_defining.htm).
    

The parentheses must contain at least one association and multiple associations can be specified as a comma-separated list. Both existing and new associations can be specified together and in any order.

-   In subsequent queries of the current WITH statement, the published associations can be used as root elements of the path expressions in question.
    

-   In the [specified columns](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_columns.htm) of SELECT statements of the subsequent queries.

-   As a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) of the [FROM clause](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) of the subsequent queries.

-   Published [self associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenself_association_glosry.htm "Glossary Entry") can be specified in the [hierarchy generator](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_generator_glosry.htm "Glossary Entry") [HIERARCHY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselect_hierarchy_generator.htm) as a [hierarchy association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenhierarchy_association_glosry.htm "Glossary Entry").
    
-   A published association can be published again by a subsequent common table expression of the current WITH statement using the addition WITH ASSOCIATIONS, as long as this addition uses the publisher table expression as a data source. Different [attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path_filter.htm) can be specified here.
    

Instead of specifying associations statically in parentheses, a parenthesized data object assoc\_syntax can be specified. When the statement is executed, the data object must contain the syntax displayed for the statically specified information. In this case, the common table expression can be used only in other dynamic tokens of the WITH statement. The data object assoc\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type. The syntax in assoc\_syntax, as in the static syntax, is not case-sensitive. When an internal table is specified, the syntax can span multiple rows. Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.

If an association is published more than once under different alias names, it as handled as a separate association when used in a path expression. A separate instance of a join expression is created for each association used and each expression uses the results set of the publisher common table expression as its left side.

The addition WITH ASSOCIATIONS cannot be used if the subquery of the common table expression contains the language element [UNION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapunion.htm). As before, it is not possible to use the addition [USING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client.htm) or or the obsolete addition [CLIENT SPECIFIED](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_client_obsolete.htm) in the current CTE, nor in CTEs where the addition REDIRECTED TO is applied, nor in queries that use the association in a path expression and that transform it to a join expression.

Notes

-   When an association of the data source of a common table expression is published using WITH ASSOCIATION, this is the same as [publishing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) an association of the data source of a CDS view in its SELECT list.
    
-   It should be noted that the publisher common table expression itself is the source data source of the published association and not the data source of the expression. The publisher common table expression replaces the original source data source of the association. The left side of an instance of a join expression created for the published association is the results set of the subquery of the common table expression.
    

Example

The following example program DEMO\_WITH\_ASSOCIATIONS demonstrates how CDS associations are published by common table expressions. It works in the same way as the [executable example](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpath_expr_in_from_clause_abexa.htm) for using path expressions in the FROM clause. The main query uses the alias name \_spfli\_scarr to access the target data source SCARR of the final CDS association \_scarr of the path expression \\\_spfli\[ fltime > @fltime \]\\\_scarr published for the common table expression +cte. The SELECT list of the common table expression must specify the component \\\_spfli-carrid with the same filter condition fltime > @fltime as in the published association. This ensures that an instance of the associated join can be created.

DATA:
  tz     TYPE s\_tzone    VALUE 'UTC+1',
  currc  TYPE s\_currcode VALUE 'EUR',
  fltime TYPE s\_fltime   VALUE 0.
cl\_demo\_input=>new(
  )->add\_field( CHANGING field = tz
  )->add\_field( CHANGING field = currc
  )->add\_field( CHANGING field = fltime )->request( ).
WITH
  +cte AS ( SELECT \\\_spfli\[ fltime > @fltime \]-carrid
                   FROM demo\_cds\_assoc\_sairport\_tz(
                     tz = @( to\_upper( tz ) ) ) )
       WITH ASSOCIATIONS ( \\\_spfli\[ fltime > @fltime \]
                           \\\_scarr AS \_spfli\_scarr )
  SELECT DISTINCT carrname
         FROM +cte\\\_spfli\_scarr\[
                currcode = @( CONV s\_currcode( to\_upper( currc ) ) ) \]
                  AS scarr
         ORDER BY carrname
         INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

Continue
[WITH - ASSOCIATIONS, path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations_using.htm)
[WITH - ASSOCIATIONS, JOIN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations_defining.htm)