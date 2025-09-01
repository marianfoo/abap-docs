  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfile_interface_statements.htm) → 

READ DATASET

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_dataset_shortref.htm)

Syntax

READ DATASET dset INTO dobj *\[*MAXIMUM LENGTH mlen*\]*
                            *\[**\[*ACTUAL*\]* LENGTH alen*\]*.

Extras:

[1\. ... MAXIMUM LENGTH mlen](#!ABAP_ADDITION_1@1@)
[2\. ... *\[*ACTUAL*\]* LENGTH alen](#!ABAP_ADDITION_2@2@)

Effect

This statement exports data from the file specified in dset to the data object dobj. dobj expects variables with elementary data types and [flat structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenflat_structure_glosry.htm "Glossary Entry"). The file must be opened using an access type. If a closed or nonexistent file is accessed, a handleable exception is raised. If the file was opened as a [text file](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_file_glosry.htm "Glossary Entry"), dobj must be character-like.

dset expects a character-like data object containing the [physical name](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenphysical_filename_glosry.htm "Glossary Entry") of the file. The content is read from the file starting from the current file pointer. After the data is passed, the file pointer is positioned after the section that was read. Using the MAXIMUM LENGTH addition, the number of characters or bytes to be read from the file can be limited. Using ACTUAL LENGTH, the number of characters or bytes actually used can be determined.

Influence of the Access Type

Files can be read independently of the [access type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_access.htm). Whether data can be read or not depends solely on the position of the file pointer. If the latter is at the end of the file or after the file, no data can be read and sy-subrc will be set to 4.

Influence of the Storage Type

The import function works regardless of the [storage type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_mode.htm) used to open the file with the statement OPEN DATASET.

-   If the file was opened as a [text file](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abentext_file_glosry.htm "Glossary Entry") or as a [legacy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text file, the data is normally read from the current position of the file pointer to the next [end-of-line marker](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_linefeed.htm), and the file pointer is positioned after the end-of-line marker. If the last character of a text file is not an explicit end-of-line marker, the end of the text file is interpreted as the end of the line. If the data object dobj is too short for the number of read characters, the superfluous characters and bytes are cut off. If it is longer, it is padded with blanks on the right. If dobj is a string, it only contains the read characters.
    
-   If the file was opened as a [binary file](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbinary_file_glosry.htm "Glossary Entry") or as a [legacy](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenlegacy_file_glosry.htm "Glossary Entry") binary file, the system reads as much data that can fit into the data object dobj. The file pointer is positioned after the data that has been read. If the data object dobj is longer than the number of exported characters, it is padded with hexadecimal 0 on the right. If dobj is a string, the system tries to read all the data in one go.
    

If the specified storage type makes conversion necessary, this is executed before the assignment to the data object dobj. Afterwards, the read data is placed, byte by byte, into the data object.

System Fields

Read Text Files

sy-subrc

Meaning

0

Data is read up to an explicit end-of-line marker or up to an implicit end-of-line marker at the end of the file.

4

An attempt was made to read data after the end of the file.

Read Binary Files

sy-subrc

Meaning

0

Data was read; either the system did not reach the end of the of file or the system stopped reading at exactly the end of the file.

4

Data was read up to the end of the file and the target field was longer than necessary, or an attempt was made to read data after the end of the file.

Notes

-   The data from the text files can only be imported into character-like data objects and data from binary files should be imported only ‎into byte-like data objects. To evaluate imported data as numeric data objects or mixed structures, it is recommended that these are exported into binary containers and then assigned using the [CASTING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_casting.htm) addition of the ASSIGN statement in accordance with the typed field symbols. If the file is opened as a legacy text file when data like this is being imported, there is the danger that an end-of-line marker is contained in the binary representation of a number and that the number can therefore not be read.
    
-   A text file without an explicit end-of-line marker still has an implicit end-of-line marker at the end of the file.
    
-   In an [enumerated object](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_object_glosry.htm "Glossary Entry"), the data objects stored in the file of the [basic type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenbase_type_glosry.htm "Glossary Entry") of the enumeration object, whose value is a valid [enumerated value](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_value_glosry.htm "Glossary Entry") of an [enumerated type](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenenumerated_type_glosry.htm "Glossary Entry"). This includes any stored enumerated objects and normal elementary data objects of the basic type. Invalid values raise an exception from the class CX\_SY\_FILE\_IO.
    

Example

Imports the binary file flights.dat written in the example by the statement [TRANSFER](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abaptransfer.htm). The data is written (in binary) to a byte-like typed field symbol <hex\_container>. The assignment of the structured [data area](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_area_glosry.htm "Glossary Entry") wa to the field symbol applies the length of the data area and imports a corresponding number of bytes for the loop process. It would be possible to import directly into the structure wa with the same result, but the use of the field symbol is the recommended procedure. The reason is that in this way data is passed explicitly from a binary file into a binary data type.

DATA: wa   TYPE spfli,
      itab LIKE TABLE OF wa WITH EMPTY KEY.
FIELD-SYMBOLS <hex\_container> TYPE x.
DATA(file) = \`flights.dat\`.
OPEN DATASET file FOR INPUT IN BINARY MODE.
ASSIGN wa TO <hex\_container> CASTING.
DO.
  READ DATASET file INTO <hex\_container>.
  IF sy-subrc = 0.
    APPEND wa TO itab.
  ELSE.
    EXIT.
  ENDIF.
ENDDO.
CLOSE DATASET file.
cl\_demo\_output=>display\_data( itab ).

Addition 1

... MAXIMUM LENGTH mlen

Effect

This addition determines how many characters or how many bytes at most are read from the file. mlen expects a data object of the type i. It contains the number of characters or bytes. In the case of text files, the content of mlen determines how many characters are read from the file. In the case of binary files, legacy text files, and legacy binary files, mlen determines how many bytes are read from the file.

The first mlen characters or bytes are read from the current position of the file pointer and the file pointer is positioned after the read file. If the file is opened as a (legacy) text file and there is an end-of-line marker within the specified length, data is read only up to this position and the file pointer is positioned after the [end-of-line marker](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_linefeed.htm).

If the value of mlen is the same as 0, no data is read. If the value of mlen is negative, the addition is ignored and the import takes place in the same way as described for Influence of the Storage Type.

Note

In case of text files, the number of bytes read depends on the character format specified using [ENCODING](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_encoding.htm) when opening the file.

Example

This program section has the same functions as the previous example. Here data is imported not into a byte-like field symbol, but into a byte-like data object hex\_container. The number of bytes to be imported is determined by the typed field symbol <spfli>.

DATA: hex\_container TYPE x LENGTH 1000,
      len TYPE i,
      itab          TYPE TABLE OF spfli WITH EMPTY KEY.
FIELD-SYMBOLS <spfli> TYPE spfli.
DESCRIBE FIELD <spfli> LENGTH len IN BYTE MODE.
DATA(file) = \`flights.dat\`.
OPEN DATASET file FOR INPUT IN BINARY MODE.
ASSIGN hex\_container TO <spfli> CASTING.
DO.
  READ DATASET file INTO hex\_container MAXIMUM LENGTH len.
  IF sy-subrc = 0.
    APPEND <spfli> TO itab.
  ELSE.
    EXIT.
  ENDIF.
ENDDO.
CLOSE DATASET file.
cl\_demo\_output=>display\_data( itab ).

Addition 2

... *\[*ACTUAL*\]* LENGTH alen

Effect

This addition assigns the number of characters or bytes to be read from the file to the data object alen. The following can be specified for alen:

-   An existing variable of the data type i or a variable to which the type i can be converted.
    
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendata_inline.htm), where a variable of type i is declared.
    

For text files, the system determines how many characters were written to the memory area. For binary files, legacy text files, and legacy binary files, the system determines how many bytes were read from the file.

Example

The system field sy-abcde contains 26 characters. A conversion to UTF-16 representation creates a byte string with 52 bytes. Once a file containing this string is read, this number is determined and displayed using the addition LENGTH.

DATA(xstr) =
cl\_abap\_conv\_codepage=>create\_out( codepage = \`UTF-16\`
  )->convert( conv #( sy-abcde ) ).
DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN BINARY MODE.
TRANSFER xstr TO dset.
CLOSE DATASET dset.
OPEN DATASET dset FOR INPUT in BINARY MODE.
READ DATASET dset INTO xstr ACTUAL LENGTH DATA(bytes).
CLOSE DATASET dset.
cl\_demo\_output=>display( bytes ).
DELETE DATASET dset.

Notes

-   Regardless of the length of the target field, the number of characters or bytes actually read from the file is always returned.
    
-   The optional addition ACTUAL was introduced to distinguish the addition LENGTH more effectively from the addition MAXIMUM LENGTH. For this reason, the addition ACTUAL should always be used.
    

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Handleable Exceptions

CX\_SY\_CODEPAGE\_CONVERTER\_INIT

-   Cause: The required conversion is not supported. (For example, because a language not supported by the conversion was specified using SET LOCALE LANGUAGE.)
    Runtime error: CONVT\_CODEPAGE\_INIT
    

CX\_SY\_CONVERSION\_CODEPAGE

-   Cause: Conversion is not possible. The data is read as far as possible. Text data where the conversion has failed is undefined (see also note below).
    Runtime error: CONVT\_CODEPAGE
    

CX\_SY\_FILE\_AUTHORITY

-   Cause: No authorization for access to file
    Runtime error: OPEN\_DATASET\_NO\_AUTHORITY
    

CX\_SY\_FILE\_IO

-   Cause: An error occurred when the file was read.
    Runtime error: DATASET\_READ\_ERROR
    

CX\_SY\_FILE\_OPEN

-   Cause: File cannot be opened.
    Runtime error: DATASET\_CANT\_OPEN
    

CX\_SY\_FILE\_OPEN\_MODE

-   Cause: The file is not open.
    Runtime error: DATASET\_NOT\_OPEN
    

CX\_SY\_PIPE\_REOPEN

-   Cause: The file was opened using the addition FILTER and since then a switch of the work process took place.
    Runtime error: DATASET\_PIPE\_CLOSED