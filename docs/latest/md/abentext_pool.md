  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Text Repositories](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_texts.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Text%20Pools%2C%20ABENTEXT_POOL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Text Pools

Text pools are persistent repositories for the following [text elements](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_element_glosry.htm "Glossary Entry"):

-   [Text symbols](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_symbol_glosry.htm "Glossary Entry")
-   [List headers](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlist_header_glosry.htm "Glossary Entry") ([standard page header](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenstandard_page_header_glosry.htm "Glossary Entry"))
-   [Selection texts](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenselection_text_glosry.htm "Glossary Entry")

There is one text pool for the original language of the program and one text pool for each translation language. Text pools are supported for the following [program types](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprogram_type_oview.htm):

-   Executable programs
-   Class pools
-   Function pools
-   Module pools
-   Subroutine pools

From which text pool an ABAP program takes its texts depends on the [logon language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language_glosry.htm "Glossary Entry") or a [secondary language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_language_glosry.htm "Glossary Entry") or can be configured while the program is running.

-   When a program is loaded into an [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"), the text elements of the text pool of the [logon language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language_glosry.htm "Glossary Entry") are imported by default. If this text pool does not exist, the text pool of the [secondary language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensecondary_language_glosry.htm "Glossary Entry") of AS ABAP is used. If none of these text pools exist, an empty text pool without text elements is loaded.
-   When the program is executed, the text pool of a different language can be loaded using the statement [SET LANGUAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_language.htm).

Hint

In [global classes](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenglobal_class_glosry.htm "Glossary Entry") and [function pools](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), the text pools are assigned to the relevant master program. In the repository, this program has a different name than the class or function pool.

Continue
[SET LANGUAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_language.htm)