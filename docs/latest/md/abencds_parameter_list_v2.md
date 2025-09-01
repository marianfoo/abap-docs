  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_view_entity.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20parameter_list%2C%20ABENCDS_PARAMETER_LIST_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20i
mprovement:)

CDS DDL - CDS View Entity, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_f1_param.htm), ... as input parameters of a [CDS view entity](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_v2_view_glosry.htm "Glossary Entry") in a comma-separated list.

An input parameter called pname can be accessed using the syntax $parameters.pname.

A parameter must be typed with an elementary data type. All data types listed in topic [Typing](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_typing.htm) are allowed, except for abap.accp, abap.geom\_ewkb, and abap.rawstring.

It can be used as an operand in the following places in the [SELECT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_statement_v2.htm) statement of the view entity:

-   [Element](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_entry_v2.htm) in the [SELECT list](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_select_list_v2.htm). An [alias name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenalias_glosry.htm "Glossary Entry") is mandatory.
-   Operand of an [arithmetic expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm). The parameter can have any of the numeric data types that are supported in arithmetic expressions in SELECT statements (see [here](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_arithmetic_expression_v2.htm)).
-   Operand of an [aggregate expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_aggregate_functions_v2.htm). The parameter can have any of the data types that are supported in aggregate expressions in SELECT statements.
-   Operand of a [case distinction](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_case_expression_v2.htm).
-   Operand of a [cast expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_cast_expression_v2.htm).
-   Operand of a [built-in function](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_builtin_functions_v2.htm), as long as it has a suitable data type.
-   Right side of an expression [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm) in a [WHERE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_where_clause_v2.htm) clause or [HAVING clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_having_clause_v2.htm)
-   Right side of an expression [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm) in an ON condition in an [ABAP join](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_joined_data_source_v2.htm) or a [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_v2.htm)
-   Right side of an expression [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm) in a [filter condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_filter_v2.htm) of a [path expression](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_path_expression_v2.htm)
-   Right side of an expression [cds\_cond](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_conditional_expression_v2.htm) in the [default filter condition](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_association_v2.htm) of a [CDS association](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_association_v2.htm)

Example

The following CDS view entity has a list of three input parameters used in the [WHERE clause](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_where_clause_v2.htm) of the SELECT statement. For information about passing actual parameters in a SELECT statement in ABAP, see the executable example [SELECT, CDS View Entity with Input Parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselect_cds_para_abexa.htm).

@AccessControl.authorizationCheck: #NOT\_REQUIRED
@EndUserText.label: 'View Entity with Input Parameters'
define view entity Demo\_Cds\_Param\_View\_Entity  
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
          distid   =       $parameters.p\_unit
      and distance between $parameters.p\_distance\_l  
                       and $parameters.p\_distance\_u;