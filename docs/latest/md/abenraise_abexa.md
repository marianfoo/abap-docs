  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap.htm) →  [ABAP - Programming Language](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexceptions.htm) →  [Examples of Exceptions](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_abexas.htm) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%2C%20RAISE%2C%20ABENRAISE_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exceptions, RAISE

This example demonstrates the statement RAISE EXCEPTION.

Source Code   

\* Public class definition
CLASS cl\_demo\_raise\_exception DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_raise\_exception IMPLEMENTATION.
  METHOD main.
    DATA: oref     TYPE REF TO cx\_demo\_constructor,
          text     TYPE string,
          position TYPE i.
    TRY.
        TRY.
            RAISE EXCEPTION TYPE cx\_demo\_constructor
              EXPORTING
                my\_text = sy-repid.
          CATCH cx\_demo\_constructor INTO oref.
            text = oref->get\_text( ).
            oref->get\_source\_position(
              IMPORTING  source\_line  = position ).
            out->write\_text( |{ position } { text }| ).
            RAISE EXCEPTION oref.
        ENDTRY.
      CATCH cx\_demo\_constructor INTO oref.
        text = oref->get\_text( ).
        oref->get\_source\_position(
          IMPORTING source\_line  = position ).
        out->write\_text( |{ position } { text }| ).
    ENDTRY.
  ENDMETHOD.
ENDCLASS.

Description   

This example shows the two variants of the statement RAISE EXCEPTION. The first statement raises an exception of the class CX\_DEMO\_CONSTRUCTOR in the inner TRY block, creates the relevant object, and passes the current program name to the instance constructor. The inner CATCH block handles the exception, produces the exception text as output and raises the exception again without creating a new object. The outer CATCH block handles the exception again. The class CX\_DEMO\_CONSTRUCTOR is defined in such a way that the passed program name appears in the exception text. The generated instance constructor ensures this.

The output of the line number in which the exception was raised indicates that, when the existing exception object was reused, its information was changed.