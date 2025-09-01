# ABAP - Keyword Documentation / ABAP - Programming Language / SAP GUI User Dialogs / Classic Lists / Lists - Spool

Included pages: 14



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation 7.57](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenprint.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint.htm)
- [abenprint_on_off.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_on_off.htm)
- [abenprint_spool.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_spool.htm)
- [abenprint_parameters_window.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_window.htm)
- [abenprint_parameters_function.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_function.htm)
- [abenprint_parameters_overview.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)
- [abenprint_parameters.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters.htm)
- [abenprint_control.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_control.htm)
- [abapset_margin.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_margin.htm)
- [abapprint-control.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control.htm)
- [abenprint_screen.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_screen.htm)
- [abenprint_list_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_list_abexa.htm)

**Bundle Contains**: 12 documentation pages
**Version**: ABAP 7.57
**Generated**: 2025-09-01T11:25:45.276Z

---

### abenprint.htm

> **📖 Official SAP Documentation**: [abenprint.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool, ABENPRINT, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for
 improvement:)

Lists - Spool

The "spooling" of lists means the list output is not passed to the [list buffer](javascript:call_link\('abenlist_buffer_glosry.htm'\) "Glossary Entry") for [screen lists](javascript:call_link\('abenscreen_list_glosry.htm'\) "Glossary Entry") and it is passed page by page to the [SAP spool system](javascript:call_link\('abensap_spool_system_glosry.htm'\) "Glossary Entry") instead. After a page has been passed, it is deleted from the ABAP runtime framework and only exists in the SAP spool system.

The size of a spool list is therefore only limited by the intake capacity of the spool system and can become very large. On the other hand, when spool lists are created, it is not possible to refer to previous pages.

Each spooling of list output is linked to a [spool request](javascript:call_link\('abenspool_request_glosry.htm'\) "Glossary Entry"). The list pages that are output for a spool request comprise a [spool list](javascript:call_link\('abenspool_list_glosry.htm'\) "Glossary Entry"). The spool list of a spool request can be

-   stored in the spool system,
-   printed on a printer, or
-   archived using [ArchiveLink](javascript:call_link\('abenarchivelink_glosry.htm'\) "Glossary Entry").

For the spooling of lists, both the activation and deactivation of spooling and the association with spool requests are important.

-   [Switching Spooling On and Off](javascript:call_link\('abenprint_on_off.htm'\))
-   [Spool List Levels and Spool Requests](javascript:call_link\('abenprint_spool.htm'\))

The following topics also play a role in spooling lists:

-   [Spool Parameters](javascript:call_link\('abenprint_parameters.htm'\))
-   [Spool Control](javascript:call_link\('abenprint_control.htm'\))
-   [Spooling Screen Lists](javascript:call_link\('abenprint_screen.htm'\))

Hint

Separate solutions are provided for form-based output of data, instead of spool lists.

Continue
[Lists - Switching Spooling On and Off](javascript:call_link\('abenprint_on_off.htm'\))
[Lists - Spool List Levels and Spool Requests](javascript:call_link\('abenprint_spool.htm'\))
[Lists - Spool Parameters](javascript:call_link\('abenprint_parameters.htm'\))
[Lists - Spool Control](javascript:call_link\('abenprint_control.htm'\))
[Lists - Spooling Screen Lists](javascript:call_link\('abenprint_screen.htm'\))
![Example](exa.gif "Example") [Lists - Spool](javascript:call_link\('abenprint_list_abexa.htm'\))



**📖 Source**: [abenprint.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint.htm)

### abenprint_on_off.htm

> **📖 Official SAP Documentation**: [abenprint_on_off.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_on_off.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Switching Spooling On and Off, ABENPRINT_ON_OFF, 757%0D%0A%0D%0AError:%0D%0A%
0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Lists - Switching Spooling On and Off

If spooling is switched off, all list output is written to the list buffer for the current screen list. When spooling is switched on, a spool list is created. Spooling can be switched on as follows:

-   Using the statement [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)).
-   Choosing the function Execute + Print on the [standard selection screen](javascript:call_link\('abenstandard_selscreen_glosry.htm'\) "Glossary Entry") of an executable program.
-   Calling an executable program with the addition [TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)) of the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).
-   Scheduling an executable program in a background job using the additions [VIA JOB](javascript:call_link\('abapsubmit_via_job.htm'\)) and [TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)) of the statement [SUBMIT](javascript:call_link\('abapsubmit.htm'\)).

If NEW-PAGE PRINT ON is used, spooling is switched on explicitly in the program. With the other three options, spooling is switched on from the start of execution of an executable program. Switching on spooling opens a new [spool list level](javascript:call_link\('abenspool_list_level_glosry.htm'\) "Glossary Entry").

Only spooling switched on with NEW-PAGE PRINT ON can be switched off again using NEW-PAGE PRINT OFF. Spooling that is switched on at the start of a program cannot be switched off within this same program. In particular, spooling is always switched on when executing a program in [background processing](javascript:call_link\('abenbackround_processing_glosry.htm'\) "Glossary Entry").

Examples   

Example

Switches on spooling explicitly.

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters        = params
            valid                 = valid.
IF valid <> space.
  NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.
  WRITE / ...
  NEW-PAGE PRINT OFF.
ENDIF.

Example

Switching optical archiving on explicitly.

DATA: pri\_params TYPE pri\_params,
      arc\_params TYPE arc\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters         = pri\_params
            out\_archive\_parameters = arc\_params
            valid                 = valid.
IF valid <> space.
  NEW-PAGE PRINT ON PARAMETERS         pri\_params
                    ARCHIVE PARAMETERS arc\_params NO DIALOG.
  PRINT-CONTROL INDEX-LINE '   '.
  WRITE / ....
  NEW-PAGE PRINT OFF.
ENDIF.

Example

Calling the program

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  IMPORTING out\_parameters        = params
            valid                 = valid.
IF valid <> space.
  SUBMIT myreport TO SAP-SPOOL WITHOUT SPOOL DYNPRO
                  SPOOL PARAMETERS params.
ENDIF.

Example

Scheduling a background job.

DATA: params TYPE pri\_params,
      valid  TYPE c.
CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
  EXPORTING mode                  = 'BATCH'
            report                = 'MYREPORT'
  IMPORTING out\_parameters        = params
            valid                 = valid.
IF valid <> space.
  CALL FUNCTION 'JOB\_OPEN' ....  EXPORTING jobcount ...
  SUBMIT myreport VIA JOB 'MY\_JOB' NUMBER jobcount
         TO SAP-SPOOL WITHOUT SPOOL DYNPRO
            SPOOL PARAMETERS params.
  CALL FUNCTION 'JOB\_CLOSE' ...
ENDIF.



**📖 Source**: [abenprint_on_off.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_on_off.htm)

### abenprint_spool.htm

> **📖 Official SAP Documentation**: [abenprint_spool.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_spool.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool List Levels and Spool Requests, ABENPRINT_SPOOL, 757%0D%0A%0D%0AError:%
0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Lists - Spool List Levels and Spool Requests

Every output to a spool list is assigned to exactly one spool request. For every spool request, [spool parameters](javascript:call_link\('abenprint_parameters.htm'\)) are specified that can no longer be changed. Spool lists can be stacked in spool list levels. A spool list level always has exactly one spool request assigned to it.

-   [Spool List Levels](#abenprint-spool-1-------open-spool-requests---@ITOC@@ABENPRINT_SPOOL_2)
-   [Close Spool Requests](#abenprint-spool-3---spool-list-levels-----the-following-operations-create-a-new-spool-list-level-------choosing-execute---print-on-the-selection-screen-----program-call-with--submit-to-sap-spool--javascript-call-link---abapsubmit-list-options-htm---------executing-a-program-in-a-background-job------dynpro-sequence--javascript-call-link---abendynpro-sequence-glosry-htm-----glossary-entry---call-using--call-screen--javascript-call-link---abapcall-screen-htm-----if-a-spool-request-is-already-open------executing-the-statement--new-page-print-on--javascript-call-link---abapnew-page-print-htm------this-statement--however--does-not-create-an-arbitrarily-stackable-spool-list-level---------------in-a-spool-list-level-created-with-new-page-print-on--no-other-spool-list-level-can-be-created-with-new-page-print-on--however--the-other-operations-for-creating-spool-list-levels-are-still-valid--if-the-addition-new-section-is-used-in-new-page-print-on--the-existing-request-is-used-again-or-it-is-closed-implicitly-before-a-new-one-is-opened----------in-a-spool-list-level-not-created-with-new-page-print-on-or-while-creating-a-screen-list--no-more-than-one-spool-list-level-can-be-created-using-new-page-print-on-----------a-spool-list-level-created-with-new-page-print-on-can-thus-be-stacked-only-on-a-spool-list-level-that-was-not-created-with-new-page-print-on-or-stacked-when-a-screen-list-was-created--------up-to-20-spool-list-levels-can-be-stacked---open-spool-requests-----the-first-output-statement-within-a-spool-list-level-opens-a-new-spool-request-whose-number-is-placed-into-system-field-sy-spono--if-another-spool-request-is-already-open--it-remains-open-and-is-used-again-after-the-spool-list-level-has-been-exited--in-a-spool-list-level-that-has-been-created-by-calling-a-dynpro-sequence--the-spool-request-inherits-the-spool-parameters-of-the-preceding-spool-request--in-all-other-cases--the-explicitly-specified-spool-parameters-apply---close-spool-requests-----when-leaving-a-spool-list-level-that-was-not-opened-with-new-page-print-on--that-is--at-the-end-of-the-program-or-when-leaving-a-dynpro-sequence--the-spool-request-associated-with-the-spool-list-level-is-closed--if-a-spool-request-stacked-on-the-spool-list-level-with-new-page-print-on-has-not-yet-been-closed-using-new-page-print-off--it-is-also-closed--subsequent-output-statements-continue-to-write-to-the-spool-list-of-the-previous-spool-request-or-to-the-current-screen-list---the-statement-new-page-print-off-closes-only-spool-requests-for-which-spooling-was-activated-using-new-page-print-on--if-after-that-no-previous-spool-request-is-open--spooling-is-switched-off-again--that-is--subsequent-output-statements-continue-to-write-to-the-screen-list--if-a-previous-spool-request-existed--spooling-remains-activated-and-the-output-is-again-written-into-its-spool-list--new-page-print-off-is-ignored-by-spool-requests-not-opened-using-new-page-print-on---after-a-spool-request-is-closed--the-number-of-the-closed-spool-request-remains-in-system-field-sy-spono-until-an-output-statement-writes-to-a-spool-list-again--this-may-be-a-new-spool-list-or-the-list-of-a-previous-spool-request--if-after-closing-a-spool-request-a-previous-spool-request-exists--the-number-in-sy-spono-differs-from-the-number-of-that-request-until-another-output-into-its-spool-list-is-performed---hint--it-is-best-always-to-close-a-spool-request-that-was-opened-using-new-page-print-on-explicitly-using-new-page-print-off--before-it-is-closed-implicitly-at-the-end-of-the-program-or-when-leaving-a-dynpro-sequence---executable-example---lists--spooling--javascript-call-link---abenprint-list-abexa-htm------------abenprint-parameters-htm-------------as-abap-release-757---copyright-2023-sap-se--all-rights-reserved----abap---keyword-documentation--javascript-call-link---abenabap-htm---------abap---programming-language--javascript-call-link---abenabap-reference-htm---------sap-gui-user-dialogs--javascript-call-link---abenabap-screens-htm---------classic-lists--javascript-call-link---abenabap-dynpro-list-htm---------lists---spool--javascript-call-link---abenprint-htm---------------mail-gif-object-mail-gif-sap-language-en--feedback-mail-for-displayed-topic---mail-feedback--mailto-f1-helpsap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool Parameters, ABENPRINT_PARAMETERS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Lists - Spool Parameters

For every [spool request](javascript:call_link\('abenprint_spool.htm'\)), spool parameters must be defined that are used to format the spool list when the list is created, and to control the request.

In the ABAP statements [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)) and [SUBMIT TO SAP-SPOOL](javascript:call_link\('abapsubmit_print_parameters.htm'\)) the spool parameters are specified in a structure of type PRI\_PARAMS from the ABAP Dictionary. Spool parameters can be enhanced by archiving parameters if the data of the spool request is to be archived using ArchiveLink. To do this, optical archiving using [ArchiveLink](javascript:call_link\('abenarchivelink_glosry.htm'\) "Glossary Entry") is switched on (archiving mode 2 or 3) in the spool parameters. Archiving parameters are specified in a structure of type ARC\_PARAMS from the ABAP Dictionary.

The spool parameters are specified either explicitly or determined implicitly. The end user can make an interactive entry in the spool dialog box or the spool parameters can be set in a program-driven way.

-   [Spool Dialog Box](javascript:call_link\('abenprint_parameters_window.htm'\))
-   [Setting Program-Driven Spool Parameters](javascript:call_link\('abenprint_parameters_function.htm'\))
-   [Overview of All Spool Parameters](javascript:call_link\('abenprint_parameters_overview.htm'\))

Hint

The content of the structures PRI\_PARAMS and ARC\_PARAMS cannot be modified directly in programs and only the function module GET\_PRINT\_PARAMETERS can be used for this.

Continue
[Lists - Spool Dialog Box](javascript:call_link\('abenprint_parameters_window.htm'\))
[Lists - Setting Program-Driven Spool Parameters](javascript:call_link\('abenprint_parameters_function.htm'\))
[Lists - Overview of All Spool Parameters](javascript:call_link\('abenprint_parameters_overview.htm'\))



**📖 Source**: [abenprint_spool.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_spool.htm)

### abenprint_parameters_window.htm

> **📖 Official SAP Documentation**: [abenprint_parameters_window.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_window.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) →  [Lists - Spool Parameters](javascript:call_link\('abenprint_parameters.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool Dialog Box, ABENPRINT_PARAMETERS_WINDOW, 757%0D%0A%0D%0AError:%0D%0A%0D
%0A%0D%0A%0D%0ASuggestion for improvement:)

Lists - Spool Dialog Box

The spool dialog box makes it possible to interactively determine all spool parameters and checks the input values for consistency and completeness. The call is either automatic or program controlled.

-   The spool dialog box appears automatically if a user chooses Execute and Print on the selection screen, and also when [spooling screen lists](javascript:call_link\('abenprint_screen.htm'\)). In these cases, the spool dialog box cannot be suppressed.
-   The function module GET\_PRINT\_PARAMETERS can be used to call the spool dialog box in a program-driven way.

When the spool dialog box is called automatically, the SET\_PRINT\_PARAMETERS function module can be used to set standard values. The function module SET\_PRINT\_PARAMETERS mainly has the same input parameters as the function module GET\_PRINT\_PARAMETERS (see [Overview of All Spool Parameters](javascript:call_link\('abenprint_parameters_overview.htm'\))) and no output parameters. An additional input parameter called FOOT\_LINE is used when [spooling a screen list](javascript:call_link\('abenprint_screen.htm'\)) to specify the output of a footer and is only respected here.

Hints

-   Displaying the spool dialog box using GET\_PRINT\_PARAMETERS is the recommended method for program-driven spooling, and thereby decouples the dialog from the statements [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)) and [SUBMIT TO SAP SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)). It is still possible to call the spool dialog box with the latter, however, the functions Back or Cancel cannot be processed properly.
-   The standard values for the spool dialog box must be set before sending the selection screen or list to the screen when the spool dialog box is called automatically. It is advisable to use SET\_PRINT\_PARAMETERS only at the [INITIALIZATION](javascript:call_link\('abapinitialization.htm'\)) event of an executable program.
-   Using SET\_PRINT\_PARAMETERS only allows the setting those spool parameters that are stored in components of the PRI\_PARAMS structure.



**📖 Source**: [abenprint_parameters_window.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_window.htm)

### abenprint_parameters_function.htm

> **📖 Official SAP Documentation**: [abenprint_parameters_function.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_function.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) →  [Lists - Spool Parameters](javascript:call_link\('abenprint_parameters.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Setting Program-Driven Spool Parameters, ABENPRINT_PARAMETERS_FUNCTION, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

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



**📖 Source**: [abenprint_parameters_function.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_function.htm)

### abenprint_parameters_overview.htm

> **📖 Official SAP Documentation**: [abenprint_parameters_overview.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) →  [Lists - Spool Parameters](javascript:call_link\('abenprint_parameters.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Overview of All Spool Parameters, ABENPRINT_PARAMETERS_OVERVIEW, 757%0D%0A%0D
%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Lists - Overview of All Spool Parameters

-   [Spool Parameters](#abenprint-parameters-overview-1-------archiving-parameters---@ITOC@@ABENPRINT_PARAMETERS_OVERVIEW_2)
-   [Control Parameters](#abenprint-parameters-overview-3-------output-parameters-of-get--print--parameters---@ITOC@@ABENPRINT_PARAMETERS_OVERVIEW_4)

Spool Parameters   

The following table lists all spool parameters by their associated input parameters in the function modules [GET\_PRINT\_PARAMETERS](javascript:call_link\('abenprint_parameters_function.htm'\)) and [SET\_PRINT\_PARAMETERS](javascript:call_link\('abenprint_parameters_window.htm'\)). The second column shows the label in the spool dialog box. The third column contains the name of the component in the structure PRI\_PARAMS whose content, however, cannot be modified directly in a program.

Input Parameter

Dialog Field

Component

Meaning

IN\_PARAMETERS

\-

\-

Entire structure of type PRI\_PARAMS; single values passed in parallel overwrite the associated component.

ARCHIVE\_MODE

Archive mode

ARMOD

If 1 print only (default), if 2 archive only, if 3 print and archive.

AUTHORITY

Authorization

PRBER

Authorization value for authorization object S\_SPO\_ACT. This can be used to check whether a user is allowed to perform certain actions on the spool request.

COPIES

Number of copies

PRCOP

Number or printouts, default 1.

COVER\_PAGE

Selection cover page (if PARAMSEL passed to MODE)

PRBIG

If X, a cover page with the input values of the selection layout is printed, default blank.

DATA\_SET

\-

PRDSN

Template for the name of the spool file, default is empty.

DEFAULT\_SPOOL\_SIZE (GET\_PRINT\_PARAMETERS only)

Spool request has a width of maximum 255 characters

\-

If X, line break forced after the 255th column, default blank.

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

If X only text is output, default is blank.

EXPIRATION

Retention period

PEXPI

Number of days for which the spool request is retained by the spool system, default is 8.

FOOT\_LINE (SET\_PRINT\_PARAMETERS only)

\-

FOOTL

If X footer is output (only when spooling screen lists) whose content can be modified in the spool dialog box under Parameters; default is empty.

HOST\_COVER\_PAGE

OS cover page

PRUNX

If X the operating system cover page is output; default is blank.

IMMEDIATELY

Time of printing

PRIMM

If X the spool request is sent immediately, if A the spool request is printed at a later time (only for non-front-end printers), if blank the spool request must be printed manually, default taken from user master data.

LAYOUT

Formatting

PAART

Page format; depending on the output device, different formats with different maximum page lengths and widths can be specified, default is set internally.

LINE\_COUNT

Lines (subproperty of Formatting)

LINCT

Number of lines per page; works like the addition LINE-COUNT in a program-initiating statement; 0 (unlimited number of lines) is not possible; the maximum number depends on LAYOUT; default is set internally. Overwritten by REPORT if the value BATCH is passed for MODE.

LINE\_SIZE

Columns (subproperty of Formatting)

LINSZ

Characters per list line; works like the addition LINE-SIZE in a program-initiating statement; maximum depends on LAYOUT; default is set internally. Overwritten by REPORT if the value BATCH is passed for MODE.

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

If X (default) a new spool request is created, otherwise the system attempts to attach the spool request to an existing request, works only if LIST\_NAME, DESTINATION, COPIES, and LAYOUT match and PROTECT\_LIST is empty.

NO\_FRAMES (GET\_PRINT\_PARAMETERS only)

No frame characters

\-

If X no frame characters are printed, default is blank.

PRIORITY

Print priority

PRIOT

1 (high) to (low), default is 1.

PROTECT\_LIST (GET\_PRINT\_PARAMETERS only)

Protection from attachments

\-

If X no further requests can be attached to the spool request, default is blank.

RECEIVER

Receiver

PRREC

Receiver name for the SAP cover page, default is user name.

RELEASE

Delete immediately after printing

PRREL

If X, spool request is deleted immediately after output, else after EXPIRATION; default taken from user defaults.

REPORT (GET\_PRINT\_PARAMETERS only)

\-

\-

If MODE is the same as BATCH, the name of the program to be started must be specified in REPORT. The list lines per page (LINE\_COUNT) and the characters per list line (LINE\_SIZE) are then taken from the program-initiating statement of the specified program. Still the default for the first part of the name of the spool request overwritten by LIST\_NAME (the default for this is the content of sy-repid).

SAP\_COVER\_PAGE

SAP cover sheet

PRSAP

If X a standard cover page with standard information is created, if D (default) the cover page printed depends on the settings of the printer, if blank no cover page is created.

SUPPRESS\_SHADING (GET\_PRINT\_PARAMETERS only)

Colors and shading suppressed in the printout

\-

If X colors and shading are suppressed in the printout, default is blank.

TYPE

\-

PTYPE

Type of the spool request.

UC\_DISPLAY\_MODE (GET\_PRINT\_PARAMETERS only)

Character format

\-

Unicode spool output; if 1, characters are output w the output length one; if 2, all characters are printed in their output lengths; if 3, all characters are printed with the length

WITH\_STRUCTURE (GET\_PRINT\_PARAMETERS only)

Spool list with structure information

\-

If X structure information is also printed (for ACC and RTL output), default is blank.

\-

Print All, Print from Page ... to

\-

Restricts the number of pages printed, default is Print All.

Hints

-   The input parameters of GET\_PRINT\_PARAMETERS that do not have a component in the structure PRI\_PARAMS are not passed to a spool request explicitly during NEW-PAGE PRINT ON and SUBMIT TO SAP-SPOOL and are defined internally by the function module instead.
-   Using SET\_PRINT\_PARAMETERS only allows the setting those spool parameters that are stored in components of the PRI\_PARAMS structure.
-   The spool parameters LINE\_COUNT and LINE\_SIZE do not overwrite the additions LINE-COUNT and LINE-SIZE of the program-initiating statement of a program specified using REPORT if the value BATCH is passed to the parameter MODE. In this case, the corresponding input fields in the spool dialog box are not ready for input. If these values exceed the maximum values defined by LAYOUT, the list cannot be spooled.
-   The values of the components of the structure PRI\_PARAMS are usually intended for internal use only and do not always match the values specified directly, such as in the addition LINE-SIZE.

Archiving Parameters   

The following table lists all archiving parameters sorted by their associated input parameters in the function modules GET\_PRINT\_PARAMETERS and SET\_PRINT\_PARAMETERS. The second column contains the label in the spool dialog box. The third column contains the name of the component in the structure ARC\_PARAMS whose content, however, cannot be modified directly in a program.

Input Parameter

Dialog Field

Component

Meaning

IN\_ARCHIVE\_PARAMETERS

\-

\-

Entire structure of type ARC\_PARAMS, any single values passed in parallel overwrite the associated component.

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

-   Requests can be archived only if these parameters are specified consistently and completely. Archiving works across all applications. Apart from certain basic settings, no other actions are required. If spool lists are to be stored on an application-specific basis, some special actions must be taken. For more information, see the documentation ArchiveLink in SAP Help Portal.
-   When archiving long lists, it may be useful to write index information to the list using [PRINT-CONTROL INDEX-LINE](javascript:call_link\('abapprint-control.htm'\)). This makes it easier to search the archived list later on.

Control Parameters   

The following table lists the control parameters of the function module GET\_PRINT\_PARAMETERS.

Input Parameter

Meaning

MODE

Possible values BATCH, CURRENT, DEFVALS, DISPLAY, PARAMS, PARAMSEL (see below)

NO\_DIALOG

If X no spool dialog box is displayed

The following table shows the values that can be passed to MODE.

MODE

Effect

BATCH

The function module gets spool parameters for a background request. The executable program to be started must be specified in the input parameter REPORT. If this executable program contains the additions LINE-COUNT or LINE-SIZE in the REPORT statement, they are used as non-modifiable values in the spool dialog box. The function Save is displayed on the spool dialog box instead of Print.

CURRENT

The function module is used to determine the current spool parameters after spooling has been activated. If nothing is being spooled, the default values are returned.

DEFVALS

Always returns the default values.

DISPLAY

The spool parameters are displayed in the spool dialog box but cannot be changed.

PARAMS

Standard setting, the user can choose Print or Cancel on the spool dialog box.

PARAMSEL

Like PARAMS, however the additional checkbox Selection Cover Page appears on the spool dialog box.

Output Parameters of GET\_PRINT\_PARAMETERS   

The following table lists the output parameters of the function module GET\_PRINT\_PARAMETERS.

Output Parameter

Meaning

OUT\_PARAMETERS

Set of spool parameters in a structure of the type PRI\_PARAMS. Either complete or empty.

OUT\_ARCHIVE\_PARAMETERS

Set of archiving parameters in a structure of the type ARC\_PARAMS. Either complete or empty.

VALID

If X, all spool parameters or archiving parameters are complete and printing or archiving is possible. If blank, the structures are empty, and printing or archiving is not possible. VALID is blank if Cancel is used to exit the spool dialog box.

VALID\_FOR\_SPOOL\_CREATION

If X, enough spool parameters are available to create a spool request. There is no guarantee, however, that this request can be printed or archived. If blank, the structures a empty, and a spool request cannot be created. This is different from VALID only if the spool dialog box is not displayed. If the spool dialog box is displayed, VALID\_FOR\_SPOOL\_CREATION is filled just like VALID.



**📖 Source**: [abenprint_parameters_overview.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters_overview.htm)

### abenprint_parameters.htm

> **📖 Official SAP Documentation**: [abenprint_parameters.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool Parameters, ABENPRINT_PARAMETERS, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%
0A%0D%0ASuggestion for improvement:)

Lists - Spool Parameters

For every [spool request](javascript:call_link\('abenprint_spool.htm'\)), spool parameters must be defined that are used to format the spool list when the list is created, and to control the request.

In the ABAP statements [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)) and [SUBMIT TO SAP-SPOOL](javascript:call_link\('abapsubmit_print_parameters.htm'\)) the spool parameters are specified in a structure of type PRI\_PARAMS from the ABAP Dictionary. Spool parameters can be enhanced by archiving parameters if the data of the spool request is to be archived using ArchiveLink. To do this, optical archiving using [ArchiveLink](javascript:call_link\('abenarchivelink_glosry.htm'\) "Glossary Entry") is switched on (archiving mode 2 or 3) in the spool parameters. Archiving parameters are specified in a structure of type ARC\_PARAMS from the ABAP Dictionary.

The spool parameters are specified either explicitly or determined implicitly. The end user can make an interactive entry in the spool dialog box or the spool parameters can be set in a program-driven way.

-   [Spool Dialog Box](javascript:call_link\('abenprint_parameters_window.htm'\))
-   [Setting Program-Driven Spool Parameters](javascript:call_link\('abenprint_parameters_function.htm'\))
-   [Overview of All Spool Parameters](javascript:call_link\('abenprint_parameters_overview.htm'\))

Hint

The content of the structures PRI\_PARAMS and ARC\_PARAMS cannot be modified directly in programs and only the function module GET\_PRINT\_PARAMETERS can be used for this.

Continue
[Lists - Spool Dialog Box](javascript:call_link\('abenprint_parameters_window.htm'\))
[Lists - Setting Program-Driven Spool Parameters](javascript:call_link\('abenprint_parameters_function.htm'\))
[Lists - Overview of All Spool Parameters](javascript:call_link\('abenprint_parameters_overview.htm'\))



**📖 Source**: [abenprint_parameters.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_parameters.htm)

### abenprint_control.htm

> **📖 Official SAP Documentation**: [abenprint_control.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_control.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool Control, ABENPRINT_CONTROL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Lists - Spool Control

Configuring the Upper and Left Margins   

The statement [SET MARGIN](javascript:call_link\('abapset_margin.htm'\)) can be used to define the upper and left margins of a spool list.

Archiving Information in Spool Lists   

When spooling is active, the statement [PRINT-CONTROL](javascript:call_link\('abapprint-control.htm'\)) can be used to write formatting information for optical archiving to the spool system.

Obsolete Formatting of Spool Lists   

When spooling is active, an [obsolete variant](javascript:call_link\('abapprint-control_obsolete.htm'\)) of the statement PRINT-CONTROL can be used to write control statements for output devices (printers) to the spool system.

Continue
[SET MARGIN](javascript:call_link\('abapset_margin.htm'\))
[PRINT-CONTROL](javascript:call_link\('abapprint-control.htm'\))



**📖 Source**: [abenprint_control.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_control.htm)

### abapset_margin.htm

> **📖 Official SAP Documentation**: [abapset_margin.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_margin.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) →  [Lists - Spool Control](javascript:call_link\('abenprint_control.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: SET MARGIN, ABAPSET_MARGIN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion f
or improvement:)

SET MARGIN

[Short Reference](javascript:call_link\('abapset_margin_shortref.htm'\))

Syntax

SET MARGIN macol *\[*marow*\]*.

Effect

This statement defines the left margin of a spool list as the columns specified in macol, and the upper margin as the rows specified in marow, and sets the system fields sy-macol and sy-marow to these values. macol and marow expect data objects with the type i, with values within the current page width and page length. If macol or marow contain invalid values, the associated operand is ignored.

The set values apply to the current page and all subsequent pages until the next SET MARGIN statement. If more than one SET MARGIN statement is specified on a page, the last one applies.

SET MARGIN is ignored when screen lists are displayed. The set margins are only inserted in the list as blanks or empty lines if a list page is sent to the SAP spool system. This applies to spool lists created using [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)), [SUBMIT TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)), and by the selection of Execute and Print on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). SET MARGIN also applies if a screen list is spooled while it is being displayed, when Print (function code PRI) is selected.

Hint

For printers with an active list driver, margins can be defined in millimeters in the spool dialog. When pages are sent from the spool system to the printer, the pages, including the margins set using SET MARGIN, are positioned within these margins.



**📖 Source**: [abapset_margin.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapset_margin.htm)

### abapprint-control.htm

> **📖 Official SAP Documentation**: [abapprint-control.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) →  [Lists - Spool Control](javascript:call_link\('abenprint_control.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: PRINT-CONTROL, ABAPPRINT-CONTROL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASugges
tion for improvement:)

PRINT-CONTROL

[Short Reference](javascript:call_link\('abapprint-control_shortref.htm'\))

Syntax

PRINT-CONTROL INDEX-LINE index\_line.

Effect

In spool lists, this statement creates index entries for optical archiving using [ArchiveLink](javascript:call_link\('abenarchivelink_glosry.htm'\) "Glossary Entry"). This applies only to spool lists created using [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)), [SUBMIT TO SAP-SPOOL](javascript:call_link\('abapsubmit_list_options.htm'\)), and when selecting Execute and Print on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry"). It does not work for screen lists spooled during display by selecting Print (function code PRI).

This statement inserts the content of the data object index\_line into the current spool list as an index line. index\_line must be a flat character-like data object. If the [list cursor](javascript:call_link\('abenlist_cursor_glosry.htm'\) "Glossary Entry") of an output statement has been set in the current list line, the index line is inserted after the end of the line. Index lines can be used for the following purposes:

-   As DAIN lines whose structure is defined in DKEY lines. Here, they improve the performance of searches in archived spool lists.
-   As DARC lines, they enable hypertext links to other stored objects.

An index line is sent to the spool system as a part of the spool list and is displayed there, although not included in the print output. When a list is archived using [ArchiveLink](javascript:call_link\('abenarchivelink_glosry.htm'\) "Glossary Entry"), the spool system divides it into a data file and a description file. The data file contains the actual spool lists, and the description file contains the index lines.

Hint

To enable the associated ArchiveLink search function to be used when an archived spool list is displayed or for the links to work, the index lines must contain certain information that must follow a fixed naming convention and be described in the ArchiveLink documentation.

Example

Inserting index lines in a list of square numbers. After every hundredth line, index lines for archiving are created (DAIN lines) using the statement PRINT-CONTROL. The structure of the DAIN lines is defined at the start of the list in two additional index lines (DKEY lines). If the user selects Execute and Print on the [selection screen](javascript:call_link\('abenselection_screen_glosry.htm'\) "Glossary Entry") and archives the list in the spool dialog, the archived list can be searched for the indexes. For more information, see the ArchiveLink documentation.

PARAMETERS number TYPE i.
DATA: index  TYPE i,
      square TYPE decfloat16,
      numb   TYPE i,
      num    TYPE c LENGTH 4,
      dkey   TYPE c LENGTH 100,
      dain   TYPE c LENGTH 100.
dkey ='DKEYIndex'.
dkey+44 = '0'.
dkey+47 = '3'.
PRINT-CONTROL INDEX-LINE dkey.
CLEAR dkey.
dkey ='DKEYNumber'.
dkey+44 = '3'.
dkey+47 = '4'.
PRINT-CONTROL INDEX-LINE dkey.
index = 0.
DO number TIMES.
  index += 1.
  IF index = 100.
    numb = sy-index / 100.
    WRITE numb TO num LEFT-JUSTIFIED.
    dain = 'DAIN' && 'IDX' && num.
    PRINT-CONTROL INDEX-LINE dain.
    index = 0.
  ENDIF.
  square = sy-index \*\* 2.
  WRITE: / sy-index, square STYLE cl\_abap\_math=>scientific.
ENDDO.



**📖 Source**: [abapprint-control.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapprint-control.htm)

### abenprint_control.htm

> **📖 Official SAP Documentation**: [abenprint_control.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_control.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool Control, ABENPRINT_CONTROL, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%
0ASuggestion for improvement:)

Lists - Spool Control

Configuring the Upper and Left Margins   

The statement [SET MARGIN](javascript:call_link\('abapset_margin.htm'\)) can be used to define the upper and left margins of a spool list.

Archiving Information in Spool Lists   

When spooling is active, the statement [PRINT-CONTROL](javascript:call_link\('abapprint-control.htm'\)) can be used to write formatting information for optical archiving to the spool system.

Obsolete Formatting of Spool Lists   

When spooling is active, an [obsolete variant](javascript:call_link\('abapprint-control_obsolete.htm'\)) of the statement PRINT-CONTROL can be used to write control statements for output devices (printers) to the spool system.

Continue
[SET MARGIN](javascript:call_link\('abapset_margin.htm'\))
[PRINT-CONTROL](javascript:call_link\('abapprint-control.htm'\))



**📖 Source**: [abenprint_control.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_control.htm)

### abenprint_screen.htm

> **📖 Official SAP Documentation**: [abenprint_screen.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_screen.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spooling Screen Lists, ABENPRINT_SCREEN, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D
%0A%0D%0ASuggestion for improvement:)

Lists - Spooling Screen Lists

As well as the method of creating spool lists as already shown, screen lists can also be sent to the SAP spool system after they have been created. To do this, the Print function can be chosen in the list display. This function transforms the screen list into a spool list, where the spool format specified in the [spool parameters](javascript:call_link\('abenprint_parameters.htm'\)) is used to split the list and shorten it, if necessary. However, this usually results in the following problems:

-   A list that has been formatted as a screen list is not appropriate for spool output, because:
    -   A screen list usually consists of one logical page. This logical page must be divided into multiple physical spool pages for the spooling process. Since the screen list contains only one [page header](javascript:call_link\('abenpage_header_glosry.htm'\) "Glossary Entry"), this page header is used as the page header of every spool page. If it contains page numbering, every spool page has the same page number (usually 1).
    -   Screen lists are usually very wide (> 130 columns). A normal printer can print these lists only by truncating the lines.
-   A screen list does not support any special print control sequences as they appear, for example, in the statement [PRINT-CONTROL](javascript:call_link\('abapprint-control.htm'\)).

Hints

-   For the reasons mentioned this type of spooling should not be used for production purposes. It is designed only as a way of capturing a screen list for testing purposes.
-   A screen list cannot contain any index lines created using [PRINT-CONTROL](javascript:call_link\('abapprint-control.htm'\)). Indexed searches are not possible in an archived screen list.



**📖 Source**: [abenprint_screen.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_screen.htm)

### abenprint_list_abexa.htm

> **📖 Official SAP Documentation**: [abenprint_list_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_list_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abenprint_list_abexa.htm](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenprint_list_abexa.htm)


  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Lists - Spool](javascript:call_link\('abenprint.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Lists - Spool, ABENPRINT_LIST_ABEXA, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASug
gestion for improvement:)

Lists - Spool

The example demonstrates how to spool lists and how to stack spool list levels.

Source Code   

REPORT demo\_list\_print LINE-COUNT 10 LINE-SIZE 50.
DATA params LIKE pri\_params.
DATA valid  TYPE c LENGTH 1.
PARAMETERS para TYPE c LENGTH 1.
CLASS print\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS print IMPORTING text TYPE string.
ENDCLASS.
INITIALIZATION.
  CALL FUNCTION 'GET\_PRINT\_PARAMETERS'
    EXPORTING
      destination    = 'LOCL'
      immediately    = ' '
      no\_dialog      = 'X'
      line\_count     = 10
      line\_size      = 50
    IMPORTING
      out\_parameters = params
      valid          = valid.
  IF valid <> 'X'.
    LEAVE PROGRAM.
  ENDIF.
  params-prtxt = 'Parameter 1'.
  CALL FUNCTION 'SET\_PRINT\_PARAMETERS'
    EXPORTING
      in\_parameters = params.
START-OF-SELECTION.
  WRITE / 'AAAA'.
  params-prtxt = 'Parameter 2'.
  NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.
  WRITE / 'BBBB'.
  CALL SCREEN 100.
  WRITE / 'GGGG'.
  NEW-PAGE PRINT OFF.
  WRITE / 'HHHH'.
MODULE status\_0100 OUTPUT.
  SUPPRESS DIALOG.
  LEAVE TO LIST-PROCESSING AND RETURN TO SCREEN 0.
  WRITE / 'CCCC'.
  params-prtxt = 'Parameter 3'.
  NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.
  WRITE / 'DDDD'.
  print\_demo=>print( 'EEEE' ).
  NEW-PAGE PRINT OFF.
  WRITE / 'FFFF'.
ENDMODULE.
CLASS print\_demo IMPLEMENTATION.
  METHOD print.
    params-prtxt = 'Parameter 4'.
    TRY.
        NEW-PAGE PRINT ON PARAMETERS params NO DIALOG.
      CATCH cx\_sy\_nested\_print\_on.
        NEW-PAGE PRINT ON PARAMETERS params NO DIALOG NEW-SECTION.
    ENDTRY.
    WRITE / text.
    NEW-PAGE PRINT OFF.
  ENDMETHOD.
ENDCLASS.

Description   

The program creates five lists. If the user chooses Execute on the selection screen, one screen list and four spool lists are created. If the user chooses Execute + Print on the selection screen, five spool lists are created.

In the event block INITIALIZATION, the spool parameters are placed in the structure params by calling function module GET\_PRINT\_PARAMETERS. By passing the initial value to parameter IMMEDIATELY, the spool requests are stored in the spool system, but not spooled immediately. Function module SET\_PRINT\_PARAMETERS is used to pre-fill the input fields of the spool dialog box of the selection screen.

The created spool requests, and the content of the spool lists can be displayed by choosing System → Own Spool Requests.

-   Depending on the user action, the first list on the selection screen is either a two-page screen list (basic list) or a two-page spool list with the title Parameter 1. The first page contains a line AAAA. The second page contains a line HHHH.
-   The second list is a one-page spool list created explicitly using NEW-PAGE PRINT ON and carries the title "Parameter 2". It contains the lines BBBB and GGGG. Its spool list level is stacked on the screen list or on the spool list level with the title "Parameter 1".
-   The third list is a two-page spool list created implicitly by calling a dynpro sequence using CALL SCREEN and carries the title "Parameter 2". The first page contains a line CCCC. The second page contains a line FFFF. Its spool list level is stacked on the spool list level of the previous spool list with the title "Parameter 2", from which the spool parameters are also taken.
-   The fourth list is a one-page spool list created explicitly using NEW-PAGE PRINT ON and carries the title "Parameter 3". It contains the line DDDD. Its spool list level is stacked on the spool list level of the previous spool list with the title "Parameter 2".
-   The fifth list is a one-page spool list created explicitly using NEW-PAGE PRINT ON and carries the title "Parameter 4". It contains the line EEEE. Its spool list level is stacked on the spool list level of the previous spool list with the title "Parameter 2".

The fifth list is created in the static method print of class print\_demo. The first attempt to create a new spool list with the title "Parameter 4" raises the exception CX\_SY\_NESTED\_PRINT\_ON because the spool list created with NEW-PAGE PRINT ON and carrying the title "Parameter 3" is still open. When the exception is handled, a new spool list is opened using the addition NEW SECTION. Since the spool parameters used are different, the opened spool list is closed and a new spool list is opened, no longer raising an exception. If identical spool parameters are used, the output is appended to the existing spool list. Because the spool list opened using NEW-PAGE PRINT ON is closed already in the method, the statement NEW-PAGE PRINT OFF in the dialog module status\_0100 no longer has an effect.
