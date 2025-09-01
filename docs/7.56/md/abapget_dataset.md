  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfile_interface_statements.htm) → 

GET DATASET

[Short Reference](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapget_dataset_shortref.htm)

Syntax

GET DATASET dset *\[*POSITION pos*\]* *\[*ATTRIBUTES attr*\]*.

Additions:

[1\. ... POSITION pos](#!ABAP_ADDITION_1@1@)
[2\. ... ATTRIBUTES attr](#!ABAP_ADDITION_2@2@)

Effect

The addition POSITION is used by this statement to determine the current position of the file pointer in the file specified in dset and the addition ATTRIBUTES is used to get additional file attributes.

dset expects a character-like data object that contains the [physical name](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenphysical_filename_glosry.htm "Glossary Entry") of the file. The file must already be open, otherwise a catchable exception of the class CX\_SY\_FILE\_OPEN\_MODE is raised.

Return Code

The statement GET DATASET always sets sy-subrc to the value 0 or raises an exception.

Hint

If no additions are specified, the statement can be used to determine whether the file is open using a [TRY](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abaptry.htm) control structure.

Example

The statement GET DATASET raises an exception if the file is not yet open.

DATA(dset) = 'test.dat'.
TRY.
    GET DATASET dset.
  CATCH cx\_sy\_file\_open\_mode.
    ...
ENDTRY.

Addition 1   

... POSITION pos

Effect

This addition assigns the current position of the file pointer to the data object pos. The following can be specified for pos:

-   An existing variable of the data type i or a variable to which the type i can be converted.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm), where a variable of type i is declared.

The position is specified in bytes, where the start of the file corresponds to position 0.

The addition POSITION cannot be specified for files that have been opened with the addition [FILTER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_os_addition.htm) of the statement OPEN DATASET. This raises a catchable exception.

Hint

For file sizes greater than 2 GB, a data object pos of data type i is not sufficient for recording all the possible positions of the file pointer.

Example

After the first literal is saved, the position of the file pointer is assigned to the variable pos, which is then used to position the file pointer before the read.

DATA: file TYPE string VALUE 'test.dat',
      text TYPE string.
OPEN DATASET file FOR OUTPUT IN TEXT MODE
                             ENCODING DEFAULT
                             WITH SMART LINEFEED.
TRANSFER '1234567890' TO file.
GET DATASET file POSITION DATA(pos).
TRANSFER 'ABCDEFGHIJ' TO file.
CLOSE DATASET file.
OPEN DATASET file FOR INPUT IN TEXT MODE
                            ENCODING DEFAULT
                            WITH SMART LINEFEED
                            AT POSITION pos.
READ DATASET file INTO text.
CLOSE DATASET file.

Addition 2   

... ATTRIBUTES attr

Effect

This addition places the attributes used to open the file with the statement OPEN DATASET in the data object attr. The following can be specified for attr:

-   An existing variable of the data type dset\_attributes from the [type pool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentype_pool_glosry.htm "Glossary Entry") DSET.
-   An inline declaration [DATA(var)](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendata_inline.htm), where a variable of type dset\_attributes is declared.

The data type is defined in the type pool as follows:

dset\_attributes is a structured type with two substructures: fixed and changeable. The components of the substructure fixed record attributes of the file that cannot be changed using the statement [SET DATASET](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapset_dataset.htm) (see Table 1). The components of the substructure changeable record attributes of the file that can be changed using the statement SET DATASET (see Table 2).

Table 1

Component

Meaning

indicator

Structure whose components mode, access\_type, encoding, filter, and linefeed in attr contain the value "X" if the identically named components of the structure fixed are significant for the current file.

mode

Storage mode. Possible values in attr are "T", "LT", "B", and "LB" for [text files](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_file_glosry.htm "Glossary Entry"), [legacy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text files, [binary files](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenbinary_file_glosry.htm "Glossary Entry"), and [legacy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlegacy_file_glosry.htm "Glossary Entry") binary files. The associated addition of the statement OPEN DATASET is [IN mode](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_mode.htm).

access\_type

Access mode. Possible values in attr are "I", "O", "A", and "U" for files that were opened for reading, writing, appending, and changing. The associated addition of the statement OPEN DATASET is [FOR access](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_access.htm).

encoding

Character representation. Possible values in attr are "NON-UNICODE" and "UTF-8". The associated addition of the statement OPEN DATASET is [ENCODING *{* DEFAULT *|* UTF-8 *|* NON-UNICODE *}*](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_mode.htm).

filter

In attr, contains the filter command if the file was opened with the [FILTER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_os_addition.htm) addition of the statement OPEN DATASET.

linefeed

Contains the [end-of-line marker](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm) used when accessing a [text file](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abentext_file_glosry.htm "Glossary Entry") or [legacy](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlegacy_file_glosry.htm "Glossary Entry") text file.

Table 2

Component

Meaning

indicator

Structure whose components repl\_char, conv\_errors, code\_page, endian, and linefeed\_mode contain the value "X" in attr if the identically named components of the structure changeable are significant for the current file.

repl\_char

After the file is opened, this component contains the replacement character in attr that was specified using the addition [REPLACEMENT CHARACTER](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_error_handling.htm) of the statement OPEN DATASET.

conv\_errors

After the file is opened, this component contains the value "I" in attr if it was opened using the addition [IGNORING CONVERSION ERRORS](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_error_handling.htm) of the statement OPEN DATASET, otherwise it contains the value "R".

code\_page

After the file is opened, this component contains the [code page](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abencodepage_glosry.htm "Glossary Entry") in attr that was specified using the addition [CODE PAGE](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_mode.htm) of the statement OPEN DATASET. If no addition is used, the content of attr is initial.

endian

After the file is opened, this component contains the value "B" in attr if the addition [BIG ENDIAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_mode.htm) of the statement OPEN DATASET was used or "L" if the addition [LITTLE ENDIAN](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_mode.htm) was used. If no addition is used, the content of attr is initial.

linefeed\_mode

After the file is opened, this component contains one of the values "N", "S", "U", or "W" in attr if the corresponding addition [WITH NATIVE*|*SMART*|*UNIX*|*WINDOWS LINEFEED](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapopen_dataset_linefeed.htm) of the statement OPEN DATASET was used. If none of the additions is used, the content in attr is initial.

For some of the components, constants are defined in the type pool DSET as comparison values.

Hint

The determinable attributes do not represent the attributes of the file in the operating system, but the attributes with which the file is opened and according to which it is handled in ABAP.

Example

In this example, the system first checks whether the file test.dat was opened using the FILTER addition. Only if this is not the case, is the current file position determined using GET DATASET.

DATA: dset TYPE string VALUE 'test.dat',
      pos  TYPE i.
OPEN DATASET dset FOR INPUT IN BINARY MODE
                  FILTER 'uncompress'.
...
GET DATASET dset ATTRIBUTES DATA(attr).
IF attr-fixed-indicator-filter <> 'X'.
  GET DATASET dset POSITION pos.
ELSE.
  ...
ENDIF.
CLOSE DATASET dset.

[Exceptions](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

-   CX\_SY\_FILE\_OPEN\_MODE The file is not open.
-   CX\_SY\_FILE\_POSITION The file could not be read because an invalid status exists or the type of file does not allow position specification.
-   CX\_SY\_CONVERSION\_OVERFLOW The variable pos was assigned a type that is too small to include the current position.