---
title: "TRUNCATE DATASET"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptruncate_dataset_shortref.htm) Syntax TRUNCATE DATASET dset AT CURRENT POSITIONPOSITION pos. Additions: 1. ... CURRENT POSITION(#!ABAP_ADDITION_1@1@) 2. ... POSITION pos(#!ABAP_ADDITION_2@2@) E
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptruncate.htm"
abapFile: "abaptruncate.htm"
keywords: ["delete", "do", "while", "if", "try", "catch", "data", "abaptruncate"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfile_interface_statements.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20TRUNCATE%20DATASET%2C%20ABAPTRUNCATE%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

TRUNCATE DATASET

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptruncate_dataset_shortref.htm)

Syntax

TRUNCATE DATASET dset AT *{*CURRENT POSITION*}**|**{*POSITION pos*}*.

Additions:

[1\. ... CURRENT POSITION](#!ABAP_ADDITION_1@1@)
[2\. ... POSITION pos](#!ABAP_ADDITION_2@2@)

Effect

This statement sets the end of file of the file specified in dset to the value specified after AT and can thus change the size of the file. When truncated, the file is truncated after the new end of file; when extended, the file from the previous to the new end of file is filled with hexadecimal 0.

dset expects a character-like data object that contains the [physical name](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenphysical_filename_glosry.htm "Glossary Entry") of the file. The file must be opened for writing, appending, or changing, and not contain the addition [FILTER](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_os_addition.htm) of the statement [OPEN DATASET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset.htm). Otherwise an uncatchable exception is raised.

Return Code

The statement TRUNCATE always sets sy-subrc to the value 0 or raises an exception.

Hint

The statement TRUNCATE does not change the position of the current file pointer. If the file is open for appending, the file pointer is only set prior to the next write access to the end of file.

Addition 1   

... CURRENT POSITION

Effect

The addition CURRENT POSITION sets the end of file to the current [file pointer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfile_pointer_glosry.htm "Glossary Entry").

Example

Truncates a file to the current position of the file pointer after reading five lines from a total of ten lines. When all lines are next read, only the first five lines are found.

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN TEXT MODE ENCODING DEFAULT.
DO 10 TIMES.
  DATA(text) = |Entry { sy-index } |.
  TRANSFER text TO dset.
ENDDO.
...
SET DATASET dset POSITION 0.
DO 5 TIMES.
  READ DATASET dset INTO text.
ENDDO.
TRUNCATE DATASET dset AT CURRENT POSITION.
CLOSE DATASET dset.
...
OPEN DATASET dset FOR INPUT IN TEXT MODE ENCODING DEFAULT.
DATA(output) = \`\`.
WHILE sy-subrc = 0.
  READ DATASET dset INTO text.
  output &&= text.
ENDWHILE.
CLOSE DATASET dset.
cl\_demo\_output=>display( output ).
DELETE DATASET dset.

Addition 2   

... POSITION pos

Effect

The addition POSITION pos sets the end of file to the position specified in pos. pos expects a numeric data object whose content cannot be negative. The positioning is specified in bytes, where the start of file is synonymous with the position 0.

Example

After the first TRUNCATE statement, the file contains the value FF, and after the second, the value FF00.

DATA: name TYPE string VALUE \`test.dat\`,
      hex  TYPE xstring.
hex = 'FFFF'.
OPEN DATASET name FOR OUTPUT IN BINARY MODE.
TRANSFER hex TO name.
SET DATASET name POSITION 0.
READ DATASET name INTO hex.
TRUNCATE DATASET name AT POSITION 1.
SET DATASET name POSITION 0.
READ DATASET name INTO hex.
TRUNCATE DATASET name AT POSITION 2.
SET DATASET name POSITION 0.
READ DATASET name INTO hex.
CLOSE DATASET name.

[Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_FILE\_OPEN

-   Cause: The file is not open.
    Runtime error: DATASET\_NOT\_OPEN
-   Cause: The file is only open for reading.
    Runtime error: DATASET\_READ\_ONLY

CX\_SY\_FILE\_AUTHORITY

-   Cause: No authorization for access to file
    Runtime error: OPEN\_DATASET\_NO\_AUTHORITY

CX\_SY\_FILE\_POSITION

-   Cause: Invalid position specified.
    Runtime error: DATASET\_OFFSET\_TOO\_LARGE

CX\_SY\_FILE\_TRUNCATE

-   Cause: The operating system could not change the size of the file.
    Runtime error: DATASET\_TRUNCATE\_ERROR
-   Cause: An attempt was made to change the size of a file opened using the addition FILTER.
    Runtime error: DATASET\_TRUNCATE\_ERROR

Uncatchable Exceptions

-   Cause: Internal error when emptying the file buffer, determining the current file position, or restoring the file when rolling in the [internal session](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abeninternal_session_glosry.htm "Glossary Entry").
    Runtime error: DATASET\_TRUNCATE\_ERROR