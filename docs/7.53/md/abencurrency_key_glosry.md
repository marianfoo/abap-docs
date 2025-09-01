---
title: "currency_key_glosry"
description: |
  currency_key_glosry - ABAP 7.53 language reference documentation
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencurrency_key_glosry.htm"
abapFile: "abencurrency_key_glosry.htm"
keywords: ["do", "if", "try", "data", "types", "abencurrency", "key", "glosry"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_glossary.htm) → 

currency key

Component of a [structure](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstructure_glosry.htm "Glossary Entry"), [database table](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendatabase_table_glosry.htm "Glossary Entry"), or [view](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenview_glosry.htm "Glossary Entry") of the type [CUKY](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_builtin_types.htm) defined in [ABAP Dictionary](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_dictionary_glosry.htm "Glossary Entry"). A currency key can be associated with a [currency field](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencurrency_field_glosry.htm "Glossary Entry") of a structure, database table, or view. The currency key contains a [currency ID](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencurrency_id_glosry.htm "Glossary Entry") from the database table TCURC, and defines the currency for the currency field. By default, the number of decimal places for a currency is always two. Currencies with a different number of decimal places must also be entered in the table TCURX, where the number of decimal places can be defined explicitly.

[→ More](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenddic_currency_field.htm)