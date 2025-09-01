---
title: "Spool list"
description: |
  Also referred to as a spool list. List(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclassic_list_glosry.htm 'Glossary Entry') that is not stored as a screen list(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_list_glosry.htm 'Glossary Entry') in the list
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenspool_list_glosry.htm"
abapFile: "abenspool_list_glosry.htm"
keywords: ["do", "try", "class", "abenspool", "list", "glosry"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP Glossary](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_glossary.htm) → 

Spool list

Also referred to as a spool list. [List](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenclassic_list_glosry.htm "Glossary Entry") that is not stored as a [screen list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_list_glosry.htm "Glossary Entry") in the [list buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_buffer_glosry.htm "Glossary Entry") but is sent page by page to the [SAP spool system](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_spool_system_glosry.htm "Glossary Entry"). When it is created, a spool list is linked to exactly one [spool request](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenspool_request_glosry.htm "Glossary Entry") only. Spool lists can be stacked in [spool list levels](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenspool_list_level_glosry.htm "Glossary Entry"). No more than two spool requests can be open at the same time for a spool list level. The statements used to create a spool list are [NEW-PAGE PRINT ON*|*OFF](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapnew-page_print.htm) and [SUBMIT TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abapsubmit_list_options.htm).

[→ More about](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint.htm)