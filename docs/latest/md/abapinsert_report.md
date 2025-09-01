  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20INSERT%20REPORT%2C%20ABAPINSERT_REPORT%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

INSERT REPORT

[Short Reference](javascript:call_link\('abapinsert_report_shortref.htm'\))

Syntax

INSERT REPORT prog FROM itab
              *\[*MAXIMUM WIDTH INTO wid*\]*
              *{* *\[*KEEPING DIRECTORY ENTRY*\]*
              *|* *{* *\[*PROGRAM TYPE pt*\]*
                  *\[*FIXED-POINT ARITHMETIC fp*\]*
                  *\[*VERSION vs*\]* *}*
              *|* *\[*DIRECTORY ENTRY dir*\]* *}*.

Additions:

[1\. ... MAXIMUM WIDTH INTO wid](#!ABAP_ADDITION_1@1@)
[2\. ... KEEPING DIRECTORY ENTRY](#!ABAP_ADDITION_2@2@)
[3\. ... PROGRAM TYPE pt](#!ABAP_ADDITION_3@3@)
[4\. ... FIXED-POINT ARITHMETIC fp](#!ABAP_ADDITION_4@4@)
[5\. ... VERSION vs](#!ABAP_ADDITION_5@5@)
[6\. ... DIRECTORY ENTRY dir](#!ABAP_ADDITION_6@6@)

Effect

This statement passes the content of itab to the ABAP program specified in prog in the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") as source code. If a program with the specified name already exists, its source code is overwritten. Otherwise a new program with the name specified in prog and the source code from itab is created in the repository.

The additions for determining the [program properties](javascript:call_link\('abenprogram_property_glosry.htm'\) "Glossary Entry") create the program properties in the system table TRDIR.

If none of the additions are specified, the following default values are set when a new program is created:

-   The original language is set to the system language stored in the [profile parameter](javascript:call_link\('abenprofile_parameter_glosry.htm'\) "Glossary Entry") zcsa/system\_language.
-   The creation date and the date of last change, along with the corresponding times, are set to the current value.
-   The program properties author and last changed by are set to the current user.
-   The program status is set to active by default. The program is compiled when it is first executed.
-   The program type is set to [executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry").
-   The application is set to the value of the current program.
-   No [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") is linked with the program.
-   Fixed point arithmetic is activated.
-   The setting for the [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") is taken from the current program.

If none of the additions are specified, the properties of an existing program are preserved if it is overwritten, with the following exceptions:

-   The date and time of the last change are set to the current value.
-   The property last changed by is set to the current user.
-   The version number is increased by one.
-   The [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") is set as follows:
    -   If the current program is from the ABAP language version [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry"), the overwritten program is always set to this language version.
    -   The statement INSERT REPORT cannot currently be used in other ABAP language versions.

For itab, only a standard table without [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") is allowed. A source code line in itab must be character-like and can have a maximum of 255 characters. Trailing blanks are ignored for line types with a fixed length. prog must be a character-like flat data object, which can contain no more than 30 characters, and whose content is not case-sensitive.

System Fields

sy-subrc

Meaning

0

The program specified in prog was successfully created or overwritten.

4

An error occurred when creating or overwriting the program specified in prog.

Security Hint

If used incorrectly, dynamic programming techniques can present a serious security risk. Any dynamic content that is passed to a program from the outside must be checked thoroughly or escaped before it is used in dynamic statements. This can be done using the system class CL\_ABAP\_DYN\_PRG or the built-in function [escape](javascript:call_link\('abenescape_functions.htm'\)). See [ABAP Command Injections](javascript:call_link\('abengeneric_prog_scrty.htm'\)).

Hints

-   The statement INSERT REPORT must be used with extreme caution, because it can completely overwrite existing programs without warning. Any inadvertent overwriting can be prevented by checking whether the specified name already exists in the NAME column of the system table TRDIR.
-   If INSERT REPORT is used to create a new program, this program is not assigned to a package, which means it is not connected to the [Change and Transport System (CTS)](javascript:call_link\('abencts_glosry.htm'\) "Glossary Entry"). The program must either be assigned to a package in the ABAP Workbench or it is only suitable for temporary tasks in the current system.
-   It is vital to have a precise working knowledge of the structures and names of the program when using the statement INSERT REPORT for programs organized in a [master program](javascript:call_link\('abenmaster_program_glosry.htm'\) "Glossary Entry") and using [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry"), if they were created in the ABAP Workbench.
-   The [program name](javascript:call_link\('abenprogram_name_glosry.htm'\) "Glossary Entry") that is created should comply with the naming conventions of the [ABAP Workbench](javascript:call_link\('abenabap_workbench_glosry.htm'\) "Glossary Entry") if it is to be processed using the tools in the workbench.
-   INSERT REPORT should be used in application programs in exceptional cases only. ABAP provides many other means of dynamic programming, which generally make creating source code dynamically unnecessary (see the list in [dynamic program processing](javascript:call_link\('abenabap_language_dynamic.htm'\))).

Addition 1   

... MAXIMUM WIDTH INTO wid

Effect

If the addition MAXIMUM WIDTH is used, the number of characters of the longest source code line in itab is assigned to the variable wid, which must have data type i.

Addition 2   

... KEEPING DIRECTORY ENTRY

Effect

This addition is only effective when a program is overwritten. The statement behaves as if no additions are specified (see above), with the exception that the [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") remains intact in the overwritten program.

Addition 3   

... PROGRAM TYPE pt

Effect

This addition defines the [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry") of the new or overwritten program in accordance with the content of pt. pt must be a data object of data type c with length 1 that contains a valid ID for a program type. The following table shows the case-sensitive IDs of all ABAP program types.

ID

Program Type

1

[Executable program](javascript:call_link\('abenexecutable_program_glosry.htm'\) "Glossary Entry")

F

[Function pool](javascript:call_link\('abenfunction_pool_glosry.htm'\) "Glossary Entry") (or function group)

I

[Include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry")

J

[Interface pool](javascript:call_link\('abeninterface_pool_glosry.htm'\) "Glossary Entry")

K

[Class pool](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry")

M

[Module pool](javascript:call_link\('abenmodul_pool_glosry.htm'\) "Glossary Entry")

S

[Subroutine pool](javascript:call_link\('abensubroutine_pool_glosry.htm'\) "Glossary Entry")

T

[Type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") or type group

Addition 4   

... FIXED-POINT ARITHMETIC fp

Effect

This addition defines the [fixed-point arithmetic](javascript:call_link\('abenfixed_point_arithmetic_glosry.htm'\) "Glossary Entry") property of the new or overwritten program in accordance with the content of fp. fp must be a data object of data type c with length 1 that contains either the value X or blank. The value X sets the fixed-point arithmetic property, while the value blank deactivates it.

Addition 5   

... VERSION vs

Effect

This addition specifies the [ABAP language version](javascript:call_link\('abenabap_versions.htm'\)) for the new or overwritten program in accordance with the content of vs. vs must be a data object of data type c with a length of 1, which can have the following values as version ID:

vs

ABAP Language Version

Meaning

X

[Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry")

Basic version, [Unicode check](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry") activated

2

[ABAP for Key Users](javascript:call_link\('abenabap_for_key_users_glosry.htm'\) "Glossary Entry")

Restricted language scope for enhancements by key users

3

[Static ABAP with restricted object use](javascript:call_link\('abenabap_static_restr_glosry.htm'\) "Glossary Entry")

Restricted use of external [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"), dynamic language elements are not allowed

4

[Standard ABAP with restricted object use](javascript:call_link\('abenstandard_abap_restr_obj_glosry.htm'\) "Glossary Entry")

Restricted use of external [repository objects](javascript:call_link\('abenrepository_object_glosry.htm'\) "Glossary Entry"), dynamic language elements are allowed

5

[ABAP for Cloud Development](javascript:call_link\('abenabap_for_cloud_dev_glosry.htm'\) "Glossary Entry")

Restricted language scope for developments in the [SAP Business Technology Platform](javascript:call_link\('abensap_btp_glosry.htm'\) "Glossary Entry").

\-

[Non-Unicode ABAP](javascript:call_link\('abennon_unicode_abap_glosry.htm'\) "Glossary Entry")

Obsolete, [Unicode check](javascript:call_link\('abenunicode_check_glosry.htm'\) "Glossary Entry") deactivated

Technically, the addition supplies the column UCCHECK of database table TRDIR. Values other than the ones shown here should not be specified. If incorrect values are specified as a literal and this is known statically, a syntax error occurs. Unknown values, on the other hand, are always saved in the database table TRDIR. Values not contained in the above table act as a version that does not support language elements.

Hint

An obsolete addition [UNICODE ENABLING](javascript:call_link\('abapinsert_report_obsolete.htm'\)) has the same meaning as VERSION.

Addition 6   

... DIRECTORY ENTRY dir

Effect

This addition defines the [program properties](javascript:call_link\('abenprogram_property_glosry.htm'\) "Glossary Entry") for the new or overwritten program in accordance with the content of dir. dir must be a structure of data type TRDIR from the ABAP Dictionary. The required program properties can be specified in the components of this structure. Invalid content produces invalid program properties. All program properties are obtained from dir, except for the creation and change dates, and the corresponding times, properties program author or last changed by properties, and the version numbers. The latter are set to the same values as if nothing were specified.

Hint

When using the addition DIRECTORY ENTRY, it is strongly recommended that the content of structure dir is set only by reading the properties of an existing program from database table TRDIR, and subsequently making specific changes to individual components.

Example

Switches parts of a program to [Unicode](javascript:call_link\('abenunicode_glosry.htm'\) "Glossary Entry"). A program with the obsolete language version [Non-Unicode ABAP](javascript:call_link\('abennon_unicode_abap_glosry.htm'\) "Glossary Entry") is imported and the statement DESCRIBE FIELD is switched to the syntax for [Unicode systems](javascript:call_link\('abenunicode_system_glosry.htm'\) "Glossary Entry") as an example. The source code of the program is then overwritten with the modified source code and the [ABAP language version](javascript:call_link\('abenabap_version_glosry.htm'\) "Glossary Entry") is set to [Standard ABAP](javascript:call_link\('abenstandard_abap_glosry.htm'\) "Glossary Entry").

DATA: itab TYPE TABLE OF string,
      prog TYPE sy-repid,
      uc   TYPE trdir-uccheck.
FIELD-SYMBOLS  <line> TYPE string.
prog = ...
SELECT SINGLE uccheck
       FROM  trdir
       WHERE name    = @prog AND
             uccheck = ' '
       INTO  (@uc).
IF sy-subrc = 0.
  READ REPORT prog INTO itab.
  LOOP AT itab ASSIGNING <line>.
    TRANSLATE <line> TO UPPER CASE.
    IF <line> CS 'DESCRIBE FIELD' AND
       <line> CS 'LENGTH' AND
       <line> NS 'MODE'.
      REPLACE '.' IN <line> WITH ' IN CHARACTER MODE.'.
    ENDIF.
    ...
  ENDLOOP.
  SYNTAX-CHECK FOR itab ...
  IF sy-subrc = 0.
    INSERT REPORT prog FROM itab VERSION 'X'.
  ENDIF.
ENDIF.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Catchable Exceptions

CX\_SY\_WRITE\_SRC\_LINE\_TOO\_LONG

-   Cause: A line in the source code contains more than 255 characters.
    Runtime error: INSERT\_REPORT\_LINE\_TOO\_LONG

Uncatchable Exceptions

-   Cause: The program name prog begins with '%\_T'. This prefix is reserved for temporary subroutine pools.
    Runtime error: INSERT\_PROGRAM\_INTERNAL\_NAME
-   Cause: The program name prog begins with a blank. This is not allowed.
    Runtime error: INSERT\_PROGRAM\_NAME\_BLANK
-   Cause: The program name prog is too long; it cannot be more than 40 characters long.
    Runtime error: INSERT\_PROGRAM\_NAME\_TOO\_LONG
-   Cause: Suffix 2 in the program name prog is invalid or does not correspond to the specification apptype.
    Runtime error: INSERT\_REPORT\_BAD\_APPENDAGE
-   Cause: The specification apptype is invalid. Valid values are defined in the type pool SREXT.
    Runtime error: INSERT\_REPORT\_BAD\_APPTYPE
-   Cause: Suffix 1 in the program name prog is invalid or does not correspond to the specification exttype.
    Runtime error: INSERT\_REPORT\_BAD\_EXTENSION
-   Cause: The specification exttype is invalid. Valid values are defined in the type pool SREXT.
    Runtime error: INSERT\_REPORT\_BAD\_EXTTYPE
-   Cause: The value of the field uc is not 'X' or ' '.
    Runtime error: INSERT\_REPORT\_ILLEGAL\_FLAG
-   Cause: The value of the field pt is not '1', 'I', 'S', 'M', 'F', 'J', or 'K'.
    Runtime error: INSERT\_REPORT\_ILLEGAL\_PROGTYPE
-   Cause: The program name prog is longer than 30 characters and the program does not yet exist in the library. Without the addition ... APPENDAGE TYPE apptype, the program cannot be inserted.
    Runtime error: INSERT\_REPORT\_NO\_APPTYPE
-   Cause: The program name prog is longer than 30 characters and the program does not yet exist in the library. Without the addition ... EXTENSION TYPE exttype, the program cannot be inserted.
    Runtime error: INSERT\_REPORT\_NO\_EXTTYPE

Continue
[INSERT REPORT, Internal Additions](javascript:call_link\('abapinsert_report_internal.htm'\))