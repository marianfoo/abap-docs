  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Text Pools, ABENTEXT_POOL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion fo
r improvement:)

Text Pools

Text pools are persistent repositories for the following [text elements](javascript:call_link\('abentext_element_glosry.htm'\) "Glossary Entry"):

-   [Text symbols](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry")
-   [List headers](javascript:call_link\('abenlist_header_glosry.htm'\) "Glossary Entry") ([standard page header](javascript:call_link\('abenstandard_page_header_glosry.htm'\) "Glossary Entry"))
-   [Selection texts](javascript:call_link\('abenselection_text_glosry.htm'\) "Glossary Entry")

There is one text pool for the original language of the program and one text pool for each translation language. Text pools are supported for the following [program types](javascript:call_link\('abenprogram_type_oview.htm'\)):

-   Executable programs
-   Class pools
-   Function pools
-   Module pools
-   Subroutine pools

From which text pool an ABAP program takes its texts depends on the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") or a [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") or can be configured while the program is running.

-   When a program is loaded into an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), the text elements of the text pool of the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") are imported by default. If this text pool does not exist, the text pool of the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") of AS ABAP is used. If none of these text pools exist, an empty text pool without text elements is loaded.
-   When the program is executed, the text pool of a different language can be loaded using the statement [SET LANGUAGE](javascript:call_link\('abapset_language.htm'\)).

Hint

In [global classes](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") and [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"), the text pools are assigned to the relevant master program. In the repository, this program has a different name than the class or function pool.

Continue
[SET LANGUAGE](javascript:call_link\('abapset_language.htm'\))