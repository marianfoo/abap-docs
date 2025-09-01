  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete User Dialogs](javascript:call_link\('abengui_obsolete.htm'\)) →  [Obsolete Statements in List Processing](javascript:call_link\('abenlists_obsolete.htm'\)) →  [Obsolete Spooling](javascript:call_link\('abenprinting_obsolete.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Obsolete Specification of Spool Parameters, ABAPNEW-PAGE_PRINT_OBSOLETE, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Obsolete Specification of Spool Parameters

When using the statements

-   [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\))
-   [SUBMIT ... TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\))

to create spool lists, it must be ensured that either the [spool parameters window](javascript:call_link\('abenprint_parameters_window.htm'\)) is displayed or that a consistent set of [spool parameters](javascript:call_link\('abenprint_parameters.htm'\)) is passed. The additions

-   *\[*SPOOL*\]* PARAMETERS
-   ARCHIVE PARAMETERS

of the statements above are used to pass the spool parameters. They use the function module GET\_PRINT\_PARAMETERS to pass filled structures to the SAP spool system. The statements NEW-PAGE PRINT ON NO DIALOG and SUBMIT ... TO SAP-SPOOL WITHOUT SPOOL DYNPRO without simultaneously passing spool parameters produce a syntax error in classes and a syntax warning outside of classes.

As well as these additions, the obsolete additions in the table below also exist. Each of these additions passes only one spool parameter and cannot therefore ensure the consistency and completeness of the passed parameters. These obsolete additions were replaced by the additions *\[*SPOOL*\]* PARAMETERS and ARCHIVE PARAMETERS. The second column of the table specifies, for each obsolete addition, the corresponding input parameter of the function module GET\_PRINT\_PARAMETERS. The required value should be passed to this parameter instead of using the addition. For the meaning of the spool parameters, see [Spool Parameters Overview](javascript:call_link\('abenprint_parameters_overview.htm'\)).

Obsolete Addition

Input Parameters

ARCHIVE MODE arcmode

ARCHIVE\_MODE

COPIES cop

COPIES

COVER PAGE flag (only for SUBMIT)

COVER\_PAGE

COVER TEXT text

LIST\_TEXT

DESTINATION dest

DESTINATION

DATASET EXPIRATION days

EXPIRATION

DEPARTMENT dep

DEPARTMENT

IMMEDIATELY flag

IMMEDIATELY

KEEP IN SPOOL flag

RELEASE

LAYOUT layout

LAYOUT

LINE-COUNT line

LINE\_COUNT

LINE-SIZE col

LINE\_SIZE

LIST AUTHORITY auth

AUTHORITY

LIST DATASET dsn

DATA\_SET

LIST NAME name

LIST\_NAME

NEW LIST IDENTIFICATION flag

NEW\_LIST\_ID

RECEIVER user

RECEIVER

SAP COVER PAGE mode

SAP\_COVER\_PAGE

flag expects a single-character text field, where a blank character activates the parameter and any other character deactivates the parameter. KEEP IN SPOOL has the reverse semantics of the parameter RELEASE of the function module. This means that a blank character passes an X to the function module. In all other cases, the parameters correspond to the possible values for the [input parameters](javascript:call_link\('abenprint_parameters_overview.htm'\)) of the function module.