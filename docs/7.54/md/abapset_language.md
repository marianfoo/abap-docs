  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Text Repositories](javascript:call_link\('abenabap_texts.htm'\)) →  [Texts in Text Pools](javascript:call_link\('abentext_pool.htm'\)) → 

SET LANGUAGE

[Quick Reference](javascript:call_link\('abapset_language_shortref.htm'\))

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

Notes

-   When calling a program, the system loads the text pool in the [logon language](javascript:call_link\('abenlogon_language_glosry.htm'\) "Glossary Entry") by default. If this text pool does not exist, the system loads the text pool in the secondary language. If this text pool also does not exist, all text elements remain initialized.
    
-   The SET LANGUAGE statement does not load the [selection texts](javascript:call_link\('abenselection_text_glosry.htm'\) "Glossary Entry") of the language specified. If this is necessary, the statement [READ TEXTPOOL](javascript:call_link\('abapread_textpool.htm'\)) can be used. The selection texts read in can then be displayed on the selection screen using the function modules SELECTION\_TEXTS\_MODIFY and SELECTION\_TEXTS\_DTEL.
    
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