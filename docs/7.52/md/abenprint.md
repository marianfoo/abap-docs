---
title: "Spooling Lists"
description: |
  The 'spooling' of lists means the list output is not put in the list buffer(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_buffer_glosry.htm 'Glossary Entry') for screen lists(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_list_glosry.htm 'Glossary Ent
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm"
abapFile: "abenprint.htm"
keywords: ["delete", "do", "if", "try", "class", "data", "abenprint"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) → 

Spooling Lists

The "spooling" of lists means the list output is not put in the [list buffer](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenlist_buffer_glosry.htm "Glossary Entry") for [screen lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenscreen_list_glosry.htm "Glossary Entry"), instead it is passed, page by page, to the [SAP spool system](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_spool_system_glosry.htm "Glossary Entry"). After a page has been passed, it is deleted from the ABAP runtime environment and only exists in the SAP spool system.

The size of a spool list is therefore only limited by the intake capacity of the spool system, and can be very large. On the other hand, when spool lists are created, it is not possible to refer to previous pages.

Each spooling of list output is associated with a [spool request](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenspool_request_glosry.htm "Glossary Entry"). The list pages that are passed to a spool request comprise a [spool list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_list_glosry.htm "Glossary Entry"). The spool list of a spool request can be

-   kept in the spool system,

-   printed on a printer, or

-   archived using [ArchiveLink](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_archivelink_glosry.htm "Glossary Entry").

For the spooling of lists, both the activation and deactivation of spooling and the association with spool requests are important.

-   [Switching Spooling On and Off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_on_off.htm)

-   [Spool List Levels and Spool Requests](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_spool.htm)

The following topics also play a role in spooling lists:

-   [Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters.htm)

-   [Spool Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_control.htm)

-   [Spooling Screen Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_screen.htm)

Note

Separate solutions are provided for form-based output of data, instead of spool lists. For example, search the [SAP Help Portal](http://help.sap.com) for the term "form".

Continue
[Switch Spooling On and Off](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_on_off.htm)
[Spool List Levels and Spool Requests](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_spool.htm)
[Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters.htm)
[Spool Control](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_control.htm)
[Spooling Screen Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_screen.htm)
![Example](exa.gif "Example") [Spooling Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_list_abexa.htm)