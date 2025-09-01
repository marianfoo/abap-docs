---
title: "DDIC - Text Language of Database Tables"
description: |
  One field of type LANG(abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_7) (language key) can be labeled as the text language(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_language_glosry.htm 'Glossary Entry') of a DDIC database table. The text language is use
version: "latest"
category: "database"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_dbtab_text_language.htm"
abapFile: "abenddic_dbtab_text_language.htm"
keywords: ["do", "if", "try", "data", "types", "abenddic", "dbtab", "text", "language"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Dictionary (DDIC)](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_dictionary.htm) →  [DDIC - Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables.htm) →  [DDIC - Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_sema.htm) →  [DDIC - Table-Specific Semantic Properties of Database Tables](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenddic_database_tables_semasspec.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20DDIC%20-%20Text%20Language%20of%20Database%20Tables%2C%20ABENDDIC_DBTAB_TEXT_LANGUAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20im
provement:)

DDIC - Text Language of Database Tables

One field of type [LANG](abenddic_builtin_types.htm#@@ITOC@@ABENDDIC_BUILTIN_TYPES_7) (language key) can be labeled as the [text language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_language_glosry.htm "Glossary Entry") of a DDIC database table.

The text language is used when structured data of that type is passed between [MDMP systems](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and [Unicode systems](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenunicode_system_glosry.htm "Glossary Entry") for the conversion of character-like components in the following situations:

-   Import of data from [data clusters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendata_cluster_glosry.htm "Glossary Entry"), see [IMPORT, Text Language Rule](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenimport_text_language.htm)
-   Passing TABLES parameters to [RFMs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfm_glosry.htm "Glossary Entry") with the binary [RFC protocol](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenrfc_protocol.htm).

Furthermore, the text language can affect which lines of a database table are transported by the [Change and Transport System](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencts_glosry.htm "Glossary Entry"). Depending on settings in the CTS, only entries in the original language of the database table can be transported.