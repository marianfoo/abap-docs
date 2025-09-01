  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.0 and its EhPs](javascript:call_link\('abennews-70_ehps.htm'\)) →  [News for Release 7.0, EhP3 and 7.3, EhP1](javascript:call_link\('abennews-703.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Selection Screens and Lists in Release 7.0, EhP3 and 7.3, ABENNEWS-703-SCREENS, 757%0
D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

Selection Screens and Lists in Release 7.0, EhP3 and 7.3

EhP1

[1\. Extended Field Lengths on Selection Screens](#!ABAP_MODIFICATION_1@1@)
[2\. Handling Spool Lists](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Extended Field Lengths on Selection Screens

The maximum length of input fields on selection screens has been increased from 132 to 255 for parameters and from 45 to 255 for selection criteria. To allow values to be passed using [SUBMIT WITH SELECTION TABLE](javascript:call_link\('abapsubmit_selscreen_parameters.htm'\)), a new data type RSPARAMSL\_255, which supports this maximum length, has been added to ABAP Dictionary.

Modification 2   

Handling Spool Lists

If a [spool list level](javascript:call_link\('abenspool_list_level_glosry.htm'\) "Glossary Entry") stacked in a preceding [spool list](javascript:call_link\('abenspool_list_glosry.htm'\) "Glossary Entry") is closed using [NEW-PAGE PRINT OFF](javascript:call_link\('abapnew-page_print.htm'\)), the preceding spool list is now always resumed. Previously, a new spool list was opened in this case if the spool parameters were different and the existing spool list resumed only if the spool parameters were identical.

When the system returns to the spool list, the system field sy-spono is switched to the associated number of the spool request directly when the statement NEW-PAGE PRINT OFF is executed. Previously, sy-spono was not modified directly but only in the next output statement sent to a spool list.