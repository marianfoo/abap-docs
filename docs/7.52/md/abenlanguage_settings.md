  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) → 

Language Settings

The [language setting](javascript:call_link\('abenlanguage_setting_glosry.htm'\) "Glossary Entry") comprises the following settings:

-   [Logon language](javascript:call_link\('abenlogon_language.htm'\))

The logon language is the language of the current [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry"). It influences the selection of various texts.

-   [Text environment language](javascript:call_link\('abentext_environment.htm'\))

The text environment language is the language of the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). By default, this is the logon language, but can be changed to another value in an internal session with the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). It influences the general language-dependent behavior of an ABAP program.

Notes

-   The system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)) contains the text environment language. It only displays the logon language if the text environment language is not set to a different value.

-   In an internal session, the text environment language should only be set temporarily to a language other than the logon language.

Continue
[Logon Language](javascript:call_link\('abenlogon_language.htm'\))
[Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\))