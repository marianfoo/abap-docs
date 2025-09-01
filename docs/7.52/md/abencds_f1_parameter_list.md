  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE VIEW](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_define_view.htm) → 

ABAP CDS - DEFINE VIEW, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm), ...

Effect

Defines input parameters [parameter1](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_param.htm), ... in a [CDS view](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_view_glosry.htm "Glossary Entry") in in a comma-separated list.

An input parameter called pname can be used as an operand in the following places in the [SELECT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_statement.htm) statement of the view using the syntax [:pname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter.htm) or [$parameters.pname](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_parameter.htm):

-   [Element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list_entry.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_select_list.htm)

-   Operand of an [arithmetic expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_arithmetic_expression.htm)

-   Operand operand directly after case in a [case distinction](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_case_expression.htm)

-   [Right side](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_where.htm) of an expression [cond\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) in a [WHERE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_where_clause.htm) clause or [HAVING clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_having_clause.htm)

-   [Right side](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_where.htm) of an expression [cond\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) in an ON condition in an [ABAP join](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_joined_data_source.htm) or an [association](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_association.htm)

-   [Right side](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_cond_expr_where.htm) of an expression [cond\_exp](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_conditional_expression.htm) in a [filter condition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_path_expression_attr.htm) of a [path expression](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_path_expression.htm)

Example

The following CDS view has a list of three input parameters used in the [WHERE clause](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencds_f1_where_clause.htm) of the SELECT statement. For information about passing actual parameters in a SELECT statement in ABAP, see the executable example [SELECT, CDS View with Input Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselect_cds_para_abexa.htm).

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