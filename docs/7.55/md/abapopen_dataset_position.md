  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) → 

OPEN DATASET, position

[Short Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

Syntax

... AT POSITION pos ...

Effect

This addition sets the file pointer at the position specified in pos. pos expects a numeric data object. Numbers with a value greater than the [value range](javascript:call_link\('abenvalue_range_glosry.htm'\) "Glossary Entry") of the data type i can also be entered.

The position is specified in bytes; the start of the file corresponds to position 0. If pos contains the value -1, the position is at the end of the file. For all other negative values, the behavior is undefined.

The following cases need to be distinguished:

1.  If the file is opened for reading and the value of pos is greater than the length of the file, the file pointer is positioned outside the file. Unless the position is changed, no data can be read.
    
2.  If the file is opened for writing, the next time writing takes place, the file is filled with hexadecimal 0 from the start of the file to the specified position, and the new content is written after that.
    
3.  If the file is opened for appending, the specified position is ignored and the file pointer remains positioned at the end of the file.
    
4.  If the file is opened for changing, and the value of pos is greater than the length of the file, the next time the file is written in, it is filled with hexadecimal 0 from the end of the file to the specified position, and the new content is written after that.
    

The addition POSITION cannot be specified if one of the additions [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) or [BYTE-ORDER MARK](javascript:call_link\('abapopen_dataset_encoding.htm'\)) is specified at the same time.

Hints

-   For file sizes greater than 2 GB, a position pos of the data type i is not sufficient for positioning in the whole file, and p or decfloat must be used instead.

-   The positioning can be overwritten by the statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)). In particular, for positioning the file pointer at the end of the file, SET DATASET should be used instead of entering the value -1 in pos.

-   Free specified positions are more suitable for binary files than for text files. In the case of text files, positions depend on the character format, [end-of-line marking](javascript:call_link\('abapopen_dataset_linefeed.htm'\)), and a possible byte order mark (BOM) in UTF-8 files.

Example

A file test.dat is created as a text file, then filled with data, changed, and read. Since each [TRANSFER](javascript:call_link\('abaptransfer.htm'\)) statement appends an [end-of-line selection](javascript:call_link\('abapopen_dataset_linefeed.htm'\)) to the written content, the content of the file is double-lined after the change. The first line contains "12ABCD". The second line contains "890". The character "7" is overwritten by the end-of-line selection of the first line.

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
      output TYPE TABLE OF string WITH EMPTY KEY.
WHILE sy-subrc = 0.
  READ DATASET file INTO result.
  APPEND result TO output.
ENDWHILE.
CLOSE DATASET file.
cl\_demo\_output=>display\_data( output ).
DELETE DATASET file.