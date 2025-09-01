  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) → 

Text Environment Language and Text Environment

-   [Text Environment Language](#@@ITOC@@ABENTEXT_ENVIRONMENT_1)

-   [Text Environment](#@@ITOC@@ABENTEXT_ENVIRONMENT_2)

Text Environment Language

The [text environment language](javascript:call_link\('abentext_env_langu_glosry.htm'\) "Glossary Entry") is part of the [language settings](javascript:call_link\('abenlanguage_settings.htm'\)) of an ABAP program and determines its [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). It is valid during an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry").

-   The text environment language is set at the start of each internal session to the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") of the current [user session](javascript:call_link\('abenuser_session_glosry.htm'\) "Glossary Entry").

-   It can also be set to a different language for the current internal session using the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)).

The current text environment language can be determined using the method GET\_LANGUAGE of the class CL\_ABAP\_SYST or using the statement [GET LOCALE LANGUAGE](javascript:call_link\('abapget_locale.htm'\)), and is the nominal content of the system field [sy-langu](javascript:call_link\('abensystem_fields.htm'\)). The possible single-character abbreviations for the text environment language are stored as language keys in the column SPRAS of the database table T002.

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