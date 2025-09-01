---
title: "RETURN"
description: |
  Short Reference(https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreturn_shortref.htm) Syntax RETURN expr. Addition: ... expr(#!ABAP_ONE_ADD@1@) Effect This statement immediately terminates the current processing block. It can appear at any point in a processing blo
version: "7.58"
category: "general"
type: "abap-reference"
sourceUrl: "https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreturn.htm"
abapFile: "abapreturn.htm"
keywords: ["select", "do", "if", "case", "try", "catch", "method", "class", "data", "types", "abapreturn"]
---

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_reference.htm) →  [Calling and Exiting Program Units](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenabap_execution.htm) →  [Exiting Program Units](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleave_program_units.htm) →  [Exiting Processing Blocks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenleave_processing_blocks.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RETURN%2C%20ABAPRETURN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RETURN

[Short Reference](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreturn_shortref.htm)

Syntax

RETURN *\[*expr*\]*.

Addition:

[... *\[*expr*\]*](#!ABAP_ONE_ADD@1@)

Effect

This statement immediately terminates the current processing block. It can appear at any point in a [processing block](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenprocessing_block_glosry.htm "Glossary Entry") and terminates this block regardless of the statement block or control structure in which the statement appears.

After the processing block has been exited, the runtime framework behaves as when the [processing block is exited in a regular way](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenend_processing_blocks.htm), with the exception of [LOAD-OF-PROGRAM](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapload-of-program.htm) and the [reporting event blocks](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreporting_event_glosry.htm "Glossary Entry") START-OF-SELECTION and GET. In particular, the output parameters of procedures are passed on to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using RETURN.
-   After the reporting event block START-OF-SELECTION is terminated using RETURN, the runtime framework does not raise any more reporting events and instead calls the list processor directly to display the basic list.
-   After the reporting event block GET is terminated using RETURN, subordinate nodes in the hierarchical structure of the linked [logical database](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenlogical_data_base_glosry.htm "Glossary Entry") are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

Programming Guideline

[Only use RETURN to exit procedures](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenexit_procedure_guidl.htm "Guideline")

Hints

-   The statement RETURN is generally intended for early but proper returns from processing blocks.
-   Especially in [functional methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), the actual value of the [return value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreturn_value_glosry.htm "Glossary Entry") is passed to the caller.
-   Since RETURN behaves differently in [GET](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapget-.htm) events than when the event block is terminated as usual, the statement [REJECT](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abapreject_shortref.htm) should be used there, which was designed especially for this purpose.

Example

Exit of the method show\_list using RETURN if one of the formal parameters required (structure or data\_tab) is initial.

CLASS cls DEFINITION.
  PUBLIC SECTION.
    TYPES table\_type TYPE STANDARD TABLE OF i.
    METHODS show\_list
      IMPORTING structure TYPE c
      CHANGING  data\_tab  TYPE ANY TABLE.
ENDCLASS.
CLASS cls IMPLEMENTATION.
  METHOD show\_list.
    DATA alv\_list TYPE REF TO cl\_gui\_alv\_grid.
    IF structure IS INITIAL OR
       data\_tab  IS INITIAL.
      RETURN.
    ENDIF.
    CREATE OBJECT alv\_list
      EXPORTING
        i\_parent = cl\_gui\_container=>screen0.
    alv\_list->set\_table\_for\_first\_display(
      EXPORTING i\_structure\_name = structure
      CHANGING  it\_outtab        = data\_tab ).
  ENDMETHOD.
ENDCLASS.

Addition   

... *\[*expr*\]*

Effect

In [functional methods](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfunctional_method_glosry.htm "Glossary Entry"), that is methods with one [return value](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenreturn_value_glosry.htm "Glossary Entry") r, a data object or an expression expr can be placed behind RETURN where expr is a [general expression position](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abengeneral_expr_position_glosry.htm "Glossary Entry"). The statement

RETURN expr.

acts as a short form of the statements:

r = expr.
RETURN.

That means:

-   The result of the expression expr is passed as the return value r of the method to the caller.
-   The result of the expression expr must be [convertible](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconvertible_glosry.htm "Glossary Entry") to the return value r of the method.
-   For expr, a [constructor expression](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenconstructor_expression_glosry.htm "Glossary Entry") with the specification # for the type can be used. Then the type is inferred from the return value r.

Hints

-   It is possible to write
    
    RETURN r.
    
    where r is the return value. In this case, the assignment r = r is skipped internally.
    
-   If RETURN is the last statement in front of ENDMETHOD, it is skipped internally and RETURN expr works in the same way as r = expr.
-   In any other context than a functional method, the RETURN statement has no addition.

Example

A [conditional iteration](https://help.sap.com/doc/abapdocu_758_index_htm/7.58/en-US/abenfor_conditional.htm) with FOR is used behind RETURN to fill a tabular return value. In case of an error (overflow), the exception is caught and an empty table is constructed behind RETURN.

CLASS demo DEFINITION.
  PUBLIC SECTION.
    TYPES:
      BEGIN OF line,
        num    TYPE i,
        square TYPE i,
      END OF line,
      squares TYPE SORTED TABLE OF line WITH UNIQUE KEY num.
    CLASS-METHODS main
      IMPORTING limit    TYPE i
      RETURNING VALUE(r) TYPE squares.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    TRY.
        RETURN VALUE #( FOR i = 1 UNTIL i > limit
                ( num = i square = ipow( base = i exp = 2 ) ) ).
      CATCH cx\_sy\_arithmetic\_error.
        RETURN VALUE #( ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.