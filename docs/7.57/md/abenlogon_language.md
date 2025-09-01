---
title: "Logon Language"
description: |
  The logon language(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm 'Glossary Entry') is defined when an ABAP user(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_user_glosry.htm 'Glossary Entry') logs on(https://help.sap.com/doc/abap
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language.htm"
abapFile: "abenlogon_language.htm"
keywords: ["select", "do", "if", "try", "method", "class", "abenlogon", "language"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Logon Language, ABENLOGON_LANGUAGE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

Logon Language

The [logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry") is defined when an [ABAP user](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_user_glosry.htm "Glossary Entry") [logs on](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_glosry.htm "Glossary Entry") to an AS ABAP for the entire [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry") and can no longer be changed. The current logon language can be determined using the method GET\_LOGON\_LANGUAGE of the class CL\_ABAP\_SYST.

The logon language affects the selection of the following texts:

-   Texts on general classic [dynpros](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendynpro_glosry.htm "Glossary Entry")
-   Texts of [messages](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmessage_glosry.htm "Glossary Entry")
-   Texts from [text pools](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_pool_glosry.htm "Glossary Entry")

Hint

The texts listed above are not affected by the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm). The statement [SET LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_language.htm) is used to change the language of the texts of a text pool.

Example

Reading of the current logon language.

FINAL(logon\_langu) = cl\_abap\_syst=>get\_logon\_language( ).