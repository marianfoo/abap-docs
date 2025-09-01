---
title: "Syntax"
description: |
  ...  element1(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_list_element.htm); element2(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_list_element.htm); ...;  ... Effect Defines the elements of an abstract CDS entity(https://help.
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_element_list.htm"
abapFile: "abencds_f1_absent_element_list.htm"
keywords: ["do", "if", "try", "data", "types", "abencds", "absent", "element", "list"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP - Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dictionary.htm) →  [ABAP CDS in ABAP Dictionary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds.htm) →  [ABAP CDS - Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_cds_entities.htm) →  [ABAP CDS - DDL for Data Definitions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_ddl_syntax.htm) →  [ABAP CDS - DEFINE ABSTRACT ENTITY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_define_abstract_entity.htm) → 

ABAP CDS - DEFINE ABSTRACT ENTITY, element\_list

Syntax

... { [element1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_list_element.htm); [element2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_list_element.htm); ...; } ...

Effect

Defines the elements of an [abstract CDS entity](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabstract_entity_glosry.htm "Glossary Entry"). The elements are specified in a semicolon-separated list [element1](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_list_element.htm); [element2](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_list_element.htm); ...; in curly brackets { }. The final element must also be followed by a semicolon.

The elements either determine the components of the structured data type represented by an abstract CDS entity with respect to ABAP or they publish a CDS association.

The ABAP data types of the components of the structured data type are derived from the dictionary types of the elements in accordance with the associated [mapping rules](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenddic_builtin_types.htm).

Continue
[ABAP CDS - DEFINE ABSTRACT ENTITY, element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abencds_f1_absent_list_element.htm)