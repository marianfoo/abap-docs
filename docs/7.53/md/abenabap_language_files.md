  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) → 

ABAP File Interface

The statements of the ABAP file interface enable ABAP statements to edit files on the [host computers](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS Instance](javascript:call_link\('abenapplication_server_glosry.htm'\) "Glossary Entry"). Methods of the global class [CL\_GUI\_FRONTEND\_SERVICES](javascript:call_link\('abenfrontend_services.htm'\)) are available for files on presentation servers.

-   [Physical and Logical File Names](javascript:call_link\('abenfile_interface_naming.htm'\))

-   [Authorization for File Access](javascript:call_link\('abendataset_auth.htm'\))

-   [Locking Files](javascript:call_link\('abenfile_interface_locking.htm'\))

-   [System Class for the File Interface](javascript:call_link\('abencl_abap_file_utilities.htm'\))

-   [Statements for the File Interface](javascript:call_link\('abenfile_interface_statements.htm'\))

Notes

-   Files on the host computers of the AS Instances are not usually suited as persistent repositories of data from application programs. Data is saved in a way specific to the platform, and usually only files on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current AS Instance can be accessed. This can be a problem in systems with more than one AS Instances.

-   Files on the host computers of the AS Instancess can be used to exchange data with non-SAP systems.

Continue
[Physical and Logical File Names](javascript:call_link\('abenfile_interface_naming.htm'\))
[Authorization for File Access](javascript:call_link\('abendataset_auth.htm'\))
[Locking Files](javascript:call_link\('abenfile_interface_locking.htm'\))
[System Class for the File Interface](javascript:call_link\('abencl_abap_file_utilities.htm'\))
[Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\))