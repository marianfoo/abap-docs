---
title: "Source Code"
description: |
  REPORT demo_floating_point_numbers. DATA ok_code       TYPE sy-ucomm. DATA op1           TYPE c LENGTH 46. DATA op2           TYPE c LENGTH 46. DATA operator      TYPE c LENGTH 2. DATA res_df34      TYPE c LENGTH 46. DATA res_df16      TYPE c LENGTH 46. DATA res_f         TYPE c LENGTH 46. DA
version: "7.57"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenfloating_point_numbers_abexa.htm"
abapFile: "abenfloating_point_numbers_abexa.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abenfloating", "point", "numbers", "abexa"]
---

* * *

AS ABAP Release 757, ©Copyright 2023 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_reference.htm) →  [Processing Internal Data](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenabap_data_working.htm) →  [Numeric Calculations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abencompute_expressions.htm) →  [Arithmetic Expressions (arith\_exp)](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abapcompute_arith.htm) →  [arith\_exp - Arithmetic Operators](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm) → 

 [![](Mail.gif?object=Mail.gif&sap-language=EN "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback on ABAP Documentation&body=Document: arith_exp - Floating Point Numbers, ABENFLOATING_POINT_NUMBERS_ABEXA, 757%0D%0A%0D%0A
Error:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion for improvement:)

arith\_exp - Floating Point Numbers

The example demonstrates [arithmetic calculations](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenarith_operators.htm) with floating point numbers.

Source Code   

REPORT demo\_floating\_point\_numbers.
DATA ok\_code       TYPE sy-ucomm.
DATA op1           TYPE c LENGTH 46.
DATA op2           TYPE c LENGTH 46.
DATA operator      TYPE c LENGTH 2.
DATA res\_df34      TYPE c LENGTH 46.
DATA res\_df16      TYPE c LENGTH 46.
DATA res\_f         TYPE c LENGTH 46.
DATA exct\_34       TYPE c LENGTH 4.
DATA exct\_16       TYPE c LENGTH 4.
DATA continue\_flag TYPE c LENGTH 1.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA: df34\_1   TYPE decfloat34,
                df34\_2   TYPE decfloat34.
    CLASS-METHODS: start,
                   main,
                   init\_operator,
                   check\_operand IMPORTING operand TYPE  c
                                 CHANGING  df34    TYPE  decfloat34,
                   handle\_user\_command IMPORTING ucomm TYPE sy-ucomm.
  PRIVATE SECTION.
    CLASS-DATA: operator\_list TYPE vrm\_values,
                df34\_r        TYPE decfloat34,
                df16\_r        TYPE decfloat16,
                f1            TYPE f,
                f2            TYPE f,
                f\_r           TYPE f.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
\*   Calculate decfloat34
    TRY.
        CASE operator.
          WHEN ' '.
            df34\_r = EXACT #( + df34\_1 ).
          WHEN '+'.
            df34\_r = EXACT #( df34\_1 + df34\_2 ).
          WHEN '-'.
            df34\_r = EXACT #( df34\_1 - df34\_2 ).
          WHEN '\*'.
            df34\_r = EXACT #( df34\_1 \* df34\_2 ).
          WHEN '/'.
            df34\_r = EXACT #( df34\_1 / df34\_2 ).
          WHEN '\*\*'.
            df34\_r = df34\_1 \*\* df34\_2.
            CLEAR exct\_34.
        ENDCASE.
      CATCH cx\_sy\_conversion\_overflow.
        res\_df34 = text-ove.
        CLEAR exct\_34.
      CATCH cx\_sy\_arithmetic\_overflow.
        res\_df34 = text-ove.
        CLEAR exct\_34.
      CATCH cx\_sy\_conversion\_rounding INTO DATA(exrnd).
        df34\_r = exrnd->value.
        exct\_34 = text-noe.
    ENDTRY.
    IF res\_df34 = ' '.
      res\_df34 = |{ df34\_r ALIGN = LEFT STYLE = SCALE\_PRESERVING }|.
      continue\_flag = 'X'.
    ENDIF.
\*   Calculate decfloat16
    TRY.
        CASE operator.
          WHEN ' '.
            df16\_r = EXACT #( df34\_1 ).
          WHEN '+'.
            df16\_r = EXACT #( df34\_1 + df34\_2 ).
          WHEN '-'.
            df16\_r = EXACT #( df34\_1 - df34\_2 ).
          WHEN '\*'.
            df16\_r = EXACT #( df34\_1 \* df34\_2 ).
          WHEN '/'.
            df16\_r = EXACT #( df34\_1 / df34\_2 ).
          WHEN '\*\*'.
            df16\_r = df34\_1 \*\* df34\_2.
            CLEAR exct\_16.
        ENDCASE.
      CATCH cx\_sy\_conversion\_overflow.
        res\_df16 = text-ove.
        CLEAR exct\_16.
      CATCH cx\_sy\_arithmetic\_overflow.
        res\_df16 = text-ove.
        CLEAR exct\_16.
      CATCH cx\_sy\_conversion\_rounding INTO exrnd.
        df16\_r = exrnd->value.
        exct\_16 = text-noe.
    ENDTRY.
    IF res\_df16 = ' '.
      res\_df16 = |{ df16\_r ALIGN = LEFT STYLE = SCALE\_PRESERVING }|.
    ENDIF.
\*   Calculate type f
    TRY.
        f1 = df34\_1.
        f2 = df34\_2.
        CASE operator.
          WHEN ' '.
            f\_r = f1.
          WHEN '+'.
            f\_r = f1 + f2.
          WHEN '-'.
            f\_r = f1 - f2.
          WHEN '\*'.
            f\_r = f1 \* f2.
          WHEN '/'.
            f\_r = f1 / f2.
          WHEN '\*\*'.
            f\_r = f1 \*\* f2.
        ENDCASE.
      CATCH cx\_sy\_conversion\_overflow.
        res\_f = text-ove.
      CATCH cx\_sy\_arithmetic\_overflow.
        res\_f = text-ove.
    ENDTRY.
    IF res\_f = ' '.
      res\_f = |{ f\_r ALIGN = LEFT }|.
    ENDIF.
  ENDMETHOD.
  METHOD start.
    CALL SCREEN 100.
  ENDMETHOD.
  METHOD check\_operand.
    DATA rc    TYPE i.
    CLEAR exct\_34 .
    CLEAR exct\_16 .
    TRY.
        cl\_abap\_decfloat=>read\_decfloat34(
        EXPORTING  string = operand
        IMPORTING  value  = df34
                   rc     = rc  ).
        IF rc = cl\_abap\_decfloat=>parse\_inexact OR
           rc = cl\_abap\_decfloat=>parse\_underflow.
          exct\_34 = text-noe.
          exct\_16 = text-noe.
        ENDIF.
      CATCH cx\_sy\_conversion\_overflow.
        MESSAGE e002(sy) WITH |OVERFLOW ({ operand } TOO LARGE)|.
      CATCH cx\_abap\_decfloat\_parse\_err INTO FINAL(expe).
        MESSAGE expe TYPE 'E'.
    ENDTRY.
  ENDMETHOD.
  METHOD init\_operator.
    DATA name  TYPE vrm\_id VALUE 'OPERATOR'.
    IF operator\_list IS INITIAL.
      operator\_list = VALUE #( ( )
                               ( key  = '+'  text = '+' )
                               ( key  = '-'  text = '-' )
                               ( key  = '\*'  text = '\*' )
                               ( key  = '/'  text = '/' )
                               ( key  = '\*\*' text = '\*\*' ) ).
    ENDIF.
    CALL FUNCTION 'VRM\_SET\_VALUES'
      EXPORTING
        id     = name
        values = operator\_list.
  ENDMETHOD.
  METHOD handle\_user\_command.
    CASE ucomm.
      WHEN 'EXECUTE'.
        CLEAR: res\_df34, res\_df16, res\_f,
               continue\_flag.
        IF exct\_34 = ' '.
          exct\_34 = text-yes.
        ENDIF.
        IF exct\_16 = ' '.
          exct\_16 = text-yes.
        ENDIF.
        demo=>main( ).
      WHEN 'REFRESH'.
        CLEAR: op1, op2, operator,
               res\_df34, res\_df16, res\_f,
               exct\_34, exct\_16,
               continue\_flag.
      WHEN 'CONTINUE'.
        op1 = |{ df34\_r COUNTRY = '   ' }|.
        CLEAR: op2, operator,
               res\_df34, res\_df16, res\_f,
               exct\_34, exct\_16,
               continue\_flag.
      WHEN OTHERS.
        "do nothing
    ENDCASE.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>start( ).
MODULE status\_100 OUTPUT.
  IF continue\_flag = 'X'.
    SET PF-STATUS 'STATUS\_100'.
  ELSE.
    SET PF-STATUS 'STATUS\_100' EXCLUDING 'CONTINUE'.
  ENDIF.
  SET TITLEBAR  'TITLE\_100'.
  demo=>init\_operator( ).
ENDMODULE.
MODULE cancel INPUT.
  LEAVE PROGRAM.
ENDMODULE.
MODULE user\_command\_100 INPUT.
  demo=>handle\_user\_command( ok\_code ).
  CLEAR ok\_code.
ENDMODULE.
MODULE check\_op1 INPUT.
  demo=>check\_operand(
    EXPORTING operand = op1
    CHANGING  df34    = demo=>df34\_1 ).
ENDMODULE.
MODULE check\_op2 INPUT.
  demo=>check\_operand(
    EXPORTING operand = op2
    CHANGING  df34    = demo=>df34\_2 ).
ENDMODULE.

Description   

Two operands and different arithmetic operators can be entered. The calculation is performed for the data types decfloat34, decfloat16, and f. For decimal floating point numbers, the losslessness of the calculation is checked using the [lossless operator](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenlossless_operator_glosry.htm "Glossary Entry") [EXACT](https://help.sap.com/doc/abapdocu_757_index_htm/7.57/en-US/abenconstructor_expression_exact.htm).