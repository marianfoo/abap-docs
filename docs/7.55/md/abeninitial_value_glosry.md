---
title: "initial_value_glosry"
description: |
  initial_value_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninitial_value_glosry.htm"
abapFile: "abeninitial_value_glosry.htm"
keywords: ["do", "try", "data", "types", "internal-table", "abeninitial", "value", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

initial value

The ABAP runtime environment defines an initial value for each [data type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_type_glosry.htm "Glossary Entry"). The initial values of the [elementary data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenelementary_data_type_glosry.htm "Glossary Entry") depend on the corresponding [built-in ABAP type](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_types_complete.htm). The initial value of [reference types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreference_type_glosry.htm "Glossary Entry") is the [null reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abennull_reference_glosry.htm "Glossary Entry"). The initial value of an [internal table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_table_glosry.htm "Glossary Entry") is an empty table without lines. The initial value of [structured types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstructured_type_glosry.htm "Glossary Entry") is produced from the initial values of the individual [components](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencomponent_glosry.htm "Glossary Entry"). The statement [CLEAR](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclear.htm) with no additions sets a [data object](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendata_object_glosry.htm "Glossary Entry") to the appropriate initial value for its type. Initial values are also assigned to most [built-in data types](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"), but those are not evaluated in ABAP programs.