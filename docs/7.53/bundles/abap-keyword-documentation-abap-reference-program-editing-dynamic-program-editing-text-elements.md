# ABAP Keyword Documentation / ABAP − Reference / Program Editing / Dynamic Program Editing / Text Elements

Included pages: 10



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.53](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abentextpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentextpool.htm)
- [abapread_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool.htm)
- [abapread_textpool_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool_internal.htm)
- [abapinsert_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_textpool.htm)
- [abapinsert_textpool_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_textpool_internal.htm)
- [abengeneric_text_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_text_internal.htm)
- [abapdelete_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_textpool.htm)

**Bundle Contains**: 7 documentation pages
**Version**: ABAP 7.53
**Generated**: 2025-09-01T11:25:46.223Z

---

### abentextpool.htm

> **📖 Official SAP Documentation**: [abentextpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentextpool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) → 

Text Elements

The statements

-   [READ TEXTPOOL](javascript:call_link\('abapread_textpool.htm'\)),

-   [INSERT TEXTPOOL](javascript:call_link\('abapinsert_textpool.htm'\))

for dynamically creating and editing [text elements](javascript:call_link\('abentext_element_glosry.htm'\) "Glossary Entry") are released for use in application programming. Some additions for the released statements, and some specific statements, are for system-internal use only and cannot be used in application programs.

Continue
[READ TEXTPOOL](javascript:call_link\('abapread_textpool.htm'\))
[INSERT TEXTPOOL](javascript:call_link\('abapinsert_textpool.htm'\))
[Internal Statement for Editing Text Elements](javascript:call_link\('abengeneric_text_internal.htm'\))



**📖 Source**: [abentextpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentextpool.htm)

### abapread_textpool.htm

> **📖 Official SAP Documentation**: [abapread_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Text Elements](javascript:call_link\('abentextpool.htm'\)) → 

READ TEXTPOOL

[Quick Reference](javascript:call_link\('abapread_textpool_shortref.htm'\))

Syntax

READ TEXTPOOL prog INTO itab LANGUAGE lang.

Effect

This statement reads the text elements of the [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry") of the language specified in lang and the program specified in prog from the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") and places them into the internal table itab. The previous content of itab is deleted. If the text elements cannot be read, the content of itab remains unchanged. The active text elements of the program are read by default.

prog expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read; the name is not case-sensitive. The internal table itab can be in any table category and its row type must correspond to the TEXTPOOL structure in ABAP Dictionary.

lang expects a character-like flat data object. This must contain a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If lang contains a space, the behavior is undefined.

After a successful read, itab contains, in the ENTRY column, the texts of the text symbols, the selection texts, the [list headers](javascript:call_link\('abenlist_header_glosry.htm'\) "Glossary Entry"), and the title from the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry"). Every text element that exists for the specified language occupies one row of the internal table and is identified uniquely by the columns ID and KEY. The column LENGTH contains the length of the text element. The table below shows the possible values of the columns ID and KEY and their meaning:

ID

KEY

ENTRY

H

001 through 004

List Header Column Headers

I

ID of a text symbol

Text of the text symbol

R

\-

Program title

S

Name of a parameter or [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry")

Selection text

T

\-

List Header Title bar

System Fields

sy-subrc

Meaning

0

At least one text element was read.

4

The program specified in prog or the language specified in lang does not exist or there is no text pool in the specified language.

Notes

-   The table of [program types](javascript:call_link\('abenprogram_type_oview.htm'\)) indicates which program types support text pools. sy-subrc is always set to 4, for programs without text pools.
    
-   When handling [global classes](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") and [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"), note that the name of the wrapper program must be specified in the repository and not the name of the class or function group. The way these names are created is documented in the statements [CLASS-POOL](javascript:call_link\('abapclass-pool.htm'\)) and [FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\)).
    
-   For selection texts that are not taken from ABAP Dictionary, the actual text in ENTRY is preceded by eight blanks.
    
-   Selection texts taken from ABAP Dictionary are not stored in the text pool and cannot be read with READ TEXTPOOL. They contain a "D" in the first position of ENTRY. To read the selection texts stored in ABAP Dictionary, use the function module RS\_TEXTPOOL\_READ.
    

Example

See [INSERT TEXTPOOL](javascript:call_link\('abapinsert_textpool.htm'\))

Continue
[READ TEXTPOOL - Internal Addition](javascript:call_link\('abapread_textpool_internal.htm'\))



**📖 Source**: [abapread_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool.htm)

### abapread_textpool_internal.htm

> **📖 Official SAP Documentation**: [abapread_textpool_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool_internal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Text Elements](javascript:call_link\('abentextpool.htm'\)) →  [READ TEXTPOOL](javascript:call_link\('abapread_textpool.htm'\)) → 

READ TEXTPOOL - Internal Addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

... STATE state

Effect

This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values "A" (for active) and "I" (for inactive), which is checked statically if specified as a literal.

-   If the addition state is not specified, the statement accesses either
    

-   the active version of the repository object or

-   the inactive version of the repository object in the worklist of the current user. If there are no inactive versions in the worklist of the current user, the statement accesses the active version of the repository object.

Before the statement can evaluate the worklist of the current user, it must be prepared accordingly. This can be done using, for example, the function module RS\_WORKING\_AREA\_PREPARE. If the worklist is not prepared, the statement accesses the active version of the repository object.

-   If the addition state is specified, the statement accesses
    

-   the active version of the repository object if "A" is specified,

-   the inactive version of the repository object if "I" is specified. The user to which the inactive version is assigned is not important here or whether the version is part of a worklist. If there are no inactive versions, the object is not accessed and sy-subrc is set to 4.
    

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE



**📖 Source**: [abapread_textpool_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool_internal.htm)

### abapread_textpool.htm

> **📖 Official SAP Documentation**: [abapread_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Text Elements](javascript:call_link\('abentextpool.htm'\)) → 

READ TEXTPOOL

[Quick Reference](javascript:call_link\('abapread_textpool_shortref.htm'\))

Syntax

READ TEXTPOOL prog INTO itab LANGUAGE lang.

Effect

This statement reads the text elements of the [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry") of the language specified in lang and the program specified in prog from the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") and places them into the internal table itab. The previous content of itab is deleted. If the text elements cannot be read, the content of itab remains unchanged. The active text elements of the program are read by default.

prog expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read; the name is not case-sensitive. The internal table itab can be in any table category and its row type must correspond to the TEXTPOOL structure in ABAP Dictionary.

lang expects a character-like flat data object. This must contain a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If lang contains a space, the behavior is undefined.

After a successful read, itab contains, in the ENTRY column, the texts of the text symbols, the selection texts, the [list headers](javascript:call_link\('abenlist_header_glosry.htm'\) "Glossary Entry"), and the title from the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry"). Every text element that exists for the specified language occupies one row of the internal table and is identified uniquely by the columns ID and KEY. The column LENGTH contains the length of the text element. The table below shows the possible values of the columns ID and KEY and their meaning:

ID

KEY

ENTRY

H

001 through 004

List Header Column Headers

I

ID of a text symbol

Text of the text symbol

R

\-

Program title

S

Name of a parameter or [selection criterion](javascript:call_link\('abenselection_criterion_glosry.htm'\) "Glossary Entry")

Selection text

T

\-

List Header Title bar

System Fields

sy-subrc

Meaning

0

At least one text element was read.

4

The program specified in prog or the language specified in lang does not exist or there is no text pool in the specified language.

Notes

-   The table of [program types](javascript:call_link\('abenprogram_type_oview.htm'\)) indicates which program types support text pools. sy-subrc is always set to 4, for programs without text pools.
    
-   When handling [global classes](javascript:call_link\('abenglobal_class_glosry.htm'\) "Glossary Entry") and [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry"), note that the name of the wrapper program must be specified in the repository and not the name of the class or function group. The way these names are created is documented in the statements [CLASS-POOL](javascript:call_link\('abapclass-pool.htm'\)) and [FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\)).
    
-   For selection texts that are not taken from ABAP Dictionary, the actual text in ENTRY is preceded by eight blanks.
    
-   Selection texts taken from ABAP Dictionary are not stored in the text pool and cannot be read with READ TEXTPOOL. They contain a "D" in the first position of ENTRY. To read the selection texts stored in ABAP Dictionary, use the function module RS\_TEXTPOOL\_READ.
    

Example

See [INSERT TEXTPOOL](javascript:call_link\('abapinsert_textpool.htm'\))

Continue
[READ TEXTPOOL - Internal Addition](javascript:call_link\('abapread_textpool_internal.htm'\))



**📖 Source**: [abapread_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool.htm)

### abapinsert_textpool.htm

> **📖 Official SAP Documentation**: [abapinsert_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_textpool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Text Elements](javascript:call_link\('abentextpool.htm'\)) → 

INSERT TEXTPOOL

[Quick Reference](javascript:call_link\('abapinsert_textpool_shortref.htm'\))

Syntax

INSERT TEXTPOOL prog FROM itab LANGUAGE lang.

Effect

This statement places the contents of table itab into the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") as a [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry") of the language specified in lang for the ABAP program specified in prog. If a text pool for the specified language already exists, all of its text elements are overwritten. Otherwise, a new text pool is created for this language. By default, the text pool is saved in an active state.

prog expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read; the name is not case-sensitive.

lang expects a character-like flat data object. This must contain a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If an invalid language is specified in lang, no text pool is created or overwritten. If lang contains a space, the behavior is undefined.

The internal table itab can be in any table category and its row type must correspond to the TEXTPOOL structure in ABAP Dictionary. If a nonexistent program is specified in prog, no text pool is created or overwritten.

In the internal table itab, the column ENTRY can contain the texts of the text symbols, the selection texts, the [list headers](javascript:call_link\('abenlist_header_glosry.htm'\) "Glossary Entry"), and the title for the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry"). The corresponding lengths can be specified in the column LENGTH. The individual text elements are identified using the entries in the columns ID and KEY, whose valid values are shown in the table for [READ TEXTPOOL](javascript:call_link\('abapread_textpool.htm'\)).

If the columns ID or KEY of the internal table contain invalid values or if duplicate entries exist, an inconsistent text pool is created. If the internal table is empty, all text elements of an existing text pool are deleted or a text pool without text elements is created. If the length specified in LENGTH is shorter than the text length in ENTRY, it is automatically set to the text length in the text pool.

Return Codes

The statement INSERT TEXTPOOL always sets sy-subrc to the value 0.

Notes

-   The specification of the text length in LENGTH defines the maximum length of the text element that is available in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") when translating the text pool into other languages and should be set sufficiently large.
    
-   In the case of selection texts, there must be eight blanks before the actual text in ENTRY. If a selection text from the dictionary is to be used, the first character of ENTRY must be a "D".
    
-   The INSERT TEXTPOOL statement should be used with caution, because it completely overwrites existing text pools.
    

Example

Attempt at a translation tool for text elements. The text pools of a source and a target language are imported into internal tables and, for each text element of the source language, a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") is displayed as a translation template. After the translation has been completed, the text pool of the target language is overwritten with the correspondingly changed internal table.

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
[INSERT TEXTPOOL - Internal Addition](javascript:call_link\('abapinsert_textpool_internal.htm'\))



**📖 Source**: [abapinsert_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_textpool.htm)

### abapinsert_textpool_internal.htm

> **📖 Official SAP Documentation**: [abapinsert_textpool_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_textpool_internal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Text Elements](javascript:call_link\('abentextpool.htm'\)) →  [INSERT TEXTPOOL](javascript:call_link\('abapinsert_textpool.htm'\)) → 

INSERT TEXTPOOL - Internal Addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

... STATE state

Effect

This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values "A" (for active) and "I" (for inactive), which is checked statically if specified as a literal.

-   If the addition state is not specified, the statement accesses either
    

-   the active version of the repository object or

-   the inactive version of the repository object in the worklist of the current user. If there are no inactive versions in the worklist of the current user, the statement accesses the active version of the repository object.

Before the statement can evaluate the worklist of the current user, it must be prepared accordingly. This can be done using, for example, the function module RS\_WORKING\_AREA\_PREPARE. If the worklist is not prepared, the statement accesses the active version of the repository object.

-   If the addition state is specified, the statement accesses
    

-   the active version of the repository object if "A" is specified,

-   the inactive version of the repository object if "I" is specified. The user to which the inactive version is assigned is not important here or whether the version is part of a worklist. If there are no inactive versions, the object is not accessed and sy-subrc is set to 4.
    

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE



**📖 Source**: [abapinsert_textpool_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_textpool_internal.htm)

### abapinsert_textpool.htm

> **📖 Official SAP Documentation**: [abapinsert_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_textpool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Text Elements](javascript:call_link\('abentextpool.htm'\)) → 

INSERT TEXTPOOL

[Quick Reference](javascript:call_link\('abapinsert_textpool_shortref.htm'\))

Syntax

INSERT TEXTPOOL prog FROM itab LANGUAGE lang.

Effect

This statement places the contents of table itab into the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") as a [text pool](javascript:call_link\('abentext_pool_glosry.htm'\) "Glossary Entry") of the language specified in lang for the ABAP program specified in prog. If a text pool for the specified language already exists, all of its text elements are overwritten. Otherwise, a new text pool is created for this language. By default, the text pool is saved in an active state.

prog expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read; the name is not case-sensitive.

lang expects a character-like flat data object. This must contain a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If an invalid language is specified in lang, no text pool is created or overwritten. If lang contains a space, the behavior is undefined.

The internal table itab can be in any table category and its row type must correspond to the TEXTPOOL structure in ABAP Dictionary. If a nonexistent program is specified in prog, no text pool is created or overwritten.

In the internal table itab, the column ENTRY can contain the texts of the text symbols, the selection texts, the [list headers](javascript:call_link\('abenlist_header_glosry.htm'\) "Glossary Entry"), and the title for the [program attributes](javascript:call_link\('abenprogram_attribute_glosry.htm'\) "Glossary Entry"). The corresponding lengths can be specified in the column LENGTH. The individual text elements are identified using the entries in the columns ID and KEY, whose valid values are shown in the table for [READ TEXTPOOL](javascript:call_link\('abapread_textpool.htm'\)).

If the columns ID or KEY of the internal table contain invalid values or if duplicate entries exist, an inconsistent text pool is created. If the internal table is empty, all text elements of an existing text pool are deleted or a text pool without text elements is created. If the length specified in LENGTH is shorter than the text length in ENTRY, it is automatically set to the text length in the text pool.

Return Codes

The statement INSERT TEXTPOOL always sets sy-subrc to the value 0.

Notes

-   The specification of the text length in LENGTH defines the maximum length of the text element that is available in [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") when translating the text pool into other languages and should be set sufficiently large.
    
-   In the case of selection texts, there must be eight blanks before the actual text in ENTRY. If a selection text from the dictionary is to be used, the first character of ENTRY must be a "D".
    
-   The INSERT TEXTPOOL statement should be used with caution, because it completely overwrites existing text pools.
    

Example

Attempt at a translation tool for text elements. The text pools of a source and a target language are imported into internal tables and, for each text element of the source language, a [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") is displayed as a translation template. After the translation has been completed, the text pool of the target language is overwritten with the correspondingly changed internal table.

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
[INSERT TEXTPOOL - Internal Addition](javascript:call_link\('abapinsert_textpool_internal.htm'\))



**📖 Source**: [abapinsert_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_textpool.htm)

### abengeneric_text_internal.htm

> **📖 Official SAP Documentation**: [abengeneric_text_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_text_internal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Text Elements](javascript:call_link\('abentextpool.htm'\)) → 

Internal Statement for Editing Text Elements

This statement is for internal use only.
It must not be used in application programs.

-   [DELETE TEXTPOOL](javascript:call_link\('abapdelete_textpool.htm'\))

Continue
[DELETE TEXTPOOL](javascript:call_link\('abapdelete_textpool.htm'\))



**📖 Source**: [abengeneric_text_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_text_internal.htm)

### abapdelete_textpool.htm

> **📖 Official SAP Documentation**: [abapdelete_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_textpool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Text Elements](javascript:call_link\('abentextpool.htm'\)) →  [Internal Statement for Editing Text Elements](javascript:call_link\('abengeneric_text_internal.htm'\)) → 

DELETE TEXTPOOL

This statement is for internal use only.
It must not be used in application programs.

Syntax

DELETE TEXTPOOL prog LANGUAGE lg.

Addition:

[... STATE state](#!ABAP_ONE_ADD@1@)

Effect

[All](javascript:call_link\('abentext_element_glosry.htm'\) "Glossary Entry") text elements in the program whose name is in the field prog are deleted from the library in the specified language lg.
If the value '\*' is used for lg, the text elements of all languages are deleted.

Example

Deletes all text elements of the program "PROGNAME" in the language "English".

DATA PROGRAM LIKE SY-REPID VALUE 'PROGNAME'.
DELETE TEXTPOOL PROGRAM LANGUAGE 'E'.

Addition

... STATE state

Effect

This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values "A" (for active) and "I" (for inactive), which is checked statically if specified as a literal.

-   If the addition state is not specified, the statement accesses either
    

-   the active version of the repository object or

-   the inactive version of the repository object in the worklist of the current user. If there are no inactive versions in the worklist of the current user, the statement accesses the active version of the repository object.

Before the statement can evaluate the worklist of the current user, it must be prepared accordingly. This can be done using, for example, the function module RS\_WORKING\_AREA\_PREPARE. If the worklist is not prepared, the statement accesses the active version of the repository object.

-   If the addition state is specified, the statement accesses
    

-   the active version of the repository object if "A" is specified,

-   the inactive version of the repository object if "I" is specified. The user to which the inactive version is assigned is not important here or whether the version is part of a worklist. If there are no inactive versions, the object is not accessed and sy-subrc is set to 4.
    

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE



**📖 Source**: [abapdelete_textpool.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_textpool.htm)

### abengeneric_text_internal.htm

> **📖 Official SAP Documentation**: [abengeneric_text_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_text_internal.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abengeneric_text_internal.htm](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abengeneric_text_internal.htm)


  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [Text Elements](javascript:call_link\('abentextpool.htm'\)) → 

Internal Statement for Editing Text Elements

This statement is for internal use only.
It must not be used in application programs.

-   [DELETE TEXTPOOL](javascript:call_link\('abapdelete_textpool.htm'\))

Continue
[DELETE TEXTPOOL](javascript:call_link\('abapdelete_textpool.htm'\))
