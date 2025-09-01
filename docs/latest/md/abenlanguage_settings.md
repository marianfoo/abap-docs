  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlanguage.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Language%20Settings%2C%20ABENLANGUAGE_SETTINGS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Language Settings

The [language setting](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlanguage_setting_glosry.htm "Glossary Entry") includes the following settings:

-   [Logon language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language.htm)
    
    The logon language is the language of the current [user session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenuser_session_glosry.htm "Glossary Entry"). It affects the selection of various texts.
    
-   [Text environment language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment.htm)
    
    The text environment language is the language of the [text environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry"). By default, this is the logon language, but can be set to a different value in an internal session with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locale.htm). It affects the general language-dependent behavior of an ABAP program.
    

Hints

-   The system field [sy-langu](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abensystem_fields.htm) contains the text environment language. It only represents the logon language if the text environment language was not set to a different value.
-   In an internal session, the text environment language should only be set temporarily to a language other than the logon language.

Continue
[Logon Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language.htm)
[Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment.htm)