  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP Database Access](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_sql.htm) →  [ABAP SQL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopensql.htm) →  [ABAP SQL - Reads](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_reading.htm) →  [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) →  [WITH - ASSOCIATIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations.htm) → 

WITH - ASSOCIATIONS, path

Syntax

... [sql\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path.htm) *\[*AS alias*\]*
    *\[*REDIRECTED TO +cte VIA target*\]* ...

Addition:

[... REDIRECTED TO +cte VIA target](#!ABAP_ONE_ADD@1@)

Effect

Specifies an existing [CDS association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_association_glosry.htm "Glossary Entry") or [CTE association](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencte_association_glosry.htm "Glossary Entry") using an [SQL path expression](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_path_expression_glosry.htm "Glossary Entry") [sql\_path](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path.htm) in the addition [WITH ASSOCIATIONS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_associations.htm) when a common table expression is defined in a [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement. The path expression publishes the association at its end. The published table expression is the source data source of the published association and any join expressions that are created when the association is used in a path expression use the publisher table expression as their left side.

The root element of each path expression can be the following associations:

-   CDS associations
    

-   [published](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list_association.htm) in the [SELECT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_select_list.htm) list of [CDS views](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_view_glosry.htm "Glossary Entry") in cases where these views are used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in the [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_subquery.htm) of the common table expression.

-   published using WITH ASSOCIATIONS of preceding table expressions of the current [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement in cases where these table expressions are used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in the [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_subquery.htm) of the common table expression.

-   CTE associations defined and published using WITH ASSOCIATIONS of preceding table expressions of the current [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement in cases where these table expressions are used as a [data source](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapselect_data_source.htm) in the [subquery](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith_subquery.htm) of the common table expression.
    

If [~](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path.htm) is used to prefix the path expression with the name of the data source that publishes its first association, this name must be the name used in the table expression. Therefore, if [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) is used to define an alias name, this name must be used instead of the original name in the path expression.

[Parameter passing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_parameters.htm) is not allowed in the final association of the specified path expressions and the [type of the join](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path_filter.htm) must not be defined. Any fields of the source data source of a path expression that occur in the ON condition of the association must be elements of the SELECT list of the common table expression. In path expressions that contain only one association, the elements can be specified as single elements or by using \* or dbtab~\*. If a path expression contains more than one association, one element must be specified as a path expression closed by the field, with the same [attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path_filter.htm) as the path expression used for publishing.

AS can be used to specify an alias name alias for the published association, under which it can be addressed in the subsequent queries of the current WITH statement. The alias name can contain letters, digits, the minus sign (\-), and the underscore (\_) in any order.

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

[Publishing Associations](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwith_associations_abexa.htm)

Addition

... REDIRECTED TO +cte VIA target

Effect

The addition REDIRECTED TO replaces the target data source of the association published using WITH ASSOCIATIONS with the common table expression specified as +cte.

-   The following can be specified for +cte:
    

-   A common table expression defined in front of the current common table expression in the current [WITH](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapwith.htm) statement.

-   The current common table expression

+cte must specify the target data source as a data source of the published association in the FROM clause of the subquery.

-   VIA must be followed by the target data source of the published association under the name it uses in the FROM clause of +cte:
    

-   The target data source must be specified after VIA even if it is used only once. If [AS](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapfrom_clause.htm) is used to define an alias name, this name must be specified.

-   If the target data source is used more than once as a data source of join expressions, one of these occurrences must be specified after VIA. The occurrence can be specified using the alias name or, if necessary, using its original name.

All columns that occur in the ON condition of the published association must be specified as columns of the data source specified after VIA in the SELECT list of the subquery of +cte. If the target data source occurs more than once in the FROM clause of +cte, the addition VIA defines that these columns of the results set (which represent the right side of the join expression created when the published association is used in a subsequent path expression) are used in the ON condition of the expression.

If an [attribute](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenopen_sql_path_filter.htm) is specified for the target data source when the published association is used in a subsequent path expression, this attribute is applied to the target +cte of the redirect. Any attributes specified after WITH ASSOCIATIONS when the association is published, however, are applied to the original target data source of the published association.

Example

The common table expression +cte2 of the following WITH statement uses the path expression demo\_cds\_publish\_assoc~\\\_spfli to publish the CDS association \_spfli that is itself published in the CDS view demo\_cds\_publish\_assoc. The common table expression +cte2 hence replaces this view as the source data source of the CDS association. This is meaningless in this example, however, since the subquery of the common table expression reads all data from the data source. The common table expression +cte1 uses REDIRECTED TO +cte1~demo\_cds\_assoc\_spfli to replace the target data source demo\_cds\_assoc\_spfli of the published path expression. demo\_cds\_assoc\_spfli is the only data source of the common table expression +cte1. In the main query of the WITH statement, the path expression +cte2\\\_spfli is used to access the target data source +cte1 of the published CDS association, which is subject to the WHERE condition.

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

[DDL Source Code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of DEMO\_CDS\_PUBLISH\_ASSOC:

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

[DDL Source Code](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddl_source_code_glosry.htm "Glossary Entry") of DEMO\_CDS\_ASSOC\_SPFLI:

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

-   [Publishing Associations with a Redirect](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwith_assocs_redirect_abexa.htm)
    
-   [Publishing Associations with a Recursive Redirect](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenwith_assocs_redir_self_abexa.htm)