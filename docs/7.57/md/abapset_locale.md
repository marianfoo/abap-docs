  

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