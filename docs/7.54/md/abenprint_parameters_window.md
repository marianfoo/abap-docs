---
title: "Spool Dialog Box"
description: |
  The spool dialog box makes it possible to interactively determine all spool parameters and checks the input values for consistency and completeness. The call is either automatic or program controlled. -   The spool dialog box appears automatically if a user chooses Execute and Print on the selection
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_window.htm"
abapFile: "abenprint_parameters_window.htm"
keywords: ["select", "do", "if", "case", "method", "class", "abenprint", "parameters", "window"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Spooling Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint.htm) →  [spool parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters.htm) → 

Spool Dialog Box

The spool dialog box makes it possible to interactively determine all spool parameters and checks the input values for consistency and completeness. The call is either automatic or program controlled.

-   The spool dialog box appears automatically if a user chooses Execute and Print on the selection screen, and also when [spooling screen lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_screen.htm). In these cases, the spool dialog box cannot be suppressed.

-   The GET\_PRINT\_PARAMETERS function module can be used to call the spool dialog box in a program.

When the spool dialog box is called automatically, the SET\_PRINT\_PARAMETERS function module can be used to set standard values. The SET\_PRINT\_PARAMETERS function module mainly has the same import parameters as the GET\_PRINT\_PARAMETERS function module (refer to [Overview of All Spool Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_overview.htm)) and no export parameters. An additional input parameter called FOOT\_LINE is used when [spooling a screen list](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_screen.htm) and defines that a footer is printed. It is only respected here.

Notes

-   Displaying the spool dialog box using GET\_PRINT\_PARAMETERS is the recommended method for program-driven spooling, and thereby decouples the dialog from the statements [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapnew-page_print.htm) and [SUBMIT TO SAP SPOOL](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapsubmit_list_options.htm). It is still possible to call the spool dialog box with the latter, however, the functions Back or Cancel cannot be processed properly.

-   The standard values for the spool dialog box must be set before sending the selection screen or list to the screen when the spool dialog box is called automatically. It is advisable to use SET\_PRINT\_PARAMETERS only at the [INITIALIZATION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapinitialization.htm) event of an executable program.

-   Using SET\_PRINT\_PARAMETERS only allows the setting those spool parameters that are stored in components of the PRI\_PARAMS structure.