---
title: "Data Storage"
description: |
  ABAP programs generally work with data imported from persistent memory media to the internal session(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm 'Glossary Entry') of the current program execution. This data is then available to the program as transien
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendata_storage_gdl.htm"
abapFile: "abendata_storage_gdl.htm"
keywords: ["do", "if", "try", "data", "abendata", "storage", "gdl"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Guidelines](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_pgl.htm) →  [Architecture](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarchitecture_gdl.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Data Storage, ABENDATA_STORAGE_GDL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugg
estion for improvement:)

Data Storage

ABAP programs generally work with data imported from persistent memory media to the [internal session](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abeninternal_session_glosry.htm "Glossary Entry") of the current program execution. This data is then available to the program as transient data. For performance reasons, data can also be stored in the shared memory of the current AS instance. This shared memory is available to all programs of an AS instance. Access to data in the shared memory is faster than accessing data in persistent memory media by some magnitude.

-   [Persistent Data Storage](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpersistent_data_storage_guidl.htm "Guideline")
-   [Database Accesses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_access_guidl.htm "Guideline")
-   [Client Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_handling_guidl.htm "Guideline")
-   [Using the Shared Memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuse_shared_memory_guidl.htm "Guideline")
-   [Using Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuse_shared_objects_guidl.htm "Guideline")

Continue
[Persistent Data Storage](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenpersistent_data_storage_guidl.htm)
[Database Accesses](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abendatabase_access_guidl.htm)
[Client Handling](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenclient_handling_guidl.htm)
[Using the Shared Memory](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuse_shared_memory_guidl.htm)
[Using Shared Objects](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenuse_shared_objects_guidl.htm)