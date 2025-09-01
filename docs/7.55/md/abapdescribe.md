---
title: "DESCRIBE"
description: |
  Syntax Forms Field Properties(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_field.htm) 1. DESCRIBE FIELD ... Properties of an Internal Table(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_table.htm) 2. DESCRIBE TABLE ... Distance Between Two
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe.htm"
abapFile: "abapdescribe.htm"
keywords: ["do", "try", "class", "data", "types", "internal-table", "abapdescribe"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_working.htm) →  [Attributes of Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescribe_field.htm) → 

DESCRIBE

Syntax Forms

[Field Properties](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_field.htm)
1\. DESCRIBE FIELD ...
[Properties of an Internal Table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_table.htm)
2\. DESCRIBE TABLE ...
[Distance Between Two Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_distance.htm)
3\. DESCRIBE DISTANCE ...

Effect

The variants of the statement DESCRIBE listed above can be used to determine some of the properties that data objects have at runtime.

Hints

-   The statement DESCRIBE is mainly suitable for determining the attributes of data objects of elementary data types. When DESCRIBE is used for structures or data objects of [deep](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendeep_glosry.htm "Glossary Entry") data types like strings, internal tables, or reference variables, only elementary attributes can be determined. Additional information, for example the static or dynamic type of a reference variable, cannot be determined by DESCRIBE. For this kind of information, the type description classes of [runtime type services](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrun_time_type_services_glosry.htm "Glossary Entry") (RTTS) should be used. These enable all data object attributes of all data types to be determined. Since the functions of the RTTS type description classes cover all functions of the DESCRIBE statement, the system classes can be used instead of the statement.

-   The variant [DESCRIBE LIST](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_list.htm) determines the attributes of lists in the list buffer.

Continue
[DESCRIBE FIELD](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_field.htm)
[DESCRIBE TABLE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_table.htm)
[DESCRIBE DISTANCE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapdescribe_distance.htm)
[DESCRIBE, Internal Variant](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendescribe_internal.htm)