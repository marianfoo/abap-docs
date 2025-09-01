  

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