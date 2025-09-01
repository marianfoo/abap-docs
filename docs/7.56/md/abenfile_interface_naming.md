  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_reference.htm) →  [Processing External Data](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_external_data.htm) →  [ABAP File Interface](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_language_files.htm) → 

Physical and Logical File Names

-   [Physical File Names](#@@ITOC@@ABENFILE_INTERFACE_NAMING_1)
-   [Logical File Names and Logical Paths](#@@ITOC@@ABENFILE_INTERFACE_NAMING_2)

Physical File Names

Files are addressed directly in all the statements of the file interface by using the platform-dependent physical file name by which they are known on the specific [host computer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhost_computer_glosry.htm "Glossary Entry"). Therefore, a file cannot be opened more than once in the same program. The physical name of a file is usually made up of a path description and the file name itself. File names with blank spaces are allowed where the blanks are part of the file name. The actual notation depends on the operating system of the [host computer](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current AS instance. Any file names that do not contain an absolute path refer to the directory defined using the [profile parameter](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenprofile_parameter_glosry.htm "Glossary Entry") DIR\_HOME.

-   If an AS ABAP is distributed across multiple [AS instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_instance_glosry.htm "Glossary Entry"), which themselves exist as instances on different host computers, the file interface generally accesses the individual file systems of these host computers. A shared file system can be configured for the host computers, to enable multiple AS instances to access the same files.
-   If different [AS instances](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenas_instance_glosry.htm "Glossary Entry") of an AS ABAP exist as instances on a single host computer, the profile parameter DIR\_HOME has a different instance number for each AS instances by default. To enable shared access to files, the profile parameter must be modified, or separate paths must be specified.

Hint

When using physical file names, relative paths should be avoided, and only absolute paths should be specified. If used, relative paths are not resolved to absolute paths using the authorization object S\_DATASET and the authorization object S\_PATH (together with the database table SPTH) in [automatic authorization checks](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenfile_interface_authority.htm) and the literal character strings are compared instead.

Logical File Names and Logical Paths

Logical file names and logical paths support both platform-independent programs and [secure programs](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abenabap_security.htm). Logical file names and logical paths can be created as follows and linked with the actual physical file names for each platform:

-   Client-independent logical file names with transaction FILE.
-   Client-dependent logical file names with customizing activity SF01.

The following function modules and methods are available for the use of logical file names in programs:

-   The FILE\_GET\_NAME function module can be used to determine the physical file name or directory valid for the current platform for a logical file name and use it in statements of the file interface.
-   Input fields for logical file names in SAP GUI are supported by the function modules FILE\_LOGFILE\_ALIAS\_PBO, FILE\_LOGFILE\_ALIAS\_PAI, and FILE\_LOGFILE\_ALIAS\_F4. These modules create an appropriate list box, check the value entered, and produce a suitable input help.

Hints

-   Logical file names are one way of [validating file names](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendataset_auth_self.htm) and securing a program against attack by [directory traversal](https://help.sap.com/doc/abapdocu_756_index_htm/7.56/en-US/abendirectory_traversal_glosry.htm "Glossary Entry").
-   For more information about logical file names and logical paths, see documentation Logical File Names in SAP Help Portal.
-   The class CL\_FS\_PATH contains methods to analyze, transform, or create file names and path entries.