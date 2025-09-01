---
title: "READ TEXTPOOL"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool_shortref.htm) Syntax READ TEXTPOOL prog INTO itab LANGUAGE lang. Effect This statement reads the text elements of the text pool(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_pool_gl
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool.htm"
abapFile: "abapread_textpool.htm"
keywords: ["select", "insert", "delete", "do", "if", "case", "try", "class", "data", "types", "internal-table", "abapread", "textpool"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_reference.htm) →  [Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_editing.htm) →  [Dynamic Program Editing](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_language_dynamic.htm) →  [Text Elements](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentextpool.htm) → 

READ TEXTPOOL

[Quick Reference](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool_shortref.htm)

Syntax

READ TEXTPOOL prog INTO itab LANGUAGE lang.

Effect

This statement reads the text elements of the [text pool](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abentext_pool_glosry.htm "Glossary Entry") of the language specified in lang and the program specified in prog from the [repository](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenrepository_glosry.htm "Glossary Entry") and places them into the internal table itab. The previous content of itab is deleted. If the text elements cannot be read, the content of itab remains unchanged. The active text elements of the program are read by default.

prog expects a [flat](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read; the name is not case-sensitive. The internal table itab can be in any table category and its row type must correspond to the TEXTPOOL structure in ABAP Dictionary.

lang expects a character-like flat data object. This must contain a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If lang contains a space, the behavior is undefined.

After a successful read, itab contains, in the ENTRY column, the texts of the text symbols, the selection texts, the [list headers](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlist_header_glosry.htm "Glossary Entry"), and the title from the [program attributes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_attribute_glosry.htm "Glossary Entry"). Every text element that exists for the specified language occupies one row of the internal table and is identified uniquely by the columns ID and KEY. The column LENGTH contains the length of the text element. The table below shows the possible values of the columns ID and KEY and their meaning:

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

Name of a parameter or [selection criterion](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenselection_criterion_glosry.htm "Glossary Entry")

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

-   The table of [program types](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenprogram_type_oview.htm) indicates which program types support text pools. sy-subrc is always set to 4, for programs without text pools.
    
-   When handling [global classes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenglobal_class_glosry.htm "Glossary Entry") and [function groups](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfunction_group_glosry.htm "Glossary Entry"), note that the name of the wrapper program must be specified in the repository and not the name of the class or function group. The way these names are created is documented in the statements [CLASS-POOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapclass-pool.htm) and [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapfunction-pool.htm).
    
-   For selection texts that are not taken from ABAP Dictionary, the actual text in ENTRY is preceded by eight blanks.
    
-   Selection texts taken from ABAP Dictionary are not stored in the text pool and cannot be read with READ TEXTPOOL. They contain a "D" in the first position of ENTRY. To read the selection texts stored in ABAP Dictionary, use the function module RS\_TEXTPOOL\_READ.
    

Example

See [INSERT TEXTPOOL](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapinsert_textpool.htm)

Continue
[READ TEXTPOOL - Internal Addition](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapread_textpool_internal.htm)