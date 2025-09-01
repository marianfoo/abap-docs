  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) → 

WITH - associations

Syntax

... WITH ASSOCIATIONS ( [path\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) *\[*AS alias*\]*
                        *\[*REDIRECTED TO +cte VIA target*\]**\[*, ...*\]* )
                     *|*(path\_syntax)

Addition:

[... REDIRECTED TO +cte VIA target](#!ABAP_ONE_ADD@1@)

Effect

Publishes [CDS associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_association_glosry.htm "Glossary Entry") for use in the subsequent queries of a [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) statement using path expressions [path\_expr](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm). Either a single path expression can be specified or multiple comma-separated path expressions in parentheses. Each path expression publishes the association at its end. The published table expression is the source data source of the published association and any join expressions that are created when the association is used in a path expression use the publisher table expression as their left side.

The root element of each path expression can be the following associations:

-   Associations [published](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_association.htm) in the [SELECT](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list.htm) list of [CDS views](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_view_glosry.htm "Glossary Entry") in cases where these views are used as a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) in the [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_subquery.htm) of the common table expression.
    
-   Associations published using WITH ASSOCIATIONS for preceding table expressions of the current [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) statement in cases where these table expressions are used as a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) in the [subquery](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith_subquery.htm) of the common table expression.
    

If [~](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path.htm) is used to prefix the path expression with the name of the data source that publishes its first association, this name must be the name used in the table expression. Therefore, if AS is used to define an alternative table name, this name must be used instead of the original name in the path expression.

[Parameter passing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_parameters.htm) is not allowed in the final association of the specified path expressions and the [type of the join](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path_filter.htm) must not be defined. Any fields of the source data source of a path expression that occur in the ON condition of the association must be elements of the SELECT list of the common table expression. In path expressions that contain only one association, the elements can be specified as single elements or by using \* or dbtab~\*. If a path expression contains more than one association, one element must be specified as a path expression closed by the field, with the same [attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path_filter.htm) as the path expression used for publishing.

-   AS can be used to specify an alias name alias for the published association, under which it can be addressed in the subsequent queries of the current WITH statement. The alias name can contain letters, digits, the minus sign (\-), and the underscore (\_) in any order.
    
-   Instead of specifying path expressions statically in parentheses, a parenthesized data object path\_syntax can be specified. When the statement is executed, the data object must contain the syntax displayed for the statically specified information. In this case, the common table expression can be used only in other dynamic tokens of the WITH statement. The data object path\_syntax can be a character-like data object or a [standard table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_table_glosry.htm "Glossary Entry") with a character-like row type. The syntax in source\_syntax is not case-sensitive (as in the static syntax). When an internal table is specified, the syntax can span multiple rows. Invalid syntax raises a handleable exception from the class CX\_SY\_DYNAMIC\_OSQL\_ERROR.
    

The addition WITH ASSOCIATIONS cannot be used if the subquery of the common table expression contains the language element [UNION](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapunion.htm).

In subsequent queries of the current WITH statement, the published associations can be used as root elements of the path expressions in question.

-   In the [specified columns](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_columns.htm) of SELECT statements of the subsequent queries.
    
-   As a [data source](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapselect_data_source.htm) of the [FROM clause](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfrom_clause.htm) of the subsequent queries.
    

As before, a published association can be published again by a subsequent common table expression of the current WITH statement using the addition WITH ASSOCIATIONS, as long as this addition uses the publisher table expression as a data source. Different [attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path_filter.htm) can be specified here.

If an association is published more than once under different alias names, it as handled as a separate association when used in a path expression. A separate instance of a join expression is created for each association used and each expression uses the results set of the publisher common table expression as its left side.

Notes

-   When an association of the data source of a common table expression is published using WITH ASSOCIATION, this is the same as [publishing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencds_f1_select_list_association.htm) an association of the data source of a CDS view in its SELECT list.
    
-   It should be noted that the publisher common table expression itself is the source data source of the published association and not the data source of the expression. The publisher common table expression replaces the original source data source of the association. The left side of an instance of a join expression created for the published association is the results set of the subquery of the common table expression.
    

Example

The following example program DEMO\_WITH\_ASSOCIATIONS demonstrates how associations of common table expressions are published. It works in the same way as the [executable example](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenpath_expr_in_from_clause_abexa.htm) for using path expressions in the FROM clause. The main query uses the alias name \_spfli\_scarr to access the target data source SCARR of the final association \_scarr of the path expression \\\_spfli\[ fltime > @fltime \]\\\_scarr published for the common table expression +cte. The SELECT list of the common table expression must specify the component \\\_spfli-carrid with the same filter condition fltime > @fltime as in the published association. This ensures that an instance of the associated join can be created.

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

Example

The following WITH statement is a syntax example only and does not have a function. Its main role is to show different ways of specifying path expressions and operands.

WITH
  +cte1 AS ( SELECT \*
                    FROM demo\_cds\_publish\_assoc AS subsrc
                    WHERE subsrc~\\\_spfli-carrid = '...' )
             WITH ASSOCIATIONS ( subsrc~\\\_spfli AS assoc1 ),
  +cte2 AS ( SELECT \* FROM +cte1 )
             WITH ASSOCIATIONS ( +cte1~\\assoc1\[ carrid = '...' \]
                                 AS assoc2 )
  SELECT carrid AS id
         FROM +cte1\\assoc1 AS mainsrc
         WHERE mainsrc~carrid = '...'
  UNION
  SELECT carrid AS id
         FROM +cte2
         WHERE +cte2~\\assoc2-carrid = '...'
         ORDER BY id
         INTO TABLE @DATA(result).

Executable Example

[Publishing Associations](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwith_associations_abexa.htm)

Addition

... REDIRECTED TO +cte VIA target

Effect

The addition REDIRECTED TO replaces the target data source of the association published using WITH ASSOCIATIONS with the common table expression specified as +cte.

-   The following can be specified for +cte:
    

-   A common table expression defined in front of the current common table expression in the current [WITH](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapwith.htm) statement.

-   The current common table expression

+cte must specify the target data source as a data source of the published association in the FROM clause of the subquery.

-   VIA must be followed by the target data source of the published association under the name it uses in the FROM clause of +cte:
    

-   The target data source must be specified after VIA even if it is used only once. If AS is used to define an alternative table name, this name must be specified.

-   If the target data source is used more than once as a data source of join expressions, one of these occurrences must be specified after VIA. The occurrence can be specified using the alternative table name or, if needed, using its original name.

All columns that occur in the ON condition of the published association must be specified as columns of the data source specified after VIA in the SELECT list of the subquery of +cte. If the target data source occurs more than once in the FROM clause of +cte, the addition VIA defines that these columns of the results set (which represent the right side of the join expression created when the published association is used in a subsequent path expression) are used in the ON condition of the expression.

If an [attribute](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenopen_sql_path_filter.htm) is specified for the target data source when the published association is used in a subsequent path expression, this attribute is applied to the target +cte of the redirect. Any attributes specified after WITH ASSOCIATIONS when the association is published, however, are applied to the original target data source of the published association.

Example

The common table expression +cte2 of the following WITH statement uses the path expression demo\_cds\_publish\_assoc~\\\_spfli to publish the association \_spfli that is itself published in the CDS view demo\_cds\_publish\_assoc. The common table expression +cte2 hence replaces this view as the source data source of the association. This is meaningless in this example, however, since the subquery of the common table expression reads all data from the data source. The common table expression +cte1 uses REDIRECTED TO +cte1~demo\_cds\_assoc\_spfli to replace the target data source demo\_cds\_assoc\_spfli of the published path expression. demo\_cds\_assoc\_spfli is the only data source of the common table expression +cte1. In the main query of the WITH statement, the path expression +cte2\\\_spfli is used to access the target data source +cte1 of the published association, which is subject to the WHERE condition.

DATA carrid TYPE spfli-carrid.
cl\_demo\_input=>request( CHANGING field = carrid ).
WITH
  +cte1 AS ( SELECT \*
                    FROM demo\_cds\_assoc\_spfli
                    WHERE carrid = @carrid ),
  +cte2 AS ( SELECT \*
                    FROM demo\_cds\_publish\_assoc )
        WITH ASSOCIATIONS ( demo\_cds\_publish\_assoc~\\\_spfli
          REDIRECTED TO +cte1 VIA demo\_cds\_assoc\_spfli )
  SELECT spfli~\*
         FROM +cte2\\\_spfli AS spfli
         ORDER BY spfli~carrid, spfli~connid
         INTO TABLE @DATA(result).
cl\_demo\_output=>display( result ).

[DDL Source Code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of DEMO\_CDS\_PUBLISH\_ASSOC:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PUBASC'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_publish\_assoc
as select from
scarr
association to demo\_cds\_assoc\_spfli as \_spfli on
scarr.carrid = \_spfli.carrid
{
\_spfli,
scarr.carrid as scarr\_carrid,
\_spfli.\_sflight,
\_spfli.carrid,
\_spfli.connid
}    

[DDL Source Code](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of DEMO\_CDS\_ASSOC\_SPFLI:

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_ASC\_SPF'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view demo\_cds\_assoc\_spfli
  as select from
    spfli
    association        to sflight  as \_sflight  on
          spfli.carrid = \_sflight.carrid
      and spfli.connid = \_sflight.connid
    association \[1..1\] to sairport as \_sairport on
      spfli.airpfrom = \_sairport.id
    {
      \_sflight,
      \_sairport,
      carrid,
      connid,
      airpfrom
    }

Executable Examples

-   [Publishing Associations with a Redirect](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwith_assocs_redirect_abexa.htm)
    
-   [Publishing Associations with a Recursive Redirect](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenwith_assocs_redir_self_abexa.htm)