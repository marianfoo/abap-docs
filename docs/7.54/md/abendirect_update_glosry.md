---
title: "direct_update_glosry"
description: |
  direct_update_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendirect_update_glosry.htm"
abapFile: "abendirect_update_glosry.htm"
keywords: ["insert", "update", "do", "if", "try", "internal-table", "abendirect", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

direct update

Procedure to create or update unique [secondary table keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") of [internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_table_glosry.htm "Glossary Entry"). After an insertion operation using [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm) or [APPEND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend.htm), a modifying operating using [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm), or a block operation in which the whole table body is filled in one go, unique secondary table keys are updated immediately. See also [delayed update](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendelayed_update_glosry.htm "Glossary Entry") and [lazy update](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlazy_update_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_secondary_update.htm)