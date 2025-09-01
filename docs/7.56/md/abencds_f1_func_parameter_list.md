  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_view_entity.htm) →  [ABAP CDS - Table Functions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_functions.htm) →  [CDS DDL - DEFINE TABLE FUNCTION](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_table_function.htm) → 

CDS DDL - DEFINE TABLE FUNCTION, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_param.htm), ... as input parameters of a [CDS table function](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_table_function_glosry.htm "Glossary Entry") in a comma-separated list.

The input parameters of the [AMDP function implementation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenamdp_function_methods.htm) amdp\_function specified after [IMPLEMENTED BY METHOD](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_define_table_function.htm) are generated from the input parameters specified here. The ABAP data types of the input parameters of the AMDP function implementation are derived from the [built-in data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenddic_builtin_types.htm) in ABAP Dictionary specified by the [typing](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_typing.htm), in accordance with the associated mapping rules for type references to ABAP Dictionary.

In the case of [client-dependent](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_func_client_handling.htm) CDS table functions, each input parameter with the built-in dictionary type CLNT must be annotated with the annotation [@Environment.systemField](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm) and the predefined value [#CLIENT](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencds_f1_parameter_annotations.htm).