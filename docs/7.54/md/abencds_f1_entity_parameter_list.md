---
title: "Syntax"
description: |
  ... WITH PARAMETERS parameter1(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm), parameter2(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm), ... Effect Defines CDS parameters(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/e
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_entity_parameter_list.htm"
abapFile: "abencds_f1_entity_parameter_list.htm"
keywords: ["do", "if", "try", "class", "data", "abencds", "entity", "parameter", "list"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_abstract_entity.htm) → 

ABAP CDS - DEFINE ABSTRACT ENTITY, parameter\_list

Syntax

... WITH PARAMETERS [parameter1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm), ...

Effect

Defines [CDS parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_parameter_glosry.htm "Glossary Entry") [parameter1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm), [parameter2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_param.htm), ... as input parameters of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry") in a comma-separated list.

Currently, input parameters called pname are used only to model the interface of an abstract entity. They cannot be used as operands in the abstract CDS entity.

Note

An input parameter cannot be specified as an element in the element list.

Example

The following DDL source code shows an abstract CDS entity with input parameters:

define abstract entity demo\_cds\_abstract\_entity\_para
  with parameters
    @EndUserText.label: 'Date parameter'
    p1 : abap.dats,
    @EndUserText.label: 'Integer parameter'
    p2 : abap.int4,
    @EndUserText.label: 'Data element parameter'
    p3 : char255
  {
    key col1 : abap.char(3);
        col2 : abap.int4;
  }

The program DEMO\_CDS\_ABSTRACT\_ENTITY\_PARA shows that the parameter annotations of the abstract CDS entity can be [evaluated](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_annotations_analysis.htm) using the class CL\_DD\_DDL\_ANNOTATION\_SERVICE.