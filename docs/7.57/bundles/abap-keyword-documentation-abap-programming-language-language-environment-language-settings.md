# ABAP - Keyword Documentation / ABAP - Programming Language / Language Environment / Language Settings

Included pages: 7


### abenlanguage_settings.htm

---
title: "Language Settings"
description: |
  The language setting(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_setting_glosry.htm 'Glossary Entry') includes the following settings: -   Logon language(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language.htm) The logon language is the langu
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm"
abapFile: "abenlanguage_settings.htm"
keywords: ["select", "do", "if", "try", "abenlanguage", "settings"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Language Settings, ABENLANGUAGE_SETTINGS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Language Settings

The [language setting](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_setting_glosry.htm "Glossary Entry") includes the following settings:

-   [Logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language.htm)
    
    The logon language is the language of the current [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry"). It affects the selection of various texts.
    
-   [Text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment.htm)
    
    The text environment language is the language of the [text environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry"). By default, this is the logon language, but can be set to a different value in an internal session with the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm). It affects the general language-dependent behavior of an ABAP program.
    

Hints

-   The system field [sy-langu](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields.htm) contains the text environment language. It only represents the logon language if the text environment language was not set to a different value.
-   In an internal session, the text environment language should only be set temporarily to a language other than the logon language.

Continue
[Logon Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language.htm)
[Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment.htm)


### abenlogon_language.htm

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


### abentext_environment.htm

---
title: "Text Environment Language and Text Environment"
description: |
  -   Text Environment Language(#abentext-environment-1-------text-environment---@ITOC@@ABENTEXT_ENVIRONMENT_2) Text Environment Language The text environment language(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm 'Glossary Entry') is part of the languag
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment.htm"
abapFile: "abentext_environment.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abentext", "environment"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Text Environment Language and Text Environment, ABENTEXT_ENVIRONMENT, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Text Environment Language and Text Environment

-   [Text Environment Language](#abentext-environment-1-------text-environment---@ITOC@@ABENTEXT_ENVIRONMENT_2)

Text Environment Language   

The [text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is part of the [language settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm) of an ABAP program and determines its [text environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment_glosry.htm "Glossary Entry"). It is valid during an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").

-   The text environment language is set at the start of each internal session to the [logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry").
-   It can also be set to a different language for the current internal session using the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm).

The current text environment language can be determined using the method GET\_LANGUAGE of the class CL\_ABAP\_SYST or using the statement [GET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale.htm), and is the nominal content of the system field [sy-langu](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields.htm). The possible single-character abbreviations for the text environment language are stored as language keys in the column SPRAS of the database table T002.

Example

Assurance that the system field sy-langu contains the current text environment language, An exception is raised if the system field is overwritten in the program.

ASSERT sy-langu = cl\_abap\_syst=>get\_language( ).

Text Environment   

All programs in an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") work in a shared text environment that is determined by the text environment language and which can also be set using the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm). As well as the language, the text environment includes:

-   A code page
    
    The [code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencodepage_glosry.htm "Glossary Entry") of the text environment is always the [system code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_codepage_glosry.htm "Glossary Entry") [UTF-16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf16_glosry.htm "Glossary Entry") of the AS instances of a [Unicode system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_system_glosry.htm "Glossary Entry") and cannot be changed. The current release supports Unicode systems only. Text environments with other code pages are no longer supported. There is a special feature in which the non-Unicode code page that is used for conversions is the one that would be assigned to the current text environment in a non-Unicode system. This only applies to specific statements, such as reading and writing [legacy files](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlegacy_file_glosry.htm "Glossary Entry") using the [ABAP file interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_files.htm).
    
-   A locale
    
    The [locale](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocale_glosry.htm "Glossary Entry") properties that belong to the text environment language and country are defined in an ICU (International Components for Unicode) library. This library is made available for AS ABAP and is independent of the operating system of the [host computer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the [AS instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry").
    

The main purpose of the text environment it to handle texts in character-like data objects:

-   The [code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencodepage_glosry.htm "Glossary Entry") of the text environment affects all operations that depend on the current character set, such as
    -   Casting character-like data objects to byte-like types
    -   Transferring data from and to [external storage](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm)
    -   Transferring data using [data and communication interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm)
-   The [locale](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocale_glosry.htm "Glossary Entry") of the text environment affects all statements that sort character-like data objects as text, such as
    -   [SORT AS TEXT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm)
    -   [CONVERT TEXT INTO SORTABLE CODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_text.htm)
-   In addition, the text environment language, and not the logon language, is used in the following cases:
    
    -   The ABAP-specific [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_variable_glosry.htm "Glossary Entry") [LOCALE\_SAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables.htm) in SAP HANA and the session variable [system\_language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v2.htm) in ABAP CDS contain the current text environment language in reads from ABAP or ABAP SQL.
    -   If the logon language for the [RFC session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_session_glosry.htm "Glossary Entry") is not defined in the [RFC destination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_dest_glosry.htm "Glossary Entry") in a [remote function call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenremote_function_call_glosry.htm "Glossary Entry"), it is determined by the current text environment language.
    -   If a language is not specified explicitly in the statement [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_via_job.htm), the logon language of the [background session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_session_glosry.htm "Glossary Entry") is set implicitly to the current text environment language.
    -   The texts on [selection screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") are determined by the current text environment language.
    -   The [exception texts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_text_glosry.htm "Glossary Entry") returned by [exception classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_class_glosry.htm "Glossary Entry") are determined by the current text environment language.
    
    Any further frameworks based on the nominal value of the system field sy-langu access the current text environment language and not the logon language.
    

Hints

-   The ABAP programming language supports a subset covered by [UCS-2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenucs2_glosry.htm "Glossary Entry") and not the full scope of UTF-16. This contains all [UTF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf_glosry.htm "Glossary Entry") characters except those in the [surrogate area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensurrogate_area_glosry.htm "Glossary Entry"). ABAP interprets a character from the surrogate area as two characters.
-   In the non-Unicode [single code page systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensingle_codepage_system_glosry.htm "Glossary Entry") supported before release 7.50, the code page of the text environment was always the non-Unicode system code page of the current AS instance. It was possible to configure different system code pages for the code page of the text environment of a system only in the [MDMP systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmdmp-system_glosry.htm "Glossary Entry") supported before Release 7.0.

Example

Setting the text environment explicitly before an [aRFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensrfc_glosry.htm "Glossary Entry"). The function module DEMO\_RFM\_CALL\_TRANSACTION calls a transaction using a [transaction code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_code_glosry.htm "Glossary Entry") passed to it. The logon language of the [RFC session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_session_glosry.htm "Glossary Entry") is always English, regardless of the [logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current session. Afterwards, the text environment language is set back to its previous value.

GET LOCALE LANGUAGE FINAL(langu)
           COUNTRY  DATA(dummy)
           MODIFIER dummy.
SET LOCALE LANGUAGE 'E'.
CALL FUNCTION 'DEMO\_RFM\_CALL\_TRANSACTION'
  STARTING NEW TASK 'TCODE'
  EXPORTING
    tcode = 'SE11'.
SET LOCALE LANGUAGE langu.

Continue
[SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm)
[GET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale.htm)
![Example](exa.gif "Example") [Setting the Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenset_locale_abexa.htm)


### abapset_locale.htm

---
title: "SET LOCALE LANGUAGE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale_shortref.htm) Syntax SET LOCALE LANGUAGE lang obsolete_parameters(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale_obsolete.htm). Effect This statement sets the text envir
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm"
abapFile: "abapset_locale.htm"
keywords: ["select", "do", "if", "try", "catch", "method", "class", "data", "abapset", "locale"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm) →  [Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET LOCALE LANGUAGE, ABAPSET_LOCALE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

SET LOCALE LANGUAGE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale_shortref.htm)

Syntax

SET LOCALE LANGUAGE lang *\[*[obsolete\_parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale_obsolete.htm)*\]*.

Effect

This statement sets the [text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") to the value specified in lang. This determines the [text environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment_glosry.htm "Glossary Entry") for all programs in the internal session.

The [text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm "Glossary Entry") lang expects a character-like data object containing a language key with a maximum of one character, for which [locale](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocale_glosry.htm "Glossary Entry") properties are defined in the ICU library of the AS ABAP. The possible language keys are contained in the SPRAS column of the database table T002. The locale of the text environment is set accordingly. If the data object lang contains only blanks, the [logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry") is used.

The statement SET LOCALE LANGUAGE sets the no-modifiable [code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencodepage_glosry.htm "Glossary Entry") of the text environment. In a Unicode system, this is always [UTF-16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf16_glosry.htm "Glossary Entry"), whereby the ABAP programming language supports the subset [UCS-2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenucs2_glosry.htm "Glossary Entry"). After SET LOCALE LANGUAGE is executed, however, the non-Unicode code page that would be set by the statement in a non-Unicode system (see below), is used for conversions in specific statements such as reading and writing [legacy files](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlegacy_file_glosry.htm "Glossary Entry"). (See the additions [LEGACY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset_mode.htm), and [NON-UNICODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset_encoding.htm) of the statement [OPEN DATASET](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapopen_dataset.htm).) If possible, this non-Unicode code page is taken from the column CHARCO of the database table TCP0C. The key used here is created from the current operating system of the [host computer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance (system field sy-opsys), the language key specified in lang, and a language ID set implicitly from the database table TCP0D or [set explicitly](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale_obsolete.htm).

System Fields

If the statement SET LOCALE LANGUAGE is executed successfully, it sets the system field [sy-langu](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields.htm) to the value specified in lang.

Programming Guideline

[If possible, do not switch the text environment within the code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environm_guidl.htm "Guideline")

Hints

-   The text environment of an internal session should only be changed for the following purposes:
    
    -   Processing character-like data objects that are in a different language to the logon language of the current user. The text environment language is important for the statements [SORT ... AS TEXT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm) and [CONVERT TEXT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_text.htm).
    -   [Legacy files](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlegacy_file_glosry.htm "Glossary Entry") are read and written.
    
    The other consequences for the text environment documented under [Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment.htm) should also be noted.
    
-   After processing in a changed text environment, the text environment should be reset to the previous text environment.
-   The statement SET LOCALE LANGUAGE sets the text environment language contained in sy-langu and returned by the method GET\_LANGUAGE of the class CL\_ABAP\_SYST. It does not set the [logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry") returned by the method GET\_LOGON\_LANGUAGE.
-   The statement SET LOCALE LANGUAGE must not be confused with the statement [SET LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_language.htm) for loading the texts of a [text pool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_pool_glosry.htm "Glossary Entry").
-   Instead of the SET LOCALE statement, the four function modules whose names begin with SCP\_MIXED\_LANGUAGES\_ can also be used to determine or change the current text environment, and to reset it to the original text environment.
-   The statement has two obsolete additions, [COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale_obsolete.htm) and [MODIFIER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale_obsolete.htm), which should no longer be used.

Example

Setting of the text environment to a valid value.

DATA langu TYPE sy-langu.
cl\_demo\_input=>request( CHANGING field = langu ).
TRY.
    SET LOCALE LANGUAGE langu.
  CATCH cx\_sy\_localization\_error INTO FINAL(exc).
    cl\_demo\_output=>write( exc->get\_text( ) ).
ENDTRY.
cl\_demo\_output=>display(
    |Logon language:            { cl\_abap\_syst=>get\_logon\_language( )
  }\\nText environment language: { cl\_abap\_syst=>get\_language( )
  }\\nsy-langu:                  { sy-langu }| ).

Executable Example

[Setting the Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenset_locale_abexa.htm)

[Exceptions](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_LOCALIZATION\_ERROR

-   Cause: The tables TCP0D and TCP0C were used to determine a character set that is not released in your system. The released character sets are in the table TCPDB. Normally this table should contain exactly one character set and this runtime error occurs because an attempt was made to use a non-compatible language.
    Runtime error: TEXTENV\_CODEPAGE\_NOT\_ALLOWED
-   Cause: No entry exists for the current platform in the SAP text environment table TCP0C for the specified keys lang, cntry, and mod.
    Runtime error: TEXTENV\_KEY\_INVALID

Uncatchable Exceptions

-   Cause: Selection of a 'binary' text environment using the modifier 'BINARY', 'C', 'POSIX', or 'RAW'.
    Runtime error: TEXTENV\_BINARY\_NOT\_SUPPORTED
-   Cause: One of the key values lang, cntry, or mod is longer than the corresponding fields LANGU, COUNTRY, or MODIFIER in the SAP text environment table TCP0C.
    Runtime error: TEXTENV\_KEY\_TOO\_LONG


### abapget_locale.htm

---
title: "GET LOCALE LANGUAGE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_shortref.htm) Syntax GET LOCALE LANGUAGE lang obsolete_parameters(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_obsolete.htm). Effect The language key of the current text envir
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale.htm"
abapFile: "abapget_locale.htm"
keywords: ["do", "if", "try", "data", "abapget", "locale"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm) →  [Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: GET LOCALE LANGUAGE, ABAPGET_LOCALE, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

GET LOCALE LANGUAGE

[Short Reference](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_shortref.htm)

Syntax

GET LOCALE LANGUAGE lang [obsolete\_parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_obsolete.htm).

Effect

The language key of the current [text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is assigned to the variable lang. The data object lang must have a character-like data type. The statement has two obsolete additions - [COUNTRY](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_obsolete.htm) and [MODIFIER](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale_obsolete.htm) - that must be specified but whose results should not be evaluated.

Hint

The imported text environment language of the current text environment can be used to restore the environment after it has been changed using the statement [SET LOCALE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm).

Example

Determining the current text environment and restoring it after a change.

DATA: lang  TYPE tcp0c-langu,
      dummy TYPE string ##needed.
GET LOCALE LANGUAGE lang COUNTRY dummy MODIFIER dummy.
SET LOCALE LANGUAGE ...
...
SET LOCALE LANGUAGE lang.


### abenset_locale_abexa.htm

---
title: "Setting the Text Environment"
description: |
  This example demonstrates how to set the text environment explicitly. Source Code REPORT demo_set_locale. CLASS demo DEFINITION. PUBLIC SECTION. CLASS-METHODS main. ENDCLASS. CLASS demo IMPLEMENTATION. METHOD main. DATA text_tab TYPE HASHED TABLE OF string WITH UNIQUE KEY table_line. text_tab =
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenset_locale_abexa.htm"
abapFile: "abenset_locale_abexa.htm"
keywords: ["select", "do", "if", "method", "class", "data", "abenset", "locale", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm) →  [Text Environment Language and Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Setting the Text Environment, ABENSET_LOCALE_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A
%0D%0A%0D%0ASuggestion for improvement:)

Setting the Text Environment

This example demonstrates how to set the text environment explicitly.

Source Code   

REPORT demo\_set\_locale.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA text\_tab TYPE HASHED TABLE OF string
                       WITH UNIQUE KEY table\_line.
    text\_tab = VALUE #(
      ( \`Cudar Vilmos\`  )
      ( \`Csernus Gábor\` ) ).
    SET LOCALE LANGUAGE 'E'.
    SORT text\_tab AS TEXT.
    cl\_demo\_output=>write( text\_tab ).
    SET LOCALE LANGUAGE 'H'.
    SORT text\_tab AS TEXT.
    cl\_demo\_output=>write( text\_tab ).
    SET LOCALE LANGUAGE ' '.
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description   

This example shows the effect of the locale of the text environment on sorts. In Hungarian text environments, Cs and Cu are sorted differently than in English environments.


### abentext_environment.htm

---
title: "Text Environment Language and Text Environment"
description: |
  -   Text Environment Language(#abentext-environment-1-------text-environment---@ITOC@@ABENTEXT_ENVIRONMENT_2) Text Environment Language The text environment language(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm 'Glossary Entry') is part of the languag
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment.htm"
abapFile: "abentext_environment.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abentext", "environment"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Text Environment Language and Text Environment, ABENTEXT_ENVIRONMENT, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Text Environment Language and Text Environment

-   [Text Environment Language](#abentext-environment-1-------text-environment---@ITOC@@ABENTEXT_ENVIRONMENT_2)

Text Environment Language   

The [text environment language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is part of the [language settings](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlanguage_settings.htm) of an ABAP program and determines its [text environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentext_environment_glosry.htm "Glossary Entry"). It is valid during an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry").

-   The text environment language is set at the start of each internal session to the [logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current [user session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuser_session_glosry.htm "Glossary Entry").
-   It can also be set to a different language for the current internal session using the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm).

The current text environment language can be determined using the method GET\_LANGUAGE of the class CL\_ABAP\_SYST or using the statement [GET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale.htm), and is the nominal content of the system field [sy-langu](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_fields.htm). The possible single-character abbreviations for the text environment language are stored as language keys in the column SPRAS of the database table T002.

Example

Assurance that the system field sy-langu contains the current text environment language, An exception is raised if the system field is overwritten in the program.

ASSERT sy-langu = cl\_abap\_syst=>get\_language( ).

Text Environment   

All programs in an [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") work in a shared text environment that is determined by the text environment language and which can also be set using the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm). As well as the language, the text environment includes:

-   A code page
    
    The [code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencodepage_glosry.htm "Glossary Entry") of the text environment is always the [system code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensystem_codepage_glosry.htm "Glossary Entry") [UTF-16](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf16_glosry.htm "Glossary Entry") of the AS instances of a [Unicode system](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenunicode_system_glosry.htm "Glossary Entry") and cannot be changed. The current release supports Unicode systems only. Text environments with other code pages are no longer supported. There is a special feature in which the non-Unicode code page that is used for conversions is the one that would be assigned to the current text environment in a non-Unicode system. This only applies to specific statements, such as reading and writing [legacy files](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlegacy_file_glosry.htm "Glossary Entry") using the [ABAP file interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_files.htm).
    
-   A locale
    
    The [locale](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocale_glosry.htm "Glossary Entry") properties that belong to the text environment language and country are defined in an ICU (International Components for Unicode) library. This library is made available for AS ABAP and is independent of the operating system of the [host computer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the [AS instances](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry").
    

The main purpose of the text environment it to handle texts in character-like data objects:

-   The [code page](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencodepage_glosry.htm "Glossary Entry") of the text environment affects all operations that depend on the current character set, such as
    -   Casting character-like data objects to byte-like types
    -   Transferring data from and to [external storage](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm)
    -   Transferring data using [data and communication interfaces](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_communication.htm)
-   The [locale](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlocale_glosry.htm "Glossary Entry") of the text environment affects all statements that sort character-like data objects as text, such as
    -   [SORT AS TEXT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsort_itab.htm)
    -   [CONVERT TEXT INTO SORTABLE CODE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapconvert_text.htm)
-   In addition, the text environment language, and not the logon language, is used in the following cases:
    
    -   The ABAP-specific [session variable](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensession_variable_glosry.htm "Glossary Entry") [LOCALE\_SAP](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhana_session_variables.htm) in SAP HANA and the session variable [system\_language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencds_session_variable_v2.htm) in ABAP CDS contain the current text environment language in reads from ABAP or ABAP SQL.
    -   If the logon language for the [RFC session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_session_glosry.htm "Glossary Entry") is not defined in the [RFC destination](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_dest_glosry.htm "Glossary Entry") in a [remote function call](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenremote_function_call_glosry.htm "Glossary Entry"), it is determined by the current text environment language.
    -   If a language is not specified explicitly in the statement [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_via_job.htm), the logon language of the [background session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenbatch_session_glosry.htm "Glossary Entry") is set implicitly to the current text environment language.
    -   The texts on [selection screens](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenselection_screen_glosry.htm "Glossary Entry") are determined by the current text environment language.
    -   The [exception texts](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_text_glosry.htm "Glossary Entry") returned by [exception classes](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenexception_class_glosry.htm "Glossary Entry") are determined by the current text environment language.
    
    Any further frameworks based on the nominal value of the system field sy-langu access the current text environment language and not the logon language.
    

Hints

-   The ABAP programming language supports a subset covered by [UCS-2](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenucs2_glosry.htm "Glossary Entry") and not the full scope of UTF-16. This contains all [UTF](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenutf_glosry.htm "Glossary Entry") characters except those in the [surrogate area](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensurrogate_area_glosry.htm "Glossary Entry"). ABAP interprets a character from the surrogate area as two characters.
-   In the non-Unicode [single code page systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensingle_codepage_system_glosry.htm "Glossary Entry") supported before release 7.50, the code page of the text environment was always the non-Unicode system code page of the current AS instance. It was possible to configure different system code pages for the code page of the text environment of a system only in the [MDMP systems](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenmdmp-system_glosry.htm "Glossary Entry") supported before Release 7.0.

Example

Setting the text environment explicitly before an [aRFC](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abensrfc_glosry.htm "Glossary Entry"). The function module DEMO\_RFM\_CALL\_TRANSACTION calls a transaction using a [transaction code](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abentransaction_code_glosry.htm "Glossary Entry") passed to it. The logon language of the [RFC session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenrfc_session_glosry.htm "Glossary Entry") is always English, regardless of the [logon language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current session. Afterwards, the text environment language is set back to its previous value.

GET LOCALE LANGUAGE FINAL(langu)
           COUNTRY  DATA(dummy)
           MODIFIER dummy.
SET LOCALE LANGUAGE 'E'.
CALL FUNCTION 'DEMO\_RFM\_CALL\_TRANSACTION'
  STARTING NEW TASK 'TCODE'
  EXPORTING
    tcode = 'SE11'.
SET LOCALE LANGUAGE langu.

Continue
[SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_locale.htm)
[GET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapget_locale.htm)
![Example](exa.gif "Example") [Setting the Text Environment](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenset_locale_abexa.htm)
