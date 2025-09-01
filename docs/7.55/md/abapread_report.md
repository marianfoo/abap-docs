  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_reference.htm) →  [Program Maintenance](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_editing.htm) →  [Dynamic Program Development](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_dynamic.htm) →  [ABAP Source Code](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_generic_program.htm) → 

READ REPORT

[Short Reference](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_report_shortref.htm)

Syntax

READ REPORT prog INTO itab *\[*MAXIMUM WIDTH INTO wid*\]*.

Addition:

[... MAXIMUM WIDTH INTO wid](#!ABAP_ONE_ADD@1@)

Effect

This statement reads the source code of the program specified in prog from the [repository](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenrepository_glosry.htm "Glossary Entry") and copies its lines into the internal table itab. The previous content of itab is deleted. If the program cannot be loaded, the content of itab remains unchanged. By default, the source text of the active version of the program is read.

prog expects a [flat](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenflat_glosry.htm "Glossary Entry") character-like data object, which contains the name of the program to be read; the name is not case-sensitive. The internal table itab must be a [standard table](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenstandard_table_glosry.htm "Glossary Entry") without [secondary table keys](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abensecondary_table_key_glosry.htm "Glossary Entry") with a character-like line type. When the line length of the internal table is fixed, it must be long enough for the longest program line. Program lines that are too long raise a catchable exception. In the case of the line type string, the length of each line is dictated by the length of the imported program line. An empty program line produces an empty string.

System Fields

sy-subrc

Meaning

0

The program was imported.

4

The specified program was not found in the repository.

8

The specified program is a system program protected against reads.

Hints

-   A precise working knowledge of the programs' structures and names is vital if the statement READ REPORT is used for programs organized in a [master program](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenmaster_program_glosry.htm "Glossary Entry") and with [include programs](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abeninclude_program_glosry.htm "Glossary Entry") when they were created in ABAP Workbench.

-   The names of the master programs for [class pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenclass_pool_glosry.htm "Glossary Entry") and [function pools](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenfunction_pool_glosry.htm "Glossary Entry") do not match the names of the global class or function pool (see statements [CLASS-POOL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapclass-pool.htm) and [FUNCTION-POOL](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapfunction-pool.htm)).
    

Example

After a program is imported into an internal table source, a dedicated line is replaced by different source code from another internal table insertion. After a syntax check, a subroutine pool is generated from the modified program. The required security checks are indicated by comments.

DATA:
   template  TYPE c LENGTH 30,
   generated TYPE c LENGTH 30,
   source    TYPE TABLE OF string,
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

[Program Generation](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenprogram_generation_abexa.htm).

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

[Exceptions](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abenabap_language_exceptions.htm)

Catchable Exceptions

CX\_SY\_READ\_SRC\_LINE\_TOO\_LONG

-   Cause: At least one line of the source code is longer than the lines of the internal table itab.
    Runtime error: READ\_REPORT\_LINE\_TOO\_LONG
    

Continue
[READ REPORT, Internal Addition](https://help.sap.com/doc/abapdocu_755_index_htm/7.55/en-US/abapread_report_internal.htm)