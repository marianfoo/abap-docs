# ABAP - Keyword Documentation / ABAP - Reference / Program Flow Logic / Exception Handling / Class-Based Exceptions / Examples of Exceptions

Included pages: 4


### abenexception_abexas.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm) → 

Examples of Exceptions

Continue
![Example](exa.gif "Example") [Exceptions, RAISE](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenraise_abexa.htm)
![Example](exa.gif "Example") [Exceptions, TRY](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abentry_abexa.htm)
![Example](exa.gif "Example") [Exceptions - CATCH](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abencatch_exception_abexa.htm)


### abenraise_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm) →  [Examples of Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_abexas.htm) → 

Exceptions, RAISE

This example demonstrates the statement RAISE EXCEPTION.

Source Code

REPORT demo\_raise\_exception.
CLASS demo DEFINITION.
  PUBLIC SECTION.
    CLASS-METHODS main.
ENDCLASS.
CLASS demo IMPLEMENTATION.
  METHOD main.
    DATA: oref    TYPE REF TO cx\_demo\_constructor,
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
            cl\_demo\_output=>WRITE\_text( |{ position } { text }| ).
            RAISE EXCEPTION oref.
        ENDTRY.
      CATCH cx\_demo\_constructor INTO oref.
        text = oref->get\_text( ).
        oref->get\_source\_position(
          IMPORTING source\_line  = position ).
        cl\_demo\_output=>WRITE\_text( |{ position } { text }| ).
    ENDTRY.
    cl\_demo\_output=>display( ).  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  demo=>main( ).

Description

This example shows the two variants of the RAISE EXCEPTION statement. The first statement raises an exception of class CX\_DEMO\_CONSTRUCTOR in the inner TRY block, generates the relevant object, and passes the program name to the instance constructor. The inner CATCH block handles the exception, provides the exception text, and raises the exception again without generating a new object. The outer CATCH block handles the exception again. The CX\_DEMO\_CONSTRUCTOR class is defined in such a way that the passed program name appears in the exception text. The generated instance constructor takes care of this.

The line number in which the exception was raised is shown to indicate that, when the existing exception object was reused, information relevant to this object was modified.


### abentry_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm) →  [Examples of Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_abexas.htm) → 

Exceptions, TRY

This example demonstrates the TRYcontrol structure.

Source Code

REPORT demo\_try.
CLASS try\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA: result TYPE p LENGTH 8 DECIMALS 2,
                oref   TYPE REF TO cx\_root,
                text   TYPE string.
    CLASS-METHODS main.
  PRIVATE SECTION.
    CLASS-DATA number TYPE i.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS calculation
      IMPORTING  p\_number LIKE number
      CHANGING p\_result LIKE result
               p\_text   LIKE text
      RAISING  cx\_sy\_arithmetic\_error.
ENDCLASS.
CLASS try\_demo IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>request( CHANGING field = number ).
    out = cl\_demo\_output=>new( ).
    TRY.
        IF abs( number ) > 100.
          RAISE EXCEPTION TYPE cx\_demo\_abs\_too\_large.
        ENDIF.
        calculation( EXPORTING p\_number = number
                     CHANGING  p\_result = result
                               p\_text   = text ).
      CATCH cx\_sy\_arithmetic\_error INTO oref.
        text = oref->get\_text( ).
      CATCH cx\_root INTO oref.
        text = oref->get\_text( ).
    ENDTRY.
    IF NOT text IS INITIAL.
      out->write( text ).
    ENDIF.
    out->display( |Final result: { result ALIGN = LEFT }| ).
  ENDMETHOD.
  METHOD calculation.
    DATA l\_oref TYPE REF TO cx\_root.
    TRY.
        p\_result =  1 / p\_number.
        out->write(
          |Result of division: { p\_result ALIGN = LEFT }| ).
        p\_result = sqrt( p\_number ).
        out->write(
          |Result of square root: { p\_result ALIGN = LEFT }| ).
      CATCH cx\_sy\_zerodivide INTO l\_oref.
        p\_text = l\_oref->get\_text( ).
      CLEANUP.
        CLEAR p\_result.
    ENDTRY.
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  try\_demo=>main( ).

Description

-   If the content of number is larger than 100, in the TRY block the TRY control structure of the [framework program](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenframe_program_glosry.htm "Glossary Entry") will trigger an exception of the class CX\_DEMO\_ABS\_TOO\_LARGE. This exception is handled by the second CATCH block of the same TRY control structure since the subclass of the most general exception is CX\_ROOT.

-   If the content of number is 0, the runtime environment in the TRY block of the TRY control structure of the called method calculation triggers an exception of the predfined class CX\_SY\_ZERODIVIDE. This is handled in the CATCH block of the same TRY control structure.

-   If the content of number is a negative number, the runtime environment in the TRY block of the TRY control structure of the called method calculation triggers an exception of the predefined class CX\_SY\_ARG\_OUT\_OF\_DOMAIN. Since in this TRY control structure there is no handler defined for this exception, the exception is propagated from the method - which is possible through the declaration of the superclass CX\_SY\_ARITHMETIC\_ERROR with RAISING in the method interface. Beforehand, the CLEANUP block of the inner TRY control structure is executed.

-   Other possible exceptions are handled in the last CATCH block of the TRY control structure of the framework program. This block catches all possible exceptions through the specification of the most general exception class CX\_ROOT. If, for example, CX\_SY\_ARG\_OUT\_OF\_DOMAIN or one of its superclasses is not declared in the method interface, you would have the exception CX\_SY\_NO\_HANDLER, which would be handled in the last CATCH block.


### abencatch_exception_abexa.htm

  

* * *

SAP NetWeaver AS ABAP Release 752, ©Copyright 2017 SAP AG. All rights reserved.

[ABAP - Keyword Documentation](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap.htm) →  [ABAP - Reference](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_reference.htm) →  [Program Flow Logic](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_flow_logic.htm) →  [Exception Handling](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenabap_exceptions.htm) →  [Class-Based Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexceptions.htm) →  [Examples of Exceptions](https://help.sap.com/doc/abapdocu_752_index_htm/7.52/en-US/abenexception_abexas.htm) → 

Exceptions - CATCH

The example demonstrates the catching of class based exceptions.

Source Code

REPORT demo\_catch\_exception.
DATA(in) = cl\_demo\_input=>new( ).
DATA: resumable     TYPE abap\_bool VALUE abap\_false,
      before\_unwind TYPE abap\_bool VALUE abap\_false,
      resume        TYPE abap\_bool VALUE abap\_false.
in->add\_field( EXPORTING as\_checkbox = 'X'
                         text = 'RAISE RESUMABLE'
               CHANGING  field = resumable
)->add\_field( EXPORTING as\_checkbox = 'X'
                         text = 'CATCH BEFORE UNWIND'
               CHANGING  field = before\_unwind
)->add\_field( EXPORTING as\_checkbox = 'X'
                         text = 'RESUME'
               CHANGING  field = resume
)->request( ).
CLASS lcx\_exception DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS exc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA out TYPE REF TO if\_demo\_output.
    CLASS-METHODS: main,
      meth1 RAISING lcx\_exception,
      meth2 RAISING RESUMABLE(lcx\_exception).
ENDCLASS.
FIELD-SYMBOLS <fs> TYPE any.
CLASS exc\_demo IMPLEMENTATION.
  METHOD main.
    out = cl\_demo\_output=>new( ).
    DATA exc TYPE REF TO lcx\_exception.
    IF before\_unwind = abap\_false.
      TRY.
          out->write( 'Trying method call' ).
          IF resumable = abap\_false.
            exc\_demo=>meth1( ).
          ELSEIF resumable = abap\_true.
            exc\_demo=>meth2( ).
          ENDIF.
        CATCH lcx\_exception.
          IF <fs> IS ASSIGNED.
            out->write( 'Context of method available' ).
          ELSE.
            out->write( 'Context of method not available' ).
          ENDIF.
      ENDTRY.
      out->write( 'Continue after main TRY block' ).
    ELSEIF before\_unwind = abap\_true.
      TRY.
          out->write( 'Trying method call' ).
          IF resumable = abap\_false.
            exc\_demo=>meth1( ).
          ELSEIF resumable = abap\_true.
            exc\_demo=>meth2( ).
          ENDIF.
        CATCH BEFORE UNWIND lcx\_exception INTO exc.
          IF <fs> IS ASSIGNED.
            out->write( 'Context of method available' ).
          ELSE.
            out->write( 'Context of method not available' ).
          ENDIF.
          IF resume = abap\_true.
            IF exc->is\_resumable = abap\_true.
              RESUME.
            ELSE.
              out->write( 'Resumption not possible' ).
            ENDIF.
          ENDIF.
      ENDTRY.
      out->write( 'Continue after main TRY block' ).
    ENDIF.
    out->display( ).
  ENDMETHOD.
  METHOD meth1.
    DATA loc TYPE i.
    ASSIGN loc TO <fs>.
    TRY.
        out->write( 'Raising non-resumable exception' ).
        RAISE EXCEPTION TYPE lcx\_exception.
        out->write( 'Never executed' ).
      CLEANUP.
        out->write( 'Cleanup in method' ).
    ENDTRY.
    out->write( 'Continue after TRY block in method' ).
  ENDMETHOD.
  METHOD meth2.
    DATA loc TYPE i.
    ASSIGN loc TO <fs>.
    TRY.
        out->write( 'Raising resumable exception' ).
        RAISE RESUMABLE EXCEPTION TYPE lcx\_exception.
        out->write( 'Resuming method' ).
      CLEANUP.
        out->write( 'Cleanup in method' ).
    ENDTRY.
    out->write( 'Continue after TRY block in method' ).
  ENDMETHOD.
ENDCLASS.
START-OF-SELECTION.
  exc\_demo=>main( ).

Description

The meth1 method raises a non-resumable exception, the meth2 method raises a resumable exception that is handled in the TRY\-control structure of the method main using CATCH.

-   If handling takes place without BEFORE UNWIND, the CLEANUP block is executed in both cases before handling and the context of the method called is not available during handling.

-   If handling takes place with BEFORE UNWIND, the context of the method called is available in both cases during handling and the CLEANUP block is executed after the handling.

-   When a resumable exception is raised, the RESUME statement can be executed during the handling. This statement makes sure that processing in the method called is continued without its CLEANUP block being executed.
