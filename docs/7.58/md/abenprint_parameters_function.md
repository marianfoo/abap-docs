  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) →  [Lists - Spool Parameters](javascript:call_link\('abenprint_parameters.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Lists%20-%20Setting%20Program-Driven%20Spool%20Parameters%2C%20ABENPRINT_PARAMETERS_FUNCTION%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20f
or%20improvement:)

Lists - Setting Program-Driven Spool Parameters

Spool and archiving parameters can only be set in a program using the following function module: GET\_PRINT\_PARAMETERS. If the corresponding structures are changed directly and the parameters in question are then used in NEW-PAGE PRINT ON or SUBMIT TO SAP-SPOOL, a runtime error occurs. The GET\_PRINT\_PARAMETERS function module can be used to execute the following functions:

-   Creating a complete set of spool and archiving parameters.
-   Determining the spool parameters that are currently valid during spooling
-   Changing individual spool parameters
-   Interactive querying of the spool parameters in the spool dialog box

The interface parameters for the function module are listed in [Overview of All Spool Parameters](javascript:call_link\('abenprint_parameters_overview.htm'\)).

The [spool dialog box](javascript:call_link\('abenprint_parameters_window.htm'\)) is displayed by default and can be switched off using the parameter NO\_DIALOG. The values passed to the function module are used as the default values in the spool dialog box and can be overwritten there.

The function module gets all parameters that have not been set from the system, taking some values from the user master record. Dependent parameters are set automatically. If the function module is unable to generate a record with valid spool and archiving parameters, it raises an exception. The generated records are either complete or empty. The export parameter VALID indicates whether a complete record could be created if the spool dialog box is used.

Hints

-   For GET\_PRINT\_PARAMETERS, the completeness of the parameter records and the run capability of the spool request are of primary importance. The function module does not perform a complete consistency test like the spool dialog box. Consistency is only established in cases where it is significant for the run capability of the spool request. Inconsistent entries are partly ignored, partly replaced. For example:
    -   The LINE\_SIZE parameter or LINE\_COUNT parameter can be used to set values that are not compatible with the LAYOUT parameter and lead to truncated output. Such inconsistencies are recognized in the spool dialog box.
    -   Even if invalid values are passed to DESTINATION, it is still possible to set IMMEDIATELY to X. The function module replaces the output device with a standard value (LP01) and initializes IMMEDIATELY. This causes the spool system to store the request using the settings that are suitable for the default printer.
-   The GET\_PRINT\_PARAMETERS function module can be called multiple times consecutively. For example, the spool dialog box can be called at the start of a program if the user enters the basic setting. When it is called again, the parameter records created in this way can be passed collectively to the PRI\_PARAMS and ARC\_PARAMS input parameters of the function module and partially overwritten there. This enables the spooling of wide lists in landscape format or narrow lists in portrait format with otherwise unchanged settings.