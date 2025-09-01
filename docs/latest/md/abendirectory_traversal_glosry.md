---
title: "directory_traversal_glosry"
description: |
  directory_traversal_glosry - ABAP latest language reference documentation
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendirectory_traversal_glosry.htm"
abapFile: "abendirectory_traversal_glosry.htm"
keywords: ["do", "if", "try", "data", "abendirectory", "traversal", "glosry"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_glossary.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20directory%20traversal%2C%20ABENDIRECTORY_TRAVERSAL_GLOSRY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

directory traversal

Unauthorized access to files or directories. Directory traversals are possible in ABAP if physical file names or file paths that are transferred from outside ABAP to programs are then passed on to the [ABAP file interface](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenfile_interface_glosry.htm "Glossary Entry") without being checked or escaped. Directory traversals must be prevented by [validating file names](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendataset_auth_self.htm).

[→ More about](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abendyn_file_scrty.htm)