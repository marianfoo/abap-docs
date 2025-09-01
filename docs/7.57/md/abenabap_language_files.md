---
title: "ABAP File Interface"
description: |
  The statements of the ABAP file interface enable ABAP statements to process files on the host computers(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_computer_glosry.htm 'Glossary Entry') of the current AS instance(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/
version: "7.57"
category: "oop"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_files.htm"
abapFile: "abenabap_language_files.htm"
keywords: ["do", "if", "try", "method", "class", "data", "abenabap", "language", "files"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_language_external_data.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: ABAP File Interface, ABENABAP_LANGUAGE_FILES, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A
%0D%0ASuggestion for improvement:)

ABAP File Interface

The statements of the ABAP file interface enable ABAP statements to process files on the [host computers](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenas_instance_glosry.htm "Glossary Entry"). Methods of the global class [CL\_GUI\_FRONTEND\_SERVICES](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfrontend_services.htm) are available for files on presentation servers.

-   [Physical and Logical File Names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfile_interface_naming.htm)
-   [Authorization for File Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendataset_auth.htm)
-   [Locking Files](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfile_interface_locking.htm)
-   [System Class for the File Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_file_utilities.htm)
-   [Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfile_interface_statements.htm)

Hints

-   Files on the host computers of the AS instances are not usually suited as persistent repositories of data from application programs. Data is stored in a platform-dependent way, and usually only files on the [host computer](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance can be accessed. This can be a problem in systems with multiple AS instances.
-   Files on the host computers of the AS instances can be used to exchange data with non-SAP systems.

Continue
[Physical and Logical File Names](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfile_interface_naming.htm)
[Authorization for File Access](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendataset_auth.htm)
[Locking Files](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfile_interface_locking.htm)
[System Class for the File Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencl_abap_file_utilities.htm)
[Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfile_interface_statements.htm)