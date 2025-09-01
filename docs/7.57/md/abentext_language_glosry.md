---
title: "text_language_glosry"
description: |
  text_language_glosry - ABAP 7.57 language reference documentation
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_language_glosry.htm"
abapFile: "abentext_language_glosry.htm"
keywords: ["do", "if", "try", "data", "abentext", "language", "glosry"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: text language, ABENTEXT_LANGUAGE_GLOSRY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

text language

Label of a component of type LANG of a [structure](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenstructure_glosry.htm "Glossary Entry") defined in the [ABAP Dictionary](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dictionary_glosry.htm "Glossary Entry") or in a [DDIC database table](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenddic_db_table_glosry.htm "Glossary Entry"). Only one component of this type can be labeled as the text language. The text language is used when the structure is passed between [MDMP systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmdmp-system_glosry.htm "Glossary Entry") and [Unicode systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_system_glosry.htm "Glossary Entry") for the conversion of character-like components by the statement [IMPORT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenimport_text_language.htm) or by TABLES parameters with the binary [RFC protocol](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_protocol.htm). Furthermore, the text language can affect which lines of a database table are transported by the [Change and Transport System](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencts_glosry.htm "Glossary Entry"). Depending on settings in the CTS, only entries in the original language of the database table can be transported.