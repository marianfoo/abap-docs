  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Release-Specific Changes](javascript:call_link\('abennews.htm'\)) →  [Changes in Releases 7.5x](javascript:call_link\('abennews-75.htm'\)) →  [Changes in Release 7.52](javascript:call_link\('abennews-752.htm'\)) → 

File Interface in Release 7.52

[1\. Placeholders in paths specified in automatic authorization checks](#!ABAP_MODIFICATION_1@1@)
[
2\. Automatic authorization checks for the FILTER addition](#!ABAP_MODIFICATION_2@2@)

Modification 1

Placeholders in Paths Specified in Automatic Authorization Checks

In the database table SPTH, which is relevant for [automatic authorization checks](javascript:call_link\('abenfile_interface_authority.htm'\)), placeholders for specific profile parameters or for the current client can now be specified in the column PATH. These placeholders are then replaced accordingly when evaluated. The possible placeholders are specified in the documentation of the table SPTH.

Modification 2

Automatic Authorization Checks for the FILTER Addition

If the addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) is used in the statement OPEN DATASET and an [automatic authorization check](javascript:call_link\('abenfile_interface_authority.htm'\)) is made using an authorization group and the authorization object S\_PATH when a file is accessed using the database table SPTH, the current user must have an authorization for the activity "A6" (Read) or "A7" (Change) when using the addition FILTER.

For compatibility reasons, the undocumented empty value for the activity is still accepted.