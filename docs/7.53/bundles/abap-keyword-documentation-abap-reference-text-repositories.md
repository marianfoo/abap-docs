# ABAP Keyword Documentation / ABAP − Reference / Text Repositories

Included pages: 2


### abentext_pool.htm

---
title: "Texts in Text Pools"
description: |
  Text pools are persistent repositories for the following text elements(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_element_glosry.htm 'Glossary Entry'): -   Text symbols(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_symbol_glosry.htm 'Glossary Entry'
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_pool.htm"
abapFile: "abentext_pool.htm"
keywords: ["select", "do", "while", "if", "try", "class", "types", "abentext", "pool"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_texts.htm) → 

Texts in Text Pools

Text pools are persistent repositories for the following [text elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_element_glosry.htm "Glossary Entry"):

-   [Text symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_symbol_glosry.htm "Glossary Entry")

-   [List headers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_header_glosry.htm "Glossary Entry") ([standard page header](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_page_header_glosry.htm "Glossary Entry"))

-   [Selection texts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_text_glosry.htm "Glossary Entry")

There is one text pool for the original language of the program and one text pool for each translation language. Text pools are supported for the following [program types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_type_oview.htm):

-   Executable programs

-   Class pools

-   Function groups

-   Module pools

-   Subroutine pools

From which text pool an ABAP program takes its texts depends on the [logon language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language_glosry.htm "Glossary Entry") or a secondary language
or can be configured while the program is being executed .

-   When a program is loaded into an [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"), the text elements of the text pool of the [logon language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language_glosry.htm "Glossary Entry") are imported by default. If this text pool does not exist, the text pool of the [secondary language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used. If none of these text pools exists, an empty text pool without text elements is loaded.

-   When the program is executed, the text pool of a different language can be loaded using the statement [SET LANGUAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_language.htm).

Note

In [global classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_class_glosry.htm "Glossary Entry") and [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_group_glosry.htm "Glossary Entry"), the text pools are assigned to the associated framework program. In the repository, this program has a different name from the class or function group.

Continue
[SET LANGUAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_language.htm)


### abentext_pool.htm

---
title: "Texts in Text Pools"
description: |
  Text pools are persistent repositories for the following text elements(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_element_glosry.htm 'Glossary Entry'): -   Text symbols(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_symbol_glosry.htm 'Glossary Entry'
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_pool.htm"
abapFile: "abentext_pool.htm"
keywords: ["select", "do", "while", "if", "try", "class", "types", "abentext", "pool"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_texts.htm) → 

Texts in Text Pools

Text pools are persistent repositories for the following [text elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_element_glosry.htm "Glossary Entry"):

-   [Text symbols](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_symbol_glosry.htm "Glossary Entry")

-   [List headers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_header_glosry.htm "Glossary Entry") ([standard page header](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenstandard_page_header_glosry.htm "Glossary Entry"))

-   [Selection texts](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_text_glosry.htm "Glossary Entry")

There is one text pool for the original language of the program and one text pool for each translation language. Text pools are supported for the following [program types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_type_oview.htm):

-   Executable programs

-   Class pools

-   Function groups

-   Module pools

-   Subroutine pools

From which text pool an ABAP program takes its texts depends on the [logon language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language_glosry.htm "Glossary Entry") or a secondary language
or can be configured while the program is being executed .

-   When a program is loaded into an [internal session](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abeninternal_session_glosry.htm "Glossary Entry"), the text elements of the text pool of the [logon language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language_glosry.htm "Glossary Entry") are imported by default. If this text pool does not exist, the text pool of the [secondary language](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abensecondary_language_glosry.htm "Glossary Entry") in AS ABAP is used. If none of these text pools exists, an empty text pool without text elements is loaded.

-   When the program is executed, the text pool of a different language can be loaded using the statement [SET LANGUAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_language.htm).

Note

In [global classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_class_glosry.htm "Glossary Entry") and [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_group_glosry.htm "Glossary Entry"), the text pools are assigned to the associated framework program. In the repository, this program has a different name from the class or function group.

Continue
[SET LANGUAGE](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_language.htm)
