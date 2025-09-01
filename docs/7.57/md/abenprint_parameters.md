  

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