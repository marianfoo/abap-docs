  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release News](javascript:call_link\('abennews.htm'\)) →  [News for Release 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [News for Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: File Interface in Release 7.52, ABENNEWS-752-DATASET, 757%0D%0A%0D%0AError:%0D%0A%0D%
0A%0D%0A%0D%0ASuggestion for improvement:)

File Interface in Release 7.52

[1\. Placeholders in Paths Specified in Automatic Authorization Checks](#!ABAP_MODIFICATION_1@1@)
[2\. Automatic Authorization Checks for the FILTER Addition](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Placeholders in Paths Specified in Automatic Authorization Checks

In the database table SPTH, which is relevant for [automatic authorization checks](javascript:call_link\('abenfile_interface_authority.htm'\)), placeholders for specific profile parameters or for the current client can now be specified in the column PATH. These placeholders are then replaced accordingly when evaluated. The possible placeholders are specified in the documentation of the table SPTH.

Modification 2   

Automatic Authorization Checks for the FILTER Addition

If the addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) is used in the statement OPEN DATASET and an [automatic authorization check](javascript:call_link\('abenfile_interface_authority.htm'\)) is made using an authorization group and the authorization object S\_PATH when a file is accessed using the database table SPTH, the current user must have an authorization for the activity A6 (Read) or A7 (Change) when using the addition FILTER.

For compatibility reasons, the undocumented empty value for the activity is still accepted.