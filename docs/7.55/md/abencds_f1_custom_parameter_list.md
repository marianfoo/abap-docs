  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_define_custom_entity.htm) → 

CDS DDL - DEFINE CUSTOM ENTITY, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_param.htm), ... as input parameters of a CDS custom entity in a comma-separated list.

An input parameter called pname is used to model the interface of a CDS custom entity. It cannot be used in the [element list](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_f1_custom_element_list.htm) of the CDS custom entity.