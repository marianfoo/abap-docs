  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_external_data.htm) → 

ABAP File Interface

The statements of the ABAP file interface enable ABAP statements to process files on the [host computers](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry"). Methods of the global class [CL\_GUI\_FRONTEND\_SERVICES](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfrontend_services.htm) are available for files on presentation servers.

-   [Physical and Logical File Names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfile_interface_naming.htm)

-   [Authorization for File Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendataset_auth.htm)

-   [Locking Files](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfile_interface_locking.htm)

-   [System Class for the File Interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_file_utilities.htm)

-   [Statements for the File Interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfile_interface_statements.htm)

Hints

-   Files on the host computers of the AS instances are not usually suited as persistent repositories of data from application programs. Data is saved in a way specific to the platform, and usually only files on the [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance can be accessed. This can be a problem in systems with more than one AS instances.

-   Files on the host computers of the AS instances can be used to exchange data with non-SAP systems.

Continue
[Physical and Logical File Names](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfile_interface_naming.htm)
[Authorization for File Access](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendataset_auth.htm)
[Locking Files](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfile_interface_locking.htm)
[System Class for the File Interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencl_abap_file_utilities.htm)
[Statements for the ABAP File Interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfile_interface_statements.htm)