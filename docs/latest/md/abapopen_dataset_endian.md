  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset.htm) →  [OPEN DATASET, mode](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_mode.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OPEN%20DATASET%2C%20endian%2C%20ABAPOPEN_DATASET_ENDIAN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OPEN DATASET, endian

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_shortref.htm)

Syntax

... *{*BIG*|*LITTLE*}* ENDIAN ...

Effect

This addition specifies that, when a [legacy file](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenlegacy_file_glosry.htm "Glossary Entry") is opened, numeric data objects of the type i, int8, decfloat16, decfloat34, f, or s are stored in the file in the [byte order](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenbyte_order_glosry.htm "Glossary Entry") Big Endian or Little Endian. When a data object of these types is written or read, a conversion between these orders and the byte order of the current platform is performed, if necessary. If the addition is not specified, the byte order of the [host computer](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenas_instance_glosry.htm "Glossary Entry") is used.

Hints

-   The statement [SET DATASET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapset_dataset.htm) can be used to specify a different byte order for an opened legacy file.
-   The addition *{*BIG*|*LITTLE*}* ENDIAN replaces the use of the obsolete statement [TRANSLATE NUMBER FORMAT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abaptranslate.htm) in the case of file accesses.

Example

Opens a legacy binary file with different byte orders for writing. In each case, the integer 111 is written to the file and the content is read in binary format to a byte string. The results are 0000006F and 6F000000, that is, 111 in binary format in Big Endian and Little Endian.

FINAL(dset) = 'test.dat'.
DATA xstr TYPE xstring.
OPEN DATASET dset FOR OUTPUT IN LEGACY BINARY MODE BIG ENDIAN.
TRANSFER 111 TO dset.
CLOSE DATASET dset.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
cl\_demo\_output=>write( xstr ).
OPEN DATASET dset FOR OUTPUT IN LEGACY BINARY MODE LITTLE ENDIAN.
TRANSFER 111 TO dset.
CLOSE DATASET dset.
OPEN DATASET dset FOR INPUT IN BINARY MODE.
READ DATASET dset INTO xstr.
CLOSE DATASET dset.
cl\_demo\_output=>write( xstr ).
cl\_demo\_output=>display( ).
DELETE DATASET dset.