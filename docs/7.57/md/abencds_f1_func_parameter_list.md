---
title: "Syntax"
description: |
  ... WITH PARAMETERS parameter1(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), parameter2(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), ... Effect Defines CDS parameters(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/e
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_func_parameter_list.htm"
abapFile: "abencds_f1_func_parameter_list.htm"
keywords: ["do", "if", "case", "try", "method", "data", "types", "abencds", "func", "parameter", "list"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_view_entity.htm) →  [ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_functions.htm) →  [CDS DDL - DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_table_function.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: CDS DDL - DEFINE TABLE FUNCTION, parameter_list, ABENCDS_F1_FUNC_PARAMETER_LIST, 757%
0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

CDS DDL - DEFINE TABLE FUNCTION, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_param.htm), ... as input parameters of a [CDS table function](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_table_function_glosry.htm "Glossary Entry") in a comma-separated list.

A parameter must be typed with an elementary data type. All data types listed in topic [Typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_typing.htm) are allowed, except for abap.accp, abap.geom\_ewkb, and abap.rawstring.

The input parameters of the [AMDP function implementation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenamdp_function_methods.htm) amdp\_function specified after [IMPLEMENTED BY METHOD](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_define_table_function.htm) are generated from the input parameters specified here. The ABAP data types of the input parameters of the AMDP function implementation are derived from the [built-in data types](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_builtin_types.htm) in ABAP Dictionary specified by the [typing](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_typing.htm), in accordance with the associated mapping rules for type references to ABAP Dictionary.

In the case of [client-dependent](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_func_client_handling.htm) CDS table functions, each input parameter with the built-in dictionary type CLNT must be annotated with the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_parameter_annotations.htm) and the predefined value [#CLIENT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_f1_parameter_annotations.htm).