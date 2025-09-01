---
title: "OPEN DATASET, access"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_shortref.htm) Syntax ... INPUT  OUTPUT  APPENDING  UPDATE ... Alternatives: 1. ... INPUT(#!ABAP_ALTERNATIVE_1@1@) 2. ... OUTPUT(#!ABAP_ALTERNATIVE_2@2@) 3. ... APPENDING(#!ABAP_ALTERN
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_access.htm"
abapFile: "abapopen_dataset_access.htm"
keywords: ["update", "delete", "do", "if", "data", "abapopen", "dataset", "access"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_language_files.htm) →  [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfile_interface_statements.htm) →  [OPEN DATASET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20OPEN%20DATASET%2C%20access%2C%20ABAPOPEN_DATASET_ACCESS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

OPEN DATASET, access

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapopen_dataset_shortref.htm)

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

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR INPUT IN BINARY MODE.

Alternative 2   

... OUTPUT

Effect

The addition FOR OUTPUT opens the file for writing. If the specified file already exists, its content is deleted. If the file specified does not exist, it is created. Reads are also allowed.

Example

Opens a binary file to write binary data.

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR OUTPUT IN BINARY MODE.

Alternative 3   

... APPENDING

Effect

The addition FOR APPENDING opens the file for appending. If the file specified already exists, it is opened, and the file pointer is set at the end of the file. If the file specified does not exist, it is created. An attempt to read to a file opened with FOR APPENDING with the statement [READ DATASET](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapread_dataset.htm) fails, and returns the value 4 for sy-subrc.

Example

Opens a binary file to append binary data.

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR APPENDING IN BINARY MODE.

Alternative 4   

... UPDATE

Effect

The addition FOR UPDATE opens the file for changes to the existing content. By default, the file pointer is set to the start of the file. If the specified file does not exist, no file is opened and sy-subrc is set to 8.

Example

Opens a binary file to update binary data.

FINAL(dset) = 'test.dat'.
OPEN DATASET dset FOR UPDATE IN BINARY MODE.