---
title: "CDS DDL - CDS View Entity, Time Functions"
description: |
  Syntax ... TIMS_IS_VALID(time) ... Effect In a CDS view entity(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm 'Glossary Entry'), the function TIMS_IS_VALID determines whether the positional parameter(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/
version: "7.58"
category: "cds"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_time_functions_v2.htm"
abapFile: "abencds_time_functions_v2.htm"
keywords: ["select", "do", "if", "try", "class", "data", "types", "abencds", "time", "functions"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - View Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_views.htm) →  [CDS DDL - DEFINE VIEW ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_define_view_entity.htm) →  [CDS DDL - CDS View Entity, SELECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_select_statement_v2.htm) →  [CDS DDL - SELECT, CDS View Entity, Operands and Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_operands_and_expr_v2.htm) →  [CDS DDL - CDS View Entity, Expressions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_expressions_v2.htm) →  [CDS DDL - CDS View Entity, Built-In Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm) →  [CDS DDL - CDS View Entity, Special Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_special_functions_v2.htm) →  [CDS DDL - CDS View Entity, Date Functions and Time Functions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_date_time_functions_v2.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20CDS%20View%20Entity%2C%20Time%20Functions%2C%20ABENCDS_TIME_FUNCTIONS_V2%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%2
0improvement:)

CDS DDL - CDS View Entity, Time Functions

Syntax

... TIMS\_IS\_VALID(time) ...

Effect

In a [CDS view entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_v2_view_glosry.htm "Glossary Entry"), the function TIMS\_IS\_VALID determines whether the [positional parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenpositional_parameter_glosry.htm "Glossary Entry") time contains a valid time in the format HHMMSS. The actual parameter must have the built-in data type [TIMS](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm). time can be specified as [literal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_literal_v2.htm), field of a [data source](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_data_source_v2.htm), [parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_v2.htm), [path expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_path_expression_v2.htm), [reuse expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_reusable_expression_v2.htm) using $projection, an [SQL-based scalar function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_sql_scalar_function.htm), or [built-in function](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_builtin_functions_v2.htm). The result has the data type [INT4](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenddic_builtin_types.htm). A valid date produces the value 1 and all other input values (including the null value) produce the value 0.

Hint

It is not currently possible to access the current system time directly in a CDS view entity. Instead, a CDS view entity can be given an appropriate [input parameter](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_list_v2.htm). The special annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_parameter_annotations.htm) makes it possible to pass the value of the [ABAP system field](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensystem_field_glosry.htm "Glossary Entry") sy-uzeit to this parameter.

Example

The following CDS view entity demonstrates how to use the time function TIMS\_IS\_VALID. The class CL\_DEMO\_CDS\_TIME\_FUNC\_VE uses SELECT to access the view. You can assign any value to the column TIMS1 of the DDIC database table DEMO\_EXPRESSIONS.

@AccessControl.authorizationCheck: #NOT\_REQUIRED
define view entity DEMO\_CDS\_TIME\_FUNC\_VE
  as select from demo\_expressions
{
  key id,
      tims1                                        as time1,
      tims\_is\_valid(120102)                        as valid,
      tims\_is\_valid(tims\_from\_timn(timn1, 'FAIL')) as valid1,
      tims\_is\_valid(tims1)                         as valid2
}