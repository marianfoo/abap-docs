---
title: "sharing_glosry"
description: |
  sharing_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensharing_glosry.htm"
abapFile: "abensharing_glosry.htm"
keywords: ["do", "if", "try", "data", "types", "internal-table", "abensharing", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

sharing

When [assignments](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenassignment_glosry.htm "Glossary Entry") are made between [dynamic data objects](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendynamic_data_object_glosry.htm "Glossary Entry") ([strings](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenstring_glosry.htm "Glossary Entry") of the same category and [internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_table_glosry.htm "Glossary Entry") of the same category) and if these data types are [passed by value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenpass_by_value_glosry.htm "Glossary Entry"), for performance reasons, only the required internal administration entries for the string or [table body](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_body_glosry.htm "Glossary Entry") are passed ([table sharing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_sharing_glosry.htm "Glossary Entry") possible only if the [row type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrow_type_glosry.htm "Glossary Entry") itself does not contain any [table types](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentable_type_glosry.htm "Glossary Entry")). Sharing is not canceled until one of the data objects involved is accessed and changed. At this point, the actual copy process takes place. See also [initial value sharing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninitial_value_sharing_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenmemory_consumption_3.htm)