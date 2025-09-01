---
title: "Setting Program-Driven Spool Parameters"
description: |
  Spool and archiving parameters can only be set in a program using the following function module: GET_PRINT_PARAMETERS. If the corresponding structures are changed directly and then the parameters in question used in NEW-PAGE PRINT ON or SUBMIT TO SAP-SPOOL, a runtime error occurs. The GET_PRINT_
version: "7.54"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_function.htm"
abapFile: "abenprint_parameters_function.htm"
keywords: ["do", "if", "case", "class", "abenprint", "parameters", "function"]
---

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_dynpro_list.htm) →  [Spooling Lists](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint.htm) →  [spool parameter](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters.htm) → 

Setting Program-Driven Spool Parameters

Spool and archiving parameters can only be set in a program using the following function module: GET\_PRINT\_PARAMETERS. If the corresponding structures are changed directly and then the parameters in question used in NEW-PAGE PRINT ON or SUBMIT TO SAP-SPOOL, a runtime error occurs. The GET\_PRINT\_PARAMETERS function module can be used to execute the following functions:

-   Creating a complete set of spool and archiving parameters.

-   Determining the spool parameters that are currently valid during spooling

-   Changing individual spool parameters

-   Interactive querying of the spool parameters in the spool dialog box

The interface parameters for the function module are listed in [Overview of All Spool Parameters](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_overview.htm).

The [spool dialog box](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprint_parameters_window.htm) is displayed by default and can be switched off using the parameter NO\_DIALOG. The values passed to the function module are used as the default values in the spool dialog box and can be overwritten there.

The function module gets all parameters that have not been set from the system, taking some values from the user master record. Dependent parameters are set automatically. If the function module is unable to generate a record with valid spool and archiving parameters, it generates an exception. The generated records are either complete or empty. The export parameter VALID (if the spool dialog box is being used) indicates whether a complete record could be created.

Notes

-   For GET\_PRINT\_PARAMETERS, the completeness of the parameter records and the run capability of the spool request are of primary importance. The function module does not carry out a complete consistency test like the spool dialog box. Consistency is only established in cases where it is significant for the run capability of the spool request. Inconsistent entries are partly ignored, partly replaced. For example:

-   The LINE\_SIZE parameter or LINE\_COUNT parameter can be used to set values that are not compatible with the LAYOUT parameter and lead to truncated output. Such inconsistencies are recognized in the spool dialog box.

-   Even if invalid values are passed to DESTINATION, it is still possible to set IMMEDIATELY to "X". The function module replaces the output device with a standard value (LP01) and initializes IMMEDIATELY. This causes the spool system to store the request using the settings that go with the default printer.

-   The GET\_PRINT\_PARAMETERS function module can be called multiple times consecutively. For example, the spool dialog box can be called at the start of a program if the user enters the basic setting. When it is called again, the parameter records created in this way can be passed collectively to the PRI\_PARAMS and ARC\_PARAMS import parameters of the function module and overwritten there. This enables the spooling of wide lists in landscape format or narrow lists in portrait format with otherwise unchanged settings.