# ABAP Keyword Documentation / ABAP − Reference / Language Environment

Included pages: 17



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenlanguage.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlanguage.htm)
- [abenlanguage_settings.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlanguage_settings.htm)
- [abenlogon_language.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language.htm)
- [abentext_environment.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_environment.htm)
- [abapset_locale.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_locale.htm)
- [abapget_locale.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_locale.htm)
- [abenset_locale_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenset_locale_abexa.htm)
- [abencountry.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry.htm)
- [abencountry_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry_formats.htm)
- [abennumber_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumber_formats.htm)
- [abendate_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_formats.htm)
- [abentime_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_formats.htm)
- [abapset_country.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_country.htm)

**Bundle Contains**: 13 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.190Z

---

### abenlanguage.htm

> **📖 Official SAP Documentation**: [abenlanguage.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlanguage.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) → 

Language Environment

The language environment of a program is part of the runtime environment of an ABAP program and covers the following aspects:

-   [Language settings](javascript:call_link\('abenlanguage_settings.htm'\))

The language settings defined by the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") and a [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") configure all language-dependent behavior of an ABAP program.

-   [Format settings](javascript:call_link\('abencountry.htm'\))

Country-specific format settings that determine, for example, the format of numbers, dates, and times.

Continue
[Language Settings](javascript:call_link\('abenlanguage_settings.htm'\))
[Formatting Settings](javascript:call_link\('abencountry.htm'\))



**📖 Source**: [abenlanguage.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlanguage.htm)

### abenlanguage_settings.htm

> **📖 Official SAP Documentation**: [abenlanguage_settings.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlanguage_settings.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) → 

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



**📖 Source**: [abenlanguage_settings.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlanguage_settings.htm)

### abenlogon_language.htm

> **📖 Official SAP Documentation**: [abenlogon_language.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) → 

Logon Language

The [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") is defined when a [user](javascript:call_link\('abenuser_glosry.htm'\) "Glossary Entry") [logs on](javascript:call_link\('abenlogon_glosry.htm'\) "Glossary Entry") to an AS ABAP for the entire [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry") and cannot then be changed. The current logon language can be determined using the method GET\_LOGON\_LANGUAGE of the class CL\_ABAP\_SYST.

The logon language influences the selection of the following texts:

-   Texts on general classic [dynpros](javascript:call_link\('abendynpro_glosry.htm'\) "Glossary Entry")

-   Texts of [messages](javascript:call_link\('abenmessage_glosry.htm'\) "Glossary Entry")

-   Texts from [text pools](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry")

Note

The texts listed above are not affected by the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). The statement [SET LANGUAGE](javascript:call_link\('abapset_language.htm'\)) is used to change the language of the texts of a text pool.

Example

Reads the current logon language.

DATA(logon\_langu) = cl\_abap\_syst=>get\_logon\_language( ).



**📖 Source**: [abenlogon_language.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogon_language.htm)

### abentext_environment.htm

> **📖 Official SAP Documentation**: [abentext_environment.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_environment.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) → 

Text Environment Language and Text Environment

-   [Text Environment Language](#abentext-environment-1--------text-environment---@ITOC@@ABENTEXT_ENVIRONMENT_2)

Text Environment Language

The [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is part of the [language settings](javascript:call_link\('abenlanguage_settings.htm'\)) of an ABAP program and determines its [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). It is valid during an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

-   The text environment language is set at the start of each internal session to the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry").

-   It can also be set to a different language for the current internal session using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

The current text environment language can be determined using the method GET\_LANGUAGE of class CL\_ABAP\_SYST or using the statement [GET LOCALE LANGUAGE](javascript:call_link\('abapget_locale.htm'\)), and is the nominal content of the system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)). The possible single-character abbreviations for the text environment language are stored as language keys in the column SPRAS of the database table T002.

Example

Asserts that the system field sy-langu contains the current text environment language, An exception is raised if the system field is overwritten in the program.

ASSERT sy-langu = cl\_abap\_syst=>get\_language( ).

Text Environment

All programs in an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") run in a shared text environment determined by the text environment language and which can also be set using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). As well as the language, the text environment comprises the following:

-   A code page

The [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") of the text environment is always the [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") of the AS Instances of a [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") and cannot be changed. The current release supports Unicode systems only. Text environments with other code pages are no longer supported. There is a special feature in which the non-Unicode code page that is used for conversions is the one that would be assigned to the current text environment in a non-Unicode system. This only applies to specific statements, such as reading and writing [legacy files](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") using the [ABAP file interface](javascript:call_link\('abenabap_language_files.htm'\)).

-   A locale

The [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") properties that match the text environment language and country are defined in an ICU (International Components for Unicode) library. This library is made available for AS ABAP and is independent of the operating system of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the [AS Instances](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry").

The text environment handles texts in character-like data objects:

-   The [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") of the text environment affects all operations that depend on the current character set, such as

-   Casting character-like data objects to byte-like types

-   Transferring data from and to [external storage](javascript:call_link\('abenabap_language_external_data.htm'\))

-   Transferring data using [data and communication interfaces](javascript:call_link\('abenabap_data_communication.htm'\))

-   The [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") of the text environment affects all statements that sort character-like data objects as text, such as

-   [SORT AS TEXT](javascript:call_link\('abapsort_itab.htm'\))

-   [CONVERT TEXT INTO SORTABLE CODE](javascript:call_link\('abapconvert_text.htm'\))

-   In addition, the text environment language, and not the logon language, is used in the following cases:

-   The ABAP-specific [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [LOCALE\_SAP](javascript:call_link\('abenhana_session_variables.htm'\)) in SAP HANA and the session variable [system\_language](javascript:call_link\('abencds_f1_session_variable.htm'\)) in ABAP CDS contain the current text environment language in reads from ABAP or ABAP SQL.

-   If the logon language for the [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") is not defined in the [RFC destination](javascript:call_link\('abendestination_glosry.htm'\) "Glossary Entry") in a [remote function call](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry"), it is determined by the current text environment language.

-   If a language is not specified explicitly in the statement [SUBMIT VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)), the logon language of the [background session](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry") is set implicitly to the current text environment language.

-   The texts on [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") are determined by the current text environment language.

-   The [exception texts](javascript:call_link\('abenexception_text_glosry.htm'\) "Glossary Entry") returned by [exception classes](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") are determined by the current text environment language.

Any further frameworks based on the nominal value of the system field sy-langu access the current text environment language and not the logon language.

Notes

-   The ABAP programming language supports a subset covered by [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") and not the full UTF-16 set. This contains all [UTF](javascript:call_link\('abenutf_glosry.htm'\) "Glossary Entry") characters except those in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry"). ABAP interprets a character from the surrogate area as two characters.

-   In the non-Unicode [single code page systems](javascript:call_link\('abensingle_codepage_system_glosry.htm'\) "Glossary Entry") supported before release 7.50, the code page of the text environment was always the non-Unicode system code page of the current AS Instance. It was possible to configure different system code pages for the code page of the text environment of a system only in the [MDMP systems](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry") supported before Release 7.0.

Example

Sets the text environment explicitly before an [aRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry"). The function module DEMO\_RFM\_CALL\_TRANSACTION calls a transaction using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") passed to it. The logon language of the [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") is not determined by the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current session and is always English. Afterwards, the text environment language is set back to its previous value.

GET LOCALE LANGUAGE DATA(langu)
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



**📖 Source**: [abentext_environment.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_environment.htm)

### abapset_locale.htm

> **📖 Official SAP Documentation**: [abapset_locale.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_locale.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) →  [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) → 

SET LOCALE LANGUAGE

[Quick Reference](javascript:call_link\('abapset_locale_shortref.htm'\))

Syntax

SET LOCALE LANGUAGE lang *\[*[obsolete\_parameters](javascript:call_link\('abapset_locale_obsolete.htm'\))*\]*.

Effect

This statement sets the [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") to the value specified in lang. This configures the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry") for all programs in the internal session.

The [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") lang expects a character-like data object containing a language key (with a maximum of one character) for which [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") properties are defined in the ICU library of the AS ABAP. The possible language keys are contained in the SPRAS column of the database table T002. The locale of the text environment is set accordingly. If the data object lang contains only blanks, the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry") is used.

The statement SET LOCALE LANGUAGE sets the no-modifiable [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") of the text environment. In a Unicode system, this is always [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") (and the ABAP programming language supports the subset [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry")). After SET LOCALE LANGUAGE is executed, however, the non-Unicode code page that would be set by the statement in a non-Unicode system (see below), is used for specific statements such as reading and writing [legacy files](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") for conversions. (See the additions [LEGACY](javascript:call_link\('abapopen_dataset_mode.htm'\)), and [NON-UNICODE](javascript:call_link\('abapopen_dataset_encoding.htm'\)) of the statement [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)).) If possible, this non-Unicode code page is taken from the column CHARCO of the database table TCP0C. The key used here is created from the current operating system of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS Instance (system field sy-opsys), the language key specified in lang, and a language ID set implicitly from the database table TCP0D or [set explicitly](javascript:call_link\('abapset_locale_obsolete.htm'\)).

System Fields

If the statement SET LOCALE LANGUAGE is executed successfully, it sets the system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)) to the value specified in lang.

Programming Guideline

[If possible, do not switch the text environment within the code](javascript:call_link\('abentext_environm_guidl.htm'\) "Guideline")

Notes

-   The text environment of an internal session should only be changed for the following purposes:
    

-   Processing character-like data objects that are in a different language to the logon language of the current user. The text environment language is important for the statements [SORT ... AS TEXT](javascript:call_link\('abapsort_itab.htm'\)) and [CONVERT TEXT](javascript:call_link\('abapconvert_text.htm'\)).

-   [Legacy files](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") can be read and written.

The other consequences for the text environment documented under [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) should also be noted.

-   After processing in a changed text environment, the text environment should be reset to the previous text environment.
    
-   The statement SET LOCALE LANGUAGE sets the text environment language specified in sy-langu and returned by the method GET\_LANGUAGE of the class CL\_ABAP\_SYST. It does not set the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") returned by the method GET\_LOGON\_LANGUAGE.
    
-   The statement SET LOCALE LANGUAGE should not be confused with the statement [SET LANGUAGE](javascript:call_link\('abapset_language.htm'\)), used for loading the texts of a [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry").
    
-   Instead of the statement SET LOCALE, the four function modules whose names begin with SCP\_MIXED\_LANGUAGES\_ can also be used to define or change the current text environment, and to reset it to the original text environment.
    
-   The statement has two obsolete additions [COUNTRY](javascript:call_link\('abapset_locale_obsolete.htm'\)) and [MODIFIER](javascript:call_link\('abapset_locale_obsolete.htm'\)) that should no longer be used.
    

Example

Sets the text environment to a valid value.

DATA langu TYPE sy-langu.
cl\_demo\_input=>request( CHANGING field = langu ).
TRY.
    SET LOCALE LANGUAGE langu.
  CATCH cx\_sy\_localization\_error INTO DATA(exc).
    cl\_demo\_output=>write( exc->get\_text( ) ).
ENDTRY.
cl\_demo\_output=>display(
    |Logon language:            { cl\_abap\_syst=>get\_logon\_language( )
  }\\nText environment language: { cl\_abap\_syst=>get\_language( )
  }\\nsy-langu:                  { sy-langu }| ).

Executable Example

[Setting the Text Environment](javascript:call_link\('abenset_locale_abexa.htm'\))

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_LOCALIZATION\_ERROR

-   Cause: Using the tables TCP0D and TCP0C, a character set was detected that is not released in your system. The released character sets are in the table TCPDB. Normally this table contains exactly one character set and this runtime error occurs because the system has attempted to use a non-compatible language.
    Runtime error: TEXTENV\_CODEPAGE\_NOT\_ALLOWED
    
-   Cause: No entry exists (for the current platform) in the SAP text environment table TCP0C for the specified keys lang, cntry, and mod.
    Runtime error: TEXTENV\_KEY\_INVALID
    

Non-Handleable Exceptions

-   Cause: Selection of a 'binary' text environment using the modifier 'BINARY', 'C', 'POSIX', or 'RAW'.
    Runtime error: TEXTENV\_BINARY\_NOT\_SUPPORTED
    
-   Cause: One of the key values lang, cntry, or mod is longer than the corresponding fields LANGU, COUNTRY, or MODIFIER in the SAP text environment table TCP0C.
    Runtime error: TEXTENV\_KEY\_TOO\_LONG



**📖 Source**: [abapset_locale.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_locale.htm)

### abapget_locale.htm

> **📖 Official SAP Documentation**: [abapget_locale.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_locale.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) →  [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) → 

GET LOCALE LANGUAGE

[Quick Reference](javascript:call_link\('abapget_locale_shortref.htm'\))

Syntax

GET LOCALE LANGUAGE lang [obsolete\_parameters](javascript:call_link\('abapget_locale_obsolete.htm'\)).

Effect

The language key of the current [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is assigned to the variable lang. The data object lang must have a character-like data type. The statement has two obsolete additions - [COUNTRY](javascript:call_link\('abapget_locale_obsolete.htm'\)) and [MODIFIER](javascript:call_link\('abapget_locale_obsolete.htm'\)) - that must be specified. However the results are not evaluated.

Note

The imported text environment language of the current text environment can be used to restore the environment after it has been changed using the statement [SET LOCALE](javascript:call_link\('abapset_locale.htm'\)).

Example

Determining the current text environment and restoring it after a change.

DATA: lang  TYPE tcp0c-langu,
      dummy TYPE string ##needed.
GET LOCALE LANGUAGE lang COUNTRY dummy MODIFIER dummy.
SET LOCALE LANGUAGE ...
...
SET LOCALE LANGUAGE lang.



**📖 Source**: [abapget_locale.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapget_locale.htm)

### abenset_locale_abexa.htm

> **📖 Official SAP Documentation**: [abenset_locale_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenset_locale_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) →  [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) → 

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
      ( \`Csernus G�bor\` ) ).
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

This example shows the effect of the locale of the text environment on sort functions. In Hungarian text environments, "Cs" and "Cu" are sorted differently than in English environments.



**📖 Source**: [abenset_locale_abexa.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenset_locale_abexa.htm)

### abentext_environment.htm

> **📖 Official SAP Documentation**: [abentext_environment.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_environment.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) → 

Text Environment Language and Text Environment

-   [Text Environment Language](#abentext-environment-1--------text-environment---@ITOC@@ABENTEXT_ENVIRONMENT_2)

Text Environment Language

The [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is part of the [language settings](javascript:call_link\('abenlanguage_settings.htm'\)) of an ABAP program and determines its [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). It is valid during an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

-   The text environment language is set at the start of each internal session to the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry").

-   It can also be set to a different language for the current internal session using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

The current text environment language can be determined using the method GET\_LANGUAGE of class CL\_ABAP\_SYST or using the statement [GET LOCALE LANGUAGE](javascript:call_link\('abapget_locale.htm'\)), and is the nominal content of the system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)). The possible single-character abbreviations for the text environment language are stored as language keys in the column SPRAS of the database table T002.

Example

Asserts that the system field sy-langu contains the current text environment language, An exception is raised if the system field is overwritten in the program.

ASSERT sy-langu = cl\_abap\_syst=>get\_language( ).

Text Environment

All programs in an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") run in a shared text environment determined by the text environment language and which can also be set using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)). As well as the language, the text environment comprises the following:

-   A code page

The [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") of the text environment is always the [system code page](javascript:call_link\('abensystem_codepage_glosry.htm'\) "Glossary Entry") [UTF-16](javascript:call_link\('abenutf16_glosry.htm'\) "Glossary Entry") of the AS Instances of a [Unicode system](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") and cannot be changed. The current release supports Unicode systems only. Text environments with other code pages are no longer supported. There is a special feature in which the non-Unicode code page that is used for conversions is the one that would be assigned to the current text environment in a non-Unicode system. This only applies to specific statements, such as reading and writing [legacy files](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") using the [ABAP file interface](javascript:call_link\('abenabap_language_files.htm'\)).

-   A locale

The [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") properties that match the text environment language and country are defined in an ICU (International Components for Unicode) library. This library is made available for AS ABAP and is independent of the operating system of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the [AS Instances](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry").

The text environment handles texts in character-like data objects:

-   The [code page](javascript:call_link\('abencodepage_glosry.htm'\) "Glossary Entry") of the text environment affects all operations that depend on the current character set, such as

-   Casting character-like data objects to byte-like types

-   Transferring data from and to [external storage](javascript:call_link\('abenabap_language_external_data.htm'\))

-   Transferring data using [data and communication interfaces](javascript:call_link\('abenabap_data_communication.htm'\))

-   The [locale](javascript:call_link\('abenlocale_glosry.htm'\) "Glossary Entry") of the text environment affects all statements that sort character-like data objects as text, such as

-   [SORT AS TEXT](javascript:call_link\('abapsort_itab.htm'\))

-   [CONVERT TEXT INTO SORTABLE CODE](javascript:call_link\('abapconvert_text.htm'\))

-   In addition, the text environment language, and not the logon language, is used in the following cases:

-   The ABAP-specific [session variable](javascript:call_link\('abensession_variable_glosry.htm'\) "Glossary Entry") [LOCALE\_SAP](javascript:call_link\('abenhana_session_variables.htm'\)) in SAP HANA and the session variable [system\_language](javascript:call_link\('abencds_f1_session_variable.htm'\)) in ABAP CDS contain the current text environment language in reads from ABAP or ABAP SQL.

-   If the logon language for the [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") is not defined in the [RFC destination](javascript:call_link\('abendestination_glosry.htm'\) "Glossary Entry") in a [remote function call](javascript:call_link\('abenremote_function_call_glosry.htm'\) "Glossary Entry"), it is determined by the current text environment language.

-   If a language is not specified explicitly in the statement [SUBMIT VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)), the logon language of the [background session](javascript:call_link\('abenbatch_session_glosry.htm'\) "Glossary Entry") is set implicitly to the current text environment language.

-   The texts on [selection screens](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") are determined by the current text environment language.

-   The [exception texts](javascript:call_link\('abenexception_text_glosry.htm'\) "Glossary Entry") returned by [exception classes](javascript:call_link\('abenexception_class_glosry.htm'\) "Glossary Entry") are determined by the current text environment language.

Any further frameworks based on the nominal value of the system field sy-langu access the current text environment language and not the logon language.

Notes

-   The ABAP programming language supports a subset covered by [UCS-2](javascript:call_link\('abenucs2_glosry.htm'\) "Glossary Entry") and not the full UTF-16 set. This contains all [UTF](javascript:call_link\('abenutf_glosry.htm'\) "Glossary Entry") characters except those in the [surrogate area](javascript:call_link\('abensurrogate_area_glosry.htm'\) "Glossary Entry"). ABAP interprets a character from the surrogate area as two characters.

-   In the non-Unicode [single code page systems](javascript:call_link\('abensingle_codepage_system_glosry.htm'\) "Glossary Entry") supported before release 7.50, the code page of the text environment was always the non-Unicode system code page of the current AS Instance. It was possible to configure different system code pages for the code page of the text environment of a system only in the [MDMP systems](javascript:call_link\('abenmdmp-system_glosry.htm'\) "Glossary Entry") supported before Release 7.0.

Example

Sets the text environment explicitly before an [aRFC](javascript:call_link\('abensrfc_glosry.htm'\) "Glossary Entry"). The function module DEMO\_RFM\_CALL\_TRANSACTION calls a transaction using a [transaction code](javascript:call_link\('abentransaction_code_glosry.htm'\) "Glossary Entry") passed to it. The logon language of the [RFC session](javascript:call_link\('abenrfc_session_glosry.htm'\) "Glossary Entry") is not determined by the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current session and is always English. Afterwards, the text environment language is set back to its previous value.

GET LOCALE LANGUAGE DATA(langu)
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



**📖 Source**: [abentext_environment.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_environment.htm)

### abenlanguage_settings.htm

> **📖 Official SAP Documentation**: [abenlanguage_settings.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlanguage_settings.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) → 

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



**📖 Source**: [abenlanguage_settings.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlanguage_settings.htm)

### abencountry.htm

> **📖 Official SAP Documentation**: [abencountry.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) → 

Formatting Settings

Formats

The formatting settings of the [language environment](javascript:call_link\('abenlanguage.htm'\)) determine

-   the number format (decimal and thousand separators)

-   The date format (separators and order)

-   The time format (24 hour or 12 hour format)

for formatted output.

Definition

The formatting settings are set as follows:

-   At the start of an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") they are determined by the related default settings in the fixed values in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") of the current user.

-   Using the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)), this default setting for the current internal session can be overwritten using [country-specific formats](javascript:call_link\('abencountry_formats.htm'\)).

Effect

The formatting settings affect the following ABAP language elements:

-   Assignments with the statement [WRITE TO](javascript:call_link\('abapwrite_to.htm'\))

-   Output in lists with the statement [WRITE](javascript:call_link\('abapwrite-.htm'\))

-   Specifies the parameter [ENVIRONMENT](javascript:call_link\('abapcompute_string_format_options.htm'\)) for the formatting options [NUMBER](javascript:call_link\('abapcompute_string_format_options.htm'\)), [DATE](javascript:call_link\('abapcompute_string_format_options.htm'\)), [TIME](javascript:call_link\('abapcompute_string_format_options.htm'\)), and [TIMESTAMP](javascript:call_link\('abapcompute_string_format_options.htm'\)) in [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\)).

The formatting setting set in the user master record also affect the preparation of numbers, dates, and times specified on the screens of dynpros.

Handling Invalid Values

Preparing the content of data object of the types d or t normally takes place independently from their content. [Invalid values](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) are also interpreted as date or time entries. For time output in the 12 hour format, the separators are inserted at the respective points for invalid values and the output of the AM/am or PM/pm abbreviation is undefined for the following exception.

Dynpros do not support any invalid values in the time fields with the 24 hour format with the exception of the value "24:00:00". This value is saved here as "240000" when passed to an ABAP field of type t. To support this value in time fields in 12 hour format too, it is formatted as "24:00:00 PM/pm".

Notes

The classes CL\_ABAP\_DATFM and CL\_ABAP\_TIMEFM contain helper methods for handling time formats.

Continue
[Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\))
[SET COUNTRY](javascript:call_link\('abapset_country.htm'\))



**📖 Source**: [abencountry.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry.htm)

### abencountry_formats.htm

> **📖 Official SAP Documentation**: [abencountry_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry_formats.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) → 

Country-Specific Formats

The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting.

-   [Number Formats](javascript:call_link\('abennumber_formats.htm'\))

-   [Date Formats](javascript:call_link\('abendate_formats.htm'\))

-   [Time Formats](javascript:call_link\('abentime_formats.htm'\))

The settings for a specific country can either be

-   set using the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)) for an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") or

-   used in [character string templates](javascript:call_link\('abenstring_templates.htm'\)) by means of formatting option [COUNTRY](javascript:call_link\('abapcompute_string_format_options.htm'\)) for the formatting of an [embedded expression](javascript:call_link\('abenstring_templates_expressions.htm'\)).

Note

The country names that correspond to the country codes in table T005X can be found in table T005T.

Continue
[Number Formats](javascript:call_link\('abennumber_formats.htm'\))
[Date Formats](javascript:call_link\('abendate_formats.htm'\))
[Time Formats](javascript:call_link\('abentime_formats.htm'\))



**📖 Source**: [abencountry_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry_formats.htm)

### abennumber_formats.htm

> **📖 Official SAP Documentation**: [abennumber_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumber_formats.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) →  [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\)) → 

Number Formats

The format of numbers is specified by the column XDEZP of the database table T005X. The options in the table below are available for displaying decimal separators and thousands separators:

XDEZP

Decimal Separator

Thousands Separator

" "

","

"."

X

"."

","

Y

","

" "

Example

Produces a number with differing decimal and thousand separators.

DATA pack TYPE p DECIMALS 2 VALUE '1234.56'.
cl\_demo\_output=>display(
  |{ pack COUNTRY = 'DE ' }\\n{ pack COUNTRY = 'US ' }| ).

Executable Example

To see the display of a number in all possible formats, see the respective [example with character string templates](javascript:call_link\('abenstring_template_number_abexa.htm'\)).



**📖 Source**: [abennumber_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abennumber_formats.htm)

### abendate_formats.htm

> **📖 Official SAP Documentation**: [abendate_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_formats.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) →  [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\)) → 

Date Formats

The date format is specified by column DATFM in the database table T005X, where "mm", "dd", and "yyyy" stand for day, month, and year. The following country-specific formats are available:

DATFM

Date Format

"1"

dd.mm.yyyy

"2"

mm/dd/yyyy

"3"

mm-dd-yyyy

"4"

yyyy.mm.dd

"5"

yyyy/mm/dd

"6"

yyyy-mm-dd

"7"

ggyy.mm.dd, Japanese date

"8"

ggyy/mm/dd, Japanese date

"9"

ggyy-mm-dd, Japanese date

"A"

yyyy/mm/dd, Islamic date 1

"B"

yyyy/mm/dd, Islamic date 2

"C"

yyyy/mm/dd, Iranian date

-   In the Japanese formats for values "7", "8", and "9", the first two characters "gg" of a four-digit year are prepared as a Japanese Unicode character for the current Japanese Emperor. The last two characters "yy" signify the year of his reign.

-   In the Islamic formats for values "A" and "B", the date is prepared according to the Islamic moon calendar, which calculates time starting from 16th July 622, which is the date on which Mohammed left Mecca (Hijra). Since this calculation can be different in different Islamic countries, two formats are offered, each of which can be set individually. The respective settings are in database table TISLCAL, and can be changed using program I18N\_MAINTAIN\_TISLCAL.

-   The Iranian format for value "C" is based on an Islamic sun calendar, which calculates in sun years starting from the Hijra.

Note

The class CL\_ABAP\_DATFM contains helper methods for dealing with date formats.

Example

Produces a date with different date formats.

cl\_demo\_output=>display(
  |{ sy-datlo COUNTRY = 'DE ' }\\n{ sy-datlo COUNTRY = 'US ' }| ).

Example

To see the display of the current date in all possible formats, see the associated executable [example with character string templates](javascript:call_link\('abenstring_template_date_abexa.htm'\)).



**📖 Source**: [abendate_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendate_formats.htm)

### abentime_formats.htm

> **📖 Official SAP Documentation**: [abentime_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_formats.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) →  [Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\)) → 

Time Formats

The time format is specified by column TIMEFM in the data base table T005X, where "hh", "mm", and "ss" stand for hour, minute, and second. One 24-hour format and several 12-hour formats are available:

TIMEFM

Time Format

" "

24-hour format (default setting) hh:mm:ss

"1"

12-hour format (1 to 12) hh:mm:ss AM and hh:mm:ss PM

"2"

12-hour format (1 to 12) hh:mm:ss am and hh:mm:ss pm

"3"

12-hour format (0 to 11) hh:mm:ss AM and hh:mm:ss PM

"4"

12-hour format (0 to 11) hh:mm:ss am and hh:mm:ss pm

-   The 24-hour format follows the standard ISO-8601.

-   The 12-hour formats are specific for specific English-speaking countries such as Australia, Canada, New Zealand, and the USA. AM/am stands for "Ante meridiem" (before noon) and PM/pm stands for "Post meridiem" (after noon).

-   The formats for values "1" and "2" or "3" and "4" differ only in the capitalization of AM/PM and am/pm.

-   For the 12-hour formats of values "1" and "2", midnight and noon are displayed as 12:00:00.

-   For the 12-hour formats of values "3" and "2", midnight and noon are displayed as 00:00:00.

Notes

-   All time formats are suitable for the display of times. Only the 24-hour format is suitable for the display of a period of time, that is, the duration between two points in time. It does not make sense to display AM/am and PM/pm for a period of time.

-   The class CL\_ABAP\_TIMEFM contains a helper method for dealing with time formats.

Example

Produces a time with different time formats (if they exist in the database table T005X.

SELECT SINGLE land
       FROM t005x
       WHERE timefm <> ' '
       INTO @DATA(country).
cl\_demo\_output=>display(
  |{ sy-timlo COUNTRY = 'DE ' }\\n{ sy-timlo COUNTRY = country }| ).

Executable Example

[Character String Templates, Time Formats](javascript:call_link\('abenstring_template_time_abexa.htm'\))



**📖 Source**: [abentime_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentime_formats.htm)

### abencountry_formats.htm

> **📖 Official SAP Documentation**: [abencountry_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry_formats.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) → 

Country-Specific Formats

The country-specific formatting settings for numbers, dates, and times are stored in database table T005X. The rows of table T005X contain a key field LAND in which a country key is stored, and fields XDEZP, DATFM, and TIMEFM for the respective formatting.

-   [Number Formats](javascript:call_link\('abennumber_formats.htm'\))

-   [Date Formats](javascript:call_link\('abendate_formats.htm'\))

-   [Time Formats](javascript:call_link\('abentime_formats.htm'\))

The settings for a specific country can either be

-   set using the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)) for an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") or

-   used in [character string templates](javascript:call_link\('abenstring_templates.htm'\)) by means of formatting option [COUNTRY](javascript:call_link\('abapcompute_string_format_options.htm'\)) for the formatting of an [embedded expression](javascript:call_link\('abenstring_templates_expressions.htm'\)).

Note

The country names that correspond to the country codes in table T005X can be found in table T005T.

Continue
[Number Formats](javascript:call_link\('abennumber_formats.htm'\))
[Date Formats](javascript:call_link\('abendate_formats.htm'\))
[Time Formats](javascript:call_link\('abentime_formats.htm'\))



**📖 Source**: [abencountry_formats.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry_formats.htm)

### abapset_country.htm

> **📖 Official SAP Documentation**: [abapset_country.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_country.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Formatting Settings](javascript:call_link\('abencountry.htm'\)) → 

SET COUNTRY

[Quick Reference](javascript:call_link\('abapset_country_shortref.htm'\))

Syntax

SET COUNTRY cntry.

Effect

This statement sets the [formatting settings](javascript:call_link\('abencountry.htm'\)) of the language environment for all following statements of the current [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

cntry expects a character-like data object that either contains a value from the column LAND of the database table T005X or is initial.

-   If cntry contains a value from the table T005X, the number format, date format, and time format are set to a [country-specific format](javascript:call_link\('abencountry_formats.htm'\)) in accordance with the entries in columns XDEZP, DATFM, and TIMEFM.
    
-   If cntry is initial (contains a blank in the first place), the formatting is set in accordance with the fixed values in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry").
    

If the content of cntry cannot be found in the table T005X and does not have a blank in the first place, sy-subrc is set to 4 and the following settings are made:

-   The decimal separator is a decimal point and the thousands separator is a comma.
    
-   Date in the form "mm/dd/yyyy"
    
-   Time in 24-hour format
    

System Fields

sy-subrc

Meaning

0

The specified country key was found in the database table T005X or a space was specified.

4

The specified country key was not found in database table T005X.

Notes

-   As long as the statement SET COUNTRY is not executed in an internal session, the formatting corresponds to the fixed values in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry").
    
-   If certain formatting settings are only required for one or a few formattings, the formatting option [country](javascript:call_link\('abapcompute_string_format_options.htm'\)) can be used for [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\)) instead of SET COUNTRY.
    
-   Do not confuse the statement SET COUNTRY with the obsolete addition [COUNTRY](javascript:call_link\('abapset_locale_obsolete.htm'\)) of the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)), used for setting the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). In particular, it does not have a corresponding GET COUNTRY statement.
    

Example

Sets the formatting settings of the language environment and the way they modify the addition [ENVIRONMENT](javascript:call_link\('abapcompute_string_format_options.htm'\)) in [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\)).

SELECT SINGLE land
       FROM t005x
       WHERE timefm <> ' '
       INTO @DATA(country).
SET COUNTRY country.
cl\_demo\_output=>display(
  |{  sy-datlo DATE = ENVIRONMENT }\\n{
      sy-timlo TIME = ENVIRONMENT }| ).

Executable Examples

-   [String Templates, Formatting Settings](javascript:call_link\('abenstring_template_user_abexa.htm'\))

-   [WRITE, Cutoff Behavior](javascript:call_link\('abenwrite_cutoff_abexa.htm'\))



**📖 Source**: [abapset_country.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapset_country.htm)

### abencountry.htm

> **📖 Official SAP Documentation**: [abencountry.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencountry.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abencountry.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) → 

Formatting Settings

Formats

The formatting settings of the [language environment](javascript:call_link\('abenlanguage.htm'\)) determine

-   the number format (decimal and thousand separators)

-   The date format (separators and order)

-   The time format (24 hour or 12 hour format)

for formatted output.

Definition

The formatting settings are set as follows:

-   At the start of an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry") they are determined by the related default settings in the fixed values in the [user master record](javascript:call_link\('abenuser_master_record_glosry.htm'\) "Glossary Entry") of the current user.

-   Using the statement [SET COUNTRY](javascript:call_link\('abapset_country.htm'\)), this default setting for the current internal session can be overwritten using [country-specific formats](javascript:call_link\('abencountry_formats.htm'\)).

Effect

The formatting settings affect the following ABAP language elements:

-   Assignments with the statement [WRITE TO](javascript:call_link\('abapwrite_to.htm'\))

-   Output in lists with the statement [WRITE](javascript:call_link\('abapwrite-.htm'\))

-   Specifies the parameter [ENVIRONMENT](javascript:call_link\('abapcompute_string_format_options.htm'\)) for the formatting options [NUMBER](javascript:call_link\('abapcompute_string_format_options.htm'\)), [DATE](javascript:call_link\('abapcompute_string_format_options.htm'\)), [TIME](javascript:call_link\('abapcompute_string_format_options.htm'\)), and [TIMESTAMP](javascript:call_link\('abapcompute_string_format_options.htm'\)) in [embedded expressions](javascript:call_link\('abenstring_templates_expressions.htm'\)) in [string templates](javascript:call_link\('abenstring_templates.htm'\)).

The formatting setting set in the user master record also affect the preparation of numbers, dates, and times specified on the screens of dynpros.

Handling Invalid Values

Preparing the content of data object of the types d or t normally takes place independently from their content. [Invalid values](javascript:call_link\('abenbuiltin_types_date_time.htm'\)) are also interpreted as date or time entries. For time output in the 12 hour format, the separators are inserted at the respective points for invalid values and the output of the AM/am or PM/pm abbreviation is undefined for the following exception.

Dynpros do not support any invalid values in the time fields with the 24 hour format with the exception of the value "24:00:00". This value is saved here as "240000" when passed to an ABAP field of type t. To support this value in time fields in 12 hour format too, it is formatted as "24:00:00 PM/pm".

Notes

The classes CL\_ABAP\_DATFM and CL\_ABAP\_TIMEFM contain helper methods for handling time formats.

Continue
[Country-Specific Formats](javascript:call_link\('abencountry_formats.htm'\))
[SET COUNTRY](javascript:call_link\('abapset_country.htm'\))
