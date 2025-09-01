# ABAP - Keyword Documentation / ABAP - Programming Language / Text Repositories / Text Pools

Included pages: 2


### abentext_pool.htm

---
title: "Text Pools"
description: |
  Text pools are persistent repositories for the following text elements(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_element_glosry.htm 'Glossary Entry'): -   Text symbols(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_symbol_glosry.htm 'Glossary Entry'
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_pool.htm"
abapFile: "abentext_pool.htm"
keywords: ["select", "do", "while", "if", "try", "class", "types", "abentext", "pool"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_texts.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Text%20Pools%2C%20ABENTEXT_POOL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Text Pools

Text pools are persistent repositories for the following [text elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_element_glosry.htm "Glossary Entry"):

-   [Text symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_symbol_glosry.htm "Glossary Entry")
-   [List headers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_header_glosry.htm "Glossary Entry") ([standard page header](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_page_header_glosry.htm "Glossary Entry"))
-   [Selection texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_text_glosry.htm "Glossary Entry")

There is one text pool for the original language of the program and one text pool for each translation language. Text pools are supported for the following [program types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_type_oview.htm):

-   Executable programs
-   Class pools
-   Function pools
-   Module pools
-   Subroutine pools

From which text pool an ABAP program takes its texts depends on the [logon language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogon_language_glosry.htm "Glossary Entry") or a [secondary language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_language_glosry.htm "Glossary Entry") or can be configured while the program is running.

-   When a program is loaded into an [internal session](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abeninternal_session_glosry.htm "Glossary Entry"), the text elements of the text pool of the [logon language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogon_language_glosry.htm "Glossary Entry") are imported by default. If this text pool does not exist, the text pool of the [secondary language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_language_glosry.htm "Glossary Entry") of AS ABAP is used. If none of these text pools exist, an empty text pool without text elements is loaded.
-   When the program is executed, the text pool of a different language can be loaded using the statement [SET LANGUAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_language.htm).

Hint

In [global classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_class_glosry.htm "Glossary Entry") and [function pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), the text pools are assigned to the relevant master program. In the repository, this program has a different name than the class or function pool.

Continue
[SET LANGUAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_language.htm)


### abapset_language.htm

---
title: "SET LANGUAGE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_language_shortref.htm) Syntax SET LANGUAGE lang. Effect This statement loads the list headers(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_header_glosry.htm 'Glossary Entry') and text symbo
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_language.htm"
abapFile: "abapset_language.htm"
keywords: ["select", "do", "if", "case", "try", "data", "abapset", "language"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_texts.htm) →  [Text Pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_pool.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20LANGUAGE%2C%20ABAPSET_LANGUAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET LANGUAGE

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_language_shortref.htm)

Syntax

SET LANGUAGE lang.

Effect

This statement loads the [list headers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_header_glosry.htm "Glossary Entry") and [text symbols](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_symbol_glosry.htm "Glossary Entry") of the [text pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_pool_glosry.htm "Glossary Entry") of the language specified in lang. lang must be a character-like data object that contains a language key with the length 1. The possible language keys are contained in the SPRAS column of the database table T002. The loaded [text elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_element_glosry.htm "Glossary Entry") apply only to the current program and not to the programs called within it. If lang contains a space, the behavior is undefined.

If there is no text pool for the specified language, the text pool of the [secondary language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_language_glosry.htm "Glossary Entry") of AS ABAP is loaded. If a secondary language is not set, no new text pool is loaded and sy-subrc is set to 4. In this case, the program continues to use the text elements of the previous text pool.

If list headers and text symbols are missing in a text pool loaded using SET LANGUAGE but existed in the previously loaded text pool, these are initialized.

System Fields

sy-subrc

Meaning

0

The text pool of the specified language or secondary language was loaded.

4

Neither the text pool of the specified language nor the secondary language could be loaded.

Hints

-   When calling a program, the system loads the text pool in the [logon language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogon_language_glosry.htm "Glossary Entry") by default. If this text pool does not exist, the system loads the text pool in the secondary language. If this text pool also does not exist, all text elements remain initialized.
-   The SET LANGUAGE statement does not load the [selection texts](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_text_glosry.htm "Glossary Entry") of the language specified. If this is necessary, the statement [READ TEXTPOOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_textpool.htm) can be used. The selection texts read in can then be displayed on the selection screen using the function modules SELECTION\_TEXTS\_MODIFY and SELECTION\_TEXTS\_MODIFY\_DTEL.
-   The statement SET LANGUAGE must not be confused with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapset_locale.htm) for setting the [text environment](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_environment_glosry.htm "Glossary Entry"). In particular, there is no corresponding GET LANGUAGE statement.

Example

Display of the text symbol text-010 in different languages. Output is produced for all languages for which the text pool exists in the specified language or in the secondary language.

DATA langu LIKE sy-langu.
SELECT spras FROM t002
       INTO  @langu.
  SET LANGUAGE langu.
  IF sy-subrc = 0.
    cl\_demo\_output=>write( |{ langu } { text-010 }| ).
  ENDIF.
ENDSELECT.
cl\_demo\_output=>display( ).
