  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Core Data Services (ABAP CDS)](javascript:call_link\('abencds.htm'\)) →  [ABAP CDS - Data Definitions](javascript:call_link\('abencds_entities.htm'\)) →  [ABAP CDS - DDL for Data Definitions](javascript:call_link\('abencds_f1_ddl_syntax.htm'\)) →  [ABAP CDS - CDS Entities](javascript:call_link\('abencds_view_entity.htm'\)) →  [ABAP CDS - Table Functions](javascript:call_link\('abencds_table_functions.htm'\)) →  [CDS DDL - DEFINE TABLE FUNCTION](javascript:call_link\('abencds_f1_define_table_function.htm'\)) → 

CDS DDL - DEFINE TABLE FUNCTION, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ...

Effect

Defines [CDS parameters](javascript:call_link\('abencds_parameter_glosry.htm'\) "Glossary Entry") [parameter1](javascript:call_link\('abencds_f1_param.htm'\)), [parameter2](javascript:call_link\('abencds_f1_param.htm'\)), ... as input parameters of a [CDS table function](javascript:call_link\('abencds_table_function_glosry.htm'\) "Glossary Entry") in a comma-separated list.

The input parameters of the [AMDP function implementation](javascript:call_link\('abenamdp_function_methods.htm'\)) amdp\_function specified after [IMPLEMENTED BY METHOD](javascript:call_link\('abencds_f1_define_table_function.htm'\)) are generated from the input parameters specified here. The ABAP data types of the input parameters of the AMDP function implementation are derived from the [built-in data types](javascript:call_link\('abenddic_builtin_types.htm'\)) in ABAP Dictionary specified by the [typing](javascript:call_link\('abencds_typing.htm'\)), in accordance with the associated mapping rules for type references to ABAP Dictionary.

In the case of [client-dependent](javascript:call_link\('abencds_func_client_handling.htm'\)) CDS table functions, each input parameter with the built-in dictionary type CLNT must be annotated with the annotation [@Environment.systemField](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)) and the predefined value [#CLIENT](javascript:call_link\('abencds_f1_parameter_annotations.htm'\)).