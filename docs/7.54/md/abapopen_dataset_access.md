---
title: "OPEN DATASET - access"
description: |
  Quick Reference(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_shortref.htm) Syntax ... INPUT  OUTPUT  APPENDING  UPDATE ... Alternatives: 1. ... INPUT(#!ABAP_ALTERNATIVE_1@1@) 2. ... OUTPUT(#!ABAP_ALTERNATIVE_2@2@) 3. ... APPENDING(#!ABAP_ALTERNATIVE
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_access.htm"
abapFile: "abapopen_dataset_access.htm"
keywords: ["update", "delete", "do", "if", "data", "abapopen", "dataset", "access"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset.htm) → 

OPEN DATASET - access

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapopen_dataset_shortref.htm)

Syntax

... INPUT
  *|* OUTPUT
  *|* APPENDING
  *|* UPDATE ...

Alternatives:

[1\. ... INPUT](#!ABAP_ALTERNATIVE_1@1@)
[2\. ... OUTPUT](#!ABAP_ALTERNATIVE_2@2@)
[3\. ... APPENDING](#!ABAP_ALTERNATIVE_3@3@)
[4\. ... UPDATE](#!ABAP_ALTERNATIVE_4@4@)

Effect

These mandatory additions are used to open the file for reading, writing, appending, or changing.

Alternative 1

... INPUT

Effect

The addition FOR INPUT opens the file for reading. By default, the file pointer is set to the start of the file. If the file specified does not exist, sy-subrc is set to 8. Writes cannot be performed on a file opened for reads.

Example

Opens a binary file to read binary data.

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR INPUT IN BINARY MODE.

Alternative 2

... OUTPUT

Effect

The addition FOR OUTPUT opens the file for writing. If the specified file already exists, its content is deleted. If the file specified does not exist, it is created. Reads are also permitted.

Example

Opens a binary file to write binary data.

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN BINARY MODE.

Alternative 3

... APPENDING

Effect

The addition FOR APPENDING opens the file for appending. If the file specified already exists, it is opened and the file pointer is set at the end of the file. If the file specified does not exist, it is created. Attempted reads to a file opened with FOR APPENDING with the statement [READ DATASET](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapread_dataset.htm) fail, and return the value 4 for sy-subrc.

Example

Opens a binary file to append binary data.

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR APPENDING IN BINARY MODE.

Alternative 4

... UPDATE

Effect

The addition FOR UPDATE opens the file for changes to the existing content. By default, the file pointer is set to the start of the file. If the specified file does not exist, no file is opened and sy-subrc is set to 8.

Example

Opens a binary file to update binary data.

DATA(dset) = 'test.dat'.
OPEN DATASET dset FOR UPDATE IN BINARY MODE.