---
title: "WRITE TO itab"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_itab_shortref.htm) Obsolete Syntax WRITE dobj TO itab+off(len) INDEX idx format_options(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_options.htm). Effect Th
version: "7.58"
category: "data-structures"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_itab.htm"
abapFile: "abapwrite_to_itab.htm"
keywords: ["do", "if", "try", "catch", "class", "data", "internal-table", "field-symbol", "abapwrite", "itab"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_obsolete.htm) →  [Obsolete Processing of Internal Data](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendata_internal_obsolete.htm) →  [Obsolete Internal Table Processing](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenitab_obsolete.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20WRITE%20TO%20itab%2C%20ABAPWRITE_TO_ITAB%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

WRITE TO itab

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_itab_shortref.htm)

Obsolete Syntax

WRITE dobj TO itab*\[*+off*\]**\[*(len)*\]* INDEX idx
      *\[*[format\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_options.htm)*\]*.

Effect

This variant, of the statement WRITE TO, which is forbidden in classes, has the same effect as the allowed [variant](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm), except that the formatted content is written to the line of the internal table itab specified in idx. The internal table must be a [standard table](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abensecondary_table_key_glosry.htm "Glossary Entry"). The same requirements apply to the line type as to the variable [destination](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to.htm).

idx expects a data object of the data type i. It must be a data type. When the statement is executed, this data object must contain the index of the line to be overwritten. If the value of idx is less than or equal to 0, an uncatchable exception is raised. If the value of idx is greater than the number of table lines, no line is overwritten and sy-subrc is set to 4.

After the table name itab, [offset and length specifications](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenoffset_length_specific_glosry.htm "Glossary Entry") off and len can be made that refer to the specified table line.

System Fields

sy-subrc

Meaning

0

The data object specified in source\_name and the line specified in idx were found and the statement was executed.

4

The data object specified in source\_name or the line specified in idx were not found and the statement was not executed.

Hint

This form of the statement WRITE TO is now only possible outside of classes and is replaced by accessing table lines using field symbols or data references. The following lines show the implementation with a field symbol:

FIELD-SYMBOLS <line> LIKE LINE OF itab.
ASSIGN itab\[ idx \] TO <line>.
WRITE dobj TO <line>*\[*+off*\]**\[*(len)*\]**\[* [format\_options](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapwrite_to_options.htm)*\]*.

Example

Formatted write of the current date into the first line of the internal table itab. The first statement WRITE TO uses the obsolete form; the second statement WRITE TO represents the recommended variant.

DATA line TYPE c LENGTH 80.
DATA itab LIKE TABLE OF line.
FIELD-SYMBOLS <line> LIKE LINE OF itab.
APPEND line TO itab.
WRITE sy-datum TO itab INDEX 1 DD/MM/YYYY.
ASSIGN itab\[ 1 \] TO <line>.
WRITE sy-datum TO <line> DD/MM/YYYY.

[Exceptions](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_language_exceptions.htm)

Uncatchable Exceptions

-   Cause: Incorrect index specification <= 0 in idx
    Runtime error: TABLE\_INVALID\_INDEX
-   Cause: Negative length specification for offset/length specification.
    Runtime error: WRITE\_TO\_LENGTH\_NEGATIVE
-   Cause: Negative offset specification for offset/length specification.
    Runtime error: WRITE\_TO\_OFFSET\_NEGATIVE
-   Cause: Offset specification for offset/length specification is greater than the field length.
    Runtime error: WRITE\_TO\_OFFSET\_TOOLARGE