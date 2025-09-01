  

* * *

AS ABAP Release 754, ©Copyright 2019 SAP SE. All rights reserved.

[ABAP Keyword Documentation](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap.htm) →  [ABAP − Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_reference.htm) →  [Obsolete Language Elements](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_obsolete.htm) →  [Obsolete Program Flow](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_program_flow.htm) →  [Obsolete Control Structures](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenobsolete_control_structures.htm) → 

DO - VARYING

[Quick Reference](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdo_shortref.htm)

Obsolete Syntax

DO ... VARYING dobj FROM dobj1 NEXT dobj2 *\[*RANGE range*\]*
      *\[*VARYING ...*\]*.
  *\[*statement\_block*\]*
ENDDO.

Effect

The addition VARYING assigns a new value to a variable dobj for each pass of a [DO](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapdo.htm) loop. It can be used more than once in a DO statement.

dobj1 and dobj2 are the first two data objects in a string of data objects that are the same distance apart in the memory. The data types of dobj, dobj1, and dobj2 must be flat and compatible with each other. dobj1 and dobj2 must be parts of a flat data object. These parts must be either structure components of the same structure or subareas of the same data object specified using offsets/lengths.

In the first pass of the loop, the content of the data object dobj1 is assigned to dobj, and in the second loop, the content of the data object dobj2 is assigned. In the subsequent loops, dobj is assigned the content of the data object that is the same distance in the memory from the previously assigned data object, as dobj2 is from dobj1. There is no type conversion.

If the [processing block](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenprocessing_block_glosry.htm "Glossary Entry") is exited correctly using ENDDO, [CHECK](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapcheck_loop.htm), or [EXIT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapexit_loop.htm), the content of the variable dobj at the end of the loop pass is assigned to the previously assigned data object dobj1 or dobj2 without conversion. If it is exited using another statement, such as [RETURN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapreturn.htm) or [RAISE EXCEPTION](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapraise_exception_class.htm), no conversion takes place.

The addition RANGE defines the memory area that can be processed using the addition VARYING. After RANGE, an elementary data object range of type c, n, or x, or a structure can be specified. The memory area of range must include the ranges of dobj1 and dobj2. In [deep](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry") structures, the deep components are exceptions to the permitted area. The DO loop must be ended before non-permitted memory areas are accessed, namely areas outside of range or their deep components. If not, a non-handleable exception is raised.

The addition RANGE can be omitted only if it is known statically that dobj1 and dobj2 are components from the same structure. The permitted memory area is then determined from the smallest substructure that contains dobj1 and dobj2.

Notes

-   The way the addition VARYING works depends on the internal layout of the working memory, which itself can be affected by [alignment gaps](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenalignment_gap_glosry.htm "Glossary Entry").
    
-   Instead of the addition VARYING, the statement [ASSIGN](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign.htm) should be used in the loop with the addition [INCREMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm).
    

Example

In the first DO loop, subareas of the data object text are edited using offset/length access. The addition RANGE must be specified here. In the second DO loop, the program accesses the components of the data object text. In this case, it is not necessary to specify RANGE. The third DO loop shows how the functions of the second loop can be programmed using the statement [ASSIGN INCREMENT](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abapassign_mem_area_dynamic_dobj.htm).

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

[Exceptions](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abenabap_language_exceptions.htm)

Non-Handleable Exceptions

-   Cause: Invalid access to [deep](https://help.sap.com/doc/abapdocu_754_index_htm/7.54/en-US/abendeep_glosry.htm "Glossary Entry") components within the area specified by the RANGE\-addition.
    Runtime error: DO\_WHILE\_VARY\_ILLEGAL\_ACCESS
    
-   Cause: Access to data outside the range specified by the RANGE addition.
    Runtime error: DO\_WHILE\_VARY\_NOT\_IN\_RANGE