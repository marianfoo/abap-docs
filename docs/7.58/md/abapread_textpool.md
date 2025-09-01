  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_dynamic.htm) →  [Text Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentextpool.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20READ%20TEXTPOOL%2C%20ABAPREAD_TEXTPOOL%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

READ TEXTPOOL

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_textpool_shortref.htm)

Syntax

READ TEXTPOOL prog INTO itab LANGUAGE lang.

Effect

This statement reads the text elements of the [text pool](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abentext_pool_glosry.htm "Glossary Entry") of the language specified in lang and the program specified in prog from the [repository](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenrepository_glosry.htm "Glossary Entry") and places them into the internal table itab. The previous content of itab is deleted. If the text elements cannot be read, the content of itab remains unchanged. The active text elements of the program are read by default.

prog expects a [flat](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object, which contains the name of the program of the text elements to be read. The name is not case-sensitive. The internal table itab can have any table category and its line type must correspond to the DDIC structure TEXTPOOL.

lang expects a character-like flat data object that contains a language key with a maximum length of one character, and this value must be contained in the column SPRAS of the database table T002. If lang contains a space, the behavior is undefined.

After a successful read, itab contains the texts of the text symbols, the selection texts, the [list headers](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlist_header_glosry.htm "Glossary Entry"), and the title from the [program properties](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_property_glosry.htm "Glossary Entry") in the ENTRY column. Every text element that exists for the specified language occupies one line of the internal table and is identified uniquely by the columns ID and KEY. The column LENGTH contains the length of the text element. The table below shows the possible values of the columns ID and KEY and their meaning:

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

Name of a parameter or [selection criterion](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenselection_criterion_glosry.htm "Glossary Entry")

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

Hints

-   The table of [program types](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprogram_type_oview.htm) indicates which program types support text pools. sy-subrc is always set to 4, for programs without text pools.
-   When handling [global classes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenglobal_class_glosry.htm "Glossary Entry") and [function pools](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunction_pool_glosry.htm "Glossary Entry"), it should be noted that the name of the master program must be specified in the repository and not the name of the class or function pool. The composition of these names is documented in the statements [CLASS-POOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapclass-pool.htm) and [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapfunction-pool.htm).
-   For selection texts that are not taken from the ABAP Dictionary, the actual text in ENTRY is preceded by eight blanks.
-   Selection texts taken from the ABAP Dictionary are not stored in the text pool and cannot be read with READ TEXTPOOL. They contain a D in the first position of ENTRY. The function module RS\_TEXTPOOL\_READ can also be used to read the selection texts stored in the ABAP Dictionary.

Example

See [INSERT TEXTPOOL](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapinsert_textpool.htm)

Continue
[READ TEXTPOOL, Internal Addition](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapread_textpool_internal.htm)