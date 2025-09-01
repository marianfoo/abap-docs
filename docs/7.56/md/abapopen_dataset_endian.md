  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) →  [OPEN DATASET, mode](javascript:call_link\('abapopen_dataset_mode.htm'\)) → 

OPEN DATASET, endian

[Short Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

Syntax

... *{*BIG*|*LITTLE*}* ENDIAN ...

Effect

This addition specifies that, when a [legacy file](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") is opened, numeric data objects of the type i, int8, decfloat16, decfloat34, f, or s are stored in the file in the [byte order](javascript:call_link\('abenbyte_order_glosry.htm'\) "Glossary Entry") Big Endian or Little Endian. When a data object of these types is written or read, a conversion between these orders and the byte order of the current platform is performed, if necessary. If the addition is not specified, the byte order of the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry") is used.

Hints

-   The statement [SET DATASET](javascript:call_link\('abapset_dataset.htm'\)) can be used to specify a different byte order for an opened legacy file.
-   The addition *{*BIG*|*LITTLE*}* ENDIAN replaces the use of the obsolete statement [TRANSLATE NUMBER FORMAT](javascript:call_link\('abaptranslate.htm'\)) in the case of file accesses.

Example

Opens a legacy binary file with different byte orders for writing. In each case, the integer 111 is written to the file and the content is read in binary format to a byte string. The results are 0000006F and 6F000000, that is, 111 in binary format in Big Endian and Little Endian.

DATA(dset) = 'test.dat'.
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