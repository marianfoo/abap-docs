---
title: "directory_traversal_glosry"
description: |
  directory_traversal_glosry - ABAP 7.56 language reference documentation
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendirectory_traversal_glosry.htm"
abapFile: "abendirectory_traversal_glosry.htm"
keywords: ["do", "if", "try", "data", "abendirectory", "traversal", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

directory traversal

Unauthorized access to files or directories. Directory traversals are possible in ABAP if physical file names or file paths that are transferred from outside ABAP to programs are then passed on to the [ABAP file interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfile_interface_glosry.htm "Glossary Entry") without being checked or escaped. Directory traversals must be prevented by [validating file names](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendataset_auth_self.htm).

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendyn_file_scrty.htm)