# ABAP - Keyword Documentation / ABAP - Programming Language / Text Repositories / Text Pools

Included pages: 2



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.55](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abentext_pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_pool.htm)
- [abapset_language.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_language.htm)

**Bundle Contains**: 2 documentation pages
**Version**: ABAP 7.55
**Generated**: 2025-09-01T11:25:45.770Z

---

### abentext_pool.htm

> **📖 Official SAP Documentation**: [abentext_pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_pool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) → 

Text Pools

Text pools are persistent repositories for the following [text elements](javascript:call_link\('abentext_element_glosry.htm'\) "Glossary Entry"):

-   [Text symbols](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry")

-   [List headers](javascript:call_link\('abenlist_header_glosry.htm'\) "Glossary Entry") ([standard page header](javascript:call_link\('abenstandard_page_header_glosry.htm'\) "Glossary Entry"))

-   [Selection texts](javascript:call_link\('abenselection_text_glosry.htm'\) "Glossary Entry")

There is one text pool for the original language of the program and one text pool for each translation language. Text pools are supported for the following [program types](javascript:call_link\('abenprogram_type_oview.htm'\)):

-   Executable programs

-   Class pools

-   Function pools

-   Module pools

-   Subroutine pools

From which text pool an ABAP program takes its texts depends on the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") or a secondary language
or can be configured while the program is being executed .

-   When a program is loaded into an [internal session](javascript:call_link\('abeninternal_session_glosry.htm'\) "Glossary Entry"), the text elements of the text pool of the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") are imported by default. If this text pool does not exist, the text pool of the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is used. If none of these text pools exists, an empty text pool without text elements is loaded.

-   When the program is executed, the text pool of a different language can be loaded using the statement [SET LANGUAGE](javascript:call_link\('abapset_language.htm'\)).

Hint

In [global classes](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") and [function pools](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry"), the text pools are assigned to the associated master program. In the repository, this program has a different name from the class or function pool.

Continue
[SET LANGUAGE](javascript:call_link\('abapset_language.htm'\))



**📖 Source**: [abentext_pool.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_pool.htm)

### abapset_language.htm

> **📖 Official SAP Documentation**: [abapset_language.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_language.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abapset_language.htm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_language.htm)


  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Text Pools](javascript:call_link\('abentext_pool.htm'\)) → 

SET LANGUAGE

[Short Reference](javascript:call_link\('abapset_language_shortref.htm'\))

Syntax

SET LANGUAGE lang.

Effect

This statement loads the [list headers](javascript:call_link\('abenlist_header_glosry.htm'\) "Glossary Entry") and [text symbols](javascript:call_link\('abentext_symbol_glosry.htm'\) "Glossary Entry") for the [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry") of the language specified in lang. lang must be a character-like data object containing a language key with the length 1. The possible language keys are contained in the SPRAS column of the database table T002. The loaded [text elements](javascript:call_link\('abentext_element_glosry.htm'\) "Glossary Entry") are only valid for the current program and not for the programs called within it. If lang contains a space, the behavior is undefined.

If there is no text pool for the specified language, the text pool of the [secondary language](javascript:call_link\('abensecondary_language_glosry.htm'\) "Glossary Entry") in AS ABAP is loaded. If a secondary language is not set, no new text pool is loaded and sy-subrc is set to 4. In this case, the program continues to use the text elements of the previous text pool.

If list headers and text symbols are missing in a text pool loaded using SET LANGUAGE but existed in the previously loaded text pool, these are initialized.

System Fields

sy-subrc

Meaning

0

The text pool of the specified language or secondary language was loaded.

4

Neither the text pool of the specified language nor the secondary language could be loaded.

Hints

-   When calling a program, the system loads the text pool in the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") by default. If this text pool does not exist, the system loads the text pool in the secondary language. If this text pool also does not exist, all text elements remain initialized.
    

-   The SET LANGUAGE statement does not load the [selection texts](javascript:call_link\('abenselection_text_glosry.htm'\) "Glossary Entry") of the language specified. If this is necessary, the statement [READ TEXTPOOL](javascript:call_link\('abapread_textpool.htm'\)) can be used. The selection texts read in can then be displayed on the selection screen using the function modules SELECTION\_TEXTS\_MODIFY and SELECTION\_TEXTS\_MODIFY\_DTEL.
    

-   Do not confuse the statement SET LANGUAGE with the statement [SET LOCALE LANGUAGE](javascript:call_link\('abapset_locale.htm'\)), used for setting the [text environment](javascript:call_link\('abentext_environment_glosry.htm'\) "Glossary Entry"). In particular, it does not have a corresponding GET LANGUAGE statement.

Example

Displays the text symbol text-010 in different languages. Output is produced for all languages for which the text pool exists in the specified language, or in the secondary language.

DATA langu LIKE sy-langu.
SELECT spras FROM t002
       INTO  @langu.
  SET LANGUAGE langu.
  IF sy-subrc = 0.
    cl\_demo\_output=>write( |{ langu } { text-010 }| ).
  ENDIF.
ENDSELECT.
cl\_demo\_output=>display( ).
