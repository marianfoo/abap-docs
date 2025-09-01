---
title: "Directory Traversal"
description: |
  Physical file names can be specified as the content of a character-like data object in the statements and system class of the ABAP file interface(https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfile_interface_glosry.htm 'Glossary Entry'). If some or all of this content originates ou
version: "7.53"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendyn_file_scrty.htm"
abapFile: "abendyn_file_scrty.htm"
keywords: ["delete", "do", "if", "case", "try", "method", "class", "data", "abendyn", "file", "scrty"]
---

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendynamic_programming_scrty.htm) → 

Directory Traversal

Physical file names can be specified as the content of a character-like data object in the statements and system class of the [ABAP file interface](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenfile_interface_glosry.htm "Glossary Entry"). If some or all of this content originates outside of the calling program, there is a risk that files or file paths are accessed by unauthorized sources (this is known as [directory traversal](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendirectory_traversal_glosry.htm "Glossary Entry")). The following are potential security risks when using input from outside to access the ABAP file interface:

-   A file name used in the statements [OPEN DATASET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapopen_dataset.htm) and [DELETE DATASET](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abapdelete_dataset.htm) originates either partly or in full from outside the program.

-   A file name passed to the method CREATE\_UTF8\_FILE\_WITH\_BOM of the system class CL\_ABAP\_FILE\_UTILITIES originates either partly or in full from outside the program.

To act against this security risk, [the file names must be validated](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendataset_auth_self.htm). This can be a self-programmed validation or the function module FILE\_VALIDATE\_NAME can be used. This function module checks whether a physical file name matches a [logical file name](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abenlogical_filename_glosry.htm "Glossary Entry") or whether it is a valid directory. One prerequisite is that the matching file names or logical paths were created using the transactions FILE or SF01.

Notes

-   If a program uses logical file names exclusively, instead of physical file names, the physical file names or paths required by the statements are constructed using the function module FILE\_GET\_NAME only. In this case, validation is not usually necessary.

-   Alongside the validation of file names, adequate checks should be made on the [authorizations for file access](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendataset_auth.htm).

Example

See the examples under [Validating File Names](https://help.sap.com/doc/abapdocu_753_index_htm/7.53/en-US/abendataset_auth_self.htm).