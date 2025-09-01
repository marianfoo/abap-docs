  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Processing External Data](javascript:call_link\('abenabap_language_external_data.htm'\)) →  [ABAP File Interface](javascript:call_link\('abenabap_language_files.htm'\)) →  [Statements for the ABAP File Interface](javascript:call_link\('abenfile_interface_statements.htm'\)) →  [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) → 

OPEN DATASET, os\_additions

[Short Reference](javascript:call_link\('abapopen_dataset_shortref.htm'\))

Syntax

... *\[*TYPE attr*\]*
    *\[*FILTER opcom*\]* ...

Additions:

[1\. ... TYPE attr](#!ABAP_ADDITION_1@1@)
[2\. ... FILTER opcom](#!ABAP_ADDITION_2@2@)

Effect

These additions can be used to make operating system-specific settings and set operating system statements.

Addition 1   

... TYPE attr

Effect

The behavior of this addition depends on the operating system of the [host computer server](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") of the current [AS instance](javascript:call_link\('abenas_instance_glosry.htm'\) "Glossary Entry"). If the operating system is not an MS Windows operating system, a character-like field can be specified for attr that contains operating system-specific parameters for the file that is to be opened. These parameters are passed to the operating system of the AS instance unchanged, and without being checked for correctness.

If the operating system is an MS Windows operating system, and the file is opened as a [text file](javascript:call_link\('abentext_file_glosry.htm'\) "Glossary Entry") or as a [legacy](javascript:call_link\('abenlegacy_file_glosry.htm'\) "Glossary Entry") text file and the addition [WITH LINEFEED](javascript:call_link\('abapopen_dataset_linefeed.htm'\)) is not used, the content of attr controls the end-of-line marker of the text file:

1.  If attr contains the value "NT", the end-of-line is marked by "CRLF".
2.  If attr contains the value "UNIX", the end-of-line is marked by "LF".

All other values of attr are ignored in MS Windows operating systems, and the end-of-line marker is opened in the same way as described in the addition [WITH LINEFEED](javascript:call_link\('abapopen_dataset_linefeed.htm'\)).

Hint

Instead of specifying the values "UNIX" or "NT" after TYPE, it is best to use the addition [WITH LINEFEED](javascript:call_link\('abapopen_dataset_linefeed.htm'\)). If it is used, the values "UNIX" or "NT" cannot be specified.

Example

Creating a file test.dat. The properties entered under TYPE are specific for the operating system IBM i5/OS (previously OS/400).

OPEN DATASET 'test.dat'
  TYPE 'lrecl=80, blksize=8000, recfm=FB'
  FOR OUTPUT IN TEXT MODE
             ENCODING DEFAULT
             WITH SMART LINEFEED.

Addition 2   

... FILTER opcom

Effect

This addition can be used if the operating system of the current AS instance [host computer](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") supports pipes (Unix and [MS](javascript:call_link\('abenhost_computer_glosry.htm'\) "Glossary Entry") Windows). A character-like field can be specified for opcom, which contains an operating system statement that corresponds to the appropriate command-level syntax.

When the statement [OPEN DATASET](javascript:call_link\('abapopen_dataset.htm'\)) is executed, a process is started in the operating system for the specified statement. When the file is opened for reading, a channel (pipe) is linked with STDOUT of the process, from which the data is read during file reading. The file itself is connected to STDIN of the process. When the file is opened for writing, a channel (pipe) is connected to STDIN of the process, to which data is passed when writing. The output of the process is redirected to this file.

If, as part of the [automatic authorization check](javascript:call_link\('abenfile_interface_authority.htm'\)) for file access, the database table SPTH is used to make a check using the authorization group and the authorization object S\_PATH, the current user must have an authorization for the activity "A6" (Read) or "A7" (Change) when using the addition FILTER.

The addition FILTER must not be used together with the addition [AT POSITION](javascript:call_link\('abapopen_dataset_position.htm'\)) or for the access type [FOR UPDATE](javascript:call_link\('abapopen_dataset_access.htm'\)).

Hints

-   When working with pipes, it must be ensured that the pipe only exists in the current work process. If the [work process](javascript:call_link\('abenwork_process_glosry.htm'\) "Glossary Entry") is switched while the file is open, the pipe is lost and any attempted reads or writes raise a catchable exception of the class CX\_SY\_PIPE\_REOPEN.
-   Pipes should only be used for operating system statements required in association with files. No other operating system statements should be used. The [SXPG framework](javascript:call_link\('abenabap_system_commands_appl_sxpg.htm'\)) should be used instead. See also [Unwanted Calls of Operating System Statements](javascript:call_link\('abenabap_system_commands_appl_depr.htm'\)).
-   When the authorization object [S\_PATH](javascript:call_link\('abenfile_interface_authority.htm'\)) is checked, for compatibility reasons an empty value is also accepted for the activity alongside the values "A6" or "A7" if the addition FILTER is used.

Security Hint

Using operating system statements that are passed to a program from outside is a serious security risk. Any statements passed to a program from outside must be checked thoroughly before being used. See [System Command Injections](javascript:call_link\('abensys_comm_injections_scrty.htm'\)).

Example

On a Unix platform, the statement gzip is used as a write filter and the statement gzip -d is used as a read filter. When the file is accessed for writing the data is compressed, and when it is accessed for reading, the data is decompressed.

DATA file TYPE string VALUE \`/usr/test.Z\`.
OPEN DATASET file FOR OUTPUT IN BINARY MODE
                      FILTER 'gzip'.
...
CLOSE DATASET file.
OPEN DATASET file FOR INPUT IN BINARY MODE
                      FILTER 'gzip -d'.
...
CLOSE DATASET file.