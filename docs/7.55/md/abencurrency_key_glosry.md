---
title: "currency_key_glosry"
description: |
  currency_key_glosry - ABAP 7.55 language reference documentation
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencurrency_key_glosry.htm"
abapFile: "abencurrency_key_glosry.htm"
keywords: ["do", "if", "try", "data", "types", "abencurrency", "key", "glosry"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_glossary.htm) → 

currency key

Component of a [DDIC structure](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_structure_glosry.htm "Glossary Entry"), or [DDIC database table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_db_table_glosry.htm "Glossary Entry"), or [DDIC view](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendictionary_view_glosry.htm "Glossary Entry") of the type [CUKY](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_builtin_types.htm) defined in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). A currency key can be linked to a [currency field](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencurrency_field_glosry.htm "Glossary Entry") of a structure, database table, or view. The currency key contains a [currency code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the database table TCURC, and is used to define the currency for the currency field. By default, the number of decimal places of a currency is always two. Currencies with a different number of decimal places must be entered additionally in the table TCURX, where the number of decimal places can be defined explicitly.

[→ More about](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenddic_currency_field.htm)