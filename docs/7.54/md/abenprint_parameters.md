---
title: "Note"
description: |
  The content of the structures PRI_PARAMS and ARC_PARAMS cannot be modified directly in programs; only the function module GET_PRINT_PARAMETERS can be used for this. Spool Dialog Box(https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_window.htm) Setting Program-Dri
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters.htm"
abapFile: "abenprint_parameters.htm"
keywords: ["do", "if", "try", "class", "data", "abenprint", "parameters"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Spooling Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint.htm) → 

spool parameter

For every [spool request](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_spool.htm), spool parameters must be defined that are used to format the spool list when the list is created, and to control the request.

In the ABAP statements [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-page_print.htm) and [SUBMIT TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_print_parameters.htm) the spool parameters are specified in a structure of type PRI\_PARAMS from ABAP Dictionary. Spool parameters can be enhanced by archiving parameters if the data of the spool request is to be archived using ArchiveLink. To do this, optical archiving using [ArchiveLink](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abensap_archivelink_glosry.htm "Glossary Entry") is switched on (archiving mode 2 or 3) in the spool parameters. Archiving parameters are specified in a structure of type ARC\_PARAMS from ABAP Dictionary.

The spool parameters are specified either explicitly or implicitly. The end user can set them directly in the spool dialog box or the spool parameters can be set in the program code.

-   [Spool Dialog Box](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_window.htm)

-   [Setting Program-Driven Spool Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_function.htm)

-   [Overview of All Spool Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_overview.htm)

Note

The content of the structures PRI\_PARAMS and ARC\_PARAMS cannot be modified directly in programs; only the function module GET\_PRINT\_PARAMETERS can be used for this.

Continue
[Spool Dialog Box](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_window.htm)
[Setting Program-Driven Spool Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_function.htm)
[Overview of All Spool Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_overview.htm)