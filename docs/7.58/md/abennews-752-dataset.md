  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - ABAP Release News](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews.htm) →  [News for ABAP Release 7.5x](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-75.htm) →  [News for ABAP Release 7.52](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abennews-752.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20File%20Interface%20in%20ABAP%20Release%207.52%2C%20ABENNEWS-752-DATASET%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

File Interface in ABAP Release 7.52

[1\. Placeholders in Paths Specified in Automatic Authorization Checks](#!ABAP_MODIFICATION_1@1@)
[2\. Automatic Authorization Checks for the FILTER Addition](#!ABAP_MODIFICATION_2@2@)

Modification 1   

Placeholders in Paths Specified in Automatic Authorization Checks

In the database table SPTH, which is relevant for [automatic authorization checks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_interface_authority.htm), placeholders for specific profile parameters or for the current client can now be specified in the column PATH. These placeholders are then replaced accordingly when evaluated. The possible placeholders are specified in the documentation of the table SPTH.

Modification 2   

Automatic Authorization Checks for the FILTER Addition

If the addition [FILTER](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_dataset_os_addition.htm) is used in the statement OPEN DATASET and an [automatic authorization check](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_interface_authority.htm) is made using an authorization group and the authorization object S\_PATH when a file is accessed using the database table SPTH, the current user must have an authorization for the activity A6 (Read) or A7 (Change) when using the addition FILTER.

For compatibility reasons, the undocumented empty value for the activity is still accepted.