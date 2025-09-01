  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Security Notes](javascript:call_link\('abenabap_security.htm'\)) →  [Security Risks Caused by Input from Outside](javascript:call_link\('abendynamic_programming_scrty.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: Directory Traversal, ABENDYN_FILE_SCRTY, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0
ASuggestion for improvement:)

Directory Traversal

Physical file names can be specified as the content of a character-like data object in the statements and system class of the [ABAP file interface](javascript:call_link\('abenfile_interface_glosry.htm'\) "Glossary Entry"). If some or all of this content originates outside of the calling program, there is a risk that files or file paths are accessed by unauthorized sources (this is known as [directory traversal](javascript:call_link\('abendirectory_traversal_glosry.htm'\) "Glossary Entry")). The following are potential security risks when using input from outside to access the ABAP file interface:

-   A file name used in the statements [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) and [DELETE DATASET](javascript:call_link\('abapdelete_dataset.htm'\)) originates either partly or in full from outside the program.
-   A file name passed to the method CREATE\_UTF8\_FILE\_WITH\_BOM of the system class CL\_ABAP\_FILE\_UTILITIES originates either partly or in full from outside the program.

To act against this security risk, [the file names must be validated](javascript:call_link\('abendataset_auth_self.htm'\)). This can be a self-programmed validation or the function module FILE\_VALIDATE\_NAME can be used. This function module checks whether a physical file name matches a [logical file name](javascript:call_link\('abenlogical_filename_glosry.htm'\) "Glossary Entry") or whether it is a valid directory. One prerequisite is that the matching file names or logical paths were created using the transactions FILE or SF01.

Hints

-   If a program uses logical file names exclusively, instead of physical file names, the physical file names or paths required by the statements are constructed using the function module FILE\_GET\_NAME only. In this case, validation is not usually necessary.
-   Alongside the validation of file names, adequate checks should be made on the [authorizations for file access](javascript:call_link\('abendataset_auth.htm'\)).

Example

See the examples under [Validating File Names](javascript:call_link\('abendataset_auth_self.htm'\)).