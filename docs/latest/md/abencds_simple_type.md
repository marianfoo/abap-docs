---
title: "Syntax"
description: |
  ... simple_type  ... Effect A CDS simple type(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm 'Glossary Entry') can be typed using another CDS simple type. The annotations of the underlying simple type are inherited. It is possible to overwrite these
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type.htm"
abapFile: "abencds_simple_type.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "simple", "type"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Core Data Services (ABAP CDS)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds.htm) →  [ABAP CDS - Type Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_tdl.htm) →  [ABAP CDS - TDL for Type Definitions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_types.htm) →  [CDS TDL - DEFINE TYPE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_type.htm) →  [ABAP CDS - Simple Types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_types.htm) →  [CDS TDL - DEFINE TYPE simple\_type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_define_simple_type.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20CDS%20TDL%20-%20CDS%20Simple%20Type%2C%20simple_type%2C%20ABENCDS_SIMPLE_TYPE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvemen
t:)

CDS TDL - CDS Simple Type, simple\_type

Syntax

... simple\_type  ...

Effect

A [CDS simple type](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencds_simple_type_glosry.htm "Glossary Entry") can be typed using another CDS simple type. The annotations of the underlying simple type are inherited. It is possible to overwrite these annotations using locally defined annotations in the overlying simple type.

When stacking CDS simple types, the maximum nesting depth is five. This means that a stack of simple types can have a maximum of five layers, from base to top-most.

Example

The following CDS simple type is created with reference to another CDS simple type. It inherits all the properties and annotations of the referenced simple type.

define type DEMO\_SIMPLE\_TYPE\_2 : DEMO\_SIMPLE\_TYPE;