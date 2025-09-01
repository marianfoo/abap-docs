  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Language Environment](javascript:call_link\('abenlanguage.htm'\)) →  [Language Settings](javascript:call_link\('abenlanguage_settings.htm'\)) →  [Text Environment Language and Text Environment](javascript:call_link\('abentext_environment.htm'\)) → 

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