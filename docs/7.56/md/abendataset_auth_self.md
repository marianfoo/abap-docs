  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Authorization for File Access](javascript:call_link\('abendataset_auth.htm'\)) → 

Validation of File Names

In addition to the [automatic authorization checks](javascript:call_link\('abenfile_interface_authority.htm'\)), it may be necessary to validate file names before they are used to prevent [directory traversals](javascript:call_link\('abendirectory_traversal_glosry.htm'\) "Glossary Entry"). This is particularly important if the following applies:

-   The automatic authorization checks are not enough, for example because the database table SPTH or too few authorizations have been defined for the authorization object S\_DATASET.
-   Programs with [physical file names](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry") are used, and these file names are provided using external interfaces such as APIs or UIs.

However, if logical file names are consistently used, there is no need for validation.

-   [Using Logical File Names](#abendataset-auth-self-1-------using-physical-file-names---@ITOC@@ABENDATASET_AUTH_SELF_2)
    -   [Self-Programmed Validation](#abendataset-auth-self-3-----------validation-with-logical-file-names---@ITOC@@ABENDATASET_AUTH_SELF_4)

Using Logical File Names

File names do not usually need to be validated if a program is consistent in using only [logical file names](javascript:call_link\('abenlogical_filename_glosry.htm'\) "Glossary Entry") created by the system administrator in the transactions FILE or SF01. Next, the set of logical file names available to an application defines the set of possible physical file names. The associated physical file names are not processed explicitly in the program. Instead, the function module FILE\_GET\_NAME is used to create the physical file name from the logical file name directly before it is used in a [statement of the file interface](javascript:call_link\('abenfile_interface_statements.htm'\)) and used for file access.

Example

The following program works with a logical file name in field log\_name. The function module FILE\_GET\_NAME uses this file name to create a platform-dependent physical file name in phys\_name for use in the statement OPEN DATASET. Since the value abap\_true is passed to the parameter INCLUDING\_DIR, the physical file name is absolute, that is, it contains an absolute path.

DATA: log\_name  TYPE filename-fileintern,
      phys\_name TYPE string.
...
CALL FUNCTION 'FILE\_GET\_NAME'
  EXPORTING
    logical\_filename = log\_name
    including\_dir    = abap\_true
  IMPORTING
    file\_name        = phys\_name
  EXCEPTIONS
    file\_not\_found   = 2
    OTHERS           = 4.
IF sy-subrc <> 0.
  MESSAGE ID sy-msgid TYPE 'I' NUMBER sy-msgno
                      WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4
                      DISPLAY LIKE sy-msgty.
  RETURN.
ENDIF.
OPEN DATASET phys\_name FOR OUTPUT IN TEXT MODE ENCODING UTF-8.
...

Using Physical File Names

If a program uses [physical file names](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry"), the name must almost always be validated.

Self-Programmed Validation

If valid directories and file names are defined exactly, as is often the case in programs from the technical infrastructure, this type of validation can be skipped. The following can be used, for example:

-   Methods from [character string processing](javascript:call_link\('abenabap_data_string.htm'\)),
-   Methods from class CL\_ABAP\_DYN\_PRG for checking include lists,
-   Methods in the class CL\_FS\_PATH

However, self-programmed validations, especially when using character string processing, is suitable only for the simplest cases. For all other cases, validation with logical file names is usually recommended.

Validation with logical file names

In many use cases, directories and file names are generic, and are predefined by the system administrator when configuring the system. They can be modified or enhanced while the system is running. In these cases, the concept of logical file names should be employed when handling physical file names explicitly.

In addition to the case above, where a program uses only logical file names, the associations between logical and physical file names can also be used to validate physical file names. If the list of logical file names is complete, the function module FILE\_VALIDATE\_NAME can be called before a file is accessed. This module checks whether the physical file name has a corresponding logical file name or whether the directory is valid. In this way, the function module checks whether the physical file exists in the set defined by the logical file names.

Hint

The function module FILE\_VALIDATE\_NAME always checks absolute file names with path specifications. If a relative file name is passed for checking, the default path is implicitly prefixed to DIR\_HOME in accordance with the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry").

Example

Validation of a directory. For a directory, the logical file name contained in log\_name must have been created in the format DIR using transaction FILE. The function module FILE\_GET\_NAME provides the platform-dependent path for this directory in path. For a directory, the value abap\_true must be passed to parameter INCLUDING\_DIR, otherwise the function module terminates with an exception. The method IS\_RELATIVE of class CL\_FS\_PATH is used to check whether a file name phys\_name entered by a user is relative or contains an absolute path. An existing absolute file name is transferred without being modified. Relative file names are concatenated with the path. This is done using the method APPEND\_PATH\_NAME of a path object from the class CL\_FS\_PATH created from path. This object is platform-independent and works regardless of whether path contains a closing separator like \\. Finally, phys\_name with FILE\_VALIDATE\_NAME is validated by checking the directory of log\_name. This check is also necessary when creating a chain from the path and relative file name. This is because the specified relative file name can contain parts such as \\..\\, which can point to path locations outside of the allowed directory.

DATA: phys\_name TYPE string,
      log\_name  TYPE filename-fileintern,
      path      TYPE string.
...
CALL FUNCTION 'FILE\_GET\_NAME'
  EXPORTING
    logical\_filename = log\_name
    including\_dir    = abap\_true
  IMPORTING
    file\_name        = path
  EXCEPTIONS
    file\_not\_found   = 2
    OTHERS           = 4.
IF sy-subrc <> 0.
  MESSAGE ID sy-msgid TYPE 'I' NUMBER sy-msgno DISPLAY LIKE sy-msgty.
  RETURN.
ENDIF.
cl\_demo\_input=>request( CHANGING field = phys\_name ).
IF cl\_fs\_path=>create( phys\_name )->is\_relative( ) = abap\_true.
  DATA(pref) = cl\_fs\_path=>create( path ).
  pref->append\_path\_name( phys\_name ).
  phys\_name = pref->get\_path\_name( ).
ENDIF.
CALL FUNCTION 'FILE\_VALIDATE\_NAME'
  EXPORTING
    logical\_filename           = log\_name
  CHANGING
    physical\_filename          = phys\_name
  EXCEPTIONS
    logical\_filename\_not\_found = 1
    validation\_failed          = 2
    OTHERS                     = 4.
IF sy-subrc <> 0.
  MESSAGE ID sy-msgid TYPE 'I' NUMBER sy-msgno
                      WITH sy-msgv1 sy-msgv2 sy-msgv3 sy-msgv4
                      DISPLAY LIKE sy-msgty.
  RETURN.
ENDIF.
OPEN DATASET phys\_name FOR OUTPUT IN TEXT MODE ENCODING UTF-8 .