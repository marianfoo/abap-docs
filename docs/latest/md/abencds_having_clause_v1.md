  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [Obsolete CDS Language Elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_obsolete.htm) →  [Obsolete CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities_obsolete.htm) →  [ABAP CDS - DDIC-Based Entities (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views (Obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v1.htm) →  [CDS DDL - DDIC-Based View, SELECT, clauses](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_clauses_v1.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DDIC-Based%20View%2C%20SELECT%2C%20HAVING%2C%20ABENCDS_HAVING_CLAUSE_V1%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20
improvement:)

CDS DDL - DDIC-Based View, SELECT, HAVING

Syntax

... HAVING [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v1.htm) ...

Effect

Defines a HAVING condition for the result set of a [CDS DDIC-based view (obsolete)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v1_view_glosry.htm "Glossary Entry") after a [GROUP BY clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_group_by_v1.htm) is evaluated. A HAVING condition can only be specified together with GROUP BY. For the operands, [general](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_operands_v1.htm) and [special rules](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_having_v1.htm) apply when specifying the condition.

Removes all rows from the result set that do not meet the condition [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v1.htm) specified after HAVING.

Hint

[Aggregate expressions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v1.htm) can be specified in the HAVING condition, which is not possible in the [WHERE condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_where_clause_v1.htm).

Example

When accessed, the CDS view sales\_order returns the number of business partners for each business partner role in which the total gross amount in euros is greater than 100000.00.

@AbapCatalog.sqlViewName: 'SALES\_ORDER\_VW'
define view sales\_order as
  select from snwd\_so
    inner join
      snwd\_bpa on buyer\_guid = snwd\_bpa.node\_key
  {  key bp\_role as role, //e.g. customer or supplier
     count(distinct buyer\_guid) as partners\_count,
     sum(snwd\_so.gross\_amount) as sum\_gross\_amount }
  where snwd\_so.currency\_code = 'EUR'
  group by bp\_role
  having sum(snwd\_so.gross\_amount) > 100000.00;

Continue
[CDS DDL - DDIC-Based View, cds\_cond, HAVING](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cond_expr_having_v1.htm)