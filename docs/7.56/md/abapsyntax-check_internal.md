  

* * *

AS ABAP Release 756, ©Copyright 2021 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Dynamic Program Development](javascript:call_link\('abenabap_language_dynamic.htm'\)) →  [ABAP Source Code](javascript:call_link\('abenabap_generic_program.htm'\)) →  [SYNTAX-CHECK](javascript:call_link\('abapsyntax-check_for_itab.htm'\)) → 

SYNTAX-CHECK, Internal Additions

These additions are for internal use only.
Do not use them in application programs.

Additions:

[1\. ... SHORTDUMP-ID sid](#!ABAP_ADDITION_1@1@)
[2\. ... TRACE-TABLE trt](#!ABAP_ADDITION_2@2@)
[3\. ... REPLACING incl](#!ABAP_ADDITION_3@3@)
[4\. ... FRAME ENTRY dir](#!ABAP_ADDITION_4@4@)
[5\. ... ID id TABLE idt](#!ABAP_ADDITION_5@5@)
[6\. ... FILTER flt](#!ABAP_ADDITION_6@6@)

Addition 1   

... SHORTDUMP-ID sid

Effect

If a runtime error occurs, the field sid returns the maximum 30-character key of the corresponding [short dump](javascript:call_link\('abenshort_dump_glosry.htm'\) "Glossary Entry").

Addition 2   

... TRACE-TABLE trt

Effect

Any trace output is stored in the internal table trt. The trace output is controlled by the statements SYNTAX-TRACE ON and SYNTAX-TRACE OFF. A standard table without secondary keys can be specified for trt.

Addition 3   

... REPLACING incl

Effect

This addition can only be used together with the PROGRAM addition and under the following prerequisites:

The program text contained in the internal table itab does not include the compilation unit, it contains an [include program](javascript:call_link\('abeninclude_program_glosry.htm'\) "Glossary Entry") instead, and the program named under PROGRAM is to be checked. However, if the include program specified in incl is included in this program, the content of the internal table itab should be used instead.

Addition 4   

... FRAME ENTRY dir

Effect

The attributes required for checking the program (e.g. [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry"), [program type](javascript:call_link\('abenprogram_type_glosry.htm'\) "Glossary Entry")) are taken from the field dir. Here, dir expects a structure of type TRDIR.

Addition 5   

... ID id TABLE idt

Effect

This addition writes information to the internal table idt. The identifier id controls the type of information that is written to the associated table itab.

For correction proposals (ID 'CORR'), the type pool SLIN must be included. For other information, the type pool SYNT must be included. These type pools contain the required type specifications.

After ID, the following values can be entered for id that create the specified information:

Information About Use in Internal SAP Development Tools

Value

Information

MSG

Warning messages

CORR

Correction proposals

ERR

Error messages

If ERR (collection of error messages) is specified and the entire source code cannot be processed, sy-subrc is set to the value 6 instead of the value 4.

Information About Use Only in Compiler-Related Tools

Value

Information

SYMB

Technical dump of the symbol table

DATA

Data objects of the program

DPAR

Help properties of data objects

TYPE

Type objects of program

FOTY

Type objects used by subroutines

FUTY

Type objects used by function modules

TYCH

Components of type objects

CROS

Referenced data objects

STR

Name

FORM

Subroutines

FPAR

Subroutine parameters (FORM)

PERF

Subroutine calls

APAR

Subroutine parameters (PERFORM)

FUNC

Function modules

FFPA

Function module parameter

CALL

Function module calls

FAPA

Function module parameters (CALL FUNCTION)

HYPH

Data objects with hyphens in names

INCL

Includes in program

This information should never be evaluated in general tools, since its structure can change at any time.

Hint

Other values after ID are undocumented, partially obsolete, and not released for use.

Example

Collecting syntax warnings in a table.

DATA:  prog\_tab TYPE TABLE OF string,
       message  TYPE string,
       line     TYPE i,
       word     TYPE string,
       warnings TYPE STANDARD TABLE OF rslinlmsg.
SYNTAX-CHECK FOR prog\_tab
                 MESSAGE message
                 LINE    line
                 WORD    word
                 PROGRAM '...'
                 ID 'MSG' TABLE warnings.

Addition 6   

... FILTER flt

Effect

Only the ABAP statements specified in flt are respected in the check. flt must have the type SYNT\_FILTER from the [type pool](javascript:call_link\('abentype_pool_glosry.htm'\) "Glossary Entry") SYNT.

Possible values are:

"SYNT\_FILTER\_INTERFACE"

Statements included in the interface of a program

"SYNT\_FILTER\_MCALL"

Statements that are required for method calls.