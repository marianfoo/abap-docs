---
title: "Lazy Update"
description: |
  Procedure to create or update non-unique secondary table keys(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm 'Glossary Entry') of internal tables(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_table_glosry.htm 'Glossary Entr
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlazy_update_glosry.htm"
abapFile: "abenlazy_update_glosry.htm"
keywords: ["insert", "update", "do", "if", "try", "data", "internal-table", "field-symbol", "abenlazy", "glosry"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_glossary.htm) → 

Lazy Update

Procedure to create or update non-unique [secondary table keys](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") of [internal tables](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abeninternal_table_glosry.htm "Glossary Entry"). Non-unique secondary tables keys are not updated straight after insert operations using [INSERT](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_itab.htm), or [APPEND](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapappend.htm), or a block operation in which the whole table body is filled at once, or after a operation using [MODIFY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapmodify_itab.htm), or via [field symbols](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfield_symbol_glosry.htm "Glossary Entry"), or [data references](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendata_reference_glosry.htm "Glossary Entry"). They are updated at the next explicit usage. See also [direct update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendirect_update_glosry.htm "Glossary Entry") and [delayed update](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abendelayed_update_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenitab_key_secondary_update.htm)