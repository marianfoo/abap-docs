# ABAP Keyword Documentation / ABAP − Reference / Program Editing / Dynamic Program Editing / ABAP Source Code / READ REPORT

Included pages: 2


### abapread_report.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) → 

READ REPORT

[Quick Reference](javascript:call_link\('abapread_report_shortref.htm'\))

Syntax

READ REPORT prog INTO itab *\[*MAXIMUM WIDTH INTO wid*\]*.

Addition:

[... MAXIMUM WIDTH INTO wid](#!ABAP_ONE_ADD@1@)

Effect

This statement reads the source code of the program specified in prog from the [repository](javascript:call_link\('abenrepository_glosry.htm'\) "Glossary Entry") and copies its lines into the internal table itab. The previous content of itab is deleted. If the program cannot be loaded, the content of itab remains unchanged. By default, the source text of the active version of the program is read.

prog expects a [flat](javascript:call_link\('abenflat_glosry.htm'\) "Glossary Entry") character-like data object, which contains the name of the program to be read; the name is not case-sensitive. The internal table itab must be a [standard table](javascript:call_link\('abenstandard_table_glosry.htm'\) "Glossary Entry") without [secondary table keys](javascript:call_link\('abensecondary_table_key_glosry.htm'\) "Glossary Entry") with a character-like row type. When the row length of the internal table is fixed, it must be long enough for the longest program line. Program lines that are too long raise a catchable exception. In the case of the row type string, the length of each row is dictated by the length of the imported program line. An empty program line produces an empty string.

System Fields

sy-subrc

Meaning

0 (means:

The program was imported.

4 (means:

The specified program was not found in the repository.

8 (means:

The specified program is a system program protected against reads.

Notes

-   A precise working knowledge of the programs' structures and names is vital if the statement READ REPORT is used for programs organized in a [master program](javascript:call_link\('abenframe_program_glosry.htm'\) "Glossary Entry") and with [include programs](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") when they were created in ABAP Workbench.
    
-   The names of the master programs for [class pools](javascript:call_link\('abenclass_pool_glosry.htm'\) "Glossary Entry") and [function groups](javascript:call_link\('abenfunction_group_glosry.htm'\) "Glossary Entry") do not match the names of the global class or function group (see statements [CLASS-POOL](javascript:call_link\('abapclass-pool.htm'\)) and [FUNCTION-POOL](javascript:call_link\('abapfunction-pool.htm'\))).
    

Example

After a program is imported into an internal table source, a dedicated line is replaced by different source code from another internal table insertion. After a syntax check, a subroutine pool is generated from the modified program. The required security checks are indicated by comments.

DATA:
   template  TYPE c LENGTH 30,
   generated TYPE c LENGTH 30,
   source TYPE TABLE OF string,
   insertion TYPE TABLE OF string,
   idx       TYPE i,
   mess      TYPE string,
   lin       TYPE i,
   wrd       TYPE string.
template = '...'.
"Authority checks
...
READ REPORT template INTO source.
IF sy-subrc <> 0.
  RETURN.
ENDIF.
"Fill insertion
...
FIND '\* insertion' IN TABLE source MATCH LINE idx.
DELETE source INDEX idx.
INSERT LINES OF insertion INTO source INDEX idx.
SYNTAX-CHECK FOR source MESSAGE mess LINE lin WORD wrd
             PROGRAM template.
...
"Security checks
...
GENERATE SUBROUTINE POOL source NAME generated.
"Execution
...

Executable Example

[Program Generation](javascript:call_link\('abenprogram_generation_abexa.htm'\)).

Addition

... MAXIMUM WIDTH INTO wid

Effect

If the addition MAXIMUM WIDTH is used, the number of characters of the longest imported source code line is assigned to the variable wid (expects the data type i).

Example

The following program determines the widest and narrowest source code in the programs of a package saved in the database table TADIR

SELECT obj\_name AS name
       FROM tadir
       WHERE pgmid = 'R3TR' AND
             object = 'PROG' AND
             devclass = 'SABAPDEMOS'
       INTO TABLE @DATA(programs).
DATA(max) = 0.
DATA(min) = 1000000.
DATA(width) = 0.
DATA source  TYPE TABLE OF string WITH EMPTY KEY.
LOOP AT programs ASSIGNING FIELD-SYMBOL(<prog>).
  READ REPORT <prog> INTO source MAXIMUM WIDTH INTO width.
  IF width > max.
    max = width.
    DATA(max\_name) = <prog>.
  ENDIF.
  IF width < min AND width <> 0.
    min = width.
    DATA(min\_name) = <prog>.
  ENDIF.
ENDLOOP.

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Handleable Exceptions

CX\_SY\_READ\_SRC\_LINE\_TOO\_LONG

-   Cause: At least one line of the source code is longer than the rows of the internal table itab.
    Runtime error: READ\_REPORT\_LINE\_TOO\_LONG
    

Continue
[READ REPORT - Internal Addition](javascript:call_link\('abapread_report_internal.htm'\))


### abapread_report_internal.htm

  

* * *

AS ABAP Release 753, ©Copyright 2019 SAP AG. All rights reserved.

[ABAP Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP − Reference](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Editing](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Editing](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) →  [READ REPORT](javascript:call_link\('abapread_report.htm'\)) → 

READ REPORT - Internal Addition

This addition is for internal use only.
It must not be used in application programs.

Addition:

... STATE state

Effect

This addition determines whether the statement uses the active version or an inactive version of the repository object. state can have the values "A" (for active) and "I" (for inactive), which is checked statically if specified as a literal.

-   If the addition state is not specified, the statement accesses either
    

-   the active version of the repository object or

-   the inactive version of the repository object in the worklist of the current user. If there are no inactive versions in the worklist of the current user, the statement accesses the active version of the repository object.

Before the statement can evaluate the worklist of the current user, it must be prepared accordingly. This can be done using, for example, the function module RS\_WORKING\_AREA\_PREPARE. If the worklist is not prepared, the statement accesses the active version of the repository object.

-   If the addition state is specified, the statement accesses
    

-   the active version of the repository object if "A" is specified,

-   the inactive version of the repository object if "I" is specified. The user to which the inactive version is assigned is not important here or whether the version is part of a worklist. If there are no inactive versions, the object is not accessed and sy-subrc is set to 4.
    

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Non-Handleable Exceptions

-   Cause: state has a value other than "A" or "I".
    Runtime error: INSERT\_REPORT\_ILLEGAL\_STATE
