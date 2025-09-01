# ABAP - Keyword Documentation / ABAP - Programming Language / Language Environment / Language Settings

Included pages: 7



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenlanguage_settings.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlanguage_settings.htm)
- [abenlogon_language.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language.htm)
- [abentext_environment.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment.htm)
- [abapset_locale.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locale.htm)
- [abapget_locale.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_locale.htm)
- [abenset_locale_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_locale_abexa.htm)

**Bundle Contains**: 6 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.915Z

---

### abenlanguage_settings.htm

> **📖 Official SAP Documentation**: [abenlanguage_settings.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlanguage_settings.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Language%20Settings%2C%20ABENLANGUAGE_SETTINGS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Language Settings

The [language setting](javascript:call_link\('abenlanguage_setting_glosry.htm'\) "Glossary Entry") includes the following settings:

-   [Logon language](javascript:call_link\('abenlogon_language.htm'\))
    
    The logon language is the language of the current [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry"). It affects the selection of various texts.
    
-   [Text environment language](javascript:call_link\('abentext_environment.htm'\))
    
    The text environment language is the language of the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"). By default, this is the logon language, but can be set to a different value in an internal session with the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). It affects the general language-dependent behavior of an ABAP program.
    

Hints

-   The system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)) contains the text environment language. It only represents the logon language if the text environment language was not set to a different value.
-   In an internal session, the text environment language should only be set temporarily to a language other than the logon language.

Continue
[Logon Language](javascript:call_link\('abenlogon_language.htm'\))
[Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\))



**📖 Source**: [abenlanguage_settings.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlanguage_settings.htm)

### abenlogon_language.htm

> **📖 Official SAP Documentation**: [abenlogon_language.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Logon%20Language%2C%20ABENLOGON_LANGUAGE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

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



**📖 Source**: [abenlogon_language.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlogon_language.htm)

### abentext_environment.htm

> **📖 Official SAP Documentation**: [abentext_environment.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Text%20Environment%20Language%20and%20Text%20Environment%2C%20ABENTEXT_ENVIRONMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Text Environment Language and Text Environment

-   [Text Environment Language](#abentext-environment-1-------text-environment---@ITOC@@ABENTEXT_ENVIRONMENT_2)

Text Environment Language   

The [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is part of the [language settings](javascript:call_link\('abenlanguage_settings.htm'\)) of an ABAP program and determines its [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). It is valid during an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

-   The text environment language is set at the start of each internal session to the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry").
-   It can also be set to a different language for the current internal session using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

The current text environment language can be determined using the method GET\_LANGUAGE of the class CL\_ABAP\_SYST or using the statement [GET LOCALE LANGUAGE](javascript:call_link\('abapget_locale.htm'\)), and is the nominal content of the system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)). The possible single-character abbreviations for the text environment language are stored as language keys in the column SPRAS of the database table T002.

Example

Assurance that the system field sy-langu contains the current text environment language, An exception is raised if the system field is overwritten in the program.

ASSERT sy-langu = cl\_abap\_syst=>get\_language( ).

Text Environment   

All programs in an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") work in a shared text environment that is determined by the text environment language and which can also be set using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). As well as the language, the text environment includes:

-   A code page
    
    The [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") of the text environment is always the [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") of the AS instances of a [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") and cannot be changed. The current release supports Unicode systems only. Text environments with other code pages are no longer supported. There is a special feature in which the non-Unicode code page that is used for conversions is the one that would be assigned to the current text environment in a non-Unicode system. This only applies to specific statements, such as reading and writing [legacy files](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") using the [ABAP file interface](javascript:call_link\('abenabap_language_files.htm'\)).
    
-   A locale
    
    The [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") properties that belong to the text environment language and country are defined in an ICU (International Components for Unicode) library. This library is made available for AS ABAP and is independent of the operating system of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the [AS instances](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry").
    

The main purpose of the text environment it to handle texts in character-like data objects:

-   The [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") of the text environment affects all operations that depend on the current character set, such as
    -   Casting character-like data objects to byte-like types
    -   Transferring data from and to [external storage](javascript:call_link\('abenabap_language_external_data.htm'\))
    -   Transferring data using [data and communication interfaces](javascript:call_link\('abenabap_data_communication.htm'\))
-   The [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") of the text environment affects all statements that sort character-like data objects as text, such as
    -   [SORT AS TEXT](javascript:call_link\('abapsort_itab.htm'\))
    -   [CONVERT TEXT INTO SORTABLE CODE](javascript:call_link\('abapconvert_text.htm'\))
-   In addition, the text environment language, and not the logon language, is used in the following cases:
    
    -   The ABAP-specific [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [LOCALE\_SAP](javascript:call_link\('abenhana_session_variables.htm'\)) in SAP HANA and the session variable [system\_language](javascript:call_link\('abencds_session_variable_v2.htm'\)) in ABAP CDS contain the current text environment language in reads from ABAP or ABAP SQL.
    -   If the logon language for the [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") is not defined in the [RFC destination](javascript:call_link\('abenrfc_dest_glosry.htm'\) "Glossary Entry") in a [remote function call](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry"), it is determined by the current text environment language.
    -   If a language is not specified explicitly in the statement [SUBMIT VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)), the logon language of the [background session](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry") is set implicitly to the current text environment language.
    -   The texts on [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") are determined by the current text environment language.
    -   The [exception texts](javascript:call_link\('abenexception_text_glosry.htm'\) "Glossary Entry") returned by [exception classes](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") are determined by the current text environment language.
    
    Any further frameworks based on the nominal value of the system field sy-langu access the current text environment language and not the logon language.
    

Hints

-   The ABAP programming language supports a subset covered by [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") and not the full scope of UTF-16. This contains all [UTF](javascript:call_link\('abenutf_glosry.htm'\) "Glossary Entry") characters except those in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry"). ABAP interprets a character from the surrogate area as two characters.
-   In the non-Unicode [single code page systems](javascript:call_link\('abensingle_codepage_system_glosry.htm'\) "Glossary Entry") supported before release 7.50, the code page of the text environment was always the non-Unicode system code page of the current AS instance. It was possible to configure different system code pages for the code page of the text environment of a system only in the [MDMP systems](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry") supported before ABAP release 7.0.

Example

Setting the text environment explicitly before an [aRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry"). The function module DEMO\_RFM\_CALL\_TRANSACTION calls a transaction using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") passed to it. The logon language of the [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") is always English, regardless of the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current session. Afterwards, the text environment language is set back to its previous value.

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
[SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\))
[GET LOCALE LANGUAGE](javascript:call_link\('abapget_locale.htm'\))
![Example](exa.gif "Example") [Setting the Text Environment](javascript:call_link\('abenset_locale_abexa.htm'\))



**📖 Source**: [abentext_environment.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment.htm)

### abapset_locale.htm

> **📖 Official SAP Documentation**: [abapset_locale.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locale.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) →  [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SET%20LOCALE%20LANGUAGE%2C%20ABAPSET_LOCALE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SET LOCALE LANGUAGE

[Short Reference](javascript:call_link\('abapset_locale_shortref.htm'\))

Syntax

SET LOCALE LANGUAGE lang *\[*[obsolete\_parameters](javascript:call_link\('abapset_locale_obsolete.htm'\))*\]*.

Effect

This statement sets the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") to the value specified in lang. This determines the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") for all programs in the internal session.

The [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") lang expects a character-like data object containing a language key with a maximum of one character, for which [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") properties are defined in the ICU library of the AS ABAP. The possible language keys are contained in the SPRAS column of the database table T002. The locale of the text environment is set accordingly. If the data object lang contains only blanks, the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry") is used.

The statement SET LOCALE LANGUAGE sets the no-modifiable [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") of the text environment. In a Unicode system, this is always [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry"), whereby the ABAP programming language supports the subset [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry"). After SET LOCALE LANGUAGE is executed, however, the non-Unicode code page that would be set by the statement in a non-Unicode system (see below), is used for conversions in specific statements such as reading and writing [legacy files](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry"). (See the additions [LEGACY](javascript:call_link\('abapopen_dataset_mode.htm'\)), and [NON-UNICODE](javascript:call_link\('abapopen_dataset_encoding.htm'\)) of the statement [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)).) If possible, this non-Unicode code page is taken from the column CHARCO of the database table TCP0C. The key used here is created from the current operating system of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS instance (system field sy-opsys), the language key specified in lang, and a language ID set implicitly from the database table TCP0D or [set explicitly](javascript:call_link\('abapset_locale_obsolete.htm'\)).

System Fields

If the statement SET LOCALE LANGUAGE is executed successfully, it sets the system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)) to the value specified in lang.

Programming Guideline

[If possible, do not switch the text environment within the code](javascript:call_link\('abentext_environm_guidl.htm'\) "Guideline")

Hints

-   The text environment of an internal session should only be changed for the following purposes:
    
    -   Processing character-like data objects that are in a different language to the logon language of the current user. The text environment language is important for the statements [SORT ... AS TEXT](javascript:call_link\('abapsort_itab.htm'\)) and [CONVERT TEXT](javascript:call_link\('abapconvert_text.htm'\)).
    -   [Legacy files](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") are read and written.
    
    The other consequences for the text environment documented under [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) should also be noted.
    
-   After processing in a changed text environment, the text environment should be reset to the previous text environment.
-   The statement SET LOCALE LANGUAGE sets the text environment language contained in sy-langu and returned by the method GET\_LANGUAGE of the class CL\_ABAP\_SYST. It does not set the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") returned by the method GET\_LOGON\_LANGUAGE.
-   The statement SET LOCALE LANGUAGE must not be confused with the statement [SET LANGUAGE](javascript:call_link\('abapset_language.htm'\)) for loading the texts of a [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry").
-   Instead of the SET LOCALE statement, the four function modules whose names begin with SCP\_MIXED\_LANGUAGES\_ can also be used to determine or change the current text environment, and to reset it to the original text environment.
-   The statement has two obsolete additions, [COUNTRY](javascript:call_link\('abapset_locale_obsolete.htm'\)) and [MODIFIER](javascript:call_link\('abapset_locale_obsolete.htm'\)), which should no longer be used.

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

[Setting the Text Environment](javascript:call_link\('abenset_locale_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

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



**📖 Source**: [abapset_locale.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_locale.htm)

### abapget_locale.htm

> **📖 Official SAP Documentation**: [abapget_locale.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_locale.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) →  [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20GET%20LOCALE%20LANGUAGE%2C%20ABAPGET_LOCALE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

GET LOCALE LANGUAGE

[Short Reference](javascript:call_link\('abapget_locale_shortref.htm'\))

Syntax

GET LOCALE LANGUAGE lang [obsolete\_parameters](javascript:call_link\('abapget_locale_obsolete.htm'\)).

Effect

The language key of the current [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is assigned to the variable lang. The data object lang must have a character-like data type. The statement has two obsolete additions - [COUNTRY](javascript:call_link\('abapget_locale_obsolete.htm'\)) and [MODIFIER](javascript:call_link\('abapget_locale_obsolete.htm'\)) - that must be specified but whose results should not be evaluated.

Hint

The imported text environment language of the current text environment can be used to restore the environment after it has been changed using the statement [SET LOCALE](javascript:call_link\('abapset_locale.htm'\)).

Example

Determining the current text environment and restoring it after a change.

DATA: lang  TYPE tcp0c-langu,
      dummy TYPE string ##needed.
GET LOCALE LANGUAGE lang COUNTRY dummy MODIFIER dummy.
SET LOCALE LANGUAGE ...
...
SET LOCALE LANGUAGE lang.



**📖 Source**: [abapget_locale.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapget_locale.htm)

### abenset_locale_abexa.htm

> **📖 Official SAP Documentation**: [abenset_locale_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_locale_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) →  [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Setting%20the%20Text%20Environment%2C%20ABENSET_LOCALE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Setting the Text Environment

This example demonstrates how to set the text environment explicitly.

Source Code   

\* Public class definition
CLASS cl\_demo\_set\_locale DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_set\_locale IMPLEMENTATION.
  METHOD main.
    DATA text\_tab TYPE HASHED TABLE OF string
                       WITH UNIQUE KEY table\_line.
    text\_tab = VALUE #(
      ( \`Cudar Vilmos\`  )
      ( \`Csernus G�bor\` ) ).
    SET LOCALE LANGUAGE 'E'.
    SORT text\_tab AS TEXT.
    out->write( text\_tab ).
    SET LOCALE LANGUAGE 'H'.
    SORT text\_tab AS TEXT.
    out->write( text\_tab ).
    SET LOCALE LANGUAGE ' '.
  ENDMETHOD.
ENDCLASS.

Description   

This example shows the effect of the locale of the text environment on sorts. In Hungarian text environments, Cs and Cu are sorted differently than in English environments.



**📖 Source**: [abenset_locale_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenset_locale_abexa.htm)

### abentext_environment.htm

> **📖 Official SAP Documentation**: [abentext_environment.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abentext_environment.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentext_environment.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Text%20Environment%20Language%20and%20Text%20Environment%2C%20ABENTEXT_ENVIRONMENT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20impro
vement:)

Text Environment Language and Text Environment

-   [Text Environment Language](#abentext-environment-1-------text-environment---@ITOC@@ABENTEXT_ENVIRONMENT_2)

Text Environment Language   

The [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is part of the [language settings](javascript:call_link\('abenlanguage_settings.htm'\)) of an ABAP program and determines its [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). It is valid during an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

-   The text environment language is set at the start of each internal session to the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry").
-   It can also be set to a different language for the current internal session using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

The current text environment language can be determined using the method GET\_LANGUAGE of the class CL\_ABAP\_SYST or using the statement [GET LOCALE LANGUAGE](javascript:call_link\('abapget_locale.htm'\)), and is the nominal content of the system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)). The possible single-character abbreviations for the text environment language are stored as language keys in the column SPRAS of the database table T002.

Example

Assurance that the system field sy-langu contains the current text environment language, An exception is raised if the system field is overwritten in the program.

ASSERT sy-langu = cl\_abap\_syst=>get\_language( ).

Text Environment   

All programs in an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") work in a shared text environment that is determined by the text environment language and which can also be set using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). As well as the language, the text environment includes:

-   A code page
    
    The [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") of the text environment is always the [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") of the AS instances of a [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") and cannot be changed. The current release supports Unicode systems only. Text environments with other code pages are no longer supported. There is a special feature in which the non-Unicode code page that is used for conversions is the one that would be assigned to the current text environment in a non-Unicode system. This only applies to specific statements, such as reading and writing [legacy files](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") using the [ABAP file interface](javascript:call_link\('abenabap_language_files.htm'\)).
    
-   A locale
    
    The [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") properties that belong to the text environment language and country are defined in an ICU (International Components for Unicode) library. This library is made available for AS ABAP and is independent of the operating system of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the [AS instances](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry").
    

The main purpose of the text environment it to handle texts in character-like data objects:

-   The [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") of the text environment affects all operations that depend on the current character set, such as
    -   Casting character-like data objects to byte-like types
    -   Transferring data from and to [external storage](javascript:call_link\('abenabap_language_external_data.htm'\))
    -   Transferring data using [data and communication interfaces](javascript:call_link\('abenabap_data_communication.htm'\))
-   The [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") of the text environment affects all statements that sort character-like data objects as text, such as
    -   [SORT AS TEXT](javascript:call_link\('abapsort_itab.htm'\))
    -   [CONVERT TEXT INTO SORTABLE CODE](javascript:call_link\('abapconvert_text.htm'\))
-   In addition, the text environment language, and not the logon language, is used in the following cases:
    
    -   The ABAP-specific [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [LOCALE\_SAP](javascript:call_link\('abenhana_session_variables.htm'\)) in SAP HANA and the session variable [system\_language](javascript:call_link\('abencds_session_variable_v2.htm'\)) in ABAP CDS contain the current text environment language in reads from ABAP or ABAP SQL.
    -   If the logon language for the [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") is not defined in the [RFC destination](javascript:call_link\('abenrfc_dest_glosry.htm'\) "Glossary Entry") in a [remote function call](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry"), it is determined by the current text environment language.
    -   If a language is not specified explicitly in the statement [SUBMIT VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)), the logon language of the [background session](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry") is set implicitly to the current text environment language.
    -   The texts on [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") are determined by the current text environment language.
    -   The [exception texts](javascript:call_link\('abenexception_text_glosry.htm'\) "Glossary Entry") returned by [exception classes](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") are determined by the current text environment language.
    
    Any further frameworks based on the nominal value of the system field sy-langu access the current text environment language and not the logon language.
    

Hints

-   The ABAP programming language supports a subset covered by [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") and not the full scope of UTF-16. This contains all [UTF](javascript:call_link\('abenutf_glosry.htm'\) "Glossary Entry") characters except those in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry"). ABAP interprets a character from the surrogate area as two characters.
-   In the non-Unicode [single code page systems](javascript:call_link\('abensingle_codepage_system_glosry.htm'\) "Glossary Entry") supported before release 7.50, the code page of the text environment was always the non-Unicode system code page of the current AS instance. It was possible to configure different system code pages for the code page of the text environment of a system only in the [MDMP systems](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry") supported before ABAP release 7.0.

Example

Setting the text environment explicitly before an [aRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry"). The function module DEMO\_RFM\_CALL\_TRANSACTION calls a transaction using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") passed to it. The logon language of the [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") is always English, regardless of the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current session. Afterwards, the text environment language is set back to its previous value.

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
[SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\))
[GET LOCALE LANGUAGE](javascript:call_link\('abapget_locale.htm'\))
![Example](exa.gif "Example") [Setting the Text Environment](javascript:call_link\('abenset_locale_abexa.htm'\))
