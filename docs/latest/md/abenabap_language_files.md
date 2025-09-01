  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20ABAP%20File%20Interface%2C%20ABENABAP_LANGUAGE_FILES%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

ABAP File Interface

The statements of the ABAP file interface enable ABAP statements to process files on the [host computers](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"). Methods of the global class [CL\_GUI\_FRONTEND\_SERVICES](javascript:call_link\('abenfrontend_services.htm'\)) are available for files on presentation servers.

-   [Physical and Logical File Names](javascript:call_link\('abenfile_interface_naming.htm'\))
-   [Authorization for File Access](javascript:call_link\('abendataset_auth.htm'\))
-   [Locking Files](javascript:call_link\('abenfile_interface_locking.htm'\))
-   [System Class for the File Interface](javascript:call_link\('abencl_abap_file_utilities.htm'\))
-   [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\))

Hints

-   Files on the host computers of the AS instances are not usually suited as persistent repositories of data from application programs. Data is stored in a platform-dependent way, and usually only files on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS instance can be accessed. This can be a problem in systems with multiple AS instances.
-   Files on the host computers of the AS instances can be used to exchange data with non-SAP systems.

Continue
[Physical and Logical File Names](javascript:call_link\('abenfile_interface_naming.htm'\))
[Authorization for File Access](javascript:call_link\('abendataset_auth.htm'\))
[Locking Files](javascript:call_link\('abenfile_interface_locking.htm'\))
[System Class for the File Interface](javascript:call_link\('abencl_abap_file_utilities.htm'\))
[Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\))