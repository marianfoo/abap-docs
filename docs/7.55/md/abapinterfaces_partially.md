  

* * *

AS ABAP Release 755, ©Copyright 2020 SAP SE. All rights reserved.

[ABAP - Keyword Documentation](javascript:call_link\('abenabap.htm'\)) →  [ABAP - Programming Language](javascript:call_link\('abenabap_reference.htm'\)) →  [Program Maintenance](javascript:call_link\('abenprogram_editing.htm'\)) →  [Testing and Checking Programs](javascript:call_link\('abenabap_tests.htm'\)) →  [ABAP Unit](javascript:call_link\('abenabap_unit.htm'\)) → 

INTERFACES, PARTIALLY IMPLEMENTED

[Short Reference](javascript:call_link\('abapinterfaces_shortref.htm'\))

Syntax

[INTERFACES](javascript:call_link\('abapinterfaces_class.htm'\)) intf
  PARTIALLY IMPLEMENTED
  ...

Effect

The addition PARTIALLY IMPLEMENTED for statement [INTERFACES](javascript:call_link\('abapinterfaces_class.htm'\)) for implementing interfaces in classes can only be used in [test classes](javascript:call_link\('abentest_class_glosry.htm'\) "Glossary Entry"). This addition prevents the syntax check error/warning from occurring if not all of the concrete non-optional interface methods are implemented in the test class. The addition must be specified before the additions that list the attributes or methods.

If an interface method that is not implemented is called during a test, an exception from the class CX\_SY\_DYN\_CALL\_ILLEGAL\_METHOD is raised.

Hint

The addition is particularly useful when classes (acting as test doubles) implement interfaces and not all the methods of these implements are called by the code being tested. Without this addition, it would be necessary to implement all unnecessary methods without values and assign these methods the needed pragma. This is because implementing methods without values produces a warning from the extended program check.

Example

The class CL\_HTTP\_EXT\_SERVICE\_DEMO, described under [Calling an HTTP Service](javascript:call_link\('abenicf_service_abexa.htm'\)), is an example of production code. This class demonstrates the function of a simple HTTP service. If the service is used normally, the method IF\_HTTP\_EXTENSION~HANDLE\_REQUEST from [ICF](javascript:call_link\('abenicf_glosry.htm'\) "Glossary Entry") is called. ICF-independent tests can be run for the class: In its [test include](javascript:call_link\('abentest_include_glosry.htm'\) "Glossary Entry"), local classes are declared as test doubles for the classes of ICF, which are implemented by the following interfaces:

CLASS mock\_server DEFINITION FOR TESTING FINAL.
  PUBLIC SECTION.
    INTERFACES if\_http\_server PARTIALLY IMPLEMENTED.
ENDCLASS.
CLASS mock\_server IMPLEMENTATION.
ENDCLASS.
CLASS mock\_request DEFINITION FOR TESTING FINAL.
  PUBLIC SECTION.
    INTERFACES if\_http\_request PARTIALLY IMPLEMENTED.
ENDCLASS.
CLASS mock\_request IMPLEMENTATION.
  METHOD if\_http\_request~get\_form\_field.
    value = SWITCH spfli-carrid( name WHEN 'carrid' THEN 'LH'
                                      ELSE space ) ##no\_text.
  ENDMETHOD.
ENDCLASS.
CLASS mock\_response DEFINITION FOR TESTING FINAL.
  PUBLIC SECTION.
    INTERFACES if\_http\_response PARTIALLY IMPLEMENTED.
    DATA output TYPE string.
ENDCLASS.
CLASS mock\_response IMPLEMENTATION.
  METHOD if\_http\_response~set\_cdata.
    me->output = data.
  ENDMETHOD.
ENDCLASS.

Only the interface methods required to execute tests are implemented. The interfaces have numerous other methods. These methods must not be implemented when empty due to the addition PARTIALLY IMPLEMENTED.

The actual test class looks as follows:

CLASS test\_http\_service DEFINITION FOR TESTING
                        DURATION SHORT
                        RISK LEVEL HARMLESS
                        FINAL.
  PRIVATE SECTION.
    DATA mock\_request  TYPE REF TO mock\_request.
    DATA mock\_response TYPE REF TO mock\_response.
    DATA mock\_server   TYPE REF TO mock\_server.
    DATA handler  TYPE REF TO cl\_http\_ext\_service\_demo.
    METHODS test\_service FOR TESTING.
ENDCLASS.
CLASS test\_http\_service IMPLEMENTATION.
  METHOD test\_service.
    CREATE OBJECT mock\_request.
    CREATE OBJECT mock\_response.
    CREATE OBJECT mock\_server.
    CREATE OBJECT handler.
    mock\_server->if\_http\_server~request  = mock\_request.
    mock\_server->if\_http\_server~response = mock\_response.
    handler->if\_http\_extension~handle\_request( mock\_server ).
    IF mock\_response->output NS \`<meta name="Output" content="Data">\`.
      cl\_abap\_unit\_assert=>fail( msg = \`Wrong output data\` ).
    ENDIF.
  ENDMETHOD.
ENDCLASS.

In the test method, ICF is simulated by directly creating objects of the test doubles. The REQUEST test double simulates the form field. The RESPONSE test double contains the result that is checked after the method HANDLER is called for testing.