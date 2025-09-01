---
title: "Lists - Spool Parameters"
description: |
  For every spool request(https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_spool.htm), spool parameters must be defined that are used to format the spool list when the list is created, and to control the request. In the ABAP statements NEW-PAGE PRINT ON(https://help.sap.com/doc
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters.htm"
abapFile: "abenprint_parameters.htm"
keywords: ["do", "if", "try", "class", "data", "abenprint", "parameters"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_dynpro_list.htm) →  [Lists - Spool](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool Parameters, ABENPRINT_PARAMETERS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Lists - Spool Parameters

For every [spool request](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_spool.htm), spool parameters must be defined that are used to format the spool list when the list is created, and to control the request.

In the ABAP statements [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapnew-page_print.htm) and [SUBMIT TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapsubmit_print_parameters.htm) the spool parameters are specified in a structure of type PRI\_PARAMS from the ABAP Dictionary. Spool parameters can be enhanced by archiving parameters if the data of the spool request is to be archived using ArchiveLink. To do this, optical archiving using [ArchiveLink](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarchivelink_glosry.htm "Glossary Entry") is switched on (archiving mode 2 or 3) in the spool parameters. Archiving parameters are specified in a structure of type ARC\_PARAMS from the ABAP Dictionary.

The spool parameters are specified either explicitly or determined implicitly. The end user can make an interactive entry in the spool dialog box or the spool parameters can be set in a program-driven way.

-   [Spool Dialog Box](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_window.htm)
-   [Setting Program-Driven Spool Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_function.htm)
-   [Overview of All Spool Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

Hint

The content of the structures PRI\_PARAMS and ARC\_PARAMS cannot be modified directly in programs and only the function module GET\_PRINT\_PARAMETERS can be used for this.

Continue
[Lists - Spool Dialog Box](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_window.htm)
[Lists - Setting Program-Driven Spool Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_function.htm)
[Lists - Overview of All Spool Parameters](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)