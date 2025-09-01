# ABAP Keyword Documentation / ABAP − Reference / Processing External Data / ABAP File Interface / Authorization for File Access

Included pages: 3


### abendataset_auth.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) → 

Authorization for File Access

-   [Automatic Authorization Checks](javascript:call_link\('abenfile_interface_authority.htm'\))

-   [Validation of File Names](javascript:call_link\('abendataset_auth_self.htm'\))

Continue
[Automatic Authorization Checks](javascript:call_link\('abenfile_interface_authority.htm'\))
[Validation of File Names](javascript:call_link\('abendataset_auth_self.htm'\))


### abenfile_interface_authority.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Authorization for File Access](javascript:call_link\('abendataset_auth.htm'\)) → 

Automatic Authorization Checks

The following authorization checks take place automatically when data is accessed:

-   [Authorization Check in the Operating System](#abenfile-interface-authority-1--------authorization-checks-for-special-files---@ITOC@@ABENFILE_INTERFACE_AUTHORITY_2)

-   [Authorization Object S\_DATASET](#abenfile-interface-authority-3--------database-table-spth-and-authorization-object-s--path---@ITOC@@ABENFILE_INTERFACE_AUTHORITY_4)

Authorization Check in the Operating System

From the point of view of the operating system on the [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of a AS Instance, all files are accessed from [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry"). As a consequence, the user of the operating system that creates an instance of the [AS ABAP](javascript:call_link\('abensap_nw_abap_glosry.htm'\) "Glossary Entry") AS Instance must have the authority to read and write to all files and directories that are handled by the ABAP file interface. If this authorization does not exist, the file interface statements can only be partially carried out, or not at all. If a statement cannot be executed because of lack of authorization in the operating system, the return value sy-subrc is set to not equal to 0.

Authorization Checks for Special Files

Every time a PSE file (file with the extension .pse for a Personal Security Environment) is accessed, an automatic authorization check for the current user is performed with the value "01" for the field ACTVT of the authorization object S\_RZL\_ADM of the system administrator.

Authorization Object S\_DATASET

An authorization check is performed for the current user each time a file is opened or deleted using the following:

-   [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\))

-   [DELETE DATASET](javascript:call_link\('abapdelete_dataset.htm'\))

Also, the current program is executed using the predefined authorization object S\_DATASET. This authorization object contains the authorization fields PROGRAM for the program names, FILENAME for the opened files, and ACTVT with the activities Delete, Read, Write, Read with Filter, and Write with Filter. If the user or program does not have the necessary authorization, a handleable exception of the class CX\_SY\_FILE\_AUTHORITY is raised. To avoid this, the function module AUTHORITY\_CHECK\_DATASET can be called before the relevant ABAP statement to check whether the authorization exists.

Note

In the authorization check with the authorization object S\_DATASET, the [physical file name](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry") used in the statements above and the values of the authorization field FILENAME are subject to a literal comparison. Any relative paths specified are not transformed to absolute paths. To avoid unexpected results, it is best to specify only absolute paths in physical file names.

Database Table SPTH and Authorization Object S\_PATH

An automatic check is made when the following statements access files:

-   [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\))

-   [DELETE DATASET](javascript:call_link\('abapdelete_dataset.htm'\))

This check is made on entries in the database tables SPTH. The entries in the database table SPTH control the general read and write accesses from ABAP programs to files and whether files should be backed up or not.

In the database table SPTH, reads and writes can be forbidden on all files specified absolutely or relatively, regardless of the [authorization objects](javascript:call_link\('abenauthorization_object_glosry.htm'\) "Glossary Entry"). For the remaining files (those that are generally allowed to be accessed for read or write according to the database table SPTH), authorization checks can be carried out on the basis of authorization objects. In the database table SPTH, authorization groups from the table SPTHB (texts in SPTHT, shared view V\_SPT) for program-independent authorization checks can be defined. The following table shows the columns of the database table SPTH. If the check on the database table SPTH has a negative result, a handleable exception of the class CX\_SY\_FILE\_AUTHORITY is raised.

Column

Meaning

PATH

Absolute or relative path specified for directory names or file names. The content specified in the other columns of this row applies to all the files of the AS Instance that are best described by the entry in this column.

SAVEFLAG

The value "X" in this column can be evaluated by backups. The ABAP runtime environment does not itself make any backups.

FS\_NOREAD

If this column contains the value "X", the files specified in the column PATH cannot be accessed from ABAP. This setting overrides the setting in the columns FS\_NOWRITE and FS\_BRGRU as well as the authorization check on the authorization object S\_DATASET.

FS\_NOWRITE

If this column contains the value "X", writes cannot be performed on the files specified in the column PATH from ABAP. This setting overrides the setting in the column FS\_BRGRU as well as the authorization check on the authorization object S\_DATASET.

FS\_BRGRU

In this column, an authorization group can be specified that is defined in the table SPTHB. The files of multiple rows can be grouped together in this way. When the database table SPTH is evaluated, an authorization check for the current user is made against the authorization object S\_PATH (which contains an authorization field FS\_BRGRU and an authorization field ACTVT with the possible values "03" (Display), "02" (Change), "A6" (Display with Addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)) ), and "A7" (Change with Addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\))). This makes it possible to grant access to the files specified in PATH to specific users. If no authorization group is entered, no authorization check is made against the authorization object S\_PATH.

In the paths specified in the column PATH, placeholders can be specified for specific [profile parameters](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") or for the current [client](javascript:call_link\('abenclient_glosry.htm'\) "Glossary Entry"):

... <P=name> ...

When evaluated, a placeholder is replaced by the value of the profile parameter specified in name or by the current [client ID](javascript:call_link\('abenclient_identifier_glosry.htm'\) "Glossary Entry"). The possible values for name are specified in the documentation of the table SPTH.

When a file is accessed using the statements [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) and [DELETE DATASET](javascript:call_link\('abapdelete_dataset.htm'\)), a [physical file name](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry") is used. When the content of the database table SPTH is transformed, a check is made to see whether the physical file name starts with an entry in the column PATH and the row with the longest matching path is used. Before the check, a specified path in the physical file name is standardized as follows:

-   Any ../ segments are removed. For example, a path specified as /tmp/sub1/../sub2/file is transformed to /tmp/sub2/file.

-   If the operating system is not an MS Windows operating system, the / characters are converted to \\ characters and all letters are changed to uppercase letters.

If no matching path is specified in the column PATH, the row is used in which the column PATH contains the entry "\*". If this entry does not exist either, no automatic authorization check is made.

The character "\*" in the column PATH is relevant only if it is the only character entered here. When specified within paths, is subject to literal comparisons and is not used as a wildcard character.

Notes

-   In comparison to the authorization check using the authorization object S\_DATASET (see above), an authorization check using the authorization object S\_PATH is independent of the ABAP program in which it occurs.

-   Paths specified in the column PATH should usually exist in a standardized form.

-   When the path specified is standardized to a physical file name, any relative paths specified are not transformed to absolute paths. Any links and any other changeable information are not resolved.

-   The comparison rule for a path specified in the column PATH with a physical file name used to access a file is both literal and (due to the check on whether the initial segment matches) generic too. The following aspects should be noted to avoid unexpected results:

-   The character "\*" only has a special function if it is the only character in the column PATH.

-   The table SPTH should always contain an entry with the value "\*" for the column PATH. This entry is used whenever no other entries match.

-   The names of directories should always be closed with the character "/". If this is not the case, a path specified as "/tmp" in the column PATH specifies all files and directories that start with "/tmp" (like "/tmpxxx") and not just the directory "/tmp/".

-   Any path specified in the column PATH is not unique. It can contain hard links and soft links. Mount points, network paths, and similar entries can also be specified. This means the following must be noted:

-   A combination of paths specified in the column PATH with values "X" in the columns FS\_NOREAD and FS\_NOWRITE defines non-user-specific blacklists of forbidden paths. The access rights are not necessarily unique, which makes them difficult to delimit sufficiently.

-   A combination of paths specified in the column PATH with authorization groups in the column FS\_BRGRU defines whitelists of valid paths for authorized users. In this case, the lack of uniqueness of the access rights is not critical.

For this reason, is recommended that the authorization groups in the column FS\_BRGRU and the authorization object S\_PATH are used instead of the columns FS\_NOREAD and FS\_NOWRITE.

-   Unlike in an authorization check using the authorization object S\_PATH, checks made on the columns FS\_NOREAD and FS\_NOWRITE are not made as part of the general [authorization concept](javascript:call_link\('abenbc_authority_check.htm'\)) and none of the associated log entries are written.

-   For compatibility reasons, even empty values are accepted for the activity when the authorization object S\_PATH is checked, which means that files can be opened using the addition [FILTER](javascript:call_link\('abapopen_dataset_os_addition.htm'\)).

-   The column SAVEFLAG, used for backups, should only be used together with a value in another column, preferably FS\_BRGRU. If not, no authorization check is made on files covered by the path specified in PATH.

Example

The table SPTH is filled as follows:

PATH

SAVEFLAG

FS\_NOREAD

FS\_NOWRITE

FS\_BRGRU

\*

\-

\-

\-

SUPR

/

\-

\-

\-

ROOT

/dir\_open/

\-

\-

\-

\-

/tmp/sub/data/

\-

\-

\-

UDAT

/tmp/sub/data/work/

\-

\-

\-

UWRK

/tmp/sub/prefix

\-

\-

\-

UPRE

These entries have the following effects:

-   Every user can make reads and writes on files in the directory /dir\_open and its subdirectories, since no restrictions are entered.

-   Only users with an authorization for the authorization group UWRK can access files in the directory /tmp/sub/data/work/ and its subdirectories.

-   Only users with an authorization for the authorization group UDAT can access files in the directory /tmp/sub/data/ and its subdirectories (with the exception of /tmp/sub/data/work/). Instead, an authorization for the authorization group UWRK is required for /tmp/sub/data/work/.

-   Users with an authorization for the authorization group UPRE can access not just those files in the directory /tmp/sub whose names start with prefix but also all files in subdirectories whose names start with /tmp/sub/prefix. If restricted access to files in a subdirectory /tmp/sub/prefix is required, the entry made in PATH must be closed using "/".

-   User with an authorization for the authorization group ROOT can access files in any directory, as long as the physical file name is specified with "/" at the start or is absolute.

-   Users with an authorization for the authorization group SUPR can access files in any directories specified as relative directories as long as the directories are not specified with "/" at the start.

Example

The table SPTH is filled as follows:

PATH

SAVEFLAG

FS\_NOREAD

FS\_NOWRITE

FS\_BRGRU

\*

\-

X

X

\-

/

\-

\-

\-

ROOT

/tmp/

\-

\-

\-

\-

/tmp/myfiles/

\-

\-

\-

FILE

The entries have the following properties:

-   The entries in the first row apply to all fields on the AS Instance except for those in the paths /, /tmp/, and their subdirectories.

-   The entries in the second row apply to all fields on the AS Instance in the path / except for the files in the path /tmp and its subdirectories.

-   The entries in the third row apply to all fields on the AS Instance in the path /tmp except for the files in the path /tmp/myfiles and its subdirectories.

-   The entries in the fourth row apply to the fields in the path /tmp/myfiles and its subdirectories.

The entries dictate that no user can make reads or writes on files specified using relative paths. Users with authorization for the authorization group ROOT can access all files specified using absolute paths except for the files in the path /tmp/myfiles. All users can make both reads and writes on the files in the path /tmp. Only users who have an authorization for the authorization group FILE can make reads and writes on the files in the path /tmp/myfiles. When the table above is applied, this means that the following program lines produce a runtime error for all users except those with authorization for the authorization group ROOT,

DATA fname TYPE string.
fname = \`/system/files\`.
OPEN DATASET fname FOR OUTPUT IN BINARY MODE.

This configuration forbids the use of any relative paths when files are accessed. This rule is generally only advisable if this behavior is explicitly required.

-   All permitted paths should be specified in the table SPTH and associated with the appropriate authorization groups.

-   Access to the path specified as "\* should also be subject to an authorization group permitting access using any relative paths for authorized users.


### abendataset_auth_self.htm

  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Authorization for File Access](javascript:call_link\('abendataset_auth.htm'\)) → 

Validation of File Names

Alongside the [automatic authorization checks](javascript:call_link\('abenfile_interface_authority.htm'\)), it may be necessary to validate file names before they are used to prevent [directory traversals](javascript:call_link\('abendirectory_traversal_glosry.htm'\) "Glossary Entry"). This is particularly important if

-   the automatic authorization checks are not enough, for example because the database table SPTH or the authorizations for the authorization object S\_DATASET have not been defined in full.

-   programs with [physical file names](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry") are used, and these file names are provided using external interfaces such as APIs or UIs.

However if logical file names are consistently used, there is no need for validation.

-   [Using Logical File Names](#abendataset-auth-self-1--------using-physical-file-names---@ITOC@@ABENDATASET_AUTH_SELF_2)

-   [Self-Programmed Validation](#abendataset-auth-self-3--------validation-with-logical-file-names---@ITOC@@ABENDATASET_AUTH_SELF_4)

Using Logical File Names

File names do not usually need to be validated if a program is consistent in using only [logical file names](javascript:call_link\('abenlogical_filename_glosry.htm'\) "Glossary Entry") created by the system administrator in the transactions FILE or SF01. Next, the set of logical file names available to an application defines the set of possible physical file names. The associated physical file names are not edited explicitly in the program. Instead, the function module FILE\_GET\_NAME is used to create the physical file name from the logical file name directly before it is used in a [statement of the file interface](javascript:call_link\('abenfile_interface_statements.htm'\)) and used for file access.

Example

The following program works with a logical file name in field log\_name. The function module FILE\_GET\_NAME uses this file name to create a platform-specific physical file name in phys\_name (for use in the statement OPEN DATASET). As the value abap\_true is passed to parameter INCLUDING\_DIR, the physical file name is absolute; in other words, it contains an absolute path.

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
OPEN DATASET phys\_name FOR OUTPUT IN TEXT MODE ENCODING UTF-8 .
...

Using Physical File Names

If a program uses [physical file names](javascript:call_link\('abenphysical_filename_glosry.htm'\) "Glossary Entry"), the name almost always needs to be validated.

Self-Programmed Validation

If valid directories and file names are defined precisely (as is often the case in programs from the technical infrastructure), this type of validation can be skipped. The following can be used, for example:

-   Methods from [character string processing](javascript:call_link\('abenabap_data_string.htm'\)),

-   Methods from class CL\_ABAP\_DYN\_PRG for checking whitelists,

-   Methods in the class CL\_FS\_PATH

However, self-programmed validations (especially when using character string processing) is suitable only for simple cases. For all other cases, validation with logical file names is usually recommended.

Validation with logical file names

In many cases, directories and file names are generic, and are predefined by the system administrator when configuring the system. They can be modified or enhanced while the system is running. In these cases, the concept of logical file names should be employed when handling physical file names explicitly.

In addition to the case above, where a program uses only logical file names, the associations between logical and physical file names can also be useful when handling physical file names for validation purposes. As long as the list of logical file names is complete, the function module FILE\_VALIDATE\_NAME can be called before a file is accessed. This module checks whether the physical file name is associated with a logical file name or whether the directory is valid. In this way, the function module checks whether the physical file exists in the set defined by the logical file names.

Note

The function module FILE\_VALIDATE\_NAME always checks absolute file names with specified paths. If a relative file name is passed for checking, the default path is implicitly added as a prefix to DIR\_HOME in accordance with the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry").

Example

Validation of a directory. For a directory, the logical file name contained in log\_name must have been created in the format DIR using transaction FILE. The function module FILE\_GET\_NAME provides the platform-specific path for this directory in path. For a directory, the value abap\_true must be passed to parameter INCLUDING\_DIR, otherwise the function module is terminated with an exception. The method IS\_RELATIVE of class CL\_FS\_PATH is used to check whether a file name phys\_name entered by a user is relative or contains an absolute path. An existing absolute file name is applied without being modified. Relative file names are concatenated with the path. This is done using the method APPEND\_PATH\_NAME of a path object from the class CL\_FS\_PATH created from path. This object is platform-independent and works regardless of whether path contains a closing separator like \\. Finally, phys\_name with FILE\_VALIDATE\_NAME is validated by checking the directory of log\_name. This check is also necessary when creating a chain from the path and relative file name. This is because the specified relative file name can contains parts such as \\..\\, which can point to path locations outside of the permitted directory.

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
