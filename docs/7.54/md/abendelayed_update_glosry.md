---
title: "delayed_update_glosry"
description: |
  delayed_update_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendelayed_update_glosry.htm"
abapFile: "abendelayed_update_glosry.htm"
keywords: ["update", "do", "if", "try", "data", "internal-table", "field-symbol", "abendelayed", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

delayed update

Procedure to create or update unique [secondary table keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") of [internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_table_glosry.htm "Glossary Entry"). After a modifying operation using [field symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield_symbol_glosry.htm "Glossary Entry") or [data references](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_reference_glosry.htm "Glossary Entry"), unique secondary table keys are not updated immediately; instead they are updated the next time the internal table is accessed. See also [direct update](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendirect_update_glosry.htm "Glossary Entry") and [lazy update](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlazy_update_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_secondary_update.htm)