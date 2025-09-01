---
title: "Lists - Overview of All Spool Parameters"
description: |
  -   Spool Parameters(#abenprint-parameters-overview-1--------archiving-parameters---@ITOC@@ABENPRINT_PARAMETERS_OVERVIEW_2) -   Control Parameters(#abenprint-parameters-overview-3--------output-parameters-of-get--print--parameters---@ITOC@@ABENPRINT_PARAMETERS_OVERVIEW_4) Spool Parameters The fo
version: "7.55"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprint_parameters_overview.htm"
abapFile: "abenprint_parameters_overview.htm"
keywords: ["select", "delete", "do", "if", "case", "class", "data", "abenprint", "parameters", "overview"]
---

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [SAP GUI User Dialogs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_screens.htm) →  [Classic Lists](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_dynpro_list.htm) →  [Lists - Spool](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprint.htm) →  [Lists - Spool Parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprint_parameters.htm) → 

Lists - Overview of All Spool Parameters

-   [Spool Parameters](#abenprint-parameters-overview-1--------archiving-parameters---@ITOC@@ABENPRINT_PARAMETERS_OVERVIEW_2)

-   [Control Parameters](#abenprint-parameters-overview-3--------output-parameters-of-get--print--parameters---@ITOC@@ABENPRINT_PARAMETERS_OVERVIEW_4)

Spool Parameters

The following table lists all spool parameters by their associated input parameters in the function modules [GET\_PRINT\_PARAMETERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprint_parameters_function.htm) and [SET\_PRINT\_PARAMETERS](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprint_parameters_window.htm). The second column shows the label in the spool dialog window. The third column contains the name of the component in the structure PRI\_PARAMS whose content, however, cannot be modified directly in a program.

Input Parameter

Dialog Field

Component

Meaning

IN\_PARAMETERS

\-

\-

Full structure of type PRI\_PARAMS; any single values passed in parallel overwrite the associated component.

ARCHIVE\_MODE

Archive mode

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

HOST\_COVER\_PAGE

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

Number of lines per page, works like the addition LINE-COUNT in a program-initiating statement, 0 (unlimited number of lines) is not possible, the maximum number depends on LAYOUT, default defined internally. Overwritten by REPORT if the value "BATCH" is passed for MODE.

LINE\_SIZE

Columns (subproperty of Formatting)

LINSZ

Characters per list line, works like the addition LINE-SIZE in a program-initiating statement, maximum depends on LAYOUT, default defined internally. Overwritten by REPORT if the value "BATCH" is passed for MODE.

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

Receiver

PRREC

Receiver name for the SAP cover page, default taken from user address.

RELEASE

Delete immediately after printing

PRREL

If "X" spool request is deleted immediately after printing, otherwise after EXPIRATION, default taken from user master data.

REPORT (GET\_PRINT\_PARAMETERS only)

\-

\-

If MODE is the same as "BATCH", the name of the program to be started must be entered in REPORT. The list lines per page (LINE\_COUNT) and the characters per list line (LINE\_SIZE) are then taken from the program-initiating statement of the specified program. Still the default for the first part of the name of the spool request overwritten by LIST\_NAME (the default for this is the contents of sy-repid).

SAP\_COVER\_PAGE

SAP cover sheet

PRSAP

If "X" a standard cover page with standard information is created, if "D" (default) the cover page printed depends on the settings of the printer, if " " no cover page is created.

SUPPRESS\_SHADING (GET\_PRINT\_PARAMETERS only)

Colors and shading suppressed in the printout

\-

If "X" colors and shading are suppressed in the printout, default is " ".

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

Hints

-   The input parameters of GET\_PRINT\_PARAMETERS that do not have a component in the structure PRI\_PARAMS are not passed to a spool request explicitly during NEW-PAGE PRINT ON and SUBMIT TO SAP-SPOOL and are defined internally by the function module instead.

-   Using SET\_PRINT\_PARAMETERS only allows the setting those spool parameters that are stored in components of the PRI\_PARAMS structure.

-   The spool parameters LINE\_COUNT and LINE\_SIZE do not overwrite the additions LINE-COUNT and LINE-SIZE of the program-initiating statement of a program specified using REPORT if the value "BATCH" is passed to the parameter MODE. In this case, the corresponding input fields in the spool dialog box are not ready for input. If these values exceed the maximum values defined by LAYOUT, the list cannot be spooled.

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

Hints

-   Requests can be archived only if these parameters are specified consistently and in full. Archiving works across all applications. With the exception of certain basic settings, no other actions are required. If spool lists need to be saved specific to an application, some special actions must be taken. For more information, see the ArchiveLink documentation in SAP Help Portal.

-   When archiving long lists, it may be useful to write index information to the list using [PRINT-CONTROL INDEX-LINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapprint-control.htm). This makes it easier to search the archived list at a later date.

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

Set of spool parameters in a structure of the type PRI\_PARAMS. Either complete or empty.

OUT\_ARCHIVE\_PARAMETERS

Set of archiving parameters in a structure of the type ARC\_PARAMS. Either complete or empty.

VALID

If "X", all spool parameters or archiving parameters are present and printing or archiving is possible. If " ", the structures are empty and printing or archiving is not possible. VALID is " " if Cancel is used to exit the spool dialog window.

VALID\_FOR\_SPOOL\_CREATION

If "X", enough spool parameters are available to create a spool request. There is no guarantee, however, that this request can be printed or archived. If " ", the structures are empty and a spool request cannot be created. This is different from VALID only if the spool dialog box is not displayed. If the spool dialog box is displayed, VALID\_FOR\_SPOOL\_CREATION is filled just like VALID.