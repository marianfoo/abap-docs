# ABAP - Keyword Documentation / ABAP - Reference / SAP GUI User Dialogs / Classic Lists / Spooling Lists / Spool Parameters

Included pages: 4


### abenprint_parameters.htm

---
title: "Spool Parameters"
description: |
  For every spool request(https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_spool.htm), spool parameters must be defined that are used to format the spool list when the list is created, and to control the request. In the ABAP statements NEW-PAGE PRINT ON(https://help.sap.com/doc
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters.htm"
abapFile: "abenprint_parameters.htm"
keywords: ["do", "if", "try", "class", "data", "abenprint", "parameters"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Spooling Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm) → 

Spool Parameters

For every [spool request](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_spool.htm), spool parameters must be defined that are used to format the spool list when the list is created, and to control the request.

In the ABAP statements [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm) and [SUBMIT TO SAP-SPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_print_parameters.htm) the spool parameters are specified in a structure of type PRI\_PARAMS from the ABAP Dictionary. Spool parameters can be enhanced by archiving parameters if the data of the spool request is to be archived using ArchiveLink. To do this, optical archiving using [Archive Link](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abensap_archivelink_glosry.htm "Glossary Entry") is switched on (archiving mode 2 or 3) in the spool parameters. Archiving parameters are specified in a structure of type ARC\_PARAMS from the ABAP Dictionary.

The spool parameters are specified either explicitly or implicitly. The end user can set them directly in the spool dialog box or the spool parameters can be set in the program code.

-   [Spool Dialog Box](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_window.htm)

-   [Setting Program-Driven Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_function.htm)

-   [Overview of All Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)

Note

The content of the structures PRI\_PARAMS and ARC\_PARAMS cannot be modified directly in programs; only the function module GET\_PRINT\_PARAMETERS can be used for this.

Continue
[Spool Dialog Box](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_window.htm)
[Setting Program-Driven Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_function.htm)
[Overview of All Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)


### abenprint_parameters_window.htm

---
title: "Spool Dialog Box"
description: |
  The spool dialog box makes it possible to interactively determine all spool parameters and checks the input values for consistency and completeness. The call is either automatic or program controlled. -   The spool dialog box appears automatically if a user chooses Execute and Print on the selection
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_window.htm"
abapFile: "abenprint_parameters_window.htm"
keywords: ["select", "do", "if", "case", "method", "class", "abenprint", "parameters", "window"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Spooling Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm) →  [Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters.htm) → 

Spool Dialog Box

The spool dialog box makes it possible to interactively determine all spool parameters and checks the input values for consistency and completeness. The call is either automatic or program controlled.

-   The spool dialog box appears automatically if a user chooses Execute and Print on the selection screen, and also when [spooling screen lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_screen.htm). In these cases, the spool dialog box cannot be suppressed.

-   The GET\_PRINT\_PARAMETERS function module can be used to call the spool dialog box in a program.

When the spool dialog box is called automatically, the SET\_PRINT\_PARAMETERS function module can be used to set standard values. The SET\_PRINT\_PARAMETERS function module mainly has the same import parameters as the GET\_PRINT\_PARAMETERS function module (refer to [Overview of All Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm)) and no export parameters. There is an additional input parameter called FOOT\_LINE that is used when [spooling a screen list](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_screen.htm) to define that a footer is to be printed and that is only taken into account there.

Notes

-   Displaying the spool dialog box using GET\_PRINT\_PARAMETERS is the recommended method for program-controlled spooling, and thereby decouples the dialog from the statements [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapnew-page_print.htm) and [SUBMIT TO SAP SPOOL](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapsubmit_list_options.htm). It is still possible to call the spool dialog box with the latter, however, the functions Back or Cancel cannot be processed properly.

-   The standard values for the spool dialog box must be set before sending the selection screen or list to the screen when the spool dialog box is called automatically. It is recommended that SET\_PRINT\_PARAMETERS only be used at the [INITIALIZATION](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapinitialization.htm) event of an executable program.

-   Using SET\_PRINT\_PARAMETERS only allows the setting those spool parameters that are stored in components of the PRI\_PARAMS structure.


### abenprint_parameters_function.htm

---
title: "Setting Program-Driven Spool Parameters"
description: |
  Spool and archiving parameters can only be set in a program using the following function module: GET_PRINT_PARAMETERS. If the corresponding structure is changed directly and then the parameters in question used in NEW-PAGE PRINT ON or SUBMIT TO SAP-SPOOL, a runtime error occurs. The GET_PRINT_PA
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_function.htm"
abapFile: "abenprint_parameters_function.htm"
keywords: ["do", "if", "case", "class", "abenprint", "parameters", "function"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Spooling Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm) →  [Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters.htm) → 

Setting Program-Driven Spool Parameters

Spool and archiving parameters can only be set in a program using the following function module: GET\_PRINT\_PARAMETERS. If the corresponding structure is changed directly and then the parameters in question used in NEW-PAGE PRINT ON or SUBMIT TO SAP-SPOOL, a runtime error occurs. The GET\_PRINT\_PARAMETERS function module can be used to execute the following functions:

-   Creating a complete set of spool and archiving parameters.

-   Determining the spool parameters that are currently valid during spooling

-   Changing individual spool parameters

-   Interactive querying of the spool parameters in the spool dialog box

The interface parameters for the function module are listed in [Overview of All Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm).

The [spool dialog box](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_window.htm) is displayed by default and can be switched off using the NO\_DIALOG parameter. The values passed to the function module are used as the default values in the spool dialog box and can be overwritten there.

The function module gets all parameters that have not been set from the system, taking some values from the user master record. Dependent parameters are set automatically. If the function module is unable to generate a record with valid spool and archiving parameters, it generates an exception. The generated records are either complete or empty. The VALID export parameter (if the spool dialog box is being used) indicates whether or a complete record could be generated.

Notes

-   For GET\_PRINT\_PARAMETERS, the completeness of the parameter records and the run capability of the spool request are of primary importance. The function module does not carry out a complete consistency test like the spool dialog box. Consistency is only established in cases where it is significant for the run capability of the spool request. Inconsistent entries are partly ignored, partly replaced. For example:

-   The LINE\_SIZE parameter or LINE\_COUNT parameter can be used to set values that are not compatible with the LAYOUT parameter and lead to truncated output. Such inconsistencies are recognized in the spool dialog box.

-   Even if invalid values are passed to DESTINATION, it is still possible to set IMMEDIATELY to "X". The function module replaces the output device with a standard value (LP01) and initializes IMMEDIATELY. This causes the spool system to store the request using the settings that go with the default printer.

-   The GET\_PRINT\_PARAMETERS function module can be called multiple times consecutively. For example, the spool dialog box can be called at the start of a program if the user enters the basic setting. When it is called again, the parameter records created in this way can be passed collectively to the PRI\_PARAMS and ARC\_PARAMS import parameters of the function module and overwritten there. This enables the spooling of wide lists in landscape format or narrow lists in portrait format with otherwise unchanged settings.


### abenprint_parameters_overview.htm

---
title: "Overview of All Spool Parameters"
description: |
  -   Spool Parameters(#abenprint-parameters-overview-1--------archiving-parameters---@ITOC@@ABENPRINT_PARAMETERS_OVERVIEW_2) -   Control Parameters(#abenprint-parameters-overview-3--------output-parameters-of-get--print--parameters---@ITOC@@ABENPRINT_PARAMETERS_OVERVIEW_4) Spool Parameters The fo
version: "7.52"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_overview.htm"
abapFile: "abenprint_parameters_overview.htm"
keywords: ["select", "delete", "do", "if", "case", "class", "data", "abenprint", "parameters", "overview"]
---

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_dynpro_list.htm) →  [Spooling Lists](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint.htm) →  [Spool Parameters](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters.htm) → 

Overview of All Spool Parameters

-   [Spool Parameters](#abenprint-parameters-overview-1--------archiving-parameters---@ITOC@@ABENPRINT_PARAMETERS_OVERVIEW_2)

-   [Control Parameters](#abenprint-parameters-overview-3--------output-parameters-of-get--print--parameters---@ITOC@@ABENPRINT_PARAMETERS_OVERVIEW_4)

Spool Parameters

The following table lists all spool parameters by their associated input parameters in the function modules [GET\_PRINT\_PARAMETERS](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_function.htm) and [SET\_PRINT\_PARAMETERS.](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenprint_parameters_window.htm) The second column shows the label in the spool dialog window. The third column contains the name of the component in the structure PRI\_PARAMS whose content, however, cannot be modified directly in a program.

Input Parameter

Dialog Field

Component

Meaning

IN\_PARAMETERS

\-

\-

Full structure of type PRI\_PARAMS; any single values passed in parallel overwrite the associated component.

ARCHIVE\_MODE

Archive Mode

ARMOD

If "1" print only (default), if "2" archive only, if "3" print and archive.

AUTHORITY

Authorization

PRBER

Authorization value for authorization object S\_SPO\_ACT. This can be used to check whether or not a user is allowed to carry out certain actions on the spool request.

COPIES

Number of copies

PRCOP

Number or printouts, default 1.

COVER\_PAGE

Selection cover page (if "PARAMSEL" passed to MODE)

PRBIG

If 'X', a cover page with the input values of the selection layout is printed, default " ".

DATA\_SET

\-

PRDSN

Template for the name of the spool file, default is empty.

DEFAULT\_SPOOL\_SIZE (GET\_PRINT\_PARAMETERS only)

Spool request has a width of maximum 255 characters

\-

If "X", line break forced after the 255th column, default " ".

DEPARTMENT

Department

PRABT

Department name for the SAP cover page, default taken from user address.

DESTINATION

Output device

PDEST

Name of a printer or fax machine, default taken from user master data.

DRAFT (GET\_PRINT\_PARAMETERS only)

Text only

\-

If "X" only text is printed, default is " ".

EXPIRATION

Retention period

PEXPI

Number of days for which the spool request is retained by the spool system, default is 8.

FOOT\_LINE (SET\_PRINT\_PARAMETERS only)

\-

FOOTL

If "X" footer printed (only if spooling screen lists) whose content can be modified in the spool dialog window under Parameters, default is empty.

HOST\_COVERPAGE

OS cover page

PRUNX

If "X" the operating system cover page is printed, default is " ".

IMMEDIATELY

Time of printing

PRIMM

If "X" the spool request is sent immediately, if "A" the spool request is printed at a later time (only for non-front-end printers), if " " the spool request must be printed manually, default taken from user master data.

LAYOUT

Formatting

PAART

Page format, depending on the output device, different formats with different maximum page lengths and widths can be specified, default defined internally.

LINE\_COUNT

Lines (subproperty of Formatting)

LINCT

Number of lines per page, works like the addition LINE-COUNT in an introductory statement, 0 (unlimited number of lines) is not possible, the maximum number depends on LAYOUT, default defined internally. Overwritten by REPORT if the value "BATCH" is passed for MODE.

LINE\_SIZE

Columns (subproperty of Formatting)

LINSZ

Characters per list line, works like the addition LINE-SIZE in an introductory statement, maximum depends on LAYOUT, default defined internally. Overwritten by REPORT if the value "BATCH" is passed for MODE.

LIST\_NAME

Name

PLIST

The name of the spool request if not printed immediately, default is a combination of the start of the program name from the parameter REPORT and the user name

LIST\_TEXT

Title

PRTXT

Description text for the spool request, appears on the default cover page and is displayed in the output controller instead of LIST\_NAME, default is empty.

NEW\_LIST\_ID

New spool request

PRNEW

If "X" (default) a new spool request is created, otherwise the system attempts to attach the spool request to an existing request, works only if LIST\_NAME, DESTINATION, COPIES, and LAYOUT match and PROTECT\_LIST is empty.

NO\_FRAMES (GET\_PRINT\_PARAMETERS only)

No frame characters

\-

If "X" no frame characters are printed, default is " ".

PRIORITY

Print priority

PRIOT

"1" (high) to "9" (low), default is "1".

PROTECT\_LIST (GET\_PRINT\_PARAMETERS only)

Protection from attachments

\-

If "X" no further requests can be attached to the spool request, default is " ".

RECEIVER

Recipient

PRREC

Recipient name for the SAP cover page, default taken from user address.

RELEASE

Delete immediately after printing

PRREL

If "X" spool request is deleted immediately after printing, otherwise after EXPIRATION, default taken from user master data.

REPORT (GET\_PRINT\_PARAMETERS only)

\-

\-

If MODE is the same as "BATCH", the name of the program to be started must be entered in REPORT. The list lines per page (LINE\_COUNT) and the characters per list line (LINE\_SIZE) are then taken from the introductory program statement of the specified program. Still the default for the first part of the name of the spool request overwritten by LIST\_NAME (the default for this is sy-repid).

SAP\_COVER\_PAGE

SAP cover sheet

PRSAP

If "X" a standard cover page with standard information is created, if "D" (default) the cover page printed depends on the settings of the printer, if " " no cover page is created.

SUPPRESS\_SHADING (GET\_PRINT\_PARAMETERS only)

Colors/shading suppressed in the printout

\-

If "X" colors/shading are suppressed in the printout, default is " ".

TYPE

\-

PTYPE

Type of the spool request.

UC\_DISPLAY\_MODE (GET\_PRINT\_PARAMETERS only)

Character format

\-

Unicode spool output, if "1" characters are printed with the output length one, if "2" all characters are printed in their own output lengths, if "3" all characters are printed with the length two.

WITH\_STRUCTURE (GET\_PRINT\_PARAMETERS only)

Spool list with structure information

\-

If "X" structure information is also printed (for ACC and RTL output), default is " ".

\-

Print All, Print from Page ... to

\-

Restricts the number of pages printed, default is Print All.

Notes

-   The input parameters of GET\_PRINT\_PARAMETERS that do not have a component in the structure PRI\_PARAMS are not passed to a spool request explicitly during NEW-PAGE PRINT ON and SUBMIT TO SAP-SPOOL and are defined internally by the function module instead.

-   Using SET\_PRINT\_PARAMETERS only allows the setting those spool parameters that are stored in components of the PRI\_PARAMS structure.

-   The spool parameters LINE\_COUNT and LINE\_SIZE do not overwrite the additions LINE-COUNT and LINE-SIZE of the introductory statement of a program specified using REPORT if the value "BATCH" is passed to the parameter MODE. In this case, the corresponding input fields in the spool dialog box are not ready for input. If these values exceed the maximum values defined by LAYOUT, the list cannot be spooled.

-   The values of the components of the structure PRI\_PARAMS are usually intended for internal use only and do not always match the values specified directly, such as in the addition LINE-SIZE.

Archiving Parameters

The following table lists all archiving parameters by their associated input parameters in the function modules GET\_PRINT\_PARAMETERS and SET\_PRINT\_PARAMETERS. The second column shows the label in the spool dialog window. The third column contains the name of the component in the structure ARC\_PARAMS whose content, however, cannot be modified directly in a program.

Input Parameter

Dialog Field

Component

Meaning

IN\_ARCHIVE\_PARAMETERS

\-

\-

Full structure of type ARC\_PARAMS, any single values passed in parallel overwrite the associated component.

AR\_OBJECT

Document type

AR\_OBJECT

Document type of the archiving object.

ARCHIVE\_ID

\-

ARCHIVE\_ID

Target archive of the archiving request.

ARCHIVE\_INFO

Information

INFO

Information ID for the archiving request.

ARCHIVE\_TEXT

Text

ARCTEXT

Description text of the archiving request.

SAP\_OBJECT

Object type

SAP\_OBJECT

Object type of the SAP object.

Notes

-   Requests can be archived only if these parameters are specified consistently and in full. Archiving works across all applications. With the exception of certain basic settings, no other actions are required. If spool lists need to be saved specific to an application, some special actions must be taken. For more information, see the ArchiveLink documentation on [SAP Help Portal](http://help.sap.com).

-   When archiving long lists, it may be useful to write index information to the list using [PRINT-CONTROL INDEX-LINE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abapprint-control.htm). This makes it easier to search the archived list at a later date.

Control Parameters

The following table lists the control parameters of the function module GET\_PRINT\_PARAMETERS.

Input Parameter

Meaning

MODE

Possible values "BATCH", "CURRENT", "DEFVALS", "DISPLAY", "PARAMS", "PARAMSEL" (see below)

NO\_DIALOG

If "X" no spool dialog window is displayed

The following table shows the values that can be passed to MODE.

MODE

Effect

"BATCH"

The function module gets spool parameters for a background request. The executable program to be started must be specified in the import parameter REPORT. If this executable program contains the additions LINE-COUNT or LINE-SIZE in the REPORT statement, they are used as non-modifiable values in the spool dialog window. The function Save is displayed on the spool dialog window instead of Print.

"CURRENT"

The function module is used to determine the current spool parameters after spooling has been activated. If nothing is being spooled, the default values are used.

"DEFVALS"

Always gets the default values.

"DISPLAY"

The spool parameters are displayed in the spool dialog box but cannot be changed.

"PARAMS"

Standard setting, the user can choose Print or Cancel on the spool dialog window.

"PARAMSEL"

Like "PARAMS", however the additional checkbox Selection Cover Page appears on the spool dialog window.

Output Parameters of GET\_PRINT\_PARAMETERS

The following table lists the output parameters of the function module GET\_PRINT\_PARAMETERS.

Output Parameter

Meaning

OUT\_PARAMETERS

Set of spool parameters in a structure of the type PRI\_PARAMS. Either complete or empty-

OUT\_ARCHIVE\_PARAMETERS

Set of archiving parameters in a structure of the type ARC\_PARAMS. Either complete or empty-

VALID

If "X", all spool parameters or archiving parameters are present and printing or archiving is possible. If " ", the structures are empty and printing or archiving is not possible. VALID is " " if Cancel is used to exit the spool dialog window.

VALID\_FOR\_SPOOL\_CREATION

If "X", enough spool parameters are available to create a spool request. There is no guarantee, however, that this request can be printed or archived. If " ", the structures are empty and a spool request cannot be created. This is different from VALID only if the spool dialog box is not displayed. If the spool dialog box is displayed, VALID\_FOR\_SPOOL\_CREATION is filled just like VALID.
