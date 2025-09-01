---
title: "Syntax"
description: |
  ... WITH PARAMETERS parameter1(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_param.htm), parameter2(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_param.htm), ... Effect Defines CDS parameters(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/e
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_parameter_list.htm"
abapFile: "abencds_f1_custom_parameter_list.htm"
keywords: ["do", "if", "try", "data", "abencds", "custom", "parameter", "list"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - CDS Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_view_entity.htm) →  [ABAP CDS - Custom Entities](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_entities.htm) →  [CDS DDL - DEFINE CUSTOM ENTITY](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_define_custom_entity.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20DDL%20-%20DEFINE%20CUSTOM%20ENTITY%2C%20parameter_list%2C%20ABENCDS_F1_CUSTOM_PARAMETER_LIST%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggesti
on%20for%20improvement:)

CDS DDL - DEFINE CUSTOM ENTITY, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_param.htm), ... as input parameters of a CDS custom entity in a comma-separated list.

An input parameter called pname is used to model the interface of a CDS custom entity. It cannot be used in the [element list](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_f1_custom_element_list.htm) of the CDS custom entity.

Example

The following DDL source code shows a CDS custom entity with an input parameter:

@EndUserText.label: 'CDS custom entity, query implementation'
@ObjectModel.query.implementedBy: 'ABAP:CL\_DEMO\_CUSTOM\_ENTITY\_QUERY'
define custom entity DEMO\_CDS\_CUSTOM\_ENTITY
  with parameters
    p\_number : int1
  {
    key id   : int4;
        uuid : abap.char(32);
  }

This CDS custom entity is used in the [executable example for implementing a custom entity](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abencds_custom_query_abexa.htm).