---
title: "Spooling Screen Lists"
description: |
  As well as creating spool lists, screen lists can also be sent to the SAP spool system. To do this, use the Print function in the list display. This function converts the screen list into a spool list, where the spool format specified in the spool parameters(https://help.sap.com/doc/abapdocu_752_i
version: "7.52"
category: "ui"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_screen.htm"
abapFile: "abenprint_screen.htm"
keywords: ["do", "if", "try", "class", "abenprint", "screen"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Spooling Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm) → 

Spooling Screen Lists

As well as creating spool lists, screen lists can also be sent to the SAP spool system. To do this, use the Print function in the list display. This function converts the screen list into a spool list, where the spool format specified in the [spool parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters.htm) is used to split the list and shorten it, if necessary. However, this usually results in the following problems:

-   A list that has been formatted as a screen list is not appropriate for spool output, because:

-   A screen list usually consists of one logical page. This logical page must be divided into multiple physical spool pages for the spooling process. Since the screen list contains only one [page header](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenpage_header_glosry.htm "Glossary Entry"), this page header is used as the page header of every spool page. If it contains page numbering, then every spool page has the same page number (usually 1).

-   Screen lists are usually very wide (> 130 columns). A normal printer can print these lists only by truncating the lines.

-   A screen list does not support any special print control sequences as they appear, for example, in the statement [PRINT-CONTROL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprint-control.htm).

Notes

-   For the reasons mentioned this type of spooling should not be used for production purposes. It is designed only as a way of capturing a screen for testing purposes.

-   A screen list cannot contain any index lines created using [PRINT-CONTROL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprint-control.htm). Indexed searches are not possible in an archived screen list.