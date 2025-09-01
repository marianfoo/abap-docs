---
title: "Text Environment Language and Text Environment"
description: |
  -   Text Environment Language(#abentext-environment-1--------text-environment---@ITOC@@ABENTEXT_ENVIRONMENT_2) Text Environment Language The text environment language(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_env_langu_glosry.htm 'Glossary Entry') is part of the langua
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_environment.htm"
abapFile: "abentext_environment.htm"
keywords: ["select", "do", "if", "case", "try", "method", "class", "data", "types", "abentext", "environment"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Language Environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage.htm) →  [Language Settings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage_settings.htm) → 

Text Environment Language and Text Environment

-   [Text Environment Language](#abentext-environment-1--------text-environment---@ITOC@@ABENTEXT_ENVIRONMENT_2)

Text Environment Language

The [text environment language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_env_langu_glosry.htm "Glossary Entry") is part of the [language settings](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlanguage_settings.htm) of an ABAP program and determines its [text environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_environment_glosry.htm "Glossary Entry"). It is valid during an [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry").

-   The text environment language is set at the start of each internal session to the [logon language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current [user session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_session_glosry.htm "Glossary Entry").

-   It can also be set to a different language for the current internal session using the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_locale.htm).

The current text environment language can be determined using the method GET\_LANGUAGE of the class CL\_ABAP\_SYST or using the statement [GET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_locale.htm), and is the nominal content of the system field [sy-langu](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_fields.htm). The possible single-character abbreviations for the text environment language are stored as language keys in the column SPRAS of the database table T002.

Example

Asserts that the system field sy-langu contains the current text environment language, An exception is raised if the system field is overwritten in the program.

ASSERT sy-langu = cl\_abap\_syst=>get\_language( ).

Text Environment

All programs in an [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") run in a shared text environment determined by the text environment language and which can also be set using the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_locale.htm). As well as the language, the text environment comprises the following:

-   A code page

The [code page](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry") of the text environment is always the [system code page](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_codepage_glosry.htm "Glossary Entry") [UTF-16](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutf16_glosry.htm "Glossary Entry") of the AS instances of a [Unicode system](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenunicode_system_glosry.htm "Glossary Entry") and cannot be changed. The current release supports Unicode systems only. Text environments with other code pages are no longer supported. There is a special feature in which the non-Unicode code page that is used for conversions is the one that would be assigned to the current text environment in a non-Unicode system. This only applies to specific statements, such as reading and writing [legacy files](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlegacy_file_glosry.htm "Glossary Entry") using the [ABAP file interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_files.htm).

-   A locale

The [locale](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocale_glosry.htm "Glossary Entry") properties that match the text environment language and country are defined in an ICU (International Components for Unicode) library. This library is made available for AS ABAP and is independent of the operating system of the [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the [AS instances](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry").

The text environment handles texts in character-like data objects:

-   The [code page](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry") of the text environment affects all operations that depend on the current character set, such as

-   Casting character-like data objects to byte-like types

-   Transferring data from and to [external storage](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm)

-   Transferring data using [data and communication interfaces](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_data_communication.htm)

-   The [locale](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlocale_glosry.htm "Glossary Entry") of the text environment affects all statements that sort character-like data objects as text, such as

-   [SORT AS TEXT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsort_itab.htm)

-   [CONVERT TEXT INTO SORTABLE CODE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapconvert_text.htm)

-   In addition, the text environment language, and not the logon language, is used in the following cases:

-   The ABAP-specific [session variable](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensession_variable_glosry.htm "Glossary Entry") [LOCALE\_SAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhana_session_variables.htm) in SAP HANA and the session variable [system\_language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencds_session_variable_v2.htm) in ABAP CDS contain the current text environment language in reads from ABAP or ABAP SQL.

-   If the logon language for the [RFC session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_session_glosry.htm "Glossary Entry") is not defined in the [RFC destination](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_dest_glosry.htm "Glossary Entry") in a [remote function call](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenremote_function_call_glosry.htm "Glossary Entry"), it is determined by the current text environment language.

-   If a language is not specified explicitly in the statement [SUBMIT VIA JOB](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsubmit_via_job.htm), the logon language of the [background session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_session_glosry.htm "Glossary Entry") is set implicitly to the current text environment language.

-   The texts on [selection screens](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_glosry.htm "Glossary Entry") are determined by the current text environment language.

-   The [exception texts](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexception_text_glosry.htm "Glossary Entry") returned by [exception classes](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenexception_class_glosry.htm "Glossary Entry") are determined by the current text environment language.

Any further frameworks based on the nominal value of the system field sy-langu access the current text environment language and not the logon language.

Hints

-   The ABAP programming language supports a subset covered by [UCS-2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenucs2_glosry.htm "Glossary Entry") and not the full UTF-16 set. This contains all [UTF](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutf_glosry.htm "Glossary Entry") characters except those in the [surrogate area](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensurrogate_area_glosry.htm "Glossary Entry"). ABAP interprets a character from the surrogate area as two characters.

-   In the non-Unicode [single code page systems](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensingle_codepage_system_glosry.htm "Glossary Entry") supported before release 7.50, the code page of the text environment was always the non-Unicode system code page of the current AS instance. It was possible to configure different system code pages for the code page of the text environment of a system only in the [MDMP systems](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmdmp-system_glosry.htm "Glossary Entry") supported before Release 7.0.

Example

Sets the text environment explicitly before an [aRFC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensrfc_glosry.htm "Glossary Entry"). The function module DEMO\_RFM\_CALL\_TRANSACTION calls a transaction using a [transaction code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_code_glosry.htm "Glossary Entry") passed to it. The logon language of the [RFC session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrfc_session_glosry.htm "Glossary Entry") is not determined by the [logon language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogon_language_glosry.htm "Glossary Entry") of the current session and is always English. Afterwards, the text environment language is set back to its previous value.

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
[SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_locale.htm)
[GET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapget_locale.htm)
![Example](exa.gif "Example") [Setting the Text Environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenset_locale_abexa.htm)