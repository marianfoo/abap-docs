---
title: "OPEN DATASET, CODE PAGE"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_shortref.htm) Syntax ...  CODE PAGE cp ... Effect This addition specifies that, when a legacy file(https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlegacy_file_glosry.htm 'Glossary Entry') i
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_code_page.htm"
abapFile: "abapopen_dataset_code_page.htm"
keywords: ["delete", "do", "if", "try", "catch", "class", "data", "abapopen", "dataset", "code", "page"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset.htm) →  [OPEN DATASET, mode](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_mode.htm) → 

OPEN DATASET, CODE PAGE

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_shortref.htm)

Syntax

...  CODE PAGE cp ...

Effect

This addition specifies that, when a [legacy file](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlegacy_file_glosry.htm "Glossary Entry") is opened, the representation of character-like data objects in the file is based on the code page specified in cp. When a character-like data object is written or read, a conversion between this code page and the current character representation is performed, if necessary. If this addition is not specified, the characters in the file are handled in accordance with the non-Unicode code page that would be assigned when reading or writing data in a non-Unicode system (as specified by the entry in the database table TCP0C in the current [text environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_environment_glosry.htm "Glossary Entry")).

If specified, the code page cp expects a character-like data object that must contain, when the statement is executed, the name of a non-Unicode page from the column CPCODEPAGE in the database table TCP00. Unicode code pages cannot be specified.

Hints

-   This addition enables the automatic conversion of file content to the current Unicode character representation [UCS-2](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenucs2_glosry.htm "Glossary Entry") when reading and writing files. In this way, files saved in any non-Unicode systems can be imported.

-   The statement [SET DATASET](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_dataset.htm) can be used to specify a different code page for an opened legacy file.

-   The addition CODE PAGE replaces the use of the obsolete statement [TRANSLATE CODE PAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abaptranslate.htm) in when accessing files.

Example

Opens legacy text files with the IDs 1101 for 7-Bit USA ASCII and 1102 for 7-Bit German ASCII from the table TCP00. When a German umlaut character is written to the open file with the ID 1101, an exception of the class CX\_SY\_CONVERSION\_CODEPAGE is raised. When the character is written to the open file with the ID 1102, this exception is not raised. See also the example for the addition [REPLACEMENT CHARACTER](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapopen_dataset_error_handling.htm).

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN LEGACY TEXT MODE CODE PAGE '1101'.
TRY.
    TRANSFER 'ÄaÖöÜü' TO dset.
  CATCH cx\_sy\_conversion\_codepage INTO DATA(exc).
    cl\_demo\_output=>write( 'Error writing to 7-Bit USA ASCII' ).
ENDTRY.
CLOSE DATASET dset.
OPEN DATASET dset FOR OUTPUT IN LEGACY TEXT MODE CODE PAGE '1102'.
TRY.
    TRANSFER 'ÄaÖöÜü' TO dset.
  CATCH cx\_sy\_conversion\_codepage INTO exc.
    cl\_demo\_output=>write( 'Error writing to 7-Bit German ASCII' ).
ENDTRY.
CLOSE DATASET dset.
cl\_demo\_output=>display( ).
DELETE DATASET dset.