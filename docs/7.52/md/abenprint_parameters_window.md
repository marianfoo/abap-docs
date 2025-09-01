  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Spooling Lists](javascript:call_link\('abenprint.htm'\)) →  [Spool Parameters](javascript:call_link\('abenprint_parameters.htm'\)) → 

Spool Dialog Box

The spool dialog box makes it possible to interactively determine all spool parameters and checks the input values for consistency and completeness. The call is either automatic or program controlled.

-   The spool dialog box appears automatically if a user chooses Execute and Print on the selection screen, and also when [spooling screen lists](javascript:call_link\('abenprint_screen.htm'\)). In these cases, the spool dialog box cannot be suppressed.

-   The GET\_PRINT\_PARAMETERS function module can be used to call the spool dialog box in a program.

When the spool dialog box is called automatically, the SET\_PRINT\_PARAMETERS function module can be used to set standard values. The SET\_PRINT\_PARAMETERS function module mainly has the same import parameters as the GET\_PRINT\_PARAMETERS function module (refer to [Overview of All Spool Parameters](javascript:call_link\('abenprint_parameters_overview.htm'\))) and no export parameters. There is an additional input parameter called FOOT\_LINE that is used when [spooling a screen list](javascript:call_link\('abenprint_screen.htm'\)) to define that a footer is to be printed and that is only taken into account there.

Notes

-   Displaying the spool dialog box using GET\_PRINT\_PARAMETERS is the recommended method for program-controlled spooling, and thereby decouples the dialog from the statements [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)) and [SUBMIT TO SAP SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)). It is still possible to call the spool dialog box with the latter, however, the functions Back or Cancel cannot be processed properly.

-   The standard values for the spool dialog box must be set before sending the selection screen or list to the screen when the spool dialog box is called automatically. It is recommended that SET\_PRINT\_PARAMETERS only be used at the [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)) event of an executable program.

-   Using SET\_PRINT\_PARAMETERS only allows the setting those spool parameters that are stored in components of the PRI\_PARAMS structure.