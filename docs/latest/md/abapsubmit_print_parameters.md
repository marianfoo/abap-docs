---
title: "Syntax"
description: |
  ... SPOOL PARAMETERS pri_params ARCHIVE PARAMETERS arc_params WITHOUT SPOOL DYNPRO... Effect These additions are used to supply the spool request(https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenspool_request_glosry.htm 'Glossary Entry') with spool and archive paramete
version: "latest"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_print_parameters.htm"
abapFile: "abapsubmit_print_parameters.htm"
keywords: ["do", "if", "try", "data", "types", "abapsubmit", "print", "parameters"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_execution.htm) →  [Calling Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_program_call.htm) →  [Calling Executable Programs](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_submit_report.htm) →  [SUBMIT](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit.htm) →  [SUBMIT, list\_options](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_list_options.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20SUBMIT%2C%20spool_options%2C%20ABAPSUBMIT_PRINT_PARAMETERS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

SUBMIT, spool\_options

[Short Reference](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapsubmit_shortref.htm)

Syntax

... SPOOL PARAMETERS pri\_params
    *\[*ARCHIVE PARAMETERS arc\_params*\]*
    WITHOUT SPOOL DYNPRO...

Effect

These additions are used to supply the [spool request](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenspool_request_glosry.htm "Glossary Entry") with spool and archive parameters. The latter are necessary if the spool list is to be archived using [ArchiveLink](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenarchivelink_glosry.htm "Glossary Entry").

The addition SPOOL PARAMETERS passes the [spool parameters](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprint_parameter_glosry.htm "Glossary Entry") in a structure pri\_params of data type PRI\_PARAMS from the ABAP Dictionary. If archiving is specified in pri\_params, the archiving parameters must be passed using the addition ARCHIVE PARAMETERS in a structure arc\_params of data type ARC\_PARAMS from the ABAP Dictionary.

Structures of data types PRI\_PARAMS and ARC\_PARAMS must be supplied by the function module [GET\_PRINT\_PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprint_parameters_function.htm). When the function module is called, either individual spool parameters or all spool parameters can be set in the program and/or a spool dialog box displayed. The function module creates a set of valid spool and archiving parameters in its output parameters for use as pri\_params and arc\_params.

If the structures pri\_params or arc\_params are initial, the spool parameters or archive parameters created by a call of the function modules GET\_PRINT\_PARAMETERS with initial input values are used.

The addition WITHOUT SPOOL DYNPRO suppresses the spool dialog box that is displayed as standard when the addition TO SAP-SPOOL is used.

Hints

-   These additions must always be used as indicated here. It is particularly important that the standard spool dialog box that appears by default is suppressed. If the default spool dialog box is used, inconsistent spool parameters may be passed to the called program if the user exits the GUI window using Cancel. Instead, the spool dialog box can be displayed by executing the function module GET\_PRINT\_PARAMETERS. This function module has an output parameter VALID that indicates the consistency of the created spool parameters.
-   Use of the addition WITHOUT SPOOL DYNPRO without simultaneously passing spool parameters is only allowed outside ABAP objects. The spool parameters are then taken from the user master record as far as possible.
-   Calling the spool dialog box with SUBMIT TO SAP-SPOOL has the disadvantage that the Back function is not available. The system cannot return to in front of this statement after spooling has been switched on by such a statement. A termination can only be achieved using Exit, which terminates the entire program. If Cancel is used to terminate, inconsistent spool parameters can be passed to the program. To disconnect the spool dialog box from switching on spooling, it is recommended that the function module [GET\_PRINT\_PARAMETERS](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenprint_parameters_function.htm) is called.
-   The same [obsolete additions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnew-page_print_obsolete.htm) are available for the statement SUBMIT TO SAP-SPOOL as to the statement [NEW-PAGE PRINT ON](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abapnew-page_print.htm).

Example

Creation of a set of spool parameters with function module GET\_PRINT\_PARAMETERS and passing to a called program.

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters = params
            valid          = valid.
IF valid <> space.
  SUBMIT myreport TO SAP-SPOOL WITHOUT SPOOL DYNPRO
                  SPOOL PARAMETERS params.
ENDIF.