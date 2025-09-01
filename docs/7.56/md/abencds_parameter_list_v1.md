  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - DDIC-Based Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_ddic_entity.htm) →  [ABAP CDS - DDIC-Based Views](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_views.htm) →  [CDS DDL - DEFINE VIEW ddic\_based](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_define_view_v1.htm) → 

CDS DDL - DDIC-based View, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_param.htm), ... as input parameters of a [CDS DDIC-based view](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_v1_view_glosry.htm "Glossary Entry") in a comma-separated list.

An input parameter called pname can be used as an operand in the following places in the [SELECT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_statement_v1.htm) statement of the view using the syntax [:pname](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_v1.htm) or [$parameters.pname](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_v1.htm):

-   [Element](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_entry_v1.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_select_list_v1.htm)
-   Operand of an [arithmetic expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_arithmetic_expression_v1.htm)
-   Operand operand directly after case in a [case distinction](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_case_expression_v1.htm)
-   [Right side](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_where_v1.htm) of an expression [cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) in a [WHERE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v1.htm) clause or [HAVING clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_having_clause_v1.htm)
-   [Right side](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_where_v1.htm) of an expression [cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) in an ON condition in an [ABAP join](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_joined_data_source_v1.htm) or a [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_v1.htm)
-   [Right side](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_where_v1.htm) of an expression [cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) in a [filter condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_filter_v1.htm) of a [path expression](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_path_expression_v1.htm)
-   [Right side](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_cond_expr_where_v1.htm) of an expression [cds\_cond](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_conditional_expression_v1.htm) in the [default filter condition](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_v1.htm) of a [CDS association](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_association_v1.htm)

Example

The following CDS view has a list of three input parameters used in the [WHERE clause](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_where_clause_v1.htm) of the SELECT statement. The ABAP program DEMO\_CDS\_PARAMETERS accesses the view and assigns actual parameters to the input parameters.

@AbapCatalog.sqlViewName: 'DEMO\_CDS\_PARA'
@AccessControl.authorizationCheck: #NOT\_REQUIRED
@Metadata.allowExtensions
@EndUserText.label: 'Demo für Parameter-View'
define view demo\_cds\_parameters
  with parameters
    p\_distance\_l :s\_distance,
    p\_distance\_u :s\_distance,
    p\_unit       :s\_distid
  as select from
    spfli
    {
      key carrid,
      key connid,
          cityfrom,
          cityto,
          distance,
          distid
    }
    where
          distid   =       :p\_unit
      and distance between :p\_distance\_l and :p\_distance\_u;