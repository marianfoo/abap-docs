  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Logon Language, ABENLOGON_LANGUAGE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

Logon Language

The [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") is defined when an [ABAP user](javascript:call_link\('abenabap_user_glosry.htm'\) "Glossary Entry") [logs on](javascript:call_link\('abenlogon_glosry.htm'\) "Glossary Entry") to an AS ABAP for the entire [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry") and can no longer be changed. The current logon language can be determined using the method GET\_LOGON\_LANGUAGE of the class CL\_ABAP\_SYST.

The logon language affects the selection of the following texts:

-   Texts on general classic [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry")
-   Texts of [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry")
-   Texts from [text pools](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry")

Hint

The texts listed above are not affected by the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). The statement [SET LANGUAGE](javascript:call_link\('abapset_language.htm'\)) is used to change the language of the texts of a text pool.

Example

Reading of the current logon language.

FINAL(logon\_langu) = cl\_abap\_syst=>get\_logon\_language( ).