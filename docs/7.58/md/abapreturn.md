  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Calling and Exiting Program Units](javascript:call_link\('abenabap_execution.htm'\)) →  [Exiting Program Units](javascript:call_link\('abenleave_program_units.htm'\)) →  [Exiting Processing Blocks](javascript:call_link\('abenleave_processing_blocks.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20RETURN%2C%20ABAPRETURN%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

RETURN

[Short Reference](javascript:call_link\('abapreturn_shortref.htm'\))

Syntax

RETURN *\[*expr*\]*.

Addition:

[... *\[*expr*\]*](#!ABAP_ONE_ADD@1@)

Effect

This statement immediately terminates the current processing block. It can appear at any point in a [processing block](javascript:call_link\('abenprocessing_block_glosry.htm'\) "Glossary Entry") and terminates this block regardless of the statement block or control structure in which the statement appears.

After the processing block has been exited, the runtime framework behaves as when the [processing block is exited in a regular way](javascript:call_link\('abenend_processing_blocks.htm'\)), with the exception of [LOAD-OF-PROGRAM](javascript:call_link\('abapload-of-program.htm'\)) and the [reporting event blocks](javascript:call_link\('abenreporting_event_glosry.htm'\) "Glossary Entry") START-OF-SELECTION and GET. In particular, the output parameters of procedures are passed on to the bound actual parameters.

-   The event block LOAD-OF-PROGRAM cannot be exited using RETURN.
-   After the reporting event block START-OF-SELECTION is terminated using RETURN, the runtime framework does not raise any more reporting events and instead calls the list processor directly to display the basic list.
-   After the reporting event block GET is terminated using RETURN, subordinate nodes in the hierarchical structure of the linked [logical database](javascript:call_link\('abenlogical_data_base_glosry.htm'\) "Glossary Entry") are no longer processed. The logical database reads the next line of the current node or next higher node, if it has reached the end of the hierarchy level.

Programming Guideline

[Only use RETURN to exit procedures](javascript:call_link\('abenexit_procedure_guidl.htm'\) "Guideline")

Hints

-   The statement RETURN is generally intended for early but proper returns from processing blocks.
-   Especially in [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), the actual value of the [return value](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") is passed to the caller.
-   Since RETURN behaves differently in [GET](javascript:call_link\('abapget-.htm'\)) events than when the event block is terminated as usual, the statement [REJECT](javascript:call_link\('abapreject_shortref.htm'\)) should be used there, which was designed especially for this purpose.

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

In [functional methods](javascript:call_link\('abenfunctional_method_glosry.htm'\) "Glossary Entry"), that is methods with one [return value](javascript:call_link\('abenreturn_value_glosry.htm'\) "Glossary Entry") r, a data object or an expression expr can be placed behind RETURN where expr is a [general expression position](javascript:call_link\('abengeneral_expr_position_glosry.htm'\) "Glossary Entry"). The statement

RETURN expr.

acts as a short form of the statements:

r = expr.
RETURN.

That means:

-   The result of the expression expr is passed as the return value r of the method to the caller.
-   The result of the expression expr must be [convertible](javascript:call_link\('abenconvertible_glosry.htm'\) "Glossary Entry") to the return value r of the method.
-   For expr, a [constructor expression](javascript:call_link\('abenconstructor_expression_glosry.htm'\) "Glossary Entry") with the specification # for the type can be used. Then the type is inferred from the return value r.

Hints

-   It is possible to write
    
    RETURN r.
    
    where r is the return value. In this case, the assignment r = r is skipped internally.
    
-   If RETURN is the last statement in front of ENDMETHOD, it is skipped internally and RETURN expr works in the same way as r = expr.
-   In any other context than a functional method, the RETURN statement has no addition.

Example

A [conditional iteration](javascript:call_link\('abenfor_conditional.htm'\)) with FOR is used behind RETURN to fill a tabular return value. In case of an error (overflow), the exception is caught and an empty table is constructed behind RETURN.

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