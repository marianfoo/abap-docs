# ABAP - Keyword Documentation / ABAP - Reference / program editing / Dynamic Program Editing / text element

Included pages: 10


### abentextpool.htm

---
title: "The statements"
description: |
  -   READ TEXTPOOL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool.htm) -   INSERT TEXTPOOL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool.htm) for dynamically creating and editing text elements(https://help.sap.com/doc/abapdocu_752_i
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentextpool.htm"
abapFile: "abentextpool.htm"
keywords: ["insert", "do", "if", "try", "abentextpool"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) → 

text element

The statements

-   [READ TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool.htm)

-   [INSERT TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool.htm)

for dynamically creating and editing [text elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_element_glosry.htm "Glossary Entry") are released for use in application programming. Some additions for the released statements, and some specific statements, are for system-internal use only and cannot be used in application programs.

Continue
[READ TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool.htm)
[INSERT TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool.htm)
[Internal Statement for Editing Text Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_text_internal.htm)


### abapread_textpool.htm

---
title: "READ TEXTPOOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool_shortref.htm) Syntax READ TEXTPOOL prog INTO itab LANGUAGE lang. Effect This statement reads the text elements of the text pool(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_pool_gl
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool.htm"
abapFile: "abapread_textpool.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapread", "textpool"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [text element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentextpool.htm) → 

READ TEXTPOOL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool_shortref.htm)

Syntax

READ TEXTPOOL prog INTO itab LANGUAGE lang.

Effect

This statement reads the text elements of the [text pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_pool_glosry.htm "Glossary Entry") of the language specified in lang and the program specified in prog from the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry") and places them into the internal table itab. The previous content of itab is deleted. If the text elements cannot be read, the content of itab remains unchanged. The active text elements of the program are read by default.

prog expects a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read; the name is not case-sensitive. The internal table itab can be in any table category and its row type must correspond to the TEXTPOOL structure in ABAP Dictionary.

lang expects a character-like flat data object. This must contain a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If lang contains a space, the behavior is undefined.

After a successful read, itab contains, in the ENTRY column, the texts of the text symbols, the selection texts, the [list headers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_header_glosry.htm "Glossary Entry"), and the title from the [program attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry"). Every text element that exists for the specified language occupies one row of the internal table and is identified uniquely by the columns ID and KEY. The column LENGTH contains the length of the text element. The table below shows the possible values of the columns ID and KEY and their meaning:

ID

KEY

ENTRY

H

001 through 004

List header Column headers

I

ID of a text symbol

Text of the text symbol

R

\-

Program title

S

Name of a parameter or [selection criterion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_criterion_glosry.htm "Glossary Entry")

Selection text

T

\-

List header Title bar

System Fields

sy-subrc

Meaning

0

At least one text element was read.

4

The program specified in prog or the language specified in lang does not exist or there is no text pool in the specified language.

Notes

-   The table of [program types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_type_oview.htm) indicates which program types support text pools. sy-subrc is always set to 4, for programs without text pools.
    
-   When handling [global classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_class_glosry.htm "Glossary Entry") and [function groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry"), note that the name of the wrapper program must be specified in the repository and not the name of the class or function group. The way these names are created is documented in the statements [CLASS-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-pool.htm) and [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction-pool.htm).
    
-   For selection texts that are not taken from ABAP Dictionary, the actual text in ENTRY is preceded by eight blanks.
    
-   Selection texts taken from ABAP Dictionary are not stored in the text pool and cannot be read with READ TEXTPOOL. They contain a "D" in the first position of ENTRY. To read the selection texts stored in ABAP Dictionary, use the function module RS\_TEXTPOOL\_READ.
    

Example

See [INSERT TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool.htm)

Continue
[READ TEXTPOOL - Internal Addition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool_internal.htm)


### abapread_textpool_internal.htm

---
title: "READ TEXTPOOL - Internal Addition"
description: |
  This addition is for internal use only. It must not be used in application programs. Addition: ... STATE state Effect This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values 'A' (for active) and 'I' (for inacti
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool_internal.htm"
abapFile: "abapread_textpool_internal.htm"
keywords: ["insert", "do", "if", "abapread", "textpool", "internal"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [text element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentextpool.htm) →  [READ TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool.htm) → 

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
    

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE


### abapread_textpool.htm

---
title: "READ TEXTPOOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool_shortref.htm) Syntax READ TEXTPOOL prog INTO itab LANGUAGE lang. Effect This statement reads the text elements of the text pool(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_pool_gl
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool.htm"
abapFile: "abapread_textpool.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapread", "textpool"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [text element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentextpool.htm) → 

READ TEXTPOOL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool_shortref.htm)

Syntax

READ TEXTPOOL prog INTO itab LANGUAGE lang.

Effect

This statement reads the text elements of the [text pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_pool_glosry.htm "Glossary Entry") of the language specified in lang and the program specified in prog from the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry") and places them into the internal table itab. The previous content of itab is deleted. If the text elements cannot be read, the content of itab remains unchanged. The active text elements of the program are read by default.

prog expects a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read; the name is not case-sensitive. The internal table itab can be in any table category and its row type must correspond to the TEXTPOOL structure in ABAP Dictionary.

lang expects a character-like flat data object. This must contain a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If lang contains a space, the behavior is undefined.

After a successful read, itab contains, in the ENTRY column, the texts of the text symbols, the selection texts, the [list headers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_header_glosry.htm "Glossary Entry"), and the title from the [program attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry"). Every text element that exists for the specified language occupies one row of the internal table and is identified uniquely by the columns ID and KEY. The column LENGTH contains the length of the text element. The table below shows the possible values of the columns ID and KEY and their meaning:

ID

KEY

ENTRY

H

001 through 004

List header Column headers

I

ID of a text symbol

Text of the text symbol

R

\-

Program title

S

Name of a parameter or [selection criterion](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_criterion_glosry.htm "Glossary Entry")

Selection text

T

\-

List header Title bar

System Fields

sy-subrc

Meaning

0

At least one text element was read.

4

The program specified in prog or the language specified in lang does not exist or there is no text pool in the specified language.

Notes

-   The table of [program types](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_type_oview.htm) indicates which program types support text pools. sy-subrc is always set to 4, for programs without text pools.
    
-   When handling [global classes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenglobal_class_glosry.htm "Glossary Entry") and [function groups](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfunction_group_glosry.htm "Glossary Entry"), note that the name of the wrapper program must be specified in the repository and not the name of the class or function group. The way these names are created is documented in the statements [CLASS-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapclass-pool.htm) and [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapfunction-pool.htm).
    
-   For selection texts that are not taken from ABAP Dictionary, the actual text in ENTRY is preceded by eight blanks.
    
-   Selection texts taken from ABAP Dictionary are not stored in the text pool and cannot be read with READ TEXTPOOL. They contain a "D" in the first position of ENTRY. To read the selection texts stored in ABAP Dictionary, use the function module RS\_TEXTPOOL\_READ.
    

Example

See [INSERT TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool.htm)

Continue
[READ TEXTPOOL - Internal Addition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool_internal.htm)


### abapinsert_textpool.htm

---
title: "INSERT TEXTPOOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool_shortref.htm) Syntax INSERT TEXTPOOL prog FROM itab LANGUAGE lang. Effect This statement places the contents of table itab into the repository(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool.htm"
abapFile: "abapinsert_textpool.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "data", "internal-table", "abapinsert", "textpool"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [text element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentextpool.htm) → 

INSERT TEXTPOOL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool_shortref.htm)

Syntax

INSERT TEXTPOOL prog FROM itab LANGUAGE lang.

Effect

This statement places the contents of table itab into the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry") as a [text pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_pool_glosry.htm "Glossary Entry") of the language specified in lang for the ABAP program specified in prog. If a text pool for the specified language already exists, all of its text elements are overwritten. Otherwise, a new text pool is created for this language. By default, the text pool is saved in an active state.

prog expects a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read; the name is not case-sensitive.

lang expects a character-like flat data object. This must contain a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If an invalid language is specified in lang, no text pool is created or overwritten. If lang contains a space, the behavior is undefined.

The internal table itab can be in any table category and its row type must correspond to the TEXTPOOL structure in ABAP Dictionary. If a nonexistent program is specified in prog, no text pool is created or overwritten.

In the internal table itab, the column ENTRY can contain the texts of the text symbols, the selection texts, the [list headers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_header_glosry.htm "Glossary Entry"), and the title for the [program attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry"). The corresponding lengths can be specified in the column LENGTH. The individual text elements are identified using the entries in the columns ID and KEY, whose valid values are shown in the table for [READ TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool.htm).

If the columns ID or KEY of the internal table contain invalid values or if duplicate entries exist, an inconsistent text pool is created. If the internal table is empty, all text elements of an existing text pool are deleted or a text pool without text elements is created. If the length specified in LENGTH is shorter than the text length in ENTRY, it is automatically set to the text length in the text pool.

Return Codes

The statement INSERT TEXTPOOL always sets sy-subrc to the value 0.

Notes

-   The specification of the text length in LENGTH defines the maximum length of the text element that is available in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry") when translating the text pool into other languages and should be set sufficiently large.
    
-   In the case of selection texts, there must be eight blanks before the actual text in ENTRY. If a selection text from the dictionary is to be used, the first character of ENTRY must be a "D".
    
-   The statement INSERT TEXTPOOL should be used with caution, because it completely overwrites existing text pools.
    

Example

Attempt at a translation tool for text elements. The text pools of a source and a target language are imported into internal tables and, for each text element of the source language, a [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry") is displayed as a translation template. After the translation has been completed, the text pool of the target language is overwritten with the correspondingly changed internal table.

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
[INSERT TEXTPOOL - Internal Addition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool_internal.htm)


### abapinsert_textpool_internal.htm

---
title: "INSERT TEXTPOOL - Internal Addition"
description: |
  This addition is for internal use only. It must not be used in application programs. Addition: ... STATE state Effect This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values 'A' (for active) and 'I' (for inacti
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool_internal.htm"
abapFile: "abapinsert_textpool_internal.htm"
keywords: ["insert", "do", "if", "abapinsert", "textpool", "internal"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [text element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentextpool.htm) →  [INSERT TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool.htm) → 

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
    

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE


### abapinsert_textpool.htm

---
title: "INSERT TEXTPOOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool_shortref.htm) Syntax INSERT TEXTPOOL prog FROM itab LANGUAGE lang. Effect This statement places the contents of table itab into the repository(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool.htm"
abapFile: "abapinsert_textpool.htm"
keywords: ["select", "insert", "delete", "loop", "do", "if", "case", "try", "data", "internal-table", "abapinsert", "textpool"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [text element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentextpool.htm) → 

INSERT TEXTPOOL

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool_shortref.htm)

Syntax

INSERT TEXTPOOL prog FROM itab LANGUAGE lang.

Effect

This statement places the contents of table itab into the [repository](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenrepository_glosry.htm "Glossary Entry") as a [text pool](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_pool_glosry.htm "Glossary Entry") of the language specified in lang for the ABAP program specified in prog. If a text pool for the specified language already exists, all of its text elements are overwritten. Otherwise, a new text pool is created for this language. By default, the text pool is saved in an active state.

prog expects a [flat](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read; the name is not case-sensitive.

lang expects a character-like flat data object. This must contain a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If an invalid language is specified in lang, no text pool is created or overwritten. If lang contains a space, the behavior is undefined.

The internal table itab can be in any table category and its row type must correspond to the TEXTPOOL structure in ABAP Dictionary. If a nonexistent program is specified in prog, no text pool is created or overwritten.

In the internal table itab, the column ENTRY can contain the texts of the text symbols, the selection texts, the [list headers](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_header_glosry.htm "Glossary Entry"), and the title for the [program attributes](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_attribute_glosry.htm "Glossary Entry"). The corresponding lengths can be specified in the column LENGTH. The individual text elements are identified using the entries in the columns ID and KEY, whose valid values are shown in the table for [READ TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapread_textpool.htm).

If the columns ID or KEY of the internal table contain invalid values or if duplicate entries exist, an inconsistent text pool is created. If the internal table is empty, all text elements of an existing text pool are deleted or a text pool without text elements is created. If the length specified in LENGTH is shorter than the text length in ENTRY, it is automatically set to the text length in the text pool.

Return Codes

The statement INSERT TEXTPOOL always sets sy-subrc to the value 0.

Notes

-   The specification of the text length in LENGTH defines the maximum length of the text element that is available in [ABAP Workbench](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_workbench_glosry.htm "Glossary Entry") when translating the text pool into other languages and should be set sufficiently large.
    
-   In the case of selection texts, there must be eight blanks before the actual text in ENTRY. If a selection text from the dictionary is to be used, the first character of ENTRY must be a "D".
    
-   The statement INSERT TEXTPOOL should be used with caution, because it completely overwrites existing text pools.
    

Example

Attempt at a translation tool for text elements. The text pools of a source and a target language are imported into internal tables and, for each text element of the source language, a [selection screen](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenselection_screen_glosry.htm "Glossary Entry") is displayed as a translation template. After the translation has been completed, the text pool of the target language is overwritten with the correspondingly changed internal table.

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
[INSERT TEXTPOOL - Internal Addition](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinsert_textpool_internal.htm)


### abengeneric_text_internal.htm

---
title: "Internal Statement for Editing Text Elements"
description: |
  This statement is for internal use only. It must not be used in application programs. -   DELETE TEXTPOOL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_textpool.htm) DELETE TEXTPOOL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_textpool.htm)
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_text_internal.htm"
abapFile: "abengeneric_text_internal.htm"
keywords: ["delete", "do", "abengeneric", "text", "internal"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [text element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentextpool.htm) → 

Internal Statement for Editing Text Elements

This statement is for internal use only.
It must not be used in application programs.

-   [DELETE TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_textpool.htm)

Continue
[DELETE TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_textpool.htm)


### abapdelete_textpool.htm

---
title: "DELETE TEXTPOOL"
description: |
  This statement is for internal use only. It must not be used in application programs. Syntax DELETE TEXTPOOL prog LANGUAGE lg. Addition: ... STATE state(#!ABAP_ONE_ADD@1@) Effect All(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_element_glosry.htm 'Glossary Entry') text ele
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_textpool.htm"
abapFile: "abapdelete_textpool.htm"
keywords: ["insert", "delete", "do", "if", "try", "data", "abapdelete", "textpool"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [text element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentextpool.htm) →  [Internal Statement for Editing Text Elements](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_text_internal.htm) → 

DELETE TEXTPOOL

This statement is for internal use only.
It must not be used in application programs.

Syntax

DELETE TEXTPOOL prog LANGUAGE lg.

Addition:

[... STATE state](#!ABAP_ONE_ADD@1@)

Effect

[All](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentext_element_glosry.htm "Glossary Entry") text elements in the program whose name is in the field prog are deleted from the library in the specified language lg.
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
    

[Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE


### abengeneric_text_internal.htm

---
title: "Internal Statement for Editing Text Elements"
description: |
  This statement is for internal use only. It must not be used in application programs. -   DELETE TEXTPOOL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_textpool.htm) DELETE TEXTPOOL(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_textpool.htm)
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abengeneric_text_internal.htm"
abapFile: "abengeneric_text_internal.htm"
keywords: ["delete", "do", "abengeneric", "text", "internal"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [program editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_dynamic.htm) →  [text element](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentextpool.htm) → 

Internal Statement for Editing Text Elements

This statement is for internal use only.
It must not be used in application programs.

-   [DELETE TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_textpool.htm)

Continue
[DELETE TEXTPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapdelete_textpool.htm)
