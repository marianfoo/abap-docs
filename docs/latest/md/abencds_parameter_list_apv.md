  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - Projection Views](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_proj_views.htm) →  [CDS DDL - CDS Projection View, Analytical Queries](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_query_apv.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20parameter_list%2C%20Analytical%20Query%2C%20ABENCDS_PARAMETER_LIST_APV%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CDS DDL - parameter\_list, Analytical Query

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), ... as input parameters of a [CDS analytical projection view](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_analytical_pv_glosry.htm "Glossary Entry") in a comma-separated list.

An input parameter called pname can be accessed using the syntax $parameters.pname.

It can be used as an operand in the following places in the [element\_list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_list_apv.htm) of the projection view:

-   [Element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_apv.htm) in the [element list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_element_list_apv.htm). An [alias name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalias_glosry.htm "Glossary Entry") is mandatory.
-   Operand of an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm). The parameter can have any of the numeric data types that are supported in arithmetic expressions (see [here](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm)).
-   Operand of a [cast expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm).
-   Operand of a [case expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_apv.htm).
-   Operand of a [built-in function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v2.htm), as long as it has a suitable data type.
-   Operand of an expression cds\_cond in a [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_where_apv.htm) clause.

Caution: Not more than one parameter can be annotated with @Semantics.businessDate.At, because the [ABAP Analytical Engine](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_ae_glosry.htm "Glossary Entry") currently supports only one temporal dependency.

Parameter Passing

How to pass values to input parameter is described in topic [CDS parameter passing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_parameters_v2.htm).

Hint

If the underlying [projected entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_pv_projected_entity_glosry.htm "Glossary Entry") requires parameters, you can pass them on using the following syntax:
DEFINE TRANSIENT VIEW ENTITY analytical\_query
  AS PROJECTION ON cds\_entity ( parameter : $parameter.param )

Example

The following CDS analytical projection view DEMO\_CDS\_ANALYTIC\_PARAMETER defines an analytical query with an input parameter. The input parameter is used for a currency conversion. The projection view is based on the cube view DEMO\_CDS\_CUBE\_VIEW.

@EndUserText.label: 'analytical pv, parameter'
@AccessControl.authorizationCheck: #NOT\_ALLOWED
define transient view entity DEMO\_CDS\_ANALYTIC\_PARAMETER
  provider contract analytical\_query
  with parameters
    p\_targetCurrency : abap.cuky
  as projection on DEMO\_CDS\_CUBE\_VIEW
{
  so\_key,
  @Aggregation.default: #FORMULA
  @Semantics.amount.currencyCode: 'targetCurrency'
  currency\_conversion(
    amount => amount\_sum,
    source\_currency => currency\_sum,
    target\_currency => $parameters.p\_targetCurrency,
    exchange\_rate\_date => created\_on
  )                            as convertedAmount,
  @Aggregation.default: #FORMULA
  $parameters.p\_targetCurrency as targetCurrency
}