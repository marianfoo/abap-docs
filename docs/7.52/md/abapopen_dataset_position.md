---
title: "OPEN DATASET - position"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_shortref.htm) Syntax ... AT POSITION pos ... Effect This addition sets the file pointer at the position specified in pos. pos expects a numeric data object. Numbers with a value greater than the value rang
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_position.htm"
abapFile: "abapopen_dataset_position.htm"
keywords: ["select", "update", "delete", "do", "while", "if", "case", "try", "data", "abapopen", "dataset", "position"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset.htm) → 

OPEN DATASET - position

[Quick Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_shortref.htm)

Syntax

... AT POSITION pos ...

Effect

This addition sets the file pointer at the position specified in pos. pos expects a numeric data object. Numbers with a value greater than the [value range](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenvalue_range_glosry.htm "Glossary Entry") of the data type i can also be entered.

The position is specified in bytes; the start of the file corresponds to position 0. If pos contains the value -1, the position is at the end of the file. For all other negative values, the behavior is undefined.

Note the following special cases:

1.  If the file is opened for reading and the value of pos is greater than the length of the file, the file pointer is positioned outside the file. Unless the position is changed, no data can be read.
    
2.  If the file is opened for writing, the next time writing takes place, the file is filled with hexadecimal 0 from the start of the file to the specified position, and the new content is written after that.
    
3.  If the file is opened for appending, the specified position is ignored and the file pointer remains positioned at the end of the file.
    
4.  If the file is opened for changing, and the value of pos is greater than the length of the file, the next time the file is written in, it is filled with hexadecimal 0 from the end of the file to the specified position, and the new content is written after that.
    

The addition POSITION cannot be specified if one of the additions [FILTER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_os_addition.htm) or [BYTE-ORDER MARK](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_encoding.htm) is specified at the same time.

Notes

-   For file sizes greater than 2 GB, a position pos of the data type i is not sufficient for positioning in the whole file, and p or decfloat must be used instead.
    
-   The positioning can be overwritten by the statement [SET DATASET](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapset_dataset.htm). In particular, for positioning the file pointer at the end of the file, SET DATASET should be used instead of entering the value -1 in pos.
    
-   Free specified positions are more suitable for binary files than for text files. In the case of text files, positions depend on the character format, [end-of-line marking](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_linefeed.htm), and a possible byte order mark (BOM) in UTF-8 files.
    

Example

A file test.dat is created as a text file, then filled with data, changed, and read. Since each [TRANSFER](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abaptransfer.htm) statement appends an [end-of-line selection](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapopen_dataset_linefeed.htm) to the written content, the content of the file is double-lined after the change. The first line contains "12ABCD". The second line contains "890". The character "7" is overwritten by the end-of-line selection of the first line.

DATA(file) = \`test.dat\`.
OPEN DATASET file FOR OUTPUT IN TEXT MODE
                             ENCODING DEFAULT
                             WITH SMART LINEFEED.
TRANSFER \`1234567890\` TO file.
CLOSE DATASET file.
OPEN DATASET file FOR UPDATE IN TEXT MODE
                             ENCODING DEFAULT
                             WITH SMART LINEFEED
                             AT POSITION 2.
TRANSFER \`ABCD\` TO file.
CLOSE DATASET file.
...
OPEN DATASET file FOR INPUT IN TEXT MODE
                            ENCODING DEFAULT
                            WITH SMART LINEFEED.
DATA: result TYPE string,
      output      TYPE TABLE OF string WITH EMPTY KEY.
WHILE sy-subrc = 0.
  READ DATASET file INTO result.
  APPEND result TO output.
ENDWHILE.
CLOSE DATASET file.
cl\_demo\_output=>display\_data( output ).
DELETE DATASET file.