---
title: "standard_key_glosry"
description: |
  standard_key_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_key_glosry.htm"
abapFile: "abenstandard_key_glosry.htm"
keywords: ["do", "if", "try", "data", "types", "internal-table", "abenstandard", "key", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

standard key

[Primary table key](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprimary_table_key_glosry.htm "Glossary Entry") of an [internal table](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abeninternal_table_glosry.htm "Glossary Entry"), whose [key fields](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenkey_field_glosry.htm "Glossary Entry") in a structured [line type](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenrow_type_glosry.htm "Glossary Entry") are all table fields with [character-like data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencharlike_data_type_glosry.htm "Glossary Entry") and [byte-like data types](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbyte_like_data_typ_glosry.htm "Glossary Entry"). If the line type contains [substructures](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensubstructure_glosry.htm "Glossary Entry"), they are broken down into elementary [components](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencomponent_glosry.htm "Glossary Entry"). The standard key for non-structured line types is the entire table line, if the line type itself is not a table type. If there are no corresponding table fields, or the line type itself is a table type, the standard key of [standard tables](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenstandard_table_glosry.htm "Glossary Entry") is empty or contains no key fields.

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenitab_standard_key.htm)