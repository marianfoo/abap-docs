  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Security Notes](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_security.htm) →  [Security Risks Caused by Input from Outside](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendynamic_programming_scrty.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Directory%20Traversal%2C%20ABENDYN_FILE_SCRTY%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Directory Traversal

Physical file names can be specified as the content of a character-like data object in the statements and system class of the [ABAP file interface](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfile_interface_glosry.htm "Glossary Entry"). If some or all of this content originates outside of the calling program, there is a risk that files or file paths are accessed by unauthorized sources (this is known as [directory traversal](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendirectory_traversal_glosry.htm "Glossary Entry")). The following are potential security risks when using input from outside to access the ABAP file interface:

-   A file name used in the statements [OPEN DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapopen_dataset.htm) and [DELETE DATASET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapdelete_dataset.htm) originates either partly or in full from outside the program.
-   A file name passed to the method CREATE\_UTF8\_FILE\_WITH\_BOM of the system class CL\_ABAP\_FILE\_UTILITIES originates either partly or in full from outside the program.

To act against this security risk, [the file names must be validated](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendataset_auth_self.htm). This can be a self-programmed validation or the function module FILE\_VALIDATE\_NAME can be used. This function module checks whether a physical file name matches a [logical file name](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_filename_glosry.htm "Glossary Entry") or whether it is a valid directory. One prerequisite is that the matching file names or logical paths were created using the transactions FILE or SF01.

Hints

-   If a program uses logical file names exclusively, instead of physical file names, the physical file names or paths required by the statements are constructed using the function module FILE\_GET\_NAME only. In this case, validation is not usually necessary.
-   Alongside the validation of file names, adequate checks should be made on the [authorizations for file access](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendataset_auth.htm).

Example

See the examples under [Validating File Names](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abendataset_auth_self.htm).