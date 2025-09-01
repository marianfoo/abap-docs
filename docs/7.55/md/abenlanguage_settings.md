---
title: "Language Settings"
description: |
  The language setting(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage_setting_glosry.htm 'Glossary Entry') comprises the following settings: -   Logon language(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogon_language.htm) The logon language is the lang
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage_settings.htm"
abapFile: "abenlanguage_settings.htm"
keywords: ["select", "do", "if", "try", "abenlanguage", "settings"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage.htm) → 

Language Settings

The [language setting](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage_setting_glosry.htm "Glossary Entry") comprises the following settings:

-   [Logon language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogon_language.htm)

The logon language is the language of the current [user session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_session_glosry.htm "Glossary Entry"). It affects the selection of various texts.

-   [Text environment language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_environment.htm)

The text environment language is the language of the [text environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_environment_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry"). By default, this is the logon language, but can be changed to another value in an internal session with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_locale.htm). It affects the general language-dependent behavior of an ABAP program.

Hints

-   The system field [sy-langu](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_fields.htm) contains the text environment language. It only represents the logon language if the text environment language is not set to a different value.

-   In an internal session, the text environment language should only be set temporarily to a language other than the logon language.

Continue
[Logon Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogon_language.htm)
[Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_environment.htm)