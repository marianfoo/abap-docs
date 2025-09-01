  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [SAP GUI User Dialogs](javascript:call_link\('abenabap_screens.htm'\)) →  [Classic Lists](javascript:call_link\('abenabap_dynpro_list.htm'\)) →  [Spooling Lists](javascript:call_link\('abenprint.htm'\)) → 

spool parameter

For every [spool request](javascript:call_link\('abenprint_spool.htm'\)), spool parameters must be defined that are used to format the spool list when the list is created, and to control the request.

In the ABAP statements [NEW-PAGE PRINT ON](javascript:call_link\('abapnew-page_print.htm'\)) and [SUBMIT TO SAP-SPOOL](javascript:call_link\('abapsubmit_print_parameters.htm'\)) the spool parameters are specified in a structure of type PRI\_PARAMS from ABAP Dictionary. Spool parameters can be enhanced by archiving parameters if the data of the spool request is to be archived using ArchiveLink. To do this, optical archiving using [ArchiveLink](javascript:call_link\('abensap_archivelink_glosry.htm'\) "Glossary Entry") is switched on (archiving mode 2 or 3) in the spool parameters. Archiving parameters are specified in a structure of type ARC\_PARAMS from ABAP Dictionary.

The spool parameters are specified either explicitly or implicitly. The end user can set them directly in the spool dialog box or the spool parameters can be set in the program code.

-   [Spool Dialog Box](javascript:call_link\('abenprint_parameters_window.htm'\))

-   [Setting Program-Driven Spool Parameters](javascript:call_link\('abenprint_parameters_function.htm'\))

-   [Overview of All Spool Parameters](javascript:call_link\('abenprint_parameters_overview.htm'\))

Note

The content of the structures PRI\_PARAMS and ARC\_PARAMS cannot be modified directly in programs; only the function module GET\_PRINT\_PARAMETERS can be used for this.

Continue
[Spool Dialog Box](javascript:call_link\('abenprint_parameters_window.htm'\))
[Setting Program-Driven Spool Parameters](javascript:call_link\('abenprint_parameters_function.htm'\))
[Overview of All Spool Parameters](javascript:call_link\('abenprint_parameters_overview.htm'\))