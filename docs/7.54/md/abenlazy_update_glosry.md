---
title: "lazy_update_glosry"
description: |
  lazy_update_glosry - ABAP 7.54 language reference documentation
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlazy_update_glosry.htm"
abapFile: "abenlazy_update_glosry.htm"
keywords: ["insert", "update", "do", "if", "try", "method", "data", "internal-table", "field-symbol", "abenlazy", "glosry"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_glossary.htm) → 

lazy update

Method for creating or updating non-unique [secondary table keys](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") in [internal tables](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abeninternal_table_glosry.htm "Glossary Entry"). Non-unique secondary tables keys are not updated straight after insert operations using [INSERT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_itab.htm) or [APPEND](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapappend.htm), or after a block operation that fills the whole table body at once, or after an operation using [MODIFY](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapmodify_itab.htm), or using [field symbols](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfield_symbol_glosry.htm "Glossary Entry") or [data references](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_reference_glosry.htm "Glossary Entry"). The keys are updated the next time they are used explicitly. See also [direct update](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendirect_update_glosry.htm "Glossary Entry") and [delayed update](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendelayed_update_glosry.htm "Glossary Entry").

[→ More](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenitab_key_secondary_update.htm)