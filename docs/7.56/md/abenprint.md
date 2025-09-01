---
title: "Lists - Spool"
description: |
  The 'spooling' of lists means the list output is not passed to the list buffer(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_buffer_glosry.htm 'Glossary Entry') for screen lists(https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_list_glosry.htm 'Glossary
version: "7.56"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint.htm"
abapFile: "abenprint.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "abenprint"]
---

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_dynpro_list.htm) → 

Lists - Spool

The "spooling" of lists means the list output is not passed to the [list buffer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenlist_buffer_glosry.htm "Glossary Entry") for [screen lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenscreen_list_glosry.htm "Glossary Entry") and it is passed page by page to the [SAP spool system](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abensap_spool_system_glosry.htm "Glossary Entry") instead. After a page has been passed, it is deleted from the ABAP runtime framework and only exists in the SAP spool system.

The size of a spool list is therefore only limited by the intake capacity of the spool system and can become very large. On the other hand, when spool lists are created, it is not possible to refer to previous pages.

Each spooling of list output is linked to a [spool request](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenspool_request_glosry.htm "Glossary Entry"). The list pages that are output for a spool request comprise a [spool list](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenspool_list_glosry.htm "Glossary Entry"). The spool list of a spool request can be

-   stored in the spool system,
-   printed on a printer, or
-   archived using [ArchiveLink](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenarchivelink_glosry.htm "Glossary Entry").

For the spooling of lists, both the activation and deactivation of spooling and the association with spool requests are important.

-   [Switching Spooling On and Off](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_on_off.htm)
-   [Spool List Levels and Spool Requests](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_spool.htm)

The following topics also play a role in spooling lists:

-   [Spool Parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_parameters.htm)
-   [Spool Control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_control.htm)
-   [Spooling Screen Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_screen.htm)

Hint

Separate solutions are provided for form-based output of data, instead of spool lists.

Continue
[Lists - Switching Spooling On and Off](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_on_off.htm)
[Lists - Spool List Levels and Spool Requests](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_spool.htm)
[Lists - Spool Parameters](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_parameters.htm)
[Lists - Spool Control](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_control.htm)
[Lists - Spooling Screen Lists](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_screen.htm)
![Example](exa.gif "Example") [Lists - Spool](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprint_list_abexa.htm)