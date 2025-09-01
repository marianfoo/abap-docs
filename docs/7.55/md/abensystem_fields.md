  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Built-In Types, Data Objects, Functions, and Constructors](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in.htm) →  [Built-In Data Objects](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbuilt_in_objects.htm) → 

ABAP System Fields

System fields are filled by the [ABAP runtime environment](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_runtime_envir_glosry.htm "Glossary Entry") and can be used in an ABAP program to query system states. With one exception (sy-repid), the system fields are variables, but they should only be used for reads. Otherwise, important information for further program execution may be lost. System fields in ABAP programs might only be overwritten in rare cases to control system behavior.

The data types of the system fields -except for sy-repid\- are defined in the structure SYST in the ABAP Dictionary and are instantiated as components of the built-in structure sy in ABAP programs. The structure sy exists only once in an [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry") and is used by all programs in this internal session.

The structure sy can also be addressed using syst. There is also a built-in data type sy, which can be used instead of the data type SYST of the ABAP Dictionary.

The following table shows the system fields that can be used in ABAP programs. All other components of the structure sy are either intended only for [internal use](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_fields_internal.htm) by the ABAP runtime environment or are [obsolete](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_fields_obsolete.htm).

Name

Type

Length

Content

sy-abcde

c

26

Contains the Latin alphabet. Can be used to access individual letters directly by specifying the offset/length, regardless of the [code page](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencodepage_glosry.htm "Glossary Entry").

sy-batch

c

1

Set to "X" in an ABAP program that runs in the background; otherwise initial.

sy-binpt

c

1

Set to "X" when processing [batch input sessions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbatch_input_session_glosry.htm "Glossary Entry") and in ABAP programs called by [CALL TRANSACTION USING](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_transaction_using.htm); otherwise initial. These default values can be overridden using the addition OPTIONS FROM of the statement CALL TRANSACTION ... USING.

sy-calld

c

1

Contains a blank in the first program of a [call sequence](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencall_sequence_glosry.htm "Glossary Entry"); otherwise the value "X": Set to "X" after calls using CALL TRANSACTION, CALL DIALOG, or SUBMIT ... AND RETURN. Empty if the program was started using LEAVE TO TRANSACTION or by a transaction code from the [screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry"). A call using SUBMIT (without AND RETURN) takes over the value of the calling program.

sy-callr

c

8

When spooling lists, contains a value that indicates where spooling was started, for example NEW-PAGE for program-driven spooling or RSDBRUNT for spooling from the [selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_glosry.htm "Glossary Entry").

sy-colno

i

\-

Current position during list creation in the list buffer, is set for each output statement is used. Counting begins at 1. It is only guaranteed that this position matches the column in the displayed list only for the lower and upper output limits of each output, since one character may occupy more columns in the list than there are places in the list buffer. See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-cpage

i

\-

Page number of the top page in the list display where a list event was raised. Counting begins at 1. See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-cprog

c

40

In externally called [procedures](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprocedure_glosry.htm "Glossary Entry"), the name of the calling program; otherwise the name of the current program. If an externally called procedure calls another external procedure, sy-cprog contains the name of the [compilation unit](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abencompilation_unit_glosry.htm "Glossary Entry") and is not set to the name of the compilation unit of the subsequent calling program.

sy-cucol

i

\-

Horizontal cursor position on the screen of a [dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry"). Counting begins at column 2. Set after the event PAI.

sy-curow

i

\-

Vertical cursor position on the screen of a dynpro. Counting begins at line 1. Set after the event PAI.

sy-datar

c

1

Contains "X" at [PAI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpai_glosry.htm "Glossary Entry"), if at least one input field of a screen was changed by a user or by another data transfer, otherwise initial.

sy-datlo

d

\-

User date, such as "19990723". See [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_system_fields.htm).

sy-datum

d

\-

[System date](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_date_glosry.htm "Glossary Entry"). See [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_system_fields.htm).

sy-dayst

c

1

"X" during daylight saving time in the system time zone; otherwise initial. See [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_system_fields.htm).

sy-dbcnt

i

\-

SQL statements set the content of sy-dbcnt to the number of processed table lines.

sy-dbnam

c

20

In executable programs, the associated [logical database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogical_data_base_glosry.htm "Glossary Entry").

sy-dbsys

c

10

Database system of the [standard database](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_db_glosry.htm "Glossary Entry"), such as "HDB" or "ADABAS". See also CL\_DB\_SYS.

sy-dyngr

c

4

Screen group of the current dynpro. In the [Screen Painter](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_painter_glosry.htm "Glossary Entry"), multiple dynpros can be assigned to a common screen group, which can be used, for example, to make modifications to all screens in the group at once.

sy-dynnr

c

4

Number of the current dynpro. During [selection screen processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselscreen_processing_glosry.htm "Glossary Entry"), this is the current selection screen. During list processing, this is the number of the subscreen dynpro. During processing of a [subscreen dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensubscreen_dynpro_glosry.htm "Glossary Entry") (including in [tabstrips](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentabstrip_control_glosry.htm "Glossary Entry")), this is its dynpro number.

sy-fdayw

b

\-

Factory calendar weekday in the system time zone; Monday = 1, ..., Friday = 5. See [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_system_fields.htm).

sy-fdpos

i

\-

Found position for specific operations on character-like or byte-like data objects (for example [comparisons](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogexp_strings.htm) or the obsolete statement [SEARCH](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapsearch-.htm)).

sy-host

c

32

Network name of the [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") on which the current [AS instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry") is instantiated, for example "KSAP0001" or "HS01234".

sy-index

i

\-

Loop index. In DO and WHILE loops, this contains the number of previous loop passes, including the current pass.

sy-langu

c

1

Single-character language key (such as "E", "D", or "F") for the [locale language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentext_env_langu_glosry.htm "Glossary Entry") of the current [internal session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_session_glosry.htm "Glossary Entry"). The [logon language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlogon_language_glosry.htm "Glossary Entry") or the language set by the statement [SET LOCALE LANGUAGE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_locale.htm) is the default.

sy-ldbpg

c

40

In executable programs, the [database program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendatabase_program_glosry.htm "Glossary Entry") of the associated logical database.

sy-lilli

i

\-

List line for which a list event was raised. Counting begins at 1 and includes the [page header](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpage_header_glosry.htm "Glossary Entry"). See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-linct

i

\-

Page length of the current list during list creation. sy-linct is 0 for a standard list of any length and is not equal to 0 for lists with fixed page lengths. Set by The program-initiating statement or by SUBMIT. See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-linno

i

\-

Current list line during list creation. Counting begins at 1 and includes the page header. Set by output statements. See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-linsz

i

\-

Line width of the current list in the list buffer during list creation. By default, the value is set as follows: If sy-scols is greater than or equal to 84, sy-linsz matches sy-scols, otherwise sy-linsz has the value 84. This can be overridden by the program-initiating statement or using SUBMIT. See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-lisel

c

255

Content of the list line in the list buffer, on which the cursor was positioned in the displayed list while a list event was raised (limited to the first 255 characters). See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-listi

i

\-

List level of the list for which a list event was raised.

sy-loopc

i

\-

Number of currently displayed lines in a [table control](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentable_control_glosry.htm "Glossary Entry"). Set after the event PAI.

sy-lsind

i

\-

List level of the list that is currently being created (basic list: 0; detail lists: greater than 0). For every interactive list event, sy-lsind is increased automatically by 1. sy-lsind can be modified in the ABAP program to navigate between detail lists. Any changes made to sy-lsind are ignored until the end of a list event. See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-macol

i

\-

Contains the number of columns on the left edge when spooling lists. Set by the statement [SET MARGIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_margin.htm).

sy-mandt

c

3

[Client ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclient_identifier_glosry.htm "Glossary Entry") with which the current user has logged on, for example "401" or "800".

sy-marow

i

\-

Contains the number of lines on the top margin when spooling lists. Set by the statement [SET MARGIN](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapset_margin.htm).

sy-modno

i

\-

Indexing of the [ABAP sessions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_session_glosry.htm "Glossary Entry"). Contains the value 0 in the first session. In new sessions that are opened using the "Create Session" function or by calling a [transaction](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentransaction_glosry.htm "Glossary Entry") using /o in the command field of the [standard toolbar](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_toolbar_glosry.htm "Glossary Entry"), this value is increased by 1. If previous sessions have been deleted, the free numbers are set again first. Sessions opened with [CALL FUNCTION ... STARTING NEW TASK](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapcall_function_starting.htm) restart at 0.

sy-msgid

c

20

After the statement MESSAGE, contains the message class. After MESSAGE ... RAISING, is also set in the calling program if it handles the exception (the same applies to RFC exceptions) .

sy-msgno

n

3

After the statement MESSAGE, contains the message number. After MESSAGE ... RAISING, is also set in the calling program if it handles the exception (the same applies to RFC exceptions) .

sy-msgty

c

1

After the statement MESSAGE, contains the message type. After MESSAGE ... RAISING, is also set in the calling program if it handles the exception (the same applies to RFC exceptions) .

sy-msgv1, sy-msgv2, sy-msgv3, sy-msgv4

c

50

After the statement MESSAGE, contains the field content used as placeholders of the [message](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmessage_glosry.htm "Glossary Entry"). After MESSAGE ... RAISING, is also set in the calling program if it handles the exception (the same applies to RFC exceptions) . When a database lock is requested using an ENQUEUE function module, sym-sgv1 contains the name of the user holding the lock after the exception FOREIGN\_LOCK.

sy-opsys

c

10

Operating system of the [host computer](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhost_computer_glosry.htm "Glossary Entry") of the current [AS instance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenapplication_server_glosry.htm "Glossary Entry"), for example "SOLARIS" or "HP-UX".

sy-pagno

i

\-

Current page during list creation. Set by output statements. See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-pfkey

c

20

GUI status of the current [dynpro](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_glosry.htm "Glossary Entry"). Set after the event PAI.

sy-saprl

c

4

Release status of [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry"), for example "702" or "740".

sy-scols

i

\-

Number of columns in the current [screen layout](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenscreen_glosry.htm "Glossary Entry"). Set after the event PAI.

sy-slset

c

14

Variant that was used to fill a [selection screen](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenselection_screen_glosry.htm "Glossary Entry"). The relevant program name can be seen in sy-cprog.

sy-spono

n

10

Contains the name of the spool number when spooling lists.

sy-srows

i

\-

Number of lines in the current screen layout. Set after the event PAI.

sy-staco

i

\-

Number of the first displayed column in the list for which a list event was raised. Counting begins at 1. See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-staro

i

\-

Number of the list line displayed at the top of the displayed page for list, for which a list event was raised. Counting begins at 1. The [page header](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpage_header_glosry.htm "Glossary Entry") is not counted. See also [Lists - System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenlist_systemfields.htm).

sy-stepl

i

\-

Index of the current line in a table control. This is set for every loop pass. Outside of a loop, for example after the event POV or POH for a table line, the content of sy-stepl is undefined.

sy-subrc

i

\-

[Return value](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenreturn_code_glosry.htm "Glossary Entry") that is set by many ABAP statements. In general, the value 0 means that the statement was executed without problems. Depending on which statement was used to set sy-subrc, the cause of an error can be derived from this value. The content of sy-subrc keeps its previous value or is undefined after statements where the setting of sy-subrc is not documented explicitly.

sy-sysid

c

8

[System ID](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_id_glosry.htm "Glossary Entry") of [AS ABAP](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenas_abap_glosry.htm "Glossary Entry"), for example "S01" or "K99".

sy-tabix

i

\-

Line number in the table index of an [internal table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninternal_table_glosry.htm "Glossary Entry"). Contains the last line addressed using a [primary](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprimary_table_index_glosry.htm "Glossary Entry") or [secondary table index](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_index_glosry.htm "Glossary Entry"). Is set to 0 when accessed using a [hash algorithm](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenhash_algorithm_glosry.htm "Glossary Entry").

sy-tcode

c

20

Name of the current transaction code. Initial in [background processing](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenbackround_processing_glosry.htm "Glossary Entry"), unless a transaction was called during background processing.

sy-tfill

i

\-

In the statements DESCRIBE TABLE, LOOP AT, and READ TABLE, sy-tfill is given the number of lines of the accessed internal table.

sy-timlo

t

\-

User time, such as "152557". See [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_system_fields.htm).

sy-title

c

70

Text that appears in the title bar of the dynpro.

sy-tleng

i

\-

In the statements DESCRIBE TABLE, LOOP AT, and READ TABLE, sy-tleng is given the line size of the accessed internal table.

sy-tzone

i

\-

Time difference of the [system time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_time_glosry.htm "Glossary Entry") to the [UTC](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenutc_glosry.htm "Glossary Entry") reference time in seconds, for example "3600" or "10800". See [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_system_fields.htm).

sy-ucomm

c

70

Function code that raised the event [PAI](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenpai_glosry.htm "Glossary Entry"). This function code is usually uniquely linked to a function. Only Enter can pass different function codes to sy-ucomm in accordance with the following hierarchy: Content of the command field in the system toolbar, assigned function code; not influencing of the content.

sy-uline

c

255

Contains 255 "-" characters for displaying lines in lists. For the display of sy-uline with the statement [WRITE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapwrite-.htm), the same applies as to the statement [ULINE](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapuline.htm), that is, every "-" character is replaced by a [line element](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenline_element_glosry.htm "Glossary Entry") by default.

sy-uname

c

12

[User name](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_name_glosry.htm "Glossary Entry") of the current [user session](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_session_glosry.htm "Glossary Entry"), for example "KELLERH".

sy-uzeit

t

\-

[System time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_time_glosry.htm "Glossary Entry"). See [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_system_fields.htm).

sy-vline

c

1

Contains a vertical line (|) for displaying in lists.

sy-wtitl

c

1

Set to "N" in the statements REPORT, PROGRAM, and FUNCTION-POOL, if the addition NO STANDARD PAGE HEADING is used; otherwise initial. The statement NEW-PAGE does not set sy-wtitl.

sy-zonlo

c

6

[User time zone](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuser_time_zone_glosry.htm "Glossary Entry"), for example "CET" or "PST". See [System Fields for Date and Time](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abentime_system_fields.htm).

The system field sy-repid is not a component of the structures syst or sy. Instead, each program contains the built-in constants sy-repid and syst-repid, which both contain the name of the corresponding program. There are also two built-in types with the same names, sy-repid and syst-repid, of type c and length 40.

Programming Guidelines

-   [Evaluate system fields in the correct place](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenevaluation_guidl.htm "Guideline")

-   [Do not use obsolete or internal system fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenobs_intern_system_field_guidl.htm "Guideline")

-   [Do not write to system fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensyst_field_access_guidl.htm "Guideline")

-   [Do not use system fields as actual parameters](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_actual_parameters_guidl.htm "Guideline")

-   [Do not use system fields in statements that set them](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_operand_position_guidl.htm "Guideline")

-   [Do not use system fields on the user interface](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenuse_ui_guidl.htm "Guideline")

Hints

-   Although it is not syntactically forbidden, data objects or types with the names sy or syst or with the names of the system fields themselves in programs should not be created separately, since they can hide built-in data objects and types.

-   The content of system fields is only defined as stated in the table above or for individual ABAP statements. In any other contexts, the content of system fields is not reliable. In particular those statements whose effect on system fields is undocumented can impact the content of certain system fields in undefined ways, for example sy-subrc. This primarily applies to statements that call ABAP code implicitly or explicitly when executed.

-   If possible, a system field should be evaluated directly following the statement that set it, to prevent it from being overwritten by other statements. If necessary, the values of system fields should be stored in auxiliary variables.

-   A system field should only be entered as an operand in a [read position](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenoperands_data_objects.htm) if its content is not set by the same statement. Otherwise, the system may behave unexpectedly.

-   System fields and the associated structure SYST have a pure program-internal meaning. No [dynpro fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abendynpro_field_glosry.htm "Glossary Entry") should be created with reference to system fields, since the relevant [field help](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfield_help_glosry.htm "Glossary Entry") is not intended for end users.

-   Internal system fields are intended entirely for internal use in the ABAP runtime environment and in the ABAP kernel. They must never be overwritten in ABAP programs and should not be read in any way.

-   The obsolete system fields were usually transferred during the transition from R/2 to R/3 and are no longer filled. These system fields can no longer be used.

-   The static methods of the system class CL\_ABAP\_SYST also return important system states. The use of these methods can replace the evaluation of the corresponding system fields in all cases where it is important that a system field has not been overwritten inadvertently in the program. In the case of sy-dbsys, it is recommended that the class CL\_DB\_SYS is used.

Example

Typical evaluation of the system field sy-subrc after a [SELECT](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapselect.htm) statement.

SELECT SINGLE \*
       FROM scarr
       WHERE carrid = '...'
       INTO @DATA(wa).
IF sy-subrc <> 0.
  RETURN.
ENDIF.

Continue
[Internal System Fields](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensystem_fields_internal.htm)