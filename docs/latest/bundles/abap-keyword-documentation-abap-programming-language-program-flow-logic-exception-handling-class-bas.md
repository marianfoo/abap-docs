# ABAP - Keyword Documentation / ABAP - Programming Language / Program Flow Logic / Exception Handling / Class-Based Exceptions / Examples of Exceptions

Included pages: 4



## 🔗 Source References

**Base URL**: [ABAP Keyword Documentation latest](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm)

**Individual Pages in this Bundle**:
- [abenexception_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_abexas.htm)
- [abenraise_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_abexa.htm)
- [abentry_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentry_abexa.htm)
- [abencatch_exception_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatch_exception_abexa.htm)

**Bundle Contains**: 4 documentation pages
**Version**: ABAP latest
**Generated**: 2025-09-01T11:25:44.943Z

---

### abenexception_abexas.htm

> **📖 Official SAP Documentation**: [abenexception_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_abexas.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Examples%20of%20Exceptions%2C%20ABENEXCEPTION_ABEXAS%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Examples of Exceptions

-   [Exceptions, RAISE](javascript:call_link\('abenraise_abexa.htm'\))
-   [Exceptions, TRY](javascript:call_link\('abentry_abexa.htm'\))
-   [Exceptions, CATCH](javascript:call_link\('abencatch_exception_abexa.htm'\))

Continue
![Example](exa.gif "Example") [Exceptions, RAISE](javascript:call_link\('abenraise_abexa.htm'\))
![Example](exa.gif "Example") [Exceptions, TRY](javascript:call_link\('abentry_abexa.htm'\))
![Example](exa.gif "Example") [Exceptions, CATCH](javascript:call_link\('abencatch_exception_abexa.htm'\))



**📖 Source**: [abenexception_abexas.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenexception_abexas.htm)

### abenraise_abexa.htm

> **📖 Official SAP Documentation**: [abenraise_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Examples of Exceptions](javascript:call_link\('abenexception_abexas.htm'\)) → 

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



**📖 Source**: [abenraise_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abenraise_abexa.htm)

### abentry_abexa.htm

> **📖 Official SAP Documentation**: [abentry_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentry_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Examples of Exceptions](javascript:call_link\('abenexception_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%2C%20TRY%2C%20ABENTRY_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exceptions, TRY

This example demonstrates the TRY control structure.

Source Code   

\* Public class definition
CLASS cl\_demo\_try DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC.
  PUBLIC SECTION.
    DATA: result TYPE p LENGTH 8 DECIMALS 2,
          oref   TYPE REF TO cx\_root,
          text   TYPE string.
    METHODS main REDEFINITION.
  PRIVATE SECTION.
    DATA number TYPE i.
    METHODS calculation
      IMPORTING p\_number LIKE number
      CHANGING  p\_result LIKE result
                p\_text   LIKE text
      RAISING   cx\_sy\_arithmetic\_error.
ENDCLASS.
\* Public class implementation
CLASS cl\_demo\_try IMPLEMENTATION.
  METHOD main.
    cl\_demo\_input=>new( )->request( CHANGING field = number ).
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
    out->write( |Final result: { result ALIGN = LEFT }| ).
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

Description   

-   If the content of number is greater than 100, the TRY control structure of the [compilation unit](javascript:call_link\('abencompilation_unit_glosry.htm'\) "Glossary Entry") raises an exception of the class CX\_DEMO\_ABS\_TOO\_LARGE in the TRY block. This exception is handled by the second CATCH block of the same TRY control structure, since the subclass of the most general exception is CX\_ROOT.
-   If the content of number is 0, the runtime framework in the TRY block of the TRY control structure of the called method calculation raises an exception of the predefined class CX\_SY\_ZERODIVIDE. This is handled in the CATCH block of the same TRY control structure.
-   If the content of number is a negative number, the runtime framework in the TRY block of the TRY control structure of the called method calculation raises an exception of the predefined class CX\_SY\_ARG\_OUT\_OF\_DOMAIN. Since no handler is defined for this exception in this TRY control structure, the exception is propagated from the method, which is made possible by the declaration of the superclass CX\_SY\_ARITHMETIC\_ERROR using RAISING in the method interface. The CLEANUP block of the inner TRY control structure is executed first.
-   Any other exceptions are handled in the final CATCH block of the TRY control structure of the compilation unit, which catches all possible exceptions by specifying the most generic exception class CX\_ROOT. If, for example, CX\_SY\_ARG\_OUT\_OF\_DOMAIN or one of its superclasses was not declared in the method interface, the exception CX\_SY\_NO\_HANDLER would be raised and would be handled in the final CATCH block.



**📖 Source**: [abentry_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abentry_abexa.htm)

### abencatch_exception_abexa.htm

> **📖 Official SAP Documentation**: [abencatch_exception_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatch_exception_abexa.htm)
> **🔍 Direct Link**: This section contains the complete content from the official SAP ABAP documentation page.


**📖 Source**: [abencatch_exception_abexa.htm](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/abencatch_exception_abexa.htm)


  

* * *

AS ABAP Release 758, ©Copyright 2024 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Flow Logic](javascript:call_link\('abenabap_flow_logic.htm'\)) →  [Exception Handling](javascript:call_link\('abenabap_exceptions.htm'\)) →  [Class-Based Exceptions](javascript:call_link\('abenexceptions.htm'\)) →  [Examples of Exceptions](javascript:call_link\('abenexception_abexas.htm'\)) → 

 [![](Mail.gif?object=Mail.gif "Feedback mail for displayed topic") Mail Feedback](mailto:f1_help@sap.com?subject=Feedback%20on%20ABAP%20Documentation&body=Document:%20Exceptions%2C%20CATCH%2C%20ABENCATCH_EXCEPTION_ABEXA%2C%20758%0D%0A%0D%0AError:%0D%0A%0D%0A%0D%0A%0D%0ASuggestion%20for%20improvement:)

Exceptions, CATCH

This example demonstrates how class-based exceptions are caught.

Source Code   

\* Public class definition
CLASS cl\_demo\_catch\_exception DEFINITION
  INHERITING FROM cl\_demo\_classrun
  PUBLIC
  CREATE PUBLIC .
  PUBLIC SECTION.
    METHODS main REDEFINITION.
ENDCLASS.
\* CCIMP
CLASS lcx\_exception DEFINITION INHERITING FROM cx\_static\_check.
ENDCLASS.
CLASS exc\_demo DEFINITION.
  PUBLIC SECTION.
    CLASS-DATA: in TYPE REF TO if\_demo\_input,
    out TYPE REF TO if\_demo\_output.
    CLASS-DATA dref TYPE REF TO data.
    CLASS-DATA: resumable TYPE abap\_bool VALUE abap\_false,
    before\_unwind TYPE abap\_bool VALUE abap\_false,
    resume TYPE abap\_bool VALUE abap\_false.
    CLASS-METHODS: main IMPORTING out TYPE REF TO if\_demo\_output,
    meth1 RAISING lcx\_exception,
    meth2 RAISING RESUMABLE(lcx\_exception).
ENDCLASS.
CLASS exc\_demo IMPLEMENTATION.
  METHOD main.
    exc\_demo=>out = out.
    in = cl\_demo\_input=>new( ).
    in->add\_field( EXPORTING as\_checkbox = 'X'
    text = 'RAISE RESUMABLE'
    CHANGING field = resumable
    )->add\_field( EXPORTING as\_checkbox = 'X'
    text = 'CATCH BEFORE UNWIND'
    CHANGING field = before\_unwind
    )->add\_field( EXPORTING as\_checkbox = 'X'
    text = 'RESUME'
    CHANGING field = resume
    )->request( ).
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
          IF dref IS BOUND.
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
          IF dref IS BOUND.
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
  ENDMETHOD.
  METHOD meth1.
    DATA loc TYPE i.
    dref = REF #( loc ).
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
    dref = REF #( loc ).
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
\* Public class implementation
CLASS cl\_demo\_catch\_exception IMPLEMENTATION.
  METHOD main.
    exc\_demo=>main( out ).
  ENDMETHOD.
ENDCLASS.

Description   

The method meth1 raises a non-resumable exception and the method meth2 raises a resumable exception that is handled in the TRY control structures of the method main using CATCH.

-   If handled without BEFORE UNWIND, the CLEANUP block is executed in both cases before handling and the context of the called method does not exist during handling.
-   If handled with BEFORE UNWIND, the context of the called method exists in both cases during handling and the CLEANUP block is executed after handling.
-   If a resumable exception is raised, the statement RESUME can be executed during handling, which ensures that processing in the called method is continued without its CLEANUP block being executed.
