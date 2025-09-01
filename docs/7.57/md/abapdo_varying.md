  

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Obsolete Language Elements](javascript:call_link\('abenabap_obsolete.htm'\)) →  [Obsolete Program Flow](javascript:call_link\('abenobsolete_program_flow.htm'\)) →  [Obsolete Control Structures](javascript:call_link\('abenobsolete_control_structures.htm'\)) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: DO, VARYING, ABAPDO_VARYING, 757%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion
for improvement:)

DO, VARYING

[Short Reference](javascript:call_link\('abapdo_shortref.htm'\))

Obsolete Syntax

DO ... VARYING dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
      *\[*VARYING ...*\]*.
  *\[*statement\_block*\]*
ENDDO.

Effect

The addition VARYING assigns a new value to a variable dobj for each pass of a [DO](javascript:call_link\('abapdo.htm'\)) loop. It can be used more than once in a DO statement.

dobj1 and dobj2 are the first two data objects in a sequence of data objects that are the same distance apart in the memory. The data types of dobj, dobj1, and dobj2 must be flat and compatible with each other. dobj1 and dobj2 must be parts of a flat data object. These parts are either structure components of the same structure or substrings of the same data object specified using offsets/lengths.

In the first loop pass, the content of the data object dobj1 is assigned to dobj. In the second loop pass, the content of the data object dobj2 is assigned. In the subsequent loop passes, dobj is assigned the content of the data object that is the same distance in the memory from the previously assigned data object, as dobj2 is from dobj1. There is no type conversion.

If the [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") is exited correctly using ENDDO, [CHECK](javascript:call_link\('abapcheck_loop.htm'\)), or [EXIT](javascript:call_link\('abapexit_loop.htm'\)), the content of the variable dobj at the end of the loop pass is assigned to the previously assigned data object dobj1 or dobj2 without conversion. If it is exited using another statement, such as [RETURN](javascript:call_link\('abapreturn.htm'\)) or [RAISE EXCEPTION](javascript:call_link\('abapraise_exception_class.htm'\)), no assignment takes place.

The addition RANGE defines the memory area that can be processed using the addition VARYING. After RANGE, an elementary data object range of type c, n, or x, or a structure can be specified. The memory area of range must include the memory range of dobj1 and dobj2. In [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") structures, the deep components are excluded from the allowed area. The DO loop must be ended before forbidden memory areas are accessed, that is, areas outside of range or its deep components. If not, an uncatchable exception is raised.

The addition RANGE can be omitted only if it can be known statically that dobj1 and dobj2 are components from the same structure. The allowed memory area is then determined from the smallest substructure that contains dobj1 and dobj2.

Hints

-   The way the addition VARYING works depends on the internal layout of the working memory, which itself can be affected by [alignment gaps](javascript:call_link\('abenalignment_gap_glosry.htm'\) "Glossary Entry").
-   Instead of the addition VARYING, the statement [ASSIGN](javascript:call_link\('abapassign.htm'\)) should be used in the loop with the addition [INCREMENT](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)).

Example

In the first DO loop, subareas of the data object text are processed using offset/length access. The addition RANGE must be specified here. In the second DO loop, the program accesses the components of the data object text. In this case, it is not necessary to specify RANGE. The third DO loop shows how the functions of the second loop can be programmed using the statement [ASSIGN INCREMENT](javascript:call_link\('abapassign_mem_area_dynamic_dobj.htm'\)).

DATA: BEGIN OF text,
        word1 TYPE c LENGTH 4 VALUE 'AAAA',
        word2 TYPE c LENGTH 4 VALUE 'BBBB',
        word3 TYPE c LENGTH 4 VALUE 'CCCC',
        word4 TYPE c LENGTH 4 VALUE 'DDDD',
      END OF text.
DATA: word  TYPE c LENGTH 4,
      char1 TYPE c LENGTH 1,
      char2 TYPE c LENGTH 1,
      leng TYPE i.
FIELD-SYMBOLS <word> LIKE text-word1.
DATA inc TYPE i.
DESCRIBE FIELD text LENGTH leng IN CHARACTER MODE.
leng /= 2.
cl\_demo\_output=>begin\_section( \`First Loop\` ).
DO leng TIMES VARYING char1 FROM text(1)
                            NEXT text+2(1) RANGE text
              VARYING char2 FROM text+1(1)
                            NEXT text+3(1) RANGE text.
  cl\_demo\_output=>write( |{ char1 } { char2 }| ).
  char1 = 'x'.
  char2 = 'y'.
ENDDO.
cl\_demo\_output=>next\_section( \`Second Loop\` ).
DO 4 TIMES VARYING word FROM text-word1 NEXT text-word2.
  cl\_demo\_output=>write( word ).
ENDDO.
cl\_demo\_output=>next\_section( \`Third Loop\` ).
DO.
  inc = sy-index  - 1.
  ASSIGN text-word1 INCREMENT inc TO <word> RANGE text.
  IF sy-subrc = 0.
    cl\_demo\_output=>write( <word> ).
  ELSE.
    EXIT.
  ENDIF.
ENDDO.
cl\_demo\_output=>display( ).

[Exceptions](javascript:call_link\('abenabap_language_exceptions.htm'\))

Uncatchable Exceptions

-   Cause: Invalid access to [deep](javascript:call_link\('abendeep_glosry.htm'\) "Glossary Entry") components within the area specified by the RANGE\-addition.
    Runtime error: DO\_WHILE\_VARY\_ILLEGAL\_ACCESS
-   Cause: Access to data outside the range specified by the RANGE addition.
    Runtime error: DO\_WHILE\_VARY\_NOT\_IN\_RANGE