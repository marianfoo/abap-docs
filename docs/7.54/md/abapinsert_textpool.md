  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_dynamic.htm) →  [text element](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentextpool.htm) → 

INSERT TEXTPOOL

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_textpool_shortref.htm)

Syntax

INSERT TEXTPOOL prog FROM itab LANGUAGE lang.

Effect

This statement places the contents of table itab into the [repository](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenrepository_glosry.htm "Glossary Entry") as a [text pool](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_pool_glosry.htm "Glossary Entry") of the language specified in lang for the ABAP program specified in prog. If a text pool for the specified language already exists, all of its text elements are overwritten. Otherwise, a new text pool is created for this language. By default, the text pool is saved in an active state.

prog expects a [flat](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read; the name is not case-sensitive.

lang expects a character-like flat data object. This must contain a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If an invalid language is specified in lang, no text pool is created or overwritten. If lang contains a space, the behavior is undefined.

The internal table itab can be in any table category and its row type must correspond to the TEXTPOOL structure in ABAP Dictionary. If a nonexistent program is specified in prog, no text pool is created or overwritten.

In the internal table itab, the column ENTRY can contain the texts of the text symbols, the selection texts, the [list headers](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlist_header_glosry.htm "Glossary Entry"), and the title for the [program attributes](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprogram_attribute_glosry.htm "Glossary Entry"). The corresponding lengths can be specified in the column LENGTH. The individual text elements are identified using the entries in the columns ID and KEY, whose valid values are shown in the table for [READ TEXTPOOL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_textpool.htm).

If the columns ID or KEY of the internal table contain invalid values or if duplicate entries exist, an inconsistent text pool is created. If the internal table is empty, all text elements of an existing text pool are deleted or a text pool without text elements is created. If the length specified in LENGTH is shorter than the text length in ENTRY, it is automatically set to the text length in the text pool.

Return Codes

The statement INSERT TEXTPOOL always sets sy-subrc to the value 0.

Notes

-   The specification of the text length in LENGTH defines the maximum length of the text element that is available in [ABAP Workbench](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_workbench_glosry.htm "Glossary Entry") when translating the text pool into other languages and should be set sufficiently large.
    
-   In the case of selection texts, there must be eight blanks before the actual text in ENTRY. If a selection text from the dictionary is to be used, the first character of ENTRY must be a "D".
    
-   The INSERT TEXTPOOL statement should be used with caution, because it completely overwrites existing text pools.
    

Example

Attempt at a translation tool for text elements. The text pools of a source and a target language are imported into internal tables and, for each text element of the source language, a [selection screen](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenselection_screen_glosry.htm "Glossary Entry") is displayed as a translation template. After the translation has been completed, the text pool of the target language is overwritten with the correspondingly changed internal table.

PARAMETERS: program TYPE sy-repid,
            langu1  TYPE spras DEFAULT sy-langu,
            langu2  TYPE spras.
SELECTION-SCREEN BEGIN OF SCREEN 500 AS WINDOW.
SELECTION-SCREEN COMMENT /1(83) source.
SELECTION-SCREEN BEGIN OF LINE.
PARAMETERS target TYPE textpool-entry.
SELECTION-SCREEN END OF LINE.
SELECTION-SCREEN END OF SCREEN 500.
DATA: text1 TYPE SORTED TABLE OF textpool
                 WITH UNIQUE KEY id KEY,
      text2 TYPE SORTED TABLE OF textpool
                 WITH UNIQUE KEY id KEY,
      wa1   TYPE textpool,
      wa2   TYPE textpool.
READ TEXTPOOL program: INTO text1 LANGUAGE langu1,
                       INTO text2 LANGUAGE langu2.
LOOP AT text1 INTO wa1.
  CLEAR wa2.
  wa2 = text2\[ KEY primary\_key id  = wa1-id key = wa1-key \].
  source = wa1-entry.
  target = wa2-entry.
  CALL SELECTION-SCREEN 500 STARTING AT 1 1.
  IF sy-subrc = 0.
    IF target IS NOT INITIAL.
      wa2-id = wa1-id.
      wa2-key = wa1-key.
      wa2-entry = target.
      wa2-length = wa1-length.
      DELETE TABLE text2
             WITH TABLE KEY id  = wa1-id
                            key = wa1-key.
      INSERT wa2 INTO TABLE text2.
    ENDIF.
  ELSE.
    EXIT.
  ENDIF.
ENDLOOP.
INSERT TEXTPOOL program FROM text2 LANGUAGE langu2.

Continue
[INSERT TEXTPOOL - Internal Addition](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinsert_textpool_internal.htm)